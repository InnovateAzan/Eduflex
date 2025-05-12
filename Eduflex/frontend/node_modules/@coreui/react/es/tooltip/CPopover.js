import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CTooltip from './CTooltip.js';
import { renderToString } from 'react-dom/server'; //component - CoreUI / CPopover

var template = "<h3 class=\"popover-header\">H</h3><div class=\"popover-body\">C</div>";

var generateContent = function generateContent(content, header) {
  return template.replace('H', renderToString(header)).replace('C', renderToString(content));
};

var CPopover = function CPopover(props) {
  var header = props.header,
      children = props.children,
      content = props.content,
      config = _objectWithoutPropertiesLoose(props, ["header", "children", "content"]);

  var computedContent = useCallback(generateContent(content, header), [content, header]);

  var advancedOptions = _objectSpread(_objectSpread({}, config ? config.advancedOptions || {} : {}), {}, {
    theme: 'cpopover'
  });

  var computedConfig = _objectSpread(_objectSpread({}, config), {}, {
    advancedOptions: advancedOptions
  });

  return /*#__PURE__*/React.createElement(CTooltip, _extends({
    content: computedContent
  }, computedConfig), children);
};

CPopover.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
export default CPopover;