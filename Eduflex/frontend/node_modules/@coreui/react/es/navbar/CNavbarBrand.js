import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint react/prop-types: 0 */
import React from 'react';
import CBrand from '../utils/CBrand'; //component - CoreUI / CNavbarBrand

var CNavbarBrand = function CNavbarBrand(props) {
  return /*#__PURE__*/React.createElement(CBrand, _extends({}, props, {
    className: ['navbar-brand', props.className]
  }));
};

export default CNavbarBrand;