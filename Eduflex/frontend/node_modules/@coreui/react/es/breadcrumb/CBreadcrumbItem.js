import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CBreadcrumbItem

var CBreadcrumbItem = function CBreadcrumbItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "active"]); //render


  var classes = classNames(className, active ? 'active' : false, 'breadcrumb-item');
  return /*#__PURE__*/React.createElement("li", _extends({
    className: classes,
    role: "presentation",
    "aria-current": active ? 'page' : undefined
  }, attributes, {
    ref: innerRef
  }));
};

CBreadcrumbItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool
};
export default CBreadcrumbItem;