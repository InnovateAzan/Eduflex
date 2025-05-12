import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CButtonClose from '../button/CButtonClose';
import { Context } from './CToast'; //component - CoreUI / CToastHeader

var CToastHeader = function CToastHeader(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      closeButton = props.closeButton,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "children", "innerRef", "closeButton"]);

  var _useContext = useContext(Context),
      close = _useContext.close; //render


  var classes = classNames('toast-header', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }), children, closeButton && /*#__PURE__*/React.createElement(CButtonClose, {
    className: "mfs-auto",
    onClick: close
  }));
};

CToastHeader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  closeButton: PropTypes.bool
};
CToastHeader.defaultProps = {
  closeButton: true
};
export default CToastHeader;