import React, {
  Component
} from 'react';

import test from 'ava';

import './utils';

import measure from '../src/index';

const REACT_ELEMENT_TYPE = (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

@measure
class TestStateful extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

const TestStateless = measure(() => {
  return (
    <div>
      Test
    </div>
  );
});

const options = {
  renderOnResize: false
};

@measure(options)
class TestStatefulWithOptions extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

const TestStatelessWithOptions = measure(options)(() => {
  return (
    <div>
      Test
    </div>
  );
});

const keys = [
  'height',
  'width'
];

@measure(keys)
class TestStatefulWithKeys extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

const TestStatelessWithKeys = measure(keys)(() => {
  return (
    <div>
      Test
    </div>
  );
});

@measure(keys, options)
class TestStatefulWithKeysAndOptions extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

const TestStatelessWithKeysAndOptions = measure(keys, options)(() => {
  return (
    <div>
      Test
    </div>
  );
});

test('if measure returns a higher-order component', (t) => {
  const testStateful = <TestStateful/>;
  const testStateless = <TestStateless/>;
  const testStatefulWithOptions = <TestStatefulWithOptions/>;
  const testStatelessWithOptions = <TestStatelessWithOptions/>;
  const testStatefulWithKeys = <TestStatefulWithKeys/>;
  const testStatelessWithKeys = <TestStatelessWithKeys/>;
  const testStatefulWithKeysAndOptions = <TestStatefulWithKeysAndOptions/>;
  const testStatelessWithKeysAndOptions = <TestStatelessWithKeysAndOptions/>;

  t.is(typeof TestStateful, 'function');
  t.is(TestStateful.name, 'RemeasureComponent');
  t.is(testStateful.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStateless, 'function');
  t.is(TestStateless.name, 'RemeasureComponent');
  t.is(testStateless.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatefulWithOptions, 'function');
  t.is(TestStatefulWithOptions.name, 'RemeasureComponent');
  t.is(testStatefulWithOptions.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatelessWithOptions, 'function');
  t.is(TestStatelessWithOptions.name, 'RemeasureComponent');
  t.is(testStatelessWithOptions.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatefulWithKeys, 'function');
  t.is(TestStatefulWithKeys.name, 'RemeasureComponent');
  t.is(testStatefulWithKeys.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatelessWithKeys, 'function');
  t.is(TestStatelessWithKeys.name, 'RemeasureComponent');
  t.is(testStatelessWithKeys.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatefulWithKeysAndOptions, 'function');
  t.is(TestStatefulWithKeysAndOptions.name, 'RemeasureComponent');
  t.is(testStatefulWithKeysAndOptions.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStatelessWithKeysAndOptions, 'function');
  t.is(TestStatelessWithKeysAndOptions.name, 'RemeasureComponent');
  t.is(testStatelessWithKeysAndOptions.$$typeof, REACT_ELEMENT_TYPE);
});