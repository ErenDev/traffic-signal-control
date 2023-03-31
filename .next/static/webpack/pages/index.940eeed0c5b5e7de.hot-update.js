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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isStarted, setIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const stopCycle = ()=>{\n        setIsStarted(false);\n    };\n    const startCycle = async ()=>{\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        setIsStarted(()=>false);\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        console.log(step);\n        console.log(cycle);\n        console.log(isStarted);\n        for (const item of lightObjArr){\n            setDuration(item.duration);\n            await new Promise((resolve, reject)=>{\n                setStep(item.step);\n                setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    resolve(item);\n                }, item.duration + 1000);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(duration, isStarted);\n        if (isStarted) {\n            startCycle();\n        }\n    }, [\n        isStarted,\n        cycle,\n        duration\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        duration,\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsStarted(greenLightDuration);\n    }, [\n        greenLightDuration,\n        cycle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"p7l4O2aaxrmCGvWfen4s7xBcGTE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNMO0FBQzJCO0FBQ3pCO0FBQ0Y7QUFDUDtBQUV2QixTQUFTUSxPQUFROztJQUM5QixNQUFNLEVBQUVDLG1CQUFrQixFQUFFQyxzQkFBcUIsRUFBRSxHQUFHTCw2REFBY0E7SUFDcEUsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQVM7SUFFakQsTUFBTXFCLFlBQVksSUFBTTtRQUN0QlgsYUFBYSxLQUFLO0lBQ3BCO0lBRUEsTUFBTVksYUFBYSxVQUFZO1FBQzdCLE1BQU1DLGNBQWNuQiwyREFBU0EsQ0FBQ0c7UUFDOUJHLGFBQWEsSUFBTSxLQUFLO1FBRXhCTSxVQUFVTyxXQUFXLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNULE1BQU07UUFDdkNHLFVBQVVLLFdBQVcsQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ1AsTUFBTTtRQUV2Q1EsUUFBUUMsR0FBRyxDQUFDZjtRQUNaYyxRQUFRQyxHQUFHLENBQUNiO1FBQ1pZLFFBQVFDLEdBQUcsQ0FBQ2pCO1FBRVosS0FBSyxNQUFNa0IsUUFBUUosWUFBYTtZQUM5QkgsWUFBWU8sS0FBS1IsUUFBUTtZQUN6QixNQUFNLElBQUlTLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztnQkFDckNsQixRQUFRZSxLQUFLaEIsSUFBSTtnQkFDakJvQixXQUFXLElBQU07b0JBQ2YsSUFBSUosS0FBS2hCLElBQUksS0FBS1ksWUFBWVMsTUFBTSxFQUFFO3dCQUNwQ2xCLFNBQVNELFFBQVE7b0JBQ25CLENBQUM7b0JBQ0RHLFVBQVVXLEtBQUtNLElBQUksQ0FBQ2xCLE1BQU07b0JBQzFCRyxVQUFVUyxLQUFLTSxJQUFJLENBQUNoQixNQUFNO29CQUMxQlksUUFBUUY7Z0JBQ1YsR0FBR0EsS0FBS1IsUUFBUSxHQUFHO1lBQ3JCO1FBQ0Y7SUFDRjtJQUVBcEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkMEIsUUFBUUMsR0FBRyxDQUFDUCxVQUFVVjtRQUN0QixJQUFJQSxXQUFXO1lBQ2JhO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2I7UUFBV0k7UUFBT007S0FBUztJQUUvQnBCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNbUMsV0FBV0MsWUFBWSxJQUFNO1lBQ2pDLElBQUloQixXQUFXLEdBQUc7Z0JBQ2hCQyxZQUFZLElBQU1ELFdBQVc7WUFDL0IsQ0FBQztRQUNILEdBQUc7UUFFSCxPQUFPLElBQU07WUFDWGlCLGNBQWNGO1FBQ2hCO0lBQ0YsR0FBRztRQUFDZjtRQUFVVjtLQUFVO0lBRXhCVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RXLGFBQWFIO0lBQ2YsR0FBRztRQUFDQTtRQUFvQk07S0FBTTtJQUU5QixxQkFDRTtrQkFDRSw0RUFBQ3dCO1lBQUtDLFdBQVdyQyxxRUFBVzs7OEJBQzFCLDhEQUFDQywwRUFBc0JBOzs7Ozs4QkFDckI7O3NDQUNFLDhEQUFDcUM7O2dDQUFJO2dDQUFjNUI7Ozs7Ozs7c0NBQ25CLDhEQUFDNEI7O2dDQUFJO2dDQUEyQnBCLFdBQVc7Ozs7Ozs7c0NBRTNDLDhEQUFDb0I7c0NBQ0MsNEVBQUNDO2dDQUFPQyxTQUFTcEI7MENBQVc7Ozs7Ozs7Ozs7O3NDQUU5Qiw4REFBQ2tCOzs4Q0FDQyw4REFBQ0E7O3dDQUFJO3NEQUNPLDhEQUFDbEMseURBQUtBOzRDQUFDcUMsT0FBTzNCOzs7Ozs7Ozs7Ozs7OENBRTFCLDhEQUFDd0I7O3dDQUFJO3NEQUNPLDhEQUFDbEMseURBQUtBOzRDQUFDcUMsT0FBT3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEMsQ0FBQztHQXRGdUJYOztRQUNnQ0gseURBQWNBOzs7S0FEOUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvZm9ybSdcbmltcG9ydCB7IGxpZ2h0RGF0YSB9IGZyb20gJ0AvdXRpbHMvbGlnaHREYXRhJ1xuaW1wb3J0IExpZ2h0IGZyb20gJ0AvY29tcG9uZW50cy9MaWdodCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IHsgZ3JlZW5MaWdodER1cmF0aW9uLCBzZXRHcmVlbkxpZ2h0RHVyYXRpb24gfSA9IHVzZUZvcm1Db250ZXh0KClcbiAgY29uc3QgW2lzU3RhcnRlZCwgc2V0SXNTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY3ljbGUsIHNldEN5Y2xlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtncm91cDEsIHNldEdyb3VwMV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtncm91cDIsIHNldEdyb3VwMl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIGNvbnN0IHN0b3BDeWNsZSA9ICgpID0+IHtcbiAgICBzZXRJc1N0YXJ0ZWQoZmFsc2UpXG4gIH1cblxuICBjb25zdCBzdGFydEN5Y2xlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxpZ2h0T2JqQXJyID0gbGlnaHREYXRhKGdyZWVuTGlnaHREdXJhdGlvbilcbiAgICBzZXRJc1N0YXJ0ZWQoKCkgPT4gZmFsc2UpXG5cbiAgICBzZXRHcm91cDEobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDEpXG4gICAgc2V0R3JvdXAyKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAyKVxuXG4gICAgY29uc29sZS5sb2coc3RlcClcbiAgICBjb25zb2xlLmxvZyhjeWNsZSlcbiAgICBjb25zb2xlLmxvZyhpc1N0YXJ0ZWQpXG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlnaHRPYmpBcnIpIHtcbiAgICAgIHNldER1cmF0aW9uKGl0ZW0uZHVyYXRpb24pXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFN0ZXAoaXRlbS5zdGVwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5zdGVwID09PSBsaWdodE9iakFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldEN5Y2xlKGN5Y2xlICsgMSlcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0R3JvdXAxKGl0ZW0ubmV4dC5ncm91cDEpXG4gICAgICAgICAgc2V0R3JvdXAyKGl0ZW0ubmV4dC5ncm91cDIpXG4gICAgICAgICAgcmVzb2x2ZShpdGVtKVxuICAgICAgICB9LCBpdGVtLmR1cmF0aW9uICsgMTAwMClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkdXJhdGlvbiwgaXNTdGFydGVkKVxuICAgIGlmIChpc1N0YXJ0ZWQpIHtcbiAgICAgIHN0YXJ0Q3ljbGUoKVxuICAgIH1cbiAgfSwgW2lzU3RhcnRlZCwgY3ljbGUsIGR1cmF0aW9uXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBzZXREdXJhdGlvbigoKSA9PiBkdXJhdGlvbiAtIDEwMDApXG4gICAgICB9XG4gICAgfSwgMTAwMClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgIH1cbiAgfSwgW2R1cmF0aW9uLCBpc1N0YXJ0ZWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNTdGFydGVkKGdyZWVuTGlnaHREdXJhdGlvbilcbiAgfSwgW2dyZWVuTGlnaHREdXJhdGlvbiwgY3ljbGVdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8R3JlZW5MaWdodER1cmF0aW9uRm9ybS8+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+TWV2Y3V0IEFkxLFtOiB7c3RlcH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+U29ucmFraSBhZMSxbWEga2FsYW4gc8O8cmU6IHtkdXJhdGlvbiAvIDEwMDB9PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RvcEN5Y2xlfT5ZYXlhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBjb2xvcj17Z3JvdXAxfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGNvbG9yPXtncm91cDJ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiR3JlZW5MaWdodER1cmF0aW9uRm9ybSIsInVzZUZvcm1Db250ZXh0IiwibGlnaHREYXRhIiwiTGlnaHQiLCJIb21lIiwiZ3JlZW5MaWdodER1cmF0aW9uIiwic2V0R3JlZW5MaWdodER1cmF0aW9uIiwiaXNTdGFydGVkIiwic2V0SXNTdGFydGVkIiwic3RlcCIsInNldFN0ZXAiLCJjeWNsZSIsInNldEN5Y2xlIiwiZ3JvdXAxIiwic2V0R3JvdXAxIiwiZ3JvdXAyIiwic2V0R3JvdXAyIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsInN0b3BDeWNsZSIsInN0YXJ0Q3ljbGUiLCJsaWdodE9iakFyciIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImxlbmd0aCIsIm5leHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});