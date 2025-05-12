import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CEmbed

var CEmbed = function CEmbed(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      ratio = props.ratio,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "ratio"]); //render


  var classes = classNames(className, 'embed-responsive', "embed-responsive-" + ratio);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CEmbed.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  ratio: PropTypes.oneOf(['21by9', '16by9', '4by3', '1by1'])
};
CEmbed.defaultProps = {
  tag: 'div',
  ratio: '16by9'
};
export default CEmbed;