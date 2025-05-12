import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CProgress from '../progress/CProgress'; //component - CoreUI / CWidgetProgressIcon

var CWidgetProgressIcon = function CWidgetProgressIcon(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      value = props.value,
      color = props.color,
      inverse = props.inverse,
      progressSlot = props.progressSlot,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "header", "text", "value", "color", "inverse", "progressSlot"]);

  var classes = classNames('card', inverse ? [color && "bg-" + color, 'text-white'] : '', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, children && /*#__PURE__*/React.createElement("div", {
    className: "h1 text-muted text-right mb-4"
  }, children), header && /*#__PURE__*/React.createElement("div", {
    className: "h4 m-0"
  }, header), text && /*#__PURE__*/React.createElement("small", {
    className: "text-muted text-uppercase font-weight-bold"
  }, text), progressSlot || /*#__PURE__*/React.createElement(CProgress, {
    color: !inverse ? color : '',
    value: value,
    className: "progress-xs my-3 mb-0 " + (inverse ? 'progress-white' : '')
  })));
};

CWidgetProgressIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.number,
  inverse: PropTypes.bool,
  progressSlot: PropTypes.node
};
CWidgetProgressIcon.defaultProps = {
  value: 25
};
export default CWidgetProgressIcon;