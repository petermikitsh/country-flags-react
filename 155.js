(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

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

/***/ "../country-flags-react/dist/flags/MV.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/MV.js ***!
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

function MV(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#d21034",
    d: "M0 0h512v512H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#007e3a",
    d: "M128 128h256v256H128z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 288,
    cy: 256,
    r: 85.3,
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 308.6,
    cy: 256,
    fill: "#007e3a",
    rx: 73.9,
    ry: 85.3
  }));
}

var _default = MV;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=155.js.map