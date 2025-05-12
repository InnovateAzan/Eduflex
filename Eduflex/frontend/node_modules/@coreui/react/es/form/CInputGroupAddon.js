import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CInputGroupAddon

var CInputGroupAddon = function CInputGroupAddon(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      prepend = props.prepend,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "prepend"]); //render


  var classes = classNames('input-group-' + (prepend ? 'prepend' : 'append'), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }), children);
};

CInputGroupAddon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  prepend: PropTypes.bool
};
export var CInputGroupAppend = function CInputGroupAppend(props) {
  return /*#__PURE__*/React.createElement(CInputGroupAddon, _extends({}, props, {
    prepend: false
  }));
};
export var CInputGroupPrepend = function CInputGroupPrepend(props) {
  return /*#__PURE__*/React.createElement(CInputGroupAddon, _extends({}, props, {
    prepend: true
  }));
};