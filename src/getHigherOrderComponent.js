// external dependencies
import onElementResize from 'element-resize-event';
import debounce from 'lodash/debounce';
import includes from 'lodash/includes';
import React, {
  Component
} from 'react';
import {
  findDOMNode
} from 'react-dom';

// utils
import {
  createObjectFromKeys,
  getArraySubset,
  getRequestAnimationFrame,
  getValues,
  haveValuesChanged,
  reduceStateToMatchingKeys
} from './utils';

// constants
import {
  ALL_BOUNDING_CLIENT_RECT_KEYS,
  ALL_DOM_ELEMENT_KEYS,
  ALL_KEYS,
  DEBOUNCE_VALUE_DEFAULT,
  FLATTEN_DEFAULT,
  POSITION_PROP_DEFAULT,
  RENDER_ON_RESIZE_DEFAULT,
  SIZE_PROP_DEFAULT,
  VOID_ELEMENT_TAG_NAMES
} from './constants';

let raf;

/**
 * create the HOC that injects the position and size props
 * into the child (assuming they have keys that are valid
 * for one or both of those)
 *
 * @param {Component} OriginalComponent
 * @param {Array<string>} keys
 * @param {Object} options={}
 * @returns {RemeasureComponent}
 */
const getHigherOrderComponent = (OriginalComponent, keys, options = {}) => {
  const {
    debounce: debounceValue = DEBOUNCE_VALUE_DEFAULT,
    flatten = FLATTEN_DEFAULT,
    positionProp = POSITION_PROP_DEFAULT,
    renderOnResize = RENDER_ON_RESIZE_DEFAULT,
    sizeProp = SIZE_PROP_DEFAULT
  } = options;

  const propKeyNames = {
    positionProp,
    sizeProp
  };

  const boundingClientRectKeys = getArraySubset(ALL_BOUNDING_CLIENT_RECT_KEYS, keys);
  const domElementKeys = getArraySubset(ALL_DOM_ELEMENT_KEYS, keys);
  const initialState = reduceStateToMatchingKeys(ALL_KEYS, keys);

  if (!raf) {
    raf = getRequestAnimationFrame();
  }

  class RemeasureComponent extends Component {
    componentDidMount() {
      this.setDomElement();

      if (this.domElement) {
        this.setValues();
      }
    }

    componentDidUpdate() {
      if (!this.domElement) {
        this.setDomElement();
      }

      this.setValues();
    }

    componentWillUnmount() {
      this.domElement = null;
    }

    state = initialState;

    domElement = null;

    /**
     * debounce the assignment of new state if the debounceValue is provided
     */
    debouncedSetValues = debounce(() => {
      if (this.domElement) {
        this.setStateIfChanged();
      }

    }, debounceValue || DEBOUNCE_VALUE_DEFAULT);

    /**
     * set the domElement associated with the instance
     */
    setDomElement = () => {
      const domElement = findDOMNode(this);

      if (domElement) {
        this.domElement = domElement;
        this.setOnResize();
      }
    };

    /**
     * set the onResize function if renderOnResize is true
     */
    setOnResize = () => {
      if (renderOnResize && !includes(VOID_ELEMENT_TAG_NAMES, this.domElement.tagName.toUpperCase())) {
        const resizeFunction = debounceValue ? this.debouncedSetValues : this.setValues;

        onElementResize(this.domElement, resizeFunction);
      }
    };

    /**
     * update the state of the HOC if any of the values requested have changed
     */
    setStateIfChanged = () => {
      const domElement = this.domElement;
      const boundingClientRect = domElement.getBoundingClientRect();

      const values = {
        ...createObjectFromKeys(boundingClientRectKeys, boundingClientRect),
        ...createObjectFromKeys(domElementKeys, domElement)
      };

      if (haveValuesChanged(keys, values, this.state)) {
        this.setState(values);
      }
    };

    /**
     * based on the current DOM element, get the values
     * and determine if the state should be updated (only
     * if things have changed)
     */
    setValues = () => {
      if (this.domElement) {
        raf(this.setStateIfChanged);
      }
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...getValues(keys, this.state, propKeyNames, flatten)}
        />
      );
    }
  }

  return RemeasureComponent;
};

export default getHigherOrderComponent;
