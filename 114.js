(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!**********************************************************************************************!*\
  !*** /Users/pmikitsh/git/country-flags-react/node_modules/@babel/runtime/helpers/extends.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../country-flags-react/dist/flags/JP.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/JP.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

function JP(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.7,
    d: "M177.2 0h708.6v708.7H177.2z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt",
    clipPath: "url(#prefix__a)",
    transform: "translate(-128) scale(.72249)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h1063v708.7H0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 523.1,
    cy: 344.1,
    r: 194.9,
    fill: "#d30000",
    transform: "translate(-59.7 -34.5) scale(1.1302)"
  })));
}

var _default = JP;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=114.js.map