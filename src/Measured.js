// external dependencies
import debounceMethod from 'debounce';
import {deepEqual} from 'fast-equals';
import memoize from 'micro-memoize';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import raf from 'raf';
import ResizeObserver from 'resize-observer-polyfill';

// constants
import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_WILL_RECEIVE_PROPS,
  IS_PRODUCTION,
  KEY_NAMES,
  KEYS,
  SOURCES,
} from './constants';

// utils
import {
  getNaturalDimensionValue,
  getStateKeys,
  isElementVoidTag,
} from './utils';

/**
 * @private
 *
 * @function getInitialState
 *
 * @description
 * get the initial state of the component instance
 *
 * @returns {Object} the initial state
 */
export const getInitialState = () =>
  KEY_NAMES.reduce((state, key) => {
    state[key] = null;

    return state;
  }, {});

export const createComponentWillMount = (instance) =>
  /**
   * @private
   *
   * @function componentWillMount
   *
   * @description
   * prior to mount, set the keys to watch for and the render method
   */
  () => {
    instance.keys = getStateKeys(instance.props);

    instance.setRenderMethod(instance.props);
  };

export const createComponentDidMount = (instance) =>
  /**
   * @private
   *
   * @function componentDidMount
   *
   * @description
   * on mount, get the element and set it's resize observer
   */
  () => {
    instance._isMounted = true;

    instance.element = findDOMNode(instance);

    instance.setResizeObserver();
  };

export const createComponentWillReceiveProps = (instance) =>
  /**
   * @private
   *
   * @function componentWillReceiveProps
   *
   * @description
   * when the component receives new props, set the render method for future renders
   *
   * @param {Object} nextProps the next render's props
   */
  (nextProps) => instance.setRenderMethod(nextProps);

export const createSetValues = (instance, isDebounce) => {
  const {debounce} = instance.props;

  /**
   * @private
   *
   * @function delayedMethod
   *
   * @description
   * on a delay (either requestAnimationFrame or debounce), determine the calculated measurements and assign
   * them to state if changed
   */
  const delayedMethod = (event) => {
    const clientRect = instance.element ? instance.element.getBoundingClientRect() : {};
    const isResize = event && event.type === 'resize';

    const newValues = KEYS.reduce((values, key) => {
      values[key.key] = ~instance.keys.indexOf(key)
        ? instance.element
          ? getNaturalDimensionValue(key.source === SOURCES.CLIENT_RECT ? clientRect : instance.element, key.key)
          : 0
        : null;

      return values;
    }, {});

    if (!instance._isMounted) {
      return;
    }

    if (isResize || !deepEqual(instance.state, newValues)) {
      instance.setState(() => newValues);
    }
  };

  return isDebounce && typeof debounce === 'number'
    ? debounceMethod(delayedMethod, debounce)
    : (event) => raf(() => delayedMethod(event));
};

export const createComponentDidUpdate = (instance) =>
  /**
   * @private
   *
   * @function componentDidUpdate
   *
   * @description
   * on update, assign the new properties if they have changed
   *   * element
   *   * debounce (assign new debounced render method)
   *   * keys
   *
   * @param {number} [previousDebounce] the previous props' debounce value
   */
  ({debounce: previousDebounce}) => {
    const {debounce} = instance.props;

    const element = findDOMNode(instance);

    const hasElementChanged = element !== instance.element;
    const hasDebounceChanged = debounce !== previousDebounce;
    const shouldSetResizeObserver = hasElementChanged || hasDebounceChanged;

    if (hasElementChanged) {
      instance.element = element;
    }

    if (hasDebounceChanged) {
      instance.setValuesViaDebounce = createSetValues(instance, true);
    }

    if (shouldSetResizeObserver) {
      instance.setResizeObserver();
    }

    const newKeys = getStateKeys(instance.props);

    if (shouldSetResizeObserver || !deepEqual(instance.keys, newKeys)) {
      instance.keys = newKeys;

      instance.resizeMethod();
    }
  };

export const createComponentWillUnmount = (instance) =>
  /**
   * @private
   *
   * @function componentWillUnmount
   *
   * @description
   * prior to unmount, disconnect the resize observer and reset the instance properties
   */
  () => {
    instance._isMounted = false;

    instance.disconnectObserver();

    instance.element = null;
    instance.keys = [];
    instance.resizeMethod = null;
  };

export const createConnectObserver = (instance) =>
  /**
   * @private
   *
   * @function connectObserver
   *
   * @description
   * if render on resize is requested, assign a resize observer to the element with the correct resize method
   */
  () => {
    const {renderOnResize, renderOnWindowResize} = instance.props;

    if (renderOnWindowResize) {
      window.addEventListener('resize', instance.resizeMethod);
    }

    if (renderOnResize) {
      if (!IS_PRODUCTION && isElementVoidTag(instance.element)) {
        /* eslint-disable no-console */
        console.warn(
          'WARNING: You are attempting to listen to resizes on a void element, which is not supported. You should wrap this element in an element that supports children, such as a <div>, to ensure correct behavior.'
        );
        /* eslint-enable */
      }

      instance.resizeObserver = new ResizeObserver(instance.resizeMethod);

      instance.resizeObserver.observe(instance.element);
    }
  };

export const createDisconnectObserver = (instance) =>
  /**
   * @private
   *
   * @function disconnectObserver
   *
   * @description
   * if a resize observer exists, disconnect it from the element
   */
  () => {
    if (instance.resizeObserver) {
      instance.resizeObserver.disconnect(instance.element);

      instance.resizeObserver = null;
    }

    window.removeEventListener('resize', instance.resizeMethod);
  };

export const createGetPassedValues = (instance) =>
  /**
   * @private
   *
   * @function getPassedValues
   *
   * @description
   * get the passed values as an object, namespaced if requested
   *
   * @param {Object} state the current state values
   * @param {string} [namespace] the possible namespace to assign the values to
   * @returns {Object} the values to pass
   */
  memoize((state, namespace) => {
    const populatedState = instance.keys.reduce((values, {key}) => {
      values[key] = state[key] || 0;

      return values;
    }, {});

    return namespace ? {[namespace]: populatedState} : populatedState;
  });

export const createSetRef = (instance, ref) =>
  /**
   * @private
   *
   * @function setRef
   *
   * @description
   * set the DOM node to the ref passed
   *
   * @param {HTMLElement|ReactComponent} element the element to find the DOM node of
   */
  (element) => {
    instance[ref] = findDOMNode(element);
  };

export const createSetRenderMethod = (instance) =>
  /**
   * @private
   *
   * @function setRenderMethod
   *
   * @description
   * set the render method based on the possible props passed
   *
   * @param {function} [children] the child render function
   * @param {function} [component] the component prop function
   * @param {function} [render] the render prop function
   */
  ({children, component, render}) => {
    const RenderComponent = children || component || render || null;

    if (!IS_PRODUCTION && typeof RenderComponent !== 'function') {
      /* eslint-disable no-console */
      console.error(
        'ERROR: You must provide a render function, or either a "render" or "component" prop that passes a functional component.'
      );
      /* eslint-enable */
    }

    if (RenderComponent !== instance.RenderComponent) {
      instance.RenderComponent = RenderComponent;
    }
  };

export const createSetResizeObserver = (instance) =>
  /**
   * @private
   *
   * @function setResizeObserver
   *
   * @description
   * set the resize observer on the instance, based on the existence of a currrent resizeObserver and the new element
   */
  () => {
    const {debounce} = instance.props;

    const resizeMethod = typeof debounce === 'number' ? instance.setValuesViaDebounce : instance.setValuesViaRaf;

    if (instance.resizeObserver) {
      instance.disconnectObserver();
    }

    if (resizeMethod !== instance.resizeMethod) {
      instance.resizeMethod = resizeMethod;

      resizeMethod();
    }

    if (instance.element) {
      instance.connectObserver();
    }
  };

// eslint-disable-next-line react/no-deprecated
class Measured extends Component {
  static displayName = 'Measured';

  static propTypes = {
    children: PropTypes.func,
    component: PropTypes.func,
    debounce: PropTypes.number,
    namespace: PropTypes.string,
    render: PropTypes.func,
    renderOnResize: PropTypes.bool.isRequired,
    renderOnWindowResize: PropTypes.bool.isRequired,
    ...KEY_NAMES.reduce((keyPropTypes, key) => {
      keyPropTypes[key] = PropTypes.bool;

      return keyPropTypes;
    }, {}),
  };

  static defaultProps = {
    renderOnResize: true,
    renderOnWindowResize: false,
  };

  // state
  state = getInitialState();

  // lifecycle methods
  componentDidMount = createComponentDidMount(this);
  componentDidUpdate = createComponentDidUpdate(this);
  componentWillUnmount = createComponentWillUnmount(this);
  [COMPONENT_WILL_MOUNT] = createComponentWillMount(this);
  [COMPONENT_WILL_RECEIVE_PROPS] = createComponentWillReceiveProps(this);

  // instance values
  _isMounted = false;
  element = null;
  keys = [];
  RenderComponent = null;
  resizeMethod = null;
  resizeObserver = null;

  // instance methods
  connectObserver = createConnectObserver(this);
  disconnectObserver = createDisconnectObserver(this);
  getPassedValues = createGetPassedValues(this);
  setElementRef = createSetRef(this, 'element');
  setRenderMethod = createSetRenderMethod(this);
  setResizeObserver = createSetResizeObserver(this);
  setValuesViaDebounce = createSetValues(this, true);
  setValuesViaRaf = createSetValues(this, false);

  render() {
    if (!this.RenderComponent) {
      return null;
    }

    const {
      children: childrenIgnored,
      component: componentIgnored,
      debounce: debounceIgnored,
      keys: keysIgnored,
      namespace,
      render: renderIgnored,
      renderOnResize: renderOnResizeIgnored,
      renderOnWindowResize: renderOnWindowResizeIgnored,
      ...passThroughProps
    } = this.props;

    const RenderComponent = this.RenderComponent;

    return (
      /* eslint-disable prettier */
      <RenderComponent
        {...passThroughProps}
        {...this.getPassedValues(this.state, namespace)}
      />
      /* eslint-enable */
    );
  }
}

export default Measured;
