(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

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

/***/ "../country-flags-react/dist/flags/CI.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/CI.js ***!
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

function CI(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#00cd00",
    d: "M341.5 0H512v512H341.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff9a00",
    d: "M0 0h170.3v512H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M170.3 0h171.2v512H170.3z"
  })));
}

var _default = CI;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=43.js.map