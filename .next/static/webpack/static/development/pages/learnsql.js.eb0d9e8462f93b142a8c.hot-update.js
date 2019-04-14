webpackHotUpdate("static\\development\\pages\\learnsql.js",{

/***/ "./webjs/pages/admin.js":
/*!******************************!*\
  !*** ./webjs/pages/admin.js ***!
  \******************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/_next@8.0.4@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/_next@8.0.4@next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plugs_prompt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plugs/prompt */ "./webjs/plugs/prompt.js");











var Admin =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Admin, _React$Component);

  function Admin(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Admin);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Admin).call(this, props));
    _this.state = {
      menuData: [{
        name: '表格增删改查',
        path: '/learnsql'
      }, {
        name: 'demo2',
        path: '/demo2'
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var setData = this.state.menuData.map(function (item) {
        item.active = false;

        if (item.path === _this2.props.router.route) {
          item.active = true;
        }

        return item;
      });
      this.setState({
        menuData: setData
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2885270796" + " " + "plug-admin"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2885270796" + " " + "admin-top"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2885270796" + " " + "admin-body"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2885270796" + " " + "menu-warp"
      }, this.state.menuData.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "".concat(item.path),
          key: item.name
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-2885270796" + " " + (['item', item.active ? 'active' : ''].join(' ') || "")
        }, item.name));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2885270796" + " " + "slot-content"
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2885270796"
      }, ".plug-admin.jsx-2885270796{position:absolute;top:0;left:0;right:0;bottom:0;font-size:14px;}.admin-top.jsx-2885270796{position:fixed;top:0;left:0;right:0;height:50px;background:rgb(84,92,100);box-sizing:border-box;border-bottom:5px solid #5FB878;}.admin-body.jsx-2885270796{padding-top:50px;height:100%;box-sizing:border-box;}.menu-warp.jsx-2885270796{width:200px;height:100%;float:left;box-sizing:border-box;background:rgb(84,92,100);color:#fff;}.menu-warp.jsx-2885270796 .item.jsx-2885270796{height:50px;line-height:50px;padding-left:30px;cursor:pointer;font-size:15px;}.menu-warp.jsx-2885270796 .item.active.jsx-2885270796{color:rgb(255,208,75);}.menu-warp.jsx-2885270796 .item.jsx-2885270796:hover{background:rgb(67,74,80);}.slot-content.jsx-2885270796{width:calc(100% - 200px);height:100%;float:right;background:rgb(237,237,239);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXh0anNcXHdlYmpzXFxwYWdlc1xcYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQixBQUd5QixBQVFILEFBVUUsQUFLTCxBQVFBLEFBT1ksQUFHRyxBQUdGLFlBcEJiLEFBUUssR0F2QlgsRUFVTSxDQWxCTixHQVNDLENBNkJSLEVBckNRLEFBdUJJLENBaUJaLEFBR2EsR0FsQ0osQ0FTaUIsQUFhUCxFQTlCVixJQXVCYyxDQWRWLENBa0NBLEVBMUNILFFBOEJNLENBN0JBLEFBUWEsQ0FrQ0UsRUExQi9CLE1BTTZCLEtBUWIsQ0E3QmhCLFdBUXVCLEdBc0J2QixBQVlBLE1BcEJZLFdBQ1osRUFkaUMsZ0NBQ2pDIiwiZmlsZSI6IkU6XFxuZXh0anNcXHdlYmpzXFxwYWdlc1xcYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFBsdWdQcm9tcHQgZnJvbSAnLi4vcGx1Z3MvcHJvbXB0JztcclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bWVudURhdGE6IFt7XHJcblx0XHRcdFx0bmFtZTogJ+ihqOagvOWinuWIoOaUueafpScsXHJcblx0XHRcdFx0cGF0aDogJy9sZWFybnNxbCdcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdG5hbWU6ICdkZW1vMicsXHJcblx0XHRcdFx0cGF0aDogJy9kZW1vMidcclxuXHRcdFx0fV1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuXHRcdGNvbnN0IHNldERhdGEgPSB0aGlzLnN0YXRlLm1lbnVEYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRpZiAoaXRlbS5wYXRoID09PSB0aGlzLnByb3BzLnJvdXRlci5yb3V0ZSkge1xyXG5cdFx0XHRcdGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bWVudURhdGE6IHNldERhdGF9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGx1Zy1hZG1pblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tdG9wXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhZG1pbi1ib2R5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtd2FycFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5tZW51RGF0YS5tYXAoIChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake2l0ZW0ucGF0aH1gfSBrZXk9e2l0ZW0ubmFtZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ2l0ZW0nLCBpdGVtLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyddLmpvaW4oJyAnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xvdC1jb250ZW50XCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5wbHVnLWFkbWluIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5hZG1pbi10b3Age1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDg0LCA5MiwgMTAwKTtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM1RkI4Nzg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuYWRtaW4tYm9keSB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHQgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5tZW51LXdhcnAge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYig4NCwgOTIsIDEwMCk7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1lbnUtd2FycCAuaXRlbSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMzBweDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubWVudS13YXJwIC5pdGVtLmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAyMDgsIDc1KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5tZW51LXdhcnAgLml0ZW06aG92ZXIge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoNjcsIDc0LCA4MCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc2xvdC1jb250ZW50IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigyMzcsIDIzNywgMjM5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBZG1pbik7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\nextjs\\webjs\\pages\\admin.js */"));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Admin));

/***/ }),

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
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prompt, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2644377216" + " " + "plug-prompt"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2644377216" + " " + "content"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2644377216"
      }, ".plug-prompt.jsx-2644377216{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXh0anNcXHdlYmpzXFxwbHVnc1xccHJvbXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCNEIsQUFHd0MsZUFDUCxRQUNDLFNBQ3VCLHlHQUNGLDJCQUNsQyIsImZpbGUiOiJFOlxcbmV4dGpzXFx3ZWJqc1xccGx1Z3NcXHByb21wdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQcm9tcHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbHVnLXByb21wdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAucGx1Zy1wcm9tcHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0O1xyXG4iXX0= */\n/*@ sourceURL=E:\\nextjs\\webjs\\plugs\\prompt.js */"));
    }
  }]);

  return Prompt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ })

})
//# sourceMappingURL=learnsql.js.eb0d9e8462f93b142a8c.hot-update.js.map