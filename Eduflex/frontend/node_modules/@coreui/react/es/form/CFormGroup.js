import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CFormGroup

var CFormGroup = function CFormGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      row = props.row,
      disabled = props.disabled,
      variant = props.variant,
      inline = props.inline,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "row", "disabled", "variant", "inline"]); //render


  var checkClass = variant && variant.includes('custom') ? 'custom-control' : 'form-check';
  var classes = classNames(row && 'row', !variant && 'form-group', variant && checkClass, variant === 'custom-radio' && 'custom-radio', variant === 'custom-checkbox' && 'custom-checkbox', variant && inline && checkClass + "-inline", variant && disabled && 'disabled', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  row: PropTypes.bool,
  variant: PropTypes.oneOf(['checkbox', 'custom-checkbox', 'custom-radio']),
  inline: PropTypes.bool,
  disabled: PropTypes.bool
};
export default CFormGroup;