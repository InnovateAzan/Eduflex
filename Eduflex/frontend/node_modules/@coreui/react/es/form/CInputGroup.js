import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CInputGroup

var CInputGroup = function CInputGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "size"]); //render


  var classes = classNames('input-group', size && "input-group-" + size, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CInputGroup.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.string
};
export default CInputGroup;