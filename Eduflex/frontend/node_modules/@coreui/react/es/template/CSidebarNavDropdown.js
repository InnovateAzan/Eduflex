import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useContext, useEffect, createRef, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CIcon from '@coreui/icons-react';
import { useLocation } from 'react-router-dom';
import { Context } from './CSidebar';
export var DropdownContext = /*#__PURE__*/React.createContext({});
export var iconProps = function iconProps(icon) {
  if (typeof icon === 'object') {
    var _objectSpread2;

    var key = icon.size ? 'className' : 'customClasses';
    return _objectSpread(_objectSpread({}, icon), {}, (_objectSpread2 = {}, _objectSpread2["" + key] = icon.customClasses || "c-sidebar-nav-icon " + icon.className, _objectSpread2));
  } else {
    return {
      customClasses: 'c-sidebar-nav-icon',
      name: icon
    };
  }
}; //component - CoreUI / CSidebarNavDropdown

var CSidebarNavDropdown = function CSidebarNavDropdown(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      icon = props.icon,
      fontIcon = props.fontIcon,
      name = props.name,
      show = props.show,
      route = props.route,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "icon", "fontIcon", "name", "show", "route"]);

  var ref = /*#__PURE__*/createRef();
  innerRef && innerRef(ref);

  var _useContext = useContext(Context),
      dropdownMode = _useContext.dropdownMode,
      openDropdown = _useContext.openDropdown,
      setOpenDropdown = _useContext.setOpenDropdown;

  var _useState = useState(show),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  useEffect(function () {
    setIsOpen(show);
  }, [show]);
  useEffect(function () {
    !dropdownMode && (!openDropdown || !ref.current.contains(openDropdown)) && setIsOpen(false);
  }, [openDropdown]);

  var toggle = function toggle() {
    !dropdownMode && setOpenDropdown(isOpen ? ref.current.parentNode.closest('.c-sidebar-nav-dropdown') : ref.current);
    setIsOpen(!isOpen);
  };

  var path = '';

  try {
    path = useLocation().pathname;
  } catch (e) {
    console.warn(e);
  }

  useEffect(function () {
    if (dropdownMode === 'close') {
      setIsOpen(false);
    } else if (dropdownMode === 'closeInactive' && route) {
      setIsOpen(path.includes(route));
    } else if ((!dropdownMode || dropdownMode !== 'noAction') && !isOpen && route) {
      setIsOpen(path.includes(route));
    }
  }, [path]); //render

  var classes = classNames('c-sidebar-nav-dropdown', isOpen && 'c-show', className);
  var iconClasses = classNames('c-sidebar-nav-icon', fontIcon);
  return /*#__PURE__*/React.createElement("li", _extends({
    className: classes
  }, attributes, {
    ref: ref
  }), /*#__PURE__*/React.createElement("a", {
    className: "c-sidebar-nav-dropdown-toggle",
    tabIndex: "0",
    onClick: toggle,
    "aria-label": "menu dropdown"
  }, icon && ( /*#__PURE__*/isValidElement(icon) ? icon : /*#__PURE__*/React.createElement(CIcon, iconProps(icon))), fontIcon && /*#__PURE__*/React.createElement("i", {
    className: iconClasses
  }), name), /*#__PURE__*/React.createElement("ul", {
    className: "c-sidebar-nav-dropdown-items"
  }, /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: {
      isOpen: isOpen
    }
  }, children)));
};

CSidebarNavDropdown.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fontIcon: PropTypes.string,
  show: PropTypes.bool,
  route: PropTypes.string
};
export default CSidebarNavDropdown;