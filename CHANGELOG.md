# remeasure CHANGELOG

## 3.0.0

* Add `Measured` component with render function support

#### BREAKING CHANGES

* `measure` (as well as the new `Measured` component) are named imports (no default export is provided)
* All properties are now flattened by default (no `position` or `size` objects)
  * If you want to have the properties in a separate object, apply the `namespace` option
  * `measure.flatten` no longer exists
* `inheritedMethods` is no longer an option
  * if you want to access methods of the original component, use the `originalComponent` property from the `ref`
* `isPure` is no longer an option
* `positionProp` and `sizeProp` options have been replaced by the `namespace` option
* The CommonJS `require` now requires `.default`

  * `require('remeasure').default`
  * You can also use the named imports, e.g. `require('remeasure').measure`

## 2.6.0

* Add `flatten` method (convenience method for flat multi-key mapping)
* Remove `lodash` dependency (~10% reduction in built size)

## 2.5.1

* Move `react` and `react-dom` to `peerDependencies`

## 2.5.0

* Add `isPure` option, which will ensure `PureComponent` is used for the higher-order component
* Validate `options` have correct types
* Prevent `ref` from being assigned when a stateless functional component is passed

## 2.4.1

* Replace `element-resize-detector` with use of `ResizeObserver` ponyfill

## 2.4.0

* Add `es` transpilation in publish, for [`pkg.module`](https://github.com/rollup/rollup/wiki/pkg.module)

## 2.3.1

* Higher-order component will extend `PureComponent` if the component being wrapped is also a `PureComponent` (extends `Component` in all other scenarios)

## 2.3.0

* Add `inheritedMethods` as an option for accessing instance methods in `refs`

## 2.2.1

* Replace `setState` with custom method that assigns to instance value and calls `forceUpdate` synchronously if mounted
* Remove a lot of unnecessary `if (instance.element)` checks

## 2.2.0

* Replace `element-resize-event` with `element-resize-detector` for better stability and removal of listeners
* Listeners are now removed when element no longer exists, and will only set the element when it has changed
* Remove `mounted` instance value in favor of just checking if `element` exists

## 2.1.4

* Remove instance methods in favor of generic utilities
* Update to Webpack 2 for `dist` builds

## 2.1.3

* Remove moize dependency

## 2.1.2

* Add more descriptive `displayName` to `MeasuredComponent` for DevTools

## 2.1.1

* Ensure component is mounted before attempting to update state

## 2.1.0

* Add convenience methods for `flatten` option
* Refactor for far more functional approach and performance improvements

## 2.0.1

* Add `raf` as dependency for more robust `requestAnimationFrame` setup

## 2.0.0

* Major refactor to be more functional (same functionality, but due to scope of refactor there may be regressions)
* Substantial performance improvement
* Zero out measurements when element is null

## 1.6.1

* Add documentation site

## 1.6.0

* Add `flatten` option, to prevent grouping under `position` and `size` properties

## 1.5.0

* Add `debounce` option, to debounce recalculation on resize

## 1.4.3

* Update dependencies

## 1.4.2

* Add checks to see if element exists before attempting resize state assignment

## 1.4.1

* Optimizations

## 1.4.0

* Refactor of instantiation to only put keys listened for on state instead of all keys

## 1.3.2

* Update to es2015-loose preset for smaller filesize

## 1.3.1

* Fix shorthand key use for `position` and `size` to work with custom `positionProp` and `sizeProp`

## 1.3.0

* Add ability to pass `options` object, allowing overrides of the following properties:
  * `positionProp` (defaults to `position`) = the name of the position prop injected into the component
  * `renderOnResize` (defaults to `true`) = whether or not to trigger a re-render when element resizes
  * `sizeProp` (defaults to `size`) = the name of the size prop injected into the component

## 1.2.1

* Abstract requestAnimationFrame assignment to `setRaf` function called on `componentDidMount` (for universal apps)

## 1.2.0

* Component now only updates when one of the requested keys updates (or if used in standard way, when any key updates)
* Add `naturalHeight` and `naturalWidth` properties
  * `img` is the only element that supports this natively, for all other elements these values reflect `scrollHeight` and `scrollWidth`

## 1.1.0

* Add `clientLeft`, `clientTop`, `scrollLeft`, and `scrollTop` properties

## 1.0.1

* Small changes to README

## 1.0.0

* Initial release
