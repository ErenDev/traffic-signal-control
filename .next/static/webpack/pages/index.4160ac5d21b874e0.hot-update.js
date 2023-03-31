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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const group1 = item[0];\n    const group2 = item[1];\n    const nextLight = lightArr[index + 1];\n    let obj = {\n        duration: 0,\n        lights: item,\n        current: {\n            group1: item[0],\n            group2: item[1]\n        },\n        next: {\n            group1: \"\",\n            group2: \"\"\n        }\n    };\n    if (nextLight) {\n        obj.next.group1 = nextLight[0];\n        obj.next.group2 = nextLight[1];\n        if (nextLight[0] === \"Y\" || nextLight[1] === \"Y\") {\n            console.log(\"here\");\n            obj.duration = 30000;\n        }\n    }\n    if (index > 0) {\n        obj.duration = 5000;\n    }\n    lightObjArr.push(obj);\n});\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const getData = async ()=>{\n        for await (const item of lightObjArr){\n            await new Promise((resolve)=>{\n                setTimeout(()=>{\n                    setGroup1(item.current.group1);\n                    setGroup2(item.current.group2);\n                    console.log(item);\n                    resolve(item);\n                }, item.duration);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"eFOWnGNwRWUqtwh+3vUJxq8Yj3E=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFJO2tEQUNPLDhEQUFDTjt3Q0FBTUMsT0FBT1o7Ozs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNpQjs7b0NBQUk7a0RBQ08sOERBQUNOO3dDQUFNQyxPQUFPWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMsQ0FBQztHQTNDdUJtQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgbGlnaHRBcnIgPSBbXG4gIFsnSycsICdLJ10sXG4gIFsnWScsICdLJ10sXG4gIFsnUycsICdLJ10sXG4gIFsnSycsICdZJ10sXG4gIFsnSycsICdTJ10sXG4gIFsnSycsICdLJ11cbl1cblxuY29uc3QgbGlnaHRPYmpBcnIgPSBbXVxubGlnaHRBcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICBjb25zdCBncm91cDEgPSBpdGVtWzBdXG4gIGNvbnN0IGdyb3VwMiA9IGl0ZW1bMV1cbiAgY29uc3QgbmV4dExpZ2h0ID0gbGlnaHRBcnJbaW5kZXggKyAxXVxuXG4gIGxldCBvYmogPSB7XG4gICAgZHVyYXRpb246IDAsXG4gICAgbGlnaHRzOiBpdGVtLFxuICAgIGN1cnJlbnQ6IHtcbiAgICAgIGdyb3VwMTogaXRlbVswXSxcbiAgICAgIGdyb3VwMjogaXRlbVsxXSxcbiAgICB9LFxuICAgIG5leHQ6IHtcbiAgICAgIGdyb3VwMTogJycsXG4gICAgICBncm91cDI6ICcnXG4gICAgfVxuICB9XG5cbiAgaWYgKG5leHRMaWdodCkge1xuICAgIG9iai5uZXh0Lmdyb3VwMSA9IG5leHRMaWdodFswXVxuICAgIG9iai5uZXh0Lmdyb3VwMiA9IG5leHRMaWdodFsxXVxuXG4gICAgaWYgKG5leHRMaWdodFswXSA9PT0gJ1knIHx8IG5leHRMaWdodFsxXSA9PT0gJ1knKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgICBvYmouZHVyYXRpb24gPSAzMDAwMFxuICAgIH1cbiAgfVxuXG4gIGlmIChpbmRleCA+IDApIHtcbiAgICBvYmouZHVyYXRpb24gPSA1MDAwXG4gIH1cblxuICBsaWdodE9iakFyci5wdXNoKG9iailcbn0pXG5cbmNvbnN0IExpZ2h0ID0gKHsgY29sb3IgfSkgPT4ge1xuICBjb25zdCBjb2xvck1hcCA9IHtcbiAgICBLOiAncmVkJyxcbiAgICBZOiAnZ3JlZW4nLFxuICAgIFM6ICd5ZWxsb3cnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+QWN0aXZlOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JNYXBbY29sb3JdfX0+e2NvbG9yfTwvc3Bhbj48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgW2dyb3VwMSwgc2V0R3JvdXAxXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZW0gb2YgbGlnaHRPYmpBcnIpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRHcm91cDEoaXRlbS5jdXJyZW50Lmdyb3VwMSlcbiAgICAgICAgICBzZXRHcm91cDIoaXRlbS5jdXJyZW50Lmdyb3VwMilcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgIHJlc29sdmUoaXRlbSlcbiAgICAgICAgfSwgaXRlbS5kdXJhdGlvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JU0JBSzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJU0JBS1wiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8R3JlZW5MaWdodER1cmF0aW9uRm9ybSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IGNvbG9yPXtncm91cDF9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBjb2xvcj17Z3JvdXAyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxpZ2h0QXJyIiwibGlnaHRPYmpBcnIiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYXJyIiwiZ3JvdXAxIiwiZ3JvdXAyIiwibmV4dExpZ2h0Iiwib2JqIiwiZHVyYXRpb24iLCJsaWdodHMiLCJjdXJyZW50IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiTGlnaHQiLCJjb2xvciIsImNvbG9yTWFwIiwiSyIsIlkiLCJTIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwiSG9tZSIsInNldEdyb3VwMSIsInNldEdyb3VwMiIsImdldERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});