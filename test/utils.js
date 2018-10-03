// test
import test from 'ava';
import React from 'react';

// src
import * as utils from 'src/utils';
import {
  KEY_NAMES,
  KEYS,
} from 'src/constants';

test('if getComponentName will return the correct name for the Component when displayName is provided', (t) => {
  const Foo = () => <div />;

  Foo.displayName = 'bar';

  const fooResult = utils.getComponentName(Foo);

  t.is(fooResult, Foo.displayName);
});

test('if getComponentName will return the correct name for the Component when name is available', (t) => {
  function Foo() {
    return <div />;
  }

  const fooResult = utils.getComponentName(Foo);

  t.is(fooResult, Foo.name);
});

test('if getComponentName will return the correct name for the Component when name is not available', (t) => {
  function Foo() {
    return <div />;
  }

  delete Foo.name;

  const fooResult = utils.getComponentName(Foo);

  t.is(fooResult, 'Foo');
});

test('if getComponentName will return the correct name for the Component when name is not found', (t) => {
  const fooResult = utils.getComponentName(() => <div />);

  t.is(fooResult, 'Component');
});

test('if getMeasureKeys handles when keys is an array', (t) => {
  const keys = ['height', 'width', 'invalid'];

  const result = utils.getMeasureKeys(keys);

  t.deepEqual(result, keys.slice(0, 2));
});

test('getMeasureKeys handles when keys is a string and valid', (t) => {
  const keys = 'height';

  const result = utils.getMeasureKeys(keys);

  t.deepEqual(result, [keys]);
});

test('getMeasureKeys handles when keys is a string and invalid', (t) => {
  const keys = 'invalid';

  const result = utils.getMeasureKeys(keys);

  t.is(result, KEY_NAMES);
});

test('getMeasureKeys handles when keys is neither an array nor string', (t) => {
  const keys = {};

  const result = utils.getMeasureKeys(keys);

  t.is(result, KEY_NAMES);
});

test('if getNaturalDimensionValue gets the correct value when natural prop is not provided', (t) => {
  const object = {
    scrollHeight: 200,
  };

  t.is(utils.getNaturalDimensionValue(object, 'naturalHeight'), object.scrollHeight);
});

test('if getNaturalDimensionValue gets the correct value based on key when natural prop is provided', (t) => {
  const object = {
    naturalHeight: 100,
    scrollHeight: 200,
  };

  t.is(utils.getNaturalDimensionValue(object, 'naturalHeight'), object.naturalHeight);
});

test('if getStateKeys will return the state keys if keys are requested explicitly', (t) => {
  const props = {
    keys: ['height', 'width', 'invalid'],
  };

  const result = utils.getStateKeys(props);

  t.deepEqual(result, KEYS.filter(({key}) => ~props.keys.indexOf(key) && ~KEY_NAMES.indexOf(key)));
});

test('if getStateKeys will return the state keys if keys are requested via props', (t) => {
  const props = {
    height: true,
    offsetHeight: false,
    width: true,
  };

  const result = utils.getStateKeys(props);

  t.deepEqual(result, KEYS.filter(({key}) => ~Object.keys(props).indexOf(key) && props[key]));
});

test('if getStateKeys will return all keys if keys are not requested', (t) => {
  const props = {};

  const result = utils.getStateKeys(props);

  t.is(result, KEYS);
});

test('if isElementVoidTag determines if element is a void tag or not', (t) => {
  const img = {
    tagName: 'IMG',
  };
  const div = {
    tagName: 'DIV',
  };

  t.true(utils.isElementVoidTag(img));
  t.false(utils.isElementVoidTag(div));
});
