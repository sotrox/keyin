webpackHotUpdate_N_E("pages/word",{

/***/ "./pages/word.tsx":
/*!************************!*\
  !*** ./pages/word.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa/lib/tonal/version2 */ \"./node_modules/taipa/lib/tonal/version2.js\");\n/* harmony import */ var taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taipa/lib/unchange/metaplasm */ \"./node_modules/taipa/lib/unchange/metaplasm.js\");\n/* harmony import */ var taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/process */ \"./util/process.ts\");\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/word.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction WordPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var tla = taipa__WEBPACK_IMPORTED_MODULE_1__[\"tonalLemmatizationAnalyzer\"];\n  var letters = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"graphAnalyzeTonal\"])(input).map(function (it) {\n    return it.letter && it.letter.literal;\n  });\n  var soundSeqs = Object(_util_process__WEBPACK_IMPORTED_MODULE_4__[\"getSoundSequences\"])(tla.morphAnalyze(input, new taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3__[\"TonalUncombiningForms\"]([])).map(function (x) {\n    return x.sounds;\n  }));\n  var transfix = [];\n  soundSeqs.map(function (it) {\n    return it[0];\n  }).map(function (it) {\n    if (taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__[\"freeToneLettersTonal\"].includes(it)) transfix.push(it);\n  });\n  var transfixNew = tla.morphAnalyze(input, new taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3__[\"TonalUncombiningForms\"]([])).map(function (x) {\n    return x.sounds;\n  }).map(function (it) {\n    if (taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__[\"freeToneLettersTonal\"].includes(it)) transfix.push(it);\n  });\n  var withoutTransfix = tla.morphAnalyze(input, new taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3__[\"TonalUncombiningForms\"]([])).map(function (x) {\n    return x.sounds;\n  }).map(function (it) {\n    if (it[it.length - 1].name === taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalSoundTags\"].checkedTone || it[it.length - 1].name === taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalSoundTags\"].freeTone) {\n      it.pop();\n    }\n\n    return it.map(function (it) {\n      return it.toString();\n    }).join('');\n  });\n  var uncombiningSeqs = tla.morphAnalyze(input, new taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_3__[\"TonalUncombiningForms\"]([])).map(function (it) {\n    return it.getForms().map(function (it) {\n      return it.literal;\n    }).join(', ');\n  }).filter(function (it) {\n    return it.length > 0;\n  });\n  var lxLemma = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"lemmatize\"])(input);\n  var stems = Object(_util_process__WEBPACK_IMPORTED_MODULE_4__[\"getStems\"])(lxLemma.word.literal, lxLemma.getInflectionalEnding());\n  var inflectionalSuffixes = Object(_util_process__WEBPACK_IMPORTED_MODULE_4__[\"getInflectionalSuffixes\"])(lxLemma.getInflectionalEnding());\n  var lemmas = lxLemma.getLemmas().map(function (x) {\n    return x.literal;\n  });\n  var lxInflect = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"inflectDesinence\"])(input);\n  var proceedingForms = lxInflect.getForms().map(function (x) {\n    return x.literal;\n  });\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA lemmas, stem, inflectional suffix, proceeding forms, sound sequences, uncombining form sequences, \\u7532 letters\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), \"lemmas\", lemmas.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), \"stem\", stems.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }), \"inflectional suffix\", inflectionalSuffixes.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }), \"proceeding forms\", proceedingForms.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }), \"sound sequences\", soundSeqs.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }\n    }, x[0] + ' - ' + x[1]);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }), \"transfix: \", transfix.join(', '), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }), \"without transfix: \", withoutTransfix.join('-'), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }), \"uncombining form sequences\", uncombiningSeqs.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }), \"letters: \", letters.join(', '));\n}\n\n_s(WordPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = WordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"WordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yZC50c3g/YzdlNiJdLCJuYW1lcyI6WyJXb3JkUGFnZSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInRsYSIsInRvbmFsTGVtbWF0aXphdGlvbkFuYWx5emVyIiwibGV0dGVycyIsImdyYXBoQW5hbHl6ZVRvbmFsIiwibWFwIiwiaXQiLCJsZXR0ZXIiLCJsaXRlcmFsIiwic291bmRTZXFzIiwiZ2V0U291bmRTZXF1ZW5jZXMiLCJtb3JwaEFuYWx5emUiLCJUb25hbFVuY29tYmluaW5nRm9ybXMiLCJ4Iiwic291bmRzIiwidHJhbnNmaXgiLCJmcmVlVG9uZUxldHRlcnNUb25hbCIsImluY2x1ZGVzIiwicHVzaCIsInRyYW5zZml4TmV3Iiwid2l0aG91dFRyYW5zZml4IiwibGVuZ3RoIiwibmFtZSIsIlRvbmFsU291bmRUYWdzIiwiY2hlY2tlZFRvbmUiLCJmcmVlVG9uZSIsInBvcCIsInRvU3RyaW5nIiwiam9pbiIsInVuY29tYmluaW5nU2VxcyIsImdldEZvcm1zIiwiZmlsdGVyIiwibHhMZW1tYSIsImxlbW1hdGl6ZSIsInN0ZW1zIiwiZ2V0U3RlbXMiLCJ3b3JkIiwiZ2V0SW5mbGVjdGlvbmFsRW5kaW5nIiwiaW5mbGVjdGlvbmFsU3VmZml4ZXMiLCJnZXRJbmZsZWN0aW9uYWxTdWZmaXhlcyIsImxlbW1hcyIsImdldExlbW1hcyIsImx4SW5mbGVjdCIsImluZmxlY3REZXNpbmVuY2UiLCJwcm9jZWVkaW5nRm9ybXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7O0FBTUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNYQyxLQURXO0FBQUEsTUFDSkMsUUFESTs7QUFHbEIsTUFBTUMsR0FBRyxHQUFH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QUFlLENBQUNRLElBQWhCLENBQXFCLEdBQXJCLENBbkNyQixFQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcENGLGdDQXNDR0MsZUFBZSxDQUFDeEIsR0FBaEIsQ0FBb0IsVUFBQVEsQ0FBQztBQUFBLFdBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsQ0FBTCxDQURvQjtBQUFBLEdBQXJCLENBdENILEVBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6Q0YsZUEwQ1lWLE9BQU8sQ0FBQ3lCLElBQVIsQ0FBYSxJQUFiLENBMUNaLENBREY7QUE4Q0Q7O0dBN0dRL0IsUTs7S0FBQUEsUTtBQStHTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy93b3JkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgdG9uYWxMZW1tYXRpemF0aW9uQW5hbHl6ZXIsXG4gIGxlbW1hdGl6ZSxcbiAgZ3JhcGhBbmFseXplVG9uYWwsXG4gIGluZmxlY3REZXNpbmVuY2UsXG4gIFRvbmFsU291bmRUYWdzLFxuICBUb25hbExldHRlclRhZ3MsXG59IGZyb20gJ3RhaXBhJztcbmltcG9ydCB7IGZyZWVUb25lTGV0dGVyc1RvbmFsIH0gZnJvbSAndGFpcGEvbGliL3RvbmFsL3ZlcnNpb24yJztcbmltcG9ydCB7IFRvbmFsVW5jb21iaW5pbmdGb3JtcyB9IGZyb20gJ3RhaXBhL2xpYi91bmNoYW5nZS9tZXRhcGxhc20nO1xuaW1wb3J0IHtcbiAgZ2V0SW5mbGVjdGlvbmFsU3VmZml4ZXMsXG4gIGdldFN0ZW1zLFxuICBnZXRTb3VuZFNlcXVlbmNlcyxcbn0gZnJvbSAnLi4vdXRpbC9wcm9jZXNzJztcblxuZnVuY3Rpb24gV29yZFBhZ2UoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHRsYSA9IHRvbmFsTGVtbWF0aXphdGlvbkFuYWx5emVyO1xuXG4gIGNvbnN0IGxldHRlcnMgPSBncmFwaEFuYWx5emVUb25hbChpbnB1dCkubWFwKFxuICAgIGl0ID0+IGl0LmxldHRlciAmJiBpdC5sZXR0ZXIubGl0ZXJhbFxuICApO1xuXG4gIGNvbnN0IHNvdW5kU2VxcyA9IGdldFNvdW5kU2VxdWVuY2VzKFxuICAgIHRsYS5tb3JwaEFuYWx5emUoaW5wdXQsIG5ldyBUb25hbFVuY29tYmluaW5nRm9ybXMoW10pKS5tYXAoeCA9PiB4LnNvdW5kcylcbiAgKTtcblxuICBjb25zdCB0cmFuc2ZpeDogc3RyaW5nW10gPSBbXTtcbiAgc291bmRTZXFzXG4gICAgLm1hcChpdCA9PiBpdFswXSlcbiAgICAubWFwKGl0ID0+IHtcbiAgICAgIGlmIChmcmVlVG9uZUxldHRlcnNUb25hbC5pbmNsdWRlcyhpdCkpIHRyYW5zZml4LnB1c2goaXQpO1xuICAgIH0pO1xuXG4gIGNvbnN0IHRyYW5zZml4TmV3ID0gdGxhXG4gICAgLm1vcnBoQW5hbHl6ZShpbnB1dCwgbmV3IFRvbmFsVW5jb21iaW5pbmdGb3JtcyhbXSkpXG4gICAgLm1hcCh4ID0+IHguc291bmRzKVxuICAgIC5tYXAoaXQgPT4ge1xuICAgICAgaWYgKGZyZWVUb25lTGV0dGVyc1RvbmFsLmluY2x1ZGVzKGl0KSkgdHJhbnNmaXgucHVzaChpdCk7XG4gICAgfSk7XG4gIGNvbnN0IHdpdGhvdXRUcmFuc2ZpeCA9IHRsYVxuICAgIC5tb3JwaEFuYWx5emUoaW5wdXQsIG5ldyBUb25hbFVuY29tYmluaW5nRm9ybXMoW10pKVxuICAgIC5tYXAoeCA9PiB4LnNvdW5kcylcbiAgICAubWFwKGl0ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXRbaXQubGVuZ3RoIC0gMV0ubmFtZSA9PT0gVG9uYWxTb3VuZFRhZ3MuY2hlY2tlZFRvbmUgfHxcbiAgICAgICAgaXRbaXQubGVuZ3RoIC0gMV0ubmFtZSA9PT0gVG9uYWxTb3VuZFRhZ3MuZnJlZVRvbmVcbiAgICAgICkge1xuICAgICAgICBpdC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdC5tYXAoaXQgPT4gaXQudG9TdHJpbmcoKSkuam9pbignJyk7XG4gICAgfSk7XG5cbiAgY29uc3QgdW5jb21iaW5pbmdTZXFzID0gdGxhXG4gICAgLm1vcnBoQW5hbHl6ZShpbnB1dCwgbmV3IFRvbmFsVW5jb21iaW5pbmdGb3JtcyhbXSkpXG4gICAgLm1hcChpdCA9PlxuICAgICAgaXRcbiAgICAgICAgLmdldEZvcm1zKClcbiAgICAgICAgLm1hcChpdCA9PiBpdC5saXRlcmFsKVxuICAgICAgICAuam9pbignLCAnKVxuICAgIClcbiAgICAuZmlsdGVyKGl0ID0+IGl0Lmxlbmd0aCA+IDApO1xuXG4gIGNvbnN0IGx4TGVtbWEgPSBsZW1tYXRpemUoaW5wdXQpO1xuICBjb25zdCBzdGVtcyA9IGdldFN0ZW1zKGx4TGVtbWEud29yZC5saXRlcmFsLCBseExlbW1hLmdldEluZmxlY3Rpb25hbEVuZGluZygpKTtcbiAgY29uc3QgaW5mbGVjdGlvbmFsU3VmZml4ZXMgPSBnZXRJbmZsZWN0aW9uYWxTdWZmaXhlcyhcbiAgICBseExlbW1hLmdldEluZmxlY3Rpb25hbEVuZGluZygpXG4gICk7XG4gIGNvbnN0IGxlbW1hcyA9IGx4TGVtbWEuZ2V0TGVtbWFzKCkubWFwKHggPT4geC5saXRlcmFsKTtcblxuICBjb25zdCBseEluZmxlY3QgPSBpbmZsZWN0RGVzaW5lbmNlKGlucHV0KTtcbiAgY29uc3QgcHJvY2VlZGluZ0Zvcm1zID0gbHhJbmZsZWN0LmdldEZvcm1zKCkubWFwKHggPT4geC5saXRlcmFsKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAg5ouN576F6aas5a2XLCDovLjlh7ogbGVtbWFzLCBzdGVtLCBpbmZsZWN0aW9uYWwgc3VmZml4LCBwcm9jZWVkaW5nIGZvcm1zLCBzb3VuZFxuICAgICAgc2VxdWVuY2VzLCB1bmNvbWJpbmluZyBmb3JtIHNlcXVlbmNlcywg55SyIGxldHRlcnNcbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIGxlbW1hc1xuICAgICAge2xlbW1hcy5tYXAoeCA9PiAoXG4gICAgICAgIDxsaT57eH08L2xpPlxuICAgICAgKSl9XG4gICAgICA8YnIgLz5cbiAgICAgIHN0ZW1cbiAgICAgIHtzdGVtcy5tYXAoeCA9PiAoXG4gICAgICAgIDxsaT57eH08L2xpPlxuICAgICAgKSl9XG4gICAgICA8YnIgLz5cbiAgICAgIGluZmxlY3Rpb25hbCBzdWZmaXhcbiAgICAgIHtpbmZsZWN0aW9uYWxTdWZmaXhlcy5tYXAoeCA9PiAoXG4gICAgICAgIDxsaT57eH08L2xpPlxuICAgICAgKSl9XG4gICAgICA8YnIgLz5cbiAgICAgIHByb2NlZWRpbmcgZm9ybXNcbiAgICAgIHtwcm9jZWVkaW5nRm9ybXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgICAgPGJyIC8+XG4gICAgICBzb3VuZCBzZXF1ZW5jZXNcbiAgICAgIHtzb3VuZFNlcXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3hbMF0gKyAnIC0gJyArIHhbMV19PC9saT5cbiAgICAgICkpfVxuICAgICAgPGJyIC8+XG4gICAgICB0cmFuc2ZpeDoge3RyYW5zZml4LmpvaW4oJywgJyl9XG4gICAgICA8YnIgLz5cbiAgICAgIHdpdGhvdXQgdHJhbnNmaXg6IHt3aXRob3V0VHJhbnNmaXguam9pbignLScpfVxuICAgICAgPGJyIC8+XG4gICAgICB1bmNvbWJpbmluZyBmb3JtIHNlcXVlbmNlc1xuICAgICAge3VuY29tYmluaW5nU2Vxcy5tYXAoeCA9PiAoXG4gICAgICAgIDxsaT57eH08L2xpPlxuICAgICAgKSl9XG4gICAgICA8YnIgLz5cbiAgICAgIGxldHRlcnM6IHtsZXR0ZXJzLmpvaW4oJywgJyl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/word.tsx\n");

/***/ })

})