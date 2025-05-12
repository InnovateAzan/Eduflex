import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CHeaderNav

var CHeaderNav = function CHeaderNav(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]); //render


  var classes = classNames(className, 'c-header-nav');
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeaderNav.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CHeaderNav;