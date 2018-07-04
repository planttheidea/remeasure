// external dependencies
import debounceMethod from 'debounce';
import {deepEqual} from 'fast-equals';
import memoize from 'micro-memoize';
import PropTypes from 'prop-types';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {createComponent} from 'react-parm';
import raf from 'raf';
import ResizeObserver from 'resize-observer-polyfill';

// constants
import {
  IS_PRODUCTION,
  KEY_NAMES,
  KEYS,
  SOURCES
} from './constants';

// utils
import {
  getNaturalDimensionValue,
  getStateKeys,
  isElementVoidTag,
  reduce
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
  reduce(
    KEY_NAMES,
    (state, key) => {
      state[key] = null;

      return state;
    },
    {}
  );

export const createSetValues = ({delayedMethod, props: {debounce}}, isDebounce) =>
  isDebounce && typeof debounce === 'number' ? debounceMethod(delayedMethod, debounce) : () => raf(delayedMethod);

/**
 * @private
 *
 * @function onConstruct
 *
 * @description
 * prior to mount, set the keys to watch for and the render method
 */
export const onConstruct = (instance) => {
  instance.keys = getStateKeys(instance.props);

  instance.setRenderMethod(instance.props);

  instance.setValuesViaDebounce = createSetValues(instance, true);
  instance.setValuesViaRaf = createSetValues(instance, false);
};

/**
 * @private
 *
 * @function componentDidMount
 *
 * @description
 * on mount, get the element and set it's resize observer
 */
export const componentDidMount = (instance) => {
  instance._isMounted = true;

  instance.element = findDOMNode(instance);

  instance.setResizeObserver();
};

/**
 * @private
 *
 * @function componentWillReceiveProps
 *
 * @description
 * when the component receives new props, set the render method for future renders
 *
 * @param {function} setRenderMethod the function to set the render method on the instance
 * @param {Object} nextProps the next render's props
 */
export const componentWillReceiveProps = ({setRenderMethod}, [nextProps]) => setRenderMethod(nextProps);

export const delayedMethod = ({_isMounted, element, keys, setState, state}) => {
  const clientRect = element ? element.getBoundingClientRect() : {};

  const newValues = reduce(
    KEYS,
    (values, key) => {
      values[key.key] = ~keys.indexOf(key)
        ? element
          ? getNaturalDimensionValue(key.source === SOURCES.CLIENT_RECT ? clientRect : element, key.key)
          : 0
        : null;

      return values;
    },
    {}
  );

  if (!deepEqual(state, newValues) && _isMounted) {
    setState(() => newValues);
  }
};

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
 * @param {ReactComponent} instance the component instance
 * @param {number} [previousDebounce] the previous props' debounce value
 */
export const componentDidUpdate = (instance, [{debounce: previousDebounce}]) => {
  const {
    element: currentElement,
    props: {debounce},
  } = instance;

  const element = findDOMNode(instance);

  const hasElementChanged = element !== currentElement;
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

/**
 * @private
 *
 * @function componentWillUnmount
 *
 * @description
 * prior to unmount, disconnect the resize observer and reset the instance properties
 *
 * @param {ReactComponent} instance the component instance
 */
export const componentWillUnmount = (instance) => {
  instance._isMounted = false;

  instance.disconnectObserver();

  instance.element = null;
  instance.keys = [];
  instance.resizeMethod = null;
};

/**
 * @private
 *
 * @function connectObserver
 *
 * @description
 * if render on resize is requested, assign a resize observer to the element with the correct resize method
 */
export const connectObserver = (instance) => {
  const {
    element,
    props: {renderOnResize, renderOnWindowResize},
    resizeMethod,
  } = instance;

  if (renderOnResize) {
    if (!IS_PRODUCTION && isElementVoidTag(element)) {
      /* eslint-disable no-console */
      console.warn(
        'WARNING: You are attempting to listen to resizes on a void element, which is not supported. You should wrap this element in an element that supports children, such as a <div>, to ensure correct behavior.'
      );
      /* eslint-enable */
    }

    instance.resizeObserver = new ResizeObserver(resizeMethod);

    instance.resizeObserver.observe(element);
  }

  if (renderOnWindowResize) {
    window.addEventListener('resize', resizeMethod);
  }
};

/**
 * @private
 *
 * @function disconnectObserver
 *
 * @description
 * if a resize observer exists, disconnect it from the element
 */
export const disconnectObserver = (instance) => {
  const {element, resizeObserver} = instance;

  if (resizeObserver) {
    instance.resizeObserver.disconnect(element);

    instance.resizeObserver = null;
  }
};

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
export const getPassedValues = memoize((keys, state, namespace) => {
  const populatedState = reduce(
    keys,
    (values, {key}) => {
      values[key] = state[key] || 0;

      return values;
    },
    {}
  );

  return namespace
    ? {
      [namespace]: populatedState,
    }
    : populatedState;
});

/**
 * @private
 *
 * @function setRenderMethod
 *
 * @description
 * set the render method based on the possible props passed
 *
 * @param {ReactComponent} instance the component instance
 * @param {function} [children] the child render function
 * @param {function} [component] the component prop function
 * @param {function} [render] the render prop function
 */
export const setRenderMethod = (instance, [{children, component, render}]) => {
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

export const setResizeObserver = (instance) => {
  const {
    connectObserver,
    disconnectObserver,
    element,
    props: {debounce},
    resizeObserver,
    setValuesViaDebounce,
    setValuesViaRaf,
  } = instance;

  const resizeMethod = typeof debounce === 'number' ? setValuesViaDebounce : setValuesViaRaf;

  if (resizeMethod !== instance.resizeMethod) {
    instance.resizeMethod = resizeMethod;

    resizeMethod();
  }

  if (resizeObserver) {
    disconnectObserver();
  }

  if (element) {
    connectObserver();
  }
};

const Measured = createComponent(
  (
    {
      children: childrenIgnored,
      component: componentIgnored,
      debounce: debounceIgnored,
      keys: keysIgnored,
      namespace,
      render: renderIgnored,
      renderOnResize: renderOnResizeIgnored,
      ...passThroughProps
    },
    {RenderComponent, keys, state}
  ) =>
    RenderComponent ? (
      // eslint workaround
      <RenderComponent
        {...passThroughProps}
        {...getPassedValues(keys, state, namespace)}
      />
    ) : null,
  {
    _isMounted: false,
    RenderComponent: null,
    componentDidMount,
    componentDidUpdate,
    componentWillReceiveProps,
    componentWillUnmount,
    connectObserver,
    delayedMethod,
    disconnectObserver,
    element: null,
    getInitialState,
    keys: [],
    onConstruct,
    resizeMethod: null,
    resizeObserver: null,
    setRenderMethod,
    setResizeObserver,
  }
);

Measured.displayName = 'Measured';

Measured.propTypes = {
  children: PropTypes.func,
  component: PropTypes.func,
  debounce: PropTypes.number,
  namespace: PropTypes.string,
  render: PropTypes.func,
  renderOnResize: PropTypes.bool.isRequired,
  ...reduce(
    KEY_NAMES,
    (keyPropTypes, key) => {
      keyPropTypes[key] = PropTypes.bool;

      return keyPropTypes;
    },
    {}
  ),
};

Measured.defaultProps = {
  renderOnResize: true,
};

export default Measured;
