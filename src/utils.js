// external dependencies
import onElementResize from 'element-resize-event';
import debounce from 'lodash/debounce';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import isFunction from 'lodash/isFunction';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import raf from 'raf';
import {
  findDOMNode
} from 'react-dom';

// constants
import {
  ALL_BOUNDING_CLIENT_RECT_KEYS,
  ALL_DOM_ELEMENT_KEYS,
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS,
  CLIENT_RECT_TYPE,
  DEBOUNCE_VALUE_DEFAULT,
  DEFAULT_INSTANCE_ELEMENT_VALUE,
  DEFAULT_INSTANCE_HAS_RESIZE_VALUE,
  DEFAULT_INSTANCE_MOUNTED_VALUE,
  ELEMENT_TYPE,
  NATURAL_REGEXP,
  POSITION_PROP_DEFAULT,
  RENDER_ON_RESIZE_DEFAULT,
  SIZE_PROP_DEFAULT,
  VOID_ELEMENT_TAG_NAMES
} from './constants';

/**
 * @private
 *
 * @function getComponentName
 *
 * @description
 * get the name of the component from displayName, the internal name, or fallback
 *
 * @param {Component} Component component to get the display name from
 * @returns {string} Component name
 */
export const getComponentName = (Component) => {
  return Component.displayName || Component.name || 'Component';
};

/**
 * @private
 *
 * @function haveValuesChanged
 *
 * @description
 * iterate through keys and determine if the values have
 * changed compared to what is stored in state
 *
 * @param {Array<Object>} keys keys to get from the state
 * @param {Object} values the new values to test
 * @param {Object} currentState the current values in state
 * @returns {boolean} have any of the keys changed
 */
export const haveValuesChanged = (keys, values, currentState) => {
  return some(keys, ({key}) => {
    return values[key] !== currentState[key];
  });
};

/**
 * @private
 *
 * @function setValuesIfChanged
 *
 * @description
 * if the values have changed and the instance is mounted then set the values in state
 *
 * @param {MeasuredComponent} instance component instance
 * @param {function} instance.setState setState method of instance component
 * @param {Array<string>} keys keys to store in state
 * @param {Object} values updated values to store in state
 */
export const setValuesIfChanged = (instance, keys, values) => {
  if (haveValuesChanged(keys, values, instance.state) && instance.mounted) {
    instance.setState(values);
  }
};

/**
 * @private
 *
 * @function reduceStateToMatchingKeys
 *
 * @description
 * based on desiredKeys, build the initialState object
 *
 * @param {Array<string>} keys the keys requested from the decorator
 * @returns {Array<T>} the object of key: 0 default values
 */
export const reduceStateToMatchingKeys = (keys) => {
  return reduce(keys, (accumulatedInitialState, {key}) => {
    accumulatedInitialState[key] = 0;

    return accumulatedInitialState;
  }, {});
};

/**
 * @private
 *
 * @function clearValues
 *
 * @description
 * create function to reset all values to 0 if there is no element present
 *
 * @param {MeasuredComponent} instance component instance
 * @param {function} instance.setState setState method of instance component
 * @param {Array<string>} selectedKeys keys to store in state
 */
export const clearValues = (instance, selectedKeys) => {
  const emptyValues = reduceStateToMatchingKeys(selectedKeys);

  setValuesIfChanged(instance, selectedKeys, emptyValues);
};

/**
 * @private
 *
 * @function createUpdateValuesViaDebounce
 *
 * @description
 * create the function to update the values via debounce value
 *
 * @param {MeasuredComponent} instance component instance
 * @param {number} debounceValue debounce value for the instance provided
 * @returns {function(): void} function to update the values after debounce timing has passed
 */
export const createUpdateValuesViaDebounce = (instance, debounceValue) => {
  return debounce(() => {
    if (instance.element) {
      instance.updateValuesIfChanged();
    }
  }, debounceValue);
};

/**
 * @private
 *
 * @function createUpdateValuesViaRaf
 *
 * @description
 * create the function to update the values via requestAnimationFrame
 *
 * @param {MeasuredComponent} instance component instance
 */
export const updateValuesViaRaf = (instance) => {
  if (instance.element) {
    raf(instance.updateValuesIfChanged);
  }
};

/**
 * @private
 *
 * @function isElementVoidTag
 *
 * @description
 * is the element passed a void tag name
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
export const isElementVoidTag = (element) => {
  return includes(VOID_ELEMENT_TAG_NAMES, element.tagName.toUpperCase());
};

/**
 * @private
 *
 * @function setElementResize
 *
 * @description
 * create the function to assign the onResize listener to the element
 *
 * @param {MeasuredComponent} instance component instance
 * @param {number} debounceValue debounce value for the instance provided
 */
export const setElementResize = (instance, debounceValue) => {
  const element = instance.element;

  if (element && !isElementVoidTag(element)) {
    const resizeFn = debounceValue ?
      createUpdateValuesViaDebounce(instance, debounceValue) :
      updateValuesViaRaf.bind(null, instance);

    onElementResize(element, resizeFn);

    instance.hasResize = true;
  }
};

/**
 * @private
 *
 * @function setElement
 *
 * @description
 * assign the element to the instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {HTMLElement|null} element element to assign to instance
 * @param {number} debounceValue debounce value for the instance provided
 * @param {boolean} renderOnResize should the component rerender on resize
 */
export const setElement = (instance, element, debounceValue, renderOnResize) => {
  instance.element = element;

  if (element) {
    if (renderOnResize && !instance.hasResize) {
      setElementResize(instance, debounceValue);
    }
  } else {
    instance.hasResize = false;
  }
};

/**
 * @private
 *
 * @function createRemoveInstanceElement
 *
 * @description
 * reset instance values to their original state
 *
 * @param {MeasuredComponent} instance component instance
 * @returns {function(): void} function to reset the instance values to defaults
 */
export const createRemoveInstanceElement = (instance) => {
  return () => {
    instance.element = DEFAULT_INSTANCE_ELEMENT_VALUE;
    instance.hasResize = DEFAULT_INSTANCE_HAS_RESIZE_VALUE;
    instance.mounted = DEFAULT_INSTANCE_MOUNTED_VALUE;
  };
};

/**
 * @private
 *
 * @function createSetInstanceElement
 *
 * @description
 * create the componentDidUpdate method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<string>} selectedKeys keys to store in state
 * @param {Object} [options={}] options passed to the instance
 * @param {number} [options.debounceValue=DEBOUNCE_VALUE_DEFAULT] value to use for debounce of updates
 * @param {boolean} [options.renderOnResize=RENDER_ON_RESIZE_DEFAULT] should the component rerender on resize
 * @param {boolean} [shouldMount=false] if the method should set mounted to true
 * @returns {function(): void} componentDidUpdate method
 */
export const createSetInstanceElement = (instance, selectedKeys, options = {}, shouldMount = false) => {
  const {
    debounce: debounceValue = DEBOUNCE_VALUE_DEFAULT,
    renderOnResize = RENDER_ON_RESIZE_DEFAULT
  } = options;

  return () => {
    const element = findDOMNode(instance);

    if (shouldMount) {
      instance.mounted = true;
    }

    setElement(instance, element, debounceValue, renderOnResize);

    if (element) {
      updateValuesViaRaf(instance);

      if (renderOnResize && !instance.hasResize) {
        setElementResize(instance, debounceValue);
      }
    } else {
      clearValues(instance, selectedKeys);
    }
  };
};

/**
 * @private
 *
 * @function createIsKeyType
 *
 * @description
 * create a key type checker function
 *
 * @param {Array<string>} typeArray
 * @returns {function(string): boolean}
 */
export const createIsKeyType = (typeArray) => {
  return (key) => {
    return includes(typeArray, key);
  };
};

/**
 * @private
 *
 * @function createFlattenConvenienceFunction
 *
 * @description
 * create a convenience function that will flatten the values returned (specific to property if passed)
 *
 * @param {function} measure main measure function to get the decorator from
 * @param {string} property specific property to build convenience function for
 * @returns {function((function|Object), Object): function} decorator with flatten added as option
 */
export const createFlattenConvenienceFunction = (measure, property) => {
  return (component, options = {}) => {
    const isComponentFunction = isFunction(component);
    const decoratorOptions = isComponentFunction ? options : component;
    const decorator = measure(property, {
      ...decoratorOptions,
      flatten: true
    });

    return isComponentFunction ? decorator(component) : decorator;
  };
};

/**
 * @private
 *
 * @function getScopedValues
 *
 * @description
 * based on the keys passed, create an object with either position
 * or size or both properties that are objects containing the respective
 * values for the associated keys
 *
 * @param {Object} values values to reduce by type
 * @param {Array<string>} keys the keys to assign to scopedValues
 * @param {boolean} flatten should the object be flat or not
 * @returns {Object} reduced scoped values
 */
export const getScopedValues = (values, keys, {flatten}) => {
  return flatten ? values : reduce(keys, (scopedValues, {key, type}) => {
    if (!scopedValues[type]) {
      scopedValues[type] = {};
    }

    scopedValues[type][key] = values[key];

    return scopedValues;
  }, {});
};

/**
 * @private
 *
 * @function getNaturalDimensionValue
 *
 * @description
 * For naturalHeight and naturalWidth, coalesce the values
 * with scrollHeight and scrollWIdth if the element does not
 * natively support it
 *
 * @param {HTMLElement} source the element to get the size / position value from
 * @param {string} key the size / position value to retrieve from source
 * @returns {number}
 */
export const getNaturalDimensionValue = (source, key) => {
  const value = source[key];

  return isUndefined(value) ? source[key.replace(NATURAL_REGEXP, 'scroll')] : value;
};

/**
 * @private
 *
 * @function getElementValues
 *
 * @description
 * get the values of the element or its bounding client rect
 *
 * @param {HTMLElement} element
 * @param {Array<Object>} keys
 * @returns {Object}
 */
export const getElementValues = (element, keys) => {
  const boundingClientRect = element.getBoundingClientRect();

  return reduce(keys, (values, {key, source}) => {
    values[key] = source === CLIENT_RECT_TYPE ? boundingClientRect[key] : getNaturalDimensionValue(element, key);

    return values;
  }, {});
};

/**
 * @private
 *
 * @function createUpdateValuesIfChanged
 *
 * @description
 * create the function to get the new values and assign them to state if they have changed
 *
 * @param {MeasuredComponent} instance component instance
 * @param {function} instance.setState setState method of instance component
 * @param {Array<string>} selectedKeys keys to store in state
 * @returns {function(): void} function to update the instance state values if they have changed
 */
export const createUpdateValuesIfChanged = (instance, selectedKeys) => {
  return () => {
    const element = instance.element;

    if (element) {
      const values = getElementValues(element, selectedKeys);

      setValuesIfChanged(instance, selectedKeys, values);
    }
  };
};

/**
 * @private
 *
 * @function getPropKeyNames
 *
 * @description
 * get the positionProp and sizeProp properties from options with defaults applied
 *
 * @param {string} [positionProp=POSITION_PROP_DEFAULT] position property name
 * @param {string} [sizeProp=SIZE_PROP_DEFAULT] size property name
 * @returns {{positionProp, sizeProp}} object of positionProp and sizeProp
 */
export const getPropKeyNames = ({positionProp = POSITION_PROP_DEFAULT, sizeProp = SIZE_PROP_DEFAULT}) => {
  return {
    positionProp,
    sizeProp
  };
};

/**
 * @private
 *
 * @function isPositionKey
 *
 * @description
 * is the key passed a position key
 *
 * @param {string} key
 * @returns {boolean}
 */
export const isPositionKey = createIsKeyType(ALL_POSITION_KEYS);

/**
 * @private
 *
 * @function isSizeKey
 *
 * @description
 * is the key passed a size key
 *
 * @param {string} key
 * @returns {boolean}
 */
export const isSizeKey = createIsKeyType(ALL_SIZE_KEYS);

/**
 * @private
 *
 * @function getKeyType
 *
 * @description
 * get the type (position or size) of the key passed
 *
 * @param {string} key
 * @param {string} positionProp
 * @param {string} sizeProp
 * @returns {string}
 */
export const getKeyType = (key, {positionProp, sizeProp}) => {
  if (isPositionKey(key)) {
    return positionProp;
  }

  if (isSizeKey(key)) {
    return sizeProp;
  }

  return null;
};

/**
 * @private
 *
 * @function getKeysFromStringKey
 *
 * @description
 * get the keys to store in state based on the key and options passed
 *
 * @param {string} key string key passed to decorator
 * @param {string} [positionProp=POSITION_PROP_DEFAULT] name of position property requested in options
 * @param {string} [sizeProp=SIZE_PROP_DEFAULT] name of position property requested in options
 * @returns {Array<string>} keys to store in state
 */
export const getKeysFromStringKey = (key, {positionProp = POSITION_PROP_DEFAULT, sizeProp = SIZE_PROP_DEFAULT}) => {
  if (key === positionProp) {
    return ALL_POSITION_KEYS;
  }

  if (key === sizeProp) {
    return ALL_SIZE_KEYS;
  }

  return [key];
};

/**
 * @private
 *
 * @function getKeysSubsetWithType
 *
 * @description
 * get subset of array1 based on items existing in array2
 *
 * @param {Array<*>} sourceArray the array to filter
 * @param {Array<*>} valuesToExtract the array to find matches in
 * @param {string} source the source of the value the key relates to
 * @param {{positionProp: string, sizeProp: string}} propTypes the names of the scope categories
 * @returns {Array<T>} the resulting array of matching values from array1 and array2
 */
export const getKeysSubsetWithType = (sourceArray, valuesToExtract, source, propTypes) => {
  return reduce(sourceArray, (valuesWithTypes, key) => {
    if (includes(valuesToExtract, key)) {
      const type = getKeyType(key, propTypes);

      if (!isNull(type)) {
        valuesWithTypes.push({
          key,
          source,
          type
        });
      }
    }

    return valuesWithTypes;
  }, []);
};

/**
 * @private
 *
 * @function getKeysWithSourceAndType
 *
 * @description
 * get the keys with mapped source (rect or element) and type (position or size)
 *
 * @param {Array<string>} keys keys to return mapped values for
 * @param {Object} options options passed to instance
 * @returns {Array<{key: string, source: string, type: string}>} keys with source and type mapped
 */
export const getKeysWithSourceAndType = (keys, options) => {
  const propKeyNames = getPropKeyNames(options);

  return [
    ...getKeysSubsetWithType(ALL_BOUNDING_CLIENT_RECT_KEYS, keys, CLIENT_RECT_TYPE, propKeyNames),
    ...getKeysSubsetWithType(ALL_DOM_ELEMENT_KEYS, keys, ELEMENT_TYPE, propKeyNames)
  ];
};

/**
 * @private
 *
 * @description
 * based on their existence in keysToTestAgainst, determine which of the keys
 * passed are considered valid
 *
 * @param {Array<string>} keys the keys to test
 * @param {Array<string>} keysToTestAgainst the keys to find matches from
 * @returns {Array<string>} the resulting matching key set
 */
export const getValidKeys = (keys, keysToTestAgainst) => {
  return filter(keys, (key) => {
    return includes(keysToTestAgainst, key);
  });
};
