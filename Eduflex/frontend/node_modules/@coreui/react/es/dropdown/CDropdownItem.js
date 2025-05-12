import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import { Context } from './CDropdown';
import CLink from '../link/CLink'; //component - CoreUI / CDropdownItem

var CDropdownItem = function CDropdownItem(props) {
  var _ref;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      color = props.color,
      divider = props.divider,
      header = props.header,
      active = props.active,
      disabled = props.disabled,
      rest = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "onClick", "color", "divider", "header", "active", "disabled"]);

  var _useContext = useContext(Context),
      setIsOpen = _useContext.setIsOpen;

  var isItem = !(header || divider);

  var click = function click(e) {
    if (disabled) {
      return;
    }

    onClick && onClick(e);
    isItem && setIsOpen(false);
  }; //render


  var tabIndex = isItem && !disabled ? null : -1;
  var role = tabIndex === null ? 'menuitem' : undefined;
  var Tag = tag || (!isItem ? 'div' : CLink);
  var ref = (_ref = {}, _ref["" + (typeof Tag === 'string' ? 'ref' : 'innerRef')] = innerRef, _ref);
  var classes = classNames(className, 'dropdown-' + (header ? 'header' : divider ? 'divider' : 'item'), {
    active: active
  }, color && 'bg-' + color, disabled && Tag !== CLink && 'disabled');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes,
    tabIndex: tabIndex,
    role: role,
    disabled: disabled
  }, rest, {
    onClick: click
  }, ref));
};

CDropdownItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool
};
export default CDropdownItem;