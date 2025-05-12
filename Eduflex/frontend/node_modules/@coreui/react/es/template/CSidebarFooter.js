import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CSidebarFooter

var CSidebarFooter = function CSidebarFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef"]); // render


  var classes = classNames('c-sidebar-footer', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
CSidebarFooter.defaultProps = {
  tag: 'div'
};
export default CSidebarFooter;