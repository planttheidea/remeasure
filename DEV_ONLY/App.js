import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import measure from '../src/index';

const DIV_STYLES = {
  border: '10px solid black',
  height: 100,
  marginBottom: 15,
  padding: 20,
  width: 50
};

const SECTION_STYLES = {
  height: 100,
  overflow: 'auto',
  marginBottom: 15
};

@measure
class Div extends Component {
  render() {
    const {
      children
    } = this.props;

    console.group('Div');
    console.log('div position', this.props.position);
    console.log('div size', this.props.size);
    console.groupEnd();

    return (
      <div style={DIV_STYLES}>
        {children}
      </div>
    );
  }
}

@measure('position')
class Section extends Component {
  render() {
    const {
      children
    } = this.props;

    console.group('Section');
    console.log('section position', this.props.position);
    console.log('section size', this.props.size);
    console.groupEnd();

    return (
      <section style={SECTION_STYLES}>
        {children}
      </section>
    );
  }
}

@measure('height')
class Main extends Component {
  render() {
    const {
      children
    } = this.props;

    console.group('Main');
    console.log('main position', this.props.position);
    console.log('main size', this.props.size);
    console.groupEnd();

    return (
      <main>
        {children}
      </main>
    );
  }
}

const measureWithSpecificKeys = measure(['left', 'offsetLeft']);


const App = measureWithSpecificKeys((props) => {
  console.group('App');
  console.log('app position', props.position);
  console.log('app size', props.size);
  console.groupEnd();

  return (
    <div>
      <Div>
        I am a DIV with stuff
      </Div>

      <Section>
        I am a SECTION that is scrollable with...

        <p>
          Lots
        </p>
        <p>
          of
        </p>
        <p>
          stuff
        </p>
        <p>
          Lots
        </p>
        <p>
          of
        </p>
        <p>
          stuff
        </p>
        <p>
          Lots
        </p>
        <p>
          of
        </p>
        <p>
          stuff
        </p>
        <p>
          Lots
        </p>
        <p>
          of
        </p>
        <p>
          stuff
        </p>
      </Section>

      <Main>
        Hello!
      </Main>
    </div>
  );
});

const div = document.createElement('div');

div.id = 'app-container';

render((
  <App/>
), div);

document.body.appendChild(div);
