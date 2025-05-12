import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CSpinner

var CSpinner = function CSpinner(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      grow = props.grow,
      size = props.size,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "grow", "size", "color"]); //render


  var type = grow ? 'grow' : 'border';
  var classes = classNames("spinner-" + type, size && "spinner-" + type + "-" + size, color && "text-" + color, className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes,
    "aria-hidden": "false",
    "aria-label": "Loading",
    role: "status"
  }, attributes, {
    ref: innerRef
  }));
};

CSpinner.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  grow: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string
};
CSpinner.defaultProps = {
  tag: 'div'
};
export default CSpinner;