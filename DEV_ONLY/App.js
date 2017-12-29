import React, {Component, PureComponent} from 'react';
import {render} from 'react-dom';

import measure from '../src/index';

document.body.style.backgroundColor = '#1d1d1d';
document.body.style.color = '#d5d5d5';
document.body.style.margin = 0;
document.body.style.padding = 0;

@measure
class NoParams extends PureComponent {
  render() {
    const {children, position, size} = this.props;

    console.group('no params');
    console.log('position', position);
    console.log('size', size);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

@measure.width({debounce: true})
class WidthOnly extends PureComponent {
  render() {
    const {children, position, size, width} = this.props;

    console.group('width only');
    console.log('position', position);
    console.log('size', size);
    console.log('width', width);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

@measure('position')
class PositionOnly extends PureComponent {
  render() {
    const {children, position, size} = this.props;

    console.group('position only');
    console.log('position', position);
    console.log('size', size);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

@measure(['height', 'width', 'top', 'left'])
class SpecificProperties extends PureComponent {
  render() {
    const {children, position, size} = this.props;

    console.group('specific properties');
    console.log('position', position);
    console.log('size', size);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

@measure({positionProp: 'foo', sizeProp: 'bar'})
class CustomCategories extends PureComponent {
  render() {
    const {bar, children, foo} = this.props;

    console.group('custom categories');
    console.log('foo', foo);
    console.log('bar', bar);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

@measure({positionProp: 'foo', sizeProp: 'bar', inheritedMethods: ['getFoo']})
class InheritedMethods extends PureComponent {
  getFoo() {
    return this.props.foo;
  }

  render() {
    const {bar, children, foo} = this.props;

    console.group('custom categories');
    console.log('foo', foo);
    console.log('bar', bar);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

@measure(['height', 'width', 'top', 'left'], {positionProp: 'foo', sizeProp: 'bar'})
class CustomCategoriesWithSpecificProperties extends PureComponent {
  render() {
    const {bar, children, foo} = this.props;

    console.group('custom categories with specific properties');
    console.log('foo', foo);
    console.log('bar', bar);
    console.groupEnd();

    return <div>{children}</div>;
  }
}

const StatelessComponent = measure({isPure: true})(({children, position, size}) => {
  console.group('stateless component');
  console.log('position', position);
  console.log('size', size);
  console.groupEnd();

  return <div>{children}</div>;
});

const ConditionalComponent = measure(({children, isShown, position, size}) => {
  console.group('conditional component');
  console.log('position', position);
  console.log('size', size);
  console.groupEnd();

  if (!isShown) {
    return null;
  }

  return <div>{children}</div>;
});

const FlatComponent = measure.flatten(['height', 'width'])((props) => {
  console.group('flattened');
  console.log(props);
  console.groupEnd();

  return <div>{props.width}</div>;
});

class App extends Component {
  state = {
    isConditionalElementShown: true
  };

  componentDidMount() {
    console.log('--------- GETTING FOO ------------');
    console.log(this.inheritedRef.getFoo());
  }

  onClickToggleConditionalElement = () => {
    const {isConditionalElementShown} = this.state;

    this.setState({
      isConditionalElementShown: !isConditionalElementShown
    });
  };

  setInheritedRef = (component) => {
    this.inheritedRef = component;
  };

  render() {
    const {isConditionalElementShown} = this.state;

    return (
      <div>
        <h1>App</h1>

        <NoParams>I don't have any parameters passed to the decorators.</NoParams>

        <PositionOnly>I only have the position property.</PositionOnly>

        <WidthOnly>I only have the width property, and will not rerender on resize.</WidthOnly>

        <SpecificProperties>
          I only have the height and width properties in size, and top and left properties in position.
        </SpecificProperties>

        <CustomCategories>I have custom position property (foo) and size property (bar).</CustomCategories>

        <InheritedMethods ref={this.setInheritedRef}>
          I have an instance method (getFoo) that is inherited by the HOC.
        </InheritedMethods>

        <CustomCategoriesWithSpecificProperties>
          I only have the height and width properties in size (under the prop bar), and top and left properties in
          position (under the prop foo).
        </CustomCategoriesWithSpecificProperties>

        <StatelessComponent>I am a stateless component with the same props available.</StatelessComponent>

        <div>
          <button
            onClick={this.onClickToggleConditionalElement}
            type="button"
          >
            Toggle conditional element
          </button>
        </div>

        <ConditionalComponent isShown={isConditionalElementShown}>
          I am a measured element that is shown conditionally.
        </ConditionalComponent>

        {isConditionalElementShown && (
          <StatelessComponent>I am a stateless component that will be mounted and unmounted.</StatelessComponent>
        )}

        <FlatComponent />
      </div>
    );
  }
}

const div = document.createElement('div');

div.id = 'app-container';

render(<App />, div);

document.body.appendChild(div);
