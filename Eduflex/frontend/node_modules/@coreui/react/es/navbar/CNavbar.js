import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CNavbar

var CNavbar = function CNavbar(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      expandable = props.expandable,
      light = props.light,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "expandable", "light", "fixed", "sticky", "color"]); //render


  var classes = classNames('navbar', className, light ? 'navbar-light' : 'navbar-dark', (_classNames = {}, _classNames["navbar-expand" + (expandable === true ? '' : "-" + expandable)] = expandable, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames['sticky-top'] = sticky, _classNames));
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbar.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  light: PropTypes.bool,
  color: PropTypes.string,
  fixed: PropTypes.oneOf(['', 'top', 'bottom']),
  sticky: PropTypes.bool,
  expandable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
CNavbar.defaultProps = {
  tag: 'nav'
};
export default CNavbar;