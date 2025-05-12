import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CLink from '../link/CLink'; //component - CoreUI / CHeaderNavLink

var CHeaderNavLink = function CHeaderNavLink(props) {
  var className = props.className,
      innerRef = props.innerRef,
      rest = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]); //render


  var classes = classNames(className, 'c-header-nav-link');
  return /*#__PURE__*/React.createElement(CLink, _extends({
    className: classes
  }, rest, {
    innerRef: innerRef
  }));
};

CHeaderNavLink.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CHeaderNavLink;