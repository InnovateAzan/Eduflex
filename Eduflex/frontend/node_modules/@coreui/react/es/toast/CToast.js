import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CFade from '../fade/CFade';
import { omitByKeys } from '@coreui/utils/src';
import { CFadeProps } from '../utils/helper.js';
import './CToast.css';
export var Context = /*#__PURE__*/React.createContext({}); //component - CoreUI / CToast

var CToast = function CToast(props) {
  var _classNames;

  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      show = props.show,
      autohide = props.autohide,
      fade = props.fade,
      color = props.color,
      onStateChange = props.onStateChange,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "children", "innerRef", "show", "autohide", "fade", "color", "onStateChange"]);

  var _useState = useState(show),
      state = _useState[0],
      setState = _useState[1];

  var timeout = useRef();
  useEffect(function () {
    setState(show);
  }, [show]); //triggered on mount and destroy

  useEffect(function () {
    return function () {
      return clearTimeout(timeout.current);
    };
  }, []);
  useEffect(function () {
    if (state === true && autohide) {
      setAutohide();
    }

    onStateChange && onStateChange(state);
  }, [state]);

  var setAutohide = function setAutohide() {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      startAutohide();
    }, autohide);
  };

  var onMouseOver = function onMouseOver() {
    if (state !== 'closing') {
      state !== true && setState(true);
      clearTimeout(timeout.current);
    }
  };

  var onMouseOut = function onMouseOut() {
    if (autohide && state !== 'closing') {
      setAutohide();
    }
  };

  var startAutohide = function startAutohide() {
    if (!fade) {
      return setState(false);
    }

    setState('hiding');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      setState(false);
    }, 2000);
  };

  var close = function close() {
    if (!fade) {
      return setState(false);
    }

    setState('closing');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      setState(false);
    }, 500);
  }; // render


  var classes = classNames((_classNames = {
    toast: true
  }, _classNames["toast-" + color] = !!color, _classNames), className);
  var fadeClasses = classNames(fade && (state === 'hiding' ? 'toast-fade-slow' : 'toast-fade'));
  var attrs = omitByKeys(attributes, CFadeProps);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      close: close
    }
  }, state && /*#__PURE__*/React.createElement(CFade, _extends({
    className: classes,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    in: state === true,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    baseClass: fadeClasses,
    innerRef: innerRef
  }, attrs), children));
};

CToast.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  show: PropTypes.bool,
  autohide: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  fade: PropTypes.bool,
  color: PropTypes.string,
  onStateChange: PropTypes.func
};
CToast.defaultProps = {
  fade: true
};
export default CToast;