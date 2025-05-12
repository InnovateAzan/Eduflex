import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useMemo } from 'react';
import PropTypes from 'prop-types'; //component - CoreUI / CCreateElement

var CCreateElement = function CCreateElement(_ref) {
  var items = _ref.items,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;

  var renderItem = function renderItem(item, i) {
    var _tag = item._tag,
        _children = item._children,
        rest = _objectWithoutPropertiesLoose(item, ["_tag", "_children"]);

    var Tag = components[_tag] || _tag;
    var children = _children ? _children.map(function (child, i) {
      return typeof child === 'object' ? renderItem(child, i) : child;
    }) : '';
    return /*#__PURE__*/React.createElement(Tag, _extends({
      key: Tag + i
    }, rest), children);
  };

  var generatedItems = useMemo(function () {
    return items && items.map(function (item, i) {
      return renderItem(item, i);
    });
  }, [JSON.stringify(items)]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, generatedItems);
};

CCreateElement.propTypes = {
  items: PropTypes.array.isRequired,
  components: PropTypes.object
};
export default CCreateElement;