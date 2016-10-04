(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("Remeasure", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Remeasure"] = factory(require("react"), require("react-dom"));
	else
		root["Remeasure"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // utils
	
	
	// constants
	
	
	// HOC
	
	
	var _utils = __webpack_require__(2);
	
	var _constants = __webpack_require__(3);
	
	var _getHigherOrderComponent = __webpack_require__(4);
	
	var _getHigherOrderComponent2 = _interopRequireDefault(_getHigherOrderComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * create higher-order component that injects size and position properties
	 * into OriginalComponent as an object under the prop name size and position
	 *
	 * @param {Component|array<string>} keys
	 * @param {object} options
	 * @returns {RemeasureComponent}
	 */
	var measure = function measure(keys, options) {
	  if ((0, _utils.isString)(keys)) {
	    var position = _constants.POSITION_PROP_DEFAULT,
	        size = _constants.SIZE_PROP_DEFAULT;
	
	    if ((0, _utils.isObject)(options)) {
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
	
	  if ((0, _utils.isArray)(keys)) {
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
	
	  if ((0, _utils.isObject)(keys)) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isUndefined = exports.isString = exports.isObject = exports.isArray = exports.haveValuesChanged = exports.getValues = exports.getValidKeys = exports.getNaturalDimensionValue = exports.forEach = exports.createObjectFromKeys = exports.arraySubset = exports.arrayContains = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // constants
	
	
	var _constants = __webpack_require__(3);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var NATURAL_REGEXP = /natural/;
	
	/**
	 * get the toString value for the object
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	var toString = function toString(object) {
	  return Object.prototype.toString.call(object);
	};
	
	/**
	 * loop over array, executing fn
	 *
	 * @param {array<any>} array
	 * @param {function} fn
	 */
	var forEach = function forEach(array, fn) {
	  var length = array.length;
	
	  var index = -1;
	
	  while (++index < length) {
	    fn(array[index], index, array);
	  }
	};
	
	/**
	 * determine if object is an array
	 *
	 * @param {any} object
	 * @returns {boolean}
	 */
	var isArray = function isArray(object) {
	  return toString(object) === '[object Array]';
	};
	
	/**
	 * determine if object is an object
	 *
	 * @param {any} object
	 * @returns {boolean}
	 */
	var isObject = function isObject(object) {
	  return toString(object) === '[object Object]' && !!object;
	};
	
	/**
	 * determine if object is a string
	 *
	 * @param {any} object
	 * @returns {boolean}
	 */
	var isString = function isString(object) {
	  return toString(object) === '[object String]';
	};
	
	/**
	 * determine if object is undefined
	 *
	 * @param {any} object
	 * @returns {boolean}
	 */
	var isUndefined = function isUndefined(object) {
	  return object === void 0;
	};
	
	/**
	 * determine if array contains item at one of the indices
	 *
	 * @param {array<any>} array
	 * @param {any} item
	 * @returns {boolean}
	 */
	var arrayContains = function arrayContains(array, item) {
	  return isArray(array) && !!~array.indexOf(item);
	};
	
	/**
	 * get subset of array1 based on items existing in array2
	 *
	 * @param {array<*>} array1
	 * @param {array<*>} array2
	 * @returns {array<T>}
	 */
	var arraySubset = function arraySubset(array1, array2) {
	  return array1.filter(function (item) {
	    return array2.includes(item);
	  });
	};
	
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
	  if (isUndefined(source[key])) {
	    return source[key.replace(NATURAL_REGEXP, 'scroll')];
	  }
	
	  return source[key];
	};
	
	/**
	 * create an object based on the keys passed and their value
	 * in the source object
	 *
	 * @param {array<string>} keys
	 * @param {function} keys.reduce
	 * @param {object|ClientRect} source
	 * @param {boolean} shouldAlterNaturalKeys=true
	 * @returns {object}
	 */
	var createObjectFromKeys = function createObjectFromKeys(keys, source) {
	  var shouldAlterNaturalKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	  return keys.reduce(function (target, key) {
	    return _extends({}, target, _defineProperty({}, key, shouldAlterNaturalKeys ? getNaturalDimensionValue(source, key) : source[key]));
	  }, {});
	};
	
	/**
	 * based on their existence in keysToTestAgainst, determine which of the keys
	 * passed are considered valid
	 *
	 * @param {array<string>} keys
	 * @param {array<string>} keysToTestAgainst
	 * @returns {array<string>}
	 */
	var getValidKeys = function getValidKeys(keys, keysToTestAgainst) {
	  var validKeys = [];
	
	  forEach(keys, function (key) {
	    if (arrayContains(keysToTestAgainst, key)) {
	      validKeys.push(key);
	    }
	  });
	
	  return validKeys;
	};
	
	/**
	 * get the position and size, and booleans to identify they're
	 * intended existence in state
	 *
	 * @param {array<string>} keys
	 * @param {object} currentState
	 * @returns {{hasPosition: boolean, hasSize: boolean, position: object, size: object}}
	 */
	var getValuesProperties = function getValuesProperties(keys, currentState) {
	  if (isArray(keys)) {
	    var _ret = function () {
	      var position = {},
	          size = {},
	          hasPosition = false,
	          hasSize = false;
	
	      forEach(keys, function (key) {
	        if (arrayContains(_constants.ALL_POSITION_KEYS, key)) {
	          position[key] = currentState[key];
	          hasPosition = true;
	        } else if (arrayContains(_constants.ALL_SIZE_KEYS, key)) {
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
	
	/**
	 * based on the keys passed, create an object with either position
	 * or size or both properties that are objects containing the respective
	 * values for the associated keys
	 *
	 * @param {array<string>} keys
	 * @param {object} currentState
	 * @param {string} positionProp
	 * @param {string} sizeProp
	 * @returns {object}
	 */
	var getValues = function getValues(keys, currentState, _ref) {
	  var positionProp = _ref.positionProp;
	  var sizeProp = _ref.sizeProp;
	
	  var _getValuesProperties = getValuesProperties(keys, currentState);
	
	  var hasPosition = _getValuesProperties.hasPosition;
	  var hasSize = _getValuesProperties.hasSize;
	  var position = _getValuesProperties.position;
	  var size = _getValuesProperties.size;
	
	
	  var values = {};
	
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
	 * @param {array<string>} keys
	 * @param {object} values
	 * @param {object} currentState
	 * @returns {boolean}
	 */
	var haveValuesChanged = function haveValuesChanged(keys, values, currentState) {
	  var index = -1,
	      key = void 0;
	
	  while (++index < keys.length) {
	    key = keys[index];
	
	    if (values[key] !== currentState[key]) {
	      return true;
	    }
	  }
	
	  return false;
	};
	
	exports.arrayContains = arrayContains;
	exports.arraySubset = arraySubset;
	exports.createObjectFromKeys = createObjectFromKeys;
	exports.forEach = forEach;
	exports.getNaturalDimensionValue = getNaturalDimensionValue;
	exports.getValidKeys = getValidKeys;
	exports.getValues = getValues;
	exports.haveValuesChanged = haveValuesChanged;
	exports.isArray = isArray;
	exports.isObject = isObject;
	exports.isString = isString;
	exports.isUndefined = isUndefined;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var POSITION_PROP_DEFAULT = 'position';
	var RENDER_ON_RESIZE_DEFAULT = true;
	var SIZE_PROP_DEFAULT = 'size';
	
	var BOUNDING_CLIENT_RECT_SIZE_KEYS = ['height', 'width'];
	
	var BOUNDING_CLIENT_RECT_POSITION_KEYS = ['bottom', 'left', 'right', 'top'];
	
	var ALL_BOUNDING_CLIENT_RECT_KEYS = [].concat(BOUNDING_CLIENT_RECT_POSITION_KEYS, BOUNDING_CLIENT_RECT_SIZE_KEYS);
	
	var DOM_ELEMENT_POSITION_KEYS = ['clientLeft', 'clientTop', 'offsetLeft', 'offsetTop', 'scrollLeft', 'scrollTop'];
	
	var DOM_ELEMENT_SIZE_KEYS = ['clientHeight', 'clientWidth', 'naturalHeight', 'naturalWidth', 'offsetHeight', 'offsetWidth', 'scrollHeight', 'scrollWidth'];
	
	var ALL_DOM_ELEMENT_KEYS = [].concat(DOM_ELEMENT_POSITION_KEYS, DOM_ELEMENT_SIZE_KEYS);
	
	var ALL_POSITION_KEYS = [].concat(DOM_ELEMENT_POSITION_KEYS, BOUNDING_CLIENT_RECT_POSITION_KEYS);
	
	var ALL_SIZE_KEYS = [].concat(DOM_ELEMENT_SIZE_KEYS, BOUNDING_CLIENT_RECT_SIZE_KEYS);
	
	var ALL_KEYS = [].concat(_toConsumableArray(ALL_POSITION_KEYS), _toConsumableArray(ALL_SIZE_KEYS));
	
	var initialState = {},
	    index = ALL_KEYS.length,
	    key = void 0;
	
	while (index--) {
	  key = ALL_KEYS[index];
	
	  initialState[key] = 0;
	}
	
	exports.ALL_BOUNDING_CLIENT_RECT_KEYS = ALL_BOUNDING_CLIENT_RECT_KEYS;
	exports.ALL_DOM_ELEMENT_KEYS = ALL_DOM_ELEMENT_KEYS;
	exports.ALL_KEYS = ALL_KEYS;
	exports.ALL_POSITION_KEYS = ALL_POSITION_KEYS;
	exports.ALL_SIZE_KEYS = ALL_SIZE_KEYS;
	exports.BOUNDING_CLIENT_RECT_POSITION_KEYS = BOUNDING_CLIENT_RECT_POSITION_KEYS;
	exports.BOUNDING_CLIENT_RECT_SIZE_KEYS = BOUNDING_CLIENT_RECT_SIZE_KEYS;
	exports.DOM_ELEMENT_POSITION_KEYS = DOM_ELEMENT_POSITION_KEYS;
	exports.DOM_ELEMENT_SIZE_KEYS = DOM_ELEMENT_SIZE_KEYS;
	exports.initialState = initialState;
	exports.POSITION_PROP_DEFAULT = POSITION_PROP_DEFAULT;
	exports.RENDER_ON_RESIZE_DEFAULT = RENDER_ON_RESIZE_DEFAULT;
	exports.SIZE_PROP_DEFAULT = SIZE_PROP_DEFAULT;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // external dependencies
	
	
	// utils
	
	
	// constants
	
	
	var _elementResizeEvent = __webpack_require__(5);
	
	var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _utils = __webpack_require__(2);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var raf = void 0;
	
	/**
	 * wait to assign the raf until mount, so it has access to the
	 * window object
	 */
	var setRaf = function setRaf() {
	  raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	};
	
	/**
	 * based on desiredKeys, build the initialState object
	 *
	 * @param {array<string>} allKeys
	 * @param {array<string>} desiredKeys
	 * @returns {array<T>}
	 */
	var reduceStateToMatchingKeys = function reduceStateToMatchingKeys(allKeys, desiredKeys) {
	  return allKeys.reduce(function (accumulatedInitialState, key) {
	    if (desiredKeys.includes(key)) {
	      return _extends({}, accumulatedInitialState, _defineProperty({}, key, 0));
	    }
	
	    return accumulatedInitialState;
	  }, {});
	};
	
	/**
	 * create the HOC that injects the position and size props
	 * into the child (assuming they have keys that are valid
	 * for one or both of those)
	 *
	 * @param {Component} OriginalComponent
	 * @param {array<string>} keys
	 * @param {object} options={}
	 * @returns {RemeasureComponent}
	 */
	var getHigherOrderComponent = function getHigherOrderComponent(OriginalComponent, keys) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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
	
	  var boundingClientRectKeys = (0, _utils.arraySubset)(_constants.ALL_BOUNDING_CLIENT_RECT_KEYS, keys);
	  var domElementKeys = (0, _utils.arraySubset)(_constants.ALL_DOM_ELEMENT_KEYS, keys);
	  var initialState = reduceStateToMatchingKeys(_constants.ALL_KEYS, keys);
	
	  if (!raf) {
	    setRaf();
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
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RemeasureComponent.__proto__ || Object.getPrototypeOf(RemeasureComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = initialState, _this.domElement = null, _this.setDomElement = function () {
	        var domElement = (0, _reactDom.findDOMNode)(_this);
	
	        if (domElement) {
	          _this.domElement = domElement;
	          _this.setOnResize();
	        }
	      }, _this.setOnResize = function () {
	        if (renderOnResize) {
	          (0, _elementResizeEvent2.default)(_this.domElement, _this.setValues);
	        }
	      }, _this.setValues = function () {
	        if (_this.domElement) {
	          raf(function () {
	            var domElement = _this.domElement;
	            var boundingClientRect = domElement.getBoundingClientRect();
	
	            var values = _extends({}, (0, _utils.createObjectFromKeys)(boundingClientRectKeys, boundingClientRect), (0, _utils.createObjectFromKeys)(domElementKeys, domElement));
	
	            if ((0, _utils.haveValuesChanged)(keys, values, _this.state)) {
	              _this.setState(values);
	            }
	          });
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
	       * based on the current DOM element, get the values
	       * and determine if the state should be updated (only
	       * if things have changed)
	       */
	
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(OriginalComponent, _extends({}, this.props, (0, _utils.getValues)(keys, this.state, propKeyNames)));
	      }
	    }]);
	
	    return RemeasureComponent;
	  }(_react.Component);
	
	  return RemeasureComponent;
	};
	
	exports.default = getHigherOrderComponent;
	module.exports = exports['default'];

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=remeasure.js.map