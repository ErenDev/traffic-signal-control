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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst g1 = [\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\",\n    \"K\",\n    \"K\"\n];\nconst g2 = [\n    \"K\",\n    \"K\",\n    \"K\",\n    \"Y\",\n    \"S\",\n    \"K\"\n];\nconst setActiveLight = async (value, ms)=>{\n    await new Promise((resolve, reject)=>{\n        setTimeout(()=>{\n            resolve(value);\n        }, ms);\n    });\n};\nlet ms = 0;\nconst a = g1.map((item, index)=>{\n    let next = g1[index + 1];\n    if (!next) {\n        next = g1[0];\n    }\n    if (next === \"Y\") {\n        ms += 0;\n    } else if (next === \"K\") {\n        ms += 5000;\n    } else if (next === \"S\") {\n        ms += 5000;\n    }\n    console.log(ms);\n    return setActiveLight(item, ms);\n});\na.map((item)=>{\n    item.then((value)=>{\n        console.log(\"res\", value);\n    });\n});\nconst Light = (param)=>{\n    let { active  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: active\n    }, void 0, false, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ISBAK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group1 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        active: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Group2 => \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                        active: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFDMkI7QUFDdEI7QUFFbEQsTUFBTUksS0FBSztJQUFDO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztDQUFJO0FBQ3pDLE1BQU1DLEtBQUs7SUFBQztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7Q0FBSTtBQUV6QyxNQUFNQyxpQkFBaUIsT0FBT0MsT0FBT0MsS0FBTztJQUMxQyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUNyQ0MsV0FBVyxJQUFNO1lBQ2ZGLFFBQVFIO1FBQ1YsR0FBR0M7SUFDTDtBQUNGO0FBRUEsSUFBSUEsS0FBSztBQUNULE1BQU1LLElBQUlULEdBQUdVLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO0lBQ2hDLElBQUlDLE9BQU9iLEVBQUUsQ0FBQ1ksUUFBUSxFQUFFO0lBRXhCLElBQUksQ0FBQ0MsTUFBTTtRQUNUQSxPQUFPYixFQUFFLENBQUMsRUFBRTtJQUNkLENBQUM7SUFFRCxJQUFJYSxTQUFTLEtBQUs7UUFDaEJULE1BQU07SUFDUixPQUFPLElBQUlTLFNBQVMsS0FBSztRQUN2QlQsTUFBTTtJQUNSLE9BQU8sSUFBSVMsU0FBUyxLQUFLO1FBQ3ZCVCxNQUFNO0lBQ1IsQ0FBQztJQUVEVSxRQUFRQyxHQUFHLENBQUNYO0lBRVosT0FBT0YsZUFBZVMsTUFBTVA7QUFDOUI7QUFFQUssRUFBRUMsR0FBRyxDQUFDQyxDQUFBQSxPQUFRO0lBQ1pBLEtBQUtLLElBQUksQ0FBQyxDQUFDYixRQUFVO1FBQ25CVyxRQUFRQyxHQUFHLENBQUMsT0FBT1o7SUFDckI7QUFDRjtBQUdBLE1BQU1jLFFBQVEsU0FBZ0I7UUFBZixFQUFFQyxPQUFNLEVBQUU7SUFDdkIscUJBQ0UsOERBQUNDO2tCQUFLRDs7Ozs7O0FBRVY7S0FKTUQ7QUFPUyxTQUFTRyxPQUFRO0lBQzlCLHFCQUNFOzswQkFDRSw4REFBQ3hCLGtEQUFJQTs7a0NBQ0gsOERBQUN5QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBV2hDLHFFQUFXOztrQ0FDMUIsOERBQUNDLDBFQUFzQkE7Ozs7O2tDQUV2Qiw4REFBQ3FCOzswQ0FDQyw4REFBQ0E7O29DQUFJO2tEQUNPLDhEQUFDRjt3Q0FBTUMsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ0M7O29DQUFJO2tEQUNPLDhEQUFDRjt3Q0FBTUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckMsQ0FBQztNQXhCdUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gZnJvbSAnQC9jb21wb25lbnRzL0dyZWVuTGlnaHREdXJhdGlvbkZvcm0nXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBnMSA9IFsnSycsICdZJywgJ1MnLCAnSycsICdLJywgJ0snXVxuY29uc3QgZzIgPSBbJ0snLCAnSycsICdLJywgJ1knLCAnUycsICdLJ11cblxuY29uc3Qgc2V0QWN0aXZlTGlnaHQgPSBhc3luYyAodmFsdWUsIG1zKSA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUodmFsdWUpXG4gICAgfSwgbXMpXG4gIH0pXG59XG5cbmxldCBtcyA9IDBcbmNvbnN0IGEgPSBnMS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gIGxldCBuZXh0ID0gZzFbaW5kZXggKyAxXVxuXG4gIGlmICghbmV4dCkge1xuICAgIG5leHQgPSBnMVswXVxuICB9XG5cbiAgaWYgKG5leHQgPT09ICdZJykge1xuICAgIG1zICs9IDBcbiAgfSBlbHNlIGlmIChuZXh0ID09PSAnSycpIHtcbiAgICBtcyArPSA1MDAwXG4gIH0gZWxzZSBpZiAobmV4dCA9PT0gJ1MnKSB7XG4gICAgbXMgKz0gNTAwMFxuICB9XG5cbiAgY29uc29sZS5sb2cobXMpXG5cbiAgcmV0dXJuIHNldEFjdGl2ZUxpZ2h0KGl0ZW0sIG1zKVxufSlcblxuYS5tYXAoaXRlbSA9PiB7XG4gIGl0ZW0udGhlbigodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmVzJywgdmFsdWUpXG4gIH0pXG59KVxuXG5cbmNvbnN0IExpZ2h0ID0gKHsgYWN0aXZlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PnthY3RpdmV9PC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JU0JBSzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJU0JBS1wiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8R3JlZW5MaWdodER1cmF0aW9uRm9ybSAvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEdyb3VwMSA9PiA8TGlnaHQgYWN0aXZlPXsnJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDIgPT4gPExpZ2h0IGFjdGl2ZT17Jyd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkdyZWVuTGlnaHREdXJhdGlvbkZvcm0iLCJSZWFjdCIsImcxIiwiZzIiLCJzZXRBY3RpdmVMaWdodCIsInZhbHVlIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJhIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwiTGlnaHQiLCJhY3RpdmUiLCJkaXYiLCJIb21lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});