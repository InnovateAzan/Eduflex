import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pickByKeys, omitByKeys } from '@coreui/utils/src';
import { TransitionPropTypeKeys, tagPropType } from '../utils/helper.js';
import { Transition } from 'react-transition-group'; //component - CoreUI / CFade

var CFade = function CFade(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      rest = _objectWithoutPropertiesLoose(props, ["tag", "className", "children", "innerRef", "baseClass", "baseClassActive"]); //render


  var transitionProps = pickByKeys(rest, TransitionPropTypeKeys);
  var childProps = omitByKeys(rest, TransitionPropTypeKeys);
  var ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);
  return /*#__PURE__*/React.createElement(Transition, _extends({}, transitionProps, {
    nodeRef: ref
  }), function (status) {
    var isActive = status === 'entered';
    var classes = classNames(className, baseClass, isActive && baseClassActive);
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: ref
    }), children);
  });
};

CFade.propTypes = {
  tag: tagPropType,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string
};
CFade.defaultProps = {
  tag: 'div',
  //
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: 150,
  appear: true,
  enter: true,
  exit: true,
  in: true
};
export default CFade;