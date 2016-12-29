// external dependencies
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

// constants
import {
  ALL_KEYS,
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS,
  POSITION_PROP_DEFAULT,
  SIZE_PROP_DEFAULT
} from './constants';

// component
import getMeasuredComponent from './getMeasuredComponent';

// utils
import {
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
 * @param {Component|Array<string>|Object} passedKeys if used without parameters, the component that will be
 * measured, else either an array of keys to watch for measurement or an object of options
 * @param {Object} [passedOptions={}] an object of options to apply for measuring
 * @returns {MeasuredComponent} the higher-order component that will measure the child and pass down size and
 * position values as props
 */
const measure = (passedKeys, passedOptions = {}) => {
  if (isFunction(passedKeys)) {
    return getMeasuredComponent(ALL_KEYS, passedOptions)(passedKeys);
  }

  const isKeysObject = isPlainObject(passedKeys);
  const options = isKeysObject ? {...passedKeys} : {...passedOptions};

  if (isKeysObject) {
    return getMeasuredComponent(ALL_KEYS, passedKeys);
  }

  if (isArray(passedKeys)) {
    const keys = getValidKeys(passedKeys, ALL_KEYS);

    return getMeasuredComponent(keys, options);
  }

  if (isString(passedKeys)) {
    const {
      positionProp = POSITION_PROP_DEFAULT,
      sizeProp = SIZE_PROP_DEFAULT
    } = options;

    let keys;

    if (passedKeys === positionProp) {
      keys = ALL_POSITION_KEYS;
    } else if (passedKeys === sizeProp) {
      keys = ALL_SIZE_KEYS;
    } else {
      keys = [passedKeys];
    }

    return getMeasuredComponent(keys, options);
  }

  throw new TypeError('You did not pass the correct object type for the measure decorator.');
};

export default measure;
