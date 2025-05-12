import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint react/prop-types: 0 */
import React from 'react';
import CLink from '../link/CLink';

var CCardLink = function CCardLink(props) {
  return /*#__PURE__*/React.createElement(CLink, _extends({}, props, {
    className: ['card-link', props.className]
  }));
};

export default CCardLink;