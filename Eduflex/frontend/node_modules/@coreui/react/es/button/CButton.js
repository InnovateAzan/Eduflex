import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import CLink from '../link/CLink'; //component - CoreUI / CButton

var CButton = function CButton(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      disabled = props.disabled,
      active = props.active,
      block = props.block,
      color = props.color,
      size = props.size,
      pressed = props.pressed,
      shape = props.shape,
      variant = props.variant,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "onClick", "disabled", "active", "block", "color", "size", "pressed", "shape", "variant"]);

  var click = function click(e) {
    return !disabled && onClick && onClick(e);
  };

  var isLink = attributes.to || attributes.href; //render

  var classes = classNames(className, 'btn', variant || color ? "btn" + (variant ? '-' + variant : '') + "-" + color : false, size ? "btn-" + size : false, block ? 'btn-block' : false, shape ? "btn-" + shape : false, pressed ? 'btn-pressed' : false, {
    'active': active && !isLink,
    'disabled': disabled && !isLink
  });

  if (isLink) {
    return /*#__PURE__*/React.createElement(CLink, _extends({}, attributes, {
      active: active,
      disabled: disabled,
      className: classes,
      onClick: click,
      innerRef: innerRef
    }));
  } else {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes,
      type: "button",
      disabled: disabled
    }, attributes, {
      onClick: click,
      ref: innerRef
    }));
  }
};

CButton.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  block: PropTypes.bool,
  shape: PropTypes.string,
  variant: PropTypes.oneOf(['', 'ghost', 'outline']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  pressed: PropTypes.bool
};
CButton.defaultProps = {
  tag: 'button'
}; //export

export default CButton;