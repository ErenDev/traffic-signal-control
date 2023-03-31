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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst setActiveLight = async (value, ms)=>{\n    return await new Promise((resolve, reject)=>{\n        setTimeout(()=>{\n            resolve(value);\n        }, ms);\n    });\n};\nconst Light = (param)=>{\n    let { schedule  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        schedule.map((item, index)=>{\n            item.then((value)=>{\n                console.log(value);\n                setActive(value);\n            });\n        });\n    });\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[active]\n                },\n                children: active\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Light, \"fGT6ZSPXfKuhpNuIHwNSI1iAT6g=\");\n_c = Light;\nconst scheduleLight = (schedule)=>{\n    let ms = 0;\n    return schedule.map((item, index)=>{\n        const prev = schedule[index + 1];\n        const next = schedule[index + 1];\n        if (prev === \"Y\") {\n            ms += 30000;\n        } else {\n            ms += 5000;\n        }\n        return setActiveLight(prev, ms);\n    });\n};\nfunction Home() {\n    const group1 = scheduleLight(g1);\n    const group2 = scheduleLight(g2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2lCO0FBQzJCO0FBQ3RCO0FBRWxELE1BQU1NLEtBQUs7SUFBQztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7Q0FBSTtBQUN6QyxNQUFNQyxLQUFLO0lBQUM7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0NBQUk7QUFFekMsTUFBTUMsaUJBQWlCLE9BQU9DLE9BQU9DLEtBQU87SUFDMUMsT0FBTyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUM1Q0MsV0FBVyxJQUFNO1lBQ2ZGLFFBQVFIO1FBQ1YsR0FBR0M7SUFDTDtBQUNGO0FBRUEsTUFBTUssUUFBUSxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUE7SUFFcENELGdEQUFTQSxDQUFDLElBQU07UUFDZFksU0FBU0csR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7WUFDNUJELEtBQUtFLElBQUksQ0FBQyxDQUFDYixRQUFVO2dCQUNuQmMsUUFBUUMsR0FBRyxDQUFDZjtnQkFDWlMsVUFBVVQ7WUFDWjtRQUNGO0lBQ0Y7SUFFQSxNQUFNZ0IsV0FBVztRQUNmQyxHQUFHO1FBQ0hDLEdBQUc7UUFDSEMsR0FBRztJQUNMO0lBRUEscUJBQ0UsOERBQUNDOztZQUFJOzBCQUFRLDhEQUFDQztnQkFBS0MsT0FBTztvQkFBRUMsT0FBT1AsUUFBUSxDQUFDUixPQUFPO2dCQUFBOzBCQUFJQTs7Ozs7Ozs7Ozs7O0FBRTNEO0dBckJNRjtLQUFBQTtBQXVCTixNQUFNa0IsZ0JBQWdCLENBQUNqQixXQUFhO0lBQ2xDLElBQUlOLEtBQUs7SUFFVCxPQUFPTSxTQUFTRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtRQUNuQyxNQUFNYSxPQUFPbEIsUUFBUSxDQUFDSyxRQUFRLEVBQUU7UUFDaEMsTUFBTWMsT0FBT25CLFFBQVEsQ0FBQ0ssUUFBUSxFQUFFO1FBRWhDLElBQUlhLFNBQVMsS0FBSztZQUNoQnhCLE1BQU07UUFDUixPQUFPO1lBQ0xBLE1BQU07UUFDUixDQUFDO1FBRUQsT0FBT0YsZUFBZTBCLE1BQU14QjtJQUM5QjtBQUNGO0FBR2UsU0FBUzBCLE9BQVE7SUFDOUIsTUFBTUMsU0FBU0osY0FBYzNCO0lBQzdCLE1BQU1nQyxTQUFTTCxjQUFjMUI7SUFFN0IscUJBQ0U7OzBCQUNFLDhEQUFDUCxrREFBSUE7O2tDQUNILDhEQUFDdUM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVc5QyxxRUFBVzs7a0NBQzFCLDhEQUFDQywwRUFBc0JBOzs7OztrQ0FFdkIsOERBQUMyQjs7MENBQ0MsOERBQUNBOztvQ0FBSTtrREFDTyw4REFBQ2Q7d0NBQU1DLFVBQVVxQjs7Ozs7Ozs7Ozs7OzBDQUc3Qiw4REFBQ1I7O29DQUFJO2tEQUNPLDhEQUFDZDt3Q0FBTUMsVUFBVXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QyxDQUFDO01BM0J1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgR3JlZW5MaWdodER1cmF0aW9uRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvR3JlZW5MaWdodER1cmF0aW9uRm9ybSdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGcxID0gWydLJywgJ1knLCAnUycsICdLJywgJ0snLCAnSyddXG5jb25zdCBnMiA9IFsnSycsICdLJywgJ0snLCAnWScsICdTJywgJ0snXVxuXG5jb25zdCBzZXRBY3RpdmVMaWdodCA9IGFzeW5jICh2YWx1ZSwgbXMpID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUodmFsdWUpXG4gICAgfSwgbXMpXG4gIH0pXG59XG5cbmNvbnN0IExpZ2h0ID0gKHsgc2NoZWR1bGUgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2NoZWR1bGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaXRlbS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgc2V0QWN0aXZlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGNvbG9yTWFwID0ge1xuICAgIEs6ICdyZWQnLFxuICAgIFk6ICdncmVlbicsXG4gICAgUzogJ3llbGxvdydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5BY3RpdmU6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvck1hcFthY3RpdmVdfX0+e2FjdGl2ZX08L3NwYW4+PC9kaXY+XG4gIClcbn1cblxuY29uc3Qgc2NoZWR1bGVMaWdodCA9IChzY2hlZHVsZSkgPT4ge1xuICBsZXQgbXMgPSAwXG5cbiAgcmV0dXJuIHNjaGVkdWxlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcmV2ID0gc2NoZWR1bGVbaW5kZXggKyAxXVxuICAgIGNvbnN0IG5leHQgPSBzY2hlZHVsZVtpbmRleCArIDFdXG5cbiAgICBpZiAocHJldiA9PT0gJ1knKSB7XG4gICAgICBtcyArPSAzMDAwMFxuICAgIH0gZWxzZSB7XG4gICAgICBtcyArPSA1MDAwXG4gICAgfVxuXG4gICAgcmV0dXJuIHNldEFjdGl2ZUxpZ2h0KHByZXYsIG1zKVxuICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBncm91cDEgPSBzY2hlZHVsZUxpZ2h0KGcxKVxuICBjb25zdCBncm91cDIgPSBzY2hlZHVsZUxpZ2h0KGcyKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SVNCQUs8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSVNCQUtcIi8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IHNjaGVkdWxlPXtncm91cDF9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBzY2hlZHVsZT17Z3JvdXAyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImcxIiwiZzIiLCJzZXRBY3RpdmVMaWdodCIsInZhbHVlIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJMaWdodCIsInNjaGVkdWxlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjb2xvck1hcCIsIksiLCJZIiwiUyIsImRpdiIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwic2NoZWR1bGVMaWdodCIsInByZXYiLCJuZXh0IiwiSG9tZSIsImdyb3VwMSIsImdyb3VwMiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});