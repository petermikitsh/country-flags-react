(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

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

/***/ "../country-flags-react/dist/flags/SL.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/SL.js ***!
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

function SL(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__a"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 384,
    height: 512,
    rx: 4.6,
    ry: 7.6
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#prefix__a)",
    transform: "scale(1.33333 1)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#0000cd",
    d: "M0 341.7h512V512H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 171.4h512v170.3H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00cd00",
    d: "M0 0h512v171.4H0z"
  })));
}

var _default = SL;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=203.js.map