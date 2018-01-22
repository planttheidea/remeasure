# remeasure

<img src="https://img.shields.io/badge/build-passing-brightgreen.svg"/>
<img src="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"/>
<img src="https://img.shields.io/badge/license-MIT-blue.svg"/>

Get position and size of the DOM element for any React Component

## Table of contents

* [Usage](#usage)
  * [As a decorator](#as-a-decorator)
  * [As a component](#as-a-component)
  * [Measurements](#measurements)
* [Advanced usage](#advanced-usage)
  * [keys](#keys)
  * [options](#options)
  * [ref](#ref)
* [Convenience methods](#convenience-methods)
* [Caveats](#caveats)
* [Support](#support)
* [Development](#development)

## Usage

```javascript
// ES2015
import {measure, Measured} from 'remeasure';

// CommonJS
const {measure, Measured} = require('remeasure').default;

// old school script
var measure = window.Remeasure.measure;
var Measured = window.Remeasure.Measured;
```

#### As a decorator

```javascript
@measure
class MyComponent extends React.Component {
  render() {
    const {height, width} = this.props;

    return <div>I have access to my height and width through props!</div>;
  }
}

const StatelessComponent = measure(({height, width}) => {
  return <div>In here too!</div>;
});
```

#### As a component

You can use the component with function-rendering components one of three ways:

```javascript
// using a children method
const MyMeasuredComponent = () => {
  return (
    <Measured height width>
      {({height, width}) => {
        return (
          <div>
            My height is {height} and my width is {width}
          </div>
        );
      }}
    </Measured>
  );
};

// using a component method
const MyMeasuredComponent = () => {
  return (
    <Measured
      height
      width
      component={({height, width}) => {
        return (
          <div>
            My height is {height} and my width is {width}
          </div>
        );
      }}
    />
  );
};

// using a render method
const MyMeasuredComponent = () => {
  return (
    <Measured
      height
      width
      render={({height, width}) => {
        return (
          <div>
            My height is {height} and my width is {width}
          </div>
        );
      }}
    />
  );
};
```

For performance reasons, it is recommended that you store the component as a separate method rather than create a method inline:

```javascript
// using a render method
const Render = ({height, width}) => {
  return (
    <div>
      My height is {height} and my width is {width}
    </div>
  );
};

const MyMeasuredComponent = () => {
  return <Measured height width render={Render} />;
};
```

#### Measurements

The following properties are available for measurement:

```javascript
{
  bottom: Number,
  clientLeft: Number,
  clientHeight: Number,
  clientWidth: Number,
  clientTop: Number,
  height: Number,
  left: Number,
  naturalHeight: Number,
  naturalWidth: Number,
  offsetHeight: Number,
  offsetLeft: Number,
  offsetTop: Number,
  offsetWidth: Number,
  scrollHeight: Number,
  scrollLeft: Number,
  scrollTop: Number,
  scrollWidth: Number,
  right: Number,
  top: Number
  width: Number
}
```

The `bottom`, `left`, `right`, and `top` properties in `position` are what you would expect from the result of `element.getBoundingClientRect()`. `naturalHeight` and `naturalWidth` are properties that are native to `img` elements, and for all non-`img` elements they are coalesced with `scrollHeight` and `scrollWidth`, respectively.

These properties are retrieved on mount, but will also automatically update if the element is resized thanks to [ResizeObserver](https://github.com/que-etc/resize-observer-polyfill). Please note that elements that do not support content (such as `img`) are not supported by this resize listener because there is no content box to observe. If you need to support those elements, simply create a higher-order component that wraps that element in a `div` and decorate that component.

## Advanced usage

#### keys

`(Array<string>|string)`

The keys to listen for changes to. If not specified, all possible keys will be measured.

Examples:

```javascript
import measure from 'remeasure';

// pass a string value for a single property
const measureOnlyOffsetWidth = measure('offsetWidth');

const MyStatelessComponent = measureOnlyOffsetWidth(({size}) => {
  return (
    <div>Only size is injected (because no position values were requested), with offsetWidth as the only property</div>
  );
});

// or an array of string values for multiple properties
@measure(['top', 'height'])
class MyComponent extends Component {
  render() {
    const {position, size} = this.props;

    return (
      <div>
        Both the position and size props are injected (because values from both position and size were requested), and
        each will have a single property on them (top on position, height on size).``
      </div>
    );
  }
}
```

You can apply the keys one of two ways on the `Measure` component:

```javascript
// either as individual boolean properties
<Measured height>
  {({height}) => {
    return (
      <div>I am {height} pixels in height.</div>
    );
  }}
</Measured>

// or as the "keys" prop
<Measured keys={['height']}>
  {({height}) => {
    return (
      <div>I am {height} pixels in height.</div>
    );
  }}
</Measured>
```

Note that the properties will only be applied if they are set to `true` (yes, you can actually toggle what properties are measured!).

#### options

`Object`

Allows customization of the measurements. Available options:

```javascript
{
    // value in milliseconds to debounce rerenders
    debounce: Number,

    // sets namespace for values to be passed into props on
    namespace: String,

    // should element rerender when resized
    renderOnResize: Boolean = true
}
```

Example usage with the decorator:

```javascript
// use them alone
@measure({renderOnResize: false})
class MyComponent extends Component {
  render() {
    const {height, width} = this.props;

    return <div>The height and width props will not update with resizes.</div>;
  }
}

// or you can use them with keys
const MyStatelessComponent = measure(['height', 'width'], {debounce: 50, namespace: 'measurements'})(
  ({measurements}) => {
    return <div>You can still pass options when you want to specify keys, as the second parameter.</div>;
  }
);
```

Example usage with the `Measured` component:

```javascript
<Measured debounce={500} namespace="measurements">
  {({measurements}) => {
    return <div>My measurements: {JSON.stringify(measurements)}</div>;
  }}
</Measured>
```

#### ref

Like any other component, you can access the `Measured` component instance via the `ref`, but when using the `measure` decorator you will be accessing the `Measured` HOC and not the original component. If you want to access the original component, it is available as the `originalComponent` property on that `ref`.

```javascript
@measure.width
class Foo extends Component {
  getProps() {
    return this.props;
  }

  render() {
    return <div>Use getProps to get my props!</div>;
  }
}
...
class FooConsumer extends Component {
  componentDidMount() {
    console.log(this.foo); // Measured component
    console.log(this.foo.originalComponent); // Foo component
    console.log(this.foo.originalComponent.getProps()); // {bar: 'bar'}
  }

  render() {
    <Foo
      ref={(component) => {
        this.foo = component;
      }}
      bar="bar"
    />
  }
}
```

## Convenience methods

For each key that is measured, a convenience function exists on the `measure` decorator. Example:

```javascript
@measure.width
class MyMeasuredComponent extends Component {
  render() {
    const {width} = this.props;

    return <div>I have width of {width}.</div>;
  }
}
```

## Caveats

A couple things to keep in mind when using `remeasure`:

**Void tags cannot detect element resize**

If children on a tag are considered invalid HTML (such as for `<input/>`, `<img/>`, etc), then the internal element resize detector cannot not work. The easy solution to this is to update the component via props (on update a recalculation of values is triggered).

**Components may render twice on update**

If you perform an update to the component `props` or `state` that also happens to change its dimensions, the component will update twice, once for the changes to `props` / `state`, and again for the changes to its dimensions. This is because the component needs to render in the DOM before updated values can be calculated.

## Support

`remeasure` has been tested and confirmed to work on the following browsers:

* Chrome
* Firefox
* Opera
* Edge
* IE9+

`remeasure` also works with universal / isomorphic applications.

## Development

Standard stuff, clone the repo and `npm i` to get the dependencies. npm scripts available:

* `build` => builds the distributed JS with `NODE_ENV=development` and with sourcemaps
* `build-minified` => builds the distributed JS with `NODE_ENV=production` and minified
* `compile-for-publish` => runs the `lint`, `test`, `transpile`, `dist` scripts
* `dev` => runs the webpack dev server for the playground
* `dist` => runs the `build` and `build-minified`
* `lint` => runs ESLint against files in the `src` folder
* `prepublish` => if in publish, runs `compile-for-publish`
* `test` => run ava with NODE_ENV=test
* `test:watch` => runs `test` but with persistent watcher
* `transpile` => runs Babel against files in `src` to files in `lib`
