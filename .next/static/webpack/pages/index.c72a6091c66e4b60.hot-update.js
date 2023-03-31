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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const group1 = item[0];\n    const group2 = item[1];\n    const nextLight = lightArr[index + 1];\n    console.log(nextLight);\n    let obj = {\n        duration: 0,\n        lights: item,\n        current: {\n            group1: item[0],\n            group2: item[1]\n        },\n        next: {\n            group1: \"\",\n            group2: \"\"\n        }\n    };\n    if (nextLight) {\n        obj.next.group1 = nextLight[0];\n        obj.next.group2 = nextLight[1];\n    }\n    if (index > 0) {\n        obj.duration = 5000;\n    }\n    if (group1 === \"Y\" || group2 === \"Y\") {\n        obj.duration = 30000;\n    }\n    lightObjArr.push(obj);\n});\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        lightObjArr.forEach((item, index)=>{\n            setGroup1(item.current.group1);\n            setGroup2(item.current.group2);\n        });\n    }, [\n        g1,\n        g2\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"eFOWnGNwRWUqtwh+3vUJxq8Yj3E=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFJO2tEQUNPLDhEQUFDTjt3Q0FBTUMsT0FBT1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7R0FqQ3VCbUI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgR3JlZW5MaWdodER1cmF0aW9uRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvR3JlZW5MaWdodER1cmF0aW9uRm9ybSdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGcxID0gWydLJywgJ1knLCAnUycsICdLJywgJ0snLCAnSyddXG5jb25zdCBnMiA9IFsnSycsICdLJywgJ0snLCAnWScsICdTJywgJ0snXVxuXG5jb25zdCBsaWdodEFyciA9IFtcbiAgWydLJywgJ0snXSxcbiAgWydZJywgJ0snXSxcbiAgWydTJywgJ0snXSxcbiAgWydLJywgJ1knXSxcbiAgWydLJywgJ1MnXSxcbiAgWydLJywgJ0snXVxuXVxuXG5jb25zdCBsaWdodE9iakFyciA9IFtdXG5saWdodEFyci5mb3JFYWNoKChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XG4gIGNvbnN0IGdyb3VwMSA9IGl0ZW1bMF1cbiAgY29uc3QgZ3JvdXAyID0gaXRlbVsxXVxuICBjb25zdCBuZXh0TGlnaHQgPSBsaWdodEFycltpbmRleCArIDFdXG5cbiAgY29uc29sZS5sb2cobmV4dExpZ2h0KVxuXG4gIGxldCBvYmogPSB7XG4gICAgZHVyYXRpb246IDAsXG4gICAgbGlnaHRzOiBpdGVtLFxuICAgIGN1cnJlbnQ6IHtcbiAgICAgIGdyb3VwMTogaXRlbVswXSxcbiAgICAgIGdyb3VwMjogaXRlbVsxXSxcbiAgICB9LFxuICAgIG5leHQ6IHtcbiAgICAgIGdyb3VwMTogJycsXG4gICAgICBncm91cDI6ICcnXG4gICAgfVxuICB9XG5cbiAgaWYgKG5leHRMaWdodCkge1xuICAgIG9iai5uZXh0Lmdyb3VwMSA9IG5leHRMaWdodFswXVxuICAgIG9iai5uZXh0Lmdyb3VwMiA9IG5leHRMaWdodFsxXVxuICB9XG5cbiAgaWYgKGluZGV4ID4gMCkge1xuICAgIG9iai5kdXJhdGlvbiA9IDUwMDBcbiAgfVxuXG4gIGlmIChncm91cDEgPT09ICdZJyB8fCBncm91cDIgPT09ICdZJykge1xuICAgIG9iai5kdXJhdGlvbiA9IDMwMDAwXG4gIH1cblxuICBsaWdodE9iakFyci5wdXNoKG9iailcbn0pXG5cbmNvbnN0IExpZ2h0ID0gKHsgY29sb3IgfSkgPT4ge1xuICBjb25zdCBjb2xvck1hcCA9IHtcbiAgICBLOiAncmVkJyxcbiAgICBZOiAnZ3JlZW4nLFxuICAgIFM6ICd5ZWxsb3cnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+QWN0aXZlOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogY29sb3JNYXBbY29sb3JdfX0+e2NvbG9yfTwvc3Bhbj48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgW2dyb3VwMSwgc2V0R3JvdXAxXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaWdodE9iakFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgc2V0R3JvdXAxKGl0ZW0uY3VycmVudC5ncm91cDEpXG4gICAgICBzZXRHcm91cDIoaXRlbS5jdXJyZW50Lmdyb3VwMilcbiAgICB9KVxuICB9LCBbZzEsIGcyXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklTQkFLPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIklTQkFLXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGNvbG9yPXtncm91cDJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZzEiLCJnMiIsImxpZ2h0QXJyIiwibGlnaHRPYmpBcnIiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYXJyIiwiZ3JvdXAxIiwiZ3JvdXAyIiwibmV4dExpZ2h0IiwiY29uc29sZSIsImxvZyIsIm9iaiIsImR1cmF0aW9uIiwibGlnaHRzIiwiY3VycmVudCIsIm5leHQiLCJwdXNoIiwiTGlnaHQiLCJjb2xvciIsImNvbG9yTWFwIiwiSyIsIlkiLCJTIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwiSG9tZSIsInNldEdyb3VwMSIsInNldEdyb3VwMiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});