import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
import CButton from '../button/CButton';
import CLink from '../link/CLink';
import { Context } from './CDropdown'; //component - CoreUI / CDropdownToggle

var CDropdownToggle = function CDropdownToggle(props) {
  var _togglerAttrs;

  var className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      caret = props.caret,
      split = props.split,
      tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "onClick", "caret", "split", "tag"]);

  var _useContext = useContext(Context),
      reference = _useContext.reference,
      setReference = _useContext.setReference,
      isOpen = _useContext.isOpen,
      setIsOpen = _useContext.setIsOpen,
      inNav = _useContext.inNav,
      setSplit = _useContext.setSplit;

  innerRef && innerRef(reference);
  useEffect(function () {
    setSplit(split);
  });

  var click = function click(e) {
    if (props.disabled) {
      return;
    }

    onClick && onClick(e);
    setIsOpen(!isOpen);
  };

  var Tag = tag || (inNav ? CLink : CButton);
  var classes = classNames(className, {
    'dropdown-toggle': caret && !split,
    'nav-link': inNav
  });
  var togglerAttrs = (_togglerAttrs = {
    onClick: click,
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'true',
    'aria-label': 'Dropdown toggle'
  }, _togglerAttrs["" + (tag && typeof tag === 'string' ? 'ref' : 'innerRef')] = setReference, _togglerAttrs['role'] = Tag === CButton ? null : 'button', _togglerAttrs);

  if (split) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CButton, attributes, props.children), /*#__PURE__*/React.createElement(CButton, _extends({
      className: "dropdown-toggle dropdown-toggle-split"
    }, togglerAttrs, attributes), ''));
  } else {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes
    }, togglerAttrs, attributes));
  }
};

CDropdownToggle.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  caret: PropTypes.bool,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  disabled: PropTypes.bool
};
CDropdownToggle.defaultProps = {
  caret: true
};
export default CDropdownToggle;