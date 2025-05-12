import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint react/prop-types: 0 */
import React from 'react';
import CBrand from '../utils/CBrand'; //component - CoreUI / CHeaderBrand

var CHeaderBrand = function CHeaderBrand(props) {
  return /*#__PURE__*/React.createElement(CBrand, _extends({}, props, {
    className: ['c-header-brand', props.className]
  }));
};

export default CHeaderBrand;