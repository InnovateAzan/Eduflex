import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import { Context } from './CModal';
import CButtonClose from '../button/CButtonClose'; //component - CoreUI / CModalHeader

var CModalHeader = function CModalHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      closeButton = props.closeButton,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "closeButton"]);

  var _useContext = useContext(Context),
      close = _useContext.close; //render


  var classes = classNames(className, 'modal-header');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }), props.children, closeButton && /*#__PURE__*/React.createElement(CButtonClose, {
    onClick: close
  }));
};

CModalHeader.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  closeButton: PropTypes.bool
};
CModalHeader.defaultProps = {
  tag: 'header'
};
export default CModalHeader;