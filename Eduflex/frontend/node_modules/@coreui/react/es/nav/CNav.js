import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CNav

var CNav = function CNav(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      variant = props.variant,
      vertical = props.vertical,
      justified = props.justified,
      fill = props.fill,
      inCard = props.inCard,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "variant", "vertical", "justified", "fill", "inCard"]);

  var verticalClass = "flex" + (vertical === true ? '' : "-" + vertical) + "-column"; //render

  var classes = classNames('nav', vertical && verticalClass, (_classNames = {}, _classNames["nav-" + variant] = variant, _classNames['nav-justified'] = justified, _classNames['nav-fill'] = fill, _classNames["card-header-" + variant] = inCard && variant, _classNames), className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNav.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  variant: PropTypes.oneOf(['', 'tabs', 'pills']),
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  inCard: PropTypes.bool
};
CNav.defaultProps = {
  tag: 'ul'
};
export default CNav;