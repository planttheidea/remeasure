(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("Remeasure", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Remeasure"] = factory(require("react"), require("react-dom"));
	else
		root["Remeasure"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // external dependencies
	
	
	// utils
	
	
	// constants
	
	
	// HOC
	
	
	var _isArray = __webpack_require__(2);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isPlainObject = __webpack_require__(3);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _isString = __webpack_require__(7);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _utils = __webpack_require__(8);
	
	var _constants = __webpack_require__(12);
	
	var _getHigherOrderComponent = __webpack_require__(13);
	
	var _getHigherOrderComponent2 = _interopRequireDefault(_getHigherOrderComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * create higher-order component that injects size and position properties
	 * into OriginalComponent as an object under the prop name size and position
	 *
	 * @param {Component|Array<string>} keys
	 * @param {Object} options
	 * @returns {RemeasureComponent}
	 */
	var measure = function measure(keys, options) {
	  if ((0, _isString2.default)(keys)) {
	    var position = _constants.POSITION_PROP_DEFAULT,
	        size = _constants.SIZE_PROP_DEFAULT;
	
	    if ((0, _isPlainObject2.default)(options)) {
	      var _options$positionProp = options.positionProp;
	      position = _options$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _options$positionProp;
	      var _options$sizeProp = options.sizeProp;
	      size = _options$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _options$sizeProp;
	    }
	
	    switch (keys) {
	      case position:
	        keys = _constants.ALL_POSITION_KEYS;
	        break;
	
	      case size:
	        keys = _constants.ALL_SIZE_KEYS;
	        break;
	
	      default:
	        keys = [keys];
	        break;
	    }
	  }
	
	  if ((0, _isArray2.default)(keys)) {
	    var _ret = function () {
	      var validKeys = (0, _utils.getValidKeys)(keys, _constants.ALL_KEYS);
	
	      return {
	        v: function v(OriginalComponent) {
	          return (0, _getHigherOrderComponent2.default)(OriginalComponent, validKeys, options);
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	
	  if ((0, _isPlainObject2.default)(keys)) {
	    return function (OriginalComponent) {
	      return (0, _getHigherOrderComponent2.default)(OriginalComponent, _constants.ALL_KEYS, keys);
	    };
	  }
	
	  return (0, _getHigherOrderComponent2.default)(keys, _constants.ALL_KEYS);
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

	var getPrototype = __webpack_require__(4),
	    isObjectLike = __webpack_require__(6);
	
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
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
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
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(5);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isObjectLike = __webpack_require__(6);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
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
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reduceStateToMatchingKeys = exports.haveValuesChanged = exports.getValues = exports.getValidKeys = exports.getRequestAnimationFrame = exports.getNaturalDimensionValue = exports.createObjectFromKeys = exports.getArraySubset = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // external dependencies
	
	
	// constants
	
	
	var _includes = __webpack_require__(9);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _isArray = __webpack_require__(2);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isUndefined = __webpack_require__(11);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _constants = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * For naturalHeight and naturalWidth, coalesce the values
	 * with scrollHeight and scrollWIdth if the element does not
	 * natively support it
	 *
	 * @param {HTMLElement} source
	 * @param {string} key
	 * @returns {number}
	 */
	var getNaturalDimensionValue = function getNaturalDimensionValue(source, key) {
	  if ((0, _isUndefined2.default)(source[key])) {
	    return source[key.replace(_constants.NATURAL_REGEXP, 'scroll')];
	  }
	
	  return source[key];
	};
	
	/**
	 * create an object based on the keys passed and their value
	 * in the source object
	 *
	 * @param {Array<string>} keys
	 * @param {function} keys.reduce
	 * @param {Object|ClientRect} source
	 * @param {boolean} shouldAlterNaturalKeys=true
	 * @returns {Object}
	 */
	var createObjectFromKeys = function createObjectFromKeys(keys, source) {
	  var shouldAlterNaturalKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	  return keys.reduce(function (target, key) {
	    return _extends({}, target, _defineProperty({}, key, shouldAlterNaturalKeys ? getNaturalDimensionValue(source, key) : source[key]));
	  }, {});
	};
	
	/**
	 * get subset of array1 based on items existing in array2
	 *
	 * @param {Array<*>} array1
	 * @param {Array<*>} array2
	 * @returns {Array<T>}
	 */
	var getArraySubset = function getArraySubset(array1, array2) {
	  return array1.filter(function (item) {
	    return (0, _includes2.default)(array2, item);
	  });
	};
	
	/**
	 * wait to assign the raf until mount, so it has access to the
	 * window object
	 *
	 * @returns {function}
	 */
	var getRequestAnimationFrame = function getRequestAnimationFrame() {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	};
	
	/**
	 * based on their existence in keysToTestAgainst, determine which of the keys
	 * passed are considered valid
	 *
	 * @param {Array<string>} keys
	 * @param {Array<string>} keysToTestAgainst
	 * @returns {Array<string>}
	 */
	var getValidKeys = function getValidKeys(keys, keysToTestAgainst) {
	  return keys.filter(function (key) {
	    return (0, _includes2.default)(keysToTestAgainst, key);
	  });
	};
	
	/**
	 * get the position and size, and booleans to identify they're
	 * intended existence in state
	 *
	 * @param {Array<string>} keys
	 * @param {Object} currentState
	 * @returns {{hasPosition: boolean, hasSize: boolean, position: Object, size: Object}}
	 */
	var getValuesProperties = function getValuesProperties(keys, currentState) {
	  if ((0, _isArray2.default)(keys)) {
	    var _ret = function () {
	      var position = {},
	          size = {},
	          hasPosition = false,
	          hasSize = false;
	
	      keys.forEach(function (key) {
	        if ((0, _includes2.default)(_constants.ALL_POSITION_KEYS, key)) {
	          position[key] = currentState[key];
	          hasPosition = true;
	        } else if ((0, _includes2.default)(_constants.ALL_SIZE_KEYS, key)) {
	          size[key] = currentState[key];
	          hasSize = true;
	        }
	      });
	
	      return {
	        v: {
	          hasPosition: hasPosition,
	          hasSize: hasSize,
	          position: position,
	          size: size
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	
	  var position = createObjectFromKeys(_constants.ALL_POSITION_KEYS, currentState, false);
	  var size = createObjectFromKeys(_constants.ALL_SIZE_KEYS, currentState, false);
	
	  return {
	    hasPosition: true,
	    hasSize: true,
	    position: position,
	    size: size
	  };
	};
	
	/* eslint-disable valid-jsdoc */
	/**
	 * based on the keys passed, create an object with either position
	 * or size or both properties that are objects containing the respective
	 * values for the associated keys
	 *
	 * @param {Array<string>} keys
	 * @param {Object} currentState
	 * @param {string} positionProp
	 * @param {string} sizeProp
	 * @param {boolean} isFlattened
	 * @returns {Object}
	 */
	/* eslint-enabled */
	var getValues = function getValues(keys, currentState, _ref, isFlattened) {
	  var positionProp = _ref.positionProp;
	  var sizeProp = _ref.sizeProp;
	
	  var _getValuesProperties = getValuesProperties(keys, currentState);
	
	  var hasPosition = _getValuesProperties.hasPosition;
	  var hasSize = _getValuesProperties.hasSize;
	  var position = _getValuesProperties.position;
	  var size = _getValuesProperties.size;
	
	
	  var values = {};
	
	  if (isFlattened) {
	    return _extends({}, hasSize ? size : null, hasPosition ? position : null);
	  }
	
	  if (hasSize) {
	    values[sizeProp] = size;
	  }
	
	  if (hasPosition) {
	    values[positionProp] = position;
	  }
	
	  return values;
	};
	
	/**
	 * iterate through keys and determine if the values have
	 * changed compared to what is stored in state
	 *
	 * @param {Array<string>} keys
	 * @param {Object} values
	 * @param {Object} currentState
	 * @returns {boolean}
	 */
	var haveValuesChanged = function haveValuesChanged(keys, values, currentState) {
	  return keys.some(function (key) {
	    return values[key] !== currentState[key];
	  });
	};
	
	/**
	 * based on desiredKeys, build the initialState object
	 *
	 * @param {Array<string>} allKeys
	 * @param {Array<string>} desiredKeys
	 * @returns {Array<T>}
	 */
	var reduceStateToMatchingKeys = function reduceStateToMatchingKeys(allKeys, desiredKeys) {
	  return allKeys.reduce(function (accumulatedInitialState, key) {
	    if ((0, _includes2.default)(desiredKeys, key)) {
	      accumulatedInitialState[key] = 0;
	    }
	
	    return accumulatedInitialState;
	  }, {});
	};
	
	exports.getArraySubset = getArraySubset;
	exports.createObjectFromKeys = createObjectFromKeys;
	exports.getNaturalDimensionValue = getNaturalDimensionValue;
	exports.getRequestAnimationFrame = getRequestAnimationFrame;
	exports.getValidKeys = getValidKeys;
	exports.getValues = getValues;
	exports.haveValuesChanged = haveValuesChanged;
	exports.reduceStateToMatchingKeys = reduceStateToMatchingKeys;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(10);
	
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
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var DEBOUNCE_VALUE_DEFAULT = 0;
	var FLATTEN_DEFAULT = false;
	var POSITION_PROP_DEFAULT = 'position';
	var RENDER_ON_RESIZE_DEFAULT = true;
	var SIZE_PROP_DEFAULT = 'size';
	
	var BOUNDING_CLIENT_RECT_SIZE_KEYS = ['height', 'width'];
	
	var BOUNDING_CLIENT_RECT_POSITION_KEYS = ['bottom', 'left', 'right', 'top'];
	
	var ALL_BOUNDING_CLIENT_RECT_KEYS = [].concat(BOUNDING_CLIENT_RECT_POSITION_KEYS, BOUNDING_CLIENT_RECT_SIZE_KEYS);
	
	var DOM_ELEMENT_POSITION_KEYS = ['clientLeft', 'clientTop', 'offsetLeft', 'offsetTop', 'scrollLeft', 'scrollTop'];
	
	var DOM_ELEMENT_SIZE_KEYS = ['clientHeight', 'clientWidth', 'naturalHeight', 'naturalWidth', 'offsetHeight', 'offsetWidth', 'scrollHeight', 'scrollWidth'];
	
	var NATURAL_REGEXP = /natural/;
	
	var VOID_ELEMENT_TAG_NAMES = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR'];
	
	var ALL_DOM_ELEMENT_KEYS = [].concat(DOM_ELEMENT_POSITION_KEYS, DOM_ELEMENT_SIZE_KEYS);
	
	var ALL_POSITION_KEYS = [].concat(DOM_ELEMENT_POSITION_KEYS, BOUNDING_CLIENT_RECT_POSITION_KEYS);
	
	var ALL_SIZE_KEYS = [].concat(DOM_ELEMENT_SIZE_KEYS, BOUNDING_CLIENT_RECT_SIZE_KEYS);
	
	var ALL_KEYS = [].concat(_toConsumableArray(ALL_POSITION_KEYS), _toConsumableArray(ALL_SIZE_KEYS));
	
	exports.ALL_BOUNDING_CLIENT_RECT_KEYS = ALL_BOUNDING_CLIENT_RECT_KEYS;
	exports.ALL_DOM_ELEMENT_KEYS = ALL_DOM_ELEMENT_KEYS;
	exports.ALL_KEYS = ALL_KEYS;
	exports.ALL_POSITION_KEYS = ALL_POSITION_KEYS;
	exports.ALL_SIZE_KEYS = ALL_SIZE_KEYS;
	exports.BOUNDING_CLIENT_RECT_POSITION_KEYS = BOUNDING_CLIENT_RECT_POSITION_KEYS;
	exports.BOUNDING_CLIENT_RECT_SIZE_KEYS = BOUNDING_CLIENT_RECT_SIZE_KEYS;
	exports.DEBOUNCE_VALUE_DEFAULT = DEBOUNCE_VALUE_DEFAULT;
	exports.DOM_ELEMENT_POSITION_KEYS = DOM_ELEMENT_POSITION_KEYS;
	exports.DOM_ELEMENT_SIZE_KEYS = DOM_ELEMENT_SIZE_KEYS;
	exports.FLATTEN_DEFAULT = FLATTEN_DEFAULT;
	exports.NATURAL_REGEXP = NATURAL_REGEXP;
	exports.POSITION_PROP_DEFAULT = POSITION_PROP_DEFAULT;
	exports.RENDER_ON_RESIZE_DEFAULT = RENDER_ON_RESIZE_DEFAULT;
	exports.SIZE_PROP_DEFAULT = SIZE_PROP_DEFAULT;
	exports.VOID_ELEMENT_TAG_NAMES = VOID_ELEMENT_TAG_NAMES;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _elementResizeEvent = __webpack_require__(14);
	
	var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);
	
	var _debounce = __webpack_require__(15);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	var _includes = __webpack_require__(9);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _react = __webpack_require__(21);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(22);
	
	var _utils = __webpack_require__(8);
	
	var _constants = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // external dependencies
	
	
	// utils
	
	
	// constants
	
	
	var raf = void 0;
	
	/**
	 * create the HOC that injects the position and size props
	 * into the child (assuming they have keys that are valid
	 * for one or both of those)
	 *
	 * @param {Component} OriginalComponent
	 * @param {Array<string>} keys
	 * @param {Object} options={}
	 * @returns {RemeasureComponent}
	 */
	var getHigherOrderComponent = function getHigherOrderComponent(OriginalComponent, keys) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _options$debounce = options.debounce;
	  var debounceValue = _options$debounce === undefined ? _constants.DEBOUNCE_VALUE_DEFAULT : _options$debounce;
	  var _options$flatten = options.flatten;
	  var flatten = _options$flatten === undefined ? _constants.FLATTEN_DEFAULT : _options$flatten;
	  var _options$positionProp = options.positionProp;
	  var positionProp = _options$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _options$positionProp;
	  var _options$renderOnResi = options.renderOnResize;
	  var renderOnResize = _options$renderOnResi === undefined ? _constants.RENDER_ON_RESIZE_DEFAULT : _options$renderOnResi;
	  var _options$sizeProp = options.sizeProp;
	  var sizeProp = _options$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _options$sizeProp;
	
	
	  var propKeyNames = {
	    positionProp: positionProp,
	    sizeProp: sizeProp
	  };
	
	  var boundingClientRectKeys = (0, _utils.getArraySubset)(_constants.ALL_BOUNDING_CLIENT_RECT_KEYS, keys);
	  var domElementKeys = (0, _utils.getArraySubset)(_constants.ALL_DOM_ELEMENT_KEYS, keys);
	  var initialState = (0, _utils.reduceStateToMatchingKeys)(_constants.ALL_KEYS, keys);
	
	  if (!raf) {
	    raf = (0, _utils.getRequestAnimationFrame)();
	  }
	
	  var RemeasureComponent = function (_Component) {
	    _inherits(RemeasureComponent, _Component);
	
	    function RemeasureComponent() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, RemeasureComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RemeasureComponent.__proto__ || Object.getPrototypeOf(RemeasureComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = initialState, _this.domElement = null, _this.debouncedSetValues = (0, _debounce2.default)(function () {
	        if (_this.domElement) {
	          _this.setStateIfChanged();
	        }
	      }, debounceValue || _constants.DEBOUNCE_VALUE_DEFAULT), _this.setDomElement = function () {
	        var domElement = (0, _reactDom.findDOMNode)(_this);
	
	        if (domElement) {
	          _this.domElement = domElement;
	          _this.setOnResize();
	        }
	      }, _this.setOnResize = function () {
	        if (renderOnResize && !(0, _includes2.default)(_constants.VOID_ELEMENT_TAG_NAMES, _this.domElement.tagName.toUpperCase())) {
	          var resizeFunction = debounceValue ? _this.debouncedSetValues : _this.setValues;
	
	          (0, _elementResizeEvent2.default)(_this.domElement, resizeFunction);
	        }
	      }, _this.setStateIfChanged = function () {
	        var domElement = _this.domElement;
	        var boundingClientRect = domElement.getBoundingClientRect();
	
	        var values = _extends({}, (0, _utils.createObjectFromKeys)(boundingClientRectKeys, boundingClientRect), (0, _utils.createObjectFromKeys)(domElementKeys, domElement));
	
	        if ((0, _utils.haveValuesChanged)(keys, values, _this.state)) {
	          _this.setState(values);
	        }
	      }, _this.setValues = function () {
	        if (_this.domElement) {
	          raf(_this.setStateIfChanged);
	        }
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(RemeasureComponent, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.setDomElement();
	
	        if (this.domElement) {
	          this.setValues();
	        }
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        if (!this.domElement) {
	          this.setDomElement();
	        }
	
	        this.setValues();
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.domElement = null;
	      }
	
	      /**
	       * debounce the assignment of new state if the debounceValue is provided
	       */
	
	
	      /**
	       * set the domElement associated with the instance
	       */
	
	
	      /**
	       * set the onResize function if renderOnResize is true
	       */
	
	
	      /**
	       * update the state of the HOC if any of the values requested have changed
	       */
	
	
	      /**
	       * based on the current DOM element, get the values
	       * and determine if the state should be updated (only
	       * if things have changed)
	       */
	
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(OriginalComponent, _extends({}, this.props, (0, _utils.getValues)(keys, this.state, propKeyNames, flatten)));
	      }
	    }]);
	
	    return RemeasureComponent;
	  }(_react.Component);
	
	  return RemeasureComponent;
	};
	
	exports.default = getHigherOrderComponent;
	module.exports = exports['default'];

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16),
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
/* 16 */
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

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=remeasure.js.map