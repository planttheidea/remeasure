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

let initialState = {},
    index = ALL_KEYS.length,
    key;

while (index--) {
  key = ALL_KEYS[index];

  initialState[key] = 0;
}

export {ALL_BOUNDING_CLIENT_RECT_KEYS as allBoundingRectClientKeys};
export {ALL_DOM_ELEMENT_KEYS as allDomElementKeys};
export {ALL_KEYS as allKeys};
export {ALL_POSITION_KEYS as allPositionKeys};
export {ALL_SIZE_KEYS as allSizeKeys};
export {BOUNDING_CLIENT_RECT_POSITION_KEYS as boundingClientRectPositionKeys};
export {BOUNDING_CLIENT_RECT_SIZE_KEYS as boundingClientRectSizeKeys};
export {DOM_ELEMENT_POSITION_KEYS as domElementPositionKeys};
export {DOM_ELEMENT_SIZE_KEYS as domElementSizeKeys};
export {initialState};
