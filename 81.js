(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

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

/***/ "../country-flags-react/dist/flags/GG.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/GG.js ***!
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

function GG(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h512v512H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8112d",
    d: "M192 0h128v512H192z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#e8112d",
    d: "M0 187.7h512v136.6H0z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "prefix__a",
    fill: "#f9dd16",
    d: "M46 305.8l23.3-25h210v-49.7h-210L46 206.2z"
  }), /*#__PURE__*/React.createElement("use", {
    width: 36,
    height: 24,
    transform: "matrix(0 1.06667 -.9375 0 496 -17)",
    xlinkHref: "#prefix__a"
  }), /*#__PURE__*/React.createElement("use", {
    width: 36,
    height: 24,
    transform: "matrix(0 -1.06667 .9375 0 16 529)",
    xlinkHref: "#prefix__a"
  }), /*#__PURE__*/React.createElement("use", {
    width: 36,
    height: 24,
    transform: "rotate(180 256 256)",
    xlinkHref: "#prefix__a"
  }));
}

var _default = GG;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=81.js.map