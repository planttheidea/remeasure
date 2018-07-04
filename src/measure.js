// external dependencies
import PropTypes from 'prop-types';
import React, {
  Component,
  PureComponent
} from 'react';
import {createComponent} from 'react-parm';

// classes
import Measured from './Measured';

// constants
import {KEY_NAMES} from './constants';

// utils
import {
  getComponentName,
  getMeasureKeys
} from './utils';

export const createSetOriginalRef = (instance) =>
  /**
   * @private
   *
   * @function setOriginalRef
   *
   * @description
   * set the reference to the original component instance to the instance of the HOC
   *
   * @param {HTMLElement|ReactComponent} component the component instance to assign
   */
  (component) => {
    instance.originalComponent = component;
  };

/**
 * @private
 *
 * @function getMeasuredComponent
 *
 * @description
 * get the measured component class with the ref to get the original component
 *
 * @param {ReactComponent} RenderedComponent the component to render
 * @returns {ReactComponent} the measured component rendering RenderedComponent
 */
export const getMeasuredComponent = (RenderedComponent) => {
  const componentPrototype = Object.getPrototypeOf(RenderedComponent);
  const shouldSetRef = componentPrototype === Component || componentPrototype === PureComponent;

  const MeasuredComponent = createComponent(({_measuredComponentChildren, _measuredComponentRef, ...props}) => (
    // eslint workaround
    <RenderedComponent
      children={_measuredComponentChildren}
      ref={shouldSetRef ? _measuredComponentRef : null}
      {...props}
    />
  ));

  MeasuredComponent.displayName = `Measured(${getComponentName(RenderedComponent)})`;

  MeasuredComponent.propTypes = {
    _measuredComponentChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    _measuredComponentRef: PropTypes.func.isRequired,
  };

  return MeasuredComponent;
};

export const setOriginalRef = (instance, [component]) => {
  instance.originalComponent = component;
};

/**
 * @private
 *
 * @function getMeasuredHoc
 *
 * @description
 * get a higher-order component that renders the component passed, injecting the measurements in as props
 *
 * @param {Array<string>} keys the keys to listen for changes to
 * @param {Object} options the options passed
 * @returns {function(ReactComponent): ReactComponent} the decorator that receives the component
 */
export const getMeasuredHoc = (keys, options) => {
  const {children: childrenOptionIgnored, render: renderOptionIgnored, ...restOfOptions} = options;

  return (RenderedComponent) => {
    const component = getMeasuredComponent(RenderedComponent);

    const MeasuredHoc = createComponent(
      ({children, render: renderIgnored, ...props}, {setOriginalRef}) => (
        <Measured
          {...props}
          {...restOfOptions}
          _measuredComponentChildren={children}
          _measuredComponentRef={setOriginalRef}
          component={component}
          keys={keys}
        />
      ),
      {
        setOriginalRef,
      }
    );

    MeasuredHoc.displayName = 'MeasuredHoc';

    MeasuredHoc.propTypes = {
      children: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
      render: PropTypes.func,
    };

    return MeasuredHoc;
  };
};

/**
 * @private
 *
 * @function measure
 *
 * @description
 * based on the keys and options passed, get the measured HOC
 *
 * @param {Array<string>|function|Object|string} passedKeys the keys to listen to, or options, or the component itself
 * @param {Object} [passedOptions={}] the options when creating the measured component
 * @returns {function} the HOC that will render the component passed with measurements injected
 */
const measure = (passedKeys, passedOptions = {}) =>
  typeof passedKeys === 'function'
    ? getMeasuredHoc(KEY_NAMES, passedOptions)(passedKeys)
    : getMeasuredHoc(
      getMeasureKeys(passedKeys),
      passedKeys && passedKeys.constructor === Object ? passedKeys : passedOptions
    );

KEY_NAMES.forEach((key) => {
  measure[key] = (options) => (typeof options === 'function' ? measure([key])(options) : measure([key], options));
});

export {measure};
