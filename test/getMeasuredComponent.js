// test
import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';
import ReactDOM from 'react-dom';

// src
import * as component from '../src/getMeasuredComponent';
import * as utils from '../src/utils';
import {
  CLIENT_RECT_TYPE,
  ELEMENT_RESIZE_DETECTOR
} from '../src/constants';

test('if createComponentDidMount will assign the element to the instance and call updateValuesViaRaf', (t) => {
  const element = {
    tagName: 'DIV'
  };

  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);
  const resizeStub = sinon.stub(ELEMENT_RESIZE_DETECTOR, 'listenTo');

  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
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
  t.true(updateValuesStub.calledOnce);
  t.true(resizeStub.calledOnce);

  resizeStub.restore();
  findNodeStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidMount will assign the element to the instance and not call updateValuesViaRaf if element is null', (t) => {
  const element = null;

  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);
  const resizeStub = sinon.stub(ELEMENT_RESIZE_DETECTOR, 'listenTo');

  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
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
  t.true(updateValuesStub.notCalled);
  t.true(resizeStub.notCalled);

  resizeStub.restore();
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

  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const clearValuesStub = sinon.stub(utils, 'clearValues');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(newElement);
  const resizeStub = sinon.stub(ELEMENT_RESIZE_DETECTOR, 'listenTo');

  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
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
  t.true(updateValuesStub.calledOnce);
  t.true(clearValuesStub.notCalled);
  t.true(resizeStub.calledOnce);

  resizeStub.restore();
  findNodeStub.restore();
  clearValuesStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidUpdate will not assign the element if it has not changed', (t) => {
  const element = {
    tagName: 'DIV'
  };

  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const clearValuesStub = sinon.stub(utils, 'clearValues');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);
  const resizeStub = sinon.stub(ELEMENT_RESIZE_DETECTOR, 'listenTo');
  const setElementSpy = sinon.spy(utils, 'setElement');

  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
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

  t.true(setElementSpy.notCalled);
  t.true(findNodeStub.calledOnce);
  t.true(updateValuesStub.calledOnce);
  t.true(clearValuesStub.notCalled);
  t.true(resizeStub.notCalled);

  setElementSpy.restore();
  resizeStub.restore();
  findNodeStub.restore();
  clearValuesStub.restore();
  updateValuesStub.restore();
});

test('if createComponentDidUpdate will call clearValues instead of updateValuesViaRaf if there is no element', (t) => {
  const element = null;

  const updateValuesStub = sinon.stub(utils, 'updateValuesViaRaf');
  const clearValuesStub = sinon.stub(utils, 'clearValues');
  const findNodeStub = sinon.stub(ReactDOM, 'findDOMNode').returns(element);
  const resizeStub = sinon.stub(ELEMENT_RESIZE_DETECTOR, 'listenTo');
  const setElementSpy = sinon.spy(utils, 'setElement');

  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
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

  t.true(setElementSpy.notCalled);
  t.true(findNodeStub.calledOnce);
  t.true(updateValuesStub.notCalled);
  t.true(clearValuesStub.calledOnce);
  t.true(resizeStub.notCalled);

  setElementSpy.restore();
  resizeStub.restore();
  findNodeStub.restore();
  clearValuesStub.restore();
  updateValuesStub.restore();
});

test('if createComponentWillUnmount will reset the instance values', (t) => {
  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
  const instance = {
    element: 'foo',
    setMeasurements(measurements) {
      t.deepEqual(measurements, {
        [key]: 0
      });
    }
  };

  const fn = component.createComponentWillUnmount(instance, selectedKeys);

  t.true(_.isFunction(fn));

  fn();

  t.is(instance.element, null);
  t.is(instance.resizeListener, null);
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
