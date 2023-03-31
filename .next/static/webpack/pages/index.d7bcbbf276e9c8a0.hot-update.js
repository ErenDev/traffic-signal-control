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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Light */ \"./components/Light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { greenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cycle, setCycle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const getData = async ()=>{\n        const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n        setGroup1(lightObjArr[0].current.group1);\n        setGroup2(lightObjArr[0].current.group2);\n        for await (const item of lightObjArr){\n            let d = next();\n            console.log(d);\n            setDuration(item.duration);\n            await new Promise((resolve)=>{\n                setStep(item.step);\n                setTimeout(()=>{\n                    if (item.step === lightObjArr.length) {\n                        setCycle(cycle + 1);\n                    }\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    resolve(item);\n                }, item.duration);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration > 0) {\n            getData();\n        }\n    }, [\n        greenLightDuration,\n        cycle\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (duration >= 1) {\n                setDuration(duration - 1000);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        duration,\n        setDuration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"step: \",\n                        step\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group1 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: group1,\n                                    duration: duration\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group2 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: group2,\n                                    duration: duration\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"hrfGtZKGKQy7IGWPutKG4ipGkSg=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNMO0FBQzJCO0FBQ3pCO0FBQ0Y7QUFDUDtBQUV2QixTQUFTUSxPQUFROztJQUM5QixNQUFNLEVBQUVDLG1CQUFrQixFQUFFLEdBQUdKLDZEQUFjQTtJQUM3QyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBUztJQUVqRCxNQUFNa0IsVUFBVSxVQUFZO1FBQzFCLE1BQU1DLGNBQWNmLDJEQUFTQSxDQUFDRztRQUU5Qk0sVUFBVU0sV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDUixNQUFNO1FBQ3ZDRyxVQUFVSSxXQUFXLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNOLE1BQU07UUFFdkMsV0FBVyxNQUFNTyxRQUFRRixZQUFhO1lBQ3BDLElBQUlHLElBQUlDO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWkwsWUFBWUksS0FBS0wsUUFBUTtZQUN6QixNQUFNLElBQUlVLFFBQVFDLENBQUFBLFVBQVc7Z0JBQzNCbEIsUUFBUVksS0FBS2IsSUFBSTtnQkFDakJvQixXQUFXLElBQU07b0JBQ2YsSUFBSVAsS0FBS2IsSUFBSSxLQUFLVyxZQUFZVSxNQUFNLEVBQUU7d0JBQ3BDbEIsU0FBU0QsUUFBUTtvQkFDbkIsQ0FBQztvQkFFREcsVUFBVVEsS0FBS0UsSUFBSSxDQUFDWCxNQUFNO29CQUMxQkcsVUFBVU0sS0FBS0UsSUFBSSxDQUFDVCxNQUFNO29CQUMxQmEsUUFBUU47Z0JBQ1YsR0FBR0EsS0FBS0wsUUFBUTtZQUNsQjtRQUNGO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJUSxxQkFBcUIsR0FBRztZQUMxQlc7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDWDtRQUFvQkc7S0FBTTtJQUU5QlgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0rQixXQUFXQyxZQUFZLElBQU07WUFDakMsSUFBSWYsWUFBWSxHQUFHO2dCQUNqQkMsWUFBWUQsV0FBWTtZQUMxQixDQUFDO1FBQ0gsR0FBRztRQUNILE9BQU8sSUFBTWdCLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ2Q7UUFBVUM7S0FBWTtJQUUxQixxQkFDRTtrQkFDRSw0RUFBQ2dCO1lBQUtDLFdBQVdqQyxxRUFBVzs7OEJBQzFCLDhEQUFDQywwRUFBc0JBOzs7Ozs4QkFDdkIsOERBQUNpQzs7d0JBQUk7d0JBQU8zQjs7Ozs7Ozs4QkFDWiw4REFBQzJCOztzQ0FDQyw4REFBQ0E7O2dDQUFJOzhDQUNPLDhEQUFDOUIseURBQUtBO29DQUFDK0IsT0FBT3hCO29DQUFRSSxVQUFVQTs7Ozs7Ozs7Ozs7O3NDQUU1Qyw4REFBQ21COztnQ0FBSTs4Q0FDTyw4REFBQzlCLHlEQUFLQTtvQ0FBQytCLE9BQU90QjtvQ0FBUUUsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQsQ0FBQztHQWhFdUJWOztRQUNTSCx5REFBY0E7OztLQUR2QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0nXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9mb3JtJ1xuaW1wb3J0IHsgbGlnaHREYXRhIH0gZnJvbSAnQC91dGlscy9saWdodERhdGEnXG5pbXBvcnQgTGlnaHQgZnJvbSAnQC9jb21wb25lbnRzL0xpZ2h0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgeyBncmVlbkxpZ2h0RHVyYXRpb24gfSA9IHVzZUZvcm1Db250ZXh0KClcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2N5Y2xlLCBzZXRDeWNsZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZ3JvdXAxLCBzZXRHcm91cDFdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxpZ2h0T2JqQXJyID0gbGlnaHREYXRhKGdyZWVuTGlnaHREdXJhdGlvbilcblxuICAgIHNldEdyb3VwMShsaWdodE9iakFyclswXS5jdXJyZW50Lmdyb3VwMSlcbiAgICBzZXRHcm91cDIobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDIpXG5cbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZW0gb2YgbGlnaHRPYmpBcnIpIHtcbiAgICAgIGxldCBkID0gbmV4dCgpXG4gICAgICBjb25zb2xlLmxvZyhkKVxuICAgICAgc2V0RHVyYXRpb24oaXRlbS5kdXJhdGlvbilcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRTdGVwKGl0ZW0uc3RlcClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uc3RlcCA9PT0gbGlnaHRPYmpBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDeWNsZShjeWNsZSArIDEpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0R3JvdXAxKGl0ZW0ubmV4dC5ncm91cDEpXG4gICAgICAgICAgc2V0R3JvdXAyKGl0ZW0ubmV4dC5ncm91cDIpXG4gICAgICAgICAgcmVzb2x2ZShpdGVtKVxuICAgICAgICB9LCBpdGVtLmR1cmF0aW9uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChncmVlbkxpZ2h0RHVyYXRpb24gPiAwKSB7XG4gICAgICBnZXREYXRhKClcbiAgICB9XG4gIH0sIFtncmVlbkxpZ2h0RHVyYXRpb24sIGN5Y2xlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uID49IDEpIHtcbiAgICAgICAgc2V0RHVyYXRpb24oZHVyYXRpb24gIC0gMTAwMClcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxuICB9LCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gLz5cbiAgICAgICAgPGRpdj5zdGVwOiB7c3RlcH08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBjb2xvcj17Z3JvdXAxfSBkdXJhdGlvbj17ZHVyYXRpb259IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMiA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMn0gZHVyYXRpb249e2R1cmF0aW9ufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwidXNlRm9ybUNvbnRleHQiLCJsaWdodERhdGEiLCJMaWdodCIsIkhvbWUiLCJncmVlbkxpZ2h0RHVyYXRpb24iLCJzdGVwIiwic2V0U3RlcCIsImN5Y2xlIiwic2V0Q3ljbGUiLCJncm91cDEiLCJzZXRHcm91cDEiLCJncm91cDIiLCJzZXRHcm91cDIiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiZ2V0RGF0YSIsImxpZ2h0T2JqQXJyIiwiY3VycmVudCIsIml0ZW0iLCJkIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});