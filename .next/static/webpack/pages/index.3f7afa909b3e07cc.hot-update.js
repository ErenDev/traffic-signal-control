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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst setActiveLight = async (value, ms)=>{\n    return await new Promise((resolve, reject)=>{\n        setTimeout(()=>{\n            resolve(value);\n        }, ms);\n    });\n};\nconst Light = (param)=>{\n    let { schedule  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        schedule.map((item, index)=>{\n            item.then((value)=>{\n                setActive(value);\n            });\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            active\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Light, \"fGT6ZSPXfKuhpNuIHwNSI1iAT6g=\");\n_c = Light;\nconst scheduleLight = (item)=>{\n    let ms = 0;\n    return item.map((item, index)=>{\n        const next = item[index + 1];\n        if (item === \"Y\" && next === \"S\") {\n            ms += 30000;\n        } else if (item === \"K\" && next === \"Y\") {\n            ms += 5000;\n        } else if (item === \"S\" && next === \"K\") {\n            ms += 5000;\n        }\n        console.log(item, item[index]);\n        return setActiveLight(next, ms);\n    });\n};\nfunction Home() {\n    const group1 = scheduleLight(g1);\n    const group2 = scheduleLight(g2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: group1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        schedule: group2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2lCO0FBQzJCO0FBQ3RCO0FBRWxELE1BQU1NLEtBQUs7SUFBQztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7Q0FBSTtBQUN6QyxNQUFNQyxLQUFLO0lBQUM7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0NBQUk7QUFFekMsTUFBTUMsaUJBQWlCLE9BQU9DLE9BQU9DLEtBQU87SUFDMUMsT0FBTyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUM1Q0MsV0FBVyxJQUFNO1lBQ2ZGLFFBQVFIO1FBQ1YsR0FBR0M7SUFDTDtBQUNGO0FBRUEsTUFBTUssUUFBUSxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUE7SUFFcENELGdEQUFTQSxDQUFDLElBQU07UUFDZFksU0FBU0csR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7WUFDNUJELEtBQUtFLElBQUksQ0FBQyxDQUFDYixRQUFVO2dCQUNuQlMsVUFBVVQ7WUFDWjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2M7O1lBQUk7WUFBU047Ozs7Ozs7QUFFbEI7R0FkTUY7S0FBQUE7QUFnQk4sTUFBTVMsZ0JBQWdCLENBQUNKLE9BQVM7SUFDOUIsSUFBSVYsS0FBSztJQUVULE9BQU9VLEtBQUtELEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO1FBQy9CLE1BQU1JLE9BQU9MLElBQUksQ0FBQ0MsUUFBUSxFQUFFO1FBRTVCLElBQUlELFNBQVMsT0FBT0ssU0FBUyxLQUFLO1lBQ2hDZixNQUFNO1FBQ1IsT0FBTyxJQUFJVSxTQUFTLE9BQU9LLFNBQVMsS0FBSztZQUN2Q2YsTUFBTTtRQUNSLE9BQVEsSUFBSVUsU0FBUyxPQUFPSyxTQUFTLEtBQUs7WUFDeENmLE1BQU07UUFDUixDQUFDO1FBRURnQixRQUFRQyxHQUFHLENBQUNQLE1BQU1BLElBQUksQ0FBQ0MsTUFBTTtRQUU3QixPQUFPYixlQUFlaUIsTUFBTWY7SUFDOUI7QUFDRjtBQUdlLFNBQVNrQixPQUFRO0lBQzlCLE1BQU1DLFNBQVNMLGNBQWNsQjtJQUM3QixNQUFNd0IsU0FBU04sY0FBY2pCO0lBRTdCLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQUlBOztrQ0FDSCw4REFBQytCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFXdEMscUVBQVc7O2tDQUMxQiw4REFBQ0MsMEVBQXNCQTs7Ozs7a0NBRXZCLDhEQUFDcUI7OzBDQUNDLDhEQUFDQTs7b0NBQUk7a0RBQ08sOERBQUNSO3dDQUFNQyxVQUFVYTs7Ozs7Ozs7Ozs7OzBDQUc3Qiw4REFBQ047O29DQUFJO2tEQUNPLDhEQUFDUjt3Q0FBTUMsVUFBVWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZDLENBQUM7TUEzQnVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgZzEgPSBbJ0snLCAnWScsICdTJywgJ0snLCAnSycsICdLJ11cbmNvbnN0IGcyID0gWydLJywgJ0snLCAnSycsICdZJywgJ1MnLCAnSyddXG5cbmNvbnN0IHNldEFjdGl2ZUxpZ2h0ID0gYXN5bmMgKHZhbHVlLCBtcykgPT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSlcbiAgICB9LCBtcylcbiAgfSlcbn1cblxuY29uc3QgTGlnaHQgPSAoeyBzY2hlZHVsZSB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY2hlZHVsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpdGVtLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+QWN0aXZlOiB7YWN0aXZlfTwvZGl2PlxuICApXG59XG5cbmNvbnN0IHNjaGVkdWxlTGlnaHQgPSAoaXRlbSkgPT4ge1xuICBsZXQgbXMgPSAwXG5cbiAgcmV0dXJuIGl0ZW0ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBpdGVtW2luZGV4ICsgMV1cblxuICAgIGlmIChpdGVtID09PSAnWScgJiYgbmV4dCA9PT0gJ1MnKSB7XG4gICAgICBtcyArPSAzMDAwMFxuICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ0snICYmIG5leHQgPT09ICdZJykge1xuICAgICAgbXMgKz0gNTAwMFxuICAgIH0gIGVsc2UgaWYgKGl0ZW0gPT09ICdTJyAmJiBuZXh0ID09PSAnSycpIHtcbiAgICAgIG1zICs9IDUwMDBcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpdGVtLCBpdGVtW2luZGV4XSlcblxuICAgIHJldHVybiBzZXRBY3RpdmVMaWdodChuZXh0LCBtcylcbiAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgZ3JvdXAxID0gc2NoZWR1bGVMaWdodChnMSlcbiAgY29uc3QgZ3JvdXAyID0gc2NoZWR1bGVMaWdodChnMilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklTQkFLPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIklTQkFLXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAxID0+IDxMaWdodCBzY2hlZHVsZT17Z3JvdXAxfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMiA9PiA8TGlnaHQgc2NoZWR1bGU9e2dyb3VwMn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiR3JlZW5MaWdodER1cmF0aW9uRm9ybSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnMSIsImcyIiwic2V0QWN0aXZlTGlnaHQiLCJ2YWx1ZSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiTGlnaHQiLCJzY2hlZHVsZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRoZW4iLCJkaXYiLCJzY2hlZHVsZUxpZ2h0IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiZ3JvdXAxIiwiZ3JvdXAyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});