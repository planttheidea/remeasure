# remeasure changelog

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
