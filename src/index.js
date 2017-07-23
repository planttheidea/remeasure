// external dependencies
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

// constants
import {
  ALL_KEYS
} from './constants';

// component
import getMeasuredComponent from './getMeasuredComponent';

// utils
import {
  createFlattenConvenienceFunction,
  getKeysFromStringKey,
  getValidKeys
} from './utils';

/**
 * @module remeasure
 */

/**
 * @function measure
 *
 * @description
 * create higher-order component that injects size and position properties
 * into OriginalComponent as an object under the prop name size and position
 *
 * @param {ReactComponent|Array<string>|Object|string} passedKeys if used without parameters, the component that will be
 * measured, else either single key or array of keys to watch for measurement, or an object of options
 * @param {Object} [passedOptions={}] an object of options to apply for measuring
 * @returns {ReactComponent} the higher-order component that will measure the child and pass down size and
 *
 * position values as props
 */
const measure = (passedKeys, passedOptions = {}) => {
  if (isFunction(passedKeys)) {
    return getMeasuredComponent(ALL_KEYS, passedOptions)(passedKeys);
  }

  const isKeysObject = isPlainObject(passedKeys);
  const options = {
    ...(isKeysObject ? passedKeys : passedOptions)
  };

  if (isKeysObject) {
    return getMeasuredComponent(ALL_KEYS, passedKeys);
  }

  let keys;

  if (isArray(passedKeys)) {
    keys = getValidKeys(passedKeys, ALL_KEYS);
  } else if (isString(passedKeys)) {
    keys = getKeysFromStringKey(passedKeys, options);
  } else {
    keys = ALL_KEYS;
  }

  return getMeasuredComponent(keys, options);
};

ALL_KEYS.forEach((key) => {
  measure[key] = createFlattenConvenienceFunction(measure, key);
});

export default measure;
