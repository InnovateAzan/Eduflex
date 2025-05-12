import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from './CProgress'; //component - CoreUI / CProgressBar

var CProgressBar = function CProgressBar(directProps) {
  var _useContext = useContext(Context),
      inheritedProps = _useContext.inheritedProps;

  var props = _objectSpread(_objectSpread({}, inheritedProps), directProps);

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      striped = props.striped,
      animated = props.animated,
      precision = props.precision,
      showPercentage = props.showPercentage,
      showValue = props.showValue,
      max = props.max,
      value = props.value,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "color", "striped", "animated", "precision", "showPercentage", "showValue", "max", "value"]); // render


  var progressBarClasses = classNames('progress-bar', animated && 'progress-bar-animated', (striped || animated) && 'progress-bar-striped', color && "bg-" + color, className);
  var valLabel = Number(value).toFixed(precision);
  var percentLabel = Number(value / max * 100).toFixed(precision) + '%';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: progressBarClasses,
    style: {
      width: value / max * 100 + "%"
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": "0",
    "aria-valuemax": max
  }, attributes, {
    ref: innerRef
  }), showPercentage ? percentLabel : showValue ? valLabel : children);
};

CProgressBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  value: PropTypes.number,
  max: PropTypes.number,
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  precision: PropTypes.number,
  showPercentage: PropTypes.bool,
  showValue: PropTypes.bool
};
export default CProgressBar;