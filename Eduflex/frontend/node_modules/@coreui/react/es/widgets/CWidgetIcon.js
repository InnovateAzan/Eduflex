import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CWidgetIcon

var CWidgetIcon = function CWidgetIcon(props) {
  var className = props.className,
      children = props.children,
      header = props.header,
      text = props.text,
      iconPadding = props.iconPadding,
      color = props.color,
      footerSlot = props.footerSlot,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "children", "header", "text", "iconPadding", "color", "footerSlot"]);

  var classes = classNames('card', color, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: "card-body d-flex align-items-center " + (iconPadding ? 'p-3' : 'p-0')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-3 text-white bg-" + color + " " + (iconPadding ? 'p-3' : 'p-4')
  }, children), /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    className: "text-value text-" + color
  }, header), text && /*#__PURE__*/React.createElement("div", {
    className: "text-muted text-uppercase font-weight-bold small"
  }, text))), footerSlot);
};

CWidgetIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string,
  iconPadding: PropTypes.bool,
  color: PropTypes.string,
  footerSlot: PropTypes.node
};
CWidgetIcon.defaultProps = {
  iconPadding: true
};
export default CWidgetIcon;