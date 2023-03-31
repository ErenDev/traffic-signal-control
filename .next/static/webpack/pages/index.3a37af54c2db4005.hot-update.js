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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration , setGreenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isStarted, setIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const stopCycle = ()=>{\n        setIsStarted(false);\n        setStep(0);\n        setGroup2(null);\n        setGroup1(null);\n        setDuration(0);\n        setCycle(0);\n        setGreenLightDuration(null);\n    };\n    const startCycle = async (isStarted)=>{\n        console.log(isStarted);\n        let timer = null;\n        if (isStarted) {\n            const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n            setGroup1(lightObjArr[0].current.group1);\n            setGroup2(lightObjArr[0].current.group2);\n            console.log(\"[startCycle]\");\n            for await (const item of lightObjArr){\n                setDuration(item.duration);\n                await new Promise((resolve, reject)=>{\n                    setStep(item.step);\n                    timer = setTimeout(()=>{\n                        if (item.step === lightObjArr.length) {\n                            setCycle(cycle + 1);\n                        }\n                        setGroup1(item.next.group1);\n                        setGroup2(item.next.group2);\n                        resolve(item);\n                    }, item.duration + 1000);\n                });\n            }\n        } else {\n            clearTimeout(timer);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isStarted) {\n            startCycle(isStarted).then(()=>{});\n        }\n    }, [\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(()=>duration - 1000);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        duration,\n        isStarted\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration) {\n            setIsStarted(true);\n        } else {\n            setIsStarted(false);\n        }\n    }, [\n        greenLightDuration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Mevcut Adım: \",\n                                step\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Sonraki adıma kalan s\\xfcre: \",\n                                duration / 1000\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopCycle,\n                                children: \"Yaya\"\n                            }, void 0, false, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group1 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Group2 => \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: group2\n                                        }, void 0, false, {\n                                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"p7l4O2aaxrmCGvWfen4s7xBcGTE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNMO0FBQzJCO0FBQ3pCO0FBQ0Y7QUFDUDtBQUV2QixTQUFTUSxPQUFROztJQUM5QixNQUFNLEVBQUVDLG1CQUFrQixFQUFFQyxzQkFBcUIsRUFBRSxHQUFHTCw2REFBY0E7SUFDcEUsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQVM7SUFFakQsTUFBTXFCLFlBQVksSUFBTTtRQUN0QlgsYUFBYSxLQUFLO1FBQ2xCRSxRQUFRO1FBQ1JNLFVBQVUsSUFBSTtRQUNkRixVQUFVLElBQUk7UUFDZEksWUFBWTtRQUNaTixTQUFTO1FBQ1ROLHNCQUFzQixJQUFJO0lBQzVCO0lBRUEsTUFBTWMsYUFBYSxPQUFPYixZQUFjO1FBQ3RDYyxRQUFRQyxHQUFHLENBQUNmO1FBQ1osSUFBSWdCLFFBQVEsSUFBSTtRQUNoQixJQUFJaEIsV0FBVztZQUNiLE1BQU1pQixjQUFjdEIsMkRBQVNBLENBQUNHO1lBRTlCUyxVQUFVVSxXQUFXLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNaLE1BQU07WUFDdkNHLFVBQVVRLFdBQVcsQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ1YsTUFBTTtZQUV2Q00sUUFBUUMsR0FBRyxDQUFDO1lBRVosV0FBVyxNQUFNSSxRQUFRRixZQUFhO2dCQUNwQ04sWUFBWVEsS0FBS1QsUUFBUTtnQkFFekIsTUFBTSxJQUFJVSxRQUFRLENBQUNDLFNBQVNDLFNBQVc7b0JBQ3JDbkIsUUFBUWdCLEtBQUtqQixJQUFJO29CQUNqQmMsUUFBUU8sV0FBVyxJQUFNO3dCQUN2QixJQUFJSixLQUFLakIsSUFBSSxLQUFLZSxZQUFZTyxNQUFNLEVBQUU7NEJBQ3BDbkIsU0FBU0QsUUFBUTt3QkFDbkIsQ0FBQzt3QkFDREcsVUFBVVksS0FBS00sSUFBSSxDQUFDbkIsTUFBTTt3QkFDMUJHLFVBQVVVLEtBQUtNLElBQUksQ0FBQ2pCLE1BQU07d0JBQzFCYSxRQUFRRjtvQkFDVixHQUFHQSxLQUFLVCxRQUFRLEdBQUc7Z0JBQ3JCO1lBQ0Y7UUFDRixPQUFPO1lBQ0xnQixhQUFhVjtRQUNmLENBQUM7SUFDSDtJQUVBMUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlVLFdBQVc7WUFDYmEsV0FBV2IsV0FBVzJCLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDcEMsQ0FBQztJQUNILEdBQUc7UUFBQzNCO0tBQVU7SUFFZFYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1zQyxXQUFXQyxZQUFZLElBQU07WUFDakMsSUFBSW5CLFdBQVcsR0FBRztnQkFDaEJDLFlBQVksSUFBTUQsV0FBVztZQUMvQixDQUFDO1FBQ0gsR0FBRztRQUNILE9BQU8sSUFBTW9CLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ2xCO1FBQVVWO0tBQVU7SUFFeEJWLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJUSxvQkFBb0I7WUFDdEJHLGFBQWEsSUFBSTtRQUNuQixPQUFPO1lBQ0xBLGFBQWEsS0FBSztRQUNwQixDQUFDO0lBQ0gsR0FBRztRQUFDSDtLQUFtQjtJQUV2QixxQkFDRTtrQkFDRSw0RUFBQ2lDO1lBQUtDLFdBQVd4QyxxRUFBVzs7OEJBQzFCLDhEQUFDQywwRUFBc0JBOzs7Ozs4QkFDckI7O3NDQUNFLDhEQUFDd0M7O2dDQUFJO2dDQUFjL0I7Ozs7Ozs7c0NBQ25CLDhEQUFDK0I7O2dDQUFJO2dDQUEyQnZCLFdBQVc7Ozs7Ozs7c0NBRTNDLDhEQUFDdUI7c0NBQ0MsNEVBQUNDO2dDQUFPQyxTQUFTdkI7MENBQVc7Ozs7Ozs7Ozs7O3NDQUU5Qiw4REFBQ3FCOzs4Q0FDQyw4REFBQ0E7O3dDQUFJO3NEQUNPLDhEQUFDckMseURBQUtBOzRDQUFDd0MsT0FBTzlCOzs7Ozs7Ozs7Ozs7OENBRTFCLDhEQUFDMkI7O3dDQUFJO3NEQUNPLDhEQUFDckMseURBQUtBOzRDQUFDd0MsT0FBTzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEMsQ0FBQztHQWhHdUJYOztRQUNnQ0gseURBQWNBOzs7S0FEOUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvZm9ybSdcbmltcG9ydCB7IGxpZ2h0RGF0YSB9IGZyb20gJ0AvdXRpbHMvbGlnaHREYXRhJ1xuaW1wb3J0IExpZ2h0IGZyb20gJ0AvY29tcG9uZW50cy9MaWdodCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IHsgZ3JlZW5MaWdodER1cmF0aW9uLCBzZXRHcmVlbkxpZ2h0RHVyYXRpb24gfSA9IHVzZUZvcm1Db250ZXh0KClcbiAgY29uc3QgW2lzU3RhcnRlZCwgc2V0SXNTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY3ljbGUsIHNldEN5Y2xlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtncm91cDEsIHNldEdyb3VwMV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtncm91cDIsIHNldEdyb3VwMl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIGNvbnN0IHN0b3BDeWNsZSA9ICgpID0+IHtcbiAgICBzZXRJc1N0YXJ0ZWQoZmFsc2UpXG4gICAgc2V0U3RlcCgwKVxuICAgIHNldEdyb3VwMihudWxsKVxuICAgIHNldEdyb3VwMShudWxsKVxuICAgIHNldER1cmF0aW9uKDApXG4gICAgc2V0Q3ljbGUoMClcbiAgICBzZXRHcmVlbkxpZ2h0RHVyYXRpb24obnVsbClcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0Q3ljbGUgPSBhc3luYyAoaXNTdGFydGVkKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXNTdGFydGVkKVxuICAgIGxldCB0aW1lciA9IG51bGxcbiAgICBpZiAoaXNTdGFydGVkKSB7XG4gICAgICBjb25zdCBsaWdodE9iakFyciA9IGxpZ2h0RGF0YShncmVlbkxpZ2h0RHVyYXRpb24pXG5cbiAgICAgIHNldEdyb3VwMShsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMSlcbiAgICAgIHNldEdyb3VwMihsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMilcblxuICAgICAgY29uc29sZS5sb2coJ1tzdGFydEN5Y2xlXScpXG5cbiAgICAgIGZvciBhd2FpdCAoY29uc3QgaXRlbSBvZiBsaWdodE9iakFycikge1xuICAgICAgICBzZXREdXJhdGlvbihpdGVtLmR1cmF0aW9uKVxuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBzZXRTdGVwKGl0ZW0uc3RlcClcbiAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc3RlcCA9PT0gbGlnaHRPYmpBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHNldEN5Y2xlKGN5Y2xlICsgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEdyb3VwMShpdGVtLm5leHQuZ3JvdXAxKVxuICAgICAgICAgICAgc2V0R3JvdXAyKGl0ZW0ubmV4dC5ncm91cDIpXG4gICAgICAgICAgICByZXNvbHZlKGl0ZW0pXG4gICAgICAgICAgfSwgaXRlbS5kdXJhdGlvbiArIDEwMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1N0YXJ0ZWQpIHtcbiAgICAgIHN0YXJ0Q3ljbGUoaXNTdGFydGVkKS50aGVuKCgpID0+IHt9KVxuICAgIH1cbiAgfSwgW2lzU3RhcnRlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgc2V0RHVyYXRpb24oKCkgPT4gZHVyYXRpb24gLSAxMDAwKVxuICAgICAgfVxuICAgIH0sIDEwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIH0sIFtkdXJhdGlvbiwgaXNTdGFydGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChncmVlbkxpZ2h0RHVyYXRpb24pIHtcbiAgICAgIHNldElzU3RhcnRlZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc1N0YXJ0ZWQoZmFsc2UpXG4gICAgfVxuICB9LCBbZ3JlZW5MaWdodER1cmF0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0vPlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2Pk1ldmN1dCBBZMSxbToge3N0ZXB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlNvbnJha2kgYWTEsW1hIGthbGFuIHPDvHJlOiB7ZHVyYXRpb24gLyAxMDAwfTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BDeWNsZX0+WWF5YTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBjb2xvcj17Z3JvdXAyfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJ1c2VGb3JtQ29udGV4dCIsImxpZ2h0RGF0YSIsIkxpZ2h0IiwiSG9tZSIsImdyZWVuTGlnaHREdXJhdGlvbiIsInNldEdyZWVuTGlnaHREdXJhdGlvbiIsImlzU3RhcnRlZCIsInNldElzU3RhcnRlZCIsInN0ZXAiLCJzZXRTdGVwIiwiY3ljbGUiLCJzZXRDeWNsZSIsImdyb3VwMSIsInNldEdyb3VwMSIsImdyb3VwMiIsInNldEdyb3VwMiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJzdG9wQ3ljbGUiLCJzdGFydEN5Y2xlIiwiY29uc29sZSIsImxvZyIsInRpbWVyIiwibGlnaHRPYmpBcnIiLCJjdXJyZW50IiwiaXRlbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImxlbmd0aCIsIm5leHQiLCJjbGVhclRpbWVvdXQiLCJ0aGVuIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});