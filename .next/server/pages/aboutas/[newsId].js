(function() {
var exports = {};
exports.id = "pages/aboutas/[newsId]";
exports.ids = ["pages/aboutas/[newsId]"];
exports.modules = {

/***/ "./pages/aboutas/[newsId].js":
/*!***********************************!*\
  !*** ./pages/aboutas/[newsId].js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MANJULA\\Nextjs-app\\Project-1\\007 01-starting-project\\01-starting-project\\pages\\aboutas\\[newsId].js";

const details = [{
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

const Developer = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const newsId = router.query.newsId;
  let developerName = details.filter(item => {
    if (item.id == newsId) return item;
  });
  if (developerName.length == 0) developerName = [{
    name: "Developer doesn't exist"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: developerName.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: [item.name, item.role]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 43
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Developer);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/aboutas/[newsId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYWJvdXRhcy9bbmV3c0lkXS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZGV0YWlscyIsImlkIiwibmFtZSIsInJvbGUiLCJEZXZlbG9wZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuZXdzSWQiLCJxdWVyeSIsImRldmVsb3Blck5hbWUiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE1BQWY7QUFBdUJDLE1BQUksRUFBRTtBQUE3QixDQURjLEVBR2Q7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFNBQWY7QUFBMEJDLE1BQUksRUFBRTtBQUFoQyxDQUhjLEVBS2Q7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE1BQUksRUFBRTtBQUEvQixDQUxjLENBQWhCOztBQU9BLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxNQUE1QjtBQUNBLE1BQUlFLGFBQWEsR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWdCQyxJQUFELElBQVU7QUFDM0MsUUFBSUEsSUFBSSxDQUFDVixFQUFMLElBQVdNLE1BQWYsRUFDQSxPQUFPSSxJQUFQO0FBQ0QsR0FIbUIsQ0FBcEI7QUFJQSxNQUFHRixhQUFhLENBQUNHLE1BQWQsSUFBc0IsQ0FBekIsRUFDQUgsYUFBYSxHQUFDLENBQUM7QUFBQ1AsUUFBSSxFQUFDO0FBQU4sR0FBRCxDQUFkO0FBQ0Esc0JBQU87QUFBQSxjQUFNTyxhQUFhLENBQUNJLEdBQWQsQ0FBbUJGLElBQUQsaUJBQVM7QUFBQSxpQkFBS0EsSUFBSSxDQUFDVCxJQUFWLEVBQWdCUyxJQUFJLENBQUNSLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBM0I7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQVZEOztBQVdBLCtEQUFlQyxTQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2Fib3V0YXMvW25ld3NJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgZGV0YWlscyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcIllhc2hcIiwgcm9sZTogXCJTZW5pb3IgRGV2ZWxvcGVyXCIgfSxcclxuXHJcbiAgeyBpZDogMiwgbmFtZTogXCJWYWliaGF2XCIsIHJvbGU6IFwiQmFja2VuZCBEZXZlbG9wZXJcIiB9LFxyXG5cclxuICB7IGlkOiAzLCBuYW1lOiBcIlN1cmVzaFwiLCByb2xlOiBcIkZyb250ZW5kIERldmVsb3BlclwiIH0sXHJcbl07XHJcbmNvbnN0IERldmVsb3BlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBuZXdzSWQgPSByb3V0ZXIucXVlcnkubmV3c0lkO1xyXG4gIGxldCBkZXZlbG9wZXJOYW1lID0gZGV0YWlscy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIGlmIChpdGVtLmlkID09IG5ld3NJZCkgXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxuICBpZihkZXZlbG9wZXJOYW1lLmxlbmd0aD09MClcclxuICBkZXZlbG9wZXJOYW1lPVt7bmFtZTpcIkRldmVsb3BlciBkb2Vzbid0IGV4aXN0XCJ9XTtcclxuICByZXR1cm4gPGRpdj57ZGV2ZWxvcGVyTmFtZS5tYXAoKGl0ZW0pPT4oPGgxPntpdGVtLm5hbWV9e2l0ZW0ucm9sZX08L2gxPikpfTwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9