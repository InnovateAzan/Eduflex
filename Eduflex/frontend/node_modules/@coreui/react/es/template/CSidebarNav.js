import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CScrollbar from './CScrollbar';
import { Context } from './CSidebar'; //component - CoreUI / CSidebarNav

var CSidebarNav = function CSidebarNav(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]);

  var _useContext = useContext(Context),
      scrollbarExist = _useContext.scrollbarExist;

  var navClasses = classNames('c-sidebar-nav', 'h-100', className); //state

  var isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';
  return /*#__PURE__*/React.createElement(CScrollbar, _extends({
    settings: {
      suppressScrollX: !isRtl
    },
    className: navClasses,
    innerRef: innerRef,
    switcher: scrollbarExist,
    tag: "ul"
  }, attributes));
};

CSidebarNav.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CSidebarNav;