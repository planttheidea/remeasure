import test from 'ava';

import {
  createObjectFromKeys,
  getNaturalDimensionValue,
  getValidKeys,
  getValues,
} from '../src/utils';

const DEFAULT_OPTIONS = {
  positionProp: 'position',
  renderOnResize: true,
  sizeProp: 'size'
};

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