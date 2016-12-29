(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("Remeasure", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Remeasure"] = factory(require("react"), require("react-dom"));
	else
		root["Remeasure"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // external dependencies
	
	
	// constants
	
	
	// component
	
	
	// utils
	
	
	var _isArray = __webpack_require__(2);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__(6);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _constants = __webpack_require__(11);
	
	var _getMeasuredComponent = __webpack_require__(12);
	
	var _getMeasuredComponent2 = _interopRequireDefault(_getMeasuredComponent);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module remeasure
	 */
	
	/**
	 * @function measure
	 *
	 * @description
	 * create higher-order component that injects size and position properties
	 * into OriginalComponent as an object under the prop name size and position
	 *
	 * @param {Component|Array<string>|Object} passedKeys if used without parameters, the component that will be
	 * measured, else either an array of keys to watch for measurement or an object of options
	 * @param {Object} [passedOptions={}] an object of options to apply for measuring
	 * @returns {MeasuredComponent} the higher-order component that will measure the child and pass down size and
	 * position values as props
	 */
	var measure = function measure(passedKeys) {
	  var passedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  if ((0, _isFunction2.default)(passedKeys)) {
	    return (0, _getMeasuredComponent2.default)(_constants.ALL_KEYS, passedOptions)(passedKeys);
	  }
	
	  var isKeysObject = (0, _isPlainObject2.default)(passedKeys);
	  var options = isKeysObject ? _extends({}, passedKeys) : _extends({}, passedOptions);
	
	  if (isKeysObject) {
	    return (0, _getMeasuredComponent2.default)(_constants.ALL_KEYS, passedKeys);
	  }
	
	  if ((0, _isArray2.default)(passedKeys)) {
	    var keys = (0, _utils.getValidKeys)(passedKeys, _constants.ALL_KEYS);
	
	    return (0, _getMeasuredComponent2.default)(keys, options);
	  }
	
	  if ((0, _isString2.default)(passedKeys)) {
	    var _options$positionProp = options.positionProp,
	        positionProp = _options$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _options$positionProp,
	        _options$sizeProp = options.sizeProp,
	        sizeProp = _options$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _options$sizeProp;
	
	
	    var _keys = void 0;
	
	    if (passedKeys === positionProp) {
	      _keys = _constants.ALL_POSITION_KEYS;
	    } else if (passedKeys === sizeProp) {
	      _keys = _constants.ALL_SIZE_KEYS;
	    } else {
	      _keys = [passedKeys];
	    }
	
	    return (0, _getMeasuredComponent2.default)(_keys, options);
	  }
	
	  throw new TypeError('You did not pass the correct object type for the measure decorator.');
	};
	
	exports.default = measure;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    isObject = __webpack_require__(5);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    getPrototype = __webpack_require__(7),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(8);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    isArray = __webpack_require__(2),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var DEBOUNCE_VALUE_DEFAULT = exports.DEBOUNCE_VALUE_DEFAULT = 0;
	var FLATTEN_DEFAULT = exports.FLATTEN_DEFAULT = false;
	var POSITION_PROP_DEFAULT = exports.POSITION_PROP_DEFAULT = 'position';
	var RENDER_ON_RESIZE_DEFAULT = exports.RENDER_ON_RESIZE_DEFAULT = true;
	var SIZE_PROP_DEFAULT = exports.SIZE_PROP_DEFAULT = 'size';
	
	var BOUNDING_CLIENT_RECT_SIZE_KEYS = exports.BOUNDING_CLIENT_RECT_SIZE_KEYS = ['height', 'width'];
	
	var BOUNDING_CLIENT_RECT_POSITION_KEYS = exports.BOUNDING_CLIENT_RECT_POSITION_KEYS = ['bottom', 'left', 'right', 'top'];
	
	var ALL_BOUNDING_CLIENT_RECT_KEYS = exports.ALL_BOUNDING_CLIENT_RECT_KEYS = [].concat(BOUNDING_CLIENT_RECT_POSITION_KEYS, BOUNDING_CLIENT_RECT_SIZE_KEYS);
	
	var DOM_ELEMENT_POSITION_KEYS = exports.DOM_ELEMENT_POSITION_KEYS = ['clientLeft', 'clientTop', 'offsetLeft', 'offsetTop', 'scrollLeft', 'scrollTop'];
	
	var DOM_ELEMENT_SIZE_KEYS = exports.DOM_ELEMENT_SIZE_KEYS = ['clientHeight', 'clientWidth', 'naturalHeight', 'naturalWidth', 'offsetHeight', 'offsetWidth', 'scrollHeight', 'scrollWidth'];
	
	var NATURAL_REGEXP = exports.NATURAL_REGEXP = /natural/;
	
	var VOID_ELEMENT_TAG_NAMES = exports.VOID_ELEMENT_TAG_NAMES = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR'];
	
	var ALL_DOM_ELEMENT_KEYS = exports.ALL_DOM_ELEMENT_KEYS = [].concat(DOM_ELEMENT_POSITION_KEYS, DOM_ELEMENT_SIZE_KEYS);
	
	var ALL_POSITION_KEYS = exports.ALL_POSITION_KEYS = [].concat(DOM_ELEMENT_POSITION_KEYS, BOUNDING_CLIENT_RECT_POSITION_KEYS);
	
	var ALL_SIZE_KEYS = exports.ALL_SIZE_KEYS = [].concat(DOM_ELEMENT_SIZE_KEYS, BOUNDING_CLIENT_RECT_SIZE_KEYS);
	
	var ALL_KEYS = exports.ALL_KEYS = [].concat(_toConsumableArray(ALL_POSITION_KEYS), _toConsumableArray(ALL_SIZE_KEYS));
	
	var CLIENT_RECT_TYPE = exports.CLIENT_RECT_TYPE = 'clientRect';
	var ELEMENT_TYPE = exports.ELEMENT_TYPE = 'element';

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _elementResizeEvent = __webpack_require__(13);
	
	var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);
	
	var _debounce = __webpack_require__(14);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _moize = __webpack_require__(19);
	
	var _moize2 = _interopRequireDefault(_moize);
	
	var _react = __webpack_require__(22);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(23);
	
	var _constants = __webpack_require__(11);
	
	var _utils = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // external dependencies
	
	
	// constants
	
	
	// utils
	
	
	var raf = void 0;
	
	var getMeasuredComponent = function getMeasuredComponent(keys, options) {
	  var _options$debounce = options.debounce,
	      debounceValue = _options$debounce === undefined ? _constants.DEBOUNCE_VALUE_DEFAULT : _options$debounce,
	      _options$flatten = options.flatten,
	      flatten = _options$flatten === undefined ? _constants.FLATTEN_DEFAULT : _options$flatten,
	      _options$positionProp = options.positionProp,
	      positionProp = _options$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _options$positionProp,
	      _options$renderOnResi = options.renderOnResize,
	      renderOnResize = _options$renderOnResi === undefined ? _constants.RENDER_ON_RESIZE_DEFAULT : _options$renderOnResi,
	      _options$sizeProp = options.sizeProp,
	      sizeProp = _options$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _options$sizeProp;
	
	
	  var propKeyNames = {
	    positionProp: positionProp,
	    sizeProp: sizeProp
	  };
	
	  var selectedKeys = [].concat((0, _utils.getKeysSubsetWithType)(_constants.ALL_BOUNDING_CLIENT_RECT_KEYS, keys, _constants.CLIENT_RECT_TYPE, propKeyNames)).concat((0, _utils.getKeysSubsetWithType)(_constants.ALL_DOM_ELEMENT_KEYS, keys, _constants.ELEMENT_TYPE, propKeyNames));
	
	  var initialState = (0, _utils.reduceStateToMatchingKeys)(selectedKeys);
	
	  return function (PassedComponent) {
	    var MeasuredComponent = function (_Component) {
	      _inherits(MeasuredComponent, _Component);
	
	      function MeasuredComponent() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, MeasuredComponent);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MeasuredComponent.__proto__ || Object.getPrototypeOf(MeasuredComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, initialState), _this.element = null, _this.getScopedValues = (0, _moize2.default)(_utils.getScopedValues, {
	          maxSize: 25
	        }), _this.hasResize = false, _this.clearValues = function () {
	          var emptyValues = (0, _utils.reduceStateToMatchingKeys)(selectedKeys);
	
	          if ((0, _utils.haveValuesChanged)(selectedKeys, emptyValues, _this.state)) {
	            _this.setState(emptyValues);
	          }
	        }, _this.getDOMElement = function () {
	          return (0, _reactDom.findDOMNode)(_this);
	        }, _this.setElement = function (element) {
	          _this.element = element;
	
	          if (element) {
	            if (!_this.hasResize) {
	              _this.setElementResize();
	            }
	          } else {
	            _this.hasResize = false;
	          }
	        }, _this.setElementResize = function () {
	          if (_this.element && !(0, _utils.isElementVoidTag)(_this.element)) {
	            (0, _elementResizeEvent2.default)(_this.element, debounceValue ? _this.updateValuesViaDebounce : _this.updateValuesViaRaf);
	
	            _this.hasResize = true;
	          }
	        }, _this.updateValuesIfChanged = function () {
	          var element = _this.element;
	
	          if (element) {
	            var values = (0, _utils.getElementValues)(_this.element, selectedKeys);
	
	            if ((0, _utils.haveValuesChanged)(selectedKeys, values, _this.state)) {
	              _this.setState(values);
	            }
	          }
	        }, _this.updateValuesViaDebounce = (0, _debounce2.default)(function () {
	          if (_this.element) {
	            _this.updateValuesIfChanged();
	          }
	        }, debounceValue), _this.updateValuesViaRaf = function () {
	          if (_this.element) {
	            raf(_this.updateValuesIfChanged);
	          }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      _createClass(MeasuredComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          if (!(0, _isFunction2.default)(raf)) {
	            raf = (0, _utils.getRequestAnimationFrame)();
	          }
	        }
	      }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          var element = this.getDOMElement();
	
	          if (element) {
	            this.setElement(element);
	            this.updateValuesViaRaf();
	          }
	
	          if (renderOnResize) {
	            this.setElementResize();
	          }
	        }
	      }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	          var element = this.getDOMElement();
	
	          this.setElement(element);
	
	          if (element) {
	            this.updateValuesViaRaf();
	          } else {
	            this.clearValues();
	          }
	
	          if (renderOnResize && !this.hasResize) {
	            this.setElementResize();
	          }
	        }
	
	        /**
	         * @private
	         *
	         * @function clearValues
	         *
	         * @description
	         * reset all values to 0 if there is no element present
	         */
	
	
	        /**
	         * @private
	         *
	         * @function getDOMElement
	         *
	         * @description
	         * get the DOM element specific to the component
	         *
	         * @returns {HTMLElement|null}
	         */
	
	
	        /**
	         * @private
	         *
	         * @function setElement
	         *
	         * @description
	         * assign the element to the instance
	         *
	         * @param {HTMLElement|null} element
	         */
	
	
	        /**
	         * @private
	         *
	         * @function setElementResize
	         *
	         * @description
	         * assign the onResize listener to the element
	         */
	
	
	        /**
	         * @private
	         *
	         * @function updateValuesIfChanged
	         *
	         * @description
	         * get the new values and assign them to state if they have changed
	         */
	
	
	        /**
	         * @private
	         *
	         * @function updateValuesViaDebounce
	         *
	         * @description
	         * update the values via debounce value
	         */
	
	
	        /**
	         * @private
	         *
	         * @function updateValuesViaRaf
	         *
	         * @description
	         * update the values via requestAnimationFrame
	         */
	
	      }, {
	        key: 'render',
	        value: function render() {
	          var values = this.getScopedValues(selectedKeys, this.state, flatten);
	
	          return _react2.default.createElement(PassedComponent, _extends({}, this.props, values));
	        }
	      }]);
	
	      return MeasuredComponent;
	    }(_react.Component);
	
	    return MeasuredComponent;
	  };
	};
	
	exports.default = getMeasuredComponent;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	var exports = function exports(element, fn) {
	  var window = this
	  var document = window.document
	  var isIE
	  var requestFrame
	
	  var attachEvent = document.attachEvent
	  if (typeof navigator !== 'undefined') {
	    isIE = navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/)
	  }
	
	  requestFrame = (function () {
	    var raf = window.requestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	          function fallbackRAF(func) {
	            return window.setTimeout(func, 20)
	          }
	    return function requestFrameFunction(func) {
	      return raf(func)
	    }
	  })()
	
	  var cancelFrame = (function () {
	    var cancel = window.cancelAnimationFrame ||
	      window.mozCancelAnimationFrame ||
	        window.webkitCancelAnimationFrame ||
	          window.clearTimeout
	    return function cancelFrameFunction(id) {
	      return cancel(id)
	    }
	  })()
	
	  function resizeListener(e) {
	    var win = e.target || e.srcElement
	    if (win.__resizeRAF__) {
	      cancelFrame(win.__resizeRAF__)
	    }
	    win.__resizeRAF__ = requestFrame(function () {
	      var trigger = win.__resizeTrigger__
	      if(trigger !== undefined) {
	        trigger.__resizeListeners__.forEach(function (fn) {
	          fn.call(trigger, e)
	        })
	      }
	    })
	  }
	
	  function objectLoad() {
	    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__
	    this.contentDocument.defaultView.addEventListener('resize', resizeListener)
	  }
	
	  if (!element.__resizeListeners__) {
	    element.__resizeListeners__ = []
	    if (attachEvent) {
	      element.__resizeTrigger__ = element
	      element.attachEvent('onresize', resizeListener)
	    } else {
	      if (getComputedStyle(element).position === 'static') {
	        element.style.position = 'relative'
	      }
	      var obj = element.__resizeTrigger__ = document.createElement('object')
	      obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;')
	      obj.setAttribute('class', 'resize-sensor')
	      obj.__resizeElement__ = element
	      obj.onload = objectLoad
	      obj.type = 'text/html'
	      if (isIE) {
	        element.appendChild(obj)
	      }
	      obj.data = 'about:blank'
	      if (!isIE) {
	        element.appendChild(obj)
	      }
	    }
	  }
	  element.__resizeListeners__.push(fn)
	}
	
	exports.unbind = function(element, fn){
	  var attachEvent = document.attachEvent;
	  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	  if (!element.__resizeListeners__.length) {
	    if (attachEvent) {
	      element.detachEvent('onresize', resizeListener);
	    } else {
	      element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
	      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
	    }
	  }
	}
	
	module.exports = (typeof window === 'undefined') ? exports : exports.bind(window)


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5),
	    now = __webpack_require__(15),
	    toNumber = __webpack_require__(18);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(16);
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	module.exports = now;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(17);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Map = __webpack_require__(20);
	
	var _Map2 = _interopRequireDefault(_Map);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module moize
	 */
	
	/**
	 * @function moize
	 *
	 * @description
	 * store cached values returned from calling method with arguments to avoid reprocessing data from same arguments
	 *
	 * @example
	 * import moize from 'moize';
	 *
	 * // standard implementation
	 * const fn = (foo, bar) => {
	 *  return `${foo} ${bar}`;
	 * };
	 * const memoizedFn = moize(fn);
	 *
	 * // implementation with options
	 * const fn = async (id) => {
	 *  return get(`http://foo.com/${id}`);
	 * };
	 * const memoizedFn = moize(fn, {
	 *  isPromise: true,
	 *  maxSize: 5
	 * });
	 *
	 * @param {function} fn method to memoize
	 * @param {Options} [options={}] options to customize how the caching is handled
	 * @param {Map} [options.cache=new Map()] caching mechanism to use for method
	 * @param {boolean} [options.isPromise=false] is the function return expected to be a promise to resolve
	 * @param {number} [options.maxAge=Infinity] the maximum age the value should persist in cache
	 * @param {number} [options.maxArgs=Infinity] the maximum number of arguments to be used in serializing the keys
	 * @param {number} [options.maxSize=Infinity] the maximum size of the cache to retain
	 * @param {function} [options.serializer=serializeArguments] method to serialize arguments with for cache storage
	 * @returns {Function} higher-order function which either returns from cache or newly-computed value
	 */
	
	
	// external dependencies
	var moize = function moize(fn) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _options$cache = options.cache,
	      cache = _options$cache === undefined ? new _Map2.default() : _options$cache,
	      _options$isPromise = options.isPromise,
	      isPromise = _options$isPromise === undefined ? false : _options$isPromise,
	      _options$maxAge = options.maxAge,
	      maxAge = _options$maxAge === undefined ? _utils.INFINITY : _options$maxAge,
	      _options$maxArgs = options.maxArgs,
	      maxArgs = _options$maxArgs === undefined ? _utils.INFINITY : _options$maxArgs,
	      _options$maxSize = options.maxSize,
	      maxSize = _options$maxSize === undefined ? _utils.INFINITY : _options$maxSize,
	      _options$serializer = options.serializer,
	      serializer = _options$serializer === undefined ? _utils.serializeArguments : _options$serializer;
	
	  var isMaxAgeFinite = maxAge !== _utils.INFINITY;
	  var isMaxArgsFinite = maxArgs !== _utils.INFINITY;
	  var isMaxSizeFinite = maxSize !== _utils.INFINITY;
	
	  var key = '';
	
	  /**
	   * @private
	   *
	   * @function memoizedFunction
	   *
	   * @description
	   * higher-order function which either returns from cache or stores newly-computed value and returns it
	   *
	   * @param {Array<*>} args arguments passed to method
	   * @returns {any} value resulting from executing of fn passed to memoize
	   */
	  var memoizedFunction = function memoizedFunction() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    key = (0, _utils.getCacheKey)(args, serializer, isMaxArgsFinite, maxArgs);
	
	    if (isMaxSizeFinite) {
	      (0, _utils.setUsageOrder)(memoizedFunction, key, maxSize);
	    }
	
	    if (memoizedFunction.cache.has(key)) {
	      return memoizedFunction.cache.get(key);
	    }
	
	    return (0, _utils.setNewCachedValue)(memoizedFunction, key, fn.apply(this, args), isPromise, isMaxAgeFinite, maxAge);
	  };
	
	  return (0, _utils.getFunctionWithCacheAdded)(memoizedFunction, cache);
	};
	
	// utils
	exports.default = moize;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MapLike = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	// utils
	
	
	var _utils = __webpack_require__(21);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HAS_MAP_SUPPORT = typeof Map === 'function';
	
	/**
	 * @private
	 *
	 * @class MapLike
	 * @classdesc class that mimics enough of the Map infrastructure to serve as polyfill for the cache
	 */
	
	var MapLike = function () {
	  function MapLike() {
	    _classCallCheck(this, MapLike);
	
	    this.list = [];
	    this.lastItem = undefined;
	    this.size = 0;
	
	    return this;
	  }
	
	  _createClass(MapLike, [{
	    key: 'delete',
	
	
	    /**
	     * @function delete
	     * @memberOf MapLike
	     * @instance
	     *
	     * @description
	     * remove the key from the map
	     *
	     * @param {*} key key to delete from the map
	     */
	    value: function _delete(key) {
	      if ((0, _utils.isKeyLastItem)(this.lastItem, key)) {
	        this.lastItem = undefined;
	      }
	
	      var index = (0, _utils.getIndexOf)(this, key);
	
	      if (index !== -1) {
	        this.size--;
	        (0, _utils.splice)(this.list, index);
	      }
	    }
	
	    /**
	     * @function forEach
	     * @memberOf MapLike
	     * @instance
	     *
	     * @description
	     * forEach method to loop over items in the list
	     *
	     * @param {function} fn function to call when looping over the list
	     */
	
	  }, {
	    key: 'forEach',
	    value: function forEach(fn) {
	      var index = -1,
	          item = void 0;
	
	      while (++index < this.size) {
	        item = this.list[index];
	
	        fn(item.value, item.key);
	      }
	    }
	
	    /**
	     * @function get
	     * @memberOf MapLike
	     * @instance
	     *
	     * @description
	     * get the value for the given key
	     *
	     * @param {*} key key to get the value for
	     * @returns {*} value at the key location
	     */
	
	  }, {
	    key: 'get',
	    value: function get(key) {
	      if ((0, _utils.isKeyLastItem)(this.lastItem, key)) {
	        // $FlowIgnore: this.lastItem.value exists
	        return this.lastItem.value;
	      }
	
	      var index = (0, _utils.getIndexOf)(this, key);
	
	      if (index !== -1) {
	        this.lastItem = this.list[index];
	
	        return this.list[index].value;
	      }
	
	      return undefined;
	    }
	
	    /**
	     * @function has
	     * @memberOf MapLike
	     * @instance
	     *
	     * @description
	     * does the map have the key provided
	     *
	     * @param {*} key key to test for in the map
	     * @returns {boolean} does the map have the key
	     */
	
	  }, {
	    key: 'has',
	    value: function has(key) {
	      if ((0, _utils.isKeyLastItem)(this.lastItem, key)) {
	        return true;
	      }
	
	      var index = (0, _utils.getIndexOf)(this, key);
	
	      if (index !== -1) {
	        this.lastItem = this.list[index];
	
	        return true;
	      }
	
	      return false;
	    }
	
	    /**
	     * @function set
	     * @memberOf MapLike
	     * @instance
	     *
	     * @description
	     * set the value at the key location, or add a new item with that key value
	     *
	     * @param {*} key key to assign value of
	     * @param {*} value value to store in the map at key
	     * @returns {MapLike} the map object
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      if ((0, _utils.isKeyLastItem)(this.lastItem, key)) {
	        // $FlowIgnore: this.lastItem.value exists
	        this.lastItem.value = value;
	
	        return this;
	      }
	
	      var index = (0, _utils.getIndexOf)(this, key);
	
	      if (index !== -1) {
	        this.lastItem = this.list[index];
	        this.list[index].value = value;
	
	        return this;
	      }
	
	      this.lastItem = {
	        key: key,
	        value: value
	      };
	
	      this.list.push(this.lastItem);
	      this.size++;
	
	      return this;
	    }
	  }]);
	
	  return MapLike;
	}();
	
	exports.MapLike = MapLike;
	exports.default = HAS_MAP_SUPPORT ? Map : MapLike;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setUsageOrder = exports.setNewCachedValue = exports.setExpirationOfCache = exports.serializeArguments = exports.isKeyLastItem = exports.getStringifiedArgument = exports.stringify = exports.getIndexOf = exports.isEqual = exports.getFunctionWithCacheAdded = exports.deleteItemFromCache = exports.getCacheKey = exports.decycle = exports.isValueObjectOrArray = exports.isComplexObject = exports.unshift = exports.splice = exports.INFINITY = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Map = __webpack_require__(20);
	
	var _Map2 = _interopRequireDefault(_Map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var keys = Object.keys;
	var toString = Object.prototype.toString;
	var jsonStringify = JSON.stringify;
	
	var INFINITY = exports.INFINITY = Number.POSITIVE_INFINITY;
	
	var ARRAY_OBJECT_CLASS = '[object Array]';
	var OBJECT_TYPEOF = 'object';
	
	var GOTCHA_OBJECT_CLASSES = [Boolean, Date, Number, RegExp, String];
	var GOTCHA_OBJECT_CLASSES_LENGTH = GOTCHA_OBJECT_CLASSES.length;
	
	/**
	 * @private
	 *
	 * @function splice
	 *
	 * @description
	 * faster version of splicing a single item from the array
	 *
	 * @param {Array<*>} array array to splice from
	 * @param {number} index index to splice at
	 * @returns {Array<*>} array minus the item removed
	 */
	var splice = exports.splice = function splice(array, index) {
	  var length = array.length;
	
	  if (!length) {
	    return array;
	  }
	
	  while (index < length) {
	    array[index] = array[index + 1];
	    index++;
	  }
	
	  array.length = length - 1;
	
	  return array;
	};
	
	/**
	 * @private
	 *
	 * @function unshift
	 *
	 * @description
	 * faster version of unshifting a single item into an array
	 *
	 * @param {Array<*>} array array to unshift into
	 * @param {*} item item to unshift into array
	 * @returns {Array<*>} array plus the item added to the front
	 */
	var unshift = exports.unshift = function unshift(array, item) {
	  var length = array.length;
	
	  while (length) {
	    array[length] = array[length - 1];
	    length--;
	  }
	
	  array[0] = item;
	
	  return array;
	};
	
	/**
	 * @private
	 *
	 * @function isComplexObject
	 *
	 * @description
	 * is the object passed a complex object
	 *
	 * @param {*} object object to test if it is complex
	 * @returns {boolean}
	 */
	var isComplexObject = exports.isComplexObject = function isComplexObject(object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === OBJECT_TYPEOF && object !== null;
	};
	
	/**
	 * @private
	 *
	 * @function isValueObjectOrArray
	 *
	 * @description
	 * check if the object is actually an object or array
	 *
	 * @param {*} object object to test
	 * @returns {boolean} is the object an object or array
	 */
	var isValueObjectOrArray = exports.isValueObjectOrArray = function isValueObjectOrArray(object) {
	  if (!isComplexObject(object)) {
	    return false;
	  }
	
	  var index = -1;
	
	  while (++index < GOTCHA_OBJECT_CLASSES_LENGTH) {
	    if (object instanceof GOTCHA_OBJECT_CLASSES[index]) {
	      return false;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * @private
	 *
	 * @function decycle
	 *
	 * @description
	 * ES2015-ified version of cycle.decyle
	 *
	 * @param {*} object object to stringify
	 * @returns {string} stringified value of object
	 */
	var decycle = exports.decycle = function decycle(object) {
	  // $FlowIgnore: map type
	  var map = new _Map2.default();
	
	  /**
	   * @private
	   *
	   * @function coalesceCircularReferences
	   *
	   * @description
	   * recursive method to replace any circular references with a placeholder
	   *
	   * @param {*} value value in object to decycle
	   * @param {string} path path to reference
	   * @returns {*} clean value
	   */
	  var coalesceCircularReferences = function coalesceCircularReferences(value, path) {
	    if (isValueObjectOrArray(value)) {
	      if (map.has(value)) {
	        return {
	          $ref: map.get(value)
	        };
	      }
	
	      map.set(value, path);
	
	      if (toString.call(value) === ARRAY_OBJECT_CLASS) {
	        return value.map(function (item, itemIndex) {
	          return coalesceCircularReferences(item, path + '[' + itemIndex + ']');
	        });
	      }
	
	      return keys(value).reduce(function (object, name) {
	        object[name] = coalesceCircularReferences(value[name], path + '[' + JSON.stringify(name) + ']');
	
	        return object;
	      }, {});
	    }
	
	    return value;
	  };
	
	  return coalesceCircularReferences(object, '$');
	};
	
	/**
	 * @private
	 *
	 * @function getCacheKey
	 *
	 * @description
	 * get the key used for storage in the method's cache
	 *
	 * @param {Array<*>} args arguments passed to the method
	 * @param {function} serializer method used to serialize keys into a string
	 * @param {boolean} isMaxArgsFinite has the maxArgs option been applied
	 * @param {number} maxArgs the maximum number of arguments to use in the serialization
	 * @returns {*}
	 */
	var getCacheKey = exports.getCacheKey = function getCacheKey(args, serializer, isMaxArgsFinite, maxArgs) {
	  return args.length === 1 ? args[0] : serializer(args, isMaxArgsFinite, maxArgs);
	};
	
	/**
	 * @private
	 *
	 * @function deleteItemFromCache
	 *
	 * @description
	 * remove an item from cache and the usage list
	 *
	 * @param {Map|Object} cache caching mechanism for method
	 * @param {Array<*>} usage order of key usage
	 * @param {*} key key to delete
	 */
	var deleteItemFromCache = exports.deleteItemFromCache = function deleteItemFromCache(cache, usage, key) {
	  var index = usage.indexOf(key);
	
	  if (!!~index) {
	    splice(usage, index);
	    // $FlowIgnore: map type
	    cache.delete(key);
	  }
	};
	
	/**
	 * @private
	 *
	 * @function getFunctionWithCacheAdded
	 *
	 * @description
	 * add the caching mechanism to the function passed and return the function
	 *
	 * @param {function} fn method that will have the cache added to it
	 * @param {Map|Object} cache caching mechanism that has get / set / has methods
	 * @returns {Function} method that has cache mechanism added to it
	 */
	var getFunctionWithCacheAdded = exports.getFunctionWithCacheAdded = function getFunctionWithCacheAdded(fn, cache) {
	  fn.cache = cache;
	  fn.usage = [];
	
	  /**
	   * @private
	   *
	   * @function clear
	   *
	   * @description
	   * clear the current cache for this method
	   */
	  fn.clear = function () {
	    fn.cache.clear();
	    fn.usage = [];
	  };
	
	  /**
	   * @private
	   *
	   * @function delete
	   *
	   * @description
	   * delete the cache for the key passed for this method
	   *
	   * @param {*} key key to remove from cache
	   */
	  fn.delete = function (key) {
	    deleteItemFromCache(fn.cache, fn.usage, key);
	  };
	
	  /**
	   * @private
	   *
	   * @function keys
	   *
	   * @description
	   * get the list of keys currently in cache
	   *
	   * @returns {Array<*>}
	   */
	  fn.keys = function () {
	    var array = [];
	
	    fn.cache.forEach(function (value, key) {
	      array.push(key);
	    });
	
	    return array;
	  };
	
	  return fn;
	};
	
	/**
	 * @private
	 *
	 * @function isEqual
	 *
	 * @description
	 * are the two values passed equal or both NaN
	 *
	 * @param {*} value1 first value to check equality for
	 * @param {*} value2 second value to check equality for
	 * @returns {boolean} are the two values equal
	 */
	var isEqual = exports.isEqual = function isEqual(value1, value2) {
	  return value1 === value2 || value1 !== value1 && value2 !== value2;
	};
	
	/**
	 * @private
	 *
	 * @function getIndexOf
	 *
	 * @description
	 * get the index of the key in the map
	 *
	 * @param {MapLike} map map to find key in
	 * @param {*} key key to find in map
	 * @returns {number} index location of key in list
	 */
	var getIndexOf = exports.getIndexOf = function getIndexOf(map, key) {
	  var index = -1;
	
	  while (++index < map.size) {
	    if (isEqual(map.list[index].key, key)) {
	      return index;
	    }
	  }
	
	  return -1;
	};
	
	/**
	 * @private
	 *
	 * @function stringify
	 *
	 * @description
	 * stringify with a custom replacer if circular, else use standard JSON.stringify
	 *
	 * @param {*} value value to stringify
	 * @returns {string} the stringified version of value
	 */
	var stringify = exports.stringify = function stringify(value) {
	  try {
	    return jsonStringify(value);
	  } catch (exception) {
	    return jsonStringify(decycle(value));
	  }
	};
	
	/**
	 * @private
	 *
	 * @function getStringifiedArgument
	 *
	 * @description
	 * get the stringified version of the argument passed
	 *
	 * @param {*} arg argument to stringify
	 * @returns {string}
	 */
	var getStringifiedArgument = exports.getStringifiedArgument = function getStringifiedArgument(arg) {
	  return isComplexObject(arg) ? stringify(arg) : arg;
	};
	
	/**
	 * @private
	 *
	 * @function isKeyLastItem
	 *
	 * @description
	 * is the key passed the same key as the lastItem
	 *
	 * @param {{key: *, value: *}} lastItem the current lastItem in the Map
	 * @param {*} key the key to match on
	 * @returns {boolean} is the key the same as the LastItem
	 */
	var isKeyLastItem = exports.isKeyLastItem = function isKeyLastItem(lastItem, key) {
	  return !!lastItem && isEqual(lastItem.key, key);
	};
	
	/**
	 * @private
	 *
	 * @function serializeArguments
	 *
	 * @description
	 * serialize the arguments into a string
	 *
	 * @param {Array<*>} args arguments to serialize into string
	 * @param {boolean} isMaxArgsFinite is there a limit to the args to use when caching
	 * @param {number} maxArgs maximum number of arguments to use for caching the key
	 * @returns {string} string of serialized arguments
	 */
	var serializeArguments = exports.serializeArguments = function serializeArguments(args, isMaxArgsFinite, maxArgs) {
	  var length = isMaxArgsFinite ? maxArgs : args.length;
	
	  var index = -1,
	      key = '|';
	
	  while (++index < length) {
	    key += getStringifiedArgument(args[index]) + '|';
	  }
	
	  return key;
	};
	
	/**
	 * @private
	 *
	 * @function setExpirationOfCache
	 *
	 * @description
	 * set the cache to expire after the maxAge passed (coalesced to 0)
	 *
	 * @param {function} fn memoized function with cache and usage storage
	 * @param {*} key key in cache to expire
	 * @param {number} maxAge number in ms to wait before expiring the cache
	 */
	var setExpirationOfCache = exports.setExpirationOfCache = function setExpirationOfCache(fn, key, maxAge) {
	  var cache = fn.cache,
	      usage = fn.usage;
	
	
	  var expirationTime = Math.max(maxAge, 0);
	
	  setTimeout(function () {
	    deleteItemFromCache(cache, usage, key);
	  }, expirationTime);
	};
	
	/**
	 * @private
	 *
	 * @function setNewCachedValue
	 *
	 * @description
	 * assign the new value to the key in the functions cache and return the value
	 *
	 * @param {function} fn method whose cache will have new value assigned
	 * @param {*} key key in cache to assign value to
	 * @param {*} value value to store in cache
	 * @param {boolean} isPromise is the value a promise or not
	 * @param {boolean} isMaxAgeFinite does the cache have a maxAge or not
	 * @param {number} maxAge how long should the cache persist
	 * @returns {any} value just stored in cache
	 */
	var setNewCachedValue = exports.setNewCachedValue = function setNewCachedValue(fn, key, value, isPromise, isMaxAgeFinite, maxAge) {
	  if (isPromise) {
	    value.then(function (resolvedValue) {
	      fn.cache.set(key, resolvedValue);
	    });
	  } else {
	    fn.cache.set(key, value);
	  }
	
	  if (isMaxAgeFinite) {
	    setExpirationOfCache(fn, key, maxAge);
	  }
	
	  return value;
	};
	
	/**
	 * @private
	 *
	 * @function setUsageOrder
	 *
	 * @description
	 * place the key passed at the front of the array, removing it from its current index if it
	 * exists and removing the last item in the array if it is larger than maxSize
	 *
	 * @param {function} fn memoized function storing cache
	 * @param {Map} fn.cache caching mechanism used by memoized function
	 * @param {Array<*>} fn.usage array of keys in order of most recently used
	 * @param {*} key key to place at the front of the array
	 * @param {number} maxSize the maximum size of the cache
	 */
	var setUsageOrder = exports.setUsageOrder = function setUsageOrder(fn, key, maxSize) {
	  var cache = fn.cache,
	      usage = fn.usage;
	
	  var index = usage.indexOf(key);
	
	  if (index !== 0) {
	    if (!!~index) {
	      splice(usage, index);
	    }
	
	    unshift(usage, key);
	
	    if (usage.length > maxSize) {
	      deleteItemFromCache(cache, usage, usage[usage.length - 1]);
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reduceStateToMatchingKeys = exports.isElementVoidTag = exports.haveValuesChanged = exports.getValidKeys = exports.getScopedValues = exports.getRequestAnimationFrame = exports.getKeysSubsetWithType = exports.getKeyType = exports.isSizeKey = exports.isPositionKey = exports.getElementValues = exports.getNaturalDimensionValue = exports.createIsKeyType = undefined;
	
	var _filter = __webpack_require__(25);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _includes = __webpack_require__(26);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _isNull = __webpack_require__(28);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	var _isUndefined = __webpack_require__(29);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _reduce = __webpack_require__(30);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	var _some = __webpack_require__(31);
	
	var _some2 = _interopRequireDefault(_some);
	
	var _constants = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @private
	 *
	 * @function createIsKeyType
	 *
	 * @description
	 * create a key type checker function
	 *
	 * @param {Array<string>} typeArray
	 * @returns {function(string): boolean}
	 */
	var createIsKeyType = exports.createIsKeyType = function createIsKeyType(typeArray) {
	  return function (key) {
	    return !!~typeArray.indexOf(key);
	  };
	};
	
	/**
	 * @private
	 *
	 * @function getNaturalDimensionValue
	 *
	 * @description
	 * For naturalHeight and naturalWidth, coalesce the values
	 * with scrollHeight and scrollWIdth if the element does not
	 * natively support it
	 *
	 * @param {HTMLElement} source the element to get the size / position value from
	 * @param {string} key the size / position value to retrieve from source
	 * @returns {number}
	 */
	
	
	// constants
	// external dependencies
	var getNaturalDimensionValue = exports.getNaturalDimensionValue = function getNaturalDimensionValue(source, key) {
	  var value = source[key];
	
	  return (0, _isUndefined2.default)(value) ? source[key.replace(_constants.NATURAL_REGEXP, 'scroll')] : value;
	};
	
	/**
	 * @private
	 *
	 * @function getElementValues
	 *
	 * @description
	 * get the values of the element or its bounding client rect
	 *
	 * @param {HTMLElement} element
	 * @param {Array<Object>} keys
	 * @returns {Object}
	 */
	var getElementValues = exports.getElementValues = function getElementValues(element, keys) {
	  var boundingClientRect = element.getBoundingClientRect();
	
	  return (0, _reduce2.default)(keys, function (values, _ref) {
	    var key = _ref.key,
	        source = _ref.source;
	
	    values[key] = source === _constants.CLIENT_RECT_TYPE ? boundingClientRect[key] : getNaturalDimensionValue(element, key);
	
	    return values;
	  }, {});
	};
	
	/**
	 * @private
	 *
	 * @function isPositionKey
	 *
	 * @description
	 * is the key passed a position key
	 *
	 * @param {string} key
	 * @returns {boolean}
	 */
	var isPositionKey = exports.isPositionKey = createIsKeyType(_constants.ALL_POSITION_KEYS);
	
	/**
	 * @private
	 *
	 * @function isSizeKey
	 *
	 * @description
	 * is the key passed a size key
	 *
	 * @param {string} key
	 * @returns {boolean}
	 */
	var isSizeKey = exports.isSizeKey = createIsKeyType(_constants.ALL_SIZE_KEYS);
	
	/**
	 * @private
	 *
	 * @function getKeyType
	 *
	 * @description
	 * get the type (position or size) of the key passed
	 *
	 * @param {string} key
	 * @param {string} positionProp
	 * @param {string} sizeProp
	 * @returns {string}
	 */
	var getKeyType = exports.getKeyType = function getKeyType(key, _ref2) {
	  var positionProp = _ref2.positionProp,
	      sizeProp = _ref2.sizeProp;
	
	  if (isPositionKey(key)) {
	    return positionProp;
	  }
	
	  if (isSizeKey(key)) {
	    return sizeProp;
	  }
	
	  return null;
	};
	
	/**
	 * @private
	 *
	 * @function getKeysSubsetWithType
	 *
	 * @description
	 * get subset of array1 based on items existing in array2
	 *
	 * @param {Array<*>} sourceArray the array to filter
	 * @param {Array<*>} valuesToExtract the array to find matches in
	 * @param {string} source the source of the value the key relates to
	 * @param {{positionProp: string, sizeProp: string}} propTypes the names of the scope categories
	 * @returns {Array<T>} the resulting array of matching values from array1 and array2
	 */
	var getKeysSubsetWithType = exports.getKeysSubsetWithType = function getKeysSubsetWithType(sourceArray, valuesToExtract, source, propTypes) {
	  return (0, _reduce2.default)(sourceArray, function (valuesWithTypes, key) {
	    if ((0, _includes2.default)(valuesToExtract, key)) {
	      var type = getKeyType(key, propTypes);
	
	      if (!(0, _isNull2.default)(type)) {
	        valuesWithTypes.push({
	          key: key,
	          source: source,
	          type: type
	        });
	      }
	    }
	
	    return valuesWithTypes;
	  }, []);
	};
	
	/**
	 * @private
	 *
	 * @function getRequestAnimationFrame
	 *
	 * @description
	 * wait to assign the raf until mount, so it has access to the
	 * window object
	 *
	 * @returns {function} the polyfilled requestAnimationFrame method
	 */
	var getRequestAnimationFrame = exports.getRequestAnimationFrame = function getRequestAnimationFrame() {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	};
	
	/**
	 * @private
	 *
	 * @function getValues
	 *
	 * @description
	 * based on the keys passed, create an object with either position
	 * or size or both properties that are objects containing the respective
	 * values for the associated keys
	 *
	 * @param {Array<string>} keys keys to associate in state
	 * @param {Object} values state object of size / position properties
	 * @param {boolean} isFlattened are the props passed a flattened object or not
	 * @returns {Object} the values to pass down as props
	 */
	var getScopedValues = exports.getScopedValues = function getScopedValues(keys, values, isFlattened) {
	  if (isFlattened) {
	    return values;
	  }
	
	  return (0, _reduce2.default)(keys, function (scopedValues, _ref3) {
	    var key = _ref3.key,
	        type = _ref3.type;
	
	    if (!scopedValues[type]) {
	      scopedValues[type] = {};
	    }
	
	    scopedValues[type][key] = values[key];
	
	    return scopedValues;
	  }, {});
	};
	
	/**
	 * @private
	 *
	 * @description
	 * based on their existence in keysToTestAgainst, determine which of the keys
	 * passed are considered valid
	 *
	 * @param {Array<string>} keys the keys to test
	 * @param {Array<string>} keysToTestAgainst the keys to find matches from
	 * @returns {Array<string>} the resulting matching key set
	 */
	var getValidKeys = exports.getValidKeys = function getValidKeys(keys, keysToTestAgainst) {
	  return (0, _filter2.default)(keys, function (key) {
	    return (0, _includes2.default)(keysToTestAgainst, key);
	  });
	};
	
	/**
	 * @private
	 *
	 * @function haveValuesChanged
	 *
	 * @description
	 * iterate through keys and determine if the values have
	 * changed compared to what is stored in state
	 *
	 * @param {Array<Object>} keys keys to get from the state
	 * @param {Object} values the new values to test
	 * @param {Object} currentState the current values in state
	 * @returns {boolean} have any of the keys changed
	 */
	var haveValuesChanged = exports.haveValuesChanged = function haveValuesChanged(keys, values, currentState) {
	  return (0, _some2.default)(keys, function (_ref4) {
	    var key = _ref4.key;
	
	    return values[key] !== currentState[key];
	  });
	};
	
	/**
	 * @private
	 *
	 * @function isElementVoidTag
	 *
	 * @description
	 * is the element passed a void tag name
	 *
	 * @param {HTMLElement} element
	 * @returns {boolean}
	 */
	var isElementVoidTag = exports.isElementVoidTag = function isElementVoidTag(element) {
	  return (0, _includes2.default)(_constants.VOID_ELEMENT_TAG_NAMES, element.tagName.toUpperCase());
	};
	
	/**
	 * @private
	 *
	 * @function reduceStateToMatchingKeys
	 *
	 * @description
	 * based on desiredKeys, build the initialState object
	 *
	 * @param {Array<string>} keys the keys requested from the decorator
	 * @returns {Array<T>} the object of key: 0 default values
	 */
	var reduceStateToMatchingKeys = exports.reduceStateToMatchingKeys = function reduceStateToMatchingKeys(keys) {
	  return (0, _reduce2.default)(keys, function (accumulatedInitialState, _ref5) {
	    var key = _ref5.key;
	
	    accumulatedInitialState[key] = 0;
	
	    return accumulatedInitialState;
	  }, {});
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(27);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */
	function isNull(value) {
	  return value === null;
	}
	
	module.exports = isNull;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=remeasure.js.map