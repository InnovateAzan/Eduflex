import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import CLink from '../link/CLink'; //component - CoreUI / CBadge

var CBadge = function CBadge(props) {
  var _classNames, _ref;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      shape = props.shape,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "color", "shape"]); // render


  var classes = classNames(className, 'badge', (_classNames = {}, _classNames["badge-" + color] = color, _classNames["badge-" + shape] = shape, _classNames));
  var Tag = attributes.to || attributes.href ? CLink : tag;
  var ref = (_ref = {}, _ref["" + (typeof Tag === 'string' ? 'ref' : 'innerRef')] = innerRef, _ref);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, ref));
};

CBadge.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  shape: PropTypes.oneOf(['', 'pill'])
};
CBadge.defaultProps = {
  tag: 'span'
};
export default CBadge;