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
      }, 400);
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
        className: "jsx-282525384" + " " + (['plug-prompt', this.state.visible ? 'active' : ''].join(' ') || "")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-282525384" + " " + "content"
      }, this.state.message), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "282525384"
      }, ".plug-prompt.jsx-282525384{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#666;padding:20px 30px;font-size:14px;color:#fff;border-radius:6px;opacity:0;width:0;height:0;-webkit-transition:all;transition:all;}.plug-prompt.active.jsx-282525384{opacity:1;width:auto;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXh0anNcXHdlYmpzXFxwbHVnc1xccHJvbXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCNEIsQUFHd0MsQUFlTCxVQUNDLEtBZkgsTUFnQkksRUFmSCxTQUN1QixDQWVwQyx3R0Fkb0IsZ0JBQ0Usa0JBQ0gsZUFDSixXQUNPLGtCQUNSLFVBQ0YsUUFDQyxTQUVkLHNDQUFDIiwiZmlsZSI6IkU6XFxuZXh0anNcXHdlYmpzXFxwbHVnc1xccHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFByb21wdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb21wdCAobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGU6IHRydWV9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBtZXNzYWdlfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2aXNpYmxlOiBmYWxzZX0pO1xyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIFJlYWN0LiRwcm9tcHQgPSB0aGlzLnNob3dQcm9tcHQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbJ3BsdWctcHJvbXB0JywgdGhpcy5zdGF0ZS52aXNpYmxlID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBsdWctcHJvbXB0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBsdWctcHJvbXB0LmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0O1xyXG4iXX0= */\n/*@ sourceURL=E:\\nextjs\\webjs\\plugs\\prompt.js */"));
    }
  }]);

  return Prompt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ })

})
//# sourceMappingURL=demo2.js.723962ee7c74369aae84.hot-update.js.map