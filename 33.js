(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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

/***/ "../country-flags-react/dist/flags/BV.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/BV.js ***!
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

function BV(props) {
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
    strokeWidth: "1pt",
    clipPath: "url(#prefix__a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M-68 0h699.7v512H-68z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#d72828",
    d: "M-93-77.8h218.7v276.2H-93zM249.4-.6h381v199h-381zM-67.6 320h190.4v190.3H-67.5zm319.6 2.1h378.3v188.2H252z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003897",
    d: "M156.7-25.4H221v535.7h-64.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#003897",
    d: "M-67.5 224.8h697.8v63.5H-67.5z"
  })));
}

var _default = BV;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=33.js.map