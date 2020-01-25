webpackHotUpdate("static/development/pages/lurzmafjiz.js",{

/***/ "./pages/lurzmafjiz.tsx":
/*!******************************!*\
  !*** ./pages/lurzmafjiz.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/process */ "./src/process.ts");
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/lurzmafjiz.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function LurzmafjizPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      input = _useState[0],
      setInput = _useState[1];

  var tla = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLemmatizationAnalyzer"]();
  var letters = tla.graphAnalyze(input).map(function (x) {
    return x.letter && x.letter.literal;
  });
  var soudnSeqs = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["getSoundSequences"])(tla.morphAnalyze(input).map(function (x) {
    return x.sounds;
  }));
  var lexemeLemma = tla.analyze(input);
  var stems = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["getStems"])(lexemeLemma.word.literal, lexemeLemma.getInflectionalEnding());
  var inflexctionalSuffixes = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["getInflectionalSuffixes"])(lexemeLemma.getInflectionalEnding());
  var lemmas = lexemeLemma.getLemmata().map(function (x) {
    return x.literal;
  });
  var tia = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalInflectionAnalyzer"]();
  var lexemeInflect = tia.analyze(input, new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalCombiningForms"](), new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalDesinenceInflection"]());
  var proceedingForms = lexemeInflect.otherForms.map(function (x) {
    return x.literal;
  }); // const lexemeRegrAssim = tia.analyze(input, new TonalZeroCombining(), new RegressiveAssimilation());
  // let assimilatedForm: string = '';
  // if(lexemeRegrAssim.word.literal !== lexemeRegrAssim.otherForms[0].literal) {
  //     assimilatedForm = lexemeRegrAssim.otherForms[0].literal;
  // }
  // const lexemeAgrAssim = tia.analyze(input, new TonalZeroCombining(), new AgressiveAssimilation());
  // if(lexemeAgrAssim.word.literal !== lexemeAgrAssim.otherForms[0].literal) {
  //     assimilatedForm = lexemeAgrAssim.otherForms[0].literal;
  // }

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA lemmas, stem, inflectional suffix, proceeding forms, sound sequences, \u7532 letters", __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    value: input,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), "lemmas", lemmas.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "stem", stems.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "inflectional suffix", inflexctionalSuffixes.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), "proceeding forms", proceedingForms.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "sound sequences", soudnSeqs.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, x[0] + ' - ' + x[1]);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "letters: ", letters.join(', '), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LurzmafjizPage);

/***/ })

})
//# sourceMappingURL=lurzmafjiz.js.42e484b3c26cebba0be8.hot-update.js.map