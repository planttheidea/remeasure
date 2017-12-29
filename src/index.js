// external dependencies
import PropTypes from 'prop-types';

// constants
import {ALL_KEYS, OPTIONS_SHAPE} from './constants';

// component
import getMeasuredComponent from './getMeasuredComponent';

// utils
import {createFlattenConvenienceFunction, getMeasuredKeys} from './utils';

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
  if (typeof passedKeys === 'function') {
    return getMeasuredComponent(ALL_KEYS, passedOptions)(passedKeys);
  }

  const options = passedKeys && passedKeys.constructor === Object ? {...passedKeys} : {...passedOptions};

  PropTypes.checkPropTypes(OPTIONS_SHAPE, options, 'property', 'options');

  return getMeasuredComponent(getMeasuredKeys(passedKeys, options), options);
};

ALL_KEYS.forEach((key) => {
  measure[key] = createFlattenConvenienceFunction(measure, key);
});

measure.flatten = (passedKeys, passedOptions = {}) => {
  const isKeysOptions = passedKeys && passedKeys.constructor === Object;
  const keys = isKeysOptions ? undefined : passedKeys;
  const options = isKeysOptions ? {...passedKeys} : {...passedOptions};

  return measure(keys, {
    ...options,
    flatten: true
  });
};

export default measure;
