(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

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

/***/ "../country-flags-react/dist/flags/JM.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/JM.js ***!
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

function JM(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0l256 256L0 512zm512 0L256 256l256 256z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#090",
    d: "M0 0l256 256L512 0zm0 512l256-256 256 256z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fc0",
    d: "M512 0h-47.7L0 464.3V512h47.7L512 47.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fc0",
    d: "M0 0v47.7L464.3 512H512v-47.7L47.7 0z"
  })));
}

var _default = JM;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=112.js.map