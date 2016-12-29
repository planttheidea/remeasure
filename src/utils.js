// external dependencies
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

// constants
import {
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS,
  CLIENT_RECT_TYPE,
  NATURAL_REGEXP,
  VOID_ELEMENT_TAG_NAMES
} from './constants';

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
    return !!~typeArray.indexOf(key);
  };
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
    values[key] = source === CLIENT_RECT_TYPE ?
      boundingClientRect[key] :
      getNaturalDimensionValue(element, key);

    return values;
  }, {});
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
 * @function getValues
 *
 * @description
 * based on the keys passed, create an object with either position
 * or size or both properties that are objects containing the respective
 * values for the associated keys
 *
 * @param {Array<string>} keys keys to associate in state
 * @param {Object} values state object of size / position properties
 * @param {boolean} isFlattened are the props passed a flattened object or not
 * @returns {Object} the values to pass down as props
 */
export const getScopedValues = (keys, values, isFlattened) => {
  if (isFlattened) {
    return values;
  }

  return reduce(keys, (scopedValues, {key, type}) => {
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
