import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './scrollbar.css'; //component - CoreUI / CScrollbar

var CScrollbar = function CScrollbar(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      settings = props.settings,
      switcher = props.switcher,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "settings", "switcher"]);

  var _useState = useState(),
      instance = _useState[0],
      setInstance = _useState[1];

  var ref = /*#__PURE__*/createRef();
  innerRef && innerRef(ref);
  useEffect(function () {
    switcher ? init() : uninit();
  }, [switcher]);
  useEffect(function () {
    return uninit();
  }, []);

  var init = function init() {
    if (!instance) {
      createPerfectScrollbar();
    }
  };

  var createPerfectScrollbar = function createPerfectScrollbar() {
    setInstance(new PerfectScrollbar(ref.current, settings));
  };

  var uninit = function uninit() {
    if (instance) {
      instance.destroy();
      setInstance(null);
    }
  }; // render


  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classNames(className),
    style: {
      position: 'relative'
    }
  }, attributes, {
    ref: ref
  }));
};

CScrollbar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  settings: PropTypes.object,
  switcher: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
CScrollbar.defaultProps = {
  tag: 'div'
};
export default CScrollbar;