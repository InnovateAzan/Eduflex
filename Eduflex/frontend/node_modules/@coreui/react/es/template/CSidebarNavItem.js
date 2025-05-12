import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { isValidElement, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLink, CBadge } from '../index';
import CIcon from '@coreui/icons-react';
import { iconProps } from './CSidebarNavDropdown';
import { DropdownContext } from './CSidebarNavDropdown'; //component - CoreUI / CSidebarNavItem

var CSidebarNavItem = function CSidebarNavItem(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      fontIcon = props.fontIcon,
      badge = props.badge,
      addLinkClass = props.addLinkClass,
      label = props.label,
      color = props.color,
      rest = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "name", "icon", "fontIcon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var classes = classNames('c-sidebar-nav-item', className);
  var linkClasses = classNames(label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link', color && "c-sidebar-nav-link-" + color, addLinkClass);
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: 'c-active'
  };
  return /*#__PURE__*/React.createElement("li", {
    className: classes,
    ref: innerRef
  }, children || /*#__PURE__*/React.createElement(CLink, _extends({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && ( /*#__PURE__*/isValidElement(icon) ? icon : /*#__PURE__*/React.createElement(CIcon, iconProps(icon))), fontIcon && /*#__PURE__*/React.createElement("i", {
    className: "c-sidebar-nav-icon " + fontIcon
  }), name, badge && /*#__PURE__*/React.createElement(CBadge, _objectSpread(_objectSpread({}, badge), {}, {
    text: null
  }), badge.text)));
};

CSidebarNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fontIcon: PropTypes.string,
  badge: PropTypes.object,
  addLinkClass: PropTypes.string,
  label: PropTypes.bool,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string
};
export default CSidebarNavItem;