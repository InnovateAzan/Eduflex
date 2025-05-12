import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; //component - CoreUI / CInput

var commonPropTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  valid: PropTypes.bool,
  invalid: PropTypes.bool
};

var CInput = function CInput(props) {
  var className = props.className,
      innerRef = props.innerRef,
      type = props.type,
      valid = props.valid,
      invalid = props.invalid,
      plaintext = props.plaintext,
      size = props.size,
      sizeHtml = props.sizeHtml,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "type", "valid", "invalid", "plaintext", "size", "sizeHtml"]); // render


  var classes = classNames(plaintext ? 'form-control-plaintext' : 'form-control', size && "form-control-" + size, invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: classes,
    type: type
  }, attributes, {
    size: sizeHtml,
    ref: innerRef
  }));
};

CInput.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  plaintext: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  sizeHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
CInput.defaultProps = {
  type: 'text'
};

var CTextarea = function CTextarea(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      plaintext = props.plaintext,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "valid", "invalid", "plaintext", "size"]); // render


  var classes = classNames(plaintext ? 'form-control-plaintext' : 'form-control', size && "form-control-" + size, invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CTextarea.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  plaintext: PropTypes.bool,
  size: PropTypes.string
});

var CInputFile = function CInputFile(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      custom = props.custom,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "valid", "invalid", "custom"]); // render


  var classes = classNames(custom ? 'custom-file-input' : 'form-control-file', invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: classes
  }, attributes, {
    type: "file",
    ref: innerRef
  }));
};

CInputFile.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  custom: PropTypes.bool
});

var CInputCheckbox = function CInputCheckbox(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      custom = props.custom,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "valid", "invalid", "custom"]); // render


  var classes = classNames(custom ? 'custom-control-input' : 'form-check-input', invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: classes,
    type: "checkbox"
  }, attributes, {
    ref: innerRef
  }));
};

CInputCheckbox.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  custom: PropTypes.bool
});

var CInputRadio = function CInputRadio(props) {
  return /*#__PURE__*/React.createElement(CInputCheckbox, _extends({}, props, {
    type: "radio"
  }));
};

var CSelect = function CSelect(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      size = props.size,
      sizeHtml = props.sizeHtml,
      custom = props.custom,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "valid", "invalid", "size", "sizeHtml", "custom"]); // render


  var baseClass = custom ? 'custom-select' : 'form-control';
  var classes = classNames(baseClass, size && baseClass + "-" + size, invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React.createElement("select", _extends({
    className: classes
  }, attributes, {
    size: sizeHtml,
    ref: innerRef
  }));
};

CSelect.propTypes = _objectSpread(_objectSpread({}, commonPropTypes), {}, {
  size: PropTypes.string,
  sizeHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
export { CInput, CTextarea, CInputFile, CInputCheckbox, CInputRadio, CSelect };