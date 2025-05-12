import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CProgress from '../progress/CProgress'; //component - CoreUI / CWidgetProgress

var CWidgetProgress = function CWidgetProgress(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      footer = props.footer,
      color = props.color,
      value = props.value,
      inverse = props.inverse,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "header", "text", "footer", "color", "value", "inverse"]);

  var classes = classNames('card', inverse ? [color && "bg-" + color, 'text-white'] : '', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, header && /*#__PURE__*/React.createElement("div", {
    className: "h4 m-0"
  }, header), text && /*#__PURE__*/React.createElement("div", null, text), children || /*#__PURE__*/React.createElement(CProgress, {
    color: !inverse ? color : '',
    value: value,
    className: "progress-xs my-3 mb-0 " + (inverse ? 'progress-white' : '')
  }), footer && /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, footer)));
};

CWidgetProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string,
  footer: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.number,
  inverse: PropTypes.bool
};
CWidgetProgress.defaultProps = {
  value: 25
};
export default CWidgetProgress;