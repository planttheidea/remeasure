// constants
import {KEY_NAMES, KEYS, FUNCTION_NAME_REGEXP, NATURAL_REGEXP, VOID_ELEMENT_TAG_NAMES} from './constants';

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
  if (Component.displayName) {
    return Component.displayName;
  }

  if (Component.name) {
    return Component.name;
  }

  const match = Component.toString().match(FUNCTION_NAME_REGEXP);

  return (match && match[1]) || 'Component';
};

/**
 * @private
 *
 * @function getMeasureKeys
 *
 * @description
 * based on the passed keys and options, get the keys that will be measured
 *
 * @param {Array<string>|string} keys the keys passed to the decorator
 * @returns {Array<string>} the keys to measure
 */
export const getMeasureKeys = (keys) => {
  if (Array.isArray(keys)) {
    return KEY_NAMES.reduce((validKeys, key) => {
      if (~keys.indexOf(key)) {
        validKeys.push(key);
      }

      return validKeys;
    }, []);
  }

  if (typeof keys === 'string' && ~KEY_NAMES.indexOf(keys)) {
    return [keys];
  }

  return KEY_NAMES;
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
  return source.hasOwnProperty(key) ? source[key] : source[key.replace(NATURAL_REGEXP, 'scroll')];
};

/**
 * @private
 *
 * @function getStateKeys
 *
 * @description
 * get the keys to be used in state
 *
 * @param {Object} props the instance props
 * @returns {Array<Object>} the keys to base the state object off of
 */
export const getStateKeys = (props) => {
  const {
    children: childrenIgnored,
    debounce: debounceIgnored,
    flatten: flattenIgnored,
    inheritedMethods: inheritedMethodsIgnored,
    keys,
    namespace: namespaceIgnored,
    renderOnResize: renderOnResizeIgnored,
    ...specificProperties
  } = props;

  const specificKeys = Array.isArray(keys)
    ? keys
    : Object.keys(specificProperties).filter((property) => {
      return specificProperties[property];
    });

  if (specificKeys.length) {
    return specificKeys.reduce((requestedKeys, key) => {
      const indexOfKey = KEY_NAMES.indexOf(key);

      if (~indexOfKey) {
        requestedKeys.push(KEYS[indexOfKey]);
      }

      return requestedKeys;
    }, []);
  }

  return KEYS;
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
  return !!~VOID_ELEMENT_TAG_NAMES.indexOf(element.tagName);
};
