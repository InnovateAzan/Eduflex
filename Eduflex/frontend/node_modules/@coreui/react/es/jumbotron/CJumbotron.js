import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CJumbotron

var CJumbotron = function CJumbotron(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "fluid"]); //render


  var classes = classNames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CJumbotron.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fluid: PropTypes.bool
};
CJumbotron.defaultProps = {
  tag: 'div'
};
export default CJumbotron;