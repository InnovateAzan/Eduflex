import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CButtonToolbar

var CButtonToolbar = function CButtonToolbar(props) {
  var _classNames;

  var className = props.className,
      innerRef = props.innerRef,
      justify = props.justify,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "justify"]); //render


  var classes = classNames(className, 'btn-toolbar', (_classNames = {}, _classNames["justify-content-" + justify] = justify, _classNames));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    role: "toolbar",
    "aria-label": "toolbar"
  }, attributes, {
    ref: innerRef
  }));
};

CButtonToolbar.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  role: PropTypes.string,
  justify: PropTypes.oneOf(['', 'start', 'end', 'between', 'center'])
};
export default CButtonToolbar;