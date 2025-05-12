import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CCallout

var CCallout = function CCallout(props) {
  var className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "color"]); //render


  var classes = classNames('c-callout', color ? 'c-callout-' + color : null, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCallout.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string
};
export default CCallout;