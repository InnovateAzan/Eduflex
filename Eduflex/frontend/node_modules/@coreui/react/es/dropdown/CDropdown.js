import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js';
export var Context = /*#__PURE__*/React.createContext({}); //component - CoreUI / CDropdown

var CDropdown = function CDropdown(props) {
  var className = props.className,
      tag = props.tag,
      innerRef = props.innerRef,
      inNav = props.inNav,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "innerRef", "inNav"]);

  var _useState = useState(),
      reference = _useState[0],
      setReference = _useState[1];

  var _useState2 = useState(),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(),
      split = _useState3[0],
      setSplit = _useState3[1];

  var _useState4 = useState(''),
      placement = _useState4[0],
      setPlacement = _useState4[1];

  var carretClass = placement.includes('top') ? 'dropup' : placement.includes('right') ? 'dropright' : placement.includes('left') ? 'dropleft' : 'dropdown';
  var Tag = tag || (inNav ? 'li' : 'div');
  var classes = classNames(className, carretClass, {
    'nav-item': inNav,
    'btn-group': split,
    'show': isOpen
  });
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      reference: reference,
      setReference: setReference,
      inNav: inNav,
      setSplit: setSplit,
      setPlacement: setPlacement
    }
  }, /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  })));
};

CDropdown.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  inNav: PropTypes.bool
};
export default CDropdown;