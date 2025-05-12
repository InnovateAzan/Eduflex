import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CBreadcrumb

var CBreadcrumb = function CBreadcrumb(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]);

  var classes = classNames(className, 'breadcrumb'); //render

  return /*#__PURE__*/React.createElement("ol", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CBreadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CBreadcrumb;