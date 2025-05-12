import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CFade from '../fade/CFade';
import { omitByKeys } from '@coreui/utils/src';
import { CFadeProps } from '../utils/helper.js';
import { Context } from './CTabs.js';
import { Context as FadeContext } from './CTabContent.js'; //component - CoreUI / CTabPane

var getIndex = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getState = function getState(r) {
  return r.current.dataset.tab || getIndex(r.current);
};

var CTabPane = function CTabPane(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "active"]);

  var _ref = useContext(Context) || {},
      activeTab = _ref.active,
      setActiveTab = _ref.setActiveTab;

  var fade = useContext(FadeContext);
  var ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);

  var _useState = useState(),
      isActive = _useState[0],
      setIsActive = _useState[1];

  useEffect(function () {
    setIsActive(activeTab === getState(ref));
  }, [activeTab]);
  useEffect(function () {
    if (active !== undefined) {
      setActiveTab ? setActiveTab(active && getState(ref)) : setIsActive(active);
    }
  }, [active]); //render

  var classes = classNames('tab-pane', {
    'active': isActive
  }, className);
  var attrs = omitByKeys(attributes, CFadeProps);
  return /*#__PURE__*/React.createElement(CFade, _extends({
    in: isActive,
    baseClass: fade ? 'fade' : '',
    className: classes
  }, attrs, {
    innerRef: ref
  }));
};

CTabPane.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  active: PropTypes.bool
};
export default CTabPane;