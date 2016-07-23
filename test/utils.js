import test from 'ava';

import {
  arrayContains,
  createObjectFromKeys,
  forEach,
  getNaturalDimensionValue,
  getValidKeys,
  getValues,
  isArray,
  isObject,
  isString,
  isUndefined
} from '../src/utils';

const DEFAULT_OPTIONS = {
  positionProp: 'position',
  renderOnResize: true,
  sizeProp: 'size'
};

test('if arrayContains correctly identifies when an array contains an item', (t) => {
  const array = ['foo', 12];

  t.true(arrayContains(array, 'foo'));
  t.true(arrayContains(array, 12));
  t.false(arrayContains(array, 'bar'));
  t.false(arrayContains(array, '12'));
});

test('if createObjectFromKeys creates an object from the keys passed', (t) => {
  const keys = ['foo', 'bar'];
  const source = {
    foo: 'bar',
    bar: 'baz'
  };
  const target = createObjectFromKeys(keys, source);

  t.not(source, target);
  t.deepEqual(source, target);
});

test('if forEach correctly loops over all items in an array', (t) => {
  const source = ['foo', 'bar', 'baz'];

  let target = [];

  forEach(source, (item) => {
    target.push(item);
  });

  t.deepEqual(source, target);
});

test('if getNaturalDimensionValue gets the correct value based on key', (t) => {
  const objectWithoutNaturalValue = {
    scrollHeight: 200
  };
  const objectWithNaturalValue = {
    ...objectWithoutNaturalValue,
    naturalHeight: 100
  };

  t.is(getNaturalDimensionValue(objectWithoutNaturalValue, 'naturalHeight'), objectWithNaturalValue.scrollHeight);
  t.is(getNaturalDimensionValue(objectWithNaturalValue, 'naturalHeight'), objectWithNaturalValue.naturalHeight);
});

test('if getValidKeys correctly limits the keys returned', (t) => {
  const keys = ['foo', 'bar', 'baz'];
  const keysToTestAgainst = ['foo', 'baz', 'blah', 'dee'];
  const validKeys = getValidKeys(keys, keysToTestAgainst);

  t.deepEqual(validKeys, ['foo', 'baz']);
});

test('if getValues returns an object with size or position or both with the correct values', (t) => {
  const sizeKeys = ['height', 'offsetHeight'];
  const positionKeys = ['left', 'offsetLeft'];
  const allKeys = [
    ...sizeKeys,
    ...positionKeys
  ];
  const currentState = {
    height: 100,
    left: 50,
    offsetHeight: 90,
    offsetLeft: 10
  };
  const sizeResult = {
    size: {
      height: 100,
      offsetHeight: 90
    }
  };
  const positionResult = {
    position: {
      left: 50,
      offsetLeft: 10
    }
  };
  const allResult = {
    ...sizeResult,
    ...positionResult
  };

  const sizeValues = getValues(sizeKeys, currentState, DEFAULT_OPTIONS);
  const positionValues = getValues(positionKeys, currentState, DEFAULT_OPTIONS);
  const allValues = getValues(allKeys, currentState, DEFAULT_OPTIONS);

  t.deepEqual(sizeValues, sizeResult);
  t.deepEqual(positionValues, positionResult);
  t.deepEqual(allValues, allResult);
});

test('if isArray correctly identifies an array vs other object types', (t) => {
  t.false(isArray(undefined));
  t.false(isArray(null));
  t.false(isArray('foo'));
  t.false(isArray(12));
  t.true(isArray([]));
  t.false(isArray({}));
  t.false(isArray(new Date()));
});

test('if isObject correctly identifies an object vs other object types', (t) => {
  t.false(isObject(undefined));
  t.false(isObject(null));
  t.false(isObject('foo'));
  t.false(isObject(12));
  t.false(isObject([]));
  t.true(isObject({}));
  t.false(isObject(new Date()));
});

test('if isString correctly identifies a string vs other object types', (t) => {
  t.false(isString(undefined));
  t.false(isString(null));
  t.true(isString('foo'));
  t.false(isString(12));
  t.false(isString([]));
  t.false(isString({}));
  t.false(isString(new Date()));
});

test('if isUndefined correctly identifies a string vs other object types', (t) => {
  t.true(isUndefined(undefined));
  t.false(isUndefined(null));
  t.false(isUndefined('foo'));
  t.false(isUndefined(12));
  t.false(isUndefined([]));
  t.false(isUndefined({}));
  t.false(isUndefined(new Date()));
});