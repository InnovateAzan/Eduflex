import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CButtonGroup

var CButtonGroup = function CButtonGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      vertical = props.vertical,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "size", "vertical"]); //render


  var classes = classNames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    role: "group"
  }, attributes, {
    ref: innerRef
  }));
};

CButtonGroup.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  vertical: PropTypes.bool
};
export default CButtonGroup;