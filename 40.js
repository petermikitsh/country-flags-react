(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

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

/***/ "../country-flags-react/dist/flags/CF.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/CF.js ***!
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

function CF(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.7,
    d: "M0 0h512v512H0z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#prefix__a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#00f",
    d: "M-52-.5h768v127H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M-52 383.5h768V512H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#009a00",
    d: "M-52 255h768v128.5H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-52 126.5h768V255H-52z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M268 0h128v512H268z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M109.5 112.3L75.9 89.1l-33.4 23.4 11.6-39.2-32.5-24.6 40.7-1L75.7 8.8l13.5 38.6 40.8.8L97.6 73"
  })));
}

var _default = CF;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=40.js.map