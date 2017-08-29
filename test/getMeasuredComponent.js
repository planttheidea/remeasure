// test
import test from 'ava';
import _ from 'lodash';
import {mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

// src
import * as component from '../src/getMeasuredComponent';
import * as utils from '../src/utils';
import {CLIENT_RECT_TYPE} from '../src/constants';

test('if createComponentDidMount will assign the element to the instance and call updateValuesViaRaf', (t) => {
  const element = {
    tagName: 'DIV'
  };

  const setElementStub = sinon.stub(utils, 'setElement');
  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);

  const key = 'width';
  const selectedKeys = [{key, source: CLIENT_RECT_TYPE}];
  const instance = {
    _isMounted: false,
    element: null,
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const fn = component.createComponentDidMount(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.true(findNodeStub.calledOnce);
  t.true(setElementStub.calledOnce);
  t.true(updateValuesStub.calledOnce);

  setElementStub.restore();
  findNodeStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidMount will assign the element to the instance and not call updateValuesViaRaf if element is null', (t) => {
  const element = null;

  const setElementStub = sinon.stub(utils, 'setElement');
  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);

  const key = 'width';
  const selectedKeys = [{key, source: CLIENT_RECT_TYPE}];
  const instance = {
    _isMounted: false,
    element: null,
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const fn = component.createComponentDidMount(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.true(findNodeStub.calledOnce);
  t.true(setElementStub.calledOnce);
  t.true(updateValuesStub.notCalled);

  setElementStub.restore();
  findNodeStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidUpdate will assign the element if it has changed to the instance and call updateValuesViaRaf', (t) => {
  const element = {
    tagName: 'DIV'
  };
  const newElement = {
    tagName: 'DIV'
  };

  const setElementStub = sinon.stub(utils, 'setElement');
  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const clearValuesStub = sinon.stub(utils, 'clearValues');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(newElement);

  const key = 'width';
  const selectedKeys = [{key, source: CLIENT_RECT_TYPE}];
  const instance = {
    _isMounted: false,
    element,
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const fn = component.createComponentDidUpdate(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.true(findNodeStub.calledOnce);
  t.true(setElementStub.calledOnce);
  t.true(updateValuesStub.calledOnce);
  t.true(clearValuesStub.notCalled);

  setElementStub.restore();
  findNodeStub.restore();
  clearValuesStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidUpdate will not assign the element if it has not changed', (t) => {
  const element = {
    tagName: 'DIV'
  };

  const setElementStub = sinon.stub(utils, 'setElement');
  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const clearValuesStub = sinon.stub(utils, 'clearValues');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);

  const key = 'width';
  const selectedKeys = [{key, source: CLIENT_RECT_TYPE}];
  const instance = {
    _isMounted: false,
    element,
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const fn = component.createComponentDidUpdate(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.true(findNodeStub.calledOnce);
  t.true(setElementStub.notCalled);
  t.true(updateValuesStub.calledOnce);
  t.true(clearValuesStub.notCalled);

  setElementStub.restore();
  findNodeStub.restore();
  clearValuesStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidUpdate will call clearValues instead of updateValuesViaRaf if there is no element', (t) => {
  const element = null;

  const setElementStub = sinon.stub(utils, 'setElement');
  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const clearValuesStub = sinon.stub(utils, 'clearValues');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);

  const key = 'width';
  const selectedKeys = [{key, source: CLIENT_RECT_TYPE}];
  const instance = {
    _isMounted: false,
    element,
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const fn = component.createComponentDidUpdate(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.true(findNodeStub.calledOnce);
  t.true(setElementStub.notCalled);
  t.true(updateValuesStub.notCalled);
  t.true(clearValuesStub.calledOnce);

  setElementStub.restore();
  findNodeStub.restore();
  clearValuesStub.restore();
  updateValuesStub.restore();
});

test('if createComponentWillUnmount will reset the instance values', (t) => {
  const key = 'width';
  const selectedKeys = [{key, source: CLIENT_RECT_TYPE}];
  const instance = {
    element: 'foo',
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const removeElementResizeStub = sinon.stub(utils, 'removeElementResize');

  const fn = component.createComponentWillUnmount(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.true(removeElementResizeStub.calledOnce);

  removeElementResizeStub.restore();
});

test('if createSetMeasurements will create a function that sets the instance measurements and calls forceUpdate if mounted', (t) => {
  const instance = {
    _isMounted: true,
    forceUpdate: sinon.stub(),
    measurements: {}
  };
  const measurements = {
    foo: 'bar'
  };

  const setMeasurements = component.createSetMeasurements(instance);

  t.true(_.isFunction(setMeasurements));

  setMeasurements(measurements);

  t.is(instance.measurements, measurements);
  t.true(instance.forceUpdate.calledOnce);
});

test('if createSetMeasurements will create a function that sets the instance measurements and does not call forceUpdate if not mounted', (t) => {
  const instance = {
    _isMounted: false,
    forceUpdate: sinon.stub(),
    measurements: {}
  };
  const measurements = {
    foo: 'bar'
  };

  const setMeasurements = component.createSetMeasurements(instance);

  t.true(_.isFunction(setMeasurements));

  setMeasurements(measurements);

  t.is(instance.measurements, measurements);
  t.true(instance.forceUpdate.notCalled);
});

test('if createSetOriginalRef will create a function that assigns the param passed to it to the instance at originalComponent', (t) => {
  const instance = {
    originalComponent: null
  };

  const setOriginalRef = component.createSetOriginalRef(instance);

  t.true(_.isFunction(setOriginalRef));

  const originalComponent = {};

  setOriginalRef(originalComponent);

  t.is(instance.originalComponent, originalComponent);
});

test('if createUpdateValuesIfChanged will create a function that calls setUpdateValuesIfChanged if it exists', (t) => {
  const instance = {
    _isMounted: true,
    element: {
      foo: 200,
      getBoundingClientRect() {
        return {
          foo: 200
        };
      }
    },
    measurements: {
      foo: 0
    },
    setMeasurements({foo}) {
      t.is(foo, instance.element.foo);
    }
  };
  const selectedKeys = [
    {
      key: 'foo',
      source: 'clientRect'
    }
  ];

  const updateValuesIfChanged = component.createUpdateValuesIfChanged(instance, selectedKeys);

  t.true(_.isFunction(updateValuesIfChanged));

  updateValuesIfChanged();
});

test('if getMeasuredComponent will return a function that creates a higher-order component', (t) => {
  const keys = ['width'];
  const options = {};

  const createHigherOrderComponent = component.default(keys, options);

  t.true(_.isFunction(createHigherOrderComponent));

  class Foo extends React.Component {}

  const Result = createHigherOrderComponent(Foo);

  t.true(_.isFunction(Result));
  t.is(Result.name, 'MeasuredComponent');
  t.is(Result.displayName, `Measured(${Foo.name})`);
});

test('if getMeasuredComponent will return the correct component type based on the component being wrapped', (t) => {
  const keys = ['width'];
  const options = {};

  const createHigherOrderComponent = component.default(keys, options);

  class Standard extends React.Component {}
  class Pure extends React.PureComponent {}
  const Functional = () => {};

  const StandardResult = createHigherOrderComponent(Standard);
  const PureResult = createHigherOrderComponent(Pure);
  const FunctionalResult = createHigherOrderComponent(Functional);

  t.is(Object.getPrototypeOf(StandardResult), React.Component);
  t.is(Object.getPrototypeOf(PureResult), React.PureComponent);
  t.is(Object.getPrototypeOf(FunctionalResult), React.Component);
});

test('if getMeasuredComponent will return a function that creates a component for rendering', (t) => {
  const keys = ['width'];
  const options = {};

  const createHigherOrderComponent = component.default(keys, options);

  const Foo = ({foo, width}) => {
    return (
      <div>
        <div>
          Foo: {foo}
        </div>

        <div>
          Width: {width}
        </div>
      </div>
    );
  };

  const MeasuredFoo = createHigherOrderComponent(Foo);

  const wrapper = shallow(<MeasuredFoo foo="bar" />);

  t.snapshot(toJson(wrapper));
});

test('if getMeasuredComponent will call setInheritedMethods when constructed if inheritedMethods exist', (t) => {
  const keys = ['width'];
  const options = {
    inheritedMethods: ['foo']
  };

  const createHigherOrderComponent = component.default(keys, options);

  const foo = () => {};

  class Foo extends React.Component {
    foo = foo;

    render() {
      return <div />;
    }
  }

  const MeasuredFoo = createHigherOrderComponent(Foo);

  const wrapper = shallow(<MeasuredFoo />);

  t.true(_.isFunction(wrapper.instance().foo));
});
