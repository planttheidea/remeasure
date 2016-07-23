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
  isObject,
  isString
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

const POSITION_PROP_DEFAULT = 'position';
const RENDER_ON_RESIZE_DEFAULT = true;
const SIZE_PROP_DEFAULT = 'size';

let raf;

/**
 * wait to assign the raf until mount, so it has access to the
 * window object
 */
const setRaf = () => {
  raf = (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
};

/**
 * create the HOC that injects the position and size props
 * into the child (assuming they have keys that are valid
 * for one or both of those)
 *
 * @param {Component} OriginalComponent
 * @param {array<string>} keys
 * @param {object} options={}
 * @returns {RemeasureComponent}
 */
const getHigherOrderComponent = (OriginalComponent, keys, options = {}) => {
  const {
    positionProp = POSITION_PROP_DEFAULT,
    renderOnResize = RENDER_ON_RESIZE_DEFAULT,
    sizeProp = SIZE_PROP_DEFAULT
  } = options;

  class RemeasureComponent extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const domElement = findDOMNode(this);

      if (!raf) {
        setRaf();
      }

      this.setValues(domElement);

      if (renderOnResize) {
        onElementResize(domElement, () => {
          this.setValues(domElement);
        });
      }
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
      const values = getValues(keys, this.state, {
        positionProp,
        sizeProp
      });

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
 * @param {object} options
 * @returns {RemeasureComponent}
 */
const measure = (keys, options) => {
  if (isString(keys)) {
    let position = POSITION_PROP_DEFAULT,
        size = SIZE_PROP_DEFAULT;

    if (isObject(options)) {
      ({
        positionProp: position = POSITION_PROP_DEFAULT,
        sizeProp: size = SIZE_PROP_DEFAULT
      } = options);
    }

    switch (keys) {
      case position:
        keys = allPositionKeys;
        break;

      case size:
        keys = allSizeKeys;
        break;

      default:
        keys = [keys];
        break;
    }
  }

  if (isArray(keys)) {
    const validKeys = getValidKeys(keys, allKeys);

    return (OriginalComponent) => {
      return getHigherOrderComponent(OriginalComponent, validKeys, options);
    };
  }

  if (isObject(keys)) {
    return (OriginalComponent) => {
      return getHigherOrderComponent(OriginalComponent, allKeys, keys);
    };
  }

  return getHigherOrderComponent(keys, allKeys);
};

export default measure;
