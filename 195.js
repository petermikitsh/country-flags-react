(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195],{

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

/***/ "../country-flags-react/dist/flags/SC.js":
/*!***********************************************!*\
  !*** ../country-flags-react/dist/flags/SC.js ***!
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

function SC(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 512 512",
    focusable: false,
    height: "24px",
    width: "24px"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "prefix__a"
  }, /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.7,
    d: "M0 0h512v496H0z"
  }))), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    strokeWidth: "1pt",
    clipPath: "url(#prefix__a)",
    transform: "scale(1 1.0321)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "red",
    d: "M0 0h992.1v496H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#090",
    d: "M0 496l992.1-165.3v165.4H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 496l992.1-330.6v165.3L0 496.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#009",
    d: "M0 496V0h330.7L0 496z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff0",
    d: "M0 496L330.7 0h330.7L0 496z"
  })));
}

var _default = SC;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=195.js.map