import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CToaster

var CToaster = function CToaster(props) {
  var className = props.className,
      innerRef = props.innerRef,
      position = props.position,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "position"]); // inherit closeButton, autohide, fade??
  // render


  var classes = classNames('toaster', position && position !== 'static' && 'toaster-' + position, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CToaster.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  position: PropTypes.oneOf(['', 'static', 'top-right', 'top-left', 'top-center', 'top-full', 'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'])
};
CToaster.defaultProps = {
  position: 'top-right'
};
export default CToaster;