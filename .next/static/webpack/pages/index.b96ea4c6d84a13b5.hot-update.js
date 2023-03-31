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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const group1 = item[0];\n    const group2 = item[1];\n    const nextLight = lightArr[index + 1];\n    let obj = {\n        duration: 0,\n        lights: item,\n        current: {\n            group1: item[0],\n            group2: item[1]\n        },\n        next: {\n            group1: \"\",\n            group2: \"\"\n        }\n    };\n    if (index > 0) {\n        obj.duration = 5000;\n    }\n    if (nextLight) {\n        obj.next.group1 = nextLight[0];\n        obj.next.group2 = nextLight[1];\n    }\n    if (group1 === \"Y\" || group2 === \"Y\") {\n        obj.duration = 10000;\n    }\n    lightObjArr.push(obj);\n});\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(lightObjArr[0].current.group1);\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(lightObjArr[0].current.group2);\n    const getData = async ()=>{\n        for await (const item of lightObjArr){\n            await new Promise((resolve)=>{\n                setTimeout(()=>{\n                    resolve(item);\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    console.log(item);\n                }, item.duration);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>{\n            getData();\n        }, 5000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ctnZo+ydSP4cPDR9H1K9lm8XCLU=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFCLDhEQUFDQywwRUFBc0JBOzs7OztrQ0FDdkIsOERBQUN5Qjs7MENBQ0MsOERBQUNBOztvQ0FBSTtrREFDTyw4REFBQ047d0NBQU1DLE9BQU9WOzs7Ozs7Ozs7Ozs7MENBRzFCLDhEQUFDZTs7b0NBQUk7a0RBQ08sOERBQUNOO3dDQUFNQyxPQUFPVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMsQ0FBQztHQTdDdUJpQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgbGlnaHRBcnIgPSBbXG4gIFsnSycsICdLJ10sXG4gIFsnWScsICdLJ10sXG4gIFsnUycsICdLJ10sXG4gIFsnSycsICdZJ10sXG4gIFsnSycsICdTJ10sXG4gIFsnSycsICdLJ11cbl1cblxuY29uc3QgbGlnaHRPYmpBcnIgPSBbXVxubGlnaHRBcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICBjb25zdCBncm91cDEgPSBpdGVtWzBdXG4gIGNvbnN0IGdyb3VwMiA9IGl0ZW1bMV1cbiAgY29uc3QgbmV4dExpZ2h0ID0gbGlnaHRBcnJbaW5kZXggKyAxXVxuXG4gIGxldCBvYmogPSB7XG4gICAgZHVyYXRpb246IDAsXG4gICAgbGlnaHRzOiBpdGVtLFxuICAgIGN1cnJlbnQ6IHtcbiAgICAgIGdyb3VwMTogaXRlbVswXSxcbiAgICAgIGdyb3VwMjogaXRlbVsxXSxcbiAgICB9LFxuICAgIG5leHQ6IHtcbiAgICAgIGdyb3VwMTogJycsXG4gICAgICBncm91cDI6ICcnXG4gICAgfVxuICB9XG5cbiAgaWYgKGluZGV4ID4gMCkge1xuICAgIG9iai5kdXJhdGlvbiA9IDUwMDBcbiAgfVxuXG4gIGlmIChuZXh0TGlnaHQpIHtcbiAgICBvYmoubmV4dC5ncm91cDEgPSBuZXh0TGlnaHRbMF1cbiAgICBvYmoubmV4dC5ncm91cDIgPSBuZXh0TGlnaHRbMV1cbiAgfVxuXG4gIGlmIChncm91cDEgPT09ICdZJyB8fCBncm91cDIgPT09ICdZJykge1xuICAgIG9iai5kdXJhdGlvbiA9IDEwMDAwXG4gIH1cblxuICBsaWdodE9iakFyci5wdXNoKG9iailcbn0pXG5cbmNvbnN0IExpZ2h0ID0gKHsgY29sb3IgfSkgPT4ge1xuICBjb25zdCBjb2xvck1hcCA9IHtcbiAgICBLOiAncmVkJyxcbiAgICBZOiAnZ3JlZW4nLFxuICAgIFM6ICd5ZWxsb3cnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+QWN0aXZlOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JNYXBbY29sb3JdfX0+e2NvbG9yfTwvc3Bhbj48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgW2dyb3VwMSwgc2V0R3JvdXAxXSA9IHVzZVN0YXRlKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAxKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDIpXG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZW0gb2YgbGlnaHRPYmpBcnIpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGl0ZW0pXG4gICAgICAgICAgc2V0R3JvdXAxKGl0ZW0ubmV4dC5ncm91cDEpXG4gICAgICAgICAgc2V0R3JvdXAyKGl0ZW0ubmV4dC5ncm91cDIpXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgfSwgaXRlbS5kdXJhdGlvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGdldERhdGEoKVxuICAgIH0sIDUwMDApXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SVNCQUs8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSVNCQUtcIi8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBjb2xvcj17Z3JvdXAxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMiA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiR3JlZW5MaWdodER1cmF0aW9uRm9ybSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsaWdodEFyciIsImxpZ2h0T2JqQXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImFyciIsImdyb3VwMSIsImdyb3VwMiIsIm5leHRMaWdodCIsIm9iaiIsImR1cmF0aW9uIiwibGlnaHRzIiwiY3VycmVudCIsIm5leHQiLCJwdXNoIiwiTGlnaHQiLCJjb2xvciIsImNvbG9yTWFwIiwiSyIsIlkiLCJTIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwiSG9tZSIsInNldEdyb3VwMSIsInNldEdyb3VwMiIsImdldERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});