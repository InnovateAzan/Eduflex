import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CSidebarNavDivider

var CSidebarNavDivider = function CSidebarNavDivider(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]); //render


  var classes = classNames('c-sidebar-nav-divider', className);
  return /*#__PURE__*/React.createElement("li", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarNavDivider.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CSidebarNavDivider;