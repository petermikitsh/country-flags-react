(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

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

/***/ "../country-flags-react/dist/flags/MC.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/MC.js ***!
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

function MC(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#f31830",
    d: "M0 0h512v256H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 256h512v256H0z"
  })));
}

var _default = MC;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=138.js.map