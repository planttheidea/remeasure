// test
import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import ResizeObserver from 'resize-observer-polyfill';

// src
import * as component from 'src/Measured';
import {KEY_NAMES, KEYS} from 'src/constants';

const Measured = component.default;

test('if getInitialState will get the correct initial state', (t) => {
  const result = component.getInitialState();

  t.deepEqual(
    result,
    KEY_NAMES.reduce((state, key) => {
      state[key] = null;

      return state;
    }, {})
  );
});

test('if componentWillMount will get the keys and set the render method', (t) => {
  const instance = {
    keys: [],
    props: {
      height: true
    },
    setRenderMethod: sinon.spy()
  };

  const componentWillMount = component.createComponentWillMount(instance);

  componentWillMount();

  t.deepEqual(
    instance.keys,
    KEYS.filter(({key}) => {
      return key === 'height';
    })
  );

  t.true(instance.setRenderMethod.calledOnce);
  t.true(instance.setRenderMethod.calledWith(instance.props));
});

test('if componentDidMount will set the element and resize observer', (t) => {
  const instance = {
    _isMounted: false,
    element: null,
    setResizeObserver: sinon.spy()
  };

  const findDOMNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returnsArg(0);

  const componentDidMount = component.createComponentDidMount(instance);

  componentDidMount();

  t.true(instance._isMounted);

  t.true(findDOMNodeStub.calledOnce);
  t.true(findDOMNodeStub.calledWith(instance));

  findDOMNodeStub.restore();

  t.is(instance.element, instance);

  t.true(instance.setResizeObserver.calledOnce);
});

test('if componentWillReceiveProps will set the render method based on the props', (t) => {
  const instance = {
    setRenderMethod: sinon.spy()
  };

  const componentWillReceiveProps = component.createComponentWillReceiveProps(instance);

  const nextProps = {};

  componentWillReceiveProps(nextProps);

  t.true(instance.setRenderMethod.calledOnce);
  t.true(instance.setRenderMethod.calledWith(nextProps));
});

test('if setValues will create a delayed method to set the values in state if not debounced', async (t) => {
  const instance = {
    _isMounted: true,
    element: document.createElement('div'),
    keys: KEYS.filter(({key}) => {
      return key === 'height';
    }),
    props: {},
    setState(fn) {
      const result = fn();

      t.deepEqual(
        result,
        KEY_NAMES.reduce((state, key) => {
          state[key] = key === 'height' ? 0 : null;

          return state;
        }, {})
      );
    },
    state: {
      height: null
    }
  };

  const spy = sinon.spy(instance, 'setState');

  const setValues = component.createSetValues(instance, false);

  setValues();

  await new Promise((resolve) => {
    setTimeout(resolve, (1000 / 60) * 16);
  });

  t.true(spy.calledOnce);
});

test('if setValues will create a delayed method to set the values in state if debounced', async (t) => {
  const instance = {
    _isMounted: true,
    element: document.createElement('div'),
    keys: KEYS.filter(({key}) => {
      return key === 'height';
    }),
    props: {
      debounce: 200
    },
    setState(fn) {
      const result = fn();

      t.deepEqual(
        result,
        KEY_NAMES.reduce((state, key) => {
          state[key] = key === 'height' ? 0 : null;

          return state;
        }, {})
      );
    },
    state: {
      height: null
    }
  };

  const spy = sinon.spy(instance, 'setState');

  const setValues = component.createSetValues(instance, true);

  setValues();

  await new Promise((resolve) => {
    setTimeout(resolve, instance.props.debounce + 50);
  });

  t.true(spy.calledOnce);
});

test('if setValues will not set the values if not mounted', async (t) => {
  const instance = {
    _isMounted: false,
    element: document.createElement('div'),
    keys: KEYS.filter(({key}) => {
      return key === 'height';
    }),
    props: {},
    setState(fn) {
      const result = fn();

      t.deepEqual(
        result,
        KEY_NAMES.reduce((state, key) => {
          state[key] = key === 'height' ? 0 : null;

          return state;
        }, {})
      );
    },
    state: {
      height: null
    }
  };

  const spy = sinon.spy(instance, 'setState');

  const setValues = component.createSetValues(instance, false);

  setValues();

  await new Promise((resolve) => {
    setTimeout(resolve, (1000 / 60) * 16);
  });

  t.true(spy.notCalled);
});

test('if setValues will not set the values if the values are equal', async (t) => {
  const instance = {
    _isMounted: true,
    element: document.createElement('div'),
    keys: KEYS.filter(({key}) => {
      return key === 'height';
    }),
    props: {},
    setState(fn) {
      const result = fn();

      t.deepEqual(
        result,
        KEY_NAMES.reduce((state, key) => {
          state[key] = key === 'height' ? 0 : null;

          return state;
        }, {})
      );
    },
    state: KEY_NAMES.reduce((state, key) => {
      state[key] = key === 'height' ? 0 : null;

      return state;
    }, {})
  };

  const spy = sinon.spy(instance, 'setState');

  const setValues = component.createSetValues(instance, false);

  setValues();

  await new Promise((resolve) => {
    setTimeout(resolve, (1000 / 60) * 16);
  });

  t.true(spy.notCalled);
});

test('if setValues will assign values to 0 if no element exists', async (t) => {
  const instance = {
    _isMounted: true,
    element: null,
    keys: KEYS.filter(({key}) => {
      return key === 'height';
    }),
    props: {},
    setState(fn) {
      const result = fn();

      t.deepEqual(
        result,
        KEY_NAMES.reduce((state, key) => {
          state[key] = key === 'height' ? 0 : null;

          return state;
        }, {})
      );
    },
    state: KEY_NAMES.reduce((state, key) => {
      state[key] = key === 'height' ? 123 : null;

      return state;
    }, {})
  };

  const spy = sinon.spy(instance, 'setState');

  const setValues = component.createSetValues(instance, false);

  setValues();

  await new Promise((resolve) => {
    setTimeout(resolve, (1000 / 60) * 16);
  });

  t.true(spy.calledOnce);
});

test('if componentDidUpdate will set the element and the resize observer if the element has changed', (t) => {
  const originalSetValuesViaDebounce = () => {};

  const instance = {
    element: null,
    keys: KEYS,
    props: {},
    resizeMethod: sinon.spy(),
    setResizeObserver: sinon.spy(),
    setValuesViaDebounce: originalSetValuesViaDebounce
  };

  const findDOMNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returnsArg(0);

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  const previousProps = {};

  componentDidUpdate(previousProps);

  t.true(findDOMNodeStub.calledOnce);
  t.true(findDOMNodeStub.calledWith(instance));

  findDOMNodeStub.restore();

  t.is(instance.element, instance);

  t.is(instance.setValuesViaDebounce, originalSetValuesViaDebounce);

  t.true(instance.setResizeObserver.calledOnce);

  t.true(instance.resizeMethod.calledOnce);
});

test('if componentDidUpdate will set the debounce method and the resize observer if the element has changed', (t) => {
  const originalSetValuesViaDebounce = () => {};

  const instance = {
    element: null,
    keys: KEYS,
    props: {
      debounce: 200
    },
    resizeMethod: sinon.spy(),
    setResizeObserver: sinon.spy(),
    setValuesViaDebounce: originalSetValuesViaDebounce
  };

  const findDOMNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(null);

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  const previousProps = {
    debounce: 50
  };

  componentDidUpdate(previousProps);

  t.true(findDOMNodeStub.calledOnce);
  t.true(findDOMNodeStub.calledWith(instance));

  findDOMNodeStub.restore();

  t.is(instance.element, null);

  t.not(instance.setValuesViaDebounce, originalSetValuesViaDebounce);

  t.true(instance.setResizeObserver.calledOnce);

  t.true(instance.resizeMethod.calledOnce);
});

test('if componentDidUpdate will call the resize method if keys have changed', (t) => {
  const originalSetValuesViaDebounce = () => {};

  const instance = {
    element: null,
    keys: KEYS,
    props: {
      height: true
    },
    resizeMethod: sinon.spy(),
    setResizeObserver: sinon.spy(),
    setValuesViaDebounce: originalSetValuesViaDebounce
  };

  const findDOMNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(null);

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  const previousProps = {};

  componentDidUpdate(previousProps);

  t.true(findDOMNodeStub.calledOnce);
  t.true(findDOMNodeStub.calledWith(instance));

  findDOMNodeStub.restore();

  t.is(instance.element, null);

  t.is(instance.setValuesViaDebounce, originalSetValuesViaDebounce);

  t.true(instance.setResizeObserver.notCalled);

  t.true(instance.resizeMethod.calledOnce);
});

test('if componentDidUpdate will do nothing if nothing has changed', (t) => {
  const originalSetValuesViaDebounce = () => {};

  const instance = {
    element: null,
    keys: KEYS,
    props: {},
    resizeMethod: sinon.spy(),
    setResizeObserver: sinon.spy(),
    setValuesViaDebounce: originalSetValuesViaDebounce
  };

  const findDOMNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(null);

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  const previousProps = {};

  componentDidUpdate(previousProps);

  t.true(findDOMNodeStub.calledOnce);
  t.true(findDOMNodeStub.calledWith(instance));

  findDOMNodeStub.restore();

  t.is(instance.element, null);

  t.is(instance.setValuesViaDebounce, originalSetValuesViaDebounce);

  t.true(instance.setResizeObserver.notCalled);

  t.true(instance.resizeMethod.notCalled);
});

test('if componentWillUnmount will disconnect the observer and reset the instance properties', (t) => {
  const instance = {
    _isMounted: true,
    disconnectObserver: sinon.spy(),
    element: document.createElement('div'),
    keys: KEYS,
    resizeMethod() {}
  };

  const componentWillUnmount = component.createComponentWillUnmount(instance);

  componentWillUnmount();

  t.false(instance._isMounted);
  t.true(instance.disconnectObserver.calledOnce);
  t.is(instance.element, null);
  t.deepEqual(instance.keys, []);
  t.is(instance.resizeMethod, null);
});

test('if connectObserver will assign the resize observer and connect it to the element', (t) => {
  const instance = {
    element: document.createElement('div'),
    props: {
      renderOnResize: true
    },
    resizeMethod() {},
    resizeObserver: null
  };

  const connectObserver = component.createConnectObserver(instance);

  connectObserver();

  t.deepEqual(instance.resizeObserver, new ResizeObserver(instance.resizeMethod));
});

test('if connectObserver will warn if listening to a void element', (t) => {
  const instance = {
    element: document.createElement('img'),
    props: {
      renderOnResize: true
    },
    resizeMethod() {},
    resizeObserver: null
  };

  const connectObserver = component.createConnectObserver(instance);

  const consoleStub = sinon.stub(console, 'warn');

  connectObserver();

  t.true(consoleStub.calledOnce);

  consoleStub.restore();

  t.deepEqual(instance.resizeObserver, new ResizeObserver(instance.resizeMethod));
});

test('if connectObserver will assign the resize observer as a window listener when window resize is requested', (t) => {
  const instance = {
    element: document.createElement('div'),
    props: {
      renderOnResize: false,
      renderOnWindowResize: true
    },
    resizeMethod() {},
    resizeObserver: null
  };

  const connectObserver = component.createConnectObserver(instance);

  const stub = sinon.stub(window, 'addEventListener');

  connectObserver();

  t.true(stub.calledOnce);
  t.true(stub.calledWith('resize', instance.resizeMethod));

  stub.restore();
});

test('if connectObserver will do nothing if renderOnResize is false', (t) => {
  const instance = {
    element: document.createElement('div'),
    props: {
      renderOnResize: false
    },
    resizeMethod() {},
    resizeObserver: null
  };

  const connectObserver = component.createConnectObserver(instance);

  const consoleStub = sinon.stub(console, 'warn');

  connectObserver();

  t.true(consoleStub.notCalled);

  consoleStub.restore();

  t.is(instance.resizeObserver, null);
});

test('if disconnectObserver will disconnect the observer if it exists', (t) => {
  const disconnect = sinon.spy();

  const instance = {
    element: document.createElement('div'),
    resizeObserver: {
      disconnect
    }
  };

  const disconnectObserver = component.createDisconnectObserver(instance);

  disconnectObserver();

  t.true(disconnect.calledOnce);
  t.true(disconnect.calledWith(instance.element));

  t.is(instance.resizeObserver, null);
});

test('if connectObserver will remove the resize observer as a window listener when window resize is requested', (t) => {
  const disconnect = sinon.spy();

  const instance = {
    element: document.createElement('div'),
    resizeObserver: {
      disconnect
    },
    resizeMethod() {}
  };

  const disconnectObserver = component.createDisconnectObserver(instance);

  const stub = sinon.stub(window, 'removeEventListener');

  disconnectObserver();

  t.true(stub.calledOnce);
  t.true(stub.calledWith('resize', instance.resizeMethod));

  stub.restore();
});

test('if disconnectObserver does nothing if the resize observer does not exist', (t) => {
  const instance = {
    element: document.createElement('div'),
    resizeObserver: null
  };

  const disconnectObserver = component.createDisconnectObserver(instance);

  try {
    disconnectObserver();

    t.pass();
  } catch (error) {
    t.fail(error);
  }
});

test('if getPassedValues will return the populated state if there is no namespace', (t) => {
  const instance = {
    keys: KEYS.filter(({key}) => {
      return key === 'height' || key === 'width';
    })
  };

  const getPassedValues = component.createGetPassedValues(instance);

  t.true(getPassedValues.isMemoized);

  const state = {
    height: 123
  };
  const namespace = undefined;

  const result = getPassedValues(state, namespace);

  t.deepEqual(result, {
    ...state,
    width: 0
  });
});

test('if getPassedValues will return the populated state namespaced if there is one provided', (t) => {
  const instance = {
    keys: KEYS.filter(({key}) => {
      return key === 'height' || key === 'width';
    })
  };

  const getPassedValues = component.createGetPassedValues(instance);

  t.true(getPassedValues.isMemoized);

  const state = {
    height: 123
  };
  const namespace = 'namespace';

  const result = getPassedValues(state, namespace);

  t.deepEqual(result, {
    [namespace]: {
      ...state,
      width: 0
    }
  });
});

test('if setRef will assign the result of findDOMNode to the instance', (t) => {
  const instance = {};
  const ref = 'ref';

  const stub = sinon.stub(ReactDOM, 'findDOMNode').returnsArg(0);

  const setRef = component.createSetRef(instance, ref);

  const element = {};

  setRef(element);

  t.true(stub.calledOnce);
  t.true(stub.calledWith(element));

  stub.restore();

  t.is(instance[ref], element);
});

test('if setRenderMethod will use the children when applicable', (t) => {
  const instance = {
    RenderComponent: null
  };

  const setRenderMethod = component.createSetRenderMethod(instance);

  const props = {
    children() {}
  };

  setRenderMethod(props);

  t.is(instance.RenderComponent, props.children);
});

test('if setRenderMethod will use the component prop when applicable', (t) => {
  const instance = {
    RenderComponent: null
  };

  const setRenderMethod = component.createSetRenderMethod(instance);

  const props = {
    component() {}
  };

  setRenderMethod(props);

  t.is(instance.RenderComponent, props.component);
});

test('if setRenderMethod will use the render prop when applicable', (t) => {
  const instance = {
    RenderComponent: null
  };

  const setRenderMethod = component.createSetRenderMethod(instance);

  const props = {
    render() {}
  };

  setRenderMethod(props);

  t.is(instance.RenderComponent, props.render);
});

test('if setRenderMethod will log an error when no method is passed', (t) => {
  const instance = {
    RenderComponent: null
  };

  const setRenderMethod = component.createSetRenderMethod(instance);

  const props = {};

  const errorStub = sinon.stub(console, 'error');

  setRenderMethod(props);

  t.true(errorStub.calledOnce);

  errorStub.restore();

  t.is(instance.RenderComponent, null);
});

test('if setResizeObserver will disconnect the existing observer and connect the element', (t) => {
  const setValuesViaDebounce = sinon.spy();
  const setValuesViaRaf = sinon.spy();

  const instance = {
    connectObserver: sinon.spy(),
    disconnectObserver: sinon.spy(),
    element: document.createElement('div'),
    props: {},
    resizeMethod: setValuesViaRaf,
    resizeObserver() {},
    setValuesViaDebounce,
    setValuesViaRaf
  };

  const setResizeObserver = component.createSetResizeObserver(instance);

  setResizeObserver();

  t.is(instance.resizeMethod, setValuesViaRaf);

  t.true(instance.disconnectObserver.calledOnce);

  t.true(instance.connectObserver.calledOnce);
});

test('if setResizeObserver will not disconnect the existing observer if it does not exist', (t) => {
  const setValuesViaDebounce = sinon.spy();
  const setValuesViaRaf = sinon.spy();

  const instance = {
    connectObserver: sinon.spy(),
    disconnectObserver: sinon.spy(),
    element: document.createElement('div'),
    props: {},
    resizeMethod: setValuesViaRaf,
    resizeObserver: null,
    setValuesViaDebounce,
    setValuesViaRaf
  };

  const setResizeObserver = component.createSetResizeObserver(instance);

  setResizeObserver();

  t.is(instance.resizeMethod, setValuesViaRaf);

  t.true(instance.disconnectObserver.notCalled);

  t.true(instance.connectObserver.calledOnce);
});

test('if setResizeObserver will not connect the observer if the element does not exist', (t) => {
  const setValuesViaDebounce = sinon.spy();
  const setValuesViaRaf = sinon.spy();

  const instance = {
    connectObserver: sinon.spy(),
    disconnectObserver: sinon.spy(),
    element: null,
    props: {},
    resizeMethod: setValuesViaRaf,
    resizeObserver: null,
    setValuesViaDebounce,
    setValuesViaRaf
  };

  const setResizeObserver = component.createSetResizeObserver(instance);

  setResizeObserver();

  t.is(instance.resizeMethod, setValuesViaRaf);

  t.true(instance.disconnectObserver.notCalled);

  t.true(instance.connectObserver.notCalled);
});

test('if setResizeObserver will change the resize method if calcualted to be different', (t) => {
  const setValuesViaDebounce = sinon.spy();
  const setValuesViaRaf = sinon.spy();

  const instance = {
    connectObserver: sinon.spy(),
    disconnectObserver: sinon.spy(),
    element: null,
    props: {
      debounce: 200
    },
    resizeMethod: setValuesViaRaf,
    resizeObserver: null,
    setValuesViaDebounce,
    setValuesViaRaf
  };

  const setResizeObserver = component.createSetResizeObserver(instance);

  setResizeObserver();

  t.is(instance.resizeMethod, setValuesViaDebounce);

  t.true(setValuesViaDebounce.calledOnce);

  t.true(instance.disconnectObserver.notCalled);

  t.true(instance.connectObserver.notCalled);
});

test('if Measured renders correctly with default props', (t) => {
  const props = {
    height: true
  };

  const wrapper = mount(
    <Measured {...props}>
      {() => {
        return <div>Child</div>;
      }}
    </Measured>
  );

  t.snapshot(toJson(wrapper));
});

test('if Measured renders correctly with no RenderComponent', (t) => {
  const props = {
    height: true
  };

  const consoleStub = sinon.stub(console, 'error');

  const wrapper = mount(<Measured {...props} />);

  t.true(consoleStub.calledOnce);

  consoleStub.restore();

  t.snapshot(toJson(wrapper));
});
