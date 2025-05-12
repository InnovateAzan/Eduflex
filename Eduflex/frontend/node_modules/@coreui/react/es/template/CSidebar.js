import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var Context = /*#__PURE__*/React.createContext({}); //component - CoreUI / CSidebar

var CSidebar = function CSidebar(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      breakpoint = props.breakpoint,
      show = props.show,
      fixed = props.fixed,
      unfoldable = props.unfoldable,
      minimize = props.minimize,
      size = props.size,
      hideOnMobileClick = props.hideOnMobileClick,
      aside = props.aside,
      colorScheme = props.colorScheme,
      overlaid = props.overlaid,
      dropdownMode = props.dropdownMode,
      onShowChange = props.onShowChange,
      onMinimizeChange = props.onMinimizeChange,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "breakpoint", "show", "fixed", "unfoldable", "minimize", "size", "hideOnMobileClick", "aside", "colorScheme", "overlaid", "dropdownMode", "onShowChange", "onMinimizeChange"]);

  var key = useState(Math.random().toString(36).substr(2))[0];

  var _useState = useState(show),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = useState(),
      openDropdown = _useState2[0],
      setOpenDropdown = _useState2[1];

  var node = useRef({}).current;

  var reference = function reference(r) {
    node.current = r;
    innerRef && innerRef(r);
  };

  var _useState3 = useState(minimize),
      minimized = _useState3[0],
      setIsMinimized = _useState3[1];

  useMemo(function () {
    setIsMinimized(minimize);
  }, [minimize]);

  var toggleMinimize = function toggleMinimize() {
    setIsMinimized(!minimized);
    onMinimizeChange && onMinimizeChange(minimized);
  };

  useMemo(function () {
    setIsOpen(show);
  }, [show]);
  useEffect(function () {
    isOpen === true ? createBackdrop() : removeBackdrop();
    return function () {
      return removeBackdrop();
    };
  }, [isOpen]); //methods

  var sidebarCloseListener = function sidebarCloseListener(e) {
    if (document.getElementById(key + 'backdrop') && !node.current.contains(e.target)) {
      closeSidebar();
    }
  };

  var onKeydown = function onKeydown(e) {
    e.key.includes('Esc') && isAutoclosable() && closeSidebar();
  };

  var createBackdrop = function createBackdrop() {
    var backdrop = document.createElement('div');

    if (overlaid) {
      document.addEventListener('click', sidebarCloseListener);
    } else {
      backdrop.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', onKeydown);
    backdrop.className = 'c-sidebar-backdrop c-show';
    backdrop.id = key + 'backdrop';
    document.body.appendChild(backdrop);
  };

  var removeBackdrop = function removeBackdrop() {
    var backdrop = document.getElementById(key + 'backdrop');

    if (backdrop) {
      document.removeEventListener('click', sidebarCloseListener);
      backdrop.removeEventListener('click', closeSidebar);
      document.removeEventListener('keydown', onKeydown);
      document.body.removeChild(backdrop);
    }
  };

  var closeSidebar = function closeSidebar() {
    if (typeof onShowChange === 'function') {
      onShowChange(overlaid ? false : 'responsive');
    } else {
      setIsOpen(overlaid ? false : 'responsive');
    }
  };

  var isOnMobile = function isOnMobile() {
    return Boolean(getComputedStyle(node.current).getPropertyValue('--is-mobile'));
  };

  var isAutoclosable = function isAutoclosable() {
    return isOnMobile() || overlaid;
  };

  var onSidebarClick = function onSidebarClick(e) {
    var sidebarItemClicked = String(e.target.className).includes('c-sidebar-nav-link');

    if (sidebarItemClicked && hideOnMobileClick && isAutoclosable()) {
      closeSidebar();
    }
  }; // render


  var haveResponsiveClass = breakpoint && isOpen === 'responsive';
  var classes = classNames('c-sidebar', colorScheme && "c-sidebar-" + colorScheme, isOpen === true && 'c-sidebar-show', haveResponsiveClass && "c-sidebar-" + breakpoint + "-show", fixed && !overlaid && 'c-sidebar-fixed', aside && 'c-sidebar-right', minimized && !unfoldable && 'c-sidebar-minimized', minimized && unfoldable && 'c-sidebar-unfoldable', overlaid && 'c-sidebar-overlaid', size && "c-sidebar-" + size, className);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      dropdownMode: dropdownMode,
      scrollbarExist: !minimized || unfoldable,
      toggleMinimize: toggleMinimize,
      openDropdown: openDropdown,
      setOpenDropdown: setOpenDropdown
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: reference,
    onClick: onSidebarClick
  }), children));
};

CSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fixed: PropTypes.bool,
  unfoldable: PropTypes.bool,
  overlaid: PropTypes.bool,
  breakpoint: PropTypes.oneOf([false, '', 'sm', 'md', 'lg', 'xl', 'xxl']),
  minimize: PropTypes.bool,
  show: PropTypes.oneOf(['', true, false, 'responsive']),
  size: PropTypes.oneOf(['', 'sm', 'lg', 'xl']),
  hideOnMobileClick: PropTypes.bool,
  aside: PropTypes.bool,
  colorScheme: PropTypes.string,
  dropdownMode: PropTypes.oneOf(['', 'openActive', 'close', 'closeInactive', 'noAction']),
  onShowChange: PropTypes.func,
  onMinimizeChange: PropTypes.func
};
CSidebar.defaultProps = {
  fixed: true,
  breakpoint: 'lg',
  show: 'responsive',
  hideOnMobileClick: true,
  colorScheme: 'dark'
};
export default CSidebar;