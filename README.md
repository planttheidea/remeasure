# remeasure

Get position and size of the DOM element for any React Component

### Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Advanced usage](#advanced-usage)
* [Convenience methods](#convenience-methods)
* [Caveats](#caveats)
* [Support](#support)
* [Development](#development)

### Installation

```
$ npm i remeasure --save
```

### Usage

```javascript
// ES2015
import measure from 'remeasure';

// CommonJS
const measure = require('remeasure');

// script
var measure = window.Remeasure;

// apply it as a decorator
@measure
class MyComponent extends React.Component {
  render() {
    const {
      position,
      size
    } = this.props;
  
    return (
      <div>
        I have access to my size and position through props!
      </div>
    );
  }
}

// or as a function wrapper
const StatelessComponent = measure(({position, size}) => {
  return (
    <div>
      In here too!
    </div>
  );
});
```

Any component that has `measure` applied to it will be wrapped in a [Higher-Order Component](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.k0th02ffm) that will pass in the props `position` and `size`, which contain a variety of measurements related to (you guessed it) the component's position and size. A complete list of properties:
  
```javascript
{
  position: {
    bottom: Number,
    clientLeft: Number,
    clientTop: Number,
    offsetLeft: Number,
    offsetTop: Number,
    left: Number,
    right: Number,
    scrollLeft: Number,
    scrollTop: Number,
    top: Number
  },
  size: {
    clientHeight: Number,
    clientWidth: Number,
    height: Number,
    naturalHeight: Number,
    naturalWidth: Number,
    offsetHeight: Number,
    offsetWidth: Number,
    scrollHeight: Number,
    scrollWidth: Number,
    width: Number
  }
}
```
  
The `bottom`, `left`, `right`, and `top` properties in `position` are what you would expect from the result of `element.getBoundingClientRect()`. `naturalHeight` and `naturalWidth` are properties that are native to `img` elements, and for all non-`img` elements they are coalesced with `scrollHeight` and `scrollWidth`, respectively.

These properties are retrieved on mount, but will also automatically update if the element is resized thanks to [element-resize-event](https://github.com/KyleAMathews/element-resize-event). Please note that elements that do not support content (such as `img`) are not supported by this resize listener; in the case that you need to support those elements, simply create a higher-order component that wraps that element in a `div` and decorate that component.

### Advanced usage

If you want to limit the items that are injected into the component, you can pass either a key or array of keys to the decorator before wrapping the component.

**measure(`String|Array<String>|Object[, Object]`)** *returns `Function`*

Examples:

```javascript
import measure from 'remeasure';

// pass a string value for a single property
const measureOnlyOffsetWidth = measure('offsetWidth');

const MyStatelessComponent = measureOnlyOffsetWidth(({size}) => {
  return (
    <div>
      Only size is injected (because no position values were requested), 
      with offsetWidth as the only property
    </div>
  );
});

// or an array of string values for multiple properties
@measure(['top', 'height'])
class MyComponent extends Component {
  render() {
    const {
      position,
      size
    } = this.props;
  
    return (
      <div>
        Both the position and size props are injected (because values
        from both position and size were requested), and each will have
        a single property on them (top on position, height on size).
      </div>
    );
  }
}

// or quickly select the complete list of either size or position
@measure('size')
class MySizedComponent extends Component {
  render() {
    const size = this.props.size;
  
    return (
      <div>
        I have the size prop injected with all properties, but not
        position.
      </div>
    );
  }
}
```

You can also pass an object with any of the following propeties (defaults shown):
   
```javascript
{
    // value in milliseconds to debounce rerenders
    debounce: Number,
    
    // should the properties not be grouped under position / size
    flatten: Boolean = false,
    
    // sets position property name
    positionProp: String = 'position',
    
    // should element rerender when resized
    renderOnResize: Boolean = true,
    
    // sets size property name
    sizeProp: String = 'size'
}
```

These will serve as options for the instance `remeasure` is applied to. For example, if you want all position-related properties to be injected under the prop `foo` and the size-related properties to be injected under the prop `bar`, you can do this:

```javascript
// use the options by themselves
@measure({positionProp: 'foo', sizeProp: 'bar'})
class MyComponent extends Component {
    render() {
        const {
            foo,
            bar
        } = this.props;
    
        return (
            <div>
                The foo and bar props now represent position and size, respectively.
            </div>
        );
    }
}

// or you can use them with keys
const measureWithKeysAndOptions = measure(['height', 'width'], {debounce: 50, flatten: true});

const MyStatelessComponent = measureWithKeysAndOptions(({height, width}) => {
    return (
        <div>
            You can still pass options when you want to specify keys, as the
            second parameter.
        </div>
    );
};

// you can even use the custom props with the shorthand notation
@measure('bar', {sizeProp: 'bar'})
class MySizedComponent extends Component {
    render() {
        return (
            <div>
                I will have access to all the size properties under the prop
                bar, but foo will not be injected.
            </div>
        );
    }
}
```

### Convenience methods

For each key that is measured, a convenience function exists on the main `measure` function which is a shorthand for `measure(property, {flatten: true})`. Example:

```javascript
@measure.width
class MyMeasuredComponent extends Component {
  render() {
    return (
      <div>
        I have access to width at this.props.width.
      </div>
    );
  }
}
```

These accept options as a parameter just like the standard `measure`, they are just merged with the `flatten: true` value.

### Caveats

A couple things to keep in mind when using `remeasure`:

**Void tags cannot detect element resize**

If children on a tag are considered invalid HTML (such as for `<input/>`, `<img/>`, etc), then the internal element resize detector cannot not work. The easy solution to this is to update the component via props (on update a recalculation of values is triggered).

**Components may render twice on update**

If you perform an update to the component `props` or `state` that also happens to change its dimensions, the component will update twice, once for the changes to `props` / `state`, and again for the changes to its dimensions. This is because the component needs to render in the DOM before updated values can be calculated.

### Support
`remeasure` has been tested and confirmed to work on the following browsers:
* Chrome
* Firefox
* Opera
* Edge
* IE9+

`remeasure` also works with universal / isomorphic applications.

### Development

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
