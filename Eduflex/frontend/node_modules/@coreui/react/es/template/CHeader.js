import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CHeader

var CHeader = function CHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fixed = props.fixed,
      colorScheme = props.colorScheme,
      withSubheader = props.withSubheader,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "fixed", "colorScheme", "withSubheader"]); // render


  var classes = classNames(className, 'c-header', colorScheme ? 'c-header-' + colorScheme : null, fixed ? 'c-header-fixed' : null, withSubheader ? 'c-header-with-subheader' : null);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fixed: PropTypes.bool,
  withSubheader: PropTypes.bool,
  colorScheme: PropTypes.string
};
CHeader.defaultProps = {
  tag: 'header',
  fixed: true,
  colorScheme: 'light'
};
export default CHeader;