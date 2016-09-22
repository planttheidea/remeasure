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
  arraySubset,
  createObjectFromKeys,
  getValues,
  haveValuesChanged
} from './utils';

// constants
import {
  ALL_BOUNDING_CLIENT_RECT_KEYS,
  ALL_DOM_ELEMENT_KEYS,
  ALL_KEYS,
  POSITION_PROP_DEFAULT,
  RENDER_ON_RESIZE_DEFAULT,
  SIZE_PROP_DEFAULT
} from './constants';

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
 * based on desiredKeys, build the initialState object
 *
 * @param {array<string>} allKeys
 * @param {array<string>} desiredKeys
 * @returns {array<T>}
 */
const reduceStateToMatchingKeys = (allKeys, desiredKeys) => {
  return allKeys.reduce((accumulatedInitialState, key) => {
    if (desiredKeys.includes(key)) {
      return {
        ...accumulatedInitialState,
        [key]: 0
      };
    }

    return accumulatedInitialState;
  }, {});
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

  const propKeyNames = {
    positionProp,
    sizeProp
  };

  const boundingClientRectKeys = arraySubset(ALL_BOUNDING_CLIENT_RECT_KEYS, keys);
  const domElementKeys = arraySubset(ALL_DOM_ELEMENT_KEYS, keys);
  const initialState = reduceStateToMatchingKeys(ALL_KEYS, keys);

  if (!raf) {
    setRaf();
  }

  class RemeasureComponent extends Component {
    componentDidMount() {
      this.domElement = findDOMNode(this);

      if (renderOnResize) {
        onElementResize(this.domElement, this.setValues);
      }

      this.setValues();
    }

    componentDidUpdate() {
      this.setValues();
    }

    componentWillUnmount() {
      this.domElement = null;
    }

    state = initialState;

    domElement = null;

    /**
     * based on the current DOM element, get the values
     * and determine if the state should be updated (only
     * if things have changed)
     */
    setValues = () => {
      raf(() => {
        const domElement = this.domElement;
        const boundingClientRect = domElement.getBoundingClientRect();

        const values = {
          ...createObjectFromKeys(boundingClientRectKeys, boundingClientRect),
          ...createObjectFromKeys(domElementKeys, domElement)
        };

        if (haveValuesChanged(keys, values, this.state)) {
          this.setState(values);
        }
      });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...getValues(keys, this.state, propKeyNames)}
        />
      );
    }
  }

  return RemeasureComponent;
};

export default getHigherOrderComponent;
