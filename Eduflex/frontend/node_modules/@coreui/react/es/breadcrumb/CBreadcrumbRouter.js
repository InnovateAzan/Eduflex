import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CBreadcrumb, CBreadcrumbItem } from '../index';
import { Link, useLocation, matchPath } from 'react-router-dom'; //component - CoreUI / CBreadcrumbRouter

var getPaths = function getPaths(pathname) {
  var paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + "/" + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var CBreadcrumbRouteItem = function CBreadcrumbRouteItem(_ref, fullCurrPath) {
  var name = _ref.name,
      currPath = _ref.currPath;

  if (currPath === fullCurrPath) {
    return /*#__PURE__*/React.createElement(CBreadcrumbItem, {
      key: currPath,
      active: true
    }, name);
  } else {
    return /*#__PURE__*/React.createElement(CBreadcrumbItem, {
      key: currPath
    }, /*#__PURE__*/React.createElement(Link, {
      to: currPath
    }, name));
  }
};

var CBreadcrumbRouter = function CBreadcrumbRouter(props) {
  var className = props.className,
      innerRef = props.innerRef,
      routes = props.routes,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "innerRef", "routes"]);

  var items = null;

  if (routes) {
    var currPath = useLocation().pathname;
    var paths = getPaths(currPath);
    var currRoutes = paths.map(function (currPath) {
      var route = routes.find(function (route) {
        return matchPath(currPath, {
          path: route.path,
          exact: route.exact
        });
      });
      return _objectSpread(_objectSpread({}, route), {}, {
        currPath: currPath
      });
    }).filter(function (route) {
      return route && route.name;
    });
    items = currRoutes.map(function (route) {
      return CBreadcrumbRouteItem(route, currPath);
    });
  } //render


  var classes = classNames(className);
  return /*#__PURE__*/React.createElement(CBreadcrumb, _extends({
    className: classes
  }, attributes, {
    ref: innerRef
  }), items);
};

CBreadcrumbRouter.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array
};
export default CBreadcrumbRouter;