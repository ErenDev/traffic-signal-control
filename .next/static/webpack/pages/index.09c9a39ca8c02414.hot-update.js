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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GreenLightDurationForm */ \"./components/GreenLightDurationForm.tsx\");\n/* harmony import */ var _context_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/form */ \"./context/form.tsx\");\n/* harmony import */ var _utils_lightData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/lightData */ \"./utils/lightData.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Light = (param)=>{\n    let { color  } = param;\n    const colorMap = {\n        K: \"red\",\n        Y: \"green\",\n        S: \"yellow\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Active: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: colorMap[color]\n                },\n                children: color\n            }, void 0, false, {\n                fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Light;\nfunction Home() {\n    _s();\n    const { greenLightDuration  } = (0,_context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();\n    const lightObjArr = (0,_utils_lightData__WEBPACK_IMPORTED_MODULE_4__.lightData)(greenLightDuration);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [group1, setGroup1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lightObjArr[0].current.group1);\n    const [group2, setGroup2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lightObjArr[0].current.group2);\n    const getData = async ()=>{\n        for await (const item of lightObjArr){\n            setCurrentStep(item.step);\n            await new Promise((resolve)=>{\n                setTimeout(()=>{\n                    resolve(item);\n                    setGroup1(item.next.group1);\n                    setGroup2(item.next.group2);\n                    console.log(item);\n                }, item.duration);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (greenLightDuration > 0) {\n            getData();\n        }\n    }, [\n        greenLightDuration\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GreenLightDurationForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"step: \",\n                        currentStep\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group1 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                    color: group1\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Group2 => \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Light, {\n                                    color: group2\n                                }, void 0, false, {\n                                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/erenayhan/Code/erenayhan/isbak-case/pages/index.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"XssFMHC4uTI9L6ZnWod63xQuvnE=\", false, function() {\n    return [\n        _context_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Light\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0w7QUFDMkI7QUFDekI7QUFDRjtBQUU3QyxNQUFNTyxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDdEIsTUFBTUMsV0FBVztRQUFFQyxHQUFHO1FBQU9DLEdBQUc7UUFBU0MsR0FBRztJQUFTO0lBQ3JELHFCQUNFLDhEQUFDQzs7WUFBSTswQkFBUSw4REFBQ0M7Z0JBQUtDLE9BQU87b0JBQUVQLE9BQU9DLFFBQVEsQ0FBQ0QsTUFBTTtnQkFBQTswQkFBSUE7Ozs7Ozs7Ozs7OztBQUUxRDtLQUxNRDtBQU9TLFNBQVNTLE9BQVE7O0lBQzlCLE1BQU0sRUFBRUMsbUJBQWtCLEVBQUUsR0FBR1osNkRBQWNBO0lBQzdDLE1BQU1hLGNBQWNaLDJEQUFTQSxDQUFDVztJQUM5QixNQUFNLENBQUNFLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDZ0IsV0FBVyxDQUFDLEVBQUUsQ0FBQ0ssT0FBTyxDQUFDRixNQUFNO0lBQ2xFLE1BQU0sQ0FBQ0csUUFBUUMsVUFBVSxHQUFHdkIsK0NBQVFBLENBQUNnQixXQUFXLENBQUMsRUFBRSxDQUFDSyxPQUFPLENBQUNDLE1BQU07SUFFbEUsTUFBTUUsVUFBVSxVQUFZO1FBQzFCLFdBQVcsTUFBTUMsUUFBUVQsWUFBYTtZQUNwQ0UsZUFBZU8sS0FBS0MsSUFBSTtZQUN4QixNQUFNLElBQUlDLFFBQVFDLENBQUFBLFVBQVc7Z0JBQzNCQyxXQUFXLElBQU07b0JBQ2ZELFFBQVFIO29CQUNSTCxVQUFVSyxLQUFLSyxJQUFJLENBQUNYLE1BQU07b0JBQzFCSSxVQUFVRSxLQUFLSyxJQUFJLENBQUNSLE1BQU07b0JBQzFCUyxRQUFRQyxHQUFHLENBQUNQO2dCQUNkLEdBQUdBLEtBQUtRLFFBQVE7WUFDbEI7UUFDRjtJQUNGO0lBRUFsQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWdCLHFCQUFxQixHQUFHO1lBQzFCUztRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNUO0tBQW1CO0lBRXZCLHFCQUNFO2tCQUNFLDRFQUFDbUI7WUFBS0MsV0FBV2xDLHFFQUFXOzs4QkFDMUIsOERBQUNDLDBFQUFzQkE7Ozs7OzhCQUV2Qiw4REFBQ1M7O3dCQUFJO3dCQUFPTTs7Ozs7Ozs4QkFFWiw4REFBQ047O3NDQUNDLDhEQUFDQTs7Z0NBQUk7OENBQ08sOERBQUNOO29DQUFNQyxPQUFPYTs7Ozs7Ozs7Ozs7O3NDQUcxQiw4REFBQ1I7O2dDQUFJOzhDQUNPLDhEQUFDTjtvQ0FBTUMsT0FBT2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7R0E5Q3VCUjs7UUFDU1gseURBQWNBOzs7TUFEdkJXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIGZyb20gJ0AvY29tcG9uZW50cy9HcmVlbkxpZ2h0RHVyYXRpb25Gb3JtJ1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvZm9ybSdcbmltcG9ydCB7IGxpZ2h0RGF0YSB9IGZyb20gJ0AvdXRpbHMvbGlnaHREYXRhJ1xuXG5jb25zdCBMaWdodCA9ICh7IGNvbG9yIH0pID0+IHtcbiAgY29uc3QgY29sb3JNYXAgPSB7IEs6ICdyZWQnLCBZOiAnZ3JlZW4nLCBTOiAneWVsbG93JyB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5BY3RpdmU6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBjb2xvck1hcFtjb2xvcl19fT57Y29sb3J9PC9zcGFuPjwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCB7IGdyZWVuTGlnaHREdXJhdGlvbiB9ID0gdXNlRm9ybUNvbnRleHQoKVxuICBjb25zdCBsaWdodE9iakFyciA9IGxpZ2h0RGF0YShncmVlbkxpZ2h0RHVyYXRpb24pXG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2dyb3VwMSwgc2V0R3JvdXAxXSA9IHVzZVN0YXRlKGxpZ2h0T2JqQXJyWzBdLmN1cnJlbnQuZ3JvdXAxKVxuICBjb25zdCBbZ3JvdXAyLCBzZXRHcm91cDJdID0gdXNlU3RhdGUobGlnaHRPYmpBcnJbMF0uY3VycmVudC5ncm91cDIpXG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZW0gb2YgbGlnaHRPYmpBcnIpIHtcbiAgICAgIHNldEN1cnJlbnRTdGVwKGl0ZW0uc3RlcClcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGl0ZW0pXG4gICAgICAgICAgc2V0R3JvdXAxKGl0ZW0ubmV4dC5ncm91cDEpXG4gICAgICAgICAgc2V0R3JvdXAyKGl0ZW0ubmV4dC5ncm91cDIpXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgfSwgaXRlbS5kdXJhdGlvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZ3JlZW5MaWdodER1cmF0aW9uID4gMCkge1xuICAgICAgZ2V0RGF0YSgpXG4gICAgfVxuICB9LCBbZ3JlZW5MaWdodER1cmF0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEdyZWVuTGlnaHREdXJhdGlvbkZvcm0gLz5cblxuICAgICAgICA8ZGl2PnN0ZXA6IHtjdXJyZW50U3RlcH08L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBHcm91cDEgPT4gPExpZ2h0IGNvbG9yPXtncm91cDF9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgR3JvdXAyID0+IDxMaWdodCBjb2xvcj17Z3JvdXAyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJHcmVlbkxpZ2h0RHVyYXRpb25Gb3JtIiwidXNlRm9ybUNvbnRleHQiLCJsaWdodERhdGEiLCJMaWdodCIsImNvbG9yIiwiY29sb3JNYXAiLCJLIiwiWSIsIlMiLCJkaXYiLCJzcGFuIiwic3R5bGUiLCJIb21lIiwiZ3JlZW5MaWdodER1cmF0aW9uIiwibGlnaHRPYmpBcnIiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiZ3JvdXAxIiwic2V0R3JvdXAxIiwiY3VycmVudCIsImdyb3VwMiIsInNldEdyb3VwMiIsImdldERhdGEiLCJpdGVtIiwic3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwiZHVyYXRpb24iLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./utils/lightData.ts":
/*!****************************!*\
  !*** ./utils/lightData.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lightData\": function() { return /* binding */ lightData; }\n/* harmony export */ });\nconst lightScenario = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\nconst lightData = (greenLightDuration)=>{\n    const lightObjArr = [];\n    lightScenario.forEach((item, index, arr)=>{\n        const group1 = item[0];\n        const group2 = item[1];\n        const nextLight = arr[index + 1];\n        let obj = {\n            duration: group1 === \"Y\" || group2 === \"Y\" ? greenLightDuration : 5000,\n            step: index,\n            current: {\n                group1: item[0],\n                group2: item[1]\n            },\n            next: {\n                group1: \"\",\n                group2: \"\"\n            }\n        };\n        if (index > 0) {}\n        if (nextLight) {\n            obj.next.group1 = nextLight[0];\n            obj.next.group2 = nextLight[1];\n        }\n        lightObjArr.push(obj);\n    });\n    return lightObjArr;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9saWdodERhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGdCQUFnQjtJQUNwQjtRQUFDO1FBQUs7S0FBSTtJQUNWO1FBQUM7UUFBSztLQUFJO0lBQ1Y7UUFBQztRQUFLO0tBQUk7SUFDVjtRQUFDO1FBQUs7S0FBSTtJQUNWO1FBQUM7UUFBSztLQUFJO0lBQ1Y7UUFBQztRQUFLO0tBQUk7Q0FDWDtBQUdNLE1BQU1DLFlBQVksQ0FBQ0MscUJBQXVCO0lBQy9DLE1BQU1DLGNBQWMsRUFBRTtJQUV0QkgsY0FBY0ksT0FBTyxDQUFDLENBQUNDLE1BQU1DLE9BQU9DLE1BQVE7UUFDMUMsTUFBTUMsU0FBU0gsSUFBSSxDQUFDLEVBQUU7UUFDdEIsTUFBTUksU0FBU0osSUFBSSxDQUFDLEVBQUU7UUFDdEIsTUFBTUssWUFBWUgsR0FBRyxDQUFDRCxRQUFRLEVBQUU7UUFFaEMsSUFBSUssTUFBTTtZQUNSQyxVQUFVLFdBQVksT0FBT0gsV0FBVyxNQUFPUCxxQkFBb0IsSUFBSTtZQUN2RVcsTUFBTVA7WUFDTlEsU0FBUztnQkFDUE4sUUFBUUgsSUFBSSxDQUFDLEVBQUU7Z0JBQ2ZJLFFBQVFKLElBQUksQ0FBQyxFQUFFO1lBQ2pCO1lBQ0FVLE1BQU07Z0JBQ0pQLFFBQVE7Z0JBQ1JDLFFBQVE7WUFDVjtRQUNGO1FBRUEsSUFBSUgsUUFBUSxHQUFHLENBRWYsQ0FBQztRQUVELElBQUlJLFdBQVc7WUFDYkMsSUFBSUksSUFBSSxDQUFDUCxNQUFNLEdBQUdFLFNBQVMsQ0FBQyxFQUFFO1lBQzlCQyxJQUFJSSxJQUFJLENBQUNOLE1BQU0sR0FBR0MsU0FBUyxDQUFDLEVBQUU7UUFDaEMsQ0FBQztRQUVEUCxZQUFZYSxJQUFJLENBQUNMO0lBQ25CO0lBRUEsT0FBT1I7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2xpZ2h0RGF0YS50cz83NjNhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpZ2h0U2NlbmFyaW8gPSBbXG4gIFsnSycsICdLJ10sXG4gIFsnWScsICdLJ10sXG4gIFsnUycsICdLJ10sXG4gIFsnSycsICdZJ10sXG4gIFsnSycsICdTJ10sXG4gIFsnSycsICdLJ11cbl1cblxuXG5leHBvcnQgY29uc3QgbGlnaHREYXRhID0gKGdyZWVuTGlnaHREdXJhdGlvbikgPT4ge1xuICBjb25zdCBsaWdodE9iakFyciA9IFtdXG5cbiAgbGlnaHRTY2VuYXJpby5mb3JFYWNoKChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgY29uc3QgZ3JvdXAxID0gaXRlbVswXVxuICAgIGNvbnN0IGdyb3VwMiA9IGl0ZW1bMV1cbiAgICBjb25zdCBuZXh0TGlnaHQgPSBhcnJbaW5kZXggKyAxXVxuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGR1cmF0aW9uOiAoZ3JvdXAxID09PSAnWScgfHwgZ3JvdXAyID09PSAnWScpID8gZ3JlZW5MaWdodER1cmF0aW9uOiA1MDAwLFxuICAgICAgc3RlcDogaW5kZXgsXG4gICAgICBjdXJyZW50OiB7XG4gICAgICAgIGdyb3VwMTogaXRlbVswXSxcbiAgICAgICAgZ3JvdXAyOiBpdGVtWzFdLFxuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgZ3JvdXAxOiAnJyxcbiAgICAgICAgZ3JvdXAyOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA+IDApIHtcblxuICAgIH1cblxuICAgIGlmIChuZXh0TGlnaHQpIHtcbiAgICAgIG9iai5uZXh0Lmdyb3VwMSA9IG5leHRMaWdodFswXVxuICAgICAgb2JqLm5leHQuZ3JvdXAyID0gbmV4dExpZ2h0WzFdXG4gICAgfVxuXG4gICAgbGlnaHRPYmpBcnIucHVzaChvYmopXG4gIH0pXG5cbiAgcmV0dXJuIGxpZ2h0T2JqQXJyXG59Il0sIm5hbWVzIjpbImxpZ2h0U2NlbmFyaW8iLCJsaWdodERhdGEiLCJncmVlbkxpZ2h0RHVyYXRpb24iLCJsaWdodE9iakFyciIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJhcnIiLCJncm91cDEiLCJncm91cDIiLCJuZXh0TGlnaHQiLCJvYmoiLCJkdXJhdGlvbiIsInN0ZXAiLCJjdXJyZW50IiwibmV4dCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/lightData.ts\n"));

/***/ })

});