import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CTabContent

export var Context = /*#__PURE__*/React.createContext();

var CTabContent = function CTabContent(props) {
  var className = props.className,
      innerRef = props.innerRef,
      fade = props.fade,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "fade"]); // render


  var classes = classNames('tab-content', className);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: fade
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  })));
};

CTabContent.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fade: PropTypes.bool
};
CTabContent.defaultProps = {
  fade: true
};
export default CTabContent;