import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CProgressBar from './CProgressBar';
export var Context = /*#__PURE__*/React.createContext({}); //component - CoreUI / CProgress

var CProgress = function CProgress(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      color = props.color,
      striped = props.striped,
      animated = props.animated,
      precision = props.precision,
      showPercentage = props.showPercentage,
      showValue = props.showValue,
      max = props.max,
      value = props.value,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "size", "color", "striped", "animated", "precision", "showPercentage", "showValue", "max", "value"]);

  var inheritedProps = {
    color: color,
    striped: striped,
    animated: animated,
    precision: precision,
    showPercentage: showPercentage,
    showValue: showValue,
    max: max,
    value: value
  };
  var progressClasses = classNames('progress', size && 'progress-' + size, className); // render

  return /*#__PURE__*/React.createElement("div", _extends({
    className: progressClasses
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      inheritedProps: inheritedProps
    }
  }, children || /*#__PURE__*/React.createElement(CProgressBar, null)));
};

CProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  precision: PropTypes.number,
  showPercentage: PropTypes.bool,
  showValue: PropTypes.bool
};
CProgress.defaultProps = {
  value: 0,
  max: 100,
  precision: 0
};
export default CProgress;