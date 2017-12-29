// external dependencies
import PropTypes from 'prop-types';

/**
 * @constant {Object} DEFAULT_OPTIONS
 */
export const DEFAULT_OPTIONS = {
  debounce: 0,
  flatten: false,
  inheritedMethods: [],
  positionProp: 'position',
  renderOnResize: true,
  sizeProp: 'size'
};

/**
 * @constant {Array<string>} BOUNDING_CLIENT_RECT_SIZE_KEYS
 */
export const BOUNDING_CLIENT_RECT_SIZE_KEYS = ['height', 'width'];

/**
 * @constant {Array<string>} BOUNDING_CLIENT_RECT_POSITION_KEYS
 */
export const BOUNDING_CLIENT_RECT_POSITION_KEYS = ['bottom', 'left', 'right', 'top'];

/**
 * @constant {Array<string>} ALL_BOUNDING_CLIENT_RECT_KEYS
 */
export const ALL_BOUNDING_CLIENT_RECT_KEYS = [...BOUNDING_CLIENT_RECT_POSITION_KEYS, ...BOUNDING_CLIENT_RECT_SIZE_KEYS];

/**
 * @constant {Array<string>} DOM_ELEMENT_POSITION_KEYS
 */
export const DOM_ELEMENT_POSITION_KEYS = [
  'clientLeft',
  'clientTop',
  'offsetLeft',
  'offsetTop',
  'scrollLeft',
  'scrollTop'
];

/**
 * @constant {Array<string>} DOM_ELEMENT_SIZE_KEYS
 */
export const DOM_ELEMENT_SIZE_KEYS = [
  'clientHeight',
  'clientWidth',
  'naturalHeight',
  'naturalWidth',
  'offsetHeight',
  'offsetWidth',
  'scrollHeight',
  'scrollWidth'
];

/**
 * @constant {RegExp} FUNCTION_NAME_REGEXP
 */
export const FUNCTION_NAME_REGEXP = /^\s*function\s*([^\(]*)/i;

/**
 * @constant {RegExp} NATURAL_REGEXP
 */
export const NATURAL_REGEXP = /natural/;

/**
 * @constant {Array<string>} VOID_ELEMENT_TAG_NAMES
 */
export const VOID_ELEMENT_TAG_NAMES = [
  'AREA',
  'BASE',
  'BR',
  'COL',
  'EMBED',
  'HR',
  'IMG',
  'INPUT',
  'LINK',
  'MENUITEM',
  'META',
  'PARAM',
  'SOURCE',
  'TRACK',
  'WBR'
];

/**
 * @constant {Array<string>} ALL_DOM_ELEMENT_KEYS
 */
export const ALL_DOM_ELEMENT_KEYS = [...DOM_ELEMENT_POSITION_KEYS, ...DOM_ELEMENT_SIZE_KEYS];

/**
 * @constant {Array<string>} ALL_POSITION_KEYS
 */
export const ALL_POSITION_KEYS = [...DOM_ELEMENT_POSITION_KEYS, ...BOUNDING_CLIENT_RECT_POSITION_KEYS];

/**
 * @constant {Array<string>} ALL_SIZE_KEYS
 */
export const ALL_SIZE_KEYS = [...DOM_ELEMENT_SIZE_KEYS, ...BOUNDING_CLIENT_RECT_SIZE_KEYS];

/**
 * @constant {Array<string>} ALL_KEYS
 */
export const ALL_KEYS = [...ALL_POSITION_KEYS, ...ALL_SIZE_KEYS];

/**
 * @constant {string} CLIENT_RECT_TYPE
 */
export const CLIENT_RECT_TYPE = 'clientRect';

/**
 * @constant {string} ELEMENT_TYPE
 */
export const ELEMENT_TYPE = 'element';

/**
 * @constant {Object} OPTIONS_SHAPE
 */
export const OPTIONS_SHAPE = {
  debounce: PropTypes.number,
  flatten: PropTypes.bool,
  inheritedMethods: PropTypes.arrayOf(PropTypes.string),
  isPure: PropTypes.bool,
  positionProp: PropTypes.string,
  renderOnResize: PropTypes.bool,
  sizeProp: PropTypes.string
};
