"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GreenLightDurationForm.tsx":
/*!***********************************************!*\
  !*** ./components/GreenLightDurationForm.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst greenLightInputRegex = /^\\b([1-9]|[12][0-9]|30)\\b$/;\nconst GreenLightDurationForm = ()=>{\n    _s();\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [formError, setFormError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const greenLightDurationOnSubmit = ()=>{\n        const inputValue = inputRef.current.value;\n        const isValidInput = greenLightInputRegex.test(inputValue);\n        if (!isValidInput) {\n            setFormError(true);\n            return false;\n        }\n        setFormError(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            formError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Girilen değer 1-30 arası olmalıdır!\"\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/components/GreenLightDurationForm.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: inputRef,\n                maxLength: 2,\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/components/GreenLightDurationForm.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            \" saniye\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/components/GreenLightDurationForm.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: greenLightDurationOnSubmit,\n                children: \"UYGULA\"\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/components/GreenLightDurationForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/components/GreenLightDurationForm.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GreenLightDurationForm, \"npM48Om+tdBpPRjsU+q+SW3TneM=\");\n_c = GreenLightDurationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreenLightDurationForm);\nvar _c;\n$RefreshReg$(_c, \"GreenLightDurationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsdUJBQXVCO0FBQzdCLE1BQU1DLHlCQUF5QixJQUFNOztJQUNuQyxNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBbUIsSUFBSTtJQUM5QyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQVUsS0FBSztJQUV6RCxNQUFNTSw2QkFBNkIsSUFBTTtRQUN2QyxNQUFNQyxhQUFhSixTQUFTSyxPQUFPLENBQUNDLEtBQUs7UUFDekMsTUFBTUMsZUFBZVQscUJBQXFCVSxJQUFJLENBQUNKO1FBRS9DLElBQUksQ0FBQ0csY0FBYztZQUNqQkwsYUFBYSxJQUFJO1lBQ2pCLE9BQU8sS0FBSztRQUNkLENBQUM7UUFFREEsYUFBYSxLQUFLO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNPOztZQUNFUiwyQkFDQyw4REFBQ1E7MEJBQUk7Ozs7OzswQkFFUCw4REFBQ0M7Z0JBQ0NDLEtBQUtYO2dCQUNMWSxXQUFXO2dCQUNYQyxNQUFLOzs7Ozs7WUFDTDswQkFDRiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQztnQkFDQ0YsTUFBSztnQkFDTEcsU0FBU2I7MEJBQTRCOzs7Ozs7Ozs7Ozs7QUFLN0M7R0FsQ01KO0tBQUFBO0FBb0NOLCtEQUFlQSxzQkFBc0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtLnRzeD9lODk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgZ3JlZW5MaWdodElucHV0UmVnZXggPSAvXlxcYihbMS05XXxbMTJdWzAtOV18MzApXFxiJC9cbmNvbnN0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFtmb3JtRXJyb3IsIHNldEZvcm1FcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICBjb25zdCBncmVlbkxpZ2h0RHVyYXRpb25PblN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRSZWYuY3VycmVudC52YWx1ZVxuICAgIGNvbnN0IGlzVmFsaWRJbnB1dCA9IGdyZWVuTGlnaHRJbnB1dFJlZ2V4LnRlc3QoaW5wdXRWYWx1ZSlcblxuICAgIGlmICghaXNWYWxpZElucHV0KSB7XG4gICAgICBzZXRGb3JtRXJyb3IodHJ1ZSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHNldEZvcm1FcnJvcihmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtmb3JtRXJyb3IgJiYgKFxuICAgICAgICA8ZGl2PkdpcmlsZW4gZGXEn2VyIDEtMzAgYXJhc8SxIG9sbWFsxLFkxLFyITwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBtYXhMZW5ndGg9ezJ9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIC8+IHNhbml5ZVxuICAgICAgPGJyLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9e2dyZWVuTGlnaHREdXJhdGlvbk9uU3VibWl0fT5cbiAgICAgICAgVVlHVUxBXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiZ3JlZW5MaWdodElucHV0UmVnZXgiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwiaW5wdXRSZWYiLCJmb3JtRXJyb3IiLCJzZXRGb3JtRXJyb3IiLCJncmVlbkxpZ2h0RHVyYXRpb25PblN1Ym1pdCIsImlucHV0VmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJpc1ZhbGlkSW5wdXQiLCJ0ZXN0IiwiZGl2IiwiaW5wdXQiLCJyZWYiLCJtYXhMZW5ndGgiLCJ0eXBlIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GreenLightDurationForm.tsx\n"));

/***/ })

});