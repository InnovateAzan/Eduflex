import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import { sharedPropTypes } from './CCard'; //component - CoreUI / CCardHeader

var CCardHeader = function CCardHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classNames(className, 'card-header', align ? "text-" + align : false, textColor ? "text-" + textColor : false, color ? "bg-" + color : false, borderColor ? "border-" + borderColor : false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardHeader.propTypes = _objectSpread({
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}, sharedPropTypes);
CCardHeader.defaultProps = {
  tag: 'header'
};
export default CCardHeader;