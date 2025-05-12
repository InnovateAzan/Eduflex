import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import CCol from '../grid/CCol'; //component - CoreUI / CLabel

var CLabel = function CLabel(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      hidden = props.hidden,
      variant = props.variant,
      col = props.col,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "hidden", "variant", "col"]); // render


  var classes = classNames(hidden && 'sr-only', variant === 'custom-checkbox' && 'custom-control-label', variant === 'checkbox' && 'form-check-label', variant === 'custom-file' && 'custom-file-label', col && 'col-form-label', col && typeof col === 'string' && "col-form-label-" + col, className);
  var Tag = col ? CCol : tag;
  var addLabelTag = col && {
    tag: tag
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, addLabelTag, attributes, {
    ref: innerRef
  }));
};

CLabel.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  hidden: PropTypes.bool,
  variant: PropTypes.oneOf(['custom-file', 'checkbox', 'custom-checkbox']),
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
CLabel.defaultProps = {
  tag: 'label'
};
export default CLabel;