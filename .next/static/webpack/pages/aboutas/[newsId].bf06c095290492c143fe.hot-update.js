self["webpackHotUpdate_N_E"]("pages/aboutas/[newsId]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
  if (developerName.length == 0) developerName = ((0,C_Users_MANJULA_Nextjs_app_Project_1_007_01_starting_project_01_starting_project_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("developerName"), []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0YXMvW25ld3NJZF0uanMiXSwibmFtZXMiOlsiZGV0YWlscyIsImlkIiwibmFtZSIsInJvbGUiLCJEZXZlbG9wZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuZXdzSWQiLCJxdWVyeSIsImRldmVsb3Blck5hbWUiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxNQUFmO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FEYyxFQUdkO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FIYyxFQUtkO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxRQUFmO0FBQXlCQyxNQUFJLEVBQUU7QUFBL0IsQ0FMYyxDQUFoQjs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxNQUE1QjtBQUNBLE1BQU1FLGFBQWEsR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQzdDLFFBQUlBLElBQUksQ0FBQ1YsRUFBTCxJQUFXTSxNQUFmLEVBQ0EsT0FBT0ksSUFBUDtBQUNELEdBSHFCLENBQXRCO0FBSUEsTUFBR0YsYUFBYSxDQUFDRyxNQUFkLElBQXNCLENBQXpCLEVBQ0FILGFBQWEscU1BQUMsRUFBRCxDQUFiO0FBQ0Esc0JBQU87QUFBQSxjQUFNQSxhQUFhLENBQUNJLEdBQWQsQ0FBa0IsVUFBQ0YsSUFBRDtBQUFBLDBCQUFTO0FBQUEsbUJBQUtBLElBQUksQ0FBQ1QsSUFBVixFQUFnQlMsSUFBSSxDQUFDUixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQUFBLEtBQWxCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FWRDs7R0FBTUMsUztVQUNXRSxrRDs7O0tBRFhGLFM7QUFXTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dGFzL1tuZXdzSWRdLmJmMDZjMDk1MjkwNDkyYzE0M2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgZGV0YWlscyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcIllhc2hcIiwgcm9sZTogXCJTZW5pb3IgRGV2ZWxvcGVyXCIgfSxcclxuXHJcbiAgeyBpZDogMiwgbmFtZTogXCJWYWliaGF2XCIsIHJvbGU6IFwiQmFja2VuZCBEZXZlbG9wZXJcIiB9LFxyXG5cclxuICB7IGlkOiAzLCBuYW1lOiBcIlN1cmVzaFwiLCByb2xlOiBcIkZyb250ZW5kIERldmVsb3BlclwiIH0sXHJcbl07XHJcbmNvbnN0IERldmVsb3BlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBuZXdzSWQgPSByb3V0ZXIucXVlcnkubmV3c0lkO1xyXG4gIGNvbnN0IGRldmVsb3Blck5hbWUgPSBkZXRhaWxzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uaWQgPT0gbmV3c0lkKSBcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0pO1xyXG4gIGlmKGRldmVsb3Blck5hbWUubGVuZ3RoPT0wKVxyXG4gIGRldmVsb3Blck5hbWU9W11cclxuICByZXR1cm4gPGRpdj57ZGV2ZWxvcGVyTmFtZS5tYXAoKGl0ZW0pPT4oPGgxPntpdGVtLm5hbWV9e2l0ZW0ucm9sZX08L2gxPikpfTwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9