"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./src/components/admin/Modal.tsx":
/*!****************************************!*\
  !*** ./src/components/admin/Modal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst Modal = (param)=>{\n    let { onClose, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed left-0 top-0 right-0 bottom-0 bg-black/70 flex flex-col items-center overflow-y-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-xl my-3 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: onClose,\n                    className: \"w-8 h-8 rounded-full bg-gray-800 text-white text-lg flex justify-center items-center cursor-pointer hover:bg-gray-500\",\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\projetos\\\\AmigoSecreto\\\\frontEnd\\\\amigo_secreto-front\\\\src\\\\components\\\\admin\\\\Modal.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\projetos\\\\AmigoSecreto\\\\frontEnd\\\\amigo_secreto-front\\\\src\\\\components\\\\admin\\\\Modal.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-800 w-full max-w-xl p-4 rounded-md mb-5\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\projetos\\\\AmigoSecreto\\\\frontEnd\\\\amigo_secreto-front\\\\src\\\\components\\\\admin\\\\Modal.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\projetos\\\\AmigoSecreto\\\\frontEnd\\\\amigo_secreto-front\\\\src\\\\components\\\\admin\\\\Modal.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FkbWluL01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFPTyxNQUFNQSxRQUFRO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQVM7SUFDaEQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQ0NFLFNBQVNKO29CQUNURyxXQUFVOzhCQUNYOzs7Ozs7Ozs7OzswQkFJSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGOzs7Ozs7Ozs7Ozs7QUFJVCxFQUFFO0tBaEJXRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hZG1pbi9Nb2RhbC50c3g/ZGIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9ICh7IG9uQ2xvc2UsIGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTAgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBiZy1ibGFjay83MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy15LWF1dG8nPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LXhsIG15LTMgJz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHRleHQtbGcgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS01MDAnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktODAwIHctZnVsbCBtYXgtdy14bCBwLTQgcm91bmRlZC1tZCBtYi01Jz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwib25DbG9zZSIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/admin/Modal.tsx\n"));

/***/ })

});