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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const { greenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lightObjArr[0].current.group1);\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lightObjArr[0].current.group2);\n    const getData = async ()=>{\n        for await (const item of lightObjArr){\n            await new Promise((resolve)=>{\n                setTimeout(()=>{\n                    setCurrentStep(currentStep + 1);\n                    resolve(item);\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    console.log(item);\n                }, item.duration);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration > 0) {\n            getData();\n        }\n    }, [\n        greenLightDuration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"step: \",\n                        currentStep\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group1 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                    color: group1\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group2 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                    color: group2\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"XssFMHC4uTI9L6ZnWod63xQuvnE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0w7QUFDMkI7QUFDekI7QUFDRjtBQUU3QyxNQUFNTyxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDdEIsTUFBTUMsV0FBVztRQUFFQyxHQUFHO1FBQU9DLEdBQUc7UUFBU0MsR0FBRztJQUFTO0lBQ3JELHFCQUNFLDhEQUFDQzs7WUFBSTswQkFBUSw4REFBQ0M7Z0JBQUtDLE9BQU87b0JBQUVQLE9BQU9DLFFBQVEsQ0FBQ0QsTUFBTTtnQkFBQTswQkFBSUE7Ozs7Ozs7Ozs7OztBQUUxRDtLQUxNRDtBQU9TLFNBQVNTLE9BQVE7O0lBQzlCLE1BQU0sRUFBRUMsbUJBQWtCLEVBQUUsR0FBR1osNkRBQWNBO0lBQzdDLE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWtCLGNBQWNkLDJEQUFTQSxDQUFDVztJQUM5QixNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDa0IsV0FBVyxDQUFDLEVBQUUsQ0FBQ0csT0FBTyxDQUFDRixNQUFNO0lBQ2xFLE1BQU0sQ0FBQ0csUUFBUUMsVUFBVSxHQUFHdkIsK0NBQVFBLENBQUNrQixXQUFXLENBQUMsRUFBRSxDQUFDRyxPQUFPLENBQUNDLE1BQU07SUFFbEUsTUFBTUUsVUFBVSxVQUFZO1FBQzFCLFdBQVcsTUFBTUMsUUFBUVAsWUFBYTtZQUNwQyxNQUFNLElBQUlRLFFBQVFDLENBQUFBLFVBQVc7Z0JBQzNCQyxXQUFXLElBQU07b0JBQ2ZYLGVBQWVELGNBQWM7b0JBQzdCVyxRQUFRRjtvQkFDUkwsVUFBVUssS0FBS0ksSUFBSSxDQUFDVixNQUFNO29CQUMxQkksVUFBVUUsS0FBS0ksSUFBSSxDQUFDUCxNQUFNO29CQUMxQlEsUUFBUUMsR0FBRyxDQUFDTjtnQkFDZCxHQUFHQSxLQUFLTyxRQUFRO1lBQ2xCO1FBQ0Y7SUFDRjtJQUVBakMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlnQixxQkFBcUIsR0FBRztZQUMxQlM7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDVDtLQUFtQjtJQUV2QixxQkFDRTtrQkFDRSw0RUFBQ2tCO1lBQUtDLFdBQVdqQyxxRUFBVzs7OEJBQzFCLDhEQUFDQywwRUFBc0JBOzs7Ozs4QkFFdkIsOERBQUNTOzt3QkFBSTt3QkFBT0s7Ozs7Ozs7OEJBQ1osOERBQUNMOztzQ0FDQyw4REFBQ0E7O2dDQUFJOzhDQUNPLDhEQUFDTjtvQ0FBTUMsT0FBT2E7Ozs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNSOztnQ0FBSTs4Q0FDTyw4REFBQ047b0NBQU1DLE9BQU9nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQyxDQUFDO0dBN0N1QlI7O1FBQ1NYLHlEQUFjQTs7O01BRHZCVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgR3JlZW5MaWdodER1cmF0aW9uRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvR3JlZW5MaWdodER1cmF0aW9uRm9ybSdcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2Zvcm0nXG5pbXBvcnQgeyBsaWdodERhdGEgfSBmcm9tICdAL3V0aWxzL2xpZ2h0RGF0YSdcblxuY29uc3QgTGlnaHQgPSAoeyBjb2xvciB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yTWFwID0geyBLOiAncmVkJywgWTogJ2dyZWVuJywgUzogJ3llbGxvdycgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+QWN0aXZlOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JNYXBbY29sb3JdfX0+e2NvbG9yfTwvc3Bhbj48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgeyBncmVlbkxpZ2h0RHVyYXRpb24gfSA9IHVzZUZvcm1Db250ZXh0KClcbiAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBsaWdodE9iakFyciA9IGxpZ2h0RGF0YShncmVlbkxpZ2h0RHVyYXRpb24pXG4gIGNvbnN0IFtncm91cDEsIHNldEdyb3VwMV0gPSB1c2VTdGF0ZShsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMSlcbiAgY29uc3QgW2dyb3VwMiwgc2V0R3JvdXAyXSA9IHVzZVN0YXRlKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAyKVxuXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBpdGVtIG9mIGxpZ2h0T2JqQXJyKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKVxuICAgICAgICAgIHJlc29sdmUoaXRlbSlcbiAgICAgICAgICBzZXRHcm91cDEoaXRlbS5uZXh0Lmdyb3VwMSlcbiAgICAgICAgICBzZXRHcm91cDIoaXRlbS5uZXh0Lmdyb3VwMilcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICB9LCBpdGVtLmR1cmF0aW9uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChncmVlbkxpZ2h0RHVyYXRpb24gPiAwKSB7XG4gICAgICBnZXREYXRhKClcbiAgICB9XG4gIH0sIFtncmVlbkxpZ2h0RHVyYXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8R3JlZW5MaWdodER1cmF0aW9uRm9ybSAvPlxuXG4gICAgICAgIDxkaXY+c3RlcDoge2N1cnJlbnRTdGVwfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IGNvbG9yPXtncm91cDF9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBjb2xvcj17Z3JvdXAyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwidXNlRm9ybUNvbnRleHQiLCJsaWdodERhdGEiLCJMaWdodCIsImNvbG9yIiwiY29sb3JNYXAiLCJLIiwiWSIsIlMiLCJkaXYiLCJzcGFuIiwic3R5bGUiLCJIb21lIiwiZ3JlZW5MaWdodER1cmF0aW9uIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImxpZ2h0T2JqQXJyIiwiZ3JvdXAxIiwic2V0R3JvdXAxIiwiY3VycmVudCIsImdyb3VwMiIsInNldEdyb3VwMiIsImdldERhdGEiLCJpdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJkdXJhdGlvbiIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});