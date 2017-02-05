(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("Remeasure", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Remeasure"] = factory(require("react"), require("react-dom"));
	else
		root["Remeasure"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_31__) {
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
	
	exports.__esModule = true;
	
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
	
	var _utils = __webpack_require__(14);
	
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
	 * @param {Component|Array<string>|Object|string} passedKeys if used without parameters, the component that will be
	 * measured, else either single key or array of keys to watch for measurement, or an object of options
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
	  var options = _extends({}, isKeysObject ? passedKeys : passedOptions);
	
	  if (isKeysObject) {
	    return (0, _getMeasuredComponent2.default)(_constants.ALL_KEYS, passedKeys);
	  }
	
	  var keys = void 0;
	
	  if ((0, _isArray2.default)(passedKeys)) {
	    keys = (0, _utils.getValidKeys)(passedKeys, _constants.ALL_KEYS);
	  } else if ((0, _isString2.default)(passedKeys)) {
	    keys = (0, _utils.getKeysFromStringKey)(passedKeys, options);
	  } else {
	    keys = _constants.ALL_KEYS;
	  }
	
	  return (0, _getMeasuredComponent2.default)(keys, options);
	};
	
	_constants.ALL_KEYS.forEach(function (key) {
	  measure[key] = (0, _utils.createFlattenConvenienceFunction)(measure, key);
	});
	
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
	
	exports.__esModule = true;
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
	
	var ALL_KEYS = exports.ALL_KEYS = [].concat(ALL_POSITION_KEYS, ALL_SIZE_KEYS);
	
	var CLIENT_RECT_TYPE = exports.CLIENT_RECT_TYPE = 'clientRect';
	var ELEMENT_TYPE = exports.ELEMENT_TYPE = 'element';
	
	var DEFAULT_INSTANCE_ELEMENT_VALUE = exports.DEFAULT_INSTANCE_ELEMENT_VALUE = null;
	var DEFAULT_INSTANCE_HAS_RESIZE_VALUE = exports.DEFAULT_INSTANCE_HAS_RESIZE_VALUE = false;
	var DEFAULT_INSTANCE_MOUNTED_VALUE = exports.DEFAULT_INSTANCE_MOUNTED_VALUE = false;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(11);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // external dependencies
	
	
	// constants
	
	
	// utils
	
	
	var getMeasuredComponent = function getMeasuredComponent(keys, options) {
	  var selectedKeys = (0, _utils.getKeysWithSourceAndType)(keys, options);
	
	  return function (PassedComponent) {
	    var displayName = (0, _utils.getComponentName)(PassedComponent);
	
	    var MeasuredComponent = function (_Component) {
	      _inherits(MeasuredComponent, _Component);
	
	      function MeasuredComponent() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, MeasuredComponent);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = (0, _utils.reduceStateToMatchingKeys)(selectedKeys), _this.componentDidMount = (0, _utils.createSetInstanceElement)(_this, selectedKeys, options, true), _this.componentDidUpdate = (0, _utils.createSetInstanceElement)(_this, selectedKeys, options), _this.componentWillUmount = (0, _utils.createRemoveInstanceElement)(_this), _this.element = _constants.DEFAULT_INSTANCE_ELEMENT_VALUE, _this.hasResize = _constants.DEFAULT_INSTANCE_HAS_RESIZE_VALUE, _this.mounted = _constants.DEFAULT_INSTANCE_MOUNTED_VALUE, _this.getDOMElement = (0, _utils.createGetDOMElement)(_this), _this.getScopedValues = (0, _utils.createGetScopedValues)(), _this.updateValuesIfChanged = (0, _utils.createUpdateValuesIfChanged)(_this, selectedKeys), _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      // lifecycle methods
	
	
	      // instance variables
	
	
	      // instance methods
	
	
	      MeasuredComponent.prototype.render = function render() {
	        return _react2.default.createElement(PassedComponent, _extends({}, this.props, this.getScopedValues(this.state, selectedKeys, options)));
	      };
	
	      return MeasuredComponent;
	    }(_react.Component);
	
	    MeasuredComponent.displayName = 'Measured(' + displayName + ')';
	
	
	    return MeasuredComponent;
	  };
	};
	
	exports.default = getMeasuredComponent;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getValidKeys = exports.getKeysWithSourceAndType = exports.getKeysSubsetWithType = exports.getKeysFromStringKey = exports.getKeyType = exports.isSizeKey = exports.isPositionKey = exports.getPropKeyNames = exports.createUpdateValuesIfChanged = exports.getElementValues = exports.getNaturalDimensionValue = exports.createGetScopedValues = exports.createGetDOMElement = exports.createFlattenConvenienceFunction = exports.createIsKeyType = exports.createSetInstanceElement = exports.createRemoveInstanceElement = exports.setElement = exports.setElementResize = exports.isElementVoidTag = exports.updateValuesViaRaf = exports.createUpdateValuesViaDebounce = exports.clearValues = exports.reduceStateToMatchingKeys = exports.setValuesIfChanged = exports.haveValuesChanged = exports.getComponentName = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // external dependencies
	
	
	// constants
	
	
	var _elementResizeEvent = __webpack_require__(15);
	
	var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);
	
	var _debounce = __webpack_require__(16);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	var _filter = __webpack_require__(21);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _includes = __webpack_require__(22);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isNull = __webpack_require__(24);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	var _isUndefined = __webpack_require__(25);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _reduce = __webpack_require__(26);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	var _some = __webpack_require__(27);
	
	var _some2 = _interopRequireDefault(_some);
	
	var _raf = __webpack_require__(28);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _reactDom = __webpack_require__(31);
	
	var _constants = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @private
	 *
	 * @function getComponentName
	 *
	 * @description
	 * get the name of the component from displayName, the internal name, or fallback
	 *
	 * @param {Component} Component component to get the display name from
	 * @returns {string} Component name
	 */
	var getComponentName = exports.getComponentName = function getComponentName(Component) {
	  return Component.displayName || Component.name || 'Component';
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
	  return (0, _some2.default)(keys, function (_ref) {
	    var key = _ref.key;
	
	    return values[key] !== currentState[key];
	  });
	};
	
	/**
	 * @private
	 *
	 * @function setValuesIfChanged
	 *
	 * @description
	 * if the values have changed and the instance is mounted then set the values in state
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {function} instance.setState setState method of instance component
	 * @param {Array<string>} keys keys to store in state
	 * @param {Object} values updated values to store in state
	 */
	var setValuesIfChanged = exports.setValuesIfChanged = function setValuesIfChanged(instance, keys, values) {
	  if (haveValuesChanged(keys, values, instance.state) && instance.mounted) {
	    instance.setState(values);
	  }
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
	  return (0, _reduce2.default)(keys, function (accumulatedInitialState, _ref2) {
	    var key = _ref2.key;
	
	    accumulatedInitialState[key] = 0;
	
	    return accumulatedInitialState;
	  }, {});
	};
	
	/**
	 * @private
	 *
	 * @function clearValues
	 *
	 * @description
	 * create function to reset all values to 0 if there is no element present
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {function} instance.setState setState method of instance component
	 * @param {Array<string>} selectedKeys keys to store in state
	 */
	var clearValues = exports.clearValues = function clearValues(instance, selectedKeys) {
	  var emptyValues = reduceStateToMatchingKeys(selectedKeys);
	
	  setValuesIfChanged(instance, selectedKeys, emptyValues);
	};
	
	/**
	 * @private
	 *
	 * @function createUpdateValuesViaDebounce
	 *
	 * @description
	 * create the function to update the values via debounce value
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {number} debounceValue debounce value for the instance provided
	 * @returns {function(): void} function to update the values after debounce timing has passed
	 */
	var createUpdateValuesViaDebounce = exports.createUpdateValuesViaDebounce = function createUpdateValuesViaDebounce(instance, debounceValue) {
	  return (0, _debounce2.default)(function () {
	    if (instance.element) {
	      instance.updateValuesIfChanged();
	    }
	  }, debounceValue);
	};
	
	/**
	 * @private
	 *
	 * @function createUpdateValuesViaRaf
	 *
	 * @description
	 * create the function to update the values via requestAnimationFrame
	 *
	 * @param {MeasuredComponent} instance component instance
	 */
	var updateValuesViaRaf = exports.updateValuesViaRaf = function updateValuesViaRaf(instance) {
	  if (instance.element) {
	    (0, _raf2.default)(instance.updateValuesIfChanged);
	  }
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
	 * @function setElementResize
	 *
	 * @description
	 * create the function to assign the onResize listener to the element
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {number} debounceValue debounce value for the instance provided
	 */
	var setElementResize = exports.setElementResize = function setElementResize(instance, debounceValue) {
	  var element = instance.element;
	
	  if (element && !isElementVoidTag(element)) {
	    var resizeFn = debounceValue ? createUpdateValuesViaDebounce(instance, debounceValue) : updateValuesViaRaf.bind(null, instance);
	
	    (0, _elementResizeEvent2.default)(element, resizeFn);
	
	    instance.hasResize = true;
	  }
	};
	
	/**
	 * @private
	 *
	 * @function setElement
	 *
	 * @description
	 * assign the element to the instance
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {HTMLElement|null} element element to assign to instance
	 * @param {number} debounceValue debounce value for the instance provided
	 * @param {boolean} renderOnResize should the component rerender on resize
	 */
	var setElement = exports.setElement = function setElement(instance, element, debounceValue, renderOnResize) {
	  instance.element = element;
	
	  if (element) {
	    if (renderOnResize && !instance.hasResize) {
	      setElementResize(instance, debounceValue);
	    }
	  } else {
	    instance.hasResize = false;
	  }
	};
	
	/**
	 * @private
	 *
	 * @function createRemoveInstanceElement
	 *
	 * @description
	 * reset instance values to their original state
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @returns {function(): void} function to reset the instance values to defaults
	 */
	var createRemoveInstanceElement = exports.createRemoveInstanceElement = function createRemoveInstanceElement(instance) {
	  return function () {
	    instance.element = _constants.DEFAULT_INSTANCE_ELEMENT_VALUE;
	    instance.hasResize = _constants.DEFAULT_INSTANCE_HAS_RESIZE_VALUE;
	    instance.mounted = _constants.DEFAULT_INSTANCE_MOUNTED_VALUE;
	  };
	};
	
	/**
	 * @private
	 *
	 * @function createSetInstanceElement
	 *
	 * @description
	 * create the componentDidUpdate method for the given instance
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {Array<string>} selectedKeys keys to store in state
	 * @param {Object} [options={}] options passed to the instance
	 * @param {number} [options.debounceValue=DEBOUNCE_VALUE_DEFAULT] value to use for debounce of updates
	 * @param {boolean} [options.renderOnResize=RENDER_ON_RESIZE_DEFAULT] should the component rerender on resize
	 * @param {boolean} [shouldMount=false] if the method should set mounted to true
	 * @returns {function(): void} componentDidUpdate method
	 */
	var createSetInstanceElement = exports.createSetInstanceElement = function createSetInstanceElement(instance, selectedKeys) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var shouldMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var _options$debounce = options.debounce,
	      debounceValue = _options$debounce === undefined ? _constants.DEBOUNCE_VALUE_DEFAULT : _options$debounce,
	      _options$renderOnResi = options.renderOnResize,
	      renderOnResize = _options$renderOnResi === undefined ? _constants.RENDER_ON_RESIZE_DEFAULT : _options$renderOnResi;
	
	
	  return function () {
	    var element = instance.getDOMElement();
	
	    if (shouldMount) {
	      instance.mounted = true;
	    }
	
	    setElement(instance, element, debounceValue, renderOnResize);
	
	    if (element) {
	      updateValuesViaRaf(instance);
	    } else {
	      clearValues(instance, selectedKeys);
	    }
	
	    if (renderOnResize && !instance.hasResize) {
	      setElementResize(instance, debounceValue);
	    }
	  };
	};
	
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
	    return (0, _includes2.default)(typeArray, key);
	  };
	};
	
	/**
	 * @private
	 *
	 * @function createFlattenConvenienceFunction
	 *
	 * @description
	 * create a convenience function that will flatten the values returned (specific to property if passed)
	 *
	 * @param {function} measure main measure function to get the decorator from
	 * @param {string} property specific property to build convenience function for
	 * @returns {function((function|Object), Object): function} decorator with flatten added as option
	 */
	var createFlattenConvenienceFunction = exports.createFlattenConvenienceFunction = function createFlattenConvenienceFunction(measure, property) {
	  return function (component) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var isComponentFunction = (0, _isFunction2.default)(component);
	    var decoratorOptions = isComponentFunction ? options : component;
	    var decorator = measure(property, _extends({}, decoratorOptions, {
	      flatten: true
	    }));
	
	    return isComponentFunction ? decorator(component) : decorator;
	  };
	};
	
	/**
	 * @private
	 *
	 * @function createGetDOMElement
	 *
	 * @description
	 * create function to get the DOM element specific to the component
	 *
	 * @param {MeasuredComponent} instance component instance to find DOM node of
	 * @returns {function(): (HTMLElement|null)}
	 */
	var createGetDOMElement = exports.createGetDOMElement = function createGetDOMElement(instance) {
	  return function () {
	    return (0, _reactDom.findDOMNode)(instance);
	  };
	};
	
	/**
	 * @private
	 *
	 * @function createGetScopedValues
	 *
	 * @description
	 * create a function to, based on the keys passed, create an object with either position
	 * or size or both properties that are objects containing the respective
	 * values for the associated keys
	 *
	 * @returns {function(Array<string>, Object, boolean): Object} the values to pass down as props
	 */
	var createGetScopedValues = exports.createGetScopedValues = function createGetScopedValues() {
	  return function (values, keys, _ref3) {
	    var flatten = _ref3.flatten;
	
	    return flatten ? values : (0, _reduce2.default)(keys, function (scopedValues, _ref4) {
	      var key = _ref4.key,
	          type = _ref4.type;
	
	      if (!scopedValues[type]) {
	        scopedValues[type] = {};
	      }
	
	      scopedValues[type][key] = values[key];
	
	      return scopedValues;
	    }, {});
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
	
	  return (0, _reduce2.default)(keys, function (values, _ref5) {
	    var key = _ref5.key,
	        source = _ref5.source;
	
	    values[key] = source === _constants.CLIENT_RECT_TYPE ? boundingClientRect[key] : getNaturalDimensionValue(element, key);
	
	    return values;
	  }, {});
	};
	
	/**
	 * @private
	 *
	 * @function createUpdateValuesIfChanged
	 *
	 * @description
	 * create the function to get the new values and assign them to state if they have changed
	 *
	 * @param {MeasuredComponent} instance component instance
	 * @param {function} instance.setState setState method of instance component
	 * @param {Array<string>} selectedKeys keys to store in state
	 * @returns {function(): void} function to update the instance state values if they have changed
	 */
	var createUpdateValuesIfChanged = exports.createUpdateValuesIfChanged = function createUpdateValuesIfChanged(instance, selectedKeys) {
	  return function () {
	    var element = instance.element;
	
	    if (element) {
	      var values = getElementValues(element, selectedKeys);
	
	      setValuesIfChanged(instance, selectedKeys, values);
	    }
	  };
	};
	
	/**
	 * @private
	 *
	 * @function getPropKeyNames
	 *
	 * @description
	 * get the positionProp and sizeProp properties from options with defaults applied
	 *
	 * @param {string} [positionProp=POSITION_PROP_DEFAULT] position property name
	 * @param {string} [sizeProp=SIZE_PROP_DEFAULT] size property name
	 * @returns {{positionProp, sizeProp}} object of positionProp and sizeProp
	 */
	var getPropKeyNames = exports.getPropKeyNames = function getPropKeyNames(_ref6) {
	  var _ref6$positionProp = _ref6.positionProp,
	      positionProp = _ref6$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _ref6$positionProp,
	      _ref6$sizeProp = _ref6.sizeProp,
	      sizeProp = _ref6$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _ref6$sizeProp;
	
	  return {
	    positionProp: positionProp,
	    sizeProp: sizeProp
	  };
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
	var getKeyType = exports.getKeyType = function getKeyType(key, _ref7) {
	  var positionProp = _ref7.positionProp,
	      sizeProp = _ref7.sizeProp;
	
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
	 * @function getKeysFromStringKey
	 *
	 * @description
	 * get the keys to store in state based on the key and options passed
	 *
	 * @param {string} key string key passed to decorator
	 * @param {string} [positionProp=POSITION_PROP_DEFAULT] name of position property requested in options
	 * @param {string} [sizeProp=SIZE_PROP_DEFAULT] name of position property requested in options
	 * @returns {Array<string>} keys to store in state
	 */
	var getKeysFromStringKey = exports.getKeysFromStringKey = function getKeysFromStringKey(key, _ref8) {
	  var _ref8$positionProp = _ref8.positionProp,
	      positionProp = _ref8$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _ref8$positionProp,
	      _ref8$sizeProp = _ref8.sizeProp,
	      sizeProp = _ref8$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _ref8$sizeProp;
	
	  if (key === positionProp) {
	    return _constants.ALL_POSITION_KEYS;
	  }
	
	  if (key === sizeProp) {
	    return _constants.ALL_SIZE_KEYS;
	  }
	
	  return [key];
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
	 * @function getKeysWithSourceAndType
	 *
	 * @description
	 * get the keys with mapped source (rect or element) and type (position or size)
	 *
	 * @param {Array<string>} keys keys to return mapped values for
	 * @param {Object} options options passed to instance
	 * @returns {Array<{key: string, source: string, type: string}>} keys with source and type mapped
	 */
	var getKeysWithSourceAndType = exports.getKeysWithSourceAndType = function getKeysWithSourceAndType(keys, options) {
	  var propKeyNames = getPropKeyNames(options);
	
	  return [].concat(getKeysSubsetWithType(_constants.ALL_BOUNDING_CLIENT_RECT_KEYS, keys, _constants.CLIENT_RECT_TYPE, propKeyNames), getKeysSubsetWithType(_constants.ALL_DOM_ELEMENT_KEYS, keys, _constants.ELEMENT_TYPE, propKeyNames));
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

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5),
	    now = __webpack_require__(17),
	    toNumber = __webpack_require__(20);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(18);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(19);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(23);
	
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(29)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=remeasure.js.map