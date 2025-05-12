import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CImg

var CImg = function CImg(props) {
  var className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      block = props.block,
      thumbnail = props.thumbnail,
      shape = props.shape,
      align = props.align,
      src = props.src,
      width = props.width,
      height = props.height,
      placeholderColor = props.placeholderColor,
      fluidGrow = props.fluidGrow,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "fluid", "block", "thumbnail", "shape", "align", "src", "width", "height", "placeholderColor", "fluidGrow"]);

  var alignClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'float-right' : align === 'left' ? 'float-left' : ''; // render

  var classes = classNames(className, alignClass, thumbnail && 'img-thumbnail', fluid || fluidGrow && 'img-fluid', fluidGrow && 'w-100', block && 'd-block', shape);
  return src ? /*#__PURE__*/React.createElement("img", _extends({
    className: classes,
    src: src,
    width: width,
    height: height
  }, attributes, {
    ref: innerRef
  })) : /*#__PURE__*/React.createElement("svg", _extends({
    className: classes,
    width: width,
    height: height,
    style: {
      'backgroundColor': placeholderColor
    }
  }, attributes, {
    ref: innerRef
  }));
};

CImg.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  fluid: PropTypes.bool,
  fluidGrow: PropTypes.bool,
  shape: PropTypes.string,
  //oneOf(['', 'rounded']),
  thumbnail: PropTypes.bool,
  align: PropTypes.oneOf(['', 'left', 'right', 'center']),
  placeholderColor: PropTypes.string
};
CImg.defaultProps = {
  placeholderColor: 'transparent'
};
export default CImg;