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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst lightArr = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightObjArr = [];\nlightArr.forEach((item, index, arr)=>{\n    const nextLight = lightArr[index + 1];\n    let obj = {\n        duration: 5000,\n        group1: item[0],\n        group2: item[1],\n        group1Next: \"\",\n        group2Next: \"\",\n        lights: item\n    };\n    if (nextLight) {\n        obj.group1Next = nextLight[0];\n        obj.group2Next = nextLight[1];\n    }\n    if (item[0] === \"Y\" || item[1] === \"Y\") {\n        obj.duration = 30000;\n    }\n    lightObjArr.push(obj);\n});\nconsole.log(lightObjArr);\nconst setActiveLight = async (value, ms)=>{\n    return await new Promise((resolve, reject)=>{\n        setTimeout(()=>{\n            resolve(value);\n        }, ms);\n    });\n};\nconst Light = (param)=>{\n    let { schedule  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        schedule.map((item, index)=>{\n            item.then((value)=>{\n                setActive(value);\n            });\n        });\n    });\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[active]\n                },\n                children: active\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Light, \"fGT6ZSPXfKuhpNuIHwNSI1iAT6g=\");\n_c = Light;\nconst scheduleLight = (schedule)=>{\n    let ms = 0;\n    return schedule.map((item, index)=>{\n        const prev = schedule[index + 1];\n        const next = schedule[index + 1];\n        if (index > 0) {\n            if (prev === \"S\" && item === \"Y\") {\n                ms += 30000;\n            } else {\n                ms += 5000;\n            }\n        }\n        return setActiveLight(prev, ms);\n    });\n};\nfunction Home() {\n    _s1();\n    const [s, setS] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>{\n            setS(\"abc\");\n        }, 2000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: []\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: []\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s1(Home, \"DgBYtmJ6Gm5gTIfp7NmLRWWXSmw=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQ0U7OzBCQUNFLDhEQUFDbkQsa0RBQUlBOztrQ0FDSCw4REFBQ29EO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFXM0QscUVBQVc7O2tDQUMxQiw4REFBQ0MsMEVBQXNCQTs7Ozs7a0NBRXZCLDhEQUFDd0M7OzBDQUNDLDhEQUFDQTs7b0NBQUk7a0RBQ08sOERBQUNWO3dDQUFNQyxVQUFVLEVBQUU7Ozs7Ozs7Ozs7OzswQ0FHL0IsOERBQUNTOztvQ0FBSTtrREFDTyw4REFBQ1Y7d0NBQU1DLFVBQVUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekMsQ0FBQztJQS9CdUJnQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgZzEgPSBbJ0snLCAnWScsICdTJywgJ0snLCAnSycsICdLJ11cbmNvbnN0IGcyID0gWydLJywgJ0snLCAnSycsICdZJywgJ1MnLCAnSyddXG5cbmNvbnN0IGxpZ2h0QXJyID0gW1xuICBbJ0snLCAnSyddLFxuICBbJ1knLCAnSyddLFxuICBbJ1MnLCAnSyddLFxuICBbJ0snLCAnWSddLFxuICBbJ0snLCAnUyddLFxuICBbJ0snLCAnSyddXG5dXG5cbmNvbnN0IGxpZ2h0T2JqQXJyID0gW11cbmxpZ2h0QXJyLmZvckVhY2goKGl0ZW0sIGluZGV4LCBhcnIpID0+IHtcbiAgY29uc3QgbmV4dExpZ2h0ID0gbGlnaHRBcnJbaW5kZXggKyAxXVxuXG4gIGxldCBvYmogPSB7XG4gICAgZHVyYXRpb246IDUwMDAsXG4gICAgZ3JvdXAxOiBpdGVtWzBdLFxuICAgIGdyb3VwMjogaXRlbVsxXSxcbiAgICBncm91cDFOZXh0OiAnJyxcbiAgICBncm91cDJOZXh0OiAnJyxcbiAgICBsaWdodHM6IGl0ZW1cbiAgfVxuXG4gIGlmIChuZXh0TGlnaHQpIHtcbiAgICBvYmouZ3JvdXAxTmV4dCA9IG5leHRMaWdodFswXVxuICAgIG9iai5ncm91cDJOZXh0ID0gbmV4dExpZ2h0WzFdXG4gIH1cblxuICBpZiAoaXRlbVswXSA9PT0gJ1knIHx8IGl0ZW1bMV0gPT09ICdZJykge1xuICAgIG9iai5kdXJhdGlvbiA9IDMwMDAwXG4gIH1cblxuICBsaWdodE9iakFyci5wdXNoKG9iailcbn0pXG5cbmNvbnNvbGUubG9nKGxpZ2h0T2JqQXJyKVxuXG5jb25zdCBzZXRBY3RpdmVMaWdodCA9IGFzeW5jICh2YWx1ZSwgbXMpID0+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUodmFsdWUpXG4gICAgfSwgbXMpXG4gIH0pXG59XG5cbmNvbnN0IExpZ2h0ID0gKHsgc2NoZWR1bGUgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2NoZWR1bGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaXRlbS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgY29sb3JNYXAgPSB7XG4gICAgSzogJ3JlZCcsXG4gICAgWTogJ2dyZWVuJyxcbiAgICBTOiAneWVsbG93J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PkFjdGl2ZTogPHNwYW4gc3R5bGU9e3sgY29sb3I6IGNvbG9yTWFwW2FjdGl2ZV19fT57YWN0aXZlfTwvc3Bhbj48L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBzY2hlZHVsZUxpZ2h0ID0gKHNjaGVkdWxlKSA9PiB7XG4gIGxldCBtcyA9IDBcblxuICByZXR1cm4gc2NoZWR1bGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBzY2hlZHVsZVtpbmRleCArIDFdXG4gICAgY29uc3QgbmV4dCA9IHNjaGVkdWxlW2luZGV4ICsgMV1cblxuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGlmIChwcmV2ID09PSAnUycgJiYgaXRlbSA9PT0gJ1knKSB7XG4gICAgICAgIG1zICs9IDMwMDAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtcyArPSA1MDAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldEFjdGl2ZUxpZ2h0KHByZXYsIG1zKVxuICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBbcywgc2V0U10gPSB1c2VTdGF0ZSgnJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFMoJ2FiYycpXG4gICAgfSwgMjAwMClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklTQkFLPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIklTQkFLXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBzY2hlZHVsZT17W119IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBzY2hlZHVsZT17W119IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZzEiLCJnMiIsImxpZ2h0QXJyIiwibGlnaHRPYmpBcnIiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYXJyIiwibmV4dExpZ2h0Iiwib2JqIiwiZHVyYXRpb24iLCJncm91cDEiLCJncm91cDIiLCJncm91cDFOZXh0IiwiZ3JvdXAyTmV4dCIsImxpZ2h0cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2V0QWN0aXZlTGlnaHQiLCJ2YWx1ZSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiTGlnaHQiLCJzY2hlZHVsZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm1hcCIsInRoZW4iLCJjb2xvck1hcCIsIksiLCJZIiwiUyIsImRpdiIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwic2NoZWR1bGVMaWdodCIsInByZXYiLCJuZXh0IiwiSG9tZSIsInMiLCJzZXRTIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});