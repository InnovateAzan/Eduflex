import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from './CCarousel'; //component - CoreUI / CCarouselControl

var CCarouselControl = function CCarouselControl(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      direction = props.direction,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "children", "innerRef", "direction"]);

  var _useContext = useContext(Context),
      state = _useContext.state,
      setState = _useContext.setState,
      itemNumber = _useContext.itemNumber,
      animating = _useContext.animating;

  var onClick = function onClick() {
    if (animating) {
      return;
    }

    var newIdx;

    if (direction === 'next') {
      newIdx = itemNumber === state[1] + 1 ? 0 : state[1] + 1;
    } else {
      newIdx = state[1] === 0 ? itemNumber - 1 : state[1] - 1;
    }

    setState([state[1], newIdx, direction]);
  }; //render


  var anchorClasses = classNames("carousel-control-" + direction, className);
  return /*#__PURE__*/React.createElement("a", _extends({
    className: anchorClasses
  }, attributes, {
    onClick: onClick,
    ref: innerRef
  }), children || /*#__PURE__*/React.createElement("span", {
    className: "carousel-control-" + direction + "-icon",
    "aria-label": direction
  }));
};

CCarouselControl.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  direction: PropTypes.oneOf(['prev', 'next']).isRequired
};
export default CCarouselControl;