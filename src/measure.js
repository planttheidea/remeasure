// external dependencies
import PropTypes from 'prop-types';
import React, {Component, PureComponent} from 'react';

// classes
import Measured from './Measured';

// constants
import {KEY_NAMES} from './constants';

// utils
import {getComponentName, getMeasureKeys} from './utils';

export const createSetOriginalRef = (instance) => {
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
  return (component) => {
    instance.originalComponent = component;
  };
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

  return class MeasuredComponent extends Component {
    static displayName = `Measured(${getComponentName(RenderedComponent)})`;

    static propTypes = {
      _measuredComponentChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
      _measuredComponentRef: PropTypes.func.isRequired
    };

    render() {
      const {_measuredComponentChildren, _measuredComponentRef, ...props} = this.props;

      return (
        /* eslint-disable prettier */
        <RenderedComponent
          children={_measuredComponentChildren}
          ref={shouldSetRef ? _measuredComponentRef : null}
          {...props}
        />
        /* eslint-enable */
      );
    }
  };
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

    return class MeasuredHoc extends Component {
      static displayName = 'MeasuredHoc';

      static propTypes = {
        children: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
        render: PropTypes.func
      };

      // instance values
      originalComponent = null;

      // instance methods
      setOriginalRef = createSetOriginalRef(this);

      render() {
        const {children, render: renderIgnored, ...props} = this.props;

        return (
          <Measured
            {...props}
            {...restOfOptions}
            _measuredComponentChildren={children}
            _measuredComponentRef={this.setOriginalRef}
            component={component}
            keys={keys}
          />
        );
      }
    };
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
const measure = (passedKeys, passedOptions = {}) => {
  return typeof passedKeys === 'function'
    ? getMeasuredHoc(KEY_NAMES, passedOptions)(passedKeys)
    : getMeasuredHoc(
      getMeasureKeys(passedKeys),
      passedKeys && passedKeys.constructor === Object ? passedKeys : passedOptions
    );
};

KEY_NAMES.forEach((key) => {
  measure[key] = (options) => {
    return measure([key], options);
  };
});

export {measure};
