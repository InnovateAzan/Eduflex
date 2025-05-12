import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CButtonClose

var CButtonClose = function CButtonClose(props) {
  var children = props.children,
      className = props.className,
      buttonClass = props.buttonClass,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "buttonClass", "innerRef"]); //render


  var classes = classNames(buttonClass, className);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": "Close"
  }, attributes, {
    ref: innerRef
  }), children || String.fromCharCode(215));
};

CButtonClose.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  buttonClass: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
CButtonClose.defaultProps = {
  buttonClass: 'close'
};
export default CButtonClose;