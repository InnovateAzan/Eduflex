import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CToastBody

var CToastBody = function CToastBody(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]); //render


  var classes = classNames('toast-body', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CToastBody.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
export default CToastBody;