import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import CImg from '../image/CImg'; //component - CoreUI / CCardImg

var CCardImg = function CCardImg(props) {
  var variant = props.variant,
      rest = _objectWithoutPropertiesLoose(props, ["variant"]);

  var classSuffix = variant !== 'full' ? "-" + variant : '';
  return /*#__PURE__*/React.createElement(CImg, _extends({}, rest, {
    className: ["card-img" + classSuffix, rest.className]
  }));
};

CCardImg.propTypes = {
  variant: PropTypes.oneOf(['', 'top', 'bottom', 'full'])
};
CCardImg.defaultProps = {
  variant: 'full'
};
export default CCardImg;