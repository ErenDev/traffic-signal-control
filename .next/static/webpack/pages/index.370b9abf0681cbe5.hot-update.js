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

/***/ "./utils/lightData.ts":
/*!****************************!*\
  !*** ./utils/lightData.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lightData\": function() { return /* binding */ lightData; }\n/* harmony export */ });\nconst lightScenario = [\n    [\n        \"K\",\n        \"K\"\n    ],\n    [\n        \"Y\",\n        \"K\"\n    ],\n    [\n        \"S\",\n        \"K\"\n    ],\n    [\n        \"K\",\n        \"Y\"\n    ],\n    [\n        \"K\",\n        \"S\"\n    ],\n    [\n        \"K\",\n        \"K\"\n    ]\n];\n// export const lightData = (greenLightDuration) => {\n//   return [{\n//     'duration': 5000,\n//     'step': 1,\n//     'current': { 'group1': 'K', 'group2': 'K' },\n//     'next': { 'group1': 'Y', 'group2': 'K' }\n//   }, {\n//     'duration': greenLightDuration,\n//     'step': 2,\n//     'current': { 'group1': 'Y', 'group2': 'K' },\n//     'next': { 'group1': 'S', 'group2': 'K' }\n//   }, {\n//     'duration': 5000,\n//     'step': 3,\n//     'current': { 'group1': 'S', 'group2': 'K' },\n//     'next': { 'group1': 'K', 'group2': 'Y' }\n//   }, {\n//     'duration': greenLightDuration,\n//     'step': 4,\n//     'current': { 'group1': 'K', 'group2': 'Y' },\n//     'next': { 'group1': 'K', 'group2': 'S' }\n//   }, {\n//     'duration': 5000,\n//     'step': 5,\n//     'current': { 'group1': 'K', 'group2': 'S' },\n//     'next': { 'group1': 'K', 'group2': 'K' }\n//   }, {\n//     'duration': 5000,\n//     'step': 6,\n//     'current': { 'group1': 'K', 'group2': 'K' },\n//     'next': { 'group1': '', 'group2': '' }\n//   }]\n// }\nconst lightData = (greenLightDuration)=>{\n    const lightObjArr = [];\n    const createData = ()=>{\n        lightScenario.forEach((item, index, arr)=>{\n            const group1 = item[0];\n            const group2 = item[1];\n            const nextLight = arr[index + 1];\n            let obj = {\n                duration: group1 === \"Y\" || group2 === \"Y\" ? greenLightDuration : 5000,\n                step: index + 1,\n                current: {\n                    group1: item[0],\n                    group2: item[1]\n                },\n                next: {\n                    group1: \"\",\n                    group2: \"\"\n                }\n            };\n            if (nextLight) {\n                obj.next.group1 = nextLight[0];\n                obj.next.group2 = nextLight[1];\n            }\n            lightObjArr.push(obj);\n        });\n    };\n    createData();\n    return lightObjArr;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9saWdodERhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGdCQUFnQjtJQUNwQjtRQUFDO1FBQUs7S0FBSTtJQUNWO1FBQUM7UUFBSztLQUFJO0lBQ1Y7UUFBQztRQUFLO0tBQUk7SUFDVjtRQUFDO1FBQUs7S0FBSTtJQUNWO1FBQUM7UUFBSztLQUFJO0lBQ1Y7UUFBQztRQUFLO0tBQUk7Q0FDWDtBQUVELHFEQUFxRDtBQUNyRCxjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixtREFBbUQ7QUFDbkQsK0NBQStDO0FBQy9DLFNBQVM7QUFDVCxzQ0FBc0M7QUFDdEMsaUJBQWlCO0FBQ2pCLG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0MsU0FBUztBQUNULHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsbURBQW1EO0FBQ25ELCtDQUErQztBQUMvQyxTQUFTO0FBQ1Qsc0NBQXNDO0FBQ3RDLGlCQUFpQjtBQUNqQixtREFBbUQ7QUFDbkQsK0NBQStDO0FBQy9DLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCLG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0MsU0FBUztBQUNULHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsbURBQW1EO0FBQ25ELDZDQUE2QztBQUM3QyxPQUFPO0FBQ1AsSUFBSTtBQUVHLE1BQU1DLFlBQVksQ0FBQ0MscUJBQXVCO0lBQy9DLE1BQU1DLGNBQWMsRUFBRTtJQUV0QixNQUFNQyxhQUFhLElBQU07UUFDdkJKLGNBQWNLLE9BQU8sQ0FBQyxDQUFDQyxNQUFNQyxPQUFPQyxNQUFRO1lBQzFDLE1BQU1DLFNBQVNILElBQUksQ0FBQyxFQUFFO1lBQ3RCLE1BQU1JLFNBQVNKLElBQUksQ0FBQyxFQUFFO1lBQ3RCLE1BQU1LLFlBQVlILEdBQUcsQ0FBQ0QsUUFBUSxFQUFFO1lBRWhDLElBQUlLLE1BQU07Z0JBQ1JDLFVBQVUsV0FBWSxPQUFPSCxXQUFXLE1BQU9SLHFCQUFxQixJQUFJO2dCQUN4RVksTUFBTVAsUUFBUTtnQkFDZFEsU0FBUztvQkFDUE4sUUFBUUgsSUFBSSxDQUFDLEVBQUU7b0JBQ2ZJLFFBQVFKLElBQUksQ0FBQyxFQUFFO2dCQUNqQjtnQkFDQVUsTUFBTTtvQkFDSlAsUUFBUTtvQkFDUkMsUUFBUTtnQkFDVjtZQUNGO1lBRUEsSUFBSUMsV0FBVztnQkFDYkMsSUFBSUksSUFBSSxDQUFDUCxNQUFNLEdBQUdFLFNBQVMsQ0FBQyxFQUFFO2dCQUM5QkMsSUFBSUksSUFBSSxDQUFDTixNQUFNLEdBQUdDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLENBQUM7WUFFRFIsWUFBWWMsSUFBSSxDQUFDTDtRQUNuQjtJQUNGO0lBRUFSO0lBRUEsT0FBT0Q7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2xpZ2h0RGF0YS50cz83NjNhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpZ2h0U2NlbmFyaW8gPSBbXG4gIFsnSycsICdLJ10sXG4gIFsnWScsICdLJ10sXG4gIFsnUycsICdLJ10sXG4gIFsnSycsICdZJ10sXG4gIFsnSycsICdTJ10sXG4gIFsnSycsICdLJ11cbl1cblxuLy8gZXhwb3J0IGNvbnN0IGxpZ2h0RGF0YSA9IChncmVlbkxpZ2h0RHVyYXRpb24pID0+IHtcbi8vICAgcmV0dXJuIFt7XG4vLyAgICAgJ2R1cmF0aW9uJzogNTAwMCxcbi8vICAgICAnc3RlcCc6IDEsXG4vLyAgICAgJ2N1cnJlbnQnOiB7ICdncm91cDEnOiAnSycsICdncm91cDInOiAnSycgfSxcbi8vICAgICAnbmV4dCc6IHsgJ2dyb3VwMSc6ICdZJywgJ2dyb3VwMic6ICdLJyB9XG4vLyAgIH0sIHtcbi8vICAgICAnZHVyYXRpb24nOiBncmVlbkxpZ2h0RHVyYXRpb24sXG4vLyAgICAgJ3N0ZXAnOiAyLFxuLy8gICAgICdjdXJyZW50JzogeyAnZ3JvdXAxJzogJ1knLCAnZ3JvdXAyJzogJ0snIH0sXG4vLyAgICAgJ25leHQnOiB7ICdncm91cDEnOiAnUycsICdncm91cDInOiAnSycgfVxuLy8gICB9LCB7XG4vLyAgICAgJ2R1cmF0aW9uJzogNTAwMCxcbi8vICAgICAnc3RlcCc6IDMsXG4vLyAgICAgJ2N1cnJlbnQnOiB7ICdncm91cDEnOiAnUycsICdncm91cDInOiAnSycgfSxcbi8vICAgICAnbmV4dCc6IHsgJ2dyb3VwMSc6ICdLJywgJ2dyb3VwMic6ICdZJyB9XG4vLyAgIH0sIHtcbi8vICAgICAnZHVyYXRpb24nOiBncmVlbkxpZ2h0RHVyYXRpb24sXG4vLyAgICAgJ3N0ZXAnOiA0LFxuLy8gICAgICdjdXJyZW50JzogeyAnZ3JvdXAxJzogJ0snLCAnZ3JvdXAyJzogJ1knIH0sXG4vLyAgICAgJ25leHQnOiB7ICdncm91cDEnOiAnSycsICdncm91cDInOiAnUycgfVxuLy8gICB9LCB7XG4vLyAgICAgJ2R1cmF0aW9uJzogNTAwMCxcbi8vICAgICAnc3RlcCc6IDUsXG4vLyAgICAgJ2N1cnJlbnQnOiB7ICdncm91cDEnOiAnSycsICdncm91cDInOiAnUycgfSxcbi8vICAgICAnbmV4dCc6IHsgJ2dyb3VwMSc6ICdLJywgJ2dyb3VwMic6ICdLJyB9XG4vLyAgIH0sIHtcbi8vICAgICAnZHVyYXRpb24nOiA1MDAwLFxuLy8gICAgICdzdGVwJzogNixcbi8vICAgICAnY3VycmVudCc6IHsgJ2dyb3VwMSc6ICdLJywgJ2dyb3VwMic6ICdLJyB9LFxuLy8gICAgICduZXh0JzogeyAnZ3JvdXAxJzogJycsICdncm91cDInOiAnJyB9XG4vLyAgIH1dXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBsaWdodERhdGEgPSAoZ3JlZW5MaWdodER1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IGxpZ2h0T2JqQXJyID0gW11cblxuICBjb25zdCBjcmVhdGVEYXRhID0gKCkgPT4ge1xuICAgIGxpZ2h0U2NlbmFyaW8uZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgY29uc3QgZ3JvdXAxID0gaXRlbVswXVxuICAgICAgY29uc3QgZ3JvdXAyID0gaXRlbVsxXVxuICAgICAgY29uc3QgbmV4dExpZ2h0ID0gYXJyW2luZGV4ICsgMV1cblxuICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgZHVyYXRpb246IChncm91cDEgPT09ICdZJyB8fCBncm91cDIgPT09ICdZJykgPyBncmVlbkxpZ2h0RHVyYXRpb24gOiA1MDAwLFxuICAgICAgICBzdGVwOiBpbmRleCArIDEsXG4gICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICBncm91cDE6IGl0ZW1bMF0sXG4gICAgICAgICAgZ3JvdXAyOiBpdGVtWzFdLFxuICAgICAgICB9LFxuICAgICAgICBuZXh0OiB7XG4gICAgICAgICAgZ3JvdXAxOiAnJyxcbiAgICAgICAgICBncm91cDI6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRMaWdodCkge1xuICAgICAgICBvYmoubmV4dC5ncm91cDEgPSBuZXh0TGlnaHRbMF1cbiAgICAgICAgb2JqLm5leHQuZ3JvdXAyID0gbmV4dExpZ2h0WzFdXG4gICAgICB9XG5cbiAgICAgIGxpZ2h0T2JqQXJyLnB1c2gob2JqKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVEYXRhKClcblxuICByZXR1cm4gbGlnaHRPYmpBcnJcbn0iXSwibmFtZXMiOlsibGlnaHRTY2VuYXJpbyIsImxpZ2h0RGF0YSIsImdyZWVuTGlnaHREdXJhdGlvbiIsImxpZ2h0T2JqQXJyIiwiY3JlYXRlRGF0YSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJhcnIiLCJncm91cDEiLCJncm91cDIiLCJuZXh0TGlnaHQiLCJvYmoiLCJkdXJhdGlvbiIsInN0ZXAiLCJjdXJyZW50IiwibmV4dCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/lightData.ts\n"));

/***/ })

});