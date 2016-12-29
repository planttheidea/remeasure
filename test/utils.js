import test from 'ava';

import _ from 'lodash';

import {
  createIsKeyType,
  getKeyType,
  getKeysSubsetWithType,
  getNaturalDimensionValue,
  getRequestAnimationFrame,
  getScopedValues,
  getValidKeys,
  haveValuesChanged,
  isElementVoidTag,
  isPositionKey,
  isSizeKey,
  reduceStateToMatchingKeys
} from '../src/utils';

import {
  ALL_BOUNDING_CLIENT_RECT_KEYS,
  ALL_DOM_ELEMENT_KEYS,
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS,
  CLIENT_RECT_TYPE,
  ELEMENT_TYPE
} from '../src/constants';

const sleep = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

test('if createIsKeyType creates a function', (t) => {
  const result = createIsKeyType(['foo']);

  t.true(_.isFunction(result));
});

test('if getKeyType returns the correct type of key', (t) => {
  const propTypes = {
    positionProp: 'foo',
    sizeProp: 'bar'
  };
  const position = 'left';
  const size = 'width';
  const nil = 'foo';

  t.is(getKeyType(position, propTypes), propTypes.positionProp);
  t.is(getKeyType(size, propTypes), propTypes.sizeProp);
  t.is(getKeyType(nil, propTypes), null);
});

test('if getKeysSubsetWithType returns an array of object with source and type', (t) => {
  const propTypes = {
    positionProp: 'foo',
    sizeProp: 'bar'
  };

  const rectKeys = ['left', 'height'];
  const elKeys = ['scrollTop', 'offsetWidth'];

  const rectExpectedResult = [
    {
      key: rectKeys[0],
      source: CLIENT_RECT_TYPE,
      type: propTypes.positionProp
    }, {
      key: rectKeys[1],
      source: CLIENT_RECT_TYPE,
      type: propTypes.sizeProp
    }
  ];
  const rectResult = getKeysSubsetWithType(ALL_BOUNDING_CLIENT_RECT_KEYS, rectKeys, CLIENT_RECT_TYPE, propTypes);

  t.deepEqual(rectResult, rectExpectedResult);

  const elExpectedResult = [
    {
      key: elKeys[0],
      source: ELEMENT_TYPE,
      type: propTypes.positionProp
    }, {
      key: elKeys[1],
      source: ELEMENT_TYPE,
      type: propTypes.sizeProp
    }
  ];
  const elResult = getKeysSubsetWithType(ALL_DOM_ELEMENT_KEYS, elKeys, ELEMENT_TYPE, propTypes);

  t.deepEqual(elResult, elExpectedResult);
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

test('if getRequestAnimationFrame gets requestAnimationFrame from the global object', async (t) => {
  const result = getRequestAnimationFrame();

  t.true(_.isFunction(result));

  let hasRun = false;

  result(() => {
    hasRun = true;
  });

  t.false(hasRun);

  await sleep(1000 / 60);

  t.true(hasRun);
});

test('if getScopedValues returns an object with size or position or both with the correct values', (t) => {
  const sizeKeys = [
    {
      key: 'height',
      source: 'clientRect',
      type: 'size'
    }, {
      key: 'offsetHeight',
      source: 'element',
      type: 'size'
    }
  ];
  const positionKeys = [
    {
      key: 'left',
      source: 'clientRect',
      type: 'position'
    }, {
      key: 'offsetLeft',
      source: 'clientRect',
      type: 'position'
    }];
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

  const sizeValues = getScopedValues(sizeKeys, currentState, false);
  const positionValues = getScopedValues(positionKeys, currentState, false);
  const allValues = getScopedValues(allKeys, currentState, false);

  t.deepEqual(sizeValues, sizeResult);
  t.deepEqual(positionValues, positionResult);
  t.deepEqual(allValues, allResult);
});

test('if getValidKeys correctly limits the keys returned', (t) => {
  const keys = ['foo', 'bar', 'baz'];
  const keysToTestAgainst = ['foo', 'baz', 'blah', 'dee'];
  const validKeys = getValidKeys(keys, keysToTestAgainst);

  t.deepEqual(validKeys, ['foo', 'baz']);
});

test('if haveValuesChanged checks for changes between the two objects', (t) => {
  const keys = [{
    key: 'foo'
  }];
  const values = {
    foo: 'bar'
  };
  const sameValues = {
    foo: 'bar'
  };
  const changedValues = {
    foo: 'baz'
  };

  t.false(haveValuesChanged(keys, values, sameValues));
  t.true(haveValuesChanged(keys, values, changedValues));
});

test('if isElementVoidTag determines if element is a void tag or not', (t) => {
  const img = {
    tagName: 'IMG'
  };
  const div = {
    tagName: 'DIV'
  };

  t.true(isElementVoidTag(img));
  t.false(isElementVoidTag(div));
});

test('if isPositionKey determines if the key is a position property', (t) => {
  ALL_POSITION_KEYS.forEach((key) => {
    t.true(isPositionKey(key));
  });

  ALL_SIZE_KEYS.forEach((key) => {
    t.false(isPositionKey(key));
  });
});

test('if isSizeKey determines if the key is a size property', (t) => {
  ALL_POSITION_KEYS.forEach((key) => {
    t.false(isSizeKey(key));
  });

  ALL_SIZE_KEYS.forEach((key) => {
    t.true(isSizeKey(key));
  });
});

test('if reduceStateToMatchingKeys will return the keys mapped to an object with values of 0', (t) => {
  const keys = [{key: 'foo'}, {key: 'bar'}, {key: 'baz'}];

  const expectedResult = {
    foo: 0,
    bar: 0,
    baz: 0
  };
  const result = reduceStateToMatchingKeys(keys);

  t.deepEqual(result, expectedResult);
});
