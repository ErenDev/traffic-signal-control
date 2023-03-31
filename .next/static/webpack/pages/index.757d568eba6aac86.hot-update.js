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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isStarted, setIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let promise = null;\n    let timer = null;\n    const stopCycle = ()=>{\n        setIsStarted(false);\n        promise = null;\n        timer = null;\n    };\n    const startCycle = async ()=>{\n        console.log(\"[startCycle]1\", isStarted);\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        console.log(\"[startCycle]2\", isStarted);\n        for (const item of lightObjArr){\n            setDuration(item.duration);\n            promise = await new Promise((resolve, reject)=>{\n                setStep(item.step);\n                timer = setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    resolve(item);\n                }, item.duration + 1000);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"effect cycle isStarted\", isStarted);\n        if (isStarted) {\n            startCycle();\n        }\n        return ()=>{\n            setIsStarted(false);\n        };\n    }, [\n        isStarted,\n        duration\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n            setIsStarted(false);\n        };\n    }, [\n        duration,\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsStarted(!!greenLightDuration);\n    }, [\n        greenLightDuration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"p7l4O2aaxrmCGvWfen4s7xBcGTE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNrQjs7OENBQ0MsOERBQUNBOzt3Q0FBSTtzREFDTyw4REFBQ3BDLHlEQUFLQTs0Q0FBQ3VDLE9BQU83Qjs7Ozs7Ozs7Ozs7OzhDQUUxQiw4REFBQzBCOzt3Q0FBSTtzREFDTyw4REFBQ3BDLHlEQUFLQTs0Q0FBQ3VDLE9BQU8zQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDLENBQUM7R0E3RnVCWDs7UUFDZ0NILHlEQUFjQTs7O0tBRDlDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgR3JlZW5MaWdodER1cmF0aW9uRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvR3JlZW5MaWdodER1cmF0aW9uRm9ybSdcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2Zvcm0nXG5pbXBvcnQgeyBsaWdodERhdGEgfSBmcm9tICdAL3V0aWxzL2xpZ2h0RGF0YSdcbmltcG9ydCBMaWdodCBmcm9tICdAL2NvbXBvbmVudHMvTGlnaHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCB7IGdyZWVuTGlnaHREdXJhdGlvbiwgc2V0R3JlZW5MaWdodER1cmF0aW9uIH0gPSB1c2VGb3JtQ29udGV4dCgpXG4gIGNvbnN0IFtpc1N0YXJ0ZWQsIHNldElzU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2N5Y2xlLCBzZXRDeWNsZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZ3JvdXAxLCBzZXRHcm91cDFdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgbGV0IHByb21pc2UgPSBudWxsXG4gIGxldCB0aW1lciA9IG51bGxcblxuICBjb25zdCBzdG9wQ3ljbGUgPSAoKSA9PiB7XG4gICAgc2V0SXNTdGFydGVkKGZhbHNlKVxuICAgIHByb21pc2UgPSBudWxsXG4gICAgdGltZXIgPSBudWxsXG4gIH1cblxuICBjb25zdCBzdGFydEN5Y2xlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdbc3RhcnRDeWNsZV0xJywgaXNTdGFydGVkKVxuXG4gICAgY29uc3QgbGlnaHRPYmpBcnIgPSBsaWdodERhdGEoZ3JlZW5MaWdodER1cmF0aW9uKVxuXG4gICAgc2V0R3JvdXAxKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAxKVxuICAgIHNldEdyb3VwMihsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMilcblxuICAgIGNvbnNvbGUubG9nKCdbc3RhcnRDeWNsZV0yJywgaXNTdGFydGVkKVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpZ2h0T2JqQXJyKSB7XG4gICAgICBzZXREdXJhdGlvbihpdGVtLmR1cmF0aW9uKVxuICAgICAgcHJvbWlzZSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0U3RlcChpdGVtLnN0ZXApXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3RlcCA9PT0gbGlnaHRPYmpBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDeWNsZShjeWNsZSArIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldEdyb3VwMShpdGVtLm5leHQuZ3JvdXAxKVxuICAgICAgICAgIHNldEdyb3VwMihpdGVtLm5leHQuZ3JvdXAyKVxuICAgICAgICAgIHJlc29sdmUoaXRlbSlcbiAgICAgICAgfSwgaXRlbS5kdXJhdGlvbiArIDEwMDApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2VmZmVjdCBjeWNsZSBpc1N0YXJ0ZWQnLCBpc1N0YXJ0ZWQpXG4gICAgaWYgKGlzU3RhcnRlZCkge1xuICAgICAgc3RhcnRDeWNsZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldElzU3RhcnRlZChmYWxzZSlcbiAgICB9XG4gIH0sIFtpc1N0YXJ0ZWQsIGR1cmF0aW9uXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBzZXREdXJhdGlvbigoKSA9PiBkdXJhdGlvbiAtIDEwMDApXG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgIHNldElzU3RhcnRlZChmYWxzZSlcbiAgICB9XG4gIH0sIFtkdXJhdGlvbiwgaXNTdGFydGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzU3RhcnRlZCghIWdyZWVuTGlnaHREdXJhdGlvbilcbiAgfSwgW2dyZWVuTGlnaHREdXJhdGlvbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtLz5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5NZXZjdXQgQWTEsW06IHtzdGVwfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Tb25yYWtpIGFkxLFtYSBrYWxhbiBzw7xyZToge2R1cmF0aW9uIC8gMTAwMH08L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdG9wQ3ljbGV9PllheWE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IGNvbG9yPXtncm91cDF9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEdyb3VwMiA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwidXNlRm9ybUNvbnRleHQiLCJsaWdodERhdGEiLCJMaWdodCIsIkhvbWUiLCJncmVlbkxpZ2h0RHVyYXRpb24iLCJzZXRHcmVlbkxpZ2h0RHVyYXRpb24iLCJpc1N0YXJ0ZWQiLCJzZXRJc1N0YXJ0ZWQiLCJzdGVwIiwic2V0U3RlcCIsImN5Y2xlIiwic2V0Q3ljbGUiLCJncm91cDEiLCJzZXRHcm91cDEiLCJncm91cDIiLCJzZXRHcm91cDIiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwicHJvbWlzZSIsInRpbWVyIiwic3RvcEN5Y2xlIiwic3RhcnRDeWNsZSIsImNvbnNvbGUiLCJsb2ciLCJsaWdodE9iakFyciIsImN1cnJlbnQiLCJpdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwibmV4dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});