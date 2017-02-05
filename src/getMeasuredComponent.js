// external dependencies
import React, {
  Component
} from 'react';

// constants
import {
  DEFAULT_INSTANCE_ELEMENT_VALUE,
  DEFAULT_INSTANCE_HAS_RESIZE_VALUE,
  DEFAULT_INSTANCE_MOUNTED_VALUE
} from './constants';

// utils
import {
  createRemoveInstanceElement,
  createSetInstanceElement,
  createGetDOMElement,
  createGetScopedValues,
  createUpdateValuesIfChanged,
  getComponentName,
  getKeysWithSourceAndType,
  reduceStateToMatchingKeys
} from './utils';

const getMeasuredComponent = (keys, options) => {
  const selectedKeys = getKeysWithSourceAndType(keys, options);

  return (PassedComponent) => {
    const displayName = getComponentName(PassedComponent);

    class MeasuredComponent extends Component {
      static displayName = `Measured(${displayName})`;

      state = reduceStateToMatchingKeys(selectedKeys);

      // lifecycle methods
      componentDidMount = createSetInstanceElement(this, selectedKeys, options, true);
      componentDidUpdate = createSetInstanceElement(this, selectedKeys, options);
      componentWillUmount = createRemoveInstanceElement(this);

      // instance variables
      element = DEFAULT_INSTANCE_ELEMENT_VALUE;
      hasResize = DEFAULT_INSTANCE_HAS_RESIZE_VALUE;
      mounted = DEFAULT_INSTANCE_MOUNTED_VALUE;

      // instance methods
      getDOMElement = createGetDOMElement(this);
      getScopedValues = createGetScopedValues();
      updateValuesIfChanged = createUpdateValuesIfChanged(this, selectedKeys);

      render() {
        return (
          <PassedComponent
            {...this.props}
            {...this.getScopedValues(this.state, selectedKeys, options)}
          />
        );
      }
    }

    return MeasuredComponent;
  };
};

export default getMeasuredComponent;
