import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Context } from './CCarousel'; //component - CoreUI / CCarouselIndicators

var CCarouselIndicators = function CCarouselIndicators(props) {
  var className = props.className,
      innerRef = props.innerRef,
      indicatorsClass = props.indicatorsClass,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "indicatorsClass"]);

  var _useContext = useContext(Context),
      itemNumber = _useContext.itemNumber,
      state = _useContext.state,
      setState = _useContext.setState,
      animating = _useContext.animating; //render


  var listClasses = classNames(indicatorsClass, className);
  var indicators = Array.from({
    length: itemNumber
  }, function (_, i) {
    return i;
  }).map(function (key) {
    return /*#__PURE__*/React.createElement("li", {
      key: "indicator" + key,
      onClick: function onClick() {
        !animating && key !== state[1] && setState([state[1], key]);
      },
      className: state[1] === key ? 'active' : ''
    });
  });
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: listClasses
  }, attributes, {
    ref: innerRef
  }), indicators);
};

CCarouselIndicators.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  indicatorsClass: PropTypes.string
};
CCarouselIndicators.defaultProps = {
  indicatorsClass: 'carousel-indicators'
};
export default CCarouselIndicators;