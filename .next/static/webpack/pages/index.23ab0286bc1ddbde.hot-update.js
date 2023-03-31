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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isStarted, setIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const stopCycle = ()=>{\n        setIsStarted(false);\n        setStep(0);\n        setGroup2(null);\n        setGroup1(null);\n        setDuration(0);\n        setCycle(0);\n        setGreenLightDuration(null);\n    };\n    const startCycle = async (isStarted)=>{\n        let timer = null;\n        if (isStarted) {\n            const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n            setGroup1(lightObjArr[0].current.group1);\n            setGroup2(lightObjArr[0].current.group2);\n            for await (const item of lightObjArr){\n                setDuration(item.duration);\n                await new Promise((resolve, reject)=>{\n                    setStep(item.step);\n                    timer = setTimeout(()=>{\n                        if (item.step === lightObjArr.length) {\n                            setCycle(cycle + 1);\n                        }\n                        console.log(\"started\", isStarted);\n                        setGroup1(item.next.group1);\n                        setGroup2(item.next.group2);\n                        resolve(item);\n                    }, item.duration + 1000);\n                });\n            }\n        } else {\n            clearTimeout(timer);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isStarted) {\n            startCycle(isStarted).then(()=>{});\n        }\n    }, [\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        duration,\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration) {\n            setIsStarted(true);\n        } else {\n            setIsStarted(false);\n        }\n    }, [\n        greenLightDuration,\n        isStarted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"p7l4O2aaxrmCGvWfen4s7xBcGTE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVN2QjswQ0FBVzs7Ozs7Ozs7Ozs7c0NBRTlCLDhEQUFDcUI7OzhDQUNDLDhEQUFDQTs7d0NBQUk7c0RBQ08sOERBQUNyQyx5REFBS0E7NENBQUN3QyxPQUFPOUI7Ozs7Ozs7Ozs7Ozs4Q0FFMUIsOERBQUMyQjs7d0NBQUk7c0RBQ08sOERBQUNyQyx5REFBS0E7NENBQUN3QyxPQUFPNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QyxDQUFDO0dBL0Z1Qlg7O1FBQ2dDSCx5REFBY0E7OztLQUQ5Q0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0nXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9mb3JtJ1xuaW1wb3J0IHsgbGlnaHREYXRhIH0gZnJvbSAnQC91dGlscy9saWdodERhdGEnXG5pbXBvcnQgTGlnaHQgZnJvbSAnQC9jb21wb25lbnRzL0xpZ2h0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgeyBncmVlbkxpZ2h0RHVyYXRpb24sIHNldEdyZWVuTGlnaHREdXJhdGlvbiB9ID0gdXNlRm9ybUNvbnRleHQoKVxuICBjb25zdCBbaXNTdGFydGVkLCBzZXRJc1N0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtjeWNsZSwgc2V0Q3ljbGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2dyb3VwMSwgc2V0R3JvdXAxXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2dyb3VwMiwgc2V0R3JvdXAyXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3Qgc3RvcEN5Y2xlID0gKCkgPT4ge1xuICAgIHNldElzU3RhcnRlZChmYWxzZSlcbiAgICBzZXRTdGVwKDApXG4gICAgc2V0R3JvdXAyKG51bGwpXG4gICAgc2V0R3JvdXAxKG51bGwpXG4gICAgc2V0RHVyYXRpb24oMClcbiAgICBzZXRDeWNsZSgwKVxuICAgIHNldEdyZWVuTGlnaHREdXJhdGlvbihudWxsKVxuICB9XG5cbiAgY29uc3Qgc3RhcnRDeWNsZSA9IGFzeW5jIChpc1N0YXJ0ZWQpID0+IHtcbiAgICBsZXQgdGltZXIgPSBudWxsXG4gICAgaWYgKGlzU3RhcnRlZCkge1xuICAgICAgY29uc3QgbGlnaHRPYmpBcnIgPSBsaWdodERhdGEoZ3JlZW5MaWdodER1cmF0aW9uKVxuXG4gICAgICBzZXRHcm91cDEobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDEpXG4gICAgICBzZXRHcm91cDIobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDIpXG5cbiAgICAgIGZvciBhd2FpdCAoY29uc3QgaXRlbSBvZiBsaWdodE9iakFycikge1xuICAgICAgICBzZXREdXJhdGlvbihpdGVtLmR1cmF0aW9uKVxuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBzZXRTdGVwKGl0ZW0uc3RlcClcbiAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc3RlcCA9PT0gbGlnaHRPYmpBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHNldEN5Y2xlKGN5Y2xlICsgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGVkJywgaXNTdGFydGVkKVxuXG4gICAgICAgICAgICBzZXRHcm91cDEoaXRlbS5uZXh0Lmdyb3VwMSlcbiAgICAgICAgICAgIHNldEdyb3VwMihpdGVtLm5leHQuZ3JvdXAyKVxuICAgICAgICAgICAgcmVzb2x2ZShpdGVtKVxuICAgICAgICAgIH0sIGl0ZW0uZHVyYXRpb24gKyAxMDAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTdGFydGVkKSB7XG4gICAgICBzdGFydEN5Y2xlKGlzU3RhcnRlZCkudGhlbigoKSA9PiB7fSlcbiAgICB9XG4gIH0sIFtpc1N0YXJ0ZWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHNldER1cmF0aW9uKCgpID0+IGR1cmF0aW9uIC0gMTAwMClcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxuICB9LCBbZHVyYXRpb24sIGlzU3RhcnRlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZ3JlZW5MaWdodER1cmF0aW9uKSB7XG4gICAgICBzZXRJc1N0YXJ0ZWQodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNTdGFydGVkKGZhbHNlKVxuICAgIH1cbiAgfSwgW2dyZWVuTGlnaHREdXJhdGlvbiwgaXNTdGFydGVkXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0vPlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2Pk1ldmN1dCBBZMSxbToge3N0ZXB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlNvbnJha2kgYWTEsW1hIGthbGFuIHPDvHJlOiB7ZHVyYXRpb24gLyAxMDAwfTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BDeWNsZX0+WWF5YTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBjb2xvcj17Z3JvdXAyfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJ1c2VGb3JtQ29udGV4dCIsImxpZ2h0RGF0YSIsIkxpZ2h0IiwiSG9tZSIsImdyZWVuTGlnaHREdXJhdGlvbiIsInNldEdyZWVuTGlnaHREdXJhdGlvbiIsImlzU3RhcnRlZCIsInNldElzU3RhcnRlZCIsInN0ZXAiLCJzZXRTdGVwIiwiY3ljbGUiLCJzZXRDeWNsZSIsImdyb3VwMSIsInNldEdyb3VwMSIsImdyb3VwMiIsInNldEdyb3VwMiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJzdG9wQ3ljbGUiLCJzdGFydEN5Y2xlIiwidGltZXIiLCJsaWdodE9iakFyciIsImN1cnJlbnQiLCJpdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJjbGVhclRpbWVvdXQiLCJ0aGVuIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});