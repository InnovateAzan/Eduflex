import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CFormText

var CFormText = function CFormText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "color"]); //render


  var classes = classNames('form-text', color && "text-" + color, className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormText.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string
};
CFormText.defaultProps = {
  tag: 'small',
  color: 'muted'
};
export default CFormText;