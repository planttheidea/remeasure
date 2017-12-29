// external dependencies
import React, {Component, PureComponent} from 'react';
import {findDOMNode} from 'react-dom';

// constants
import {DEFAULT_OPTIONS} from './constants';

// utils
import {
  clearValues,
  getComponentName,
  getElementValues,
  getKeysWithSourceAndType,
  getScopedValues,
  reduceMeasurementsToMatchingKeys,
  removeElementResize,
  setElement,
  setInheritedMethods,
  setValuesIfChanged,
  updateValuesViaRaf
} from './utils';

export const createComponentDidMount = (instance, selectedKeys, options = {}) => {
  const {debounce: debounceValue = DEFAULT_OPTIONS.debounce, renderOnResize = DEFAULT_OPTIONS.renderOnResize} = options;

  /**
   * @private
   *
   * @function componentDidMount
   *
   * @description
   * on mount, set the element and its values
   */
  return () => {
    const element = findDOMNode(instance);

    instance._isMounted = true;

    setElement(instance, element, debounceValue, renderOnResize);

    if (element) {
      updateValuesViaRaf(instance);
    }
  };
};

export const createComponentDidUpdate = (instance, selectedKeys, options = {}) => {
  const {debounce: debounceValue = DEFAULT_OPTIONS.debounce, renderOnResize = DEFAULT_OPTIONS.renderOnResize} = options;

  /**
   * @private
   *
   * @function componentDidUpdate
   *
   * @description
   * on update, set the element if it has changed, and update or clear the values based on its existence
   *
   * @returns {void}
   */
  return () => {
    const element = findDOMNode(instance);

    if (element !== instance.element) {
      setElement(instance, element, debounceValue, renderOnResize);
    }

    if (element) {
      return updateValuesViaRaf(instance);
    }

    clearValues(instance, selectedKeys);
  };
};

export const createComponentWillUnmount = (instance, selectedKeys) => {
  /**
   * @private
   *
   * @function componentWillUnmount
   *
   * @description
   * on unmount, reset all measurements to 0 and remove the resize listener
   */
  return () => {
    instance._isMounted = false;

    instance.setMeasurements(reduceMeasurementsToMatchingKeys(selectedKeys));

    if (instance.element) {
      removeElementResize(instance, instance.element);

      instance.element = null;
    }
  };
};

export const createSetMeasurements = (instance) => {
  /**
   * @private
   *
   * @function setMeasurements
   *
   * @description
   * set the measurements synchronously to the instance value and then call forceUpdate if mounted
   *
   * @param {Object} measurements the measurements to assign to the instance
   */
  return (measurements) => {
    instance.measurements = measurements;

    if (instance._isMounted) {
      instance.forceUpdate();
    }
  };
};

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

export const createUpdateValuesIfChanged = (instance, selectedKeys) => {
  /**
   * @private
   *
   * @function updateValuesIfChanged
   *
   * @description
   * get the new values and assign them to state if they have changed
   */
  return () => {
    if (instance.element) {
      setValuesIfChanged(instance, selectedKeys, getElementValues(instance.element, selectedKeys));
    }
  };
};

/**
 * @private
 *
 * @function getMeasuredComponent
 *
 * @description
 * get the decorator to create a higher-order component that will measure the DOM node and pass the requested
 * size / position attributes as props to the PassedComponent
 *
 * @param {Array<string>} keys the keys to get the size / position of
 * @param {Object} options the additional options passed to the decorator
 * @returns {function(ReactComponent): ReactComponent} decorator to create the higher-order component
 */
const getMeasuredComponent = (keys, options) => {
  const selectedKeys = getKeysWithSourceAndType(keys, options);
  const {inheritedMethods = [], isPure = false} = options;

  return (PassedComponent) => {
    const passedComponentPrototype = Object.getPrototypeOf(PassedComponent);
    const isPureComponent = passedComponentPrototype === PureComponent;
    const shouldApplyRef = isPureComponent || passedComponentPrototype === Component;

    const ComponentToExtend = isPure || isPureComponent ? PureComponent : Component;
    const displayName = getComponentName(PassedComponent);

    class MeasuredComponent extends ComponentToExtend {
      static displayName = `Measured(${displayName})`;

      constructor(props) {
        super(props);

        if (inheritedMethods.length) {
          setInheritedMethods(this, inheritedMethods);
        }
      }

      // lifecycle methods
      componentDidMount = createComponentDidMount(this, selectedKeys, options);
      componentDidUpdate = createComponentDidUpdate(this, selectedKeys, options);
      componentWillUnmount = createComponentWillUnmount(this, selectedKeys);
      setOriginalRef = createSetOriginalRef(this);

      // instance variables
      _isMounted = false;
      element = null;
      originalComponent = null;
      hasResize = null;
      measurements = reduceMeasurementsToMatchingKeys(selectedKeys);

      // instance methods
      setMeasurements = createSetMeasurements(this);
      updateValuesIfChanged = createUpdateValuesIfChanged(this, selectedKeys);

      render() {
        return (
          <PassedComponent
            ref={shouldApplyRef ? this.setOriginalRef : null}
            {...this.props}
            {...getScopedValues(this.measurements, selectedKeys, options)}
          />
        );
      }
    }

    return MeasuredComponent;
  };
};

export default getMeasuredComponent;
