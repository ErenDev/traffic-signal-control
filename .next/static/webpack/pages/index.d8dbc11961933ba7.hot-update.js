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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const nextLight = lightArr[index + 1];\n    let obj = {\n        duration: 5000,\n        group1: item[0],\n        group2: item[1],\n        group1Next: \"\",\n        group2Next: \"\",\n        lights: item\n    };\n    if (nextLight) {\n        obj.group1Next = nextLight[0];\n        obj.group2Next = nextLight[1];\n    }\n    if (item[0] === \"Y\" || item[1] === \"Y\") {\n        obj.duration = 30000;\n    }\n    lightObjArr.push(obj);\n});\nconsole.log(lightObjArr);\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const [g1, setG1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [g2, setG2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        lightObjArr.forEach((item, index)=>{\n            setTimeout(()=>{\n                console.log(\"here\");\n                setG1(item.group1);\n                setG2(item.group2);\n            }, item.duration);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: g1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        color: g2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"bCF0jt2wcAI6ThWZKivk8Qz2Tuw=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgZzEgPSBbJ0snLCAnWScsICdTJywgJ0snLCAnSycsICdLJ11cbmNvbnN0IGcyID0gWydLJywgJ0snLCAnSycsICdZJywgJ1MnLCAnSyddXG5cbmNvbnN0IGxpZ2h0QXJyID0gW1xuICBbJ0snLCAnSyddLFxuICBbJ1knLCAnSyddLFxuICBbJ1MnLCAnSyddLFxuICBbJ0snLCAnWSddLFxuICBbJ0snLCAnUyddLFxuICBbJ0snLCAnSyddXG5dXG5cbmNvbnN0IGxpZ2h0T2JqQXJyID0gW11cbmxpZ2h0QXJyLmZvckVhY2goKGl0ZW0sIGluZGV4LCBhcnIpID0+IHtcbiAgY29uc3QgbmV4dExpZ2h0ID0gbGlnaHRBcnJbaW5kZXggKyAxXVxuXG4gIGxldCBvYmogPSB7XG4gICAgZHVyYXRpb246IDUwMDAsXG4gICAgZ3JvdXAxOiBpdGVtWzBdLFxuICAgIGdyb3VwMjogaXRlbVsxXSxcbiAgICBncm91cDFOZXh0OiAnJyxcbiAgICBncm91cDJOZXh0OiAnJyxcbiAgICBsaWdodHM6IGl0ZW1cbiAgfVxuXG4gIGlmIChuZXh0TGlnaHQpIHtcbiAgICBvYmouZ3JvdXAxTmV4dCA9IG5leHRMaWdodFswXVxuICAgIG9iai5ncm91cDJOZXh0ID0gbmV4dExpZ2h0WzFdXG4gIH1cblxuICBpZiAoaXRlbVswXSA9PT0gJ1knIHx8IGl0ZW1bMV0gPT09ICdZJykge1xuICAgIG9iai5kdXJhdGlvbiA9IDMwMDAwXG4gIH1cblxuICBsaWdodE9iakFyci5wdXNoKG9iailcbn0pXG5cbmNvbnNvbGUubG9nKGxpZ2h0T2JqQXJyKVxuXG5jb25zdCBMaWdodCA9ICh7IGNvbG9yIH0pID0+IHtcbiAgY29uc3QgY29sb3JNYXAgPSB7XG4gICAgSzogJ3JlZCcsXG4gICAgWTogJ2dyZWVuJyxcbiAgICBTOiAneWVsbG93J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PkFjdGl2ZTogPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9yTWFwW2NvbG9yXX19Pntjb2xvcn08L3NwYW4+PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IFtnMSwgc2V0RzFdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtnMiwgc2V0RzJdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlnaHRPYmpBcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgICAgIHNldEcxKGl0ZW0uZ3JvdXAxKVxuICAgICAgICBzZXRHMihpdGVtLmdyb3VwMilcbiAgICAgIH0sIGl0ZW0uZHVyYXRpb24pXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklTQkFLPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIklTQkFLXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgY29sb3I9e2cxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMiA9PiA8TGlnaHQgY29sb3I9e2cyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImcxIiwiZzIiLCJsaWdodEFyciIsImxpZ2h0T2JqQXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImFyciIsIm5leHRMaWdodCIsIm9iaiIsImR1cmF0aW9uIiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAxTmV4dCIsImdyb3VwMk5leHQiLCJsaWdodHMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkxpZ2h0IiwiY29sb3IiLCJjb2xvck1hcCIsIksiLCJZIiwiUyIsImRpdiIsInNwYW4iLCJzdHlsZSIsIkhvbWUiLCJzZXRHMSIsInNldEcyIiwic2V0VGltZW91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});