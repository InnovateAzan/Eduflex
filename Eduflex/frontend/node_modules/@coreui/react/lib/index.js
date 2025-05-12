'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactRouterDom = require('react-router-dom');
var server = require('react-dom/server');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement$2=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement$2,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

const omitByKeys = (originalObject, keys) => {
  var newObj = {};
  var objKeys = Object.keys(originalObject);
  for (var i = 0; i < objKeys.length; i++) {
    !keys.includes(objKeys[i]) && (newObj[objKeys[i]] = originalObject[objKeys[i]]);
  }
  return newObj
};

const pickByKeys = (originalObject, keys) => {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]];
  }
  return newObj
};

// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var CFadeProps = [].concat(TransitionPropTypeKeys, ['baseClass', 'baseClassActive', 'tag']);
propTypes.oneOfType([propTypes.string, propTypes.func, DOMElement, propTypes.shape({
  current: propTypes.any
})]);
var tagPropType = propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
  $$typeof: propTypes.symbol,
  render: propTypes.func
}), propTypes.arrayOf(propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
  $$typeof: propTypes.symbol,
  render: propTypes.func
})]))]);
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.shape({
  enter: propTypes.number,
  exit: propTypes.number,
  appear: propTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.string, propTypes.shape({
  enter: propTypes.string,
  exit: propTypes.string,
  active: propTypes.string
}), propTypes.shape({
  enter: propTypes.string,
  enterDone: propTypes.string,
  enterActive: propTypes.string,
  exit: propTypes.string,
  exitDone: propTypes.string,
  exitActive: propTypes.string
})]) : null;

var TransitionGroupContext = React__default['default'].createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default['default'].findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default['default'].findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default['default'].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default['default'].cloneElement(React__default['default'].Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default['default'].Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: propTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: propTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var CFade = function CFade(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      rest = _objectWithoutProperties(props, ["tag", "className", "children", "innerRef", "baseClass", "baseClassActive"]); //render


  var transitionProps = pickByKeys(rest, TransitionPropTypeKeys);
  var childProps = omitByKeys(rest, TransitionPropTypeKeys);
  var ref = _typeof(innerRef) === 'object' ? innerRef : React.useRef();
  typeof innerRef === 'function' && innerRef(ref);
  return /*#__PURE__*/React__default['default'].createElement(Transition, _extends$1({}, transitionProps, {
    nodeRef: ref
  }), function (status) {
    var isActive = status === 'entered';
    var classes = classnames(className, baseClass, isActive && baseClassActive);
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
      className: classes
    }, childProps, {
      ref: ref
    }), children);
  });
};

CFade.propTypes = {
  tag: tagPropType,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  baseClass: propTypes.string,
  baseClassActive: propTypes.string
};
CFade.defaultProps = {
  tag: 'div',
  //
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: 150,
  appear: true,
  enter: true,
  exit: true,
  in: true
};

var CButtonClose = function CButtonClose(props) {
  var children = props.children,
      className = props.className,
      buttonClass = props.buttonClass,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["children", "className", "buttonClass", "innerRef"]); //render


  var classes = classnames(buttonClass, className);
  return /*#__PURE__*/React__default['default'].createElement("button", _extends$1({
    className: classes,
    "aria-label": "Close"
  }, attributes, {
    ref: innerRef
  }), children || String.fromCharCode(215));
};

CButtonClose.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  buttonClass: propTypes.string,
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CButtonClose.defaultProps = {
  buttonClass: 'close'
};

var CAlert = function CAlert(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      onShowChange = props.onShowChange,
      closeButton = props.closeButton,
      color = props.color,
      fade = props.fade,
      show = props.show,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "onShowChange", "closeButton", "color", "fade", "show"]); //render


  var classes = classnames(className, 'alert', (_classNames = {}, _defineProperty(_classNames, "alert-".concat(color), color), _defineProperty(_classNames, 'alert-dismissible', closeButton), _classNames));
  var alertTransition = {
    baseClass: fade ? CFade.baseClass : '',
    timeout: fade ? CFade.timeout : 0,
    unmountOnExit: true
  };

  var _useState = React.useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    setIsOpen(show);
  }, [show]);
  var timeout = React.useRef();
  React.useEffect(function () {
    onShowChange && onShowChange(isOpen);
    clearTimeout(timeout.current);

    if (typeof isOpen === 'number' && isOpen > 0) {
      timeout.current = setTimeout(function () {
        setIsOpen(isOpen - 1);
      }, 1000);
    }

    return function () {
      return clearTimeout(timeout.current);
    };
  }, [isOpen]);
  var attrs = omitByKeys(attributes, CFadeProps);
  return /*#__PURE__*/React__default['default'].createElement(CFade, _extends$1({}, alertTransition, {
    className: classes,
    in: Boolean(isOpen),
    role: "alert"
  }, attrs, {
    innerRef: innerRef
  }), children, closeButton && /*#__PURE__*/React__default['default'].createElement(CButtonClose, {
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }));
};

CAlert.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  onShowChange: propTypes.func,
  closeButton: propTypes.bool,
  color: propTypes.string,
  fade: propTypes.bool,
  show: propTypes.oneOfType([propTypes.bool, propTypes.number])
};
CAlert.defaultProps = {
  show: true,
  fade: true
};

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CLink = function CLink(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      href = props.href,
      onClick = props.onClick,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["className", "innerRef", "active", "href", "onClick", "disabled"]);

  var to = rest ? rest.to : null;

  var click = function click(e) {
    if (!href && !to || href === '#') {
      e.preventDefault();
    }

    !disabled && onClick && onClick(e);
  }; // render


  var classes = classnames(active && 'active', disabled && 'disabled', className);
  return to ? /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, _extends$1({}, rest, {
    className: classes,
    onClick: click,
    ref: innerRef
  })) : /*#__PURE__*/React__default['default'].createElement("a", _extends$1({
    href: href || '#',
    className: classes,
    rel: rest.target === '_blank' ? 'noopener norefferer' : null
  }, rest, {
    onClick: click,
    ref: innerRef
  }));
};

CLink.propTypes = _objectSpread$e(_objectSpread$e({
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  active: propTypes.bool,
  href: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool
}, reactRouterDom.NavLink.propTypes), {}, {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  to: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
}); // CLink.sortAttributes = (attributesToSort) => {

var CBadge = function CBadge(props) {
  var _classNames;

  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      shape = props.shape,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "shape"]); // render


  var classes = classnames(className, 'badge', (_classNames = {}, _defineProperty(_classNames, "badge-".concat(color), color), _defineProperty(_classNames, "badge-".concat(shape), shape), _classNames));
  var Tag = attributes.to || attributes.href ? CLink : tag;

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, ref));
};

CBadge.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string,
  shape: propTypes.oneOf(['', 'pill'])
};
CBadge.defaultProps = {
  tag: 'span'
};

var CButton = function CButton(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      disabled = props.disabled,
      active = props.active,
      block = props.block,
      color = props.color,
      size = props.size,
      pressed = props.pressed,
      shape = props.shape,
      variant = props.variant,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "onClick", "disabled", "active", "block", "color", "size", "pressed", "shape", "variant"]);

  var click = function click(e) {
    return !disabled && onClick && onClick(e);
  };

  var isLink = attributes.to || attributes.href; //render

  var classes = classnames(className, 'btn', variant || color ? "btn".concat(variant ? '-' + variant : '', "-").concat(color) : false, size ? "btn-".concat(size) : false, block ? 'btn-block' : false, shape ? "btn-".concat(shape) : false, pressed ? 'btn-pressed' : false, {
    'active': active && !isLink,
    'disabled': disabled && !isLink
  });

  if (isLink) {
    return /*#__PURE__*/React__default['default'].createElement(CLink, _extends$1({}, attributes, {
      active: active,
      disabled: disabled,
      className: classes,
      onClick: click,
      innerRef: innerRef
    }));
  } else {
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
      className: classes,
      type: "button",
      disabled: disabled
    }, attributes, {
      onClick: click,
      ref: innerRef
    }));
  }
};

CButton.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  active: propTypes.bool,
  block: propTypes.bool,
  shape: propTypes.string,
  variant: propTypes.oneOf(['', 'ghost', 'outline']),
  color: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  size: propTypes.string,
  pressed: propTypes.bool
};
CButton.defaultProps = {
  tag: 'button'
}; //export

var CButtonGroup = function CButtonGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      vertical = props.vertical,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "size", "vertical"]); //render


  var classes = classnames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes,
    role: "group"
  }, attributes, {
    ref: innerRef
  }));
};

CButtonGroup.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  size: propTypes.oneOf(['', 'sm', 'lg']),
  vertical: propTypes.bool
};

var CButtonToolbar = function CButtonToolbar(props) {
  var className = props.className,
      innerRef = props.innerRef,
      justify = props.justify,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "justify"]); //render


  var classes = classnames(className, 'btn-toolbar', _defineProperty({}, "justify-content-".concat(justify), justify));
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes,
    role: "toolbar",
    "aria-label": "toolbar"
  }, attributes, {
    ref: innerRef
  }));
};

CButtonToolbar.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  role: propTypes.string,
  justify: propTypes.oneOf(['', 'start', 'end', 'between', 'center'])
};

var CBreadcrumb = function CBreadcrumb(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]);

  var classes = classnames(className, 'breadcrumb'); //render

  return /*#__PURE__*/React__default['default'].createElement("ol", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CBreadcrumb.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getPaths = function getPaths(pathname) {
  var paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce(function (prev, curr) {
    var currPath = "".concat(prev, "/").concat(curr);
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var CBreadcrumbRouteItem = function CBreadcrumbRouteItem(_ref, fullCurrPath) {
  var name = _ref.name,
      currPath = _ref.currPath;

  if (currPath === fullCurrPath) {
    return /*#__PURE__*/React__default['default'].createElement(CBreadcrumbItem, {
      key: currPath,
      active: true
    }, name);
  } else {
    return /*#__PURE__*/React__default['default'].createElement(CBreadcrumbItem, {
      key: currPath
    }, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
      to: currPath
    }, name));
  }
};

var CBreadcrumbRouter = function CBreadcrumbRouter(props) {
  var className = props.className,
      innerRef = props.innerRef,
      routes = props.routes,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "routes"]);

  var items = null;

  if (routes) {
    var currPath = reactRouterDom.useLocation().pathname;
    var paths = getPaths(currPath);
    var currRoutes = paths.map(function (currPath) {
      var route = routes.find(function (route) {
        return reactRouterDom.matchPath(currPath, {
          path: route.path,
          exact: route.exact
        });
      });
      return _objectSpread$d(_objectSpread$d({}, route), {}, {
        currPath: currPath
      });
    }).filter(function (route) {
      return route && route.name;
    });
    items = currRoutes.map(function (route) {
      return CBreadcrumbRouteItem(route, currPath);
    });
  } //render


  var classes = classnames(className);
  return /*#__PURE__*/React__default['default'].createElement(CBreadcrumb, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }), items);
};

CBreadcrumbRouter.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  routes: propTypes.array
};

var CBreadcrumbItem = function CBreadcrumbItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "active"]); //render


  var classes = classnames(className, active ? 'active' : false, 'breadcrumb-item');
  return /*#__PURE__*/React__default['default'].createElement("li", _extends$1({
    className: classes,
    role: "presentation",
    "aria-current": active ? 'page' : undefined
  }, attributes, {
    ref: innerRef
  }));
};

CBreadcrumbItem.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  active: propTypes.bool
};

var CCallout = function CCallout(props) {
  var className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "color"]); //render


  var classes = classnames('c-callout', color ? 'c-callout-' + color : null, className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCallout.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string
};

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CCard = function CCard(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      accentColor = props.accentColor,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align", "accentColor"]); //render


  var classes = classnames(className, 'card', align ? "text-".concat(align) : false, textColor ? "text-".concat(textColor) : false, color ? "bg-".concat(color) : false, borderColor ? "border-".concat(borderColor) : false, accentColor ? "card-accent-".concat(accentColor) : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

var sharedPropTypes = {
  align: propTypes.oneOf(['', 'left', 'center', 'right']),
  color: propTypes.string,
  borderColor: propTypes.string,
  textColor: propTypes.string
};
CCard.propTypes = _objectSpread$c({
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  accentColor: propTypes.string
}, sharedPropTypes);
CCard.defaultProps = {
  tag: 'div'
};

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CCardBody = function CCardBody(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classnames(className, 'card-body', align ? "text-".concat(align) : false, textColor ? "text-".concat(textColor) : false, color ? "bg-".concat(color) : false, borderColor ? "border-".concat(borderColor) : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardBody.propTypes = _objectSpread$b({
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
}, sharedPropTypes);
CCardBody.defaultProps = {
  tag: 'div'
};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CCardHeader = function CCardHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classnames(className, 'card-header', align ? "text-".concat(align) : false, textColor ? "text-".concat(textColor) : false, color ? "bg-".concat(color) : false, borderColor ? "border-".concat(borderColor) : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardHeader.propTypes = _objectSpread$a({
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
}, sharedPropTypes);
CCardHeader.defaultProps = {
  tag: 'header'
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CCardFooter = function CCardFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      textColor = props.textColor,
      borderColor = props.borderColor,
      align = props.align,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color", "textColor", "borderColor", "align"]); //render


  var classes = classnames(className, 'card-footer', align ? "text-".concat(align) : false, textColor ? "text-".concat(textColor) : false, color ? "bg-".concat(color) : false, borderColor ? "border-".concat(borderColor) : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardFooter.propTypes = _objectSpread$9({
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
}, sharedPropTypes);
CCardFooter.defaultProps = {
  tag: 'footer'
};

var CCardGroup = function CCardGroup(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      deck = props.deck,
      columns = props.columns,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "deck", "columns"]); //render


  var classes = classnames("card-".concat(columns ? 'columns' : deck ? 'deck' : 'group'), className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCardGroup.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  deck: propTypes.bool,
  columns: propTypes.bool
};
CCardGroup.defaultProps = {
  tag: 'div'
};

var CImg = function CImg(props) {
  var className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      block = props.block,
      thumbnail = props.thumbnail,
      shape = props.shape,
      align = props.align,
      src = props.src,
      width = props.width,
      height = props.height,
      placeholderColor = props.placeholderColor,
      fluidGrow = props.fluidGrow,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "fluid", "block", "thumbnail", "shape", "align", "src", "width", "height", "placeholderColor", "fluidGrow"]);

  var alignClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'float-right' : align === 'left' ? 'float-left' : ''; // render

  var classes = classnames(className, alignClass, thumbnail && 'img-thumbnail', fluid || fluidGrow && 'img-fluid', fluidGrow && 'w-100', block && 'd-block', shape);
  return src ? /*#__PURE__*/React__default['default'].createElement("img", _extends$1({
    className: classes,
    src: src,
    width: width,
    height: height
  }, attributes, {
    ref: innerRef
  })) : /*#__PURE__*/React__default['default'].createElement("svg", _extends$1({
    className: classes,
    width: width,
    height: height,
    style: {
      'backgroundColor': placeholderColor
    }
  }, attributes, {
    ref: innerRef
  }));
};

CImg.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  src: propTypes.string,
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  block: propTypes.bool,
  fluid: propTypes.bool,
  fluidGrow: propTypes.bool,
  shape: propTypes.string,
  //oneOf(['', 'rounded']),
  thumbnail: propTypes.bool,
  align: propTypes.oneOf(['', 'left', 'right', 'center']),
  placeholderColor: propTypes.string
};
CImg.defaultProps = {
  placeholderColor: 'transparent'
};

var CCardImg = function CCardImg(props) {
  var variant = props.variant,
      rest = _objectWithoutProperties(props, ["variant"]);

  var classSuffix = variant !== 'full' ? "-".concat(variant) : '';
  return /*#__PURE__*/React__default['default'].createElement(CImg, _extends$1({}, rest, {
    className: ["card-img".concat(classSuffix), rest.className]
  }));
};

CCardImg.propTypes = {
  variant: propTypes.oneOf(['', 'top', 'bottom', 'full'])
};
CCardImg.defaultProps = {
  variant: 'full'
};

var CCardImgOverlay = function CCardImgOverlay(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'card-img-overlay');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardImgOverlay.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CCardImgOverlay.defaultProps = {
  tag: 'div'
};

var CCardLink = function CCardLink(props) {
  return /*#__PURE__*/React__default['default'].createElement(CLink, _extends$1({}, props, {
    className: ['card-link', props.className]
  }));
};

var CCardTitle = function CCardTitle(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'card-title');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardTitle.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CCardTitle.defaultProps = {
  tag: 'h4'
};

var CCardSubtitle = function CCardSubtitle(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'card-subtitle');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardSubtitle.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CCardSubtitle.defaultProps = {
  tag: 'h6'
};

var CCardText = function CCardText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'card-text');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCardText.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CCardText.defaultProps = {
  tag: 'p'
};

var Context$7 = /*#__PURE__*/React__default['default'].createContext({}); //component - CoreUI / CCarousel

var CCarousel = function CCarousel(props) {
  var className = props.className,
      innerRef = props.innerRef,
      autoSlide = props.autoSlide,
      activeIndex = props.activeIndex,
      animate = props.animate,
      onSlideChange = props.onSlideChange,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "autoSlide", "activeIndex", "animate", "onSlideChange"]);

  var _useState = React.useState([null, activeIndex]),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      itemNumber = _useState4[0],
      setItemNumber = _useState4[1];

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      animating = _useState6[0],
      setAnimating = _useState6[1];

  React.useEffect(function () {
    setState([state[1], activeIndex]);
  }, [activeIndex]);
  var timeout = React.useRef();

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

  React.useEffect(function () {
    onSlideChange && onSlideChange(state[1]);
    setNext();
    return function () {
      return reset();
    };
  }, [state]);
  var classes = classnames('carousel', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes,
    onMouseEnter: reset,
    onMouseLeave: setNext
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React__default['default'].createElement(Context$7.Provider, {
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
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.array,
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  activeIndex: propTypes.number,
  autoSlide: propTypes.number,
  animate: propTypes.bool,
  onSlideChange: propTypes.func
};
CCarousel.defaultProps = {
  activeIndex: 0
};

var getIndex$2 = function getIndex(el) {
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
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef"]);

  var _useContext = React.useContext(Context$7),
      animate = _useContext.animate,
      state = _useContext.state,
      itemNumber = _useContext.itemNumber,
      setItemNumber = _useContext.setItemNumber,
      animating = _useContext.animating,
      setAnimating = _useContext.setAnimating;

  var ref = _typeof(innerRef) === 'object' ? innerRef : React.useRef();
  typeof innerRef === 'function' && innerRef(ref);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isIn = _useState2[0],
      setIsIn = _useState2[1];

  React.useEffect(function () {
    if (!itemNumber) {
      setItemNumber(ref.current.parentNode.children.length);
    }

    setIsIn(state[1] === getIndex$2(ref.current));
  }, [state]);

  var onEnter = function onEnter() {
    setAnimating(false);
  };

  var onEntering = function onEntering() {
    /* eslint-disable no-unused-vars */
    ref.current.offsetHeight;
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
    var itemClasses = classnames('carousel-item', isIn && 'active', className);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
      className: itemClasses,
      ref: ref
    }, attributes), children);
  }

  return /*#__PURE__*/React__default['default'].createElement(Transition, {
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
    var itemClasses = classnames('carousel-item', isActive && 'active', directionClassName, orderClassName, className);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
      className: itemClasses,
      ref: ref
    }, attributes), children);
  });
};

CCarouselItem.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CCarouselControl = function CCarouselControl(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      direction = props.direction,
      attributes = _objectWithoutProperties(props, ["className", "children", "innerRef", "direction"]);

  var _useContext = React.useContext(Context$7),
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


  var anchorClasses = classnames("carousel-control-".concat(direction), className);
  return /*#__PURE__*/React__default['default'].createElement("a", _extends$1({
    className: anchorClasses
  }, attributes, {
    onClick: onClick,
    ref: innerRef
  }), children || /*#__PURE__*/React__default['default'].createElement("span", {
    className: "carousel-control-".concat(direction, "-icon"),
    "aria-label": direction
  }));
};

CCarouselControl.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.node,
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  direction: propTypes.oneOf(['prev', 'next']).isRequired
};

var CCarouselIndicators = function CCarouselIndicators(props) {
  var className = props.className,
      innerRef = props.innerRef,
      indicatorsClass = props.indicatorsClass,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "indicatorsClass"]);

  var _useContext = React.useContext(Context$7),
      itemNumber = _useContext.itemNumber,
      state = _useContext.state,
      setState = _useContext.setState,
      animating = _useContext.animating; //render


  var listClasses = classnames(indicatorsClass, className);
  var indicators = Array.from({
    length: itemNumber
  }, function (_, i) {
    return i;
  }).map(function (key) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      key: "indicator".concat(key),
      onClick: function onClick() {
        !animating && key !== state[1] && setState([state[1], key]);
      },
      className: state[1] === key ? 'active' : ''
    });
  });
  return /*#__PURE__*/React__default['default'].createElement("ol", _extends$1({
    className: listClasses
  }, attributes, {
    ref: innerRef
  }), indicators);
};

CCarouselIndicators.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  indicatorsClass: propTypes.string
};
CCarouselIndicators.defaultProps = {
  indicatorsClass: 'carousel-indicators'
};

var CCarouselCaption = function CCarouselCaption(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('carousel-caption', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCarouselCaption.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CCarouselInner = function CCarouselInner(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('carousel-inner', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CCarouselInner.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getTransitionClass$1 = function getTransitionClass(s) {
  return s === 'entering' ? 'collapsing' : s === 'entered' ? 'collapse show' : s === 'exiting' ? 'collapsing' : 'collapse';
}; //component - CoreUI / CCollapse


var CCollapse = function CCollapse(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      show = props.show,
      navbar = props.navbar,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "show", "navbar"]);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var ref = _typeof(innerRef) === 'object' ? innerRef : React.useRef();
  typeof innerRef === 'function' && innerRef(ref);

  var onEntering = function onEntering() {
    setHeight(ref.current.scrollHeight);
  };

  var onEntered = function onEntered() {
    setHeight(null);
  };

  var onExit = function onExit() {
    setHeight(ref.current.scrollHeight);
  };

  var onExiting = function onExiting() {
    ref.current.offsetHeight; // eslint-disable-line no-unused-vars

    setHeight(0);
  };

  var onExited = function onExited() {
    setHeight(null);
  }; //render


  return /*#__PURE__*/React__default['default'].createElement(Transition, {
    in: show,
    timeout: 350,
    appear: false,
    enter: true,
    exit: true,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    nodeRef: ref
  }, function (status) {
    var collapseClass = getTransitionClass$1(status);
    var classes = classnames(className, collapseClass, navbar && 'navbar-collapse');
    var style = height === null ? null : {
      height: height
    };
    return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({}, attributes, {
      style: _objectSpread$8(_objectSpread$8({}, attributes.style), style),
      className: classes,
      ref: ref
    }), children);
  });
};

CCollapse.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  show: propTypes.bool,
  navbar: propTypes.bool
};

var CCreateElement = function CCreateElement(_ref) {
  var items = _ref.items,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;

  var renderItem = function renderItem(item, i) {
    var _tag = item._tag,
        _children = item._children,
        rest = _objectWithoutProperties(item, ["_tag", "_children"]);

    var Tag = components[_tag] || _tag;
    var children = _children ? _children.map(function (child, i) {
      return _typeof(child) === 'object' ? renderItem(child, i) : child;
    }) : '';
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
      key: Tag + i
    }, rest), children);
  };

  var generatedItems = React.useMemo(function () {
    return items && items.map(function (item, i) {
      return renderItem(item, i);
    });
  }, [JSON.stringify(items)]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, generatedItems);
};

CCreateElement.propTypes = {
  items: propTypes.array.isRequired,
  components: propTypes.object
};

var Context$6 = /*#__PURE__*/React__default['default'].createContext({}); //component - CoreUI / CDropdown

var CDropdown = function CDropdown(props) {
  var className = props.className,
      tag = props.tag,
      innerRef = props.innerRef,
      inNav = props.inNav,
      attributes = _objectWithoutProperties(props, ["className", "tag", "innerRef", "inNav"]);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      reference = _useState2[0],
      setReference = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      split = _useState6[0],
      setSplit = _useState6[1];

  var _useState7 = React.useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      placement = _useState8[0],
      setPlacement = _useState8[1];

  var carretClass = placement.includes('top') ? 'dropup' : placement.includes('right') ? 'dropright' : placement.includes('left') ? 'dropleft' : 'dropdown';
  var Tag = tag || (inNav ? 'li' : 'div');
  var classes = classnames(className, carretClass, {
    'nav-item': inNav,
    'btn-group': split,
    'show': isOpen
  });
  return /*#__PURE__*/React__default['default'].createElement(Context$6.Provider, {
    value: {
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      reference: reference,
      setReference: setReference,
      inNav: inNav,
      setSplit: setSplit,
      setPlacement: setPlacement
    }
  }, /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  })));
};

CDropdown.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  inNav: propTypes.bool
};

var CDropdownItem = function CDropdownItem(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      color = props.color,
      divider = props.divider,
      header = props.header,
      active = props.active,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["tag", "className", "innerRef", "onClick", "color", "divider", "header", "active", "disabled"]);

  var _useContext = React.useContext(Context$6),
      setIsOpen = _useContext.setIsOpen;

  var isItem = !(header || divider);

  var click = function click(e) {
    if (disabled) {
      return;
    }

    onClick && onClick(e);
    isItem && setIsOpen(false);
  }; //render


  var tabIndex = isItem && !disabled ? null : -1;
  var role = tabIndex === null ? 'menuitem' : undefined;
  var Tag = tag || (!isItem ? 'div' : CLink);

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  var classes = classnames(className, 'dropdown-' + (header ? 'header' : divider ? 'divider' : 'item'), {
    active: active
  }, color && 'bg-' + color, disabled && Tag !== CLink && 'disabled');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes,
    tabIndex: tabIndex,
    role: role,
    disabled: disabled
  }, rest, {
    onClick: click
  }, ref));
};

CDropdownItem.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string,
  divider: propTypes.bool,
  header: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  active: propTypes.bool
};

var CDropdownDivider = function CDropdownDivider(props) {
  return /*#__PURE__*/React__default['default'].createElement(CDropdownItem, _extends$1({}, props, {
    divider: true
  }));
};

var CDropdownHeader = function CDropdownHeader(props) {
  return /*#__PURE__*/React__default['default'].createElement(CDropdownItem, _extends$1({}, props, {
    header: true
  }));
};

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement$1(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement$1(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement$1(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var CDropdownMenu = function CDropdownMenu(props) {
  var className = props.className,
      show = props.show,
      placement = props.placement,
      modifiers = props.modifiers,
      innerRef = props.innerRef,
      rest = _objectWithoutProperties(props, ["className", "show", "placement", "modifiers", "innerRef"]);

  var _useContext = React.useContext(Context$6),
      reference = _useContext.reference,
      isOpen = _useContext.isOpen,
      setIsOpen = _useContext.setIsOpen,
      setPlacement = _useContext.setPlacement;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      popperElement = _useState2[0],
      setPopperElement = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      popper = _useState4[0],
      setPopper = _useState4[1];

  innerRef && innerRef(popperElement);
  React.useEffect(function () {
    setIsOpen(show);
    setPlacement(placement);
  }, [show, placement]);
  var classes = classnames(className, 'dropdown-menu', {
    'show': isOpen
  });
  React.useLayoutEffect(function () {
    if (!reference) {
      return;
    }

    setPopper(createPopper(reference, popperElement, {
      placement: placement,
      modifiers: modifiers || []
    }));
    return function () {
      if (popper) {
        popper.destroy();
      }
    };
  }, [isOpen]);

  var checkClose = function checkClose(e) {
    if ([reference, popperElement].every(function (el) {
      return !el.contains(e.target);
    })) {
      setIsOpen(false);
    }
  };

  var onKeypress = function onKeypress(e) {
    return e.keyCode == '27' && setIsOpen(false);
  };

  React.useEffect(function () {
    if (isOpen) {
      document.addEventListener('click', checkClose);
      document.addEventListener('keydown', onKeypress);
    }

    return function () {
      document.removeEventListener('click', checkClose);
      document.removeEventListener('keydown', onKeypress);
    };
  }, [isOpen]);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes,
    ref: setPopperElement,
    role: "menu",
    "aria-hidden": !isOpen
  }, rest));
};

CDropdownMenu.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  modifiers: propTypes.array,
  show: propTypes.bool,
  placement: propTypes.oneOf(['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'])
};
CDropdownMenu.defaultProps = {
  placement: 'bottom-start'
};

var CDropdownToggle = function CDropdownToggle(props) {
  var _togglerAttrs;

  var className = props.className,
      innerRef = props.innerRef,
      onClick = props.onClick,
      caret = props.caret,
      split = props.split,
      tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "onClick", "caret", "split", "tag"]);

  var _useContext = React.useContext(Context$6),
      reference = _useContext.reference,
      setReference = _useContext.setReference,
      isOpen = _useContext.isOpen,
      setIsOpen = _useContext.setIsOpen,
      inNav = _useContext.inNav,
      setSplit = _useContext.setSplit;

  innerRef && innerRef(reference);
  React.useEffect(function () {
    setSplit(split);
  });

  var click = function click(e) {
    if (props.disabled) {
      return;
    }

    onClick && onClick(e);
    setIsOpen(!isOpen);
  };

  var Tag = tag || (inNav ? CLink : CButton);
  var classes = classnames(className, {
    'dropdown-toggle': caret && !split,
    'nav-link': inNav
  });
  var togglerAttrs = (_togglerAttrs = {
    onClick: click,
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'true',
    'aria-label': 'Dropdown toggle'
  }, _defineProperty(_togglerAttrs, "".concat(tag && typeof tag === 'string' ? 'ref' : 'innerRef'), setReference), _defineProperty(_togglerAttrs, 'role', Tag === CButton ? null : 'button'), _togglerAttrs);

  if (split) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(CButton, attributes, props.children), /*#__PURE__*/React__default['default'].createElement(CButton, _extends$1({
      className: "dropdown-toggle dropdown-toggle-split"
    }, togglerAttrs, attributes), ''));
  } else {
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
      className: classes
    }, togglerAttrs, attributes));
  }
};

CDropdownToggle.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  caret: propTypes.bool,
  onClick: propTypes.func,
  split: propTypes.bool,
  disabled: propTypes.bool
};
CDropdownToggle.defaultProps = {
  caret: true
};

var CSpinner = function CSpinner(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      grow = props.grow,
      size = props.size,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "grow", "size", "color"]); //render


  var type = grow ? 'grow' : 'border';
  var classes = classnames("spinner-".concat(type), size && "spinner-".concat(type, "-").concat(size), color && "text-".concat(color), className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes,
    "aria-hidden": "false",
    "aria-label": "Loading",
    role: "status"
  }, attributes, {
    ref: innerRef
  }));
};

CSpinner.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  grow: propTypes.bool,
  size: propTypes.string,
  color: propTypes.string
};
CSpinner.defaultProps = {
  tag: 'div'
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CElementCover = function CElementCover(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      boundaries = props.boundaries,
      opacity = props.opacity,
      attributes = _objectWithoutProperties(props, ["className", "children", "innerRef", "boundaries", "opacity"]);

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      customBoundaries = _useState2[0],
      setCustomBoundaries = _useState2[1];

  var ref = /*#__PURE__*/React.createRef(null);
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

  React.useEffect(function () {
    setCustomBoundaries(getCustomBoundaries());
  }, [JSON.stringify(getCustomBoundaries())]); //render

  var classes = classnames(className);

  var containerCoords = _objectSpread$7({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, customBoundaries);

  var coverStyles = _objectSpread$7(_objectSpread$7({}, containerCoords), {}, {
    position: 'absolute',
    backgroundColor: "rgb(255,255,255,".concat(opacity, ")")
  });

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes,
    style: coverStyles
  }, attributes, {
    ref: ref
  }), children || /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(CSpinner, {
    grow: true,
    size: "lg",
    color: "primary"
  })));
};

CElementCover.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  boundaries: propTypes.array,
  opacity: propTypes.number
};
CElementCover.defaultProps = {
  opacity: 0.4
};

var CEmbed = function CEmbed(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      ratio = props.ratio,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "ratio"]); //render


  var classes = classnames(className, 'embed-responsive', "embed-responsive-".concat(ratio));
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CEmbed.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  ratio: propTypes.oneOf(['21by9', '16by9', '4by3', '1by1'])
};
CEmbed.defaultProps = {
  tag: 'div',
  ratio: '16by9'
};

var CEmbedItem = function CEmbedItem(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'embed-responsive-item');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CEmbedItem.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  type: propTypes.oneOf(['iframe', 'embed', 'video', 'object', 'img'])
};
CEmbedItem.defaultProps = {
  tag: 'iframe'
};

var CForm = function CForm(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      inline = props.inline,
      wasValidated = props.wasValidated,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "inline", "wasValidated"]); //render


  var classes = classnames(className, inline ? 'form-inline' : false, wasValidated ? 'was-validated' : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CForm.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  inline: propTypes.bool,
  wasValidated: propTypes.bool
};
CForm.defaultProps = {
  tag: 'form'
};

var CFormFeedback = function CFormFeedback(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      tooltip = props.tooltip,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "valid", "tooltip"]); //render


  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = classnames(valid ? "valid-".concat(validMode) : "invalid-".concat(validMode), className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormFeedback.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  valid: propTypes.bool,
  tooltip: propTypes.bool
};
var CValidFeedback = function CValidFeedback(props) {
  return /*#__PURE__*/React__default['default'].createElement(CFormFeedback, _extends$1({}, props, {
    valid: true
  }));
};
var CInvalidFeedback = function CInvalidFeedback(props) {
  return /*#__PURE__*/React__default['default'].createElement(CFormFeedback, _extends$1({}, props, {
    valid: false
  }));
};

var stringOrNumberProp = propTypes.oneOfType([propTypes.number, propTypes.string]);
var columnProps = propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string, propTypes.shape({
  size: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-".concat(colWidth);
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }

  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
}; //component - CoreUI / CCol


var CCol = function CCol(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      widths = props.widths,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "widths"]); //render


  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (_typeof(columnProp) === 'object') {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(classnames((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = classnames(className, colClasses);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CCol.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: propTypes.array
};
CCol.defaultProps = {
  tag: 'div',
  widths: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
};

var CLabel = function CLabel(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      hidden = props.hidden,
      variant = props.variant,
      col = props.col,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "hidden", "variant", "col"]); // render


  var classes = classnames(hidden && 'sr-only', variant === 'custom-checkbox' && 'custom-control-label', variant === 'checkbox' && 'form-check-label', variant === 'custom-file' && 'custom-file-label', col && 'col-form-label', col && typeof col === 'string' && "col-form-label-".concat(col), className);
  var Tag = col ? CCol : tag;
  var addLabelTag = col && {
    tag: tag
  };
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, addLabelTag, attributes, {
    ref: innerRef
  }));
};

CLabel.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  hidden: propTypes.bool,
  variant: propTypes.oneOf(['custom-file', 'checkbox', 'custom-checkbox']),
  col: propTypes.oneOfType([propTypes.string, propTypes.bool])
};
CLabel.defaultProps = {
  tag: 'label'
};

var CFormGroup = function CFormGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      row = props.row,
      disabled = props.disabled,
      variant = props.variant,
      inline = props.inline,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "row", "disabled", "variant", "inline"]); //render


  var checkClass = variant && variant.includes('custom') ? 'custom-control' : 'form-check';
  var classes = classnames(row && 'row', !variant && 'form-group', variant && checkClass, variant === 'custom-radio' && 'custom-radio', variant === 'custom-checkbox' && 'custom-checkbox', variant && inline && "".concat(checkClass, "-inline"), variant && disabled && 'disabled', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormGroup.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  row: propTypes.bool,
  variant: propTypes.oneOf(['checkbox', 'custom-checkbox', 'custom-radio']),
  inline: propTypes.bool,
  disabled: propTypes.bool
};

var CFormText = function CFormText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "color"]); //render


  var classes = classnames('form-text', color && "text-".concat(color), className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFormText.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string
};
CFormText.defaultProps = {
  tag: 'small',
  color: 'muted'
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var commonPropTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  valid: propTypes.bool,
  invalid: propTypes.bool
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
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "type", "valid", "invalid", "plaintext", "size", "sizeHtml"]); // render


  var classes = classnames(plaintext ? 'form-control-plaintext' : 'form-control', size && "form-control-".concat(size), invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    className: classes,
    type: type
  }, attributes, {
    size: sizeHtml,
    ref: innerRef
  }));
};

CInput.propTypes = _objectSpread$6(_objectSpread$6({}, commonPropTypes), {}, {
  plaintext: propTypes.bool,
  type: propTypes.string,
  size: propTypes.string,
  sizeHtml: propTypes.oneOfType([propTypes.string, propTypes.number])
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
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "valid", "invalid", "plaintext", "size"]); // render


  var classes = classnames(plaintext ? 'form-control-plaintext' : 'form-control', size && "form-control-".concat(size), invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React__default['default'].createElement("textarea", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CTextarea.propTypes = _objectSpread$6(_objectSpread$6({}, commonPropTypes), {}, {
  plaintext: propTypes.bool,
  size: propTypes.string
});

var CInputFile = function CInputFile(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      custom = props.custom,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "valid", "invalid", "custom"]); // render


  var classes = classnames(custom ? 'custom-file-input' : 'form-control-file', invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    className: classes
  }, attributes, {
    type: "file",
    ref: innerRef
  }));
};

CInputFile.propTypes = _objectSpread$6(_objectSpread$6({}, commonPropTypes), {}, {
  custom: propTypes.bool
});

var CInputCheckbox = function CInputCheckbox(props) {
  var className = props.className,
      innerRef = props.innerRef,
      valid = props.valid,
      invalid = props.invalid,
      custom = props.custom,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "valid", "invalid", "custom"]); // render


  var classes = classnames(custom ? 'custom-control-input' : 'form-check-input', invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    className: classes,
    type: "checkbox"
  }, attributes, {
    ref: innerRef
  }));
};

CInputCheckbox.propTypes = _objectSpread$6(_objectSpread$6({}, commonPropTypes), {}, {
  custom: propTypes.bool
});

var CInputRadio = function CInputRadio(props) {
  return /*#__PURE__*/React__default['default'].createElement(CInputCheckbox, _extends$1({}, props, {
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
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "valid", "invalid", "size", "sizeHtml", "custom"]); // render


  var baseClass = custom ? 'custom-select' : 'form-control';
  var classes = classnames(baseClass, size && "".concat(baseClass, "-").concat(size), invalid && 'is-invalid', valid && 'is-valid', className);
  return /*#__PURE__*/React__default['default'].createElement("select", _extends$1({
    className: classes
  }, attributes, {
    size: sizeHtml,
    ref: innerRef
  }));
};

CSelect.propTypes = _objectSpread$6(_objectSpread$6({}, commonPropTypes), {}, {
  size: propTypes.string,
  sizeHtml: propTypes.oneOfType([propTypes.string, propTypes.number])
});

var CInputGroup = function CInputGroup(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "size"]); //render


  var classes = classnames('input-group', size && "input-group-".concat(size), className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CInputGroup.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  size: propTypes.string
};

var CInputGroupAddon = function CInputGroupAddon(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      prepend = props.prepend,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "prepend"]); //render


  var classes = classnames('input-group-' + (prepend ? 'prepend' : 'append'), className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }), children);
};

CInputGroupAddon.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  prepend: propTypes.bool
};
var CInputGroupAppend = function CInputGroupAppend(props) {
  return /*#__PURE__*/React__default['default'].createElement(CInputGroupAddon, _extends$1({}, props, {
    prepend: false
  }));
};
var CInputGroupPrepend = function CInputGroupPrepend(props) {
  return /*#__PURE__*/React__default['default'].createElement(CInputGroupAddon, _extends$1({}, props, {
    prepend: true
  }));
};

var CInputGroupText = function CInputGroupText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('input-group-text', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CInputGroupText.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CInputGroupText.defaultProps = {
  tag: 'div'
};

var CRow = function CRow(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      gutters = props.gutters,
      form = props.form,
      alignHorizontal = props.alignHorizontal,
      alignVertical = props.alignVertical,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "gutters", "form", "alignHorizontal", "alignVertical"]); //render


  var classes = classnames(className, !gutters ? 'no-gutters' : null, alignHorizontal ? "justify-content-".concat(alignHorizontal) : null, alignVertical ? "align-".concat(alignVertical) : null, form ? 'form-row' : 'row');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CRow.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  gutters: propTypes.bool,
  form: propTypes.bool,
  alignHorizontal: propTypes.string,
  alignVertical: propTypes.string
};
CRow.defaultProps = {
  tag: 'div',
  gutters: true
};

var CContainer = function CContainer(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "fluid"]); //render


  var classes = classnames(className, fluid ? 'container-fluid' : 'container');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CContainer.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  fluid: propTypes.bool
};
CContainer.defaultProps = {
  tag: 'div'
};

var CJumbotron = function CJumbotron(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "fluid"]); //render


  var classes = classnames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CJumbotron.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  fluid: propTypes.bool
};
CJumbotron.defaultProps = {
  tag: 'div'
};

var CListGroup = function CListGroup(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      horizontal = props.horizontal,
      flush = props.flush,
      accent = props.accent,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "horizontal", "flush", "accent"]); // render


  var classes = classnames(className, 'list-group', (_classNames = {}, _defineProperty(_classNames, "list-group-horizontal-".concat(horizontal), horizontal), _defineProperty(_classNames, 'list-group-flush', flush), _defineProperty(_classNames, 'list-group-accent', accent), _classNames));
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes,
    role: "list-items"
  }, attributes, {
    ref: innerRef
  }));
};

CListGroup.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  flush: propTypes.bool,
  horizontal: propTypes.string,
  accent: propTypes.bool
};
CListGroup.defaultProps = {
  tag: 'ul'
};

var CListGroupItem = function CListGroupItem(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      accent = props.accent,
      rest = _objectWithoutProperties(props, ["tag", "className", "innerRef", "active", "disabled", "action", "color", "accent"]); //render


  var classes = classnames(className, 'list-group-item', (_classNames = {
    'list-group-item-action': action || rest.href || rest.to || Tag == 'button',
    active: active,
    disabled: disabled
  }, _defineProperty(_classNames, "list-group-item-".concat(color), color), _defineProperty(_classNames, "list-group-item-accent-".concat(accent), accent), _classNames));

  if (props.href || props.to) {
    return /*#__PURE__*/React__default['default'].createElement(CLink, _extends$1({}, rest, {
      className: classes,
      innerRef: innerRef
    }));
  } else {
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({}, rest, {
      className: classes,
      ref: innerRef
    }));
  }
};

CListGroupItem.propTypes = {
  tag: tagPropType,
  className: propTypes.any,
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  active: propTypes.bool,
  disabled: propTypes.bool,
  color: propTypes.string,
  accent: propTypes.string,
  action: propTypes.bool
};
CListGroupItem.defaultProps = {
  tag: 'li'
};

var CMedia = function CMedia(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('media', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CMedia.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CMediaBody = function CMediaBody(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('media-body', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CMediaBody.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var Context$5 = /*#__PURE__*/React__default['default'].createContext({});

var getTransitionClass = function getTransitionClass(s) {
  return s === 'entering' ? 'd-block' : s === 'entered' ? 'show d-block' : s === 'exiting' ? 'd-block' : '';
}; //animation fixes introduced thanks to Sirlordt
//component - CoreUI / CModal


var CModal = function CModal(props) {
  var innerRef = props.innerRef,
      show = props.show,
      centered = props.centered,
      size = props.size,
      color = props.color,
      borderColor = props.borderColor,
      fade = props.fade,
      backdrop = props.backdrop,
      closeOnBackdrop = props.closeOnBackdrop,
      onOpened = props.onOpened,
      onClosed = props.onClosed,
      addContentClass = props.addContentClass,
      onClose = props.onClose,
      className = props.className,
      scrollable = props.scrollable,
      attributes = _objectWithoutProperties(props, ["innerRef", "show", "centered", "size", "color", "borderColor", "fade", "backdrop", "closeOnBackdrop", "onOpened", "onClosed", "addContentClass", "onClose", "className", "scrollable"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalTrigger = _useState4[0],
      setModalTrigger = _useState4[1];

  var modalClick = function modalClick(e) {
    return e.target.dataset.modal && closeOnBackdrop && close();
  };

  React.useEffect(function () {
    setIsOpen(show);
  }, [show]);

  var onKeypress = function onKeypress(e) {
    return e.keyCode == '27' && close();
  };

  React.useEffect(function () {
    isOpen && document.addEventListener('keydown', onKeypress);
    return function () {
      return document.removeEventListener('keydown', onKeypress);
    };
  }, [isOpen]);

  var close = function close() {
    onClose && onClose();
    setIsOpen(false);
  };

  var onEntered = function onEntered() {
    setModalTrigger(document.querySelector(':focus'));
    nodeRef.current.focus();
    onOpened && onOpened();
  };

  var onExited = function onExited() {
    modalTrigger && modalTrigger.focus();
    onClosed && onClosed();
  };

  var modalClasses = classnames('modal overflow-auto fade', _defineProperty({}, "modal-".concat(color), color), className);
  var dialogClasses = classnames('modal-dialog', _defineProperty({
    'modal-dialog-scrollable': scrollable,
    'modal-dialog-centered': centered
  }, "modal-".concat(size), size));
  var contentClasses = classnames('modal-content', _defineProperty({}, "border-".concat(borderColor), borderColor), addContentClass);
  var backdropClasses = classnames({
    'modal-backdrop': true,
    'fade': fade,
    'show': isOpen || fade
  });
  var nodeRef = React.useRef(null);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: modalClick
  }, /*#__PURE__*/React__default['default'].createElement(Transition, {
    in: Boolean(isOpen),
    onEntered: onEntered,
    onExited: onExited,
    timeout: fade ? 150 : 0,
    nodeRef: nodeRef
  }, function (status) {
    var transitionClass = getTransitionClass(status);
    var classes = classnames(modalClasses, transitionClass);
    return /*#__PURE__*/React__default['default'].createElement("div", {
      tabIndex: "-1",
      role: "dialog",
      className: classes,
      "data-modal": true,
      ref: nodeRef
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: dialogClasses,
      role: "document"
    }, /*#__PURE__*/React__default['default'].createElement("div", _extends$1({}, attributes, {
      className: contentClasses,
      ref: innerRef
    }), /*#__PURE__*/React__default['default'].createElement(Context$5.Provider, {
      value: {
        close: close
      }
    }, props.children))));
  }), backdrop && isOpen && /*#__PURE__*/React__default['default'].createElement("div", {
    className: backdropClasses
  }));
};

CModal.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  show: propTypes.bool,
  centered: propTypes.bool,
  size: propTypes.oneOf(['', 'sm', 'lg', 'xl']),
  backdrop: propTypes.bool,
  color: propTypes.string,
  borderColor: propTypes.string,
  onOpened: propTypes.func,
  onClosed: propTypes.func,
  fade: propTypes.bool,
  closeOnBackdrop: propTypes.bool,
  onClose: propTypes.func,
  addContentClass: propTypes.string,
  scrollable: propTypes.bool
};
CModal.defaultProps = {
  backdrop: true,
  fade: true,
  closeOnBackdrop: true
};

var CModalBody = function CModalBody(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'modal-body');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CModalBody.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CModalBody.defaultProps = {
  tag: 'div'
};

var CModalHeader = function CModalHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      closeButton = props.closeButton,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "closeButton"]);

  var _useContext = React.useContext(Context$5),
      close = _useContext.close; //render


  var classes = classnames(className, 'modal-header');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }), props.children, closeButton && /*#__PURE__*/React__default['default'].createElement(CButtonClose, {
    onClick: close
  }));
};

CModalHeader.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  closeButton: propTypes.bool
};
CModalHeader.defaultProps = {
  tag: 'header'
};

var CModalFooter = function CModalFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className, 'modal-footer');
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CModalFooter.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CModalFooter.defaultProps = {
  tag: 'footer'
};

var CModalTitle = function CModalTitle(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('modal-title', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CModalTitle.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CModalTitle.defaultProps = {
  tag: 'h5'
};

var CNav = function CNav(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      variant = props.variant,
      vertical = props.vertical,
      justified = props.justified,
      fill = props.fill,
      inCard = props.inCard,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "variant", "vertical", "justified", "fill", "inCard"]);

  var verticalClass = "flex".concat(vertical === true ? '' : "-".concat(vertical), "-column"); //render

  var classes = classnames('nav', vertical && verticalClass, (_classNames = {}, _defineProperty(_classNames, "nav-".concat(variant), variant), _defineProperty(_classNames, 'nav-justified', justified), _defineProperty(_classNames, 'nav-fill', fill), _defineProperty(_classNames, "card-header-".concat(variant), inCard && variant), _classNames), className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNav.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  variant: propTypes.oneOf(['', 'tabs', 'pills']),
  vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  justified: propTypes.bool,
  fill: propTypes.bool,
  inCard: propTypes.bool
};
CNav.defaultProps = {
  tag: 'ul'
};

var CNavItem = function CNavItem(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('nav-item', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavItem.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CNavItem.defaultProps = {
  tag: 'li'
};

var Context$4 = /*#__PURE__*/React__default['default'].createContext();

var CTabs = function CTabs(props) {
  var children = props.children,
      activeTab = props.activeTab,
      onActiveTabChange = props.onActiveTabChange;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  React.useEffect(function () {
    activeTab !== undefined && setActive(activeTab);
  }, [activeTab]);

  var setActiveTab = function setActiveTab(tab) {
    onActiveTabChange && onActiveTabChange(tab);
    setActive(tab);
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Context$4.Provider, {
    value: {
      active: active,
      setActiveTab: setActiveTab
    }
  }, children));
};

CTabs.propTypes = {
  children: propTypes.node,
  activeTab: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onActiveTabChange: propTypes.func
};

var getIndex$1 = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getState$1 = function getState(_ref) {
  var el = _ref.current;
  var hasSiblings = el.parentElement.childNodes.length > 1;
  return el.dataset.tab || getIndex$1(hasSiblings ? el : el.parentElement);
};

var CNavLink = function CNavLink(props) {
  var innerRef = props.innerRef,
      className = props.className,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, ["innerRef", "className", "onClick"]);

  var tabState = React.useContext(Context$4);
  var actTab = (tabState || {}).active;
  var ref = /*#__PURE__*/React.createRef();
  innerRef && innerRef(ref);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  React.useEffect(function () {
    typeof actTab !== 'undefined' && setActive(getState$1(ref) === actTab);
  }, [actTab]);

  var click = function click(e) {
    onClick && onClick(e);
    tabState && tabState.setActiveTab(getState$1(ref));
  };

  return /*#__PURE__*/React__default['default'].createElement(CLink, _extends$1({
    active: active
  }, rest, {
    innerRef: ref,
    onClick: click,
    className: ['nav-link', className]
  }));
};

CNavLink.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  onClick: propTypes.func
};

var CBrand = function CBrand(props) {
  var tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames(className);
  var Tag = attributes.to || attributes.href ? CLink : tag;

  var ref = _defineProperty({}, "".concat(typeof Tag === 'string' ? 'ref' : 'innerRef'), innerRef);

  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, ref));
};

CBrand.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CBrand.defaultProps = {
  tag: 'div'
};

var CNavbarBrand = function CNavbarBrand(props) {
  return /*#__PURE__*/React__default['default'].createElement(CBrand, _extends$1({}, props, {
    className: ['navbar-brand', props.className]
  }));
};

var CNavbar = function CNavbar(props) {
  var _classNames;

  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      expandable = props.expandable,
      light = props.light,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "expandable", "light", "fixed", "sticky", "color"]); //render


  var classes = classnames('navbar', className, light ? 'navbar-light' : 'navbar-dark', (_classNames = {}, _defineProperty(_classNames, "navbar-expand".concat(expandable === true ? '' : "-".concat(expandable)), expandable), _defineProperty(_classNames, "bg-".concat(color), color), _defineProperty(_classNames, "fixed-".concat(fixed), fixed), _defineProperty(_classNames, 'sticky-top', sticky), _classNames));
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbar.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  light: propTypes.bool,
  color: propTypes.string,
  fixed: propTypes.oneOf(['', 'top', 'bottom']),
  sticky: propTypes.bool,
  expandable: propTypes.oneOfType([propTypes.bool, propTypes.string])
};
CNavbar.defaultProps = {
  tag: 'nav'
};

var CNavbarNav = function CNavbarNav(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('navbar-nav', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbarNav.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CNavbarNav.defaultProps = {
  tag: 'ul'
};

var CNavbarText = function CNavbarText(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('navbar-text', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CNavbarText.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CNavbarText.defaultProps = {
  tag: 'div'
};

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
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "addListClass", "activePage", "size", "firstButton", "previousButton", "nextButton", "lastButton", "dots", "arrows", "doubleArrows", "limit", "pages", "align", "onActivePageChange"]);

  React.useEffect(function () {
    pages < activePage && onActivePageChange(pages, true);
  }, [pages]); //render

  var listClasses = classnames('pagination', size && 'pagination-' + size, 'justify-content-' + align, addListClass);
  var backArrowsClasses = classnames('page-item', activePage === 1 && 'disabled');
  var nextArrowsClasses = classnames('page-item', activePage === pages && 'disabled');

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

  return /*#__PURE__*/React__default['default'].createElement("nav", _extends$1({
    className: className,
    "aria-label": "pagination"
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: listClasses
  }, doubleArrows && /*#__PURE__*/React__default['default'].createElement("li", {
    className: backArrowsClasses
  }, /*#__PURE__*/React__default['default'].createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(1);
    },
    "aria-label": "Go to first page",
    "aria-disabled": activePage === 1,
    disabled: activePage === 1
  }, firstButton)), arrows && /*#__PURE__*/React__default['default'].createElement("li", {
    className: backArrowsClasses
  }, /*#__PURE__*/React__default['default'].createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(activePage - 1);
    },
    "aria-label": "Go to previous page",
    "aria-disabled": activePage === 1,
    disabled: activePage === 1
  }, previousButton)), beforeDots && /*#__PURE__*/React__default['default'].createElement("li", {
    role: "separator",
    className: "page-item disabled"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "page-link"
  }, "\u2026")), items.map(function (i) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      className: "".concat(activePage === i ? 'active' : '', " page-item"),
      key: i
    }, /*#__PURE__*/React__default['default'].createElement(CLink, {
      className: "page-link",
      onClick: function onClick(e) {
        return setPage(i);
      },
      "aria-label": activePage === i ? "Current page ".concat(i) : "Go to page ".concat(i)
    }, i));
  }), afterDots && /*#__PURE__*/React__default['default'].createElement("li", {
    role: "separator",
    className: "page-item disabled"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "page-link"
  }, "\u2026")), arrows && /*#__PURE__*/React__default['default'].createElement("li", {
    className: nextArrowsClasses
  }, /*#__PURE__*/React__default['default'].createElement(CLink, {
    className: "page-link",
    onClick: function onClick() {
      return setPage(activePage + 1);
    },
    "aria-label": "Go to next page",
    "aria-disabled": activePage === pages,
    disabled: activePage === pages
  }, nextButton)), doubleArrows && /*#__PURE__*/React__default['default'].createElement("li", {
    className: nextArrowsClasses
  }, /*#__PURE__*/React__default['default'].createElement(CLink, {
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
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  activePage: propTypes.number,
  dots: propTypes.bool,
  arrows: propTypes.bool,
  doubleArrows: propTypes.bool,
  firstButton: propTypes.oneOfType([propTypes.node, propTypes.string]),
  previousButton: propTypes.oneOfType([propTypes.node, propTypes.string]),
  nextButton: propTypes.oneOfType([propTypes.node, propTypes.string]),
  lastButton: propTypes.oneOfType([propTypes.node, propTypes.string]),
  size: propTypes.oneOf(['', 'sm', 'lg']),
  align: propTypes.oneOf(['start', 'center', 'end']),
  addListClass: propTypes.string,
  limit: propTypes.number,
  pages: propTypes.number,
  onActivePageChange: propTypes.func.isRequired
};
CPagination.defaultProps = {
  activePage: 1,
  dots: true,
  arrows: true,
  doubleArrows: true,
  limit: 5,
  firstButton: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "\xAB"),
  previousButton: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "\u2039"),
  nextButton: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "\u203A"),
  lastButton: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "\xBB"),
  align: 'start',
  pages: 10
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CProgressBar = function CProgressBar(directProps) {
  var _useContext = React.useContext(Context$3),
      inheritedProps = _useContext.inheritedProps;

  var props = _objectSpread$5(_objectSpread$5({}, inheritedProps), directProps);

  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      color = props.color,
      striped = props.striped,
      animated = props.animated,
      precision = props.precision,
      showPercentage = props.showPercentage,
      showValue = props.showValue,
      max = props.max,
      value = props.value,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "color", "striped", "animated", "precision", "showPercentage", "showValue", "max", "value"]); // render


  var progressBarClasses = classnames('progress-bar', animated && 'progress-bar-animated', (striped || animated) && 'progress-bar-striped', color && "bg-".concat(color), className);
  var valLabel = Number(value).toFixed(precision);
  var percentLabel = Number(value / max * 100).toFixed(precision) + '%';
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: progressBarClasses,
    style: {
      width: "".concat(value / max * 100, "%")
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": "0",
    "aria-valuemax": max
  }, attributes, {
    ref: innerRef
  }), showPercentage ? percentLabel : showValue ? valLabel : children);
};

CProgressBar.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  value: propTypes.number,
  max: propTypes.number,
  animated: propTypes.bool,
  striped: propTypes.bool,
  color: propTypes.string,
  precision: propTypes.number,
  showPercentage: propTypes.bool,
  showValue: propTypes.bool
};

var Context$3 = /*#__PURE__*/React__default['default'].createContext({}); //component - CoreUI / CProgress

var CProgress = function CProgress(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      color = props.color,
      striped = props.striped,
      animated = props.animated,
      precision = props.precision,
      showPercentage = props.showPercentage,
      showValue = props.showValue,
      max = props.max,
      value = props.value,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "size", "color", "striped", "animated", "precision", "showPercentage", "showValue", "max", "value"]);

  var inheritedProps = {
    color: color,
    striped: striped,
    animated: animated,
    precision: precision,
    showPercentage: showPercentage,
    showValue: showValue,
    max: max,
    value: value
  };
  var progressClasses = classnames('progress', size && 'progress-' + size, className); // render

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: progressClasses
  }, attributes, {
    ref: innerRef
  }), /*#__PURE__*/React__default['default'].createElement(Context$3.Provider, {
    value: {
      inheritedProps: inheritedProps
    }
  }, children || /*#__PURE__*/React__default['default'].createElement(CProgressBar, null)));
};

CProgress.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  size: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  max: propTypes.oneOfType([propTypes.string, propTypes.number]),
  animated: propTypes.bool,
  striped: propTypes.bool,
  color: propTypes.string,
  precision: propTypes.number,
  showPercentage: propTypes.bool,
  showValue: propTypes.bool
};
CProgress.defaultProps = {
  value: 0,
  max: 100,
  precision: 0
};

var CSwitch = function CSwitch(props) {
  var className = props.className,
      innerRef = props.innerRef,
      size = props.size,
      color = props.color,
      labelOn = props.labelOn,
      labelOff = props.labelOff,
      variant = props.variant,
      shape = props.shape,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "size", "color", "labelOn", "labelOff", "variant", "shape"]); //render


  var classes = classnames('c-switch form-check-label', (labelOn || labelOff) && 'c-switch-label', size && "c-switch-".concat(size), shape && "c-switch-".concat(shape), color && "c-switch".concat(variant ? "-".concat(variant) : '', "-").concat(color), className);
  var inputClasses = classnames('c-switch-input', 'c-form-check-input');
  return /*#__PURE__*/React__default['default'].createElement("label", {
    className: classes
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    className: inputClasses,
    type: "checkbox"
  }, attributes, {
    ref: innerRef
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "c-switch-slider",
    "data-checked": labelOn,
    "data-unchecked": labelOff
  }));
};

CSwitch.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  size: propTypes.oneOf(['', 'lg', 'sm']),
  shape: propTypes.oneOf(['', 'pill', 'square']),
  variant: propTypes.oneOf(['', '3d', 'opposite', 'outline']),
  color: propTypes.string,
  labelOn: propTypes.string,
  labelOff: propTypes.string
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$6 = ".c-icon {\r\n  display: inline-block;\r\n  color: inherit;\r\n  text-align: center;\r\n  fill: currentColor;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size) {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-2xl {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-3xl {\r\n  width: 3rem;\r\n  height: 3rem;\r\n  font-size: 3rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-4xl {\r\n  width: 4rem;\r\n  height: 4rem;\r\n  font-size: 4rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-5xl {\r\n  width: 5rem;\r\n  height: 5rem;\r\n  font-size: 5rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-6xl {\r\n  width: 6rem;\r\n  height: 6rem;\r\n  font-size: 6rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-7xl {\r\n  width: 7rem;\r\n  height: 7rem;\r\n  font-size: 7rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-8xl {\r\n  width: 8rem;\r\n  height: 8rem;\r\n  font-size: 8rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-9xl {\r\n  width: 9rem;\r\n  height: 9rem;\r\n  font-size: 9rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-xl {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-lg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size).c-icon-sm {\r\n  width: 0.875rem;\r\n  height: 0.875rem;\r\n  font-size: 0.875rem;\r\n}";
styleInject(css_248z$6);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var warned = {};

var colog = function colog(msg, icon) {
  if (!warned[icon] && process && process.env && process.env.NODE_ENV === 'development') {
    warned[icon] = true;
    console.error(msg);
  }
};

var toCamelCase = function toCamelCase(str) {
  return str.replace(/([-_][a-z0-9])/ig, function ($1) {
    return $1.toUpperCase();
  }).replace(/-/ig, '');
}; //component - CoreUI / CIcon


var CIcon = function CIcon(props) {
  var className = props.className,
      name = props.name,
      content = props.content,
      customClasses = props.customClasses,
      size = props.size,
      src = props.src,
      title = props.title,
      use = props.use,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "name", "content", "customClasses", "size", "src", "title", "use"]);

  var _useState = React.useState(0),
      change = _useState[0],
      setChange = _useState[1];

  React.useMemo(function () {
    return setChange(change + 1);
  }, [name, JSON.stringify[content]]);
  var iconName = React.useMemo(function () {
    var iconNameIsKebabCase = name && name.includes('-');
    return iconNameIsKebabCase ? toCamelCase(name) : name;
  }, [change]);
  var titleCode = title ? "<title>" + title + "</title>" : '';
  var code = React.useMemo(function () {
    if (content) {
      return content;
    } else if (name && React__default['default'].icons) {
      return React__default['default'].icons[iconName] ? React__default['default'].icons[iconName] : colog("CIcon component: icon name '" + iconName + "' does not exist in React.icons object. " + "To use icons by 'name' prop you need to make them available globally " + "by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n", iconName);
    }
  }, [change]);
  var iconCode = React.useMemo(function () {
    return Array.isArray(code) ? code[1] || code[0] : code;
  }, [change]);

  var scale = function () {
    return Array.isArray(code) && code.length > 1 ? code[0] : '64 64';
  }();

  var viewBox = function () {
    return attributes.viewBox || "0 0 " + scale;
  }();

  var computedSize = function () {
    var addCustom = !size && (attributes.width || attributes.height);
    return size === 'custom' || addCustom ? 'custom-size' : size;
  }(); //render


  var computedClasses = classnames('c-icon', computedSize && "c-icon-" + computedSize, className);
  var classes = customClasses || computedClasses;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !src && !use && /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, attributes, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox,
    className: classes,
    role: "img",
    dangerouslySetInnerHTML: {
      __html: titleCode + iconCode
    }
  })), src && !use && /*#__PURE__*/React__default['default'].createElement("img", _extends({}, attributes, {
    className: className,
    src: src,
    role: "img"
  })), !src && use && /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, attributes, {
    xmlns: "http://www.w3.org/2000/svg",
    className: classes,
    role: "img"
  }), /*#__PURE__*/React__default['default'].createElement("use", {
    href: use
  })));
};

CIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  className: propTypes.string,
  name: propTypes.string,
  content: propTypes.oneOfType([propTypes.string, propTypes.array]),
  size: propTypes.oneOf(['custom', 'custom-size', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
  customClasses: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  src: propTypes.string,
  title: propTypes.string,
  use: propTypes.string
} : {};

const cilArrowTop = ["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"];

const cilBan = ["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.705,240,240,0,0,0,425.706,86.294ZM256,48A207.1,207.1,0,0,1,391.528,98.345L98.345,391.528A207.1,207.1,0,0,1,48,256C48,141.309,141.309,48,256,48Zm0,416a207.084,207.084,0,0,1-134.986-49.887l293.1-293.1A207.084,207.084,0,0,1,464,256C464,370.691,370.691,464,256,464Z' class='ci-primary'/>"];

const cilFilterX = ["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='40 16 40 53.828 109.024 136 150.815 136 76.896 48 459.51 48 304 242.388 304 401.373 241.373 464 240 464 240 368 208 368 208 496 254.627 496 336 414.627 336 253.612 496 53.612 496 16 40 16' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='166.403 248.225 226.864 187.763 204.237 165.135 143.775 225.597 83.313 165.135 60.687 187.763 121.148 248.225 60.687 308.687 83.313 331.314 143.775 270.852 204.237 331.314 226.864 308.687 166.403 248.225' class='ci-primary'/>"];

var css_248z$5 = ".CDataTable-module_transparent__3GSyJ {\r\n  opacity: 0.4;\r\n}\r\n.CDataTable-module_icon-transition__8IFBV {\r\n  -webkit-transition: transform 0.3s;\r\n  transition: transform 0.3s;\r\n}\r\n.CDataTable-module_arrow-position__1lyvp {\r\n  right: 0;\r\n  top: 50%;\r\n  -ms-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n.CDataTable-module_rotate-icon__3zBIv {\r\n  -ms-transform: translateY(-50%) rotate(-180deg);\r\n  transform: translateY(-50%) rotate(-180deg);\r\n}\r\n";
var style = {"transparent":"CDataTable-module_transparent__3GSyJ","icon-transition":"CDataTable-module_icon-transition__8IFBV","arrow-position":"CDataTable-module_arrow-position__1lyvp","rotate-icon":"CDataTable-module_rotate-icon__3zBIv"};
styleInject(css_248z$5);

var css_248z$4 = ".c-datatable-filter {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.c-datatable-filter label {\r\n  margin-bottom: 0;\r\n}\r\n.c-datatable-items-per-page {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n.c-datatable-items-per-page label {\r\n  margin-bottom: 0;\r\n}\r\n";
styleInject(css_248z$4);

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CDataTable = function CDataTable(props) {
  var _ref3;

  var innerRef = props.innerRef,
      overTableSlot = props.overTableSlot,
      columnHeaderSlot = props.columnHeaderSlot,
      sortingIconSlot = props.sortingIconSlot,
      columnFilterSlot = props.columnFilterSlot,
      noItemsViewSlot = props.noItemsViewSlot,
      noItemsView = props.noItemsView,
      captionSlot = props.captionSlot,
      footerSlot = props.footerSlot,
      underTableSlot = props.underTableSlot,
      theadTopSlot = props.theadTopSlot,
      loadingSlot = props.loadingSlot,
      scopedSlots = props.scopedSlots,
      loading = props.loading,
      fields = props.fields,
      pagination = props.pagination,
      activePage = props.activePage,
      itemsPerPage = props.itemsPerPage,
      items = props.items,
      sorter = props.sorter,
      header = props.header,
      clickableRows = props.clickableRows,
      columnFilter = props.columnFilter,
      tableFilterValue = props.tableFilterValue,
      tableFilter = props.tableFilter,
      cleaner = props.cleaner,
      addTableClasses = props.addTableClasses,
      size = props.size,
      dark = props.dark,
      striped = props.striped,
      hover = props.hover,
      border = props.border,
      outlined = props.outlined,
      responsive = props.responsive,
      footer = props.footer,
      itemsPerPageSelect = props.itemsPerPageSelect,
      sorterValue = props.sorterValue,
      columnFilterValue = props.columnFilterValue,
      onRowClick = props.onRowClick,
      onSorterValueChange = props.onSorterValueChange,
      onPaginationChange = props.onPaginationChange,
      onColumnFilterChange = props.onColumnFilterChange,
      onPagesChange = props.onPagesChange,
      onTableFilterChange = props.onTableFilterChange,
      onPageChange = props.onPageChange,
      onFilteredItemsChange = props.onFilteredItemsChange;
  var compData = React.useRef({
    firstRun: true,
    columnFiltered: 0,
    changeItems: 0
  }).current; //

  var _useState = React.useState(itemsPerPage),
      _useState2 = _slicedToArray(_useState, 2),
      perPageItems = _useState2[0],
      setPerPageItems = _useState2[1];

  var _useState3 = React.useState(sorterValue || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      sorterState = _useState4[0],
      setSorterState = _useState4[1];

  var _useState5 = React.useState(tableFilterValue),
      _useState6 = _slicedToArray(_useState5, 2),
      tableFilterState = _useState6[0],
      setTableFilterState = _useState6[1];

  var _useState7 = React.useState(columnFilterValue || {}),
      _useState8 = _slicedToArray(_useState7, 2),
      columnFilterState = _useState8[0],
      setColumnFilterState = _useState8[1];

  var _useState9 = React.useState(activePage || 1),
      _useState10 = _slicedToArray(_useState9, 2),
      page = _useState10[0],
      setPage = _useState10[1];

  var _useState11 = React.useState(items || []),
      _useState12 = _slicedToArray(_useState11, 2),
      passedItems = _useState12[0],
      setPassedItems = _useState12[1]; // functions


  var cellClass = function cellClass(item, colName, index) {
    var classes = [];

    if (item._cellClasses && item._cellClasses[colName]) {
      classes.push(item._cellClasses[colName]);
    }

    if (fields && fields[index]._classes) {
      classes.push(fields[index]._classes);
    }

    return classes;
  };

  var pretifyName = function pretifyName(name) {
    return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  var headerClass = function headerClass(i) {
    return fields && fields[i]._classes && fields[i]._classes;
  };

  var isSortable = function isSortable(i) {
    var isDataColumn = itemsDataColumns.includes(rawColumnNames[i]);
    return sorter && (!fields || fields[i].sorter !== false) && isDataColumn;
  };

  var headerStyles = function headerStyles(index) {
    var style = {
      verticalAlign: 'middle',
      overflow: 'hidden'
    };

    if (isSortable(index)) {
      style.cursor = 'pointer';
    }

    if (fields && fields[index] && fields[index]._style) {
      return _objectSpread$4(_objectSpread$4({}, style), fields[index]._style);
    }

    return style;
  };

  var getIconState = function getIconState(index) {
    var direction = sorterState.asc ? 'asc' : 'desc';
    return rawColumnNames[index] === sorterState.column ? direction : 0;
  };

  var iconClasses = function iconClasses(index) {
    var state = getIconState(index);
    return ['position-absolute', style['icon-transition'], style['arrow-position'], !state && style['transparent'], state === 'desc' && style['rotate-icon']];
  };

  var rowClicked = function rowClicked(item, index, e) {
    var detailsClick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    onRowClick && onRowClick(item, index, getClickedColumnName(e, detailsClick), e);
  };

  var changeSort = function changeSort(column, index) {
    if (!isSortable(index)) {
      return;
    } //if column changed or sort was descending change asc to true


    var state = sorterState;
    var columnRepeated = state.column === column;

    if (!sorter || !sorter.resetable) {
      state.column = column;
    } else {
      state.column = columnRepeated && state.asc === false ? null : column;
    }

    state.asc = !(columnRepeated && state.asc);
    setSorterState(_objectSpread$4({}, state));
  };

  React.useEffect(function () {
    onSorterValueChange && onSorterValueChange(sorterState);
  }, [JSON.stringify(sorterState)]);

  var paginationChange = function paginationChange(e) {
    onPaginationChange && onPaginationChange(Number(e.target.value));
    !itemsPerPageSelect.external && setPerPageItems(Number(e.target.value));
  };

  var columnFilterEvent = function columnFilterEvent(colName, value, type) {
    var isLazy = columnFilter && columnFilter.lazy === true;

    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return;
    }

    var newState = _objectSpread$4(_objectSpread$4({}, columnFilterState), {}, _defineProperty({}, "".concat(colName), value));

    setColumnFilterState(newState);
  };

  React.useEffect(function () {
    onColumnFilterChange && onColumnFilterChange(columnFilterState);
  }, [JSON.stringify(columnFilterState)]);

  var tableFilterChange = function tableFilterChange(value, type) {
    var isLazy = tableFilter && tableFilter.lazy === true;

    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return;
    }

    setTableFilterState(value);
  };

  React.useEffect(function () {
    onTableFilterChange && onTableFilterChange(tableFilterState);
  }, [tableFilterState]);

  var getClickedColumnName = function getClickedColumnName(e, detailsClick) {
    if (detailsClick) {
      return 'details';
    } else {
      var children = Array.from(e.target.closest('tr').children);
      var clickedCell = children.filter(function (child) {
        return child.contains(e.target);
      })[0];
      return rawColumnNames[children.indexOf(clickedCell)];
    }
  };

  var clean = function clean() {
    setTableFilterState('');
    setColumnFilterState({});
    setSorterState({
      column: "",
      asc: true
    });
  }; // computed


  var genCols = Object.keys(passedItems[0] || {}).filter(function (el) {
    return el.charAt(0) !== '_';
  });
  var rawColumnNames = fields ? fields.map(function (el) {
    return el.key || el;
  }) : genCols;
  var itemsDataColumns = rawColumnNames.filter(function (name) {
    return genCols.includes(name);
  });
  React.useMemo(function () {
    compData.columnFiltered++;
  }, [JSON.stringify(columnFilter), JSON.stringify(columnFilterState), itemsDataColumns.join(''), compData.changeItems]);
  var columnFiltered = React.useMemo(function () {
    var items = passedItems;

    if (columnFilter && columnFilter.external) {
      return items;
    }

    Object.entries(columnFilterState).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var columnFilter = String(value).toLowerCase();

      if (columnFilter && itemsDataColumns.includes(key)) {
        items = items.filter(function (item) {
          return String(item[key]).toLowerCase().includes(columnFilter);
        });
      }
    });
    return items;
  }, [compData.columnFiltered]);
  var tableFiltered = React.useMemo(function () {
    var items = columnFiltered;

    if (!tableFilterState || tableFilter && tableFilter.external) {
      return items;
    }

    var filter = tableFilterState.toLowerCase();

    var valueContainFilter = function valueContainFilter(val) {
      return String(val).toLowerCase().includes(filter);
    };

    items = items.filter(function (item) {
      return !!itemsDataColumns.find(function (key) {
        return valueContainFilter(item[key]);
      });
    });
    return items;
  }, [compData.columnFiltered, tableFilterState, JSON.stringify(tableFilter)]);
  var sortedItems = React.useMemo(function () {
    var col = sorterState.column;

    if (!col || !itemsDataColumns.includes(col) || sorter && sorter.external) {
      return tableFiltered;
    } //if values in column are to be sorted by numeric value they all have to be type number


    var flip = sorterState.asc ? 1 : -1;
    var sorted = tableFiltered.slice().sort(function (item, item2) {
      var value = item[col];
      var value2 = item2[col];
      var a = typeof value === 'number' ? value : String(value).toLowerCase();
      var b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase();
      return a > b ? 1 * flip : b > a ? -1 * flip : 0;
    });
    return sorted;
  }, [JSON.stringify(tableFiltered), JSON.stringify(sorterState), JSON.stringify(sorter)]);
  React.useEffect(function () {
    !compData.firstRun && onFilteredItemsChange && onFilteredItemsChange(sortedItems);
  }, [JSON.stringify(sortedItems)]);
  var tableClasses = ['table', (_ref3 = {}, _defineProperty(_ref3, "table-".concat(size), size), _defineProperty(_ref3, 'table-dark', dark), _defineProperty(_ref3, 'table-striped', striped), _defineProperty(_ref3, 'table-hover', hover), _defineProperty(_ref3, 'table-bordered', border), _defineProperty(_ref3, 'border', outlined), _ref3), addTableClasses];
  var columnNames = React.useMemo(function () {
    if (fields) {
      return fields.map(function (f) {
        return f.label !== undefined ? f.label : pretifyName(f.key || f);
      });
    }

    return rawColumnNames.map(function (el) {
      return pretifyName(el);
    });
  }, [fields, rawColumnNames]);
  var sortingIconStyles = sorter && 'position-relative pr-4';
  var colspan = rawColumnNames.length;
  var totalPages = Math.ceil(sortedItems.length / perPageItems) || 1;
  React.useMemo(function () {
    !compData.firstRun && onPagesChange && onPagesChange(totalPages);
  }, [totalPages]);
  var computedPage = React.useMemo(function () {
    var compPage = pagination ? page : activePage;
    !compData.firstRun && onPageChange && onPageChange(compPage);
    return compPage;
  }, [page, activePage, pagination]);
  var firstItemIndex = (computedPage - 1) * perPageItems || 0;
  var paginatedItems = sortedItems.slice(firstItemIndex, firstItemIndex + perPageItems);
  var currentItems = computedPage ? paginatedItems : sortedItems;
  var tableFilterData = {
    label: tableFilter && tableFilter.label || 'Filter:',
    placeholder: tableFilter && tableFilter.placeholder || 'type string...'
  };
  var paginationSelect = {
    label: itemsPerPageSelect && itemsPerPageSelect.label || 'Items per page:',
    values: itemsPerPageSelect && itemsPerPageSelect.values || [5, 10, 20, 50]
  };

  var noItemsText = function () {
    var customValues = noItemsView || {};

    if (passedItems.length) {
      return customValues.noResults || 'No filtering results';
    }

    return customValues.noItems || 'No items';
  }();

  var isFiltered = tableFilterState || sorterState.column || Object.values(columnFilterState).join('');
  var cleanerProps = {
    content: cilFilterX,
    className: "mfs-2 ".concat(isFiltered ? 'text-danger' : 'transparent'),
    role: isFiltered ? 'button' : null,
    tabIndex: isFiltered ? 0 : null
  }; // watch

  React.useMemo(function () {
    return setPerPageItems(itemsPerPage);
  }, [itemsPerPage]);
  React.useMemo(function () {
    return setSorterState(_objectSpread$4({}, sorterValue));
  }, [sorterValue]);
  React.useMemo(function () {
    return setTableFilterState(tableFilterValue);
  }, [tableFilterValue]);
  React.useMemo(function () {
    return setColumnFilterState(_objectSpread$4({}, columnFilterValue));
  }, [columnFilterValue]); //items

  React.useMemo(function () {
    if (items && !compData.firstRun && (items.length !== passedItems.length || JSON.stringify(items) !== JSON.stringify(passedItems))) {
      setPassedItems(items);
      compData.changeItems++;
    }
  }); // render

  compData.firstRun = false;
  var paginationProps = _typeof(pagination) === 'object' ? pagination : null;
  var headerContent = /*#__PURE__*/React__default['default'].createElement("tr", null, columnNames.map(function (name, index) {
    return /*#__PURE__*/React__default['default'].createElement("th", {
      onClick: function onClick() {
        changeSort(rawColumnNames[index], index);
      },
      className: classnames([headerClass(index), sortingIconStyles]),
      style: headerStyles(index),
      key: index
    }, columnHeaderSlot["".concat(rawColumnNames[index])] || /*#__PURE__*/React__default['default'].createElement("div", {
      className: "d-inline"
    }, name), isSortable(index) && (sortingIconSlot && sortingIconSlot(getIconState(index), iconClasses(index)) || /*#__PURE__*/React__default['default'].createElement(CIcon, {
      customClasses: classnames(iconClasses(index)),
      width: 18,
      content: cilArrowTop
    })));
  }));
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: innerRef
  }, (itemsPerPageSelect || tableFilter || cleaner) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "row my-2 mx-0"
  }, (tableFilter || cleaner) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "col-sm-6 form-inline p-0 c-datatable-filter"
  }, tableFilter && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "mfe-2"
  }, tableFilterData.label), /*#__PURE__*/React__default['default'].createElement("input", {
    className: "form-control",
    type: "text",
    placeholder: tableFilterData.placeholder,
    onInput: function onInput(e) {
      tableFilterChange(e.target.value, 'input');
    },
    onChange: function onChange(e) {
      tableFilterChange(e.target.value, 'change');
    },
    value: tableFilterState || '',
    "aria-label": "table filter input"
  })), cleaner && (typeof cleaner === 'function' ? cleaner(clean, isFiltered, cleanerProps) : /*#__PURE__*/React__default['default'].createElement(CIcon, _extends$1({}, cleanerProps, {
    onClick: clean,
    onKeyUp: function onKeyUp(event) {
      if (event.key === 'Enter') clean();
    }
  })))), itemsPerPageSelect && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "col-sm-6 p-0 ".concat(tableFilter || cleaner ? '' : 'offset-sm-6')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "form-inline justify-content-sm-end c-datatable-items-per-page"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "mfe-2"
  }, paginationSelect.label), /*#__PURE__*/React__default['default'].createElement("select", {
    className: "form-control",
    onChange: paginationChange,
    "aria-label": "changes number of visible items",
    value: perPageItems
  }, paginationSelect.values.map(function (number, key) {
    return /*#__PURE__*/React__default['default'].createElement("option", {
      val: number,
      key: key
    }, number);
  })))))), overTableSlot, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "position-relative ".concat(responsive && 'table-responsive')
  }, /*#__PURE__*/React__default['default'].createElement("table", {
    className: classnames(tableClasses)
  }, /*#__PURE__*/React__default['default'].createElement("thead", null, theadTopSlot, header && headerContent, columnFilter && /*#__PURE__*/React__default['default'].createElement("tr", {
    className: "table-sm"
  }, rawColumnNames.map(function (colName, index) {
    return /*#__PURE__*/React__default['default'].createElement("th", {
      className: classnames(headerClass(index)),
      key: index
    }, columnFilterSlot["".concat(rawColumnNames[index])] || (!fields || fields[index].filter !== false) && /*#__PURE__*/React__default['default'].createElement("input", {
      className: "form-control form-control-sm",
      onInput: function onInput(e) {
        columnFilterEvent(colName, e.target.value, 'input');
      },
      onChange: function onChange(e) {
        columnFilterEvent(colName, e.target.value, 'change');
      },
      value: columnFilterState[colName] || '',
      "aria-label": "column name: '".concat(colName, "' filter input")
    }));
  }))), /*#__PURE__*/React__default['default'].createElement("tbody", {
    style: clickableRows && {
      cursor: 'pointer'
    }
  }, currentItems.map(function (item, itemIndex) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: itemIndex
    }, /*#__PURE__*/React__default['default'].createElement("tr", {
      className: classnames(item._classes),
      tabIndex: clickableRows && 0,
      onClick: function onClick(e) {
        rowClicked(item, itemIndex + firstItemIndex, e);
      }
    }, rawColumnNames.map(function (colName, index) {
      return scopedSlots[colName] && /*#__PURE__*/React__default['default'].cloneElement(scopedSlots[colName](item, itemIndex + firstItemIndex), {
        'key': index
      }) || /*#__PURE__*/React__default['default'].createElement("td", {
        className: classnames(cellClass(item, colName, index)),
        key: index
      }, String(item[colName]));
    })), scopedSlots.details && /*#__PURE__*/React__default['default'].createElement("tr", {
      onClick: function onClick(e) {
        rowClicked(item, itemIndex + firstItemIndex, e, true);
      },
      className: "p-0",
      style: {
        border: 'none !important'
      },
      key: 'details' + itemIndex
    }, /*#__PURE__*/React__default['default'].createElement("td", {
      colSpan: colspan,
      className: "p-0",
      style: {
        border: 'none !important'
      }
    }, scopedSlots.details(item, itemIndex + firstItemIndex))));
  }), !currentItems.length && /*#__PURE__*/React__default['default'].createElement("tr", null, /*#__PURE__*/React__default['default'].createElement("td", {
    colSpan: colspan
  }, noItemsViewSlot || /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-center my-5"
  }, /*#__PURE__*/React__default['default'].createElement("h2", null, noItemsText + ' ', /*#__PURE__*/React__default['default'].createElement(CIcon, {
    width: "30",
    name: "cilBan",
    content: cilBan,
    className: "text-danger mb-2"
  })))))), footer && currentItems.length > 0 && /*#__PURE__*/React__default['default'].createElement("tfoot", null, headerContent), footerSlot, captionSlot), loading && (loadingSlot || /*#__PURE__*/React__default['default'].createElement(CElementCover, {
    boundaries: [{
      sides: ['top'],
      query: 'td'
    }, {
      sides: ['bottom'],
      query: 'tbody'
    }]
  }))), underTableSlot, pagination && /*#__PURE__*/React__default['default'].createElement(CPagination, _extends$1({
    style: {
      display: totalPages > 1 ? 'inline' : 'none'
    },
    onActivePageChange: function onActivePageChange(page) {
      setPage(page);
    },
    pages: totalPages,
    activePage: page
  }, paginationProps)));
};

CDataTable.propTypes = {
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  overTableSlot: propTypes.node,
  columnHeaderSlot: propTypes.object,
  sortingIconSlot: propTypes.func,
  columnFilterSlot: propTypes.object,
  noItemsViewSlot: propTypes.node,
  noItemsView: propTypes.object,
  captionSlot: propTypes.node,
  footerSlot: propTypes.node,
  underTableSlot: propTypes.node,
  scopedSlots: propTypes.object,
  theadTopSlot: propTypes.node,
  loadingSlot: propTypes.node,
  loading: propTypes.bool,
  fields: propTypes.array,
  pagination: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  activePage: propTypes.number,
  itemsPerPage: propTypes.number,
  items: propTypes.array,
  sorter: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  clickableRows: propTypes.bool,
  columnFilter: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  tableFilterValue: propTypes.string,
  tableFilter: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  cleaner: propTypes.oneOfType([propTypes.bool, propTypes.func]),
  addTableClasses: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  size: propTypes.string,
  dark: propTypes.bool,
  striped: propTypes.bool,
  hover: propTypes.bool,
  border: propTypes.bool,
  outlined: propTypes.bool,
  responsive: propTypes.bool,
  footer: propTypes.bool,
  itemsPerPageSelect: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  sorterValue: propTypes.object,
  columnFilterValue: propTypes.object,
  header: propTypes.bool,
  onRowClick: propTypes.func,
  onSorterValueChange: propTypes.func,
  onPaginationChange: propTypes.func,
  onColumnFilterChange: propTypes.func,
  onPagesChange: propTypes.func,
  onTableFilterChange: propTypes.func,
  onPageChange: propTypes.func,
  onFilteredItemsChange: propTypes.func
};
CDataTable.defaultProps = {
  itemsPerPage: 10,
  responsive: true,
  columnHeaderSlot: {},
  columnFilterSlot: {},
  scopedSlots: {},
  sorterValue: {},
  header: true
};

var Context$2 = /*#__PURE__*/React__default['default'].createContext();

var CTabContent = function CTabContent(props) {
  var className = props.className,
      innerRef = props.innerRef,
      fade = props.fade,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "fade"]); // render


  var classes = classnames('tab-content', className);
  return /*#__PURE__*/React__default['default'].createElement(Context$2.Provider, {
    value: fade
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  })));
};

CTabContent.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  fade: propTypes.bool
};
CTabContent.defaultProps = {
  fade: true
};

var getIndex = function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
};

var getState = function getState(r) {
  return r.current.dataset.tab || getIndex(r.current);
};

var CTabPane = function CTabPane(props) {
  var className = props.className,
      innerRef = props.innerRef,
      active = props.active,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "active"]);

  var _ref = React.useContext(Context$4) || {},
      activeTab = _ref.active,
      setActiveTab = _ref.setActiveTab;

  var fade = React.useContext(Context$2);
  var ref = _typeof(innerRef) === 'object' ? innerRef : React.useRef();
  typeof innerRef === 'function' && innerRef(ref);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  React.useEffect(function () {
    setIsActive(activeTab === getState(ref));
  }, [activeTab]);
  React.useEffect(function () {
    if (active !== undefined) {
      setActiveTab ? setActiveTab(active && getState(ref)) : setIsActive(active);
    }
  }, [active]); //render

  var classes = classnames('tab-pane', {
    'active': isActive
  }, className);
  var attrs = omitByKeys(attributes, CFadeProps);
  return /*#__PURE__*/React__default['default'].createElement(CFade, _extends$1({
    in: isActive,
    baseClass: fade ? 'fade' : '',
    className: classes
  }, attrs, {
    innerRef: ref
  }));
};

CTabPane.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  active: propTypes.bool
};

var CFooter = function CFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fixed = props.fixed,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "fixed"]); //render


  var classes = classnames('c-footer', fixed ? 'c-footer-fixed' : null, className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CFooter.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  fixed: propTypes.bool
};
CFooter.defaultProps = {
  tag: 'footer',
  fixed: false
};

var CHeader = function CHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      fixed = props.fixed,
      colorScheme = props.colorScheme,
      withSubheader = props.withSubheader,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "fixed", "colorScheme", "withSubheader"]); // render


  var classes = classnames(className, 'c-header', colorScheme ? 'c-header-' + colorScheme : null, fixed ? 'c-header-fixed' : null, withSubheader ? 'c-header-with-subheader' : null);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.node,
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  fixed: propTypes.bool,
  withSubheader: propTypes.bool,
  colorScheme: propTypes.string
};
CHeader.defaultProps = {
  tag: 'header',
  fixed: true,
  colorScheme: 'light'
};

var CHeaderNav = function CHeaderNav(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames(className, 'c-header-nav');
  return /*#__PURE__*/React__default['default'].createElement("ul", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeaderNav.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CHeaderNavItem = function CHeaderNavItem(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames(className, 'c-header-nav-item');
  return /*#__PURE__*/React__default['default'].createElement("li", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CHeaderNavItem.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CHeaderNavLink = function CHeaderNavLink(props) {
  var className = props.className,
      innerRef = props.innerRef,
      rest = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames(className, 'c-header-nav-link');
  return /*#__PURE__*/React__default['default'].createElement(CLink, _extends$1({
    className: classes
  }, rest, {
    innerRef: innerRef
  }));
};

CHeaderNavLink.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CHeaderBrand = function CHeaderBrand(props) {
  return /*#__PURE__*/React__default['default'].createElement(CBrand, _extends$1({}, props, {
    className: ['c-header-brand', props.className]
  }));
};

var CSubheader = function CSubheader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('c-subheader', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSubheader.propTypes = {
  tag: tagPropType,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CSubheader.defaultProps = {
  tag: 'div'
};

var Context$1 = /*#__PURE__*/React__default['default'].createContext({}); //component - CoreUI / CSidebar

var CSidebar = function CSidebar(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      breakpoint = props.breakpoint,
      show = props.show,
      fixed = props.fixed,
      unfoldable = props.unfoldable,
      minimize = props.minimize,
      size = props.size,
      hideOnMobileClick = props.hideOnMobileClick,
      aside = props.aside,
      colorScheme = props.colorScheme,
      overlaid = props.overlaid,
      dropdownMode = props.dropdownMode,
      onShowChange = props.onShowChange,
      onMinimizeChange = props.onMinimizeChange,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "breakpoint", "show", "fixed", "unfoldable", "minimize", "size", "hideOnMobileClick", "aside", "colorScheme", "overlaid", "dropdownMode", "onShowChange", "onMinimizeChange"]);

  var key = React.useState(Math.random().toString(36).substr(2))[0];

  var _useState = React.useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      openDropdown = _useState4[0],
      setOpenDropdown = _useState4[1];

  var node = React.useRef({}).current;

  var reference = function reference(r) {
    node.current = r;
    innerRef && innerRef(r);
  };

  var _useState5 = React.useState(minimize),
      _useState6 = _slicedToArray(_useState5, 2),
      minimized = _useState6[0],
      setIsMinimized = _useState6[1];

  React.useMemo(function () {
    setIsMinimized(minimize);
  }, [minimize]);

  var toggleMinimize = function toggleMinimize() {
    setIsMinimized(!minimized);
    onMinimizeChange && onMinimizeChange(minimized);
  };

  React.useMemo(function () {
    setIsOpen(show);
  }, [show]);
  React.useEffect(function () {
    isOpen === true ? createBackdrop() : removeBackdrop();
    return function () {
      return removeBackdrop();
    };
  }, [isOpen]); //methods

  var sidebarCloseListener = function sidebarCloseListener(e) {
    if (document.getElementById(key + 'backdrop') && !node.current.contains(e.target)) {
      closeSidebar();
    }
  };

  var onKeydown = function onKeydown(e) {
    e.key.includes('Esc') && isAutoclosable() && closeSidebar();
  };

  var createBackdrop = function createBackdrop() {
    var backdrop = document.createElement('div');

    if (overlaid) {
      document.addEventListener('click', sidebarCloseListener);
    } else {
      backdrop.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', onKeydown);
    backdrop.className = 'c-sidebar-backdrop c-show';
    backdrop.id = key + 'backdrop';
    document.body.appendChild(backdrop);
  };

  var removeBackdrop = function removeBackdrop() {
    var backdrop = document.getElementById(key + 'backdrop');

    if (backdrop) {
      document.removeEventListener('click', sidebarCloseListener);
      backdrop.removeEventListener('click', closeSidebar);
      document.removeEventListener('keydown', onKeydown);
      document.body.removeChild(backdrop);
    }
  };

  var closeSidebar = function closeSidebar() {
    if (typeof onShowChange === 'function') {
      onShowChange(overlaid ? false : 'responsive');
    } else {
      setIsOpen(overlaid ? false : 'responsive');
    }
  };

  var isOnMobile = function isOnMobile() {
    return Boolean(getComputedStyle(node.current).getPropertyValue('--is-mobile'));
  };

  var isAutoclosable = function isAutoclosable() {
    return isOnMobile() || overlaid;
  };

  var onSidebarClick = function onSidebarClick(e) {
    var sidebarItemClicked = String(e.target.className).includes('c-sidebar-nav-link');

    if (sidebarItemClicked && hideOnMobileClick && isAutoclosable()) {
      closeSidebar();
    }
  }; // render


  var haveResponsiveClass = breakpoint && isOpen === 'responsive';
  var classes = classnames('c-sidebar', colorScheme && "c-sidebar-".concat(colorScheme), isOpen === true && 'c-sidebar-show', haveResponsiveClass && "c-sidebar-".concat(breakpoint, "-show"), fixed && !overlaid && 'c-sidebar-fixed', aside && 'c-sidebar-right', minimized && !unfoldable && 'c-sidebar-minimized', minimized && unfoldable && 'c-sidebar-unfoldable', overlaid && 'c-sidebar-overlaid', size && "c-sidebar-".concat(size), className);
  return /*#__PURE__*/React__default['default'].createElement(Context$1.Provider, {
    value: {
      dropdownMode: dropdownMode,
      scrollbarExist: !minimized || unfoldable,
      toggleMinimize: toggleMinimize,
      openDropdown: openDropdown,
      setOpenDropdown: setOpenDropdown
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: reference,
    onClick: onSidebarClick
  }), children));
};

CSidebar.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  fixed: propTypes.bool,
  unfoldable: propTypes.bool,
  overlaid: propTypes.bool,
  breakpoint: propTypes.oneOf([false, '', 'sm', 'md', 'lg', 'xl', 'xxl']),
  minimize: propTypes.bool,
  show: propTypes.oneOf(['', true, false, 'responsive']),
  size: propTypes.oneOf(['', 'sm', 'lg', 'xl']),
  hideOnMobileClick: propTypes.bool,
  aside: propTypes.bool,
  colorScheme: propTypes.string,
  dropdownMode: propTypes.oneOf(['', 'openActive', 'close', 'closeInactive', 'noAction']),
  onShowChange: propTypes.func,
  onMinimizeChange: propTypes.func
};
CSidebar.defaultProps = {
  fixed: true,
  breakpoint: 'lg',
  show: 'responsive',
  hideOnMobileClick: true,
  colorScheme: 'dark'
};

var CSidebarBrand = function CSidebarBrand(props) {
  return /*#__PURE__*/React__default['default'].createElement(CBrand, _extends$1({}, props, {
    className: ['c-sidebar-brand', props.className]
  }));
};

var CSidebarNavDivider = function CSidebarNavDivider(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('c-sidebar-nav-divider', className);
  return /*#__PURE__*/React__default['default'].createElement("li", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarNavDivider.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CSidebarNavTitle = function CSidebarNavTitle(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('c-sidebar-nav-title', className);
  return /*#__PURE__*/React__default['default'].createElement("li", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarNavTitle.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DropdownContext = /*#__PURE__*/React__default['default'].createContext({});
var iconProps = function iconProps(icon) {
  if (_typeof(icon) === 'object') {
    var key = icon.size ? 'className' : 'customClasses';
    return _objectSpread$3(_objectSpread$3({}, icon), {}, _defineProperty({}, "".concat(key), icon.customClasses || "c-sidebar-nav-icon ".concat(icon.className)));
  } else {
    return {
      customClasses: 'c-sidebar-nav-icon',
      name: icon
    };
  }
}; //component - CoreUI / CSidebarNavDropdown

var CSidebarNavDropdown = function CSidebarNavDropdown(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      icon = props.icon,
      fontIcon = props.fontIcon,
      name = props.name,
      show = props.show,
      route = props.route,
      attributes = _objectWithoutProperties(props, ["children", "className", "innerRef", "icon", "fontIcon", "name", "show", "route"]);

  var ref = /*#__PURE__*/React.createRef();
  innerRef && innerRef(ref);

  var _useContext = React.useContext(Context$1),
      dropdownMode = _useContext.dropdownMode,
      openDropdown = _useContext.openDropdown,
      setOpenDropdown = _useContext.setOpenDropdown;

  var _useState = React.useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    setIsOpen(show);
  }, [show]);
  React.useEffect(function () {
    !dropdownMode && (!openDropdown || !ref.current.contains(openDropdown)) && setIsOpen(false);
  }, [openDropdown]);

  var toggle = function toggle() {
    !dropdownMode && setOpenDropdown(isOpen ? ref.current.parentNode.closest('.c-sidebar-nav-dropdown') : ref.current);
    setIsOpen(!isOpen);
  };

  var path = '';

  try {
    path = reactRouterDom.useLocation().pathname;
  } catch (e) {
    console.warn(e);
  }

  React.useEffect(function () {
    if (dropdownMode === 'close') {
      setIsOpen(false);
    } else if (dropdownMode === 'closeInactive' && route) {
      setIsOpen(path.includes(route));
    } else if ((!dropdownMode || dropdownMode !== 'noAction') && !isOpen && route) {
      setIsOpen(path.includes(route));
    }
  }, [path]); //render

  var classes = classnames('c-sidebar-nav-dropdown', isOpen && 'c-show', className);
  var iconClasses = classnames('c-sidebar-nav-icon', fontIcon);
  return /*#__PURE__*/React__default['default'].createElement("li", _extends$1({
    className: classes
  }, attributes, {
    ref: ref
  }), /*#__PURE__*/React__default['default'].createElement("a", {
    className: "c-sidebar-nav-dropdown-toggle",
    tabIndex: "0",
    onClick: toggle,
    "aria-label": "menu dropdown"
  }, icon && ( /*#__PURE__*/React.isValidElement(icon) ? icon : /*#__PURE__*/React__default['default'].createElement(CIcon, iconProps(icon))), fontIcon && /*#__PURE__*/React__default['default'].createElement("i", {
    className: iconClasses
  }), name), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "c-sidebar-nav-dropdown-items"
  }, /*#__PURE__*/React__default['default'].createElement(DropdownContext.Provider, {
    value: {
      isOpen: isOpen
    }
  }, children)));
};

CSidebarNavDropdown.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.node,
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  name: propTypes.oneOfType([propTypes.string, propTypes.object]),
  icon: propTypes.oneOfType([propTypes.object, propTypes.string]),
  fontIcon: propTypes.string,
  show: propTypes.bool,
  route: propTypes.string
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CSidebarNavItem = function CSidebarNavItem(props) {
  var children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      name = props.name,
      icon = props.icon,
      fontIcon = props.fontIcon,
      badge = props.badge,
      addLinkClass = props.addLinkClass,
      label = props.label,
      color = props.color,
      rest = _objectWithoutProperties(props, ["children", "className", "innerRef", "name", "icon", "fontIcon", "badge", "addLinkClass", "label", "color"]);

  var _useContext = React.useContext(DropdownContext),
      isOpen = _useContext.isOpen;

  var classes = classnames('c-sidebar-nav-item', className);
  var linkClasses = classnames(label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link', color && "c-sidebar-nav-link-".concat(color), addLinkClass);
  var routerLinkProps = rest.to && {
    exact: true,
    activeClassName: 'c-active'
  };
  return /*#__PURE__*/React__default['default'].createElement("li", {
    className: classes,
    ref: innerRef
  }, children || /*#__PURE__*/React__default['default'].createElement(CLink, _extends$1({
    className: linkClasses
  }, routerLinkProps, rest, {
    tabIndex: isOpen === false ? -1 : 0
  }), icon && ( /*#__PURE__*/React.isValidElement(icon) ? icon : /*#__PURE__*/React__default['default'].createElement(CIcon, iconProps(icon))), fontIcon && /*#__PURE__*/React__default['default'].createElement("i", {
    className: "c-sidebar-nav-icon ".concat(fontIcon)
  }), name, badge && /*#__PURE__*/React__default['default'].createElement(CBadge, _objectSpread$2(_objectSpread$2({}, badge), {}, {
    text: null
  }), badge.text)));
};

CSidebarNavItem.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  icon: propTypes.oneOfType([propTypes.string, propTypes.object]),
  fontIcon: propTypes.string,
  badge: propTypes.object,
  addLinkClass: propTypes.string,
  label: propTypes.bool,
  name: propTypes.oneOfType([propTypes.string, propTypes.object]),
  color: propTypes.string
};

var CSidebarFooter = function CSidebarFooter(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); // render


  var classes = classnames('c-sidebar-footer', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarFooter.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CSidebarFooter.defaultProps = {
  tag: 'div'
};

var CSidebarForm = function CSidebarForm(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('c-sidebar-form', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarForm.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CSidebarForm.defaultProps = {
  tag: 'div'
};

var CSidebarHeader = function CSidebarHeader(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef"]); //render


  var classes = classnames('c-sidebar-header', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CSidebarHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CSidebarHeader.defaultProps = {
  tag: 'div'
};

var CSidebarMinimizer = function CSidebarMinimizer(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]);

  var _useContext = React.useContext(Context$1),
      toggleMinimize = _useContext.toggleMinimize; //render


  var classes = classnames('c-sidebar-minimizer', className);
  return /*#__PURE__*/React__default['default'].createElement("button", _extends$1({
    className: classes,
    type: "button"
  }, attributes, {
    onClick: toggleMinimize,
    ref: innerRef
  }));
};

CSidebarMinimizer.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div$1(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div$1(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div$1(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div$1(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div$1(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

var css_248z$3 = "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n";
styleInject(css_248z$3);

var css_248z$2 = "/* rtl fix */\r\n.ps__rtl .ps__rail-y {\r\n    left: 0px !important;\r\n    right: unset !important;\r\n}\r\n*[dir=\"rtl\"] .ps__rail-y {\r\n    left: 0px !important;\r\n    right: unset !important;\r\n}\r\n\r\n.ps__rtl .ps__thumb-y {\r\n    left: 2px;\r\n    right: unset;\r\n}\r\n*[dir=\"rtl\"] .ps__thumb-y {\r\n  left: 2px;\r\n  right: unset;\r\n}\r\n";
styleInject(css_248z$2);

var CScrollbar = function CScrollbar(props) {
  var Tag = props.tag,
      className = props.className,
      innerRef = props.innerRef,
      settings = props.settings,
      switcher = props.switcher,
      attributes = _objectWithoutProperties(props, ["tag", "className", "innerRef", "settings", "switcher"]);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      instance = _useState2[0],
      setInstance = _useState2[1];

  var ref = /*#__PURE__*/React.createRef();
  innerRef && innerRef(ref);
  React.useEffect(function () {
    switcher ? init() : uninit();
  }, [switcher]);
  React.useEffect(function () {
    return uninit();
  }, []);

  var init = function init() {
    if (!instance) {
      createPerfectScrollbar();
    }
  };

  var createPerfectScrollbar = function createPerfectScrollbar() {
    setInstance(new PerfectScrollbar(ref.current, settings));
  };

  var uninit = function uninit() {
    if (instance) {
      instance.destroy();
      setInstance(null);
    }
  }; // render


  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classnames(className),
    style: {
      position: 'relative'
    }
  }, attributes, {
    ref: ref
  }));
};

CScrollbar.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  settings: propTypes.object,
  switcher: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};
CScrollbar.defaultProps = {
  tag: 'div'
};

var CSidebarNav = function CSidebarNav(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]);

  var _useContext = React.useContext(Context$1),
      scrollbarExist = _useContext.scrollbarExist;

  var navClasses = classnames('c-sidebar-nav', 'h-100', className); //state

  var isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';
  return /*#__PURE__*/React__default['default'].createElement(CScrollbar, _extends$1({
    settings: {
      suppressScrollX: !isRtl
    },
    className: navClasses,
    innerRef: innerRef,
    switcher: scrollbarExist,
    tag: "ul"
  }, attributes));
};

CSidebarNav.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.node,
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func])
};

var CSidebarClose = function CSidebarClose(props) {
  return /*#__PURE__*/React__default['default'].createElement(CButtonClose, _extends$1({}, props, {
    buttonClass: 'c-sidebar-close'
  }), /*#__PURE__*/React__default['default'].createElement("svg", {
    className: "c-icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "x"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"
  })));
};

var css_248z$1 = ".toast-fade {\r\n  transition: opacity .5s;\r\n}\r\n.toast-fade-slow {\r\n  transition: opacity 2s;\r\n}\r\n";
styleInject(css_248z$1);

var Context = /*#__PURE__*/React__default['default'].createContext({}); //component - CoreUI / CToast

var CToast = function CToast(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      show = props.show,
      autohide = props.autohide,
      fade = props.fade,
      color = props.color,
      onStateChange = props.onStateChange,
      attributes = _objectWithoutProperties(props, ["className", "children", "innerRef", "show", "autohide", "fade", "color", "onStateChange"]);

  var _useState = React.useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var timeout = React.useRef();
  React.useEffect(function () {
    setState(show);
  }, [show]); //triggered on mount and destroy

  React.useEffect(function () {
    return function () {
      return clearTimeout(timeout.current);
    };
  }, []);
  React.useEffect(function () {
    if (state === true && autohide) {
      setAutohide();
    }

    onStateChange && onStateChange(state);
  }, [state]);

  var setAutohide = function setAutohide() {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      startAutohide();
    }, autohide);
  };

  var onMouseOver = function onMouseOver() {
    if (state !== 'closing') {
      state !== true && setState(true);
      clearTimeout(timeout.current);
    }
  };

  var onMouseOut = function onMouseOut() {
    if (autohide && state !== 'closing') {
      setAutohide();
    }
  };

  var startAutohide = function startAutohide() {
    if (!fade) {
      return setState(false);
    }

    setState('hiding');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      setState(false);
    }, 2000);
  };

  var close = function close() {
    if (!fade) {
      return setState(false);
    }

    setState('closing');
    clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      setState(false);
    }, 500);
  }; // render


  var classes = classnames(_defineProperty({
    toast: true
  }, "toast-".concat(color), !!color), className);
  var fadeClasses = classnames(fade && (state === 'hiding' ? 'toast-fade-slow' : 'toast-fade'));
  var attrs = omitByKeys(attributes, CFadeProps);
  return /*#__PURE__*/React__default['default'].createElement(Context.Provider, {
    value: {
      close: close
    }
  }, state && /*#__PURE__*/React__default['default'].createElement(CFade, _extends$1({
    className: classes,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    in: state === true,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    baseClass: fadeClasses,
    innerRef: innerRef
  }, attrs), children));
};

CToast.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.node,
  //
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  show: propTypes.bool,
  autohide: propTypes.oneOfType([propTypes.number, propTypes.bool]),
  fade: propTypes.bool,
  color: propTypes.string,
  onStateChange: propTypes.func
};
CToast.defaultProps = {
  fade: true
};

var CToastHeader = function CToastHeader(props) {
  var className = props.className,
      children = props.children,
      innerRef = props.innerRef,
      closeButton = props.closeButton,
      attributes = _objectWithoutProperties(props, ["className", "children", "innerRef", "closeButton"]);

  var _useContext = React.useContext(Context),
      close = _useContext.close; //render


  var classes = classnames('toast-header', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }), children, closeButton && /*#__PURE__*/React__default['default'].createElement(CButtonClose, {
    className: "mfs-auto",
    onClick: close
  }));
};

CToastHeader.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.node,
  //
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  closeButton: propTypes.bool
};
CToastHeader.defaultProps = {
  closeButton: true
};

var CToastBody = function CToastBody(props) {
  var className = props.className,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "innerRef"]); //render


  var classes = classnames('toast-body', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CToastBody.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object])
};

var CToaster = function CToaster(props) {
  var className = props.className,
      innerRef = props.innerRef,
      position = props.position,
      attributes = _objectWithoutProperties(props, ["className", "innerRef", "position"]); // inherit closeButton, autohide, fade??
  // render


  var classes = classnames('toaster', position && position !== 'static' && 'toaster-' + position, className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes, {
    ref: innerRef
  }));
};

CToaster.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  position: propTypes.oneOf(['', 'static', 'top-right', 'top-left', 'top-center', 'top-full', 'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'])
};
CToaster.defaultProps = {
  position: 'top-right'
};

var CToggler = function CToggler(props) {
  var Tag = props.tag,
      children = props.children,
      className = props.className,
      innerRef = props.innerRef,
      inHeader = props.inHeader,
      inNavbar = props.inNavbar,
      attributes = _objectWithoutProperties(props, ["tag", "children", "className", "innerRef", "inHeader", "inNavbar"]);

  var typeAttr = Tag === 'button' ? {
    type: 'button'
  } : null;
  var type = inNavbar ? 'navbar' : inHeader ? 'c-header' : null;
  var togglerClass = type ? "".concat(type, "-toggler") : '';
  var iconClass = type ? "".concat(togglerClass, "-icon") : ''; //render

  var classes = classnames(togglerClass, className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends$1({
    className: classes
  }, typeAttr, attributes, {
    ref: innerRef
  }), children || /*#__PURE__*/React__default['default'].createElement("span", {
    className: iconClass
  }));
};

CToggler.propTypes = {
  tag: tagPropType,
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
  inHeader: propTypes.bool,
  inNavbar: propTypes.bool
};
CToggler.defaultProps = {
  tag: 'button'
};

/**!
* tippy.js v6.3.1
* (c) 2017-2021 atomiks
* MIT License
*/
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return (element == null ? void 0 : (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body) ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message

var visitedMessages;

if (process.env.NODE_ENV !== "production") {
  resetVisitedMessages();
}

function resetVisitedMessages() {
  visitedMessages = new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: function appendTo() {
    return document.body;
  },
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== "production") {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = passedProps[name] !== undefined ? passedProps[name] : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    if (process.env.NODE_ENV !== "production") {
      errorWhen(true, 'render() function has not been supplied.');
    }

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    } // Clicked on interactive popper


    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== "production") {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
    }
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
    }

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
    }

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== "production") {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== "production") {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

Object.assign({}, applyStyles$1, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

tippy.setDefaultProps({
  render: render
});

var css_248z = ".tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}";
styleInject(css_248z);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CTooltip = function CTooltip(props) {
  var children = props.children,
      content = props.content,
      interactive = props.interactive,
      placement = props.placement,
      trigger = props.trigger,
      advancedOptions = props.advancedOptions;
  var computedContent = React.useCallback(function () {
    return typeof content === 'string' ? content : server.renderToString(content);
  }, [content]);

  var config = _objectSpread$1({
    allowHTML: true,
    content: computedContent,
    interactive: interactive,
    placement: placement,
    trigger: trigger
  }, advancedOptions);

  var key = React.useState(Math.random().toString(36).substr(2))[0];
  var instance = React.useRef();
  React.useEffect(function () {
    if (instance.current) {
      instance.current.setProps(config);
    }
  });
  React.useEffect(function () {
    var node = document.querySelector("[data-tooltip=\"".concat(key, "\"]"));
    instance.current = tippy(node, config);
    return function () {
      return instance.current.destroy();
    };
  }, [key]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].cloneElement(children, {
    'data-tooltip': key
  }));
};

CTooltip.propTypes = {
  children: propTypes.node,
  content: propTypes.oneOfType([propTypes.string, propTypes.node]),
  interactive: propTypes.bool,
  placement: propTypes.oneOf(['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end']),
  trigger: propTypes.string,
  advancedOptions: propTypes.object
};
CTooltip.defaultProps = {
  content: '',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  advancedOptions: {}
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var template = "<h3 class=\"popover-header\">H</h3><div class=\"popover-body\">C</div>";

var generateContent = function generateContent(content, header) {
  return template.replace('H', server.renderToString(header)).replace('C', server.renderToString(content));
};

var CPopover = function CPopover(props) {
  var header = props.header,
      children = props.children,
      content = props.content,
      config = _objectWithoutProperties(props, ["header", "children", "content"]);

  var computedContent = React.useCallback(generateContent(content, header), [content, header]);

  var advancedOptions = _objectSpread(_objectSpread({}, config ? config.advancedOptions || {} : {}), {}, {
    theme: 'cpopover'
  });

  var computedConfig = _objectSpread(_objectSpread({}, config), {}, {
    advancedOptions: advancedOptions
  });

  return /*#__PURE__*/React__default['default'].createElement(CTooltip, _extends$1({
    content: computedContent
  }, computedConfig), children);
};

CPopover.propTypes = {
  children: propTypes.node,
  content: propTypes.oneOfType([propTypes.string, propTypes.node]),
  header: propTypes.oneOfType([propTypes.string, propTypes.node])
};

var CWidgetProgress = function CWidgetProgress(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      footer = props.footer,
      color = props.color,
      value = props.value,
      inverse = props.inverse,
      attributes = _objectWithoutProperties(props, ["children", "className", "header", "text", "footer", "color", "value", "inverse"]);

  var classes = classnames('card', inverse ? [color && "bg-".concat(color), 'text-white'] : '', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body"
  }, header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h4 m-0"
  }, header), text && /*#__PURE__*/React__default['default'].createElement("div", null, text), children || /*#__PURE__*/React__default['default'].createElement(CProgress, {
    color: !inverse ? color : '',
    value: value,
    className: "progress-xs my-3 mb-0 ".concat(inverse ? 'progress-white' : '')
  }), footer && /*#__PURE__*/React__default['default'].createElement("small", {
    className: "text-muted"
  }, footer)));
};

CWidgetProgress.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  header: propTypes.string,
  text: propTypes.string,
  footer: propTypes.string,
  color: propTypes.string,
  value: propTypes.number,
  inverse: propTypes.bool
};
CWidgetProgress.defaultProps = {
  value: 25
};

var CWidgetIcon = function CWidgetIcon(props) {
  var className = props.className,
      children = props.children,
      header = props.header,
      text = props.text,
      iconPadding = props.iconPadding,
      color = props.color,
      footerSlot = props.footerSlot,
      attributes = _objectWithoutProperties(props, ["className", "children", "header", "text", "iconPadding", "color", "footerSlot"]);

  var classes = classnames('card', color, className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body d-flex align-items-center ".concat(iconPadding ? 'p-3' : 'p-0')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mr-3 text-white bg-".concat(color, " ").concat(iconPadding ? 'p-3' : 'p-4')
  }, children), /*#__PURE__*/React__default['default'].createElement("div", null, header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-value text-".concat(color)
  }, header), text && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-muted text-uppercase font-weight-bold small"
  }, text))), footerSlot);
};

CWidgetIcon.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  header: propTypes.string,
  text: propTypes.string,
  iconPadding: propTypes.bool,
  color: propTypes.string,
  footerSlot: propTypes.node
};
CWidgetIcon.defaultProps = {
  iconPadding: true
};

var CWidgetBrand = function CWidgetBrand(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      rightHeader = props.rightHeader,
      rightFooter = props.rightFooter,
      leftHeader = props.leftHeader,
      leftFooter = props.leftFooter,
      addHeaderClasses = props.addHeaderClasses,
      bodySlot = props.bodySlot,
      attributes = _objectWithoutProperties(props, ["children", "className", "color", "rightHeader", "rightFooter", "leftHeader", "leftFooter", "addHeaderClasses", "bodySlot"]); // render


  var headerClasses = classnames('card-header content-center text-white p-0', color && "bg-".concat(color), addHeaderClasses);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: "card ".concat(className)
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: headerClasses
  }, children), bodySlot || /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body row text-center"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "col"
  }, rightHeader && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-value-lg"
  }, rightHeader), rightFooter && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-uppercase text-muted small"
  }, rightFooter)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "c-vr"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "col"
  }, leftHeader && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-value-lg"
  }, leftHeader), leftFooter && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-uppercase text-muted small"
  }, leftFooter))));
};

CWidgetBrand.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  color: propTypes.string,
  rightHeader: propTypes.string,
  rightFooter: propTypes.string,
  leftHeader: propTypes.string,
  leftFooter: propTypes.string,
  addHeaderClasses: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  bodySlot: propTypes.node
};

var CWidgetProgressIcon = function CWidgetProgressIcon(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      value = props.value,
      color = props.color,
      inverse = props.inverse,
      progressSlot = props.progressSlot,
      attributes = _objectWithoutProperties(props, ["children", "className", "header", "text", "value", "color", "inverse", "progressSlot"]);

  var classes = classnames('card', inverse ? [color && "bg-".concat(color), 'text-white'] : '', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body"
  }, children && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h1 text-muted text-right mb-4"
  }, children), header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h4 m-0"
  }, header), text && /*#__PURE__*/React__default['default'].createElement("small", {
    className: "text-muted text-uppercase font-weight-bold"
  }, text), progressSlot || /*#__PURE__*/React__default['default'].createElement(CProgress, {
    color: !inverse ? color : '',
    value: value,
    className: "progress-xs my-3 mb-0 ".concat(inverse ? 'progress-white' : '')
  })));
};

CWidgetProgressIcon.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  header: propTypes.string,
  text: propTypes.string,
  color: propTypes.string,
  value: propTypes.number,
  inverse: propTypes.bool,
  progressSlot: propTypes.node
};
CWidgetProgressIcon.defaultProps = {
  value: 25
};

var CWidgetDropdown = function CWidgetDropdown(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      color = props.color,
      footerSlot = props.footerSlot,
      text = props.text,
      attributes = _objectWithoutProperties(props, ["children", "className", "header", "color", "footerSlot", "text"]);

  var classes = classnames('card text-white', color && "bg-".concat(color), className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body pb-0 d-flex justify-content-between"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-value-lg"
  }, header), text && /*#__PURE__*/React__default['default'].createElement("div", null, text)), children), footerSlot);
};

CWidgetDropdown.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  header: propTypes.string,
  color: propTypes.string,
  footerSlot: propTypes.node,
  text: propTypes.string
};

var CWidgetSimple = function CWidgetSimple(props) {
  var children = props.children,
      className = props.className,
      header = props.header,
      text = props.text,
      attributes = _objectWithoutProperties(props, ["children", "className", "header", "text"]);

  var classes = classnames('card', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$1({
    className: classes
  }, attributes), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body text-center"
  }, header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-muted small text-uppercase font-weight-bold"
  }, header), text && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h2 py-3"
  }, text), children));
};

CWidgetSimple.propTypes = {
  children: propTypes.node,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  //
  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  header: propTypes.string,
  text: propTypes.string
};

var wrapper = function wrapper(props) {
  console.warn('CListGroupItemText component is deprecated, please use div tag instead');
  return /*#__PURE__*/React__default['default'].createElement("div", props);
};

var heading = function heading(props) {
  console.warn('CListGroupItemHeading component is deprecated, please use h5 tag instead');
  return /*#__PURE__*/React__default['default'].createElement("h5", props);
};

exports.CAlert = CAlert;
exports.CBadge = CBadge;
exports.CBreadcrumb = CBreadcrumb;
exports.CBreadcrumbItem = CBreadcrumbItem;
exports.CBreadcrumbRouter = CBreadcrumbRouter;
exports.CButton = CButton;
exports.CButtonClose = CButtonClose;
exports.CButtonGroup = CButtonGroup;
exports.CButtonToolbar = CButtonToolbar;
exports.CCallout = CCallout;
exports.CCard = CCard;
exports.CCardBody = CCardBody;
exports.CCardFooter = CCardFooter;
exports.CCardGroup = CCardGroup;
exports.CCardHeader = CCardHeader;
exports.CCardImg = CCardImg;
exports.CCardImgOverlay = CCardImgOverlay;
exports.CCardLink = CCardLink;
exports.CCardSubtitle = CCardSubtitle;
exports.CCardText = CCardText;
exports.CCardTitle = CCardTitle;
exports.CCarousel = CCarousel;
exports.CCarouselCaption = CCarouselCaption;
exports.CCarouselControl = CCarouselControl;
exports.CCarouselIndicators = CCarouselIndicators;
exports.CCarouselInner = CCarouselInner;
exports.CCarouselItem = CCarouselItem;
exports.CCol = CCol;
exports.CCollapse = CCollapse;
exports.CContainer = CContainer;
exports.CCreateElement = CCreateElement;
exports.CDataTable = CDataTable;
exports.CDropdown = CDropdown;
exports.CDropdownDivider = CDropdownDivider;
exports.CDropdownHeader = CDropdownHeader;
exports.CDropdownItem = CDropdownItem;
exports.CDropdownMenu = CDropdownMenu;
exports.CDropdownToggle = CDropdownToggle;
exports.CElementCover = CElementCover;
exports.CEmbed = CEmbed;
exports.CEmbedItem = CEmbedItem;
exports.CFade = CFade;
exports.CFooter = CFooter;
exports.CForm = CForm;
exports.CFormGroup = CFormGroup;
exports.CFormText = CFormText;
exports.CHeader = CHeader;
exports.CHeaderBrand = CHeaderBrand;
exports.CHeaderNav = CHeaderNav;
exports.CHeaderNavItem = CHeaderNavItem;
exports.CHeaderNavLink = CHeaderNavLink;
exports.CImg = CImg;
exports.CInput = CInput;
exports.CInputCheckbox = CInputCheckbox;
exports.CInputFile = CInputFile;
exports.CInputGroup = CInputGroup;
exports.CInputGroupAppend = CInputGroupAppend;
exports.CInputGroupPrepend = CInputGroupPrepend;
exports.CInputGroupText = CInputGroupText;
exports.CInputRadio = CInputRadio;
exports.CInvalidFeedback = CInvalidFeedback;
exports.CJumbotron = CJumbotron;
exports.CLabel = CLabel;
exports.CLink = CLink;
exports.CListGroup = CListGroup;
exports.CListGroupItem = CListGroupItem;
exports.CListGroupItemHeading = heading;
exports.CListGroupItemText = wrapper;
exports.CMedia = CMedia;
exports.CMediaBody = CMediaBody;
exports.CModal = CModal;
exports.CModalBody = CModalBody;
exports.CModalFooter = CModalFooter;
exports.CModalHeader = CModalHeader;
exports.CModalTitle = CModalTitle;
exports.CNav = CNav;
exports.CNavItem = CNavItem;
exports.CNavLink = CNavLink;
exports.CNavbar = CNavbar;
exports.CNavbarBrand = CNavbarBrand;
exports.CNavbarNav = CNavbarNav;
exports.CNavbarText = CNavbarText;
exports.CPagination = CPagination;
exports.CPopover = CPopover;
exports.CProgress = CProgress;
exports.CProgressBar = CProgressBar;
exports.CRow = CRow;
exports.CSelect = CSelect;
exports.CSidebar = CSidebar;
exports.CSidebarBrand = CSidebarBrand;
exports.CSidebarClose = CSidebarClose;
exports.CSidebarFooter = CSidebarFooter;
exports.CSidebarForm = CSidebarForm;
exports.CSidebarHeader = CSidebarHeader;
exports.CSidebarMinimizer = CSidebarMinimizer;
exports.CSidebarNav = CSidebarNav;
exports.CSidebarNavDivider = CSidebarNavDivider;
exports.CSidebarNavDropdown = CSidebarNavDropdown;
exports.CSidebarNavItem = CSidebarNavItem;
exports.CSidebarNavTitle = CSidebarNavTitle;
exports.CSpinner = CSpinner;
exports.CSubheader = CSubheader;
exports.CSwitch = CSwitch;
exports.CTabContent = CTabContent;
exports.CTabPane = CTabPane;
exports.CTabs = CTabs;
exports.CTextarea = CTextarea;
exports.CToast = CToast;
exports.CToastBody = CToastBody;
exports.CToastHeader = CToastHeader;
exports.CToaster = CToaster;
exports.CToggler = CToggler;
exports.CTooltip = CTooltip;
exports.CValidFeedback = CValidFeedback;
exports.CWidgetBrand = CWidgetBrand;
exports.CWidgetDropdown = CWidgetDropdown;
exports.CWidgetIcon = CWidgetIcon;
exports.CWidgetProgress = CWidgetProgress;
exports.CWidgetProgressIcon = CWidgetProgressIcon;
exports.CWidgetSimple = CWidgetSimple;
//# sourceMappingURL=index.js.map
