import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Context } from './CCarousel'; //component - CoreUI / CCarouselItem

var getIndex = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getDirection = function getDirection(state) {
  if (state[2]) {
    return state[2] === 'next' ? 'right' : 'left';
  } else {
    return state[1] > state[0] ? 'right' : 'left';
  }
};

var CCarouselItem = function CCarouselItem(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["children", "className", "innerRef"]);

  var _useContext = useContext(Context),
      animate = _useContext.animate,
      state = _useContext.state,
      itemNumber = _useContext.itemNumber,
      setItemNumber = _useContext.setItemNumber,
      animating = _useContext.animating,
      setAnimating = _useContext.setAnimating;

  var ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);

  var _useState = useState(),
      isIn = _useState[0],
      setIsIn = _useState[1];

  useEffect(function () {
    if (!itemNumber) {
      setItemNumber(ref.current.parentNode.children.length);
    }

    setIsIn(state[1] === getIndex(ref.current));
  }, [state]);

  var onEnter = function onEnter() {
    setAnimating(false);
  };

  var onEntering = function onEntering() {
    /* eslint-disable no-unused-vars */
    var offsetHeight = ref.current.offsetHeight;
    setAnimating(true);
    /* eslint-enable no-unused-vars */
  };

  var onExit = function onExit() {
    setAnimating(false);
  };

  var onExiting = function onExiting() {
    setAnimating(true);
  };

  var onExited = function onExited() {
    setAnimating(false);
  }; // const nodeRef = React.useRef()
  //render


  if (!animate || state[0] === null) {
    var itemClasses = classNames('carousel-item', isIn && 'active', className);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: itemClasses,
      ref: ref
    }, attributes), children);
  }

  return /*#__PURE__*/React.createElement(Transition, {
    timeout: 600,
    in: isIn,
    onEnter: onEnter,
    onEntering: onEntering,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    nodeRef: ref
  }, function (status) {
    var direction = getDirection(state);
    var isActive = status === 'entered' || status === 'exiting';
    var directionClassName = (status === 'entering' || status === 'exiting') && animating && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
    var orderClassName = status === 'entering' && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
    var itemClasses = classNames('carousel-item', isActive && 'active', directionClassName, orderClassName, className);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: itemClasses,
      ref: ref
    }, attributes), children);
  });
};

CCarouselItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
export default CCarouselItem;