import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CWidgetSimple

var CWidgetSimple = function CWidgetSimple(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "header", "text"]);

  var classes = classNames('card', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: "card-body text-center"
  }, header && /*#__PURE__*/React.createElement("div", {
    className: "text-muted small text-uppercase font-weight-bold"
  }, header), text && /*#__PURE__*/React.createElement("div", {
    className: "h2 py-3"
  }, text), children));
};

CWidgetSimple.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string
};
export default CWidgetSimple;