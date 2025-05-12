import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import CButtonClose from '../button/CButtonClose'; //component - CoreUI / CSidebarClose

var CSidebarClose = function CSidebarClose(props) {
  return /*#__PURE__*/React.createElement(CButtonClose, _extends({}, props, {
    buttonClass: 'c-sidebar-close'
  }), /*#__PURE__*/React.createElement("svg", {
    className: "c-icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("title", null, "x"), /*#__PURE__*/React.createElement("path", {
    d: "M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"
  })));
};

export default CSidebarClose;