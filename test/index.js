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

test('if measure returns a higher-order component', (t) => {
  const testStateful = <TestStateful/>;
  const testStateless = <TestStateless/>;

  t.is(typeof TestStateful, 'function');
  t.is(TestStateful.name, 'RemeasureComponent');
  t.is(testStateful.$$typeof, REACT_ELEMENT_TYPE);

  t.is(typeof TestStateless, 'function');
  t.is(TestStateless.name, 'RemeasureComponent');
  t.is(testStateless.$$typeof, REACT_ELEMENT_TYPE);
});