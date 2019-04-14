webpackHotUpdate("static\\development\\pages\\demo2.js",{

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
    key: "onClick",
    value: function onClick() {
      react__WEBPACK_IMPORTED_MODULE_6___default.a.$prompt('成功！');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          _this3.onClick();
        },
        className: "jsx-2885270796"
      }), this.props.children)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_plugs_prompt__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2885270796"
      }, ".plug-admin.jsx-2885270796{position:absolute;top:0;left:0;right:0;bottom:0;font-size:14px;}.admin-top.jsx-2885270796{position:fixed;top:0;left:0;right:0;height:50px;background:rgb(84,92,100);box-sizing:border-box;border-bottom:5px solid #5FB878;}.admin-body.jsx-2885270796{padding-top:50px;height:100%;box-sizing:border-box;}.menu-warp.jsx-2885270796{width:200px;height:100%;float:left;box-sizing:border-box;background:rgb(84,92,100);color:#fff;}.menu-warp.jsx-2885270796 .item.jsx-2885270796{height:50px;line-height:50px;padding-left:30px;cursor:pointer;font-size:15px;}.menu-warp.jsx-2885270796 .item.active.jsx-2885270796{color:rgb(255,208,75);}.menu-warp.jsx-2885270796 .item.jsx-2885270796:hover{background:rgb(67,74,80);}.slot-content.jsx-2885270796{width:calc(100% - 200px);height:100%;float:right;background:rgb(237,237,239);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXh0anNcXHdlYmpzXFxwYWdlc1xcYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUd5QixBQVFILEFBVUUsQUFLTCxBQVFBLEFBT1ksQUFHRyxBQUdGLFlBcEJiLEFBUUssR0F2QlgsRUFVTSxDQWxCTixHQVNDLENBNkJSLEVBckNRLEFBdUJJLENBaUJaLEFBR2EsR0FsQ0osQ0FTaUIsQUFhUCxFQTlCVixJQXVCYyxDQWRWLENBa0NBLEVBMUNILFFBOEJNLENBN0JBLEFBUWEsQ0FrQ0UsRUExQi9CLE1BTTZCLEtBUWIsQ0E3QmhCLFdBUXVCLEdBc0J2QixBQVlBLE1BcEJZLFdBQ1osRUFkaUMsZ0NBQ2pDIiwiZmlsZSI6IkU6XFxuZXh0anNcXHdlYmpzXFxwYWdlc1xcYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFBsdWdQcm9tcHQgZnJvbSAnLi4vcGx1Z3MvcHJvbXB0JztcclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bWVudURhdGE6IFt7XHJcblx0XHRcdFx0bmFtZTogJ+ihqOagvOWinuWIoOaUueafpScsXHJcblx0XHRcdFx0cGF0aDogJy9sZWFybnNxbCdcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdG5hbWU6ICdkZW1vMicsXHJcblx0XHRcdFx0cGF0aDogJy9kZW1vMidcclxuXHRcdFx0fV1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuXHRcdGNvbnN0IHNldERhdGEgPSB0aGlzLnN0YXRlLm1lbnVEYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRpZiAoaXRlbS5wYXRoID09PSB0aGlzLnByb3BzLnJvdXRlci5yb3V0ZSkge1xyXG5cdFx0XHRcdGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bWVudURhdGE6IHNldERhdGF9KTtcclxuXHR9XHJcblxyXG5cdG9uQ2xpY2sgKCkge1xyXG5cdFx0UmVhY3QuJHByb21wdCgn5oiQ5Yqf77yBJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbHVnLWFkbWluXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhZG1pbi10b3BcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWJvZHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudS13YXJwXCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLm1lbnVEYXRhLm1hcCggKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7aXRlbS5wYXRofWB9IGtleT17aXRlbS5uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snaXRlbScsIGl0ZW0uYWN0aXZlID8gJ2FjdGl2ZScgOiAnJ10uam9pbignICcpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbG90LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5vbkNsaWNrKCl9fT48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFBsdWdQcm9tcHQgLz5cclxuXHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0LnBsdWctYWRtaW4ge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmFkbWluLXRvcCB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoODQsIDkyLCAxMDApO1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzVGQjg3ODtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5hZG1pbi1ib2R5IHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdCAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1lbnUtd2FycCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyMDBweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDg0LCA5MiwgMTAwKTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubWVudS13YXJwIC5pdGVtIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogNTBweDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5tZW51LXdhcnAgLml0ZW0uYWN0aXZlIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHJnYigyNTUsIDIwOCwgNzUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1lbnUtd2FycCAuaXRlbTpob3ZlciB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYig2NywgNzQsIDgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zbG90LWNvbnRlbnQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGZsb2F0OiByaWdodDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDIzNywgMjM3LCAyMzkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFkbWluKTtcclxuIl19 */\n/*@ sourceURL=E:\\nextjs\\webjs\\pages\\admin.js */"));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Admin));

/***/ })

})
//# sourceMappingURL=demo2.js.40c1b8ad2df61dd7527c.hot-update.js.map