import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CFooter

var CFooter = function CFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fixed = props.fixed,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "fixed"]); //render


  var classes = classNames('c-footer', fixed ? 'c-footer-fixed' : null, className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fixed: PropTypes.bool
};
CFooter.defaultProps = {
  tag: 'footer',
  fixed: false
};
export default CFooter;