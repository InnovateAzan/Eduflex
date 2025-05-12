import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

var getTransitionClass = function getTransitionClass(s) {
  return s === 'entering' ? 'collapsing' : s === 'entered' ? 'collapse show' : s === 'exiting' ? 'collapsing' : 'collapse';
}; //component - CoreUI / CCollapse


var CCollapse = function CCollapse(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      show = props.show,
      navbar = props.navbar,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "show", "navbar"]);

  var _useState = useState(),
      height = _useState[0],
      setHeight = _useState[1];

  var ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);

  var onEntering = function onEntering() {
    setHeight(ref.current.scrollHeight);
  };

  var onEntered = function onEntered() {
    setHeight(null);
  };

  var onExit = function onExit() {
    setHeight(ref.current.scrollHeight);
  };

  var onExiting = function onExiting() {
    var _unused = ref.current.offsetHeight; // eslint-disable-line no-unused-vars

    setHeight(0);
  };

  var onExited = function onExited() {
    setHeight(null);
  }; //render


  return /*#__PURE__*/React.createElement(Transition, {
    in: show,
    timeout: 350,
    appear: false,
    enter: true,
    exit: true,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    nodeRef: ref
  }, function (status) {
    var collapseClass = getTransitionClass(status);
    var classes = classNames(className, collapseClass, navbar && 'navbar-collapse');
    var style = height === null ? null : {
      height: height
    };
    return /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
      style: _objectSpread(_objectSpread({}, attributes.style), style),
      className: classes,
      ref: ref
    }), children);
  });
};

CCollapse.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  show: PropTypes.bool,
  navbar: PropTypes.bool
};
export default CCollapse;