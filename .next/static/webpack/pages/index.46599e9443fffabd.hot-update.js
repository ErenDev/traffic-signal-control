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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const stopCycle = ()=>{};\n    const startCycle = async ()=>{\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        for (const item of lightObjArr){\n            setDuration(item.duration);\n            await new Promise((resolve, reject)=>{\n                setStep(item.step);\n                setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    resolve(item);\n                }, item.duration + 1000);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration > 0) {\n            startCycle();\n        }\n    }, [\n        greenLightDuration,\n        cycle\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        duration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                greenLightDuration && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dPKM8FJmJ57bXSgH64rlDWi42DE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNiO0FBQzJCO0FBQ3pCO0FBQ0Y7QUFDUDtBQUV2QixTQUFTUyxPQUFROztJQUM5QixNQUFNQyxNQUFNUiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU0sRUFBRVMsbUJBQWtCLEVBQUVDLHNCQUFxQixFQUFFLEdBQUdOLDZEQUFjQTtJQUNwRSxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFTO0lBRWpELE1BQU1vQixZQUFZLElBQU0sQ0FFeEI7SUFFQSxNQUFNQyxhQUFhLFVBQVk7UUFDN0IsTUFBTUMsY0FBY2xCLDJEQUFTQSxDQUFDSTtRQUM5Qk8sVUFBVU8sV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDVCxNQUFNO1FBQ3ZDRyxVQUFVSyxXQUFXLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNQLE1BQU07UUFFdkMsS0FBSyxNQUFNUSxRQUFRRixZQUFhO1lBQzlCSCxZQUFZSyxLQUFLTixRQUFRO1lBQ3pCLE1BQU0sSUFBSU8sUUFBUSxDQUFDQyxTQUFTQyxTQUFXO2dCQUNyQ2hCLFFBQVFhLEtBQUtkLElBQUk7Z0JBQ2pCa0IsV0FBVyxJQUFNO29CQUNmLElBQUlKLEtBQUtkLElBQUksS0FBS1ksWUFBWU8sTUFBTSxFQUFFO3dCQUNwQ2hCLFNBQVNELFFBQVE7b0JBQ25CLENBQUM7b0JBQ0RHLFVBQVVTLEtBQUtNLElBQUksQ0FBQ2hCLE1BQU07b0JBQzFCRyxVQUFVTyxLQUFLTSxJQUFJLENBQUNkLE1BQU07b0JBQzFCVSxRQUFRRjtnQkFDVixHQUFHQSxLQUFLTixRQUFRLEdBQUc7WUFDckI7UUFDRjtJQUNGO0lBRUFwQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVUscUJBQXFCLEdBQUc7WUFDMUJhO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2I7UUFBb0JJO0tBQU07SUFFOUJkLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNaUMsV0FBV0MsWUFBWSxJQUFNO1lBQ2pDLElBQUlkLFdBQVcsR0FBRztnQkFDaEJDLFlBQVksSUFBTUQsV0FBVztZQUMvQixDQUFDO1FBQ0gsR0FBRztRQUVILE9BQU8sSUFBTTtZQUNYZSxjQUFjRjtRQUNoQjtJQUNGLEdBQUc7UUFBQ2I7S0FBUztJQUViLHFCQUNFO2tCQUNFLDRFQUFDZ0I7WUFBS0MsV0FBV2xDLHFFQUFXOzs4QkFDMUIsOERBQUNDLDBFQUFzQkE7Ozs7O2dCQUN0Qk0sb0NBQ0MsOERBQUM0QjtvQkFBSTdCLEtBQUtBOztzQ0FDUiw4REFBQzZCOztnQ0FBSTtnQ0FBYzFCOzs7Ozs7O3NDQUNuQiw4REFBQzBCOztnQ0FBSTtnQ0FBMkJsQixXQUFXOzs7Ozs7O3NDQUUzQyw4REFBQ2tCO3NDQUNDLDRFQUFDQztnQ0FBT0MsU0FBU2xCOzBDQUFXOzs7Ozs7Ozs7OztzQ0FFOUIsOERBQUNnQjs7OENBQ0MsOERBQUNBOzt3Q0FBSTtzREFDTyw4REFBQy9CLHlEQUFLQTs0Q0FBQ2tDLE9BQU96Qjs7Ozs7Ozs7Ozs7OzhDQUUxQiw4REFBQ3NCOzt3Q0FBSTtzREFDTyw4REFBQy9CLHlEQUFLQTs0Q0FBQ2tDLE9BQU92Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QyxDQUFDO0dBN0V1QlY7O1FBRWdDSCx5REFBY0E7OztLQUY5Q0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgR3JlZW5MaWdodER1cmF0aW9uRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvR3JlZW5MaWdodER1cmF0aW9uRm9ybSdcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2Zvcm0nXG5pbXBvcnQgeyBsaWdodERhdGEgfSBmcm9tICdAL3V0aWxzL2xpZ2h0RGF0YSdcbmltcG9ydCBMaWdodCBmcm9tICdAL2NvbXBvbmVudHMvTGlnaHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgeyBncmVlbkxpZ2h0RHVyYXRpb24sIHNldEdyZWVuTGlnaHREdXJhdGlvbiB9ID0gdXNlRm9ybUNvbnRleHQoKVxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY3ljbGUsIHNldEN5Y2xlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtncm91cDEsIHNldEdyb3VwMV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtncm91cDIsIHNldEdyb3VwMl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIGNvbnN0IHN0b3BDeWNsZSA9ICgpID0+IHtcblxuICB9XG5cbiAgY29uc3Qgc3RhcnRDeWNsZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsaWdodE9iakFyciA9IGxpZ2h0RGF0YShncmVlbkxpZ2h0RHVyYXRpb24pXG4gICAgc2V0R3JvdXAxKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAxKVxuICAgIHNldEdyb3VwMihsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMilcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaWdodE9iakFycikge1xuICAgICAgc2V0RHVyYXRpb24oaXRlbS5kdXJhdGlvbilcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0U3RlcChpdGVtLnN0ZXApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnN0ZXAgPT09IGxpZ2h0T2JqQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0Q3ljbGUoY3ljbGUgKyAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRHcm91cDEoaXRlbS5uZXh0Lmdyb3VwMSlcbiAgICAgICAgICBzZXRHcm91cDIoaXRlbS5uZXh0Lmdyb3VwMilcbiAgICAgICAgICByZXNvbHZlKGl0ZW0pXG4gICAgICAgIH0sIGl0ZW0uZHVyYXRpb24gKyAxMDAwKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChncmVlbkxpZ2h0RHVyYXRpb24gPiAwKSB7XG4gICAgICBzdGFydEN5Y2xlKClcbiAgICB9XG4gIH0sIFtncmVlbkxpZ2h0RHVyYXRpb24sIGN5Y2xlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBzZXREdXJhdGlvbigoKSA9PiBkdXJhdGlvbiAtIDEwMDApXG4gICAgICB9XG4gICAgfSwgMTAwMClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgIH1cbiAgfSwgW2R1cmF0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0vPlxuICAgICAgICB7Z3JlZW5MaWdodER1cmF0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgIDxkaXY+TWV2Y3V0IEFkxLFtOiB7c3RlcH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+U29ucmFraSBhZMSxbWEga2FsYW4gc8O8cmU6IHtkdXJhdGlvbiAvIDEwMDB9PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RvcEN5Y2xlfT5ZYXlhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBjb2xvcj17Z3JvdXAxfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGNvbG9yPXtncm91cDJ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiR3JlZW5MaWdodER1cmF0aW9uRm9ybSIsInVzZUZvcm1Db250ZXh0IiwibGlnaHREYXRhIiwiTGlnaHQiLCJIb21lIiwicmVmIiwiZ3JlZW5MaWdodER1cmF0aW9uIiwic2V0R3JlZW5MaWdodER1cmF0aW9uIiwic3RlcCIsInNldFN0ZXAiLCJjeWNsZSIsInNldEN5Y2xlIiwiZ3JvdXAxIiwic2V0R3JvdXAxIiwiZ3JvdXAyIiwic2V0R3JvdXAyIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsInN0b3BDeWNsZSIsInN0YXJ0Q3ljbGUiLCJsaWdodE9iakFyciIsImN1cnJlbnQiLCJpdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwibmV4dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});