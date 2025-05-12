import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CSwitch

var CSwitch = function CSwitch(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      color = props.color,
      labelOn = props.labelOn,
      labelOff = props.labelOff,
      variant = props.variant,
      shape = props.shape,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "size", "color", "labelOn", "labelOff", "variant", "shape"]); //render


  var classes = classNames('c-switch form-check-label', (labelOn || labelOff) && 'c-switch-label', size && "c-switch-" + size, shape && "c-switch-" + shape, color && "c-switch" + (variant ? "-" + variant : '') + "-" + color, className);
  var inputClasses = classNames('c-switch-input', 'c-form-check-input');
  return /*#__PURE__*/React.createElement("label", {
    className: classes
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: inputClasses,
    type: "checkbox"
  }, attributes, {
    ref: innerRef
  })), /*#__PURE__*/React.createElement("span", {
    className: "c-switch-slider",
    "data-checked": labelOn,
    "data-unchecked": labelOff
  }));
};

CSwitch.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  shape: PropTypes.oneOf(['', 'pill', 'square']),
  variant: PropTypes.oneOf(['', '3d', 'opposite', 'outline']),
  color: PropTypes.string,
  labelOn: PropTypes.string,
  labelOff: PropTypes.string
};
export default CSwitch;