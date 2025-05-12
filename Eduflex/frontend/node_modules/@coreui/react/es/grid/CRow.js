import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CRow

var CRow = function CRow(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      gutters = props.gutters,
      form = props.form,
      alignHorizontal = props.alignHorizontal,
      alignVertical = props.alignVertical,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "gutters", "form", "alignHorizontal", "alignVertical"]); //render


  var classes = classNames(className, !gutters ? 'no-gutters' : null, alignHorizontal ? "justify-content-" + alignHorizontal : null, alignVertical ? "align-" + alignVertical : null, form ? 'form-row' : 'row');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CRow.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  gutters: PropTypes.bool,
  form: PropTypes.bool,
  alignHorizontal: PropTypes.string,
  alignVertical: PropTypes.string
};
CRow.defaultProps = {
  tag: 'div',
  gutters: true
};
export default CRow;