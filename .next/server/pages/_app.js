/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/form.tsx":
/*!**************************!*\
  !*** ./context/form.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormProvider\": () => (/* binding */ FormProvider),\n/* harmony export */   \"useFormContext\": () => (/* binding */ useFormContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultContext = {\n    error: \"\",\n    greenLightDuration: null,\n    setGreenLightDuration: ()=>{},\n    setError: ()=>{}\n};\nconst FormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContext);\nconst FormProvider = ({ children  })=>{\n    const [greenLightDuration, setGreenLightDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const contextValues = {\n        error,\n        greenLightDuration,\n        setError,\n        setGreenLightDuration\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContext.Provider, {\n        value: contextValues,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/context/form.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\nconst useFormContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Zvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0Y7QUFZcEYsTUFBTUcsaUJBQTBCO0lBQzlCQyxPQUFPO0lBQ1BDLG9CQUFvQixJQUFJO0lBQ3hCQyx1QkFBdUIsSUFBTSxDQUFDO0lBQzlCQyxVQUFVLElBQU0sQ0FBQztBQUNuQjtBQUVBLE1BQU1DLDRCQUFjUixvREFBYUEsQ0FBQ0c7QUFFM0IsTUFBTU0sZUFBMkMsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUN4RSxNQUFNLENBQUNMLG9CQUFvQkMsc0JBQXNCLEdBQUdKLCtDQUFRQSxDQUF5QixJQUFJO0lBQ3pGLE1BQU0sQ0FBQ0UsT0FBT0csU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBWTtJQUU5QyxNQUFNUyxnQkFBZ0I7UUFDcEJQO1FBQ0FDO1FBQ0FFO1FBQ0FEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0UsWUFBWUksUUFBUTtRQUFDQyxPQUFPRjtrQkFDMUJEOzs7Ozs7QUFHUCxFQUFDO0FBRU0sTUFBTUksaUJBQWlCLElBQU1iLGlEQUFVQSxDQUFDTyxhQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNiYWstY2FzZS8uL2NvbnRleHQvZm9ybS50c3g/ZmQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgRkMsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBlcnJvclR5cGUgPSBzdHJpbmdcbnR5cGUgZ3JlZW5MaWdodER1cmF0aW9uVHlwZSA9IG51bWJlciB8IG51bGxcblxuaW50ZXJmYWNlIElDb250ZXh0IHtcbiAgZXJyb3I6IGVycm9yVHlwZVxuICBncmVlbkxpZ2h0RHVyYXRpb246IGdyZWVuTGlnaHREdXJhdGlvblR5cGVcbiAgc2V0R3JlZW5MaWdodER1cmF0aW9uOiBEaXNwYXRjaDxudW1iZXIgfCBudWxsPlxuICBzZXRFcnJvcjogRGlzcGF0Y2g8c3RyaW5nPlxufVxuXG5jb25zdCBkZWZhdWx0Q29udGV4dDpJQ29udGV4dCA9IHtcbiAgZXJyb3I6ICcnLFxuICBncmVlbkxpZ2h0RHVyYXRpb246IG51bGwsXG4gIHNldEdyZWVuTGlnaHREdXJhdGlvbjogKCkgPT4ge30sXG4gIHNldEVycm9yOiAoKSA9PiB7fVxufVxuXG5jb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdENvbnRleHQpXG5cbmV4cG9ydCBjb25zdCBGb3JtUHJvdmlkZXI6RkM8eyBjaGlsZHJlbjogUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZ3JlZW5MaWdodER1cmF0aW9uLCBzZXRHcmVlbkxpZ2h0RHVyYXRpb25dID0gdXNlU3RhdGU8Z3JlZW5MaWdodER1cmF0aW9uVHlwZT4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxlcnJvclR5cGU+KCcnKVxuXG4gIGNvbnN0IGNvbnRleHRWYWx1ZXMgPSB7XG4gICAgZXJyb3IsXG4gICAgZ3JlZW5MaWdodER1cmF0aW9uLFxuICAgIHNldEVycm9yLFxuICAgIHNldEdyZWVuTGlnaHREdXJhdGlvblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZvcm1Db250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dCkiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImRlZmF1bHRDb250ZXh0IiwiZXJyb3IiLCJncmVlbkxpZ2h0RHVyYXRpb24iLCJzZXRHcmVlbkxpZ2h0RHVyYXRpb24iLCJzZXRFcnJvciIsIkZvcm1Db250ZXh0IiwiRm9ybVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb250ZXh0VmFsdWVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUZvcm1Db250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/form.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBRWdCO0FBRTlCLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFDRSw4REFBQ0gsdURBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2Jhay1jYXNlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgRm9ybVByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L2Zvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkZvcm1Qcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();