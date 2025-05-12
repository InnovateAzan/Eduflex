import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import CLink from '../link/CLink'; //component - CoreUI / CListGroupItem

var CListGroupItem = function CListGroupItem(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      accent = props.accent,
      rest = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "active", "disabled", "action", "color", "accent"]); //render


  var classes = classNames(className, 'list-group-item', (_classNames = {
    'list-group-item-action': action || rest.href || rest.to || Tag == 'button',
    active: active,
    disabled: disabled
  }, _classNames["list-group-item-" + color] = color, _classNames["list-group-item-accent-" + accent] = accent, _classNames));

  if (props.href || props.to) {
    return /*#__PURE__*/React.createElement(CLink, _extends({}, rest, {
      className: classes,
      innerRef: innerRef
    }));
  } else {
    return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
      className: classes,
      ref: innerRef
    }));
  }
};

CListGroupItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  accent: PropTypes.string,
  action: PropTypes.bool
};
CListGroupItem.defaultProps = {
  tag: 'li'
};
export default CListGroupItem;