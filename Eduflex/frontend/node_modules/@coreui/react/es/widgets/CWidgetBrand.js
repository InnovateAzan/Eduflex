import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CWidgetBrand

var CWidgetBrand = function CWidgetBrand(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      rightHeader = props.rightHeader,
      rightFooter = props.rightFooter,
      leftHeader = props.leftHeader,
      leftFooter = props.leftFooter,
      addHeaderClasses = props.addHeaderClasses,
      bodySlot = props.bodySlot,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "color", "rightHeader", "rightFooter", "leftHeader", "leftFooter", "addHeaderClasses", "bodySlot"]); // render


  var headerClasses = classNames('card-header content-center text-white p-0', color && "bg-" + color, addHeaderClasses);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card " + className
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: headerClasses
  }, children), bodySlot || /*#__PURE__*/React.createElement("div", {
    className: "card-body row text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, rightHeader && /*#__PURE__*/React.createElement("div", {
    className: "text-value-lg"
  }, rightHeader), rightFooter && /*#__PURE__*/React.createElement("div", {
    className: "text-uppercase text-muted small"
  }, rightFooter)), /*#__PURE__*/React.createElement("div", {
    className: "c-vr"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, leftHeader && /*#__PURE__*/React.createElement("div", {
    className: "text-value-lg"
  }, leftHeader), leftFooter && /*#__PURE__*/React.createElement("div", {
    className: "text-uppercase text-muted small"
  }, leftFooter))));
};

CWidgetBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  rightHeader: PropTypes.string,
  rightFooter: PropTypes.string,
  leftHeader: PropTypes.string,
  leftFooter: PropTypes.string,
  addHeaderClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  bodySlot: PropTypes.node
};
export default CWidgetBrand;