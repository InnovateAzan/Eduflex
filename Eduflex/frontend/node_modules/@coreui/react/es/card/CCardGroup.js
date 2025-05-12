import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CCardGroup

var CCardGroup = function CCardGroup(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      deck = props.deck,
      columns = props.columns,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "deck", "columns"]); //render


  var classes = classNames("card-" + (columns ? 'columns' : deck ? 'deck' : 'group'), className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  deck: PropTypes.bool,
  columns: PropTypes.bool
};
CCardGroup.defaultProps = {
  tag: 'div'
};
export default CCardGroup;