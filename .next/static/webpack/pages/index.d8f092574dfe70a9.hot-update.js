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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const stopCycle = ()=>{\n        setGreenLightDuration(\"\");\n        setCycle(0);\n        setStep(0);\n        setGroup1(0);\n        setGroup2(0);\n        setDuration(0);\n    };\n    const startCycle = async ()=>{\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        for (const item of lightObjArr){\n            setDuration(item.duration);\n            await new Promise((resolve, reject)=>{\n                setStep(item.step);\n                setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                }, item.duration + 1000);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration > 0) {\n            startCycle();\n        }\n    }, [\n        greenLightDuration,\n        cycle\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        duration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                greenLightDuration && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setGreenLightDuration(null),\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dPKM8FJmJ57bXSgH64rlDWi42DE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0nXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9mb3JtJ1xuaW1wb3J0IHsgbGlnaHREYXRhIH0gZnJvbSAnQC91dGlscy9saWdodERhdGEnXG5pbXBvcnQgTGlnaHQgZnJvbSAnQC9jb21wb25lbnRzL0xpZ2h0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHsgZ3JlZW5MaWdodER1cmF0aW9uLCBzZXRHcmVlbkxpZ2h0RHVyYXRpb24gfSA9IHVzZUZvcm1Db250ZXh0KClcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2N5Y2xlLCBzZXRDeWNsZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZ3JvdXAxLCBzZXRHcm91cDFdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBzdG9wQ3ljbGUgPSAoKSA9PiB7XG4gICAgc2V0R3JlZW5MaWdodER1cmF0aW9uKCcnKVxuICAgIHNldEN5Y2xlKDApXG4gICAgc2V0U3RlcCgwKVxuICAgIHNldEdyb3VwMSgwKVxuICAgIHNldEdyb3VwMigwKVxuICAgIHNldER1cmF0aW9uKDApXG4gIH1cblxuICBjb25zdCBzdGFydEN5Y2xlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxpZ2h0T2JqQXJyID0gbGlnaHREYXRhKGdyZWVuTGlnaHREdXJhdGlvbilcbiAgICBzZXRHcm91cDEobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDEpXG4gICAgc2V0R3JvdXAyKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAyKVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpZ2h0T2JqQXJyKSB7XG4gICAgICBzZXREdXJhdGlvbihpdGVtLmR1cmF0aW9uKVxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRTdGVwKGl0ZW0uc3RlcClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3RlcCA9PT0gbGlnaHRPYmpBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDeWNsZShjeWNsZSArIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldEdyb3VwMShpdGVtLm5leHQuZ3JvdXAxKVxuICAgICAgICAgIHNldEdyb3VwMihpdGVtLm5leHQuZ3JvdXAyKVxuICAgICAgICB9LCBpdGVtLmR1cmF0aW9uICsgMTAwMClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZ3JlZW5MaWdodER1cmF0aW9uID4gMCkge1xuICAgICAgc3RhcnRDeWNsZSgpXG4gICAgfVxuICB9LCBbZ3JlZW5MaWdodER1cmF0aW9uLCBjeWNsZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgc2V0RHVyYXRpb24oKCkgPT4gZHVyYXRpb24gLSAxMDAwKVxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9XG4gIH0sIFtkdXJhdGlvbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtLz5cbiAgICAgICAge2dyZWVuTGlnaHREdXJhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgICAgICA8ZGl2Pk1ldmN1dCBBZMSxbToge3N0ZXB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlNvbnJha2kgYWTEsW1hIGthbGFuIHPDvHJlOiB7ZHVyYXRpb24gLyAxMDAwfTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEdyZWVuTGlnaHREdXJhdGlvbihudWxsKX0+WWF5YTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBjb2xvcj17Z3JvdXAyfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJ1c2VGb3JtQ29udGV4dCIsImxpZ2h0RGF0YSIsIkxpZ2h0IiwiSG9tZSIsInJlZiIsImdyZWVuTGlnaHREdXJhdGlvbiIsInNldEdyZWVuTGlnaHREdXJhdGlvbiIsInN0ZXAiLCJzZXRTdGVwIiwiY3ljbGUiLCJzZXRDeWNsZSIsImdyb3VwMSIsInNldEdyb3VwMSIsImdyb3VwMiIsInNldEdyb3VwMiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJzdG9wQ3ljbGUiLCJzdGFydEN5Y2xlIiwibGlnaHRPYmpBcnIiLCJjdXJyZW50IiwiaXRlbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImxlbmd0aCIsIm5leHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});