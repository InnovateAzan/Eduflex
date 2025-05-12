import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CToggler

var CToggler = function CToggler(props) {
  var Tag = props.tag,
      children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      inHeader = props.inHeader,
      inNavbar = props.inNavbar,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "children", "className", "innerRef", "inHeader", "inNavbar"]);

  var typeAttr = Tag === 'button' ? {
    type: 'button'
  } : null;
  var type = inNavbar ? 'navbar' : inHeader ? 'c-header' : null;
  var togglerClass = type ? type + "-toggler" : '';
  var iconClass = type ? togglerClass + "-icon" : ''; //render

  var classes = classNames(togglerClass, className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, typeAttr, attributes, {
    ref: innerRef
  }), children || /*#__PURE__*/React.createElement("span", {
    className: iconClass
  }));
};

CToggler.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inHeader: PropTypes.bool,
  inNavbar: PropTypes.bool
};
CToggler.defaultProps = {
  tag: 'button'
};
export default CToggler;