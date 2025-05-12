import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'; //component - CoreUI / CListGroup

var CListGroup = function CListGroup(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      horizontal = props.horizontal,
      flush = props.flush,
      accent = props.accent,
      attributes = _objectWithoutPropertiesLoose(props, ["tag", "className", "innerRef", "horizontal", "flush", "accent"]); // render


  var classes = classNames(className, 'list-group', (_classNames = {}, _classNames["list-group-horizontal-" + horizontal] = horizontal, _classNames['list-group-flush'] = flush, _classNames['list-group-accent'] = accent, _classNames));
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes,
    role: "list-items"
  }, attributes, {
    ref: innerRef
  }));
};

CListGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  flush: PropTypes.bool,
  horizontal: PropTypes.string,
  accent: PropTypes.bool
};
CListGroup.defaultProps = {
  tag: 'ul'
};
export default CListGroup;