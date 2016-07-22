var Remeasure =
/******/ (function(modules) { // webpackBootstrap
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _elementResizeEvent = __webpack_require__(2);
	
	var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _utils = __webpack_require__(5);
	
	var _constants = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // external dependencies
	
	
	// utils
	
	
	// constants
	
	
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
	 * create the HOC that injects the position and size props
	 * into the child (assuming they have keys that are valid
	 * for one or both of those)
	 *
	 * @param {Component} OriginalComponent
	 * @param {array<string>} keys
	 * @returns {RemeasureComponent}
	 */
	var getHigherOrderComponent = function getHigherOrderComponent(OriginalComponent, keys) {
	  var RemeasureComponent = function (_Component) {
	    _inherits(RemeasureComponent, _Component);
	
	    function RemeasureComponent(props) {
	      _classCallCheck(this, RemeasureComponent);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RemeasureComponent).call(this, props));
	
	      _this.state = _extends({}, _constants.initialState);
	
	      _this.haveValuesChanged = function (values, keys) {
	        var length = _constants.allKeys.length;
	
	        var index = -1,
	            key = void 0;
	
	        while (++index < length) {
	          key = _constants.allKeys[index];
	
	          if ((0, _utils.arrayContains)(keys, key) && values[key] !== _this.state[key]) {
	            return true;
	          }
	        }
	
	        return false;
	      };
	
	      _this.setValues = function (domElement) {
	        raf(function () {
	          var boundingClientRect = domElement.getBoundingClientRect();
	
	          var values = _extends({}, (0, _utils.createObjectFromKeys)(_constants.allDomElementKeys, domElement), (0, _utils.createObjectFromKeys)(_constants.allBoundingRectClientKeys, boundingClientRect));
	
	          if (_this.haveValuesChanged(values, keys)) {
	            _this.setState(values);
	          }
	        });
	      };
	
	      return _this;
	    }
	
	    _createClass(RemeasureComponent, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        var _this2 = this;
	
	        var domElement = (0, _reactDom.findDOMNode)(this);
	
	        if (!raf) {
	          setRaf();
	        }
	
	        this.setValues(domElement);
	
	        (0, _elementResizeEvent2.default)(domElement, function () {
	          _this2.setValues(domElement);
	        });
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        this.setValues((0, _reactDom.findDOMNode)(this));
	      }
	
	      /**
	       * iterate through keys and determine if the values have
	       * changed compared to what is stored in state
	       *
	       * @param {object} values
	       * @param {array<string>} keys
	       * @returns {boolean}
	       */
	
	
	      /**
	       * based on the current DOM element, get the values
	       * and determine if the state should be updated (only
	       * if things have changed)
	       *
	       * @param {HTMLElement} domElement
	       */
	
	    }, {
	      key: 'render',
	      value: function render() {
	        var values = (0, _utils.getValues)(keys, this.state);
	
	        return _react2.default.createElement(OriginalComponent, _extends({}, this.props, values));
	      }
	    }]);
	
	    return RemeasureComponent;
	  }(_react.Component);
	
	  return RemeasureComponent;
	};
	
	/**
	 * create higher-order component that injects size and position properties
	 * into OriginalComponent as an object under the prop name size and position
	 *
	 * @param {Component|array<string>} keys
	 * @returns {RemeasureComponent}
	 */
	var measure = function measure(keys) {
	  if ((0, _utils.isString)(keys)) {
	    switch (keys) {
	      case 'size':
	        keys = _constants.allSizeKeys;
	        break;
	
	      case 'position':
	        keys = _constants.allPositionKeys;
	        break;
	
	      default:
	        keys = [keys];
	        break;
	    }
	  }
	
	  if ((0, _utils.isArray)(keys)) {
	    var _ret = function () {
	      var validKeys = (0, _utils.getValidKeys)(keys, _constants.allKeys);
	
	      return {
	        v: function v(OriginalComponent) {
	          return getHigherOrderComponent(OriginalComponent, validKeys);
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	
	  return getHigherOrderComponent(keys, _constants.allKeys);
	};
	
	exports.default = measure;
	module.exports = exports['default'];

/***/ },
/* 2 */
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
	      trigger.__resizeListeners__.forEach(function (fn) {
	        fn.call(trigger, e)
	      })
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
	      obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;')
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
	
	module.exports = (typeof window === 'undefined') ? exports : exports.bind(window)


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isUndefined = exports.isString = exports.isArray = exports.getValues = exports.getValidKeys = exports.getNaturalDimensionValue = exports.forEach = exports.createObjectFromKeys = exports.arrayContains = undefined;
	
	var _constants = __webpack_require__(6);
	
	var NATURAL_REGEXP = /natural/;
	
	/**
	 * get the toString value for the object
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	// constants
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
	 * @param {object|ClientRect} source
	 * @returns {object}
	 */
	var createObjectFromKeys = function createObjectFromKeys(keys, source) {
	  var target = {};
	
	  forEach(keys, function (key) {
	    target[key] = NATURAL_REGEXP.test(key) ? getNaturalDimensionValue(source, key) : source[key];
	  });
	
	  return target;
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
	 * based on the keys passed, create an object with either position
	 * or size or both properties that are objects containing the respective
	 * values for the associated keys
	 *
	 * @param {array<string>} keys
	 * @param {object} currentState
	 * @returns {object}
	 */
	var getValues = function getValues(keys, currentState) {
	  var hasSize = false,
	      hasPosition = false,
	      size = void 0,
	      position = void 0;
	
	  if (isArray(keys)) {
	    forEach(keys, function (key) {
	      if (arrayContains(_constants.allPositionKeys, key)) {
	        if (!position) {
	          position = {};
	        }
	
	        position[key] = currentState[key];
	        hasPosition = true;
	      }
	
	      if (arrayContains(_constants.allSizeKeys, key)) {
	        if (!size) {
	          size = {};
	        }
	
	        size[key] = currentState[key];
	        hasSize = true;
	      }
	    });
	  } else {
	    size = {};
	    position = {};
	    hasSize = true;
	    hasPosition = true;
	
	    forEach(_constants.allPositionKeys, function (key) {
	      position[key] = currentState[key];
	    });
	
	    forEach(_constants.allSizeKeys, function (key) {
	      size[key] = currentState[key];
	    });
	  }
	
	  var values = {};
	
	  if (hasSize) {
	    values.size = size;
	  }
	
	  if (hasPosition) {
	    values.position = position;
	  }
	
	  return values;
	};
	
	exports.arrayContains = arrayContains;
	exports.createObjectFromKeys = createObjectFromKeys;
	exports.forEach = forEach;
	exports.getNaturalDimensionValue = getNaturalDimensionValue;
	exports.getValidKeys = getValidKeys;
	exports.getValues = getValues;
	exports.isArray = isArray;
	exports.isString = isString;
	exports.isUndefined = isUndefined;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	
	exports.allBoundingRectClientKeys = ALL_BOUNDING_CLIENT_RECT_KEYS;
	exports.allDomElementKeys = ALL_DOM_ELEMENT_KEYS;
	exports.allKeys = ALL_KEYS;
	exports.allPositionKeys = ALL_POSITION_KEYS;
	exports.allSizeKeys = ALL_SIZE_KEYS;
	exports.boundingClientRectPositionKeys = BOUNDING_CLIENT_RECT_POSITION_KEYS;
	exports.boundingClientRectSizeKeys = BOUNDING_CLIENT_RECT_SIZE_KEYS;
	exports.domElementPositionKeys = DOM_ELEMENT_POSITION_KEYS;
	exports.domElementSizeKeys = DOM_ELEMENT_SIZE_KEYS;
	exports.initialState = initialState;

/***/ }
/******/ ]);
//# sourceMappingURL=remeasure.js.map