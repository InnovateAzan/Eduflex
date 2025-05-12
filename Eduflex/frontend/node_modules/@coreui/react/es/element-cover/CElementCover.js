import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, createRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSpinner from '../spinner/CSpinner'; //component - CoreUI / CElementCover

var CElementCover = function CElementCover(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      boundaries = props.boundaries,
      opacity = props.opacity,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "children", "innerRef", "boundaries", "opacity"]);

  var _useState = useState({}),
      customBoundaries = _useState[0],
      setCustomBoundaries = _useState[1];

  var ref = /*#__PURE__*/createRef(null);
  innerRef && innerRef(ref);

  var getCustomBoundaries = function getCustomBoundaries() {
    if (!ref || !ref.current || !boundaries) {
      return {};
    }

    var parent = ref.current.parentElement;
    var parentCoords = parent.getBoundingClientRect();
    var customBoundaries = {};
    boundaries.forEach(function (_ref) {
      var sides = _ref.sides,
          query = _ref.query;
      var element = parent.querySelector(query);

      if (!element || !sides) {
        return;
      }

      var coords = element.getBoundingClientRect();
      sides.forEach(function (side) {
        var sideMargin = Math.abs(coords[side] - parentCoords[side]);
        customBoundaries[side] = sideMargin + 'px';
      });
    });
    return customBoundaries;
  };

  useEffect(function () {
    setCustomBoundaries(getCustomBoundaries());
  }, [JSON.stringify(getCustomBoundaries())]); //render

  var classes = classNames(className);

  var containerCoords = _objectSpread({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, customBoundaries);

  var coverStyles = _objectSpread(_objectSpread({}, containerCoords), {}, {
    position: 'absolute',
    backgroundColor: "rgb(255,255,255," + opacity + ")"
  });

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    style: coverStyles
  }, attributes, {
    ref: ref
  }), children || /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(CSpinner, {
    grow: true,
    size: "lg",
    color: "primary"
  })));
};

CElementCover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  boundaries: PropTypes.array,
  opacity: PropTypes.number
};
CElementCover.defaultProps = {
  opacity: 0.4
};
export default CElementCover;