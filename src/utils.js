// constants
import {
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS
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
 * get subset of array1 based on items existing in array2
 *
 * @param {array<*>} array1
 * @param {array<*>} array2
 * @returns {array<T>}
 */
const arraySubset = (array1, array2) => {
  return array1.filter((item) => {
    return array2.includes(item);
  });
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
 * @param {function} keys.reduce
 * @param {object|ClientRect} source
 * @param {boolean} shouldAlterNaturalKeys=true
 * @returns {object}
 */
const createObjectFromKeys = (keys, source, shouldAlterNaturalKeys = true) => {
  return keys.reduce((target, key) => {
    return {
      ...target,
      [key]: shouldAlterNaturalKeys ? getNaturalDimensionValue(source, key) : source[key]
    };
  }, {});
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
 * get the position and size, and booleans to identify they're
 * intended existence in state
 *
 * @param {array<string>} keys
 * @param {object} currentState
 * @returns {{hasPosition: boolean, hasSize: boolean, position: object, size: object}}
 */
const getValuesProperties = (keys, currentState) => {
  if (isArray(keys)) {
    let position = {},
        size = {},
        hasPosition = false,
        hasSize = false;

    forEach(keys, (key) => {
      if (arrayContains(ALL_POSITION_KEYS, key)) {
        position[key] = currentState[key];
        hasPosition = true;
      } else if (arrayContains(ALL_SIZE_KEYS, key)) {
        size[key] = currentState[key];
        hasSize = true;
      }
    });

    return {
      hasPosition,
      hasSize,
      position,
      size
    };
  }

  const position = createObjectFromKeys(ALL_POSITION_KEYS, currentState, false);
  const size = createObjectFromKeys(ALL_SIZE_KEYS, currentState, false);

  return {
    hasPosition: true,
    hasSize: true,
    position,
    size
  };
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
  const {
    hasPosition,
    hasSize,
    position,
    size
  } = getValuesProperties(keys, currentState);

  let values = {};

  if (hasSize) {
    values[sizeProp] = size;
  }

  if (hasPosition) {
    values[positionProp] = position;
  }

  return values;
};

/**
 * iterate through keys and determine if the values have
 * changed compared to what is stored in state
 *
 * @param {array<string>} keys
 * @param {object} values
 * @param {object} currentState
 * @returns {boolean}
 */
const haveValuesChanged = (keys, values, currentState) => {
  let index = -1,
      key;

  while (++index < keys.length) {
    key = keys[index];

    if (values[key] !== currentState[key]) {
      return true;
    }
  }

  return false;
};

export {arrayContains};
export {arraySubset};
export {createObjectFromKeys};
export {forEach};
export {getNaturalDimensionValue};
export {getValidKeys};
export {getValues};
export {haveValuesChanged};
export {isArray};
export {isObject};
export {isString};
export {isUndefined};
