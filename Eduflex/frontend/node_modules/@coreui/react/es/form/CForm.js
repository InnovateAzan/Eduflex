import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CForm

var CForm = function CForm(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      inline = props.inline,
      wasValidated = props.wasValidated,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "inline", "wasValidated"]); //render


  var classes = classNames(className, inline ? 'form-inline' : false, wasValidated ? 'was-validated' : false);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CForm.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  inline: PropTypes.bool,
  wasValidated: PropTypes.bool
};
CForm.defaultProps = {
  tag: 'form'
};
export default CForm;