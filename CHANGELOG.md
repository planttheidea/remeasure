# remeasure changelog

#### 1.6.0
* Add `flatten` option, to prevent grouping under `position` and `size` properties

#### 1.5.0
* Add `debounce` option, to debounce recalculation on resize

#### 1.4.3
* Update dependencies

#### 1.4.2
* Add checks to see if element exists before attempting resize state assignment

#### 1.4.1
* Optimizations

#### 1.4.0
* Refactor of instantiation to only put keys listened for on state instead of all keys

#### 1.3.2
* Update to es2015-loose preset for smaller filesize

#### 1.3.1
* Fix shorthand key use for `position` and `size` to work with custom `positionProp` and `sizeProp`

#### 1.3.0
* Add ability to pass `options` object, allowing overrides of the following properties:
  * `positionProp` (defaults to `position`) = the name of the position prop injected into the component
  * `renderOnResize` (defaults to `true`) = whether or not to trigger a re-render when element resizes
  * `sizeProp` (defaults to `size`) = the name of the size prop injected into the component

#### 1.2.1
* Abstract requestAnimationFrame assignment to `setRaf` function called on `componentDidMount` (for universal apps)

#### 1.2.0
* Component now only updates when one of the requested keys updates (or if used in standard way, when any key updates)
* Add `naturalHeight` and `naturalWidth` properties
  * `img` is the only element that supports this natively, for all other elements these values reflect `scrollHeight` and `scrollWidth`

#### 1.1.0
* Add `clientLeft`, `clientTop`, `scrollLeft`, and `scrollTop` properties

#### 1.0.1
* Small changes to README

#### 1.0.0
* Initial release
