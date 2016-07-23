// constants
import {
  allPositionKeys,
  allSizeKeys
} from './constants';

const NATURAL_REGEXP = /natural/;

/**
 * get the toString value for the object
 *
 * @param {any} object
 * @returns {string}
 */
const toString = (object) => {
  return Object.prototype.toString.call(object);
};

/**
 * loop over array, executing fn
 *
 * @param {array<any>} array
 * @param {function} fn
 */
const forEach = (array, fn) => {
  const length = array.length;

  let index = -1;

  while (++index < length) {
    fn(array[index], index, array);
  }
};

/**
 * determine if object is an array
 *
 * @param {any} object
 * @returns {boolean}
 */
const isArray = (object) => {
  return toString(object) === '[object Array]';
};

/**
 * determine if object is an object
 *
 * @param {any} object
 * @returns {boolean}
 */
const isObject = (object) => {
  return toString(object) === '[object Object]' && !!object;
};

/**
 * determine if object is a string
 *
 * @param {any} object
 * @returns {boolean}
 */
const isString = (object) => {
  return toString(object) === '[object String]';
};

/**
 * determine if object is undefined
 *
 * @param {any} object
 * @returns {boolean}
 */
const isUndefined = (object) => {
  return object === void 0;
};

/**
 * For naturalHeight and naturalWidth, coalesce the values
 * with scrollHeight and scrollWIdth if the element does not
 * natively support it
 *
 * @param {HTMLElement} source
 * @param {string} key
 * @returns {number}
 */
const getNaturalDimensionValue = (source, key) => {
  if (isUndefined(source[key])) {
    return source[key.replace(NATURAL_REGEXP, 'scroll')];
  }

  return source[key];
};

/**
 * create an object based on the keys passed and their value
 * in the source object
 *
 * @param {array<string>} keys
 * @param {object|ClientRect} source
 * @returns {object}
 */
const createObjectFromKeys = (keys, source) => {
  let target = {};

  forEach(keys, (key) => {
    target[key] = NATURAL_REGEXP.test(key) ? getNaturalDimensionValue(source, key) : source[key];
  });

  return target;
};

/**
 * determine if array contains item at one of the indices
 *
 * @param {array<any>} array
 * @param {any} item
 * @returns {boolean}
 */
const arrayContains = (array, item) => {
  return isArray(array) && !!~array.indexOf(item);
};

/**
 * based on their existence in keysToTestAgainst, determine which of the keys
 * passed are considered valid
 *
 * @param {array<string>} keys
 * @param {array<string>} keysToTestAgainst
 * @returns {array<string>}
 */
const getValidKeys = (keys, keysToTestAgainst) => {
  let validKeys = [];

  forEach(keys, (key) => {
    if (arrayContains(keysToTestAgainst, key)) {
      validKeys.push(key);
    }
  });

  return validKeys;
};

/**
 * based on the keys passed, create an object with either position
 * or size or both properties that are objects containing the respective
 * values for the associated keys
 *
 * @param {array<string>} keys
 * @param {object} currentState
 * @param {string} positionProp
 * @param {string} sizeProp
 * @returns {object}
 */
const getValues = (keys, currentState, {positionProp, sizeProp}) => {
  let hasSize = false,
      hasPosition = false,
      size,
      position;

  if (isArray(keys)) {
    forEach(keys, (key) => {
      if (arrayContains(allPositionKeys, key)) {
        if (!position) {
          position = {};
        }

        position[key] = currentState[key];
        hasPosition = true;
      }

      if (arrayContains(allSizeKeys, key)) {
        if (!size) {
          size = {};
        }

        size[key] = currentState[key];
        hasSize = true;
      }
    });
  } else {
    size = {};
    position = {};
    hasSize = true;
    hasPosition = true;

    forEach(allPositionKeys, (key) => {
      position[key] = currentState[key];
    });

    forEach(allSizeKeys, (key) => {
      size[key] = currentState[key];
    });
  }

  let values = {};

  if (hasSize) {
    values[sizeProp] = size;
  }

  if (hasPosition) {
    values[positionProp] = position;
  }

  return values;
};

export {arrayContains};
export {createObjectFromKeys};
export {forEach};
export {getNaturalDimensionValue};
export {getValidKeys};
export {getValues};
export {isArray};
export {isObject};
export {isString};
export {isUndefined};
