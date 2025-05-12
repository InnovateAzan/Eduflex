import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from './helper.js';
import CLink from '../link/CLink'; //component - CoreUI / CBrand

var CBrand = function CBrand(props) {
  var _ref;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef"]); //render


  var classes = classNames(className);
  var Tag = attributes.to || attributes.href ? CLink : tag;
  var ref = (_ref = {}, _ref["" + (typeof Tag === 'string' ? 'ref' : 'innerRef')] = innerRef, _ref);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, ref));
};

CBrand.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
CBrand.defaultProps = {
  tag: 'div'
};
export default CBrand;