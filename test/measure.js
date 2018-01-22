// test
import test from 'ava';
import React, {Component, PureComponent} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// src
import * as measure from 'src/measure';
import {KEY_NAMES} from 'src/constants';

test('if setOriginalRef will set the originalComponent on the instance', (t) => {
  const instance = {};

  const setOriginalRef = measure.createSetOriginalRef(instance);

  const component = 'component';

  setOriginalRef(component);

  t.true(instance.hasOwnProperty('originalComponent'));
  t.is(instance.originalComponent, component);
});

test('if getMeasuredComponent will return a component to render with a ref when Component', (t) => {
  class RenderedComponent extends Component {
    render() {
      return <div />;
    }
  }

  const Result = measure.getMeasuredComponent(RenderedComponent);

  const props = {
    _measuredComponentRef() {}
  };

  const wrapper = shallow(<Result {...props}>Children</Result>);

  t.snapshot(toJson(wrapper));
});

test('if getMeasuredComponent will return a component to render with a ref when PureComponent', (t) => {
  class RenderedComponent extends PureComponent {
    render() {
      return <div />;
    }
  }

  const Result = measure.getMeasuredComponent(RenderedComponent);

  const props = {
    _measuredComponentRef() {}
  };

  const wrapper = shallow(<Result {...props}>Children</Result>);

  t.snapshot(toJson(wrapper));
});

test('if getMeasuredComponent will return a component to render with a ref when stateless functional component', (t) => {
  const RenderedComponent = () => {
    return <div />;
  };

  const Result = measure.getMeasuredComponent(RenderedComponent);

  const props = {
    _measuredComponentRef() {}
  };

  const wrapper = shallow(<Result {...props}>Children</Result>);

  t.snapshot(toJson(wrapper));
});

test('if getMeasuredHoc will return a method that renders RenderedComponent in a Measured component', (t) => {
  const keys = ['height', 'width'];
  const options = {debounce: 200};

  const getMeasured = measure.getMeasuredHoc(keys, options);

  const RenderedComponent = () => {
    return <div />;
  };

  const Result = getMeasured(RenderedComponent);

  const wrapper = shallow(<Result>Children</Result>);

  t.snapshot(toJson(wrapper));
});

test('if measure will handle when passedKeys is a component', (t) => {
  const RenderedComponent = () => {
    return <div />;
  };

  const Result = measure.measure(RenderedComponent);

  t.snapshot(Result);
});

test('if measure will handle when passedKeys is an array', (t) => {
  const keys = ['height', 'width'];

  const result = measure.measure(keys);

  t.is(typeof result, 'function');

  const RenderedComponent = () => {
    return <div />;
  };

  const Result = result(RenderedComponent);

  t.snapshot(Result);
});

test('if measure will handle when passedKeys is an object', (t) => {
  const keys = {debounce: 500};
  const result = measure.measure(keys);

  t.is(typeof result, 'function');

  const RenderedComponent = () => {
    return <div />;
  };

  const Result = result(RenderedComponent);

  t.snapshot(Result);
});

test('if measure has a method as a property of itself for each key name', (t) => {
  KEY_NAMES.forEach((key) => {
    t.is(typeof measure.measure[key], 'function');

    const result = measure.measure[key]({});

    t.is(typeof result, 'function');
  });
});
