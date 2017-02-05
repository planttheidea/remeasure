// test
import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';
import raf from 'raf';
import ReactDOM from 'react-dom';

// src
import * as utils from '../src/utils';
import {
  ALL_BOUNDING_CLIENT_RECT_KEYS,
  ALL_DOM_ELEMENT_KEYS,
  ALL_POSITION_KEYS,
  ALL_SIZE_KEYS,
  CLIENT_RECT_TYPE,
  ELEMENT_TYPE,
  POSITION_PROP_DEFAULT,
  SIZE_PROP_DEFAULT
} from '../src/constants';

const sleep = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

test('if clearValues calls setState with emptyValues based on selectedKeys', (t) => {
  const key = 'width';
  const selectedKeys = [
    {key, source: CLIENT_RECT_TYPE}
  ];
  const instance = {
    setState(state) {
      t.deepEqual(state, {
        [key]: 0
      });
    },
    state: {
      [key]: 15
    }
  };

  utils.clearValues(instance, selectedKeys);
});

test('if createRemoveInstanceElement will reset the instance values', (t) => {
  const instance = {};

  const fn = utils.createRemoveInstanceElement(instance);

  t.true(_.isFunction(fn));

  fn();

  t.is(instance.element, null);
  t.false(instance.hasResize);
});

test.todo('createSetInstanceElement');

test('if createFlattenConvenienceFunction will return a decorator function', (t) => {
  const measure = () => {};
  const key = 'width';

  const decorator = utils.createFlattenConvenienceFunction(measure, key);

  t.true(_.isFunction(decorator));
});

test('if createFlattenConvenienceFunction will return a decorator function that will call with additional options and the key passed', (t) => {
  const key = 'width';
  const extraOpts = {
    renderOnRedize: false
  };
  const measure = (props, opts) => {
    t.is(props, key);
    t.deepEqual(opts, {
      ...extraOpts,
      flatten: true
    });
  };

  const decorator = utils.createFlattenConvenienceFunction(measure, key);

  decorator(extraOpts);
});

test('if createGetDOMElement create a function that will call the findDOMNode method of ReactDOM with the instance passed', (t) => {
  const foo = {};
  const stub = sinon.stub(ReactDOM, 'findDOMNode', (instance) => {
    t.is(instance, foo);
  });

  const getDOMNode = utils.createGetDOMElement(foo);

  t.true(_.isFunction(getDOMNode));

  getDOMNode();

  t.true(stub.calledOnce);

  stub.restore();
});

test('if createGetScopedValues returns a function which returns an object with size or position or both with the correct values', (t) => {
  const getScopedValues = utils.createGetScopedValues();

  t.true(_.isFunction(getScopedValues));

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

  const sizeValues = getScopedValues(currentState, sizeKeys, false);

  t.deepEqual(sizeValues, sizeResult);

  const positionValues = getScopedValues(currentState, positionKeys, false);

  t.deepEqual(positionValues, positionResult);

  const allValues = getScopedValues(currentState, allKeys, false);

  t.deepEqual(allValues, allResult);
});

test('if createIsKeyType creates a function', (t) => {
  const result = utils.createIsKeyType(['foo']);

  t.true(_.isFunction(result));
});

test('if createUpdateValuesViaDebounce creates a debounced function that fires updateValuesIfChanged', async (t) => {
  const debounceValue = 1000;
  const instance = {
    element: 'foo',
    updateValuesIfChanged: sinon.stub()
  };

  const fn = utils.createUpdateValuesViaDebounce(instance, debounceValue);

  t.true(_.isFunction(fn));

  fn();

  t.false(instance.updateValuesIfChanged.calledOnce);

  await sleep(debounceValue);

  t.true(instance.updateValuesIfChanged.calledOnce);
});

test('if getComponentName will return the correct name for the Component', (t) => {
  const Foo = () => {};

  const fooResult = utils.getComponentName(Foo);

  t.is(fooResult, 'Foo');

  Foo.displayName = 'Overridden';

  const overriddenResult = utils.getComponentName(Foo);

  t.is(overriddenResult, 'Overridden');

  const lamdaResult = utils.getComponentName(() => {});

  t.is(lamdaResult, 'Component');
});

test('if getElementValues will return an object of key => value pairs representing the property and measurement', (t) => {
  const normalKey = 'offsetWidth';
  const rectKey = 'width';
  const element = {
    getBoundingClientRect() {
      return {
        [rectKey]: 10
      };
    },
    [normalKey]: 15
  };
  const keys = [
    {key: normalKey, source: ELEMENT_TYPE},
    {key: rectKey, source: CLIENT_RECT_TYPE}
  ];

  const values = utils.getElementValues(element, keys);
  const expectedResult = {
    [normalKey]: element[normalKey],
    [rectKey]: element.getBoundingClientRect()[rectKey]
  };

  t.deepEqual(values, expectedResult);
});

test('if getKeyType returns the correct type of key', (t) => {
  const propTypes = {
    positionProp: 'foo',
    sizeProp: 'bar'
  };
  const position = 'left';
  const size = 'width';
  const nil = 'foo';

  t.is(utils.getKeyType(position, propTypes), propTypes.positionProp);
  t.is(utils.getKeyType(size, propTypes), propTypes.sizeProp);
  t.is(utils.getKeyType(nil, propTypes), null);
});

test('if getKeysFromStringKey will return ALL_POSITION_KEYS when key is equal to positionProp', (t) => {
  const key = 'foo';
  const options = {
    positionProp: key
  };

  const result = utils.getKeysFromStringKey(key, options);

  t.is(result, ALL_POSITION_KEYS);
});

test('if getKeysFromStringKey will return ALL_SIZE_KEYS when key is equal to sizeProp', (t) => {
  const key = 'foo';
  const options = {
    sizeProp: key
  };

  const result = utils.getKeysFromStringKey(key, options);

  t.is(result, ALL_SIZE_KEYS);
});

test('if getKeysFromStringKey will return key wrapped in array when key is not equal to positionProp or sizeProp', (t) => {
  const key = 'foo';
  const options = {};

  const result = utils.getKeysFromStringKey(key, options);

  t.deepEqual(result, [key]);
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
  const rectResult = utils.getKeysSubsetWithType(ALL_BOUNDING_CLIENT_RECT_KEYS, rectKeys, CLIENT_RECT_TYPE, propTypes);

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
  const elResult = utils.getKeysSubsetWithType(ALL_DOM_ELEMENT_KEYS, elKeys, ELEMENT_TYPE, propTypes);

  t.deepEqual(elResult, elExpectedResult);
});

test('if getKeysWithSourceAndType returns an array of objects representing the keys and their source types', (t) => {
  const keys = ['left', 'width', 'offsetLeft', 'offsetWidth'];
  const options = {};

  const result = utils.getKeysWithSourceAndType(keys, options);
  const expectedResult = keys.map((key) => {
    const lowercaseKey = key.toLowerCase();

    return {
      key,
      source: !~lowercaseKey.indexOf('offset') ? CLIENT_RECT_TYPE : ELEMENT_TYPE,
      type: !~lowercaseKey.indexOf('left') ? SIZE_PROP_DEFAULT : POSITION_PROP_DEFAULT
    };
  });

  t.deepEqual(result, expectedResult);
});

test('if getNaturalDimensionValue gets the correct value based on key', (t) => {
  const objectWithoutNaturalValue = {
    scrollHeight: 200
  };
  const objectWithNaturalValue = {
    ...objectWithoutNaturalValue,
    naturalHeight: 100
  };

  t.is(utils.getNaturalDimensionValue(objectWithoutNaturalValue, 'naturalHeight'), objectWithNaturalValue.scrollHeight);
  t.is(utils.getNaturalDimensionValue(objectWithNaturalValue, 'naturalHeight'), objectWithNaturalValue.naturalHeight);
});

test('if getPropKeyNames returns an object with positionProp and sizeProp populated', (t) => {
  const defaultValue = utils.getPropKeyNames({});

  t.deepEqual(defaultValue, {
    positionProp: POSITION_PROP_DEFAULT,
    sizeProp: SIZE_PROP_DEFAULT
  });

  const customOptions = {
    positionProp: 'foo',
    sizeProp: 'bar'
  };

  const customValue = utils.getPropKeyNames(customOptions);

  t.deepEqual(customValue, customOptions);
});

test('if getValidKeys correctly limits the keys returned', (t) => {
  const keys = ['foo', 'bar', 'baz'];
  const keysToTestAgainst = ['foo', 'baz', 'blah', 'dee'];
  const validKeys = utils.getValidKeys(keys, keysToTestAgainst);

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

  t.false(utils.haveValuesChanged(keys, values, sameValues));
  t.true(utils.haveValuesChanged(keys, values, changedValues));
});

test('if isElementVoidTag determines if element is a void tag or not', (t) => {
  const img = {
    tagName: 'IMG'
  };
  const div = {
    tagName: 'DIV'
  };

  t.true(utils.isElementVoidTag(img));
  t.false(utils.isElementVoidTag(div));
});

test('if isPositionKey determines if the key is a position property', (t) => {
  ALL_POSITION_KEYS.forEach((key) => {
    t.true(utils.isPositionKey(key));
  });

  ALL_SIZE_KEYS.forEach((key) => {
    t.false(utils.isPositionKey(key));
  });
});

test('if isSizeKey determines if the key is a size property', (t) => {
  ALL_POSITION_KEYS.forEach((key) => {
    t.false(utils.isSizeKey(key));
  });

  ALL_SIZE_KEYS.forEach((key) => {
    t.true(utils.isSizeKey(key));
  });
});

test('if reduceStateToMatchingKeys will return the keys mapped to an object with values of 0', (t) => {
  const keys = [{key: 'foo'}, {key: 'bar'}, {key: 'baz'}];

  const expectedResult = {
    foo: 0,
    bar: 0,
    baz: 0
  };
  const result = utils.reduceStateToMatchingKeys(keys);

  t.deepEqual(result, expectedResult);
});

test('if setElement will set element to instance passed', (t) => {
  const instance = {};
  const element = 'foo';
  const debounceValue = 0;
  const renderOnResize = false;

  utils.setElement(instance, element, debounceValue, renderOnResize);

  t.is(instance.element, element);
});

test('if setElement will set hasResize to instance passed when element is falsy', (t) => {
  const instance = {};
  const element = null;
  const debounceValue = 0;
  const renderOnResize = false;

  utils.setElement(instance, element, debounceValue, renderOnResize);

  t.false(instance.hasResize);
});

test('if setElement will set hasResize to instance passed when renderOnResize is true', (t) => {
  const instance = {};
  const element = {
    appendChild() {},
    tagName: 'DIV'
  };
  const debounceValue = 0;
  const renderOnResize = true;

  const original = global.getComputedStyle;

  global.getComputedStyle = sinon.stub();

  global.getComputedStyle.returns({
    position: 'relative'
  });

  utils.setElement(instance, element, debounceValue, renderOnResize);

  t.true(instance.hasResize);

  global.getComputedStyle = original;
});

test.todo('setElementResize');

test('if setValuesIfChanged will call setState with the values if they have changed', (t) => {
  const key = 'width';
  const keys = [
    {
      key,
      source: CLIENT_RECT_TYPE,
      type: POSITION_PROP_DEFAULT
    }
  ];
  const values = {
    [key]: 123
  };

  const instance = {
    mounted: true,
    setState(valuesPassed) {
      t.is(values, valuesPassed);
    },
    state: {
      [key]: 0
    }
  };

  utils.setValuesIfChanged(instance, keys, values);
});

test('if setValuesIfChanged will not call setState if the values have not changed', (t) => {
  const key = 'width';
  const keys = [
    {
      key,
      source: CLIENT_RECT_TYPE,
      type: POSITION_PROP_DEFAULT
    }
  ];
  const values = {
    [key]: 123
  };

  const instance = {
    mounted: true,
    setState: sinon.stub(),
    state: {
      [key]: 123
    }
  };

  utils.setValuesIfChanged(instance, keys, values);

  t.false(instance.setState.calledOnce);
});

test('if setValuesIfChanged will not call setState if the values have changed but mounted is false', (t) => {
  const key = 'width';
  const keys = [
    {
      key,
      source: CLIENT_RECT_TYPE,
      type: POSITION_PROP_DEFAULT
    }
  ];
  const values = {
    [key]: 123
  };

  const instance = {
    mounted: false,
    setState: sinon.stub(),
    state: {
      [key]: 0
    }
  };

  utils.setValuesIfChanged(instance, keys, values);

  t.false(instance.setState.calledOnce);
});

test('if updateValuesViaRaf will call updateValuesIfChanged on the instance after an animation frame tick', (t) => {
  const instance = {
    element: 'foo',
    updateValuesIfChanged: sinon.stub()
  };

  utils.updateValuesViaRaf(instance);

  t.false(instance.updateValuesIfChanged.calledOnce);

  raf(() => {
    t.true(instance.updateValuesIfChanged.calledOnce);
  });
});
