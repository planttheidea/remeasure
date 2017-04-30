(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("Remeasure", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Remeasure"] = factory(require("react"), require("react-dom"));
	else
		root["Remeasure"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ELEMENT_TYPE = exports.CLIENT_RECT_TYPE = exports.ALL_KEYS = exports.ALL_SIZE_KEYS = exports.ALL_POSITION_KEYS = exports.ALL_DOM_ELEMENT_KEYS = exports.VOID_ELEMENT_TAG_NAMES = exports.NATURAL_REGEXP = exports.DOM_ELEMENT_SIZE_KEYS = exports.DOM_ELEMENT_POSITION_KEYS = exports.ALL_BOUNDING_CLIENT_RECT_KEYS = exports.BOUNDING_CLIENT_RECT_POSITION_KEYS = exports.BOUNDING_CLIENT_RECT_SIZE_KEYS = exports.SIZE_PROP_DEFAULT = exports.RENDER_ON_RESIZE_DEFAULT = exports.POSITION_PROP_DEFAULT = exports.INHERITED_METHODS_DEFAULT = exports.FLATTEN_DEFAULT = exports.ELEMENT_RESIZE_DETECTOR = exports.DEBOUNCE_VALUE_DEFAULT = undefined;

var _elementResizeDetector = __webpack_require__(16);

var _elementResizeDetector2 = _interopRequireDefault(_elementResizeDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBOUNCE_VALUE_DEFAULT = exports.DEBOUNCE_VALUE_DEFAULT = 0;
var ELEMENT_RESIZE_DETECTOR = exports.ELEMENT_RESIZE_DETECTOR = (0, _elementResizeDetector2.default)({
  strategy: 'scroll'
});
var FLATTEN_DEFAULT = exports.FLATTEN_DEFAULT = false;
var INHERITED_METHODS_DEFAULT = exports.INHERITED_METHODS_DEFAULT = [];
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setInheritedMethods = exports.getValidKeys = exports.getKeysWithSourceAndType = exports.getKeysSubsetWithType = exports.getKeysFromStringKey = exports.getKeyType = exports.isSizeKey = exports.isPositionKey = exports.getPropKeyNames = exports.getElementValues = exports.getNaturalDimensionValue = exports.getScopedValues = exports.createFlattenConvenienceFunction = exports.createIsKeyType = exports.setElement = exports.removeElementResize = exports.setElementResize = exports.isElementVoidTag = exports.updateValuesViaRaf = exports.createUpdateValuesViaDebounce = exports.clearValues = exports.getShouldClear = exports.reduceMeasurementsToMatchingKeys = exports.setValuesIfChanged = exports.haveValuesChanged = exports.getComponentName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // external dependencies


// constants


var _debounce = __webpack_require__(28);

var _debounce2 = _interopRequireDefault(_debounce);

var _filter = __webpack_require__(29);

var _filter2 = _interopRequireDefault(_filter);

var _includes = __webpack_require__(30);

var _includes2 = _interopRequireDefault(_includes);

var _isFunction = __webpack_require__(6);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNull = __webpack_require__(31);

var _isNull2 = _interopRequireDefault(_isNull);

var _isUndefined = __webpack_require__(34);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _reduce = __webpack_require__(36);

var _reduce2 = _interopRequireDefault(_reduce);

var _some = __webpack_require__(37);

var _some2 = _interopRequireDefault(_some);

var _raf = __webpack_require__(41);

var _raf2 = _interopRequireDefault(_raf);

var _constants = __webpack_require__(0);

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
  if (haveValuesChanged(keys, values, instance.measurements)) {
    instance.setMeasurements(values);
  }
};

/**
 * @private
 *
 * @function reduceMeasurementsToMatchingKeys
 *
 * @description
 * based on desiredKeys, build the initial measurements object
 *
 * @param {Array<string>} keys the keys requested from the decorator
 * @returns {Array<T>} the object of key: 0 default values
 */
var reduceMeasurementsToMatchingKeys = exports.reduceMeasurementsToMatchingKeys = function reduceMeasurementsToMatchingKeys(keys) {
  return (0, _reduce2.default)(keys, function (accumulatedInitialState, _ref2) {
    var key = _ref2.key;

    accumulatedInitialState[key] = 0;

    return accumulatedInitialState;
  }, {});
};

/**
 * @function getShouldClear
 *
 * @description
 * get whether the values should be cleared or not based on values in state
 *
 * @param {Object} measurements the current measurement values
 * @param {Array<Object>} selectedKeys the keys to iterate over
 * @returns {boolean} should the values be cleared or not
 */
var getShouldClear = exports.getShouldClear = function getShouldClear(measurements, selectedKeys) {
  return (0, _some2.default)(selectedKeys, function (_ref3) {
    var key = _ref3.key;

    return !!measurements[key];
  });
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
 * @param {Array<string>} selectedKeys keys to store in state
 */
var clearValues = exports.clearValues = function clearValues(instance, selectedKeys) {
  if (getShouldClear(instance.measurements, selectedKeys)) {
    instance.setMeasurements(reduceMeasurementsToMatchingKeys(selectedKeys));
  }
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
  return (0, _debounce2.default)(instance.updateValuesIfChanged, debounceValue);
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
  (0, _raf2.default)(instance.updateValuesIfChanged);
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

    _constants.ELEMENT_RESIZE_DETECTOR.listenTo(element, resizeFn);

    instance.resizeListener = resizeFn;
  }
};

/**
 * @function removeElementResize
 *
 * @description
 * remove listeners from the given element
 *
 * @param {MeasuredComponent} instance component instance
 * @param {HTMLElement} element element to remove listeners from
 */
var removeElementResize = exports.removeElementResize = function removeElementResize(instance, element) {
  instance.resizeListener = null;

  if (element) {
    _constants.ELEMENT_RESIZE_DETECTOR.uninstall(element);
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
  var currentElement = instance.element;

  instance.element = element;

  if (instance.element) {
    if (renderOnResize && !instance.resizeListener) {
      setElementResize(instance, debounceValue);
    }
  } else {
    removeElementResize(instance, currentElement);
  }
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
 * @function getScopedValues
 *
 * @description
 * based on the keys passed, create an object with either position
 * or size or both properties that are objects containing the respective
 * values for the associated keys
 *
 * @param {Object} values values to reduce by type
 * @param {Array<string>} keys the keys to assign to scopedValues
 * @param {boolean} flatten should the object be flat or not
 * @returns {Object} reduced scoped values
 */
var getScopedValues = exports.getScopedValues = function getScopedValues(values, keys, _ref4) {
  var flatten = _ref4.flatten;

  return flatten ? values : (0, _reduce2.default)(keys, function (scopedValues, _ref5) {
    var key = _ref5.key,
        type = _ref5.type;

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

  return (0, _reduce2.default)(keys, function (values, _ref6) {
    var key = _ref6.key,
        source = _ref6.source;

    values[key] = source === _constants.CLIENT_RECT_TYPE ? boundingClientRect[key] : getNaturalDimensionValue(element, key);

    return values;
  }, {});
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
var getPropKeyNames = exports.getPropKeyNames = function getPropKeyNames(_ref7) {
  var _ref7$positionProp = _ref7.positionProp,
      positionProp = _ref7$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _ref7$positionProp,
      _ref7$sizeProp = _ref7.sizeProp,
      sizeProp = _ref7$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _ref7$sizeProp;

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
var getKeyType = exports.getKeyType = function getKeyType(key, _ref8) {
  var positionProp = _ref8.positionProp,
      sizeProp = _ref8.sizeProp;

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
var getKeysFromStringKey = exports.getKeysFromStringKey = function getKeysFromStringKey(key, _ref9) {
  var _ref9$positionProp = _ref9.positionProp,
      positionProp = _ref9$positionProp === undefined ? _constants.POSITION_PROP_DEFAULT : _ref9$positionProp,
      _ref9$sizeProp = _ref9.sizeProp,
      sizeProp = _ref9$sizeProp === undefined ? _constants.SIZE_PROP_DEFAULT : _ref9$sizeProp;

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

/**
 * @private
 *
 * @description
 * set methods on this instance that will call the inherited instance method
 *
 * @param {ReactComponent} instance the instance to assign to
 * @param {Array<string>} inheritedMethods the names of inherited methods
 */
var setInheritedMethods = exports.setInheritedMethods = function setInheritedMethods(instance, inheritedMethods) {
  inheritedMethods.forEach(function (method) {
    if (instance[method]) {
      throw new ReferenceError('You cannot have the method ' + method + ' inherited, as it is already taken by the MeasuredComponent HOC.');
    }

    instance[method] = function () {
      var _instance$originalCom;

      return (_instance$originalCom = instance.originalComponent)[method].apply(_instance$originalCom, arguments);
    };
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObject = __webpack_require__(7);

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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

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


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // external dependencies


// constants


// component


// utils


var _isArray = __webpack_require__(5);

var _isArray2 = _interopRequireDefault(_isArray);

var _isFunction = __webpack_require__(6);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isPlainObject = __webpack_require__(32);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isString = __webpack_require__(33);

var _isString2 = _interopRequireDefault(_isString);

var _constants = __webpack_require__(0);

var _getMeasuredComponent = __webpack_require__(11);

var _getMeasuredComponent2 = _interopRequireDefault(_getMeasuredComponent);

var _utils = __webpack_require__(2);

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createUpdateValuesIfChanged = exports.createSetOriginalRef = exports.createSetMeasurements = exports.createComponentWillUnmount = exports.createComponentDidUpdate = exports.createComponentDidMount = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // external dependencies


// constants


// utils


/**
 * @private
 *
 * @function createComponentDidMount
 *
 * @description
 * create the componentDidMount method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<string>} selectedKeys keys to store in state
 * @param {Object} [options={}] options passed to the instance
 * @param {number} [options.debounceValue=DEBOUNCE_VALUE_DEFAULT] value to use for debounce of updates
 * @param {boolean} [options.renderOnResize=RENDER_ON_RESIZE_DEFAULT] should the component rerender on resize
 * @returns {function(): void} componentDidUpdate method
 */
var createComponentDidMount = exports.createComponentDidMount = function createComponentDidMount(instance, selectedKeys) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$debounce = options.debounce,
      debounceValue = _options$debounce === undefined ? _constants.DEBOUNCE_VALUE_DEFAULT : _options$debounce,
      _options$renderOnResi = options.renderOnResize,
      renderOnResize = _options$renderOnResi === undefined ? _constants.RENDER_ON_RESIZE_DEFAULT : _options$renderOnResi;


  return function () {
    var element = (0, _reactDom.findDOMNode)(instance);

    instance._isMounted = true;

    (0, _utils.setElement)(instance, element, debounceValue, renderOnResize);

    if (element) {
      (0, _utils.updateValuesViaRaf)(instance);
    }
  };
};

/**
 * @private
 *
 * @function createComponentDidUpdate
 *
 * @description
 * create the componentDidUpdate method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<string>} selectedKeys keys to store in state
 * @param {Object} [options={}] options passed to the instance
 * @param {number} [options.debounceValue=DEBOUNCE_VALUE_DEFAULT] value to use for debounce of updates
 * @param {boolean} [options.renderOnResize=RENDER_ON_RESIZE_DEFAULT] should the component rerender on resize
 * @returns {function(): void} componentDidUpdate method
 */
var createComponentDidUpdate = exports.createComponentDidUpdate = function createComponentDidUpdate(instance, selectedKeys) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$debounce2 = options.debounce,
      debounceValue = _options$debounce2 === undefined ? _constants.DEBOUNCE_VALUE_DEFAULT : _options$debounce2,
      _options$renderOnResi2 = options.renderOnResize,
      renderOnResize = _options$renderOnResi2 === undefined ? _constants.RENDER_ON_RESIZE_DEFAULT : _options$renderOnResi2;


  return function () {
    var element = (0, _reactDom.findDOMNode)(instance);

    if (element !== instance.element) {
      (0, _utils.setElement)(instance, element, debounceValue, renderOnResize);
    }

    if (element) {
      (0, _utils.updateValuesViaRaf)(instance);
    } else {
      (0, _utils.clearValues)(instance, selectedKeys);
    }
  };
};

/**
 * @private
 *
 * @function createComponentWillUnmount
 *
 * @description
 * create the componentWillUmount method for the given instance
 *
 * @param {MeasuredComponent} instance component instance
 * @param {Array<Object>} selectedKeys the keys to assign to state
 * @returns {function(): void} function to reset the instance values to defaults
 */
var createComponentWillUnmount = exports.createComponentWillUnmount = function createComponentWillUnmount(instance, selectedKeys) {
  return function () {
    instance._isMounted = false;

    instance.setMeasurements((0, _utils.reduceMeasurementsToMatchingKeys)(selectedKeys));

    if (instance.element) {
      (0, _utils.removeElementResize)(instance, instance.element);

      instance.element = null;
    }
  };
};

/**
 * @function createSetMeasurements
 *
 * @description
 * create the method that will assign the measurements synchronously to the instance
 * and then call forceUpdate (done because setState is async)
 *
 * @param {ReactComponent} instance the instance to assign to
 * @returns {function(Object): void} the method that will assign the measurements to the instance
 */
var createSetMeasurements = exports.createSetMeasurements = function createSetMeasurements(instance) {
  /**
   * @function setMeasurements
   *
   * @description
   * set the measurements synchronously to the instance value and then call forceUpdate if mounted
   *
   * @param {Object} measurements the measurements to assign to the instance
   */
  return function (measurements) {
    instance.measurements = measurements;

    if (instance._isMounted) {
      instance.forceUpdate();
    }
  };
};

/**
 * @function createSetOriginalRef
 *
 * @description
 * create the method that will assign the original component instance to an instance value of the HOC
 *
 * @param {ReactComponent} instance the instance to assign to
 * @returns {function(Object): void} the method that will assign the original component
 */
var createSetOriginalRef = exports.createSetOriginalRef = function createSetOriginalRef(instance) {
  /**
   * @function setOriginalRef
   *
   * @description
   * set the reference to the original component instance to the instance of the HOC
   *
   * @param {HTMLElement|ReactComponent} component the component instance to assign
   */
  return function (component) {
    instance.originalComponent = component;
  };
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
 * @param {Array<string>} selectedKeys keys to store in state
 * @returns {function(): void} function to update the instance state values if they have changed
 */
var createUpdateValuesIfChanged = exports.createUpdateValuesIfChanged = function createUpdateValuesIfChanged(instance, selectedKeys) {
  return function () {
    var element = instance.element;

    if (element) {
      var values = (0, _utils.getElementValues)(element, selectedKeys);

      (0, _utils.setValuesIfChanged)(instance, selectedKeys, values);
    }
  };
};

/**
 * @function getMeasuredComponent
 *
 * @description
 * get the decorator to create a higher-order component that will measure the DOM node and pass the requested
 * size / position attributes as props to the PassedComponent
 *
 * @param {Array<string>} keys the keys to get the size / position of
 * @param {Object} options the additional options passed to the decorator
 * @returns {function} decorator to create the higher-order component
 */
var getMeasuredComponent = function getMeasuredComponent(keys, options) {
  var selectedKeys = (0, _utils.getKeysWithSourceAndType)(keys, options);
  var _options$inheritedMet = options.inheritedMethods,
      inheritedMethods = _options$inheritedMet === undefined ? _constants.INHERITED_METHODS_DEFAULT : _options$inheritedMet;


  return function (PassedComponent) {
    var displayName = (0, _utils.getComponentName)(PassedComponent);

    var MeasuredComponent = function (_Component) {
      _inherits(MeasuredComponent, _Component);

      function MeasuredComponent(props) {
        _classCallCheck(this, MeasuredComponent);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.componentDidMount = createComponentDidMount(_this, selectedKeys, options);
        _this.componentDidUpdate = createComponentDidUpdate(_this, selectedKeys, options);
        _this.componentWillUnmount = createComponentWillUnmount(_this, selectedKeys);
        _this.setOriginalRef = createSetOriginalRef(_this);
        _this._isMounted = false;
        _this.element = null;
        _this.originalComponent = null;
        _this.hasResize = null;
        _this.measurements = (0, _utils.reduceMeasurementsToMatchingKeys)(selectedKeys);
        _this.setMeasurements = createSetMeasurements(_this);
        _this.updateValuesIfChanged = createUpdateValuesIfChanged(_this, selectedKeys);


        if (inheritedMethods.length) {
          (0, _utils.setInheritedMethods)(_this, inheritedMethods);
        }
        return _this;
      }

      // lifecycle methods


      // instance variables


      // instance methods


      MeasuredComponent.prototype.render = function render() {
        return _react2.default.createElement(PassedComponent, _extends({
          ref: this.setOriginalRef
        }, this.props, (0, _utils.getScopedValues)(this.measurements, selectedKeys, options)));
      };

      return MeasuredComponent;
    }(_react.Component);

    MeasuredComponent.displayName = 'Measured(' + displayName + ')';


    return MeasuredComponent;
  };
};

exports.default = getMeasuredComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(13);

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(3);

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        if(!getObject(element)) {
            throw new Error("Element is not detectable by this strategy.");
        }

        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);
            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;";

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.position = "relative";

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style[property] = 0;
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            setTimeout(function checkForObjectDocument() {
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if(browserDetector.isIE(8)) {
            element.detachEvent("onresize", getState(element).object.proxy);
        } else {
            element.removeChild(getObject(element));
        }
        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(4).forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
    // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";
    injectScrollStyle(styleId, detectionContainerClass);

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = "position: absolute; width: " + width*2 + "px; height: " + height*2 + "px; visibility: hidden; margin: 0; padding: 0;";

        var container = document.createElement("div");
        container.style.cssText = "position: absolute; width: " + width + "px; height: " + height + "px; overflow: scroll; visibility: none; top: " + -width*3 + "px; left: " + -height*3 + "px; visibility: hidden; margin: 0; padding: 0;";

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                document.head.appendChild(element);
            };

            var styleElement = document.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!document.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { display: none; }\n\n";
            style += "." + containerAnimationActiveClass + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + containerAnimationClass + "; animation-name: " + containerAnimationClass + "; }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;";
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.position = "relative";

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return "left: " + left + "; top: " + top + "; right: " + right + "; bottom: " + bottom + ";";
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;";
            var containerStyle          = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth);
            var expandStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var shrinkStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var expandChildStyle        = "position: absolute; left: 0; top: 0;";
            var shrinkChildStyle        = "position: absolute; width: 200%; height: 200%;";

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.width     = expandWidth + "px";
                expandChild.style.height    = expandHeight + "px";
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify the if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                var width = element.offsetWidth;
                var height = element.offsetHeight;

                if (width !== element.lastWidth || height !== element.lastHeight) {
                    debug("Element size changed.");
                    updateDetectorElements(notifyListenersIfNeeded);
                } else {
                    debug("Element size has not changed (" + width + "x" + height + ").");
                }
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(4).forEach;
var elementUtilsMaker       = __webpack_require__(17);
var listenerHandlerMaker    = __webpack_require__(20);
var idGeneratorMaker        = __webpack_require__(18);
var idHandlerMaker          = __webpack_require__(19);
var reporterMaker           = __webpack_require__(21);
var browserDetector         = __webpack_require__(3);
var batchProcessorMaker     = __webpack_require__(12);
var stateHandler            = __webpack_require__(22);

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(14);
var scrollStrategyMaker     = __webpack_require__(15);

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

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


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(26);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

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


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(24);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    now = __webpack_require__(35),
    toNumber = __webpack_require__(38);

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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

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


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 31 */
/***/ (function(module, exports) {

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


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    getPrototype = __webpack_require__(25),
    isObjectLike = __webpack_require__(8);

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


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isArray = __webpack_require__(5),
    isObjectLike = __webpack_require__(8);

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


/***/ }),
/* 34 */
/***/ (function(module, exports) {

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


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(27);

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


/***/ }),
/* 36 */
/***/ (function(module, exports) {

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


/***/ }),
/* 37 */
/***/ (function(module, exports) {

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


/***/ }),
/* 38 */
/***/ (function(module, exports) {

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


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

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


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(39)
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
/******/ ]);
});
//# sourceMappingURL=remeasure.js.map