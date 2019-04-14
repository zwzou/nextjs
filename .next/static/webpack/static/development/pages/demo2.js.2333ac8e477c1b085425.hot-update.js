webpackHotUpdate("static\\development\\pages\\demo2.js",{

/***/ "./webjs/plugs/prompt.js":
/*!*******************************!*\
  !*** ./webjs/plugs/prompt.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.1@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var Prompt =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Prompt, _React$Component);

  function Prompt(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prompt);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Prompt).call(this, props));
    _this.state = {
      visible: false,
      message: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prompt, [{
    key: "showPrompt",
    value: function showPrompt(message) {
      var _this2 = this;

      this.setState({
        visible: true
      });
      this.setState({
        message: message
      });
      setTimeout(function () {
        _this2.setState({
          visible: false
        });
      }, 200);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      react__WEBPACK_IMPORTED_MODULE_6___default.a.$prompt = this.showPrompt.bind(this);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1392078310" + " " + (['plug-prompt', this.state.visible ? 'active' : ''].join(' ') || "")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1392078310" + " " + "content"
      }, this.state.message), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1392078310"
      }, ".plug-prompt.jsx-1392078310{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#666;padding:20px 30px;font-size:14px;color:#fff;border-radius:6px;opacity:0;width:0;height:0;}.plug-prompt.active.jsx-1392078310{opacity:1;width:auto;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXh0anNcXHdlYmpzXFxwbHVnc1xccHJvbXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCNEIsQUFHd0MsQUFjTCxVQUNDLEtBZEgsTUFlSSxFQWRILFNBQ3VCLENBY3BDLHdHQWJvQixnQkFDRSxrQkFDSCxlQUNKLFdBQ08sa0JBQ1IsVUFDRixRQUNDLFNBQ2IiLCJmaWxlIjoiRTpcXG5leHRqc1xcd2VianNcXHBsdWdzXFxwcm9tcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUHJvbXB0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvbXB0IChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlzaWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IG1lc3NhZ2V9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGU6IGZhbHNlfSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgUmVhY3QuJHByb21wdCA9IHRoaXMuc2hvd1Byb21wdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1sncGx1Zy1wcm9tcHQnLCB0aGlzLnN0YXRlLnZpc2libGUgPyAnYWN0aXZlJyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAucGx1Zy1wcm9tcHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBsdWctcHJvbXB0LmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0O1xyXG4iXX0= */\n/*@ sourceURL=E:\\nextjs\\webjs\\plugs\\prompt.js */"));
    }
  }]);

  return Prompt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ })

})
//# sourceMappingURL=demo2.js.2333ac8e477c1b085425.hot-update.js.map