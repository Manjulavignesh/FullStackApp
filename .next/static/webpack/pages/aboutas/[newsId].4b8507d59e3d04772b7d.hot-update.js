self["webpackHotUpdate_N_E"]("pages/aboutas/[newsId]",{

/***/ "./pages/aboutas/[newsId].js":
/*!***********************************!*\
  !*** ./pages/aboutas/[newsId].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_MANJULA_Nextjs_app_Project_1_007_01_starting_project_01_starting_project_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\MANJULA\\Nextjs-app\\Project-1\\007 01-starting-project\\01-starting-project\\pages\\aboutas\\[newsId].js",
    _this = undefined,
    _s = $RefreshSig$();


var details = [{
  id: 1,
  name: "Yash",
  role: "Senior Developer"
}, {
  id: 2,
  name: "Vaibhav",
  role: "Backend Developer"
}, {
  id: 3,
  name: "Suresh",
  role: "Frontend Developer"
}];

var Developer = function Developer() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var newsId = router.query.newsId;
  var developerName = details.filter(function (item) {
    if (item.id == newsId) return item;
  });
  if (developerName.length == 0) developerName = ((0,C_Users_MANJULA_Nextjs_app_Project_1_007_01_starting_project_01_starting_project_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("developerName"), [{
    name: ""
  }]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: developerName.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [item.name, item.role]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 43
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, _this);
};

_s(Developer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Developer;
/* harmony default export */ __webpack_exports__["default"] = (Developer);

var _c;

$RefreshReg$(_c, "Developer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRhcy9bbmV3c0lkXS5qcyJdLCJuYW1lcyI6WyJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsIkRldmVsb3BlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm5ld3NJZCIsInF1ZXJ5IiwiZGV2ZWxvcGVyTmFtZSIsImZpbHRlciIsIml0ZW0iLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsTUFBZjtBQUF1QkMsTUFBSSxFQUFFO0FBQTdCLENBRGMsRUFHZDtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsU0FBZjtBQUEwQkMsTUFBSSxFQUFFO0FBQWhDLENBSGMsRUFLZDtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsUUFBZjtBQUF5QkMsTUFBSSxFQUFFO0FBQS9CLENBTGMsQ0FBaEI7O0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsTUFBNUI7QUFDQSxNQUFNRSxhQUFhLEdBQUdULE9BQU8sQ0FBQ1UsTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUM3QyxRQUFJQSxJQUFJLENBQUNWLEVBQUwsSUFBV00sTUFBZixFQUNBLE9BQU9JLElBQVA7QUFDRCxHQUhxQixDQUF0QjtBQUlBLE1BQUdGLGFBQWEsQ0FBQ0csTUFBZCxJQUFzQixDQUF6QixFQUNBSCxhQUFhLHFNQUFDLENBQUM7QUFBQ1AsUUFBSSxFQUFDO0FBQU4sR0FBRCxDQUFELENBQWI7QUFDQSxzQkFBTztBQUFBLGNBQU1PLGFBQWEsQ0FBQ0ksR0FBZCxDQUFrQixVQUFDRixJQUFEO0FBQUEsMEJBQVM7QUFBQSxtQkFBS0EsSUFBSSxDQUFDVCxJQUFWLEVBQWdCUyxJQUFJLENBQUNSLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBQUEsS0FBbEI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQVZEOztHQUFNQyxTO1VBQ1dFLGtEOzs7S0FEWEYsUztBQVdOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0YXMvW25ld3NJZF0uNGI4NTA3ZDU5ZTNkMDQ3NzJiN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBkZXRhaWxzID0gW1xyXG4gIHsgaWQ6IDEsIG5hbWU6IFwiWWFzaFwiLCByb2xlOiBcIlNlbmlvciBEZXZlbG9wZXJcIiB9LFxyXG5cclxuICB7IGlkOiAyLCBuYW1lOiBcIlZhaWJoYXZcIiwgcm9sZTogXCJCYWNrZW5kIERldmVsb3BlclwiIH0sXHJcblxyXG4gIHsgaWQ6IDMsIG5hbWU6IFwiU3VyZXNoXCIsIHJvbGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIgfSxcclxuXTtcclxuY29uc3QgRGV2ZWxvcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5ld3NJZCA9IHJvdXRlci5xdWVyeS5uZXdzSWQ7XHJcbiAgY29uc3QgZGV2ZWxvcGVyTmFtZSA9IGRldGFpbHMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5pZCA9PSBuZXdzSWQpIFxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbiAgaWYoZGV2ZWxvcGVyTmFtZS5sZW5ndGg9PTApXHJcbiAgZGV2ZWxvcGVyTmFtZT1be25hbWU6XCJcIn1dXHJcbiAgcmV0dXJuIDxkaXY+e2RldmVsb3Blck5hbWUubWFwKChpdGVtKT0+KDxoMT57aXRlbS5uYW1lfXtpdGVtLnJvbGV9PC9oMT4pKX08L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERldmVsb3BlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==