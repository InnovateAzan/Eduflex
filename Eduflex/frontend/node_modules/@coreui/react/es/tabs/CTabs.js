import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; //component - CoreUI / CTabPane

export var Context = /*#__PURE__*/React.createContext();

var CTabs = function CTabs(props) {
  var children = props.children,
      activeTab = props.activeTab,
      onActiveTabChange = props.onActiveTabChange;

  var _useState = useState(0),
      active = _useState[0],
      setActive = _useState[1];

  useEffect(function () {
    activeTab !== undefined && setActive(activeTab);
  }, [activeTab]);

  var setActiveTab = function setActiveTab(tab) {
    onActiveTabChange && onActiveTabChange(tab);
    setActive(tab);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      active: active,
      setActiveTab: setActiveTab
    }
  }, children));
};

CTabs.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onActiveTabChange: PropTypes.func
};
export default CTabs;