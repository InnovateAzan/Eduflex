import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CFade from '../fade/CFade';
import { omitByKeys } from '@coreui/utils/src';
import { CFadeProps } from '../utils/helper.js';
import CButtonClose from '../button/CButtonClose'; //component - CoreUI / CAlert

var CAlert = function CAlert(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      onShowChange = props.onShowChange,
      closeButton = props.closeButton,
      color = props.color,
      fade = props.fade,
      show = props.show,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef", "onShowChange", "closeButton", "color", "fade", "show"]); //render


  var classes = classNames(className, 'alert', (_classNames = {}, _classNames["alert-" + color] = color, _classNames['alert-dismissible'] = closeButton, _classNames));
  var alertTransition = {
    baseClass: fade ? CFade.baseClass : '',
    timeout: fade ? CFade.timeout : 0,
    unmountOnExit: true
  };

  var _useState = useState(show),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  useEffect(function () {
    setIsOpen(show);
  }, [show]);
  var timeout = useRef();
  useEffect(function () {
    onShowChange && onShowChange(isOpen);
    clearTimeout(timeout.current);

    if (typeof isOpen === 'number' && isOpen > 0) {
      timeout.current = setTimeout(function () {
        setIsOpen(isOpen - 1);
      }, 1000);
    }

    return function () {
      return clearTimeout(timeout.current);
    };
  }, [isOpen]);
  var attrs = omitByKeys(attributes, CFadeProps);
  return /*#__PURE__*/React.createElement(CFade, _extends({}, alertTransition, {
    className: classes,
    in: Boolean(isOpen),
    role: "alert"
  }, attrs, {
    innerRef: innerRef
  }), children, closeButton && /*#__PURE__*/React.createElement(CButtonClose, {
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }));
};

CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onShowChange: PropTypes.func,
  closeButton: PropTypes.bool,
  color: PropTypes.string,
  fade: PropTypes.bool,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};
CAlert.defaultProps = {
  show: true,
  fade: true
};
export default CAlert;