// test
import test from 'ava';
import _ from 'lodash';
import React, {Component} from 'react';
import sinon from 'sinon';

// src
import measure from '../src/index';
import * as component from '../src/getMeasuredComponent';
import * as utils from '../src/utils';
import {ALL_KEYS} from '../src/constants';

const REACT_ELEMENT_TYPE = (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

@measure
class TestStateful extends Component {
  render() {
    return <div>Test</div>;
  }
}

const TestStateless = measure(() => {
  return <div>Test</div>;
});

const options = {
  debounce: true
};

@measure(options)
class TestStatefulWithOptions extends Component {
  render() {
    return <div>Test</div>;
  }
}

const TestStatelessWithOptions = measure(options)(() => {
  return <div>Test</div>;
});

const keys = ['height', 'width'];

@measure(keys)
class TestStatefulWithKeys extends Component {
  render() {
    return <div>Test</div>;
  }
}

const TestStatelessWithKeys = measure(keys)(() => {
  return <div>Test</div>;
});

@measure(keys, options)
class TestStatefulWithKeysAndOptions extends Component {
  render() {
    return <div>Test</div>;
  }
}

const TestStatelessWithKeysAndOptions = measure(keys, options)(() => {
  return <div>Test</div>;
});

test('if measure returns a higher-order component', (t) => {
  const testStateful = <TestStateful />;
  const testStateless = <TestStateless />;
  const testStatefulWithOptions = <TestStatefulWithOptions />;
  const testStatelessWithOptions = <TestStatelessWithOptions />;
  const testStatefulWithKeys = <TestStatefulWithKeys />;
  const testStatelessWithKeys = <TestStatelessWithKeys />;
  const testStatefulWithKeysAndOptions = <TestStatefulWithKeysAndOptions />;
  const testStatelessWithKeysAndOptions = <TestStatelessWithKeysAndOptions />;

  t.is(typeof TestStateful, 'function');
  t.is(TestStateful.name, 'MeasuredComponent');
  t.is(testStateful.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStateless, 'function');
  t.is(TestStateless.name, 'MeasuredComponent');
  t.is(testStateless.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatefulWithOptions, 'function');
  t.is(TestStatefulWithOptions.name, 'MeasuredComponent');
  t.is(testStatefulWithOptions.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatelessWithOptions, 'function');
  t.is(TestStatelessWithOptions.name, 'MeasuredComponent');
  t.is(testStatelessWithOptions.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatefulWithKeys, 'function');
  t.is(TestStatefulWithKeys.name, 'MeasuredComponent');
  t.is(testStatefulWithKeys.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatelessWithKeys, 'function');
  t.is(TestStatelessWithKeys.name, 'MeasuredComponent');
  t.is(testStatelessWithKeys.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatefulWithKeysAndOptions, 'function');
  t.is(TestStatefulWithKeysAndOptions.name, 'MeasuredComponent');
  t.is(testStatefulWithKeysAndOptions.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatelessWithKeysAndOptions, 'function');
  t.is(TestStatelessWithKeysAndOptions.name, 'MeasuredComponent');
  t.is(testStatelessWithKeysAndOptions.$$typeof, REACT_ELEMENT_TYPE);
});

test('if each member of ALL_KEYS has a convenience method on measure', (t) => {
  ALL_KEYS.forEach((key) => {
    t.true(_.isFunction(measure[key]));
  });
});

test('if measure will accept a string value for keys', (t) => {
  const getMeasuredComponentStub = sinon.stub(component, 'default');

  const key = 'width';

  measure(key);

  t.true(getMeasuredComponentStub.calledOnce);

  const args = getMeasuredComponentStub.firstCall.args;

  t.deepEqual(args, [[key], {}]);

  getMeasuredComponentStub.restore();
});

test('if measure will accept an array value for keys', (t) => {
  const getMeasuredComponentStub = sinon.stub(component, 'default');

  const keys = ['height', 'width'];

  const getMeasuredKeysStub = sinon.stub(utils, 'getMeasuredKeys').returns(keys);

  measure(keys);

  t.true(getMeasuredComponentStub.calledOnce);
  t.true(getMeasuredKeysStub.calledOnce);

  const args = getMeasuredComponentStub.firstCall.args;

  t.deepEqual(args, [keys, {}]);

  getMeasuredComponentStub.restore();
  getMeasuredKeysStub.restore();
});

test('if measure will default to ALL_KEYS', (t) => {
  const getMeasuredComponentStub = sinon.stub(component, 'default');

  measure();

  t.true(getMeasuredComponentStub.calledOnce);

  const args = getMeasuredComponentStub.firstCall.args;

  t.deepEqual(args, [ALL_KEYS, {}]);

  getMeasuredComponentStub.restore();
});

test('if measure.flatten will set the flatten option to true', (t) => {
  const getMeasuredComponentStub = sinon.stub(component, 'default');

  measure.flatten();

  t.true(getMeasuredComponentStub.calledOnce);

  const args = getMeasuredComponentStub.firstCall.args;

  t.deepEqual(args, [ALL_KEYS, {flatten: true}]);

  getMeasuredComponentStub.restore();
});
