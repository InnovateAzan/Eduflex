import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CWidgetDropdown

var CWidgetDropdown = function CWidgetDropdown(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      color = props.color,
      footerSlot = props.footerSlot,
      text = props.text,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "header", "color", "footerSlot", "text"]);

  var classes = classNames('card text-white', color && "bg-" + color, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: "card-body pb-0 d-flex justify-content-between"
  }, /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    className: "text-value-lg"
  }, header), text && /*#__PURE__*/React.createElement("div", null, text)), children), footerSlot);
};

CWidgetDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  color: PropTypes.string,
  footerSlot: PropTypes.node,
  text: PropTypes.string
};
export default CWidgetDropdown;