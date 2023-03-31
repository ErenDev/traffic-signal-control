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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isStarted, setIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const stopCycle = ()=>{\n        setIsStarted(false);\n        setStep(0);\n        setGroup2(null);\n        setGroup1(null);\n        setDuration(0);\n        setCycle(0);\n        setGreenLightDuration(null);\n    };\n    const startCycle = async (isStarted)=>{\n        let timer = null;\n        if (isStarted) {\n            const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n            setGroup1(lightObjArr[0].current.group1);\n            setGroup2(lightObjArr[0].current.group2);\n            for await (const item of lightObjArr){\n                setDuration(item.duration);\n                await new Promise((resolve, reject)=>{\n                    setStep(item.step);\n                    timer = setTimeout(()=>{\n                        if (item.step === lightObjArr.length) {\n                            setCycle(cycle + 1);\n                        }\n                        setGroup1(item.next.group1);\n                        setGroup2(item.next.group2);\n                        resolve(item);\n                    }, item.duration + 1000);\n                });\n            }\n        } else {\n            clearTimeout(timer);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isStarted) {\n            startCycle(isStarted).then(()=>{});\n        }\n    }, [\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        duration,\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration) {\n            setIsStarted(true);\n        } else {\n            setIsStarted(false);\n        }\n    }, [\n        greenLightDuration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"p7l4O2aaxrmCGvWfen4s7xBcGTE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsOERBQUNBOzt3Q0FBSTtzREFDTyw4REFBQ25DLHlEQUFLQTs0Q0FBQ3NDLE9BQU81Qjs7Ozs7Ozs7Ozs7OzhDQUUxQiw4REFBQ3lCOzt3Q0FBSTtzREFDTyw4REFBQ25DLHlEQUFLQTs0Q0FBQ3NDLE9BQU8xQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDLENBQUM7R0E3RnVCWDs7UUFDZ0NILHlEQUFjQTs7O0tBRDlDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgR3JlZW5MaWdodER1cmF0aW9uRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvR3JlZW5MaWdodER1cmF0aW9uRm9ybSdcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2Zvcm0nXG5pbXBvcnQgeyBsaWdodERhdGEgfSBmcm9tICdAL3V0aWxzL2xpZ2h0RGF0YSdcbmltcG9ydCBMaWdodCBmcm9tICdAL2NvbXBvbmVudHMvTGlnaHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCB7IGdyZWVuTGlnaHREdXJhdGlvbiwgc2V0R3JlZW5MaWdodER1cmF0aW9uIH0gPSB1c2VGb3JtQ29udGV4dCgpXG4gIGNvbnN0IFtpc1N0YXJ0ZWQsIHNldElzU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2N5Y2xlLCBzZXRDeWNsZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZ3JvdXAxLCBzZXRHcm91cDFdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBzdG9wQ3ljbGUgPSAoKSA9PiB7XG4gICAgc2V0SXNTdGFydGVkKGZhbHNlKVxuICAgIHNldFN0ZXAoMClcbiAgICBzZXRHcm91cDIobnVsbClcbiAgICBzZXRHcm91cDEobnVsbClcbiAgICBzZXREdXJhdGlvbigwKVxuICAgIHNldEN5Y2xlKDApXG4gICAgc2V0R3JlZW5MaWdodER1cmF0aW9uKG51bGwpXG4gIH1cblxuICBjb25zdCBzdGFydEN5Y2xlID0gYXN5bmMgKGlzU3RhcnRlZCkgPT4ge1xuICAgIGxldCB0aW1lciA9IG51bGxcbiAgICBpZiAoaXNTdGFydGVkKSB7XG4gICAgICBjb25zdCBsaWdodE9iakFyciA9IGxpZ2h0RGF0YShncmVlbkxpZ2h0RHVyYXRpb24pXG5cbiAgICAgIHNldEdyb3VwMShsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMSlcbiAgICAgIHNldEdyb3VwMihsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMilcblxuICAgICAgZm9yIGF3YWl0IChjb25zdCBpdGVtIG9mIGxpZ2h0T2JqQXJyKSB7XG4gICAgICAgIHNldER1cmF0aW9uKGl0ZW0uZHVyYXRpb24pXG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHNldFN0ZXAoaXRlbS5zdGVwKVxuICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5zdGVwID09PSBsaWdodE9iakFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc2V0Q3ljbGUoY3ljbGUgKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0R3JvdXAxKGl0ZW0ubmV4dC5ncm91cDEpXG4gICAgICAgICAgICBzZXRHcm91cDIoaXRlbS5uZXh0Lmdyb3VwMilcbiAgICAgICAgICAgIHJlc29sdmUoaXRlbSlcbiAgICAgICAgICB9LCBpdGVtLmR1cmF0aW9uICsgMTAwMClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3RhcnRlZCkge1xuICAgICAgc3RhcnRDeWNsZShpc1N0YXJ0ZWQpLnRoZW4oKCkgPT4ge30pXG4gICAgfVxuICB9LCBbaXNTdGFydGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBzZXREdXJhdGlvbigoKSA9PiBkdXJhdGlvbiAtIDEwMDApXG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgfSwgW2R1cmF0aW9uLCBpc1N0YXJ0ZWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdyZWVuTGlnaHREdXJhdGlvbikge1xuICAgICAgc2V0SXNTdGFydGVkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzU3RhcnRlZChmYWxzZSlcbiAgICB9XG4gIH0sIFtncmVlbkxpZ2h0RHVyYXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8R3JlZW5MaWdodER1cmF0aW9uRm9ybS8+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+TWV2Y3V0IEFkxLFtOiB7c3RlcH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+U29ucmFraSBhZMSxbWEga2FsYW4gc8O8cmU6IHtkdXJhdGlvbiAvIDEwMDB9PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RvcEN5Y2xlfT5ZYXlhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBjb2xvcj17Z3JvdXAxfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGNvbG9yPXtncm91cDJ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiR3JlZW5MaWdodER1cmF0aW9uRm9ybSIsInVzZUZvcm1Db250ZXh0IiwibGlnaHREYXRhIiwiTGlnaHQiLCJIb21lIiwiZ3JlZW5MaWdodER1cmF0aW9uIiwic2V0R3JlZW5MaWdodER1cmF0aW9uIiwiaXNTdGFydGVkIiwic2V0SXNTdGFydGVkIiwic3RlcCIsInNldFN0ZXAiLCJjeWNsZSIsInNldEN5Y2xlIiwiZ3JvdXAxIiwic2V0R3JvdXAxIiwiZ3JvdXAyIiwic2V0R3JvdXAyIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsInN0b3BDeWNsZSIsInN0YXJ0Q3ljbGUiLCJ0aW1lciIsImxpZ2h0T2JqQXJyIiwiY3VycmVudCIsIml0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJuZXh0IiwiY2xlYXJUaW1lb3V0IiwidGhlbiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});