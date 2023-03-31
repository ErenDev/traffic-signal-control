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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const group1 = item[0];\n    const group2 = item[1];\n    const nextLight = lightArr[index + 1];\n    let obj = {\n        duration: 0,\n        lights: item,\n        current: {\n            group1: item[0],\n            group2: item[1]\n        },\n        next: {\n            group1: \"\",\n            group2: \"\"\n        }\n    };\n    if (nextLight) {\n        obj.next.group1 = nextLight[0];\n        obj.next.group2 = nextLight[1];\n    }\n    if (index > 0) {\n        obj.duration = 5000;\n    }\n    if (group1 === \"Y\" || group2 === \"Y\") {\n        obj.duration = 30000;\n    }\n    lightObjArr.push(obj);\n});\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            console.log(\"here\");\n            setGroup1(\"Y\");\n            setGroup2(\"K\");\n        }, 10000);\n        return ()=>clearTimeout(timer);\n    }, [\n        group1,\n        group2\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"eFOWnGNwRWUqtwh+3vUJxq8Yj3E=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQyxDQUFDO0dBcEN1QmlCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0nXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCB9IGZyb20gJ3RpbWVycydcblxuY29uc3QgZzEgPSBbJ0snLCAnWScsICdTJywgJ0snLCAnSycsICdLJ11cbmNvbnN0IGcyID0gWydLJywgJ0snLCAnSycsICdZJywgJ1MnLCAnSyddXG5cbmNvbnN0IGxpZ2h0QXJyID0gW1xuICBbJ0snLCAnSyddLFxuICBbJ1knLCAnSyddLFxuICBbJ1MnLCAnSyddLFxuICBbJ0snLCAnWSddLFxuICBbJ0snLCAnUyddLFxuICBbJ0snLCAnSyddXG5dXG5cbmNvbnN0IGxpZ2h0T2JqQXJyID0gW11cbmxpZ2h0QXJyLmZvckVhY2goKGl0ZW0sIGluZGV4LCBhcnIpID0+IHtcbiAgY29uc3QgZ3JvdXAxID0gaXRlbVswXVxuICBjb25zdCBncm91cDIgPSBpdGVtWzFdXG4gIGNvbnN0IG5leHRMaWdodCA9IGxpZ2h0QXJyW2luZGV4ICsgMV1cblxuICBsZXQgb2JqID0ge1xuICAgIGR1cmF0aW9uOiAwLFxuICAgIGxpZ2h0czogaXRlbSxcbiAgICBjdXJyZW50OiB7XG4gICAgICBncm91cDE6IGl0ZW1bMF0sXG4gICAgICBncm91cDI6IGl0ZW1bMV0sXG4gICAgfSxcbiAgICBuZXh0OiB7XG4gICAgICBncm91cDE6ICcnLFxuICAgICAgZ3JvdXAyOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChuZXh0TGlnaHQpIHtcbiAgICBvYmoubmV4dC5ncm91cDEgPSBuZXh0TGlnaHRbMF1cbiAgICBvYmoubmV4dC5ncm91cDIgPSBuZXh0TGlnaHRbMV1cbiAgfVxuXG4gIGlmIChpbmRleCA+IDApIHtcbiAgICBvYmouZHVyYXRpb24gPSA1MDAwXG4gIH1cblxuICBpZiAoZ3JvdXAxID09PSAnWScgfHwgZ3JvdXAyID09PSAnWScpIHtcbiAgICBvYmouZHVyYXRpb24gPSAzMDAwMFxuICB9XG5cbiAgbGlnaHRPYmpBcnIucHVzaChvYmopXG59KVxuXG5jb25zdCBMaWdodCA9ICh7IGNvbG9yIH0pID0+IHtcbiAgY29uc3QgY29sb3JNYXAgPSB7XG4gICAgSzogJ3JlZCcsXG4gICAgWTogJ2dyZWVuJyxcbiAgICBTOiAneWVsbG93J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PkFjdGl2ZTogPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9yTWFwW2NvbG9yXX19Pntjb2xvcn08L3NwYW4+PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IFtncm91cDEsIHNldEdyb3VwMV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2dyb3VwMiwgc2V0R3JvdXAyXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgICAgIHNldEdyb3VwMSgnWScpXG4gICAgICBzZXRHcm91cDIoJ0snKVxuICAgIH0sIDEwMDAwKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgfSwgW2dyb3VwMSwgZ3JvdXAyXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklTQkFLPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIklTQkFLXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgY29sb3I9e2dyb3VwMX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGNvbG9yPXtncm91cDJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZzEiLCJnMiIsImxpZ2h0QXJyIiwibGlnaHRPYmpBcnIiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYXJyIiwiZ3JvdXAxIiwiZ3JvdXAyIiwibmV4dExpZ2h0Iiwib2JqIiwiZHVyYXRpb24iLCJsaWdodHMiLCJjdXJyZW50IiwibmV4dCIsInB1c2giLCJMaWdodCIsImNvbG9yIiwiY29sb3JNYXAiLCJLIiwiWSIsIlMiLCJkaXYiLCJzcGFuIiwic3R5bGUiLCJIb21lIiwic2V0R3JvdXAxIiwic2V0R3JvdXAyIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVGltZW91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});