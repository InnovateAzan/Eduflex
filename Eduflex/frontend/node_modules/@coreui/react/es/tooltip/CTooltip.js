import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { renderToString } from 'react-dom/server'; //component - CoreUI / CTooltip

var CTooltip = function CTooltip(props) {
  var children = props.children,
      content = props.content,
      interactive = props.interactive,
      placement = props.placement,
      trigger = props.trigger,
      advancedOptions = props.advancedOptions;
  var computedContent = useCallback(function () {
    return typeof content === 'string' ? content : renderToString(content);
  }, [content]);

  var config = _objectSpread({
    allowHTML: true,
    content: computedContent,
    interactive: interactive,
    placement: placement,
    trigger: trigger
  }, advancedOptions);

  var key = useState(Math.random().toString(36).substr(2))[0];
  var instance = useRef();
  useEffect(function () {
    if (instance.current) {
      instance.current.setProps(config);
    }
  });
  useEffect(function () {
    var node = document.querySelector("[data-tooltip=\"" + key + "\"]");
    instance.current = tippy(node, config);
    return function () {
      return instance.current.destroy();
    };
  }, [key]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(children, {
    'data-tooltip': key
  }));
};

CTooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  interactive: PropTypes.bool,
  placement: PropTypes.oneOf(['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end']),
  trigger: PropTypes.string,
  advancedOptions: PropTypes.object
};
CTooltip.defaultProps = {
  content: '',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  advancedOptions: {}
};
export default CTooltip;