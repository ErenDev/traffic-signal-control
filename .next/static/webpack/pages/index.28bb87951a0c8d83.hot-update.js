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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handlePedestrian = ()=>{\n        setIsActive(false);\n    };\n    const startCycle = async ()=>{\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        for await (const item of lightObjArr){\n            setDuration(item.duration);\n            await new Promise((resolve)=>{\n                setStep(item.step);\n                setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    resolve(item);\n                }, item.duration);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration > 0) {\n            startCycle();\n        }\n    }, [\n        greenLightDuration,\n        cycle,\n        isActive\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration > 0) {\n                setDuration(duration - 1000);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        duration,\n        isActive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"step: \",\n                        step\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handlePedestrian,\n                            children: \"Yaya\"\n                        }, void 0, false, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group1 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: group1,\n                                    duration: duration\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group2 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: group2,\n                                    duration: duration\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"74REFDLfhY8cZ9g8Ys2v/7/eZCI=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNMO0FBQzJCO0FBQ3pCO0FBQ0Y7QUFDUDtBQUV2QixTQUFTUSxPQUFROztJQUM5QixNQUFNLEVBQUVDLG1CQUFrQixFQUFFLEdBQUdKLDZEQUFjQTtJQUM3QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFTO0lBRWpELE1BQU1vQixtQkFBbUIsSUFBTTtRQUM3QlgsWUFBWSxLQUFLO0lBQ25CO0lBRUEsTUFBTVksYUFBYSxVQUFZO1FBQzdCLE1BQU1DLGNBQWNsQiwyREFBU0EsQ0FBQ0c7UUFFOUJRLFVBQVVPLFdBQVcsQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ1QsTUFBTTtRQUN2Q0csVUFBVUssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDUCxNQUFNO1FBRXZDLFdBQVcsTUFBTVEsUUFBUUYsWUFBYTtZQUNwQ0gsWUFBWUssS0FBS04sUUFBUTtZQUV6QixNQUFNLElBQUlPLFFBQVFDLENBQUFBLFVBQVc7Z0JBQzNCZixRQUFRYSxLQUFLZCxJQUFJO2dCQUNqQmlCLFdBQVcsSUFBTTtvQkFDZixJQUFJSCxLQUFLZCxJQUFJLEtBQUtZLFlBQVlNLE1BQU0sRUFBRTt3QkFDcENmLFNBQVNELFFBQVE7b0JBQ25CLENBQUM7b0JBRURHLFVBQVVTLEtBQUtLLElBQUksQ0FBQ2YsTUFBTTtvQkFDMUJHLFVBQVVPLEtBQUtLLElBQUksQ0FBQ2IsTUFBTTtvQkFDMUJVLFFBQVFGO2dCQUNWLEdBQUdBLEtBQUtOLFFBQVE7WUFDbEI7UUFDRjtJQUNGO0lBRUFuQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEscUJBQXFCLEdBQUc7WUFDMUJjO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2Q7UUFBb0JLO1FBQU9KO0tBQVM7SUFFeENULGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNK0IsV0FBV0MsWUFBWSxJQUFNO1lBQ2pDLElBQUliLFdBQVcsR0FBRztnQkFDaEJDLFlBQVlELFdBQVc7WUFDekIsQ0FBQztRQUNILEdBQUc7UUFDSCxPQUFPLElBQU1jLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ1o7UUFBVVY7S0FBUztJQUV2QixxQkFDRTtrQkFDRSw0RUFBQ3lCO1lBQUtDLFdBQVdqQyxxRUFBVzs7OEJBQzFCLDhEQUFDQywwRUFBc0JBOzs7Ozs4QkFDdkIsOERBQUNpQzs7d0JBQUk7d0JBQU96Qjs7Ozs7Ozs4QkFDWiw4REFBQ3lCOztzQ0FDQyw4REFBQ0M7NEJBQU9DLFNBQVNqQjtzQ0FBa0I7Ozs7OztzQ0FFbkMsOERBQUNlOztnQ0FBSTs4Q0FDTyw4REFBQzlCLHlEQUFLQTtvQ0FBQ2lDLE9BQU94QjtvQ0FBUUksVUFBVUE7Ozs7Ozs7Ozs7OztzQ0FFNUMsOERBQUNpQjs7Z0NBQUk7OENBQ08sOERBQUM5Qix5REFBS0E7b0NBQUNpQyxPQUFPdEI7b0NBQVFFLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRELENBQUM7R0F0RXVCWjs7UUFDU0gseURBQWNBOzs7S0FEdkJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvZm9ybSdcbmltcG9ydCB7IGxpZ2h0RGF0YSB9IGZyb20gJ0AvdXRpbHMvbGlnaHREYXRhJ1xuaW1wb3J0IExpZ2h0IGZyb20gJ0AvY29tcG9uZW50cy9MaWdodCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IHsgZ3JlZW5MaWdodER1cmF0aW9uIH0gPSB1c2VGb3JtQ29udGV4dCgpXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtjeWNsZSwgc2V0Q3ljbGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2dyb3VwMSwgc2V0R3JvdXAxXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2dyb3VwMiwgc2V0R3JvdXAyXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgaGFuZGxlUGVkZXN0cmlhbiA9ICgpID0+IHtcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0Q3ljbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGlnaHRPYmpBcnIgPSBsaWdodERhdGEoZ3JlZW5MaWdodER1cmF0aW9uKVxuXG4gICAgc2V0R3JvdXAxKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAxKVxuICAgIHNldEdyb3VwMihsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMilcblxuICAgIGZvciBhd2FpdCAoY29uc3QgaXRlbSBvZiBsaWdodE9iakFycikge1xuICAgICAgc2V0RHVyYXRpb24oaXRlbS5kdXJhdGlvbilcblxuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldFN0ZXAoaXRlbS5zdGVwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5zdGVwID09PSBsaWdodE9iakFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldEN5Y2xlKGN5Y2xlICsgMSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRHcm91cDEoaXRlbS5uZXh0Lmdyb3VwMSlcbiAgICAgICAgICBzZXRHcm91cDIoaXRlbS5uZXh0Lmdyb3VwMilcbiAgICAgICAgICByZXNvbHZlKGl0ZW0pXG4gICAgICAgIH0sIGl0ZW0uZHVyYXRpb24pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdyZWVuTGlnaHREdXJhdGlvbiA+IDApIHtcbiAgICAgIHN0YXJ0Q3ljbGUoKVxuICAgIH1cbiAgfSwgW2dyZWVuTGlnaHREdXJhdGlvbiwgY3ljbGUsIGlzQWN0aXZlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBzZXREdXJhdGlvbihkdXJhdGlvbiAtIDEwMDApXG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgfSwgW2R1cmF0aW9uLCBpc0FjdGl2ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtLz5cbiAgICAgICAgPGRpdj5zdGVwOiB7c3RlcH08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBlZGVzdHJpYW59PllheWE8L2J1dHRvbj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IGNvbG9yPXtncm91cDF9IGR1cmF0aW9uPXtkdXJhdGlvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGNvbG9yPXtncm91cDJ9IGR1cmF0aW9uPXtkdXJhdGlvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwidXNlRm9ybUNvbnRleHQiLCJsaWdodERhdGEiLCJMaWdodCIsIkhvbWUiLCJncmVlbkxpZ2h0RHVyYXRpb24iLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwic3RlcCIsInNldFN0ZXAiLCJjeWNsZSIsInNldEN5Y2xlIiwiZ3JvdXAxIiwic2V0R3JvdXAxIiwiZ3JvdXAyIiwic2V0R3JvdXAyIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImhhbmRsZVBlZGVzdHJpYW4iLCJzdGFydEN5Y2xlIiwibGlnaHRPYmpBcnIiLCJjdXJyZW50IiwiaXRlbSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxlbmd0aCIsIm5leHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});