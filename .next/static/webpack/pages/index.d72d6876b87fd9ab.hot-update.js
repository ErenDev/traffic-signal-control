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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const nextLight = item[index + 1];\n    let obj = {\n        duration: 5000,\n        nextLight: \"\",\n        lights: item\n    };\n    if (nextLight) {\n        obj.nextLight = nextLight;\n    }\n    if (item[0] === \"Y\" || item[1] === \"Y\") {\n        obj.duration = 30000;\n    }\n    lightObjArr.push(obj);\n});\nconsole.log(lightObjArr);\nconst setActiveLight = async (value, ms)=>{\n    return await new Promise((resolve, reject)=>{\n        setTimeout(()=>{\n            resolve(value);\n        }, ms);\n    });\n};\nconst Light = (param)=>{\n    let { schedule  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        schedule.map((item, index)=>{\n            item.then((value)=>{\n                setActive(value);\n            });\n        });\n    });\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[active]\n                },\n                children: active\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Light, \"fGT6ZSPXfKuhpNuIHwNSI1iAT6g=\");\n_c = Light;\nconst scheduleLight = (schedule)=>{\n    let ms = 0;\n    return schedule.map((item, index)=>{\n        const prev = schedule[index + 1];\n        const next = schedule[index + 1];\n        if (index > 0) {\n            if (prev === \"S\" && item === \"Y\") {\n                ms += 30000;\n            } else {\n                ms += 5000;\n            }\n        }\n        return setActiveLight(prev, ms);\n    });\n};\nfunction Home() {\n    const group1 = scheduleLight(g1);\n    const group2 = scheduleLight(g2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFXdkQscUVBQVc7O2tDQUMxQiw4REFBQ0MsMEVBQXNCQTs7Ozs7a0NBRXZCLDhEQUFDb0M7OzBDQUNDLDhEQUFDQTs7b0NBQUk7a0RBQ08sOERBQUNWO3dDQUFNQyxVQUFVaUI7Ozs7Ozs7Ozs7OzswQ0FHN0IsOERBQUNSOztvQ0FBSTtrREFDTyw4REFBQ1Y7d0NBQU1DLFVBQVVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkMsQ0FBQztNQTNCdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0nXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBnMSA9IFsnSycsICdZJywgJ1MnLCAnSycsICdLJywgJ0snXVxuY29uc3QgZzIgPSBbJ0snLCAnSycsICdLJywgJ1knLCAnUycsICdLJ11cblxuY29uc3QgbGlnaHRBcnIgPSBbXG4gIFsnSycsICdLJ10sXG4gIFsnWScsICdLJ10sXG4gIFsnUycsICdLJ10sXG4gIFsnSycsICdZJ10sXG4gIFsnSycsICdTJ10sXG4gIFsnSycsICdLJ11cbl1cblxuY29uc3QgbGlnaHRPYmpBcnIgPSBbXVxubGlnaHRBcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICBjb25zdCBuZXh0TGlnaHQgPSBpdGVtW2luZGV4ICsgMV1cblxuICBsZXQgb2JqID0ge1xuICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgIG5leHRMaWdodDogJycsXG4gICAgbGlnaHRzOiBpdGVtXG4gIH1cblxuICBpZiAobmV4dExpZ2h0KSB7XG4gICAgb2JqLm5leHRMaWdodCA9IG5leHRMaWdodFxuICB9XG5cbiAgaWYgKGl0ZW1bMF0gPT09ICdZJyB8fCBpdGVtWzFdID09PSAnWScpIHtcbiAgICBvYmouZHVyYXRpb24gPSAzMDAwMFxuICB9XG5cblxuICBsaWdodE9iakFyci5wdXNoKG9iailcbn0pXG5cbmNvbnNvbGUubG9nKGxpZ2h0T2JqQXJyKVxuXG5jb25zdCBzZXRBY3RpdmVMaWdodCA9IGFzeW5jICh2YWx1ZSwgbXMpID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUodmFsdWUpXG4gICAgfSwgbXMpXG4gIH0pXG59XG5cbmNvbnN0IExpZ2h0ID0gKHsgc2NoZWR1bGUgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2NoZWR1bGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaXRlbS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgY29sb3JNYXAgPSB7XG4gICAgSzogJ3JlZCcsXG4gICAgWTogJ2dyZWVuJyxcbiAgICBTOiAneWVsbG93J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PkFjdGl2ZTogPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9yTWFwW2FjdGl2ZV19fT57YWN0aXZlfTwvc3Bhbj48L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBzY2hlZHVsZUxpZ2h0ID0gKHNjaGVkdWxlKSA9PiB7XG4gIGxldCBtcyA9IDBcblxuICByZXR1cm4gc2NoZWR1bGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBzY2hlZHVsZVtpbmRleCArIDFdXG4gICAgY29uc3QgbmV4dCA9IHNjaGVkdWxlW2luZGV4ICsgMV1cblxuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGlmIChwcmV2ID09PSAnUycgJiYgaXRlbSA9PT0gJ1knKSB7XG4gICAgICAgIG1zICs9IDMwMDAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtcyArPSA1MDAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldEFjdGl2ZUxpZ2h0KHByZXYsIG1zKVxuICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBncm91cDEgPSBzY2hlZHVsZUxpZ2h0KGcxKVxuICBjb25zdCBncm91cDIgPSBzY2hlZHVsZUxpZ2h0KGcyKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SVNCQUs8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSVNCQUtcIi8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IHNjaGVkdWxlPXtncm91cDF9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBzY2hlZHVsZT17Z3JvdXAyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImcxIiwiZzIiLCJsaWdodEFyciIsImxpZ2h0T2JqQXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImFyciIsIm5leHRMaWdodCIsIm9iaiIsImR1cmF0aW9uIiwibGlnaHRzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRBY3RpdmVMaWdodCIsInZhbHVlIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJMaWdodCIsInNjaGVkdWxlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibWFwIiwidGhlbiIsImNvbG9yTWFwIiwiSyIsIlkiLCJTIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJzY2hlZHVsZUxpZ2h0IiwicHJldiIsIm5leHQiLCJIb21lIiwiZ3JvdXAxIiwiZ3JvdXAyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});