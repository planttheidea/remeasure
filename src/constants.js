import elementResizeDetectorMaker from 'element-resize-detector';

export const DEBOUNCE_VALUE_DEFAULT = 0;
export const ELEMENT_RESIZE_DETECTOR = elementResizeDetectorMaker({
  strategy: 'scroll'
});
export const FLATTEN_DEFAULT = false;
export const INHERITED_METHODS_DEFAULT = [];
export const POSITION_PROP_DEFAULT = 'position';
export const RENDER_ON_RESIZE_DEFAULT = true;
export const SIZE_PROP_DEFAULT = 'size';

export const BOUNDING_CLIENT_RECT_SIZE_KEYS = [
  'height',
  'width'
];

export const BOUNDING_CLIENT_RECT_POSITION_KEYS = [
  'bottom',
  'left',
  'right',
  'top'
];

export const ALL_BOUNDING_CLIENT_RECT_KEYS = [
  ...BOUNDING_CLIENT_RECT_POSITION_KEYS,
  ...BOUNDING_CLIENT_RECT_SIZE_KEYS
];

export const DOM_ELEMENT_POSITION_KEYS = [
  'clientLeft',
  'clientTop',
  'offsetLeft',
  'offsetTop',
  'scrollLeft',
  'scrollTop'
];

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

export const NATURAL_REGEXP = /natural/;

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

export const ALL_DOM_ELEMENT_KEYS = [
  ...DOM_ELEMENT_POSITION_KEYS,
  ...DOM_ELEMENT_SIZE_KEYS
];

export const ALL_POSITION_KEYS = [
  ...DOM_ELEMENT_POSITION_KEYS,
  ...BOUNDING_CLIENT_RECT_POSITION_KEYS
];

export const ALL_SIZE_KEYS = [
  ...DOM_ELEMENT_SIZE_KEYS,
  ...BOUNDING_CLIENT_RECT_SIZE_KEYS
];

export const ALL_KEYS = [
  ...ALL_POSITION_KEYS,
  ...ALL_SIZE_KEYS
];

export const CLIENT_RECT_TYPE = 'clientRect';
export const ELEMENT_TYPE = 'element';
