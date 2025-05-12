import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var Context = /*#__PURE__*/React.createContext({}); //component - CoreUI / CCarousel

var CCarousel = function CCarousel(props) {
  var className = props.className,
      innerRef = props.innerRef,
      autoSlide = props.autoSlide,
      activeIndex = props.activeIndex,
      animate = props.animate,
      onSlideChange = props.onSlideChange,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "autoSlide", "activeIndex", "animate", "onSlideChange"]);

  var _useState = useState([null, activeIndex]),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = useState(null),
      itemNumber = _useState2[0],
      setItemNumber = _useState2[1];

  var _useState3 = useState(),
      animating = _useState3[0],
      setAnimating = _useState3[1];

  useEffect(function () {
    setState([state[1], activeIndex]);
  }, [activeIndex]);
  var timeout = useRef();

  var setNext = function setNext() {
    reset();

    if (autoSlide) {
      timeout.current = setTimeout(function () {
        return nextItem();
      }, autoSlide);
    }
  };

  var reset = function reset() {
    return clearTimeout(timeout.current);
  };

  var nextItem = function nextItem() {
    setState([state[1], itemNumber === state[1] + 1 ? 0 : state[1] + 1, 'next']);
  };

  useEffect(function () {
    onSlideChange && onSlideChange(state[1]);
    setNext();
    return function () {
      return reset();
    };
  }, [state]);
  var classes = classNames('carousel', className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    onMouseEnter: reset,
    onMouseLeave: setNext
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      state: state,
      setState: setState,
      animate: animate,
      itemNumber: itemNumber,
      setItemNumber: setItemNumber,
      animating: animating,
      setAnimating: setAnimating
    }
  }, props.children));
};

CCarousel.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.array,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  activeIndex: PropTypes.number,
  autoSlide: PropTypes.number,
  animate: PropTypes.bool,
  onSlideChange: PropTypes.func
};
CCarousel.defaultProps = {
  activeIndex: 0
};
export default CCarousel;