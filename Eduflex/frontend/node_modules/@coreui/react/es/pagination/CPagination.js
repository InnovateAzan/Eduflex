import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CLink from '../link/CLink'; //component - CoreUI / CPagination

var CPagination = function CPagination(props) {
  var className = props.className,
      innerRef = props.innerRef,
      addListClass = props.addListClass,
      activePage = props.activePage,
      size = props.size,
      firstButton = props.firstButton,
      previousButton = props.previousButton,
      nextButton = props.nextButton,
      lastButton = props.lastButton,
      dots = props.dots,
      arrows = props.arrows,
      doubleArrows = props.doubleArrows,
      limit = props.limit,
      pages = props.pages,
      align = props.align,
      onActivePageChange = props.onActivePageChange,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "addListClass", "activePage", "size", "firstButton", "previousButton", "nextButton", "lastButton", "dots", "arrows", "doubleArrows", "limit", "pages", "align", "onActivePageChange"]);

  useEffect(function () {
    pages < activePage && onActivePageChange(pages, true);
  }, [pages]); //render

  var listClasses = classNames('pagination', size && 'pagination-' + size, 'justify-content-' + align, addListClass);
  var backArrowsClasses = classNames('page-item', activePage === 1 && 'disabled');
  var nextArrowsClasses = classNames('page-item', activePage === pages && 'disabled');

  var showDots = function () {
    return dots && limit > 4 && limit < pages;
  }();

  var maxPrevItems = function () {
    return Math.floor((limit - 1) / 2);
  }();

  var maxNextItems = function () {
    return Math.ceil((limit - 1) / 2);
  }();

  var beforeDots = function () {
    return showDots && activePage > maxPrevItems + 1;
  }();

  var afterDots = function () {
    return showDots && activePage < pages - maxNextItems;
  }();

  var computedLimit = function () {
    return limit - afterDots - beforeDots;
  }();

  var range = function () {
    return activePage + maxNextItems;
  }();

  var lastItem = function () {
    return range >= pages ? pages : range - afterDots;
  }();

  var itemsAmount = function () {
    return pages < computedLimit ? pages : computedLimit;
  }();

  var items = function () {
    if (activePage - maxPrevItems <= 1) {
      return Array.from({
        length: itemsAmount
      }, function (v, i) {
        return i + 1;
      });
    } else {
      return Array.from({
        length: itemsAmount
      }, function (v, i) {
        return lastItem - i;
      }).reverse();
    }
  }();

  var setPage = function setPage(number) {
    if (number !== activePage) {
      onActivePageChange(number);
    }
  };

  return /*#__PURE__*/React.createElement("nav", _extends({
    className: className,
    "aria-label": "pagination"
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React.createElement("ul", {
    className: listClasses
  }, doubleArrows && /*#__PURE__*/React.createElement("li", {
    className: backArrowsClasses
  }, /*#__PURE__*/React.createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(1);
    },
    "aria-label": "Go to first page",
    "aria-disabled": activePage === 1,
    disabled: activePage === 1
  }, firstButton)), arrows && /*#__PURE__*/React.createElement("li", {
    className: backArrowsClasses
  }, /*#__PURE__*/React.createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(activePage - 1);
    },
    "aria-label": "Go to previous page",
    "aria-disabled": activePage === 1,
    disabled: activePage === 1
  }, previousButton)), beforeDots && /*#__PURE__*/React.createElement("li", {
    role: "separator",
    className: "page-item disabled"
  }, /*#__PURE__*/React.createElement("span", {
    className: "page-link"
  }, "\u2026")), items.map(function (i) {
    return /*#__PURE__*/React.createElement("li", {
      className: (activePage === i ? 'active' : '') + " page-item",
      key: i
    }, /*#__PURE__*/React.createElement(CLink, {
      className: "page-link",
      onClick: function onClick(e) {
        return setPage(i, e);
      },
      "aria-label": activePage === i ? "Current page " + i : "Go to page " + i
    }, i));
  }), afterDots && /*#__PURE__*/React.createElement("li", {
    role: "separator",
    className: "page-item disabled"
  }, /*#__PURE__*/React.createElement("span", {
    className: "page-link"
  }, "\u2026")), arrows && /*#__PURE__*/React.createElement("li", {
    className: nextArrowsClasses
  }, /*#__PURE__*/React.createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(activePage + 1);
    },
    "aria-label": "Go to next page",
    "aria-disabled": activePage === pages,
    disabled: activePage === pages
  }, nextButton)), doubleArrows && /*#__PURE__*/React.createElement("li", {
    className: nextArrowsClasses
  }, /*#__PURE__*/React.createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(pages);
    },
    "aria-label": "Go to last page",
    "aria-disabled": activePage === pages,
    disabled: activePage === pages
  }, lastButton))));
};

CPagination.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  activePage: PropTypes.number,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  doubleArrows: PropTypes.bool,
  firstButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  previousButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  nextButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  lastButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  addListClass: PropTypes.string,
  limit: PropTypes.number,
  pages: PropTypes.number,
  onActivePageChange: PropTypes.func.isRequired
};
CPagination.defaultProps = {
  activePage: 1,
  dots: true,
  arrows: true,
  doubleArrows: true,
  limit: 5,
  firstButton: /*#__PURE__*/React.createElement(React.Fragment, null, "\xAB"),
  previousButton: /*#__PURE__*/React.createElement(React.Fragment, null, "\u2039"),
  nextButton: /*#__PURE__*/React.createElement(React.Fragment, null, "\u203A"),
  lastButton: /*#__PURE__*/React.createElement(React.Fragment, null, "\xBB"),
  align: 'start',
  pages: 10
};
export default CPagination;