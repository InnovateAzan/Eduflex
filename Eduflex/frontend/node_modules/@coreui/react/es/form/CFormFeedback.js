import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CFormFeedback

var CFormFeedback = function CFormFeedback(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      tooltip = props.tooltip,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "valid", "tooltip"]); //render


  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = classNames(valid ? "valid-" + validMode : "invalid-" + validMode, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};
export var CValidFeedback = function CValidFeedback(props) {
  return /*#__PURE__*/React.createElement(CFormFeedback, _extends({}, props, {
    valid: true
  }));
};
export var CInvalidFeedback = function CInvalidFeedback(props) {
  return /*#__PURE__*/React.createElement(CFormFeedback, _extends({}, props, {
    valid: false
  }));
};