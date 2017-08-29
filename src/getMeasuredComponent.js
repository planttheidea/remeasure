// external dependencies
import React, {Component, PureComponent} from 'react';
import {findDOMNode} from 'react-dom';

// constants
import {DEBOUNCE_VALUE_DEFAULT, RENDER_ON_RESIZE_DEFAULT} from './constants';

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
  const {debounce: debounceValue = DEBOUNCE_VALUE_DEFAULT, renderOnResize = RENDER_ON_RESIZE_DEFAULT} = options;

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
  const {debounce: debounceValue = DEBOUNCE_VALUE_DEFAULT, renderOnResize = RENDER_ON_RESIZE_DEFAULT} = options;

  /**
   * @private
   *
   * @function componentDidUpdate
   *
   * @description
   * on update, set the element if it has changed, and update or clear the values based on its existence
   */
  return () => {
    const element = findDOMNode(instance);

    if (element !== instance.element) {
      setElement(instance, element, debounceValue, renderOnResize);
    }

    if (element) {
      updateValuesViaRaf(instance);
    } else {
      clearValues(instance, selectedKeys);
    }
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
    const element = instance.element;

    if (element) {
      const values = getElementValues(element, selectedKeys);

      setValuesIfChanged(instance, selectedKeys, values);
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
  const {inheritedMethods = []} = options;

  return (PassedComponent) => {
    const ComponentToExtend = Object.getPrototypeOf(PassedComponent) === PureComponent ? PureComponent : Component;
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
            ref={this.setOriginalRef}
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
