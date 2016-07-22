// external dependencies
import onElementResize from 'element-resize-event';
import React, {
  Component
} from 'react';
import {
  findDOMNode
} from 'react-dom';

// utils
import {
  arrayContains,
  createObjectFromKeys,
  getValidKeys,
  getValues,
  isArray,
  isString,
  raf
} from './utils';

// constants
import {
  allBoundingRectClientKeys,
  allDomElementKeys,
  allKeys,
  allPositionKeys,
  allSizeKeys,
  initialState
} from './constants';

/**
 * create the HOC that injects the position and size props
 * into the child (assuming they have keys that are valid
 * for one or both of those)
 *
 * @param {Component} OriginalComponent
 * @param {array<string>} keys
 * @returns {RemeasureComponent}
 */
const getHigherOrderComponent = (OriginalComponent, keys) => {
  class RemeasureComponent extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const domElement = findDOMNode(this);

      this.setValues(domElement);

      onElementResize(domElement, () => {
        this.setValues(domElement);
      });
    }

    componentDidUpdate() {
      this.setValues(findDOMNode(this));
    }

    state = {
      ...initialState
    };

    /**
     * iterate through keys and determine if the values have
     * changed compared to what is stored in state
     *
     * @param {object} values
     * @param {array<string>} keys
     * @returns {boolean}
     */
    haveValuesChanged = (values, keys) => {
      const length = allKeys.length;

      let index = -1,
          key;

      while (++index < length) {
        key = allKeys[index];

        if (arrayContains(keys, key) && values[key] !== this.state[key]) {
          return true;
        }
      }

      return false;
    };

    /**
     * based on the current DOM element, get the values
     * and determine if the state should be updated (only
     * if things have changed)
     *
     * @param {HTMLElement} domElement
     */
    setValues = (domElement) => {
      raf(() => {
        const boundingClientRect = domElement.getBoundingClientRect();

        const values = {
          ...createObjectFromKeys(allDomElementKeys, domElement),
          ...createObjectFromKeys(allBoundingRectClientKeys, boundingClientRect)
        };

        if (this.haveValuesChanged(values, keys)) {
          this.setState(values);
        }
      });
    };

    render() {
      const values = getValues(keys, this.state);

      return (
        <OriginalComponent
          {...this.props}
          {...values}
        />
      );
    }
  }

  return RemeasureComponent;
};

/**
 * create higher-order component that injects size and position properties
 * into OriginalComponent as an object under the prop name size and position
 *
 * @param {Component|array<string>} keys
 * @returns {RemeasureComponent}
 */
const measure = (keys) => {
  if (isString(keys)) {
    switch (keys) {
      case 'size':
        keys = allSizeKeys;
        break;

      case 'position':
        keys = allPositionKeys;
        break;

      default:
        keys = [keys];
        break;
    }
  }

  if (isArray(keys)) {
    const validKeys = getValidKeys(keys, allKeys);

    return (OriginalComponent) => {
      return getHigherOrderComponent(OriginalComponent, validKeys);
    };
  }

  return getHigherOrderComponent(keys, allKeys);
};

export default measure;
