// external dependencies
import includes from 'lodash/includes';
import isArray from 'lodash/isArray';
import isUndefined from 'lodash/isUndefined';

// constants
import {
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS,
  NATURAL_REGEXP
} from './constants';

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
 * @param {Array<string>} keys
 * @param {function} keys.reduce
 * @param {Object|ClientRect} source
 * @param {boolean} shouldAlterNaturalKeys=true
 * @returns {Object}
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
 * get subset of array1 based on items existing in array2
 *
 * @param {Array<*>} array1
 * @param {Array<*>} array2
 * @returns {Array<T>}
 */
const getArraySubset = (array1, array2) => {
  return array1.filter((item) => {
    return includes(array2, item);
  });
};

/**
 * wait to assign the raf until mount, so it has access to the
 * window object
 *
 * @returns {function}
 */
const getRequestAnimationFrame = () => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
};

/**
 * based on their existence in keysToTestAgainst, determine which of the keys
 * passed are considered valid
 *
 * @param {Array<string>} keys
 * @param {Array<string>} keysToTestAgainst
 * @returns {Array<string>}
 */
const getValidKeys = (keys, keysToTestAgainst) => {
  return keys.filter((key) => {
    return includes(keysToTestAgainst, key);
  });
};

/**
 * get the position and size, and booleans to identify they're
 * intended existence in state
 *
 * @param {Array<string>} keys
 * @param {Object} currentState
 * @returns {{hasPosition: boolean, hasSize: boolean, position: Object, size: Object}}
 */
const getValuesProperties = (keys, currentState) => {
  if (isArray(keys)) {
    let position = {},
        size = {},
        hasPosition = false,
        hasSize = false;

    keys.forEach((key) => {
      if (includes(ALL_POSITION_KEYS, key)) {
        position[key] = currentState[key];
        hasPosition = true;
      } else if (includes(ALL_SIZE_KEYS, key)) {
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
 * @param {Array<string>} keys
 * @param {Object} currentState
 * @param {string} positionProp
 * @param {string} sizeProp
 * @returns {Object}
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
 * @param {Array<string>} keys
 * @param {Object} values
 * @param {Object} currentState
 * @returns {boolean}
 */
const haveValuesChanged = (keys, values, currentState) => {
  return keys.some((key) => {
    return values[key] !== currentState[key];
  });
};

/**
 * based on desiredKeys, build the initialState object
 *
 * @param {Array<string>} allKeys
 * @param {Array<string>} desiredKeys
 * @returns {Array<T>}
 */
const reduceStateToMatchingKeys = (allKeys, desiredKeys) => {
  return allKeys.reduce((accumulatedInitialState, key) => {
    if (includes(desiredKeys, key)) {
      accumulatedInitialState[key] = 0;
    }

    return accumulatedInitialState;
  }, {});
};

export {getArraySubset};
export {createObjectFromKeys};
export {getNaturalDimensionValue};
export {getRequestAnimationFrame};
export {getValidKeys};
export {getValues};
export {haveValuesChanged};
export {reduceStateToMatchingKeys};
