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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isStarted, setIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let promise = null;\n    let timer = null;\n    const stopCycle = ()=>{\n        setIsStarted(false);\n        promise = null;\n        timer = null;\n    };\n    const startCycle = async ()=>{\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        if (!isMounted.current) {\n            return false;\n        }\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        console.log(\"[startCycle]2\", isStarted);\n        for (const item of lightObjArr){\n            console.log(\"here\", isStarted);\n            setDuration(item.duration);\n            await new Promise((resolve, reject)=>{\n                setStep(item.step);\n                setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    resolve(item);\n                }, item.duration + 1000);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"effect cycle isStarted\", isStarted);\n        if (isStarted) {\n            startCycle();\n        }\n    }, [\n        isStarted,\n        cycle\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        duration,\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsStarted(!!greenLightDuration);\n    }, [\n        greenLightDuration,\n        cycle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                isStarted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: isMounted,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"eMZQG+P7bpY+xkFevr9wKmLKE9I=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDc0I7c0NBQ0MsNEVBQUNFO2dDQUFPQyxTQUFTckI7MENBQVc7Ozs7Ozs7Ozs7O3NDQUU5Qiw4REFBQ2tCOzs4Q0FDQyw4REFBQ0E7O3dDQUFJO3NEQUNPLDhEQUFDckMseURBQUtBOzRDQUFDeUMsT0FBTzlCOzs7Ozs7Ozs7Ozs7OENBRTFCLDhEQUFDMEI7O3dDQUFJO3NEQUNPLDhEQUFDckMseURBQUtBOzRDQUFDeUMsT0FBTzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhDLENBQUM7R0E5RnVCWjs7UUFFZ0NILHlEQUFjQTs7O0tBRjlDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvZm9ybSdcbmltcG9ydCB7IGxpZ2h0RGF0YSB9IGZyb20gJ0AvdXRpbHMvbGlnaHREYXRhJ1xuaW1wb3J0IExpZ2h0IGZyb20gJ0AvY29tcG9uZW50cy9MaWdodCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHsgZ3JlZW5MaWdodER1cmF0aW9uLCBzZXRHcmVlbkxpZ2h0RHVyYXRpb24gfSA9IHVzZUZvcm1Db250ZXh0KClcbiAgY29uc3QgW2lzU3RhcnRlZCwgc2V0SXNTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY3ljbGUsIHNldEN5Y2xlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtncm91cDEsIHNldEdyb3VwMV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtncm91cDIsIHNldEdyb3VwMl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBsZXQgcHJvbWlzZSA9IG51bGxcbiAgbGV0IHRpbWVyID0gbnVsbFxuXG4gIGNvbnN0IHN0b3BDeWNsZSA9ICgpID0+IHtcbiAgICBzZXRJc1N0YXJ0ZWQoZmFsc2UpXG4gICAgcHJvbWlzZSA9IG51bGxcbiAgICB0aW1lciA9IG51bGxcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0Q3ljbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGlnaHRPYmpBcnIgPSBsaWdodERhdGEoZ3JlZW5MaWdodER1cmF0aW9uKVxuICAgIGlmICghaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHNldEdyb3VwMShsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMSlcbiAgICBzZXRHcm91cDIobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDIpXG5cbiAgICBjb25zb2xlLmxvZygnW3N0YXJ0Q3ljbGVdMicsIGlzU3RhcnRlZClcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaWdodE9iakFycikge1xuICAgICAgY29uc29sZS5sb2coJ2hlcmUnLCBpc1N0YXJ0ZWQpXG4gICAgICBzZXREdXJhdGlvbihpdGVtLmR1cmF0aW9uKVxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRTdGVwKGl0ZW0uc3RlcClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3RlcCA9PT0gbGlnaHRPYmpBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDeWNsZShjeWNsZSArIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldEdyb3VwMShpdGVtLm5leHQuZ3JvdXAxKVxuICAgICAgICAgIHNldEdyb3VwMihpdGVtLm5leHQuZ3JvdXAyKVxuICAgICAgICAgIHJlc29sdmUoaXRlbSlcbiAgICAgICAgfSwgaXRlbS5kdXJhdGlvbiArIDEwMDApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2VmZmVjdCBjeWNsZSBpc1N0YXJ0ZWQnLCBpc1N0YXJ0ZWQpXG4gICAgaWYgKGlzU3RhcnRlZCkge1xuICAgICAgc3RhcnRDeWNsZSgpXG4gICAgfVxuICB9LCBbaXNTdGFydGVkLCBjeWNsZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgc2V0RHVyYXRpb24oKCkgPT4gZHVyYXRpb24gLSAxMDAwKVxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9XG4gIH0sIFtkdXJhdGlvbiwgaXNTdGFydGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzU3RhcnRlZCghIWdyZWVuTGlnaHREdXJhdGlvbilcbiAgfSwgW2dyZWVuTGlnaHREdXJhdGlvbiwgY3ljbGVdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8R3JlZW5MaWdodER1cmF0aW9uRm9ybS8+XG4gICAgICAgIHtpc1N0YXJ0ZWQgJiYgKFxuICAgICAgICAgIDxkaXYgcmVmPXtpc01vdW50ZWR9PlxuICAgICAgICAgICAgPGRpdj5NZXZjdXQgQWTEsW06IHtzdGVwfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Tb25yYWtpIGFkxLFtYSBrYWxhbiBzw7xyZToge2R1cmF0aW9uIC8gMTAwMH08L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdG9wQ3ljbGV9PllheWE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IGNvbG9yPXtncm91cDF9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEdyb3VwMiA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwidXNlRm9ybUNvbnRleHQiLCJsaWdodERhdGEiLCJMaWdodCIsIkhvbWUiLCJpc01vdW50ZWQiLCJncmVlbkxpZ2h0RHVyYXRpb24iLCJzZXRHcmVlbkxpZ2h0RHVyYXRpb24iLCJpc1N0YXJ0ZWQiLCJzZXRJc1N0YXJ0ZWQiLCJzdGVwIiwic2V0U3RlcCIsImN5Y2xlIiwic2V0Q3ljbGUiLCJncm91cDEiLCJzZXRHcm91cDEiLCJncm91cDIiLCJzZXRHcm91cDIiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwicHJvbWlzZSIsInRpbWVyIiwic3RvcEN5Y2xlIiwic3RhcnRDeWNsZSIsImxpZ2h0T2JqQXJyIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwibmV4dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});