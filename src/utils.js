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
const getNaturalDimensionValue = (source, key) => {
  if (isUndefined(source[key])) {
    return source[key.replace(NATURAL_REGEXP, 'scroll')];
  }

  return source[key];
};

/**
 * @private
 *
 * @function createObjectFromKeys
 *
 * @description
 * create an object based on the keys passed and their value
 * in the source object
 *
 * @param {Array<string>} keys the keys to produce the object from
 * @param {Object|ClientRect} source the source element to retrieve the values from
 * @param {boolean} [shouldAlterNaturalKeys=true] whether to alter the natural keys or not
 * @returns {Object} the object of key: value pairs produced from the keys
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
 * @private
 *
 * @function getArraySubset
 *
 * @description
 * get subset of array1 based on items existing in array2
 *
 * @param {Array<*>} array1 the array to filter
 * @param {Array<*>} array2 the array to find matches in
 * @returns {Array<T>} the resulting array of matching values from array1 and array2
 */
const getArraySubset = (array1, array2) => {
  return array1.filter((item) => {
    return includes(array2, item);
  });
};

/**
 * @private
 *
 * @description
 * wait to assign the raf until mount, so it has access to the
 * window object
 *
 * @returns {function} the polyfilled requestAnimationFrame method
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
const getValidKeys = (keys, keysToTestAgainst) => {
  return keys.filter((key) => {
    return includes(keysToTestAgainst, key);
  });
};

/**
 * @private
 *
 * @description
 * get the position and size, and booleans to identify they're
 * intended existence in state
 *
 * @param {Array<string>} keys the keys to get the values from the state with
 * @param {Object} currentState the state to get the values from
 * @returns {{hasPosition: boolean, hasSize: boolean, position: Object, size: Object}} the state object matching
 * the keys passed
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

/* eslint-disable valid-jsdoc */
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
 * @param {Object} currentState state object of size / position properties
 * @param {string} positionProp the name of the property associated with position values
 * @param {string} sizeProp the name of the property associated with size values
 * @param {boolean} isFlattened are the props passed a flattened object or not
 * @returns {Object} the values to pass down as props
 */
/* eslint-enabled */
const getValues = (keys, currentState, {positionProp, sizeProp}, isFlattened) => {
  const {
    hasPosition,
    hasSize,
    position,
    size
  } = getValuesProperties(keys, currentState);

  let values = {};

  if (isFlattened) {
    return {
      ...(hasSize ? size : null),
      ...(hasPosition ? position : null)
    };
  }

  if (hasSize) {
    values[sizeProp] = size;
  }

  if (hasPosition) {
    values[positionProp] = position;
  }

  return values;
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
 * @param {Array<string>} keys keys to get from the state
 * @param {Object} values the new values to test
 * @param {Object} currentState the current values in state
 * @returns {boolean} have any of the keys changed
 */
const haveValuesChanged = (keys, values, currentState) => {
  return keys.some((key) => {
    return values[key] !== currentState[key];
  });
};

/**
 * @private
 *
 * @function reduceStateToMatchingKeys
 *
 * @description
 * based on desiredKeys, build the initialState object
 *
 * @param {Array<string>} allKeys all the keys that are possible
 * @param {Array<string>} desiredKeys the keys requested from the decorator
 * @returns {Array<T>} the object of key: 0 default values
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
