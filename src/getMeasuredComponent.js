// external dependencies
import React, {
  Component
} from 'react';
import {
  findDOMNode
} from 'react-dom';

// constants
import {
  DEBOUNCE_VALUE_DEFAULT,
  INHERITED_METHODS_DEFAULT,
  RENDER_ON_RESIZE_DEFAULT
} from './constants';

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

/**
 * @private
 *
 * @function createComponentDidMount
 *
 * @description
 * create the componentDidMount method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<string>} selectedKeys keys to store in state
 * @param {Object} [options={}] options passed to the instance
 * @param {number} [options.debounceValue=DEBOUNCE_VALUE_DEFAULT] value to use for debounce of updates
 * @param {boolean} [options.renderOnResize=RENDER_ON_RESIZE_DEFAULT] should the component rerender on resize
 * @returns {function(): void} componentDidUpdate method
 */
export const createComponentDidMount = (instance, selectedKeys, options = {}) => {
  const {
    debounce: debounceValue = DEBOUNCE_VALUE_DEFAULT,
    renderOnResize = RENDER_ON_RESIZE_DEFAULT
  } = options;

  return () => {
    const element = findDOMNode(instance);

    instance._isMounted = true;

    setElement(instance, element, debounceValue, renderOnResize);

    if (element) {
      updateValuesViaRaf(instance);
    }
  };
};

/**
 * @private
 *
 * @function createComponentDidUpdate
 *
 * @description
 * create the componentDidUpdate method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<string>} selectedKeys keys to store in state
 * @param {Object} [options={}] options passed to the instance
 * @param {number} [options.debounceValue=DEBOUNCE_VALUE_DEFAULT] value to use for debounce of updates
 * @param {boolean} [options.renderOnResize=RENDER_ON_RESIZE_DEFAULT] should the component rerender on resize
 * @returns {function(): void} componentDidUpdate method
 */
export const createComponentDidUpdate = (instance, selectedKeys, options = {}) => {
  const {
    debounce: debounceValue = DEBOUNCE_VALUE_DEFAULT,
    renderOnResize = RENDER_ON_RESIZE_DEFAULT
  } = options;

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

/**
 * @private
 *
 * @function createComponentWillUnmount
 *
 * @description
 * create the componentWillUmount method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<Object>} selectedKeys the keys to assign to state
 * @returns {function(): void} function to reset the instance values to defaults
 */
export const createComponentWillUnmount = (instance, selectedKeys) => {
  return () => {
    instance._isMounted = false;

    instance.setMeasurements(reduceMeasurementsToMatchingKeys(selectedKeys));

    if (instance.element) {
      removeElementResize(instance, instance.element);

      instance.element = null;
    }
  };
};

/**
 * @function createSetMeasurements
 *
 * @description
 * create the method that will assign the measurements synchronously to the instance
 * and then call forceUpdate (done because setState is async)
 *
 * @param {ReactComponent} instance the instance to assign to
 * @returns {function(Object): void} the method that will assign the measurements to the instance
 */
export const createSetMeasurements = (instance) => {
  /**
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

/**
 * @function createSetOriginalRef
 *
 * @description
 * create the method that will assign the original component instance to an instance value of the HOC
 *
 * @param {ReactComponent} instance the instance to assign to
 * @returns {function(Object): void} the method that will assign the original component
 */
export const createSetOriginalRef = (instance) => {
  /**
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
 * @function createUpdateValuesIfChanged
 *
 * @description
 * create the function to get the new values and assign them to state if they have changed
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<string>} selectedKeys keys to store in state
 * @returns {function(): void} function to update the instance state values if they have changed
 */
export const createUpdateValuesIfChanged = (instance, selectedKeys) => {
  return () => {
    const element = instance.element;

    if (element) {
      const values = getElementValues(element, selectedKeys);

      setValuesIfChanged(instance, selectedKeys, values);
    }
  };
};

/**
 * @function getMeasuredComponent
 *
 * @description
 * get the decorator to create a higher-order component that will measure the DOM node and pass the requested
 * size / position attributes as props to the PassedComponent
 *
 * @param {Array<string>} keys the keys to get the size / position of
 * @param {Object} options the additional options passed to the decorator
 * @returns {function} decorator to create the higher-order component
 */
const getMeasuredComponent = (keys, options) => {
  const selectedKeys = getKeysWithSourceAndType(keys, options);
  const {
    inheritedMethods = INHERITED_METHODS_DEFAULT
  } = options;

  return (PassedComponent) => {
    const displayName = getComponentName(PassedComponent);

    class MeasuredComponent extends Component {
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
