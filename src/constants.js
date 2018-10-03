// external dependencies
import React from 'react';

/**
 * @constant {boolean} IS_LEGACY_REACT
 */
export const IS_LEGACY_REACT = (() => {
  try {
    const MAJOR_MINOR_VERSION = React.version
      .split('.')
      .slice(0, 2)
      .map((number) => ~~number);

    return MAJOR_MINOR_VERSION[0] < 16 || (MAJOR_MINOR_VERSION[0] === 16 && MAJOR_MINOR_VERSION[1] < 3);
  } catch (error) {
    return true;
  }
})();

/**
 * @constant {string} COMPONENT_WILL_MOUNT
 */
export const COMPONENT_WILL_MOUNT = IS_LEGACY_REACT ? 'componentWillMount' : 'UNSAFE_componentWillMount';

/**
 * @constant {string} COMPONENT_WILL_RECEIVE_PROPS
 */
export const COMPONENT_WILL_RECEIVE_PROPS = IS_LEGACY_REACT
  ? 'componentWillReceiveProps'
  : 'UNSAFE_componentWillReceiveProps';

/**
 * @constant {boolean} IS_PRODUCTION
 */
export const IS_PRODUCTION = !!(process && process.env && process.env.NODE_ENV === 'production');

/**
 * @constant {Object} SOURCES
 */
export const SOURCES = {
  CLIENT_RECT: 'CLIENT_RECT',
  ELEMENT: 'ELEMENT',
};

/**
 * @constant {Array<Object>} KEYS
 */
export const KEYS = [
  // client rect keys
  {
    key: 'bottom',
    source: SOURCES.CLIENT_RECT,
  },
  {
    key: 'left',
    source: SOURCES.CLIENT_RECT,
  },
  {
    key: 'height',
    source: SOURCES.CLIENT_RECT,
  },
  {
    key: 'right',
    source: SOURCES.CLIENT_RECT,
  },
  {
    key: 'top',
    source: SOURCES.CLIENT_RECT,
  },
  {
    key: 'width',
    source: SOURCES.CLIENT_RECT,
  },

  // element keys
  {
    key: 'clientLeft',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'clientHeight',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'clientTop',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'clientWidth',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'naturalHeight',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'naturalWidth',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'offsetLeft',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'offsetHeight',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'offsetTop',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'offsetWidth',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'scrollLeft',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'scrollHeight',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'scrollTop',
    source: SOURCES.ELEMENT,
  },
  {
    key: 'scrollWidth',
    source: SOURCES.ELEMENT,
  },
];

/**
 * @constant {Array<string>} KEY_NAMES
 */
export const KEY_NAMES = KEYS.map(({key}) => key);

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
  'WBR',
];
