const DEBOUNCE_VALUE_DEFAULT = 0;
const POSITION_PROP_DEFAULT = 'position';
const RENDER_ON_RESIZE_DEFAULT = true;
const SIZE_PROP_DEFAULT = 'size';

const BOUNDING_CLIENT_RECT_SIZE_KEYS = [
  'height',
  'width'
];

const BOUNDING_CLIENT_RECT_POSITION_KEYS = [
  'bottom',
  'left',
  'right',
  'top'
];

const ALL_BOUNDING_CLIENT_RECT_KEYS = [
  ...BOUNDING_CLIENT_RECT_POSITION_KEYS,
  ...BOUNDING_CLIENT_RECT_SIZE_KEYS
];

const DOM_ELEMENT_POSITION_KEYS = [
  'clientLeft',
  'clientTop',
  'offsetLeft',
  'offsetTop',
  'scrollLeft',
  'scrollTop'
];

const DOM_ELEMENT_SIZE_KEYS = [
  'clientHeight',
  'clientWidth',
  'naturalHeight',
  'naturalWidth',
  'offsetHeight',
  'offsetWidth',
  'scrollHeight',
  'scrollWidth'
];

const NATURAL_REGEXP = /natural/;

const VOID_ELEMENT_TAG_NAMES = [
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

const ALL_DOM_ELEMENT_KEYS = [
  ...DOM_ELEMENT_POSITION_KEYS,
  ...DOM_ELEMENT_SIZE_KEYS
];

const ALL_POSITION_KEYS = [
  ...DOM_ELEMENT_POSITION_KEYS,
  ...BOUNDING_CLIENT_RECT_POSITION_KEYS
];

const ALL_SIZE_KEYS = [
  ...DOM_ELEMENT_SIZE_KEYS,
  ...BOUNDING_CLIENT_RECT_SIZE_KEYS
];

const ALL_KEYS = [
  ...ALL_POSITION_KEYS,
  ...ALL_SIZE_KEYS
];

export {ALL_BOUNDING_CLIENT_RECT_KEYS};
export {ALL_DOM_ELEMENT_KEYS};
export {ALL_KEYS};
export {ALL_POSITION_KEYS};
export {ALL_SIZE_KEYS};
export {BOUNDING_CLIENT_RECT_POSITION_KEYS};
export {BOUNDING_CLIENT_RECT_SIZE_KEYS};
export {DEBOUNCE_VALUE_DEFAULT};
export {DOM_ELEMENT_POSITION_KEYS};
export {DOM_ELEMENT_SIZE_KEYS};
export {NATURAL_REGEXP};
export {POSITION_PROP_DEFAULT};
export {RENDER_ON_RESIZE_DEFAULT};
export {SIZE_PROP_DEFAULT};
export {VOID_ELEMENT_TAG_NAMES};
