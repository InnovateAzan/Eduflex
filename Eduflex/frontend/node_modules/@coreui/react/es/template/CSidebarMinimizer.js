import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from './CSidebar'; //component - CoreUI / CSidebarMinimizer

var CSidebarMinimizer = function CSidebarMinimizer(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef"]);

  var _useContext = useContext(Context),
      toggleMinimize = _useContext.toggleMinimize; //render


  var classes = classNames('c-sidebar-minimizer', className);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    type: "button"
  }, attributes, {
    onClick: toggleMinimize,
    ref: innerRef
  }));
};

CSidebarMinimizer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CSidebarMinimizer;