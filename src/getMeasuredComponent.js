// external dependencies
import onElementResize from 'element-resize-event';
import debounce from 'lodash/debounce';
import isFunction from 'lodash/isFunction';
import moize from 'moize';
import React, {
  Component
} from 'react';
import {
  findDOMNode
} from 'react-dom';

// constants
import {
  ALL_BOUNDING_CLIENT_RECT_KEYS,
  ALL_DOM_ELEMENT_KEYS,
  CLIENT_RECT_TYPE,
  DEBOUNCE_VALUE_DEFAULT,
  ELEMENT_TYPE,
  FLATTEN_DEFAULT,
  POSITION_PROP_DEFAULT,
  RENDER_ON_RESIZE_DEFAULT,
  SIZE_PROP_DEFAULT
} from './constants';

// utils
import {
  getKeysSubsetWithType,
  getElementValues,
  getRequestAnimationFrame,
  getScopedValues,
  haveValuesChanged,
  isElementVoidTag,
  reduceStateToMatchingKeys
} from './utils';

let raf;

const getMeasuredComponent = (keys, options) => {
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

  const selectedKeys = []
    .concat(getKeysSubsetWithType(ALL_BOUNDING_CLIENT_RECT_KEYS, keys, CLIENT_RECT_TYPE, propKeyNames))
    .concat(getKeysSubsetWithType(ALL_DOM_ELEMENT_KEYS, keys, ELEMENT_TYPE, propKeyNames));

  const initialState = reduceStateToMatchingKeys(selectedKeys);

  return (PassedComponent) => {
    class MeasuredComponent extends Component {
      state = {...initialState};

      componentWillMount() {
        if (!isFunction(raf)) {
          raf = getRequestAnimationFrame();
        }
      }

      componentDidMount() {
        const element = this.getDOMElement();

        if (element) {
          this.setElement(element);
          this.updateValuesViaRaf();
        }

        if (renderOnResize) {
          this.setElementResize();
        }
      }

      componentDidUpdate() {
        const element = this.getDOMElement();

        this.setElement(element);

        if (element) {
          this.updateValuesViaRaf();
        } else {
          this.clearValues();
        }

        if (renderOnResize && !this.hasResize) {
          this.setElementResize();
        }
      }

      element = null;
      getScopedValues = moize(getScopedValues, {
        maxSize: 25
      });
      hasResize = false;

      /**
       * @private
       *
       * @function clearValues
       *
       * @description
       * reset all values to 0 if there is no element present
       */
      clearValues = () => {
        const emptyValues = reduceStateToMatchingKeys(selectedKeys);

        if (haveValuesChanged(selectedKeys, emptyValues, this.state)) {
          this.setState(emptyValues);
        }
      };

      /**
       * @private
       *
       * @function getDOMElement
       *
       * @description
       * get the DOM element specific to the component
       *
       * @returns {HTMLElement|null}
       */
      getDOMElement = () => {
        return findDOMNode(this);
      };

      /**
       * @private
       *
       * @function setElement
       *
       * @description
       * assign the element to the instance
       *
       * @param {HTMLElement|null} element
       */
      setElement = (element) => {
        this.element = element;

        if (element) {
          if (!this.hasResize) {
            this.setElementResize();
          }
        } else {
          this.hasResize = false;
        }
      };

      /**
       * @private
       *
       * @function setElementResize
       *
       * @description
       * assign the onResize listener to the element
       */
      setElementResize = () => {
        if (this.element && !isElementVoidTag(this.element)) {
          onElementResize(this.element, debounceValue ? this.updateValuesViaDebounce : this.updateValuesViaRaf);

          this.hasResize = true;
        }
      };

      /**
       * @private
       *
       * @function updateValuesIfChanged
       *
       * @description
       * get the new values and assign them to state if they have changed
       */
      updateValuesIfChanged = () => {
        const element = this.element;

        if (element) {
          const values = getElementValues(this.element, selectedKeys);

          if (haveValuesChanged(selectedKeys, values, this.state)) {
            this.setState(values);
          }
        }
      };

      /**
       * @private
       *
       * @function updateValuesViaDebounce
       *
       * @description
       * update the values via debounce value
       */
      updateValuesViaDebounce = debounce(() => {
        if (this.element) {
          this.updateValuesIfChanged();
        }
      }, debounceValue);

      /**
       * @private
       *
       * @function updateValuesViaRaf
       *
       * @description
       * update the values via requestAnimationFrame
       */
      updateValuesViaRaf = () => {
        if (this.element) {
          raf(this.updateValuesIfChanged);
        }
      };

      render() {
        const values = this.getScopedValues(selectedKeys, this.state, flatten);

        return (
          <PassedComponent
            {...this.props}
            {...values}
          />
        );
      }
    }

    return MeasuredComponent;
  };
};

export default getMeasuredComponent;
