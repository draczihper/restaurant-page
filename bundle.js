/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/caffe.jpg */ "./src/assets/caffe.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/boba.jpg */ "./src/assets/boba.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	width: 100vw;
	height: 100vh;
}

.home {
	overflow: hidden;
	position: relative;
	width: 100vw;
	height: calc(100vh - 64px);
	background-color: hsla(0, 0%, 10%, 0.4);
	display: flex;
/*	justify-content: center;*/
	align-items: center;
	flex-direction: column;

}

.background {
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: -99;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: cover;
	background-repeat: no-repeat;
}


img {
	width: 200px;
}

header {
	display: flex;
	justify-content: center;
	align-items: center;
/*	gap: 30px;*/
	background-color: hsl(0, 0%, 20%);
/*	height: 50px;*/
}

nav:first-child, nav:last-child {
	border-left: 1px solid hsl(0, 0%, 80%);
	border-right: 1px solid hsl(0, 0%, 80%);
}

nav:hover {
	background-color: hsl(37, 6%, 54%);
	cursor: pointer;
}

nav:active {
	background-color: hsl(0, 0%, 100%);
	color: black;

}

button {
	all: unset;
	font-size: 20px;
	font-weight: 400;
	color: hsl(0, 0%, 100%);
	font-family: monospace;
	padding: 20px 30px;
}

button:active {
	color: black;
}

h1, h3, p {
	color: white;
	font-family: monospace;
}

.home h1, p {
	position: relative;
	top: 25%;
}

.home h1 {
	color: white;
	font-size: 44px;
	margin-bottom: 40px;
}

.home p {
	color: white;
	font-size: 18px;
	padding: 0 300px;
	text-align: center;
}


.menu {
	width: 100vw;
	height: calc(100vh - 64px);
	position: relative;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-size: cover;
	overflow: hidden;
/*	mask-image: linear-gradient(
		to right,
		hsla(0, 0%, 0%, 0),
		hsla(0, 0%, 10%, 1) 20%,
		hsla(0, 0%, 10%, 1) 80%,
		hsla(0, 0%, 0%, 0),
	);*/
}

@keyframes scrollLeft {
	to {
		left: -250px;
	}
}


.menu h1 {
	text-align: center;
	font-size: 44px;
	margin: 20px 0;
}

.menuItem {
	width: 250px;
	background-color: hsl(0, 0%, 20%);
	height: 405px;
	border-radius: 8px;
	overflow: hidden;
	position: absolute;
	left: max(calc(250px * 3), 100%);
	animation-name: scrollLeft;
	animation-duration: 30s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-play-state: running;
}

.menu.paused .menuItem {
	animation-play-state: paused;
}

#item1 {
	animation-delay: calc(30s / 3 * (3 - 1) * -1);
}

#item2 {
	animation-delay: calc(30s / 3 * (3 - 2) * -1);
}

#item3 {
	animation-delay: calc(30s / 3 * (3 - 3) * -1);
}




.menuItem img {
	width: 250px;
}

.menuItem h3 {
	text-align: center;

}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,YAAY;CACZ,0BAA0B;CAC1B,uCAAuC;CACvC,aAAa;AACd,4BAA4B;CAC3B,mBAAmB;CACnB,sBAAsB;;AAEvB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,YAAY;CACZ,yDAA2C;CAC3C,sBAAsB;CACtB,4BAA4B;AAC7B;;;AAGA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB,cAAc;CACb,iCAAiC;AAClC,iBAAiB;AACjB;;AAEA;CACC,sCAAsC;CACtC,uCAAuC;AACxC;;AAEA;CACC,kCAAkC;CAClC,eAAe;AAChB;;AAEA;CACC,kCAAkC;CAClC,YAAY;;AAEb;;AAEA;CACC,UAAU;CACV,eAAe;CACf,gBAAgB;CAChB,uBAAuB;CACvB,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;AACT;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;;;AAGA;CACC,YAAY;CACZ,0BAA0B;CAC1B,kBAAkB;CAClB,yDAA0C;CAC1C,sBAAsB;CACtB,gBAAgB;AACjB;;;;;;IAMI;AACJ;;AAEA;CACC;EACC,YAAY;CACb;AACD;;;AAGA;CACC,kBAAkB;CAClB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,iCAAiC;CACjC,aAAa;CACb,kBAAkB;CAClB,gBAAgB;CAChB,kBAAkB;CAClB,gCAAgC;CAChC,0BAA0B;CAC1B,uBAAuB;CACvB,iCAAiC;CACjC,mCAAmC;CACnC,6BAA6B;AAC9B;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,6CAA6C;AAC9C;;AAEA;CACC,6CAA6C;AAC9C;;AAEA;CACC,6CAA6C;AAC9C;;;;;AAKA;CACC,YAAY;AACb;;AAEA;CACC,kBAAkB;;AAEnB","sourcesContent":["\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\twidth: 100vw;\n\theight: 100vh;\n}\n\n.home {\n\toverflow: hidden;\n\tposition: relative;\n\twidth: 100vw;\n\theight: calc(100vh - 64px);\n\tbackground-color: hsla(0, 0%, 10%, 0.4);\n\tdisplay: flex;\n/*\tjustify-content: center;*/\n\talign-items: center;\n\tflex-direction: column;\n\n}\n\n.background {\n\tposition: absolute;\n\twidth: 100vw;\n\theight: 100vh;\n\tz-index: -99;\n\tbackground-image: url('./assets/caffe.jpg');\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n}\n\n\nimg {\n\twidth: 200px;\n}\n\nheader {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n/*\tgap: 30px;*/\n\tbackground-color: hsl(0, 0%, 20%);\n/*\theight: 50px;*/\n}\n\nnav:first-child, nav:last-child {\n\tborder-left: 1px solid hsl(0, 0%, 80%);\n\tborder-right: 1px solid hsl(0, 0%, 80%);\n}\n\nnav:hover {\n\tbackground-color: hsl(37, 6%, 54%);\n\tcursor: pointer;\n}\n\nnav:active {\n\tbackground-color: hsl(0, 0%, 100%);\n\tcolor: black;\n\n}\n\nbutton {\n\tall: unset;\n\tfont-size: 20px;\n\tfont-weight: 400;\n\tcolor: hsl(0, 0%, 100%);\n\tfont-family: monospace;\n\tpadding: 20px 30px;\n}\n\nbutton:active {\n\tcolor: black;\n}\n\nh1, h3, p {\n\tcolor: white;\n\tfont-family: monospace;\n}\n\n.home h1, p {\n\tposition: relative;\n\ttop: 25%;\n}\n\n.home h1 {\n\tcolor: white;\n\tfont-size: 44px;\n\tmargin-bottom: 40px;\n}\n\n.home p {\n\tcolor: white;\n\tfont-size: 18px;\n\tpadding: 0 300px;\n\ttext-align: center;\n}\n\n\n.menu {\n\twidth: 100vw;\n\theight: calc(100vh - 64px);\n\tposition: relative;\n\tbackground-image: url('./assets/boba.jpg');\n\tbackground-size: cover;\n\toverflow: hidden;\n/*\tmask-image: linear-gradient(\n\t\tto right,\n\t\thsla(0, 0%, 0%, 0),\n\t\thsla(0, 0%, 10%, 1) 20%,\n\t\thsla(0, 0%, 10%, 1) 80%,\n\t\thsla(0, 0%, 0%, 0),\n\t);*/\n}\n\n@keyframes scrollLeft {\n\tto {\n\t\tleft: -250px;\n\t}\n}\n\n\n.menu h1 {\n\ttext-align: center;\n\tfont-size: 44px;\n\tmargin: 20px 0;\n}\n\n.menuItem {\n\twidth: 250px;\n\tbackground-color: hsl(0, 0%, 20%);\n\theight: 405px;\n\tborder-radius: 8px;\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: max(calc(250px * 3), 100%);\n\tanimation-name: scrollLeft;\n\tanimation-duration: 30s;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n\tanimation-play-state: running;\n}\n\n.menu.paused .menuItem {\n\tanimation-play-state: paused;\n}\n\n#item1 {\n\tanimation-delay: calc(30s / 3 * (3 - 1) * -1);\n}\n\n#item2 {\n\tanimation-delay: calc(30s / 3 * (3 - 2) * -1);\n}\n\n#item3 {\n\tanimation-delay: calc(30s / 3 * (3 - 3) * -1);\n}\n\n\n\n\n.menuItem img {\n\twidth: 250px;\n}\n\n.menuItem h3 {\n\ttext-align: center;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactContent: () => (/* binding */ contactContent)
/* harmony export */ });
/* harmony import */ var _assets_call_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/call.png */ "./src/assets/call.png");
/* harmony import */ var _assets_pin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pin.png */ "./src/assets/pin.png");
/* harmony import */ var _assets_facebook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/facebook.png */ "./src/assets/facebook.png");
/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/instagram.png */ "./src/assets/instagram.png");
/* harmony import */ var _assets_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/twitter.png */ "./src/assets/twitter.png");







const contactContent = () => {
	const contentDiv = document.querySelector('#content');

	const contactDiv = document.createElement('div');

	const cardDiv = document.createElement('div');
	const cardH3 = document.createElement('h3');
	cardH3.textContent = "Find Us";
	cardDiv.appendChild(cardH3);

	const addressDiv = document.createElement('div');
	cardDiv.appendChild(addressDiv);

	const locationDiv = document.createElement('div');
	const locationIcon = document.createElement('img');
	locationIcon.src = _assets_pin_png__WEBPACK_IMPORTED_MODULE_1__;
	const locationText = document.createElement('p');
	locationText.textContent = "4897 Maggie Plaza, West Robert, SC 31203-4313";
	locationDiv.appendChild(locationIcon);
	locationDiv.appendChild(locationText);
	addressDiv.appendChild(locationDiv);

	const phoneDiv = document.createElement('div');
	const phoneIcon = document.createElement('img');
	phoneIcon.src = _assets_call_png__WEBPACK_IMPORTED_MODULE_0__;
	const phoneText = document.createElement('p');
	phoneText.textContent = "+ 255 26 - 2720900";
	phoneDiv.appendChild(phoneIcon);
	phoneDiv.appendChild(phoneText)
	addressDiv.appendChild(phoneDiv);

	const socialDiv = document.createElement('div');
	addressDiv.appendChild(socialDiv);

	const instagramLink = document.createElement('a');
	instagramLink.setAttribute("href", "https://www.instagram.com/pictoristudios/");
	const igIcon = document.createElement('img');
	igIcon.src = _assets_instagram_png__WEBPACK_IMPORTED_MODULE_3__;
	instagramLink.appendChild(igIcon);
	socialDiv.appendChild(instagramLink);

	const facebookLink = document.createElement('a');
	facebookLink.setAttribute("href", "https://www.facebook.com/pictoristudios/");
	const fbIcon = document.createElement('img');
	fbIcon.src = _assets_facebook_png__WEBPACK_IMPORTED_MODULE_2__;
	facebookLink.appendChild(fbIcon);
	socialDiv.appendChild(facebookLink);

	const twitterLink = document.createElement('a');
	twitterLink.setAttribute("href", "https://www.twitter.com/pictoristudios/");
	const tIcon = document.createElement('img');
	tIcon.src = _assets_twitter_png__WEBPACK_IMPORTED_MODULE_4__;
	twitterLink.appendChild(tIcon);
	socialDiv.appendChild(twitterLink);


	const mapDiv = document.createElement('div');
	mapDiv.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.180985099609!2d39.28154817420411!3d-6.747768393248624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d665a214a27%3A0x85e7c3ee11c6b03e!2sShoppers%20Plaza%20Masaki!5e0!3m2!1sen!2stz!4v1719317059468!5m2!1sen!2stz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
	addressDiv.appendChild(mapDiv);


	const formDiv = document.createElement('div');
	const formH3 = document.createElement('h3');
	formH3.textContent = 'Order Here';
	formDiv.appendChild(formH3);

	var form = document.createElement('form');
	form.setAttribute('method', 'post');
	form.setAttribute('action', '/');

	var inputMenu = document.createElement('input');
	inputMenu.setAttribute("type", "text");
    inputMenu.setAttribute("name", "Menu");
    inputMenu.setAttribute("placeholder", "What would you like to order?");

    var inputAddress = document.createElement('input');
	inputAddress.setAttribute("type", "text");
    inputAddress.setAttribute("name", "address");
    inputAddress.setAttribute("placeholder", "Where should we deliver it?");

    var inputComment = document.createElement('textarea');
	inputComment.setAttribute("type", "text");
    inputComment.setAttribute("name", "comment");
    inputComment.setAttribute("placeholder", "Anything else?");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Send");

    form.appendChild(inputMenu);
    form.appendChild(inputAddress);
    form.appendChild(inputComment);

    form.appendChild(s);

    formDiv.appendChild(form);

    cardDiv.appendChild(formDiv);

    contactDiv.appendChild(cardDiv);

    return contentDiv.appendChild(contactDiv);

}





/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContent: () => (/* binding */ homeContent)
/* harmony export */ });
/* harmony import */ var _assets_caffe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/caffe.jpg */ "./src/assets/caffe.jpg");


const homeContent = () => {
	const contentDiv = document.querySelector("#content");

	const homeDiv = document.createElement("div");
	homeDiv.setAttribute('class', 'home')
	const homeH1 = document.createElement("h1");
	homeH1.textContent = "Our Drinks";

	const homePara = document.createElement("p");
	homePara.textContent = "When it comes to the important stuff - the drink - we are committed to sourcing and serving is one of the highest quality and we believe is nothing short of the best drink possible";


	const imgDiv = document.createElement("div");
	imgDiv.setAttribute("class", "background");
	homeDiv.appendChild(imgDiv);



	homeDiv.appendChild(homeH1);
	homeDiv.appendChild(homePara);

	return contentDiv.appendChild(homeDiv);
}





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContent: () => (/* binding */ menuContent)
/* harmony export */ });
/* harmony import */ var _assets_boba_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/boba.jpg */ "./src/assets/boba.jpg");
/* harmony import */ var _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/latte.jpg */ "./src/assets/latte.jpg");
/* harmony import */ var _assets_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cappuccino.jpg */ "./src/assets/cappuccino.jpg");





const menuItems = [
	{img: _assets_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__, text: "Boba"},
	{img: _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_1__, text: "Latte"},
	{img: _assets_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__, text: "Cappuccino"}

	];

const menuContent = () => {
	const contentDiv = document.querySelector("#content");

	const menuDiv = document.createElement('div');
	menuDiv.setAttribute('class', 'menu');
	const menuH1 = document.createElement('h1');
	menuH1.textContent = "The Menu";
	menuDiv.appendChild(menuH1);

	menuItems.forEach((item, index) => {
		const itemDiv = document.createElement('div');
		itemDiv.setAttribute('class', 'menuItem')
		itemDiv.id = `item${index + 1}`;

		const itemImg = document.createElement('img');
		itemImg.src = item.img;

		const itemH3 = document.createElement('h3');
		itemH3.textContent = item.text;

		itemDiv.appendChild(itemImg);
		itemDiv.appendChild(itemH3);
		menuDiv.appendChild(itemDiv);

		itemDiv.addEventListener('mouseover', () => {
			menuDiv.classList.add('paused');
		});

		itemDiv.addEventListener('mouseout', () => {
			menuDiv.classList.remove('paused');
		});
		
	});


	return contentDiv.appendChild(menuDiv);
}



/***/ }),

/***/ "./src/assets/boba.jpg":
/*!*****************************!*\
  !*** ./src/assets/boba.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "boba.jpg";

/***/ }),

/***/ "./src/assets/caffe.jpg":
/*!******************************!*\
  !*** ./src/assets/caffe.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caffe.jpg";

/***/ }),

/***/ "./src/assets/call.png":
/*!*****************************!*\
  !*** ./src/assets/call.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "call.png";

/***/ }),

/***/ "./src/assets/cappuccino.jpg":
/*!***********************************!*\
  !*** ./src/assets/cappuccino.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cappuccino.jpg";

/***/ }),

/***/ "./src/assets/facebook.png":
/*!*********************************!*\
  !*** ./src/assets/facebook.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facebook.png";

/***/ }),

/***/ "./src/assets/instagram.png":
/*!**********************************!*\
  !*** ./src/assets/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "instagram.png";

/***/ }),

/***/ "./src/assets/latte.jpg":
/*!******************************!*\
  !*** ./src/assets/latte.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "latte.jpg";

/***/ }),

/***/ "./src/assets/pin.png":
/*!****************************!*\
  !*** ./src/assets/pin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pin.png";

/***/ }),

/***/ "./src/assets/twitter.png":
/*!********************************!*\
  !*** ./src/assets/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const buttons = document.querySelectorAll('button');
const contentDiv = document.getElementById('content');


// A function to clear the existing content
function clearContent() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

// Load the initial content
document.addEventListener('DOMContentLoaded', () => {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeContent)();
});

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		clearContent();

		if (button.textContent === "Home") {
			(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeContent)();
		} 

		if (button.textContent === "Menu") {
			(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContent)();
		}

		if (button.textContent === "Find Us") {
			(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactContent)();
		}
	});
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNBO0FBQ007QUFDeEI7O0FBRXRCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxxREFBVztBQUNkOztBQUVBO0FBQ0EsR0FBRyxxREFBVztBQUNkOztBQUVBO0FBQ0EsR0FBRywyREFBYztBQUNqQjtBQUNBLEVBQUU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvY2FmZmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYm9iYS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcblxuKiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhvbWUge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG5cdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwJSwgMC40KTtcblx0ZGlzcGxheTogZmxleDtcbi8qXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5iYWNrZ3JvdW5kIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwdnc7XG5cdGhlaWdodDogMTAwdmg7XG5cdHotaW5kZXg6IC05OTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5cbmltZyB7XG5cdHdpZHRoOiAyMDBweDtcbn1cblxuaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vKlx0Z2FwOiAzMHB4OyovXG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcbi8qXHRoZWlnaHQ6IDUwcHg7Ki9cbn1cblxubmF2OmZpcnN0LWNoaWxkLCBuYXY6bGFzdC1jaGlsZCB7XG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgaHNsKDAsIDAlLCA4MCUpO1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDgwJSk7XG59XG5cbm5hdjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCgzNywgNiUsIDU0JSk7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxubmF2OmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG5cdGNvbG9yOiBibGFjaztcblxufVxuXG5idXR0b24ge1xuXHRhbGw6IHVuc2V0O1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXHRwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbmgxLCBoMywgcCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLmhvbWUgaDEsIHAge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMjUlO1xufVxuXG4uaG9tZSBoMSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiA0NHB4O1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uaG9tZSBwIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHBhZGRpbmc6IDAgMzAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ubWVudSB7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuLypcdG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHRoc2xhKDAsIDAlLCAwJSwgMCksXG5cdFx0aHNsYSgwLCAwJSwgMTAlLCAxKSAyMCUsXG5cdFx0aHNsYSgwLCAwJSwgMTAlLCAxKSA4MCUsXG5cdFx0aHNsYSgwLCAwJSwgMCUsIDApLFxuXHQpOyovXG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsTGVmdCB7XG5cdHRvIHtcblx0XHRsZWZ0OiAtMjUwcHg7XG5cdH1cbn1cblxuXG4ubWVudSBoMSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiA0NHB4O1xuXHRtYXJnaW46IDIwcHggMDtcbn1cblxuLm1lbnVJdGVtIHtcblx0d2lkdGg6IDI1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG5cdGhlaWdodDogNDA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiBtYXgoY2FsYygyNTBweCAqIDMpLCAxMDAlKTtcblx0YW5pbWF0aW9uLW5hbWU6IHNjcm9sbExlZnQ7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMzBzO1xuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHRhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cblxuLm1lbnUucGF1c2VkIC5tZW51SXRlbSB7XG5cdGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbiNpdGVtMSB7XG5cdGFuaW1hdGlvbi1kZWxheTogY2FsYygzMHMgLyAzICogKDMgLSAxKSAqIC0xKTtcbn1cblxuI2l0ZW0yIHtcblx0YW5pbWF0aW9uLWRlbGF5OiBjYWxjKDMwcyAvIDMgKiAoMyAtIDIpICogLTEpO1xufVxuXG4jaXRlbTMge1xuXHRhbmltYXRpb24tZGVsYXk6IGNhbGMoMzBzIC8gMyAqICgzIC0gMykgKiAtMSk7XG59XG5cblxuXG5cbi5tZW51SXRlbSBpbWcge1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbi5tZW51SXRlbSBoMyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLHVDQUF1QztDQUN2QyxhQUFhO0FBQ2QsNEJBQTRCO0NBQzNCLG1CQUFtQjtDQUNuQixzQkFBc0I7O0FBRXZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsWUFBWTtDQUNaLHlEQUEyQztDQUMzQyxzQkFBc0I7Q0FDdEIsNEJBQTRCO0FBQzdCOzs7QUFHQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCLGNBQWM7Q0FDYixpQ0FBaUM7QUFDbEMsaUJBQWlCO0FBQ2pCOztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0NBQWtDO0NBQ2xDLFlBQVk7O0FBRWI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7OztBQUdBO0NBQ0MsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIseURBQTBDO0NBQzFDLHNCQUFzQjtDQUN0QixnQkFBZ0I7QUFDakI7Ozs7OztJQU1JO0FBQ0o7O0FBRUE7Q0FDQztFQUNDLFlBQVk7Q0FDYjtBQUNEOzs7QUFHQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0NBQWdDO0NBQ2hDLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsaUNBQWlDO0NBQ2pDLG1DQUFtQztDQUNuQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyw2Q0FBNkM7QUFDOUM7Ozs7O0FBS0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7O0FBRW5CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaG9tZSB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwJSwgMC40KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbi8qXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ei1pbmRleDogLTk5O1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvY2FmZmUuanBnJyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5cXG5pbWcge1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuLypcXHRnYXA6IDMwcHg7Ki9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuLypcXHRoZWlnaHQ6IDUwcHg7Ki9cXG59XFxuXFxubmF2OmZpcnN0LWNoaWxkLCBuYXY6bGFzdC1jaGlsZCB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDgwJSk7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCA4MCUpO1xcbn1cXG5cXG5uYXY6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbCgzNywgNiUsIDU0JSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXY6YWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRhbGw6IHVuc2V0O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0cGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcblxcbmgxLCBoMywgcCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5ob21lIGgxLCBwIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAyNSU7XFxufVxcblxcbi5ob21lIGgxIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiA0NHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5ob21lIHAge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0cGFkZGluZzogMCAzMDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5tZW51IHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvYm9iYS5qcGcnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuLypcXHRtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0aHNsYSgwLCAwJSwgMCUsIDApLFxcblxcdFxcdGhzbGEoMCwgMCUsIDEwJSwgMSkgMjAlLFxcblxcdFxcdGhzbGEoMCwgMCUsIDEwJSwgMSkgODAlLFxcblxcdFxcdGhzbGEoMCwgMCUsIDAlLCAwKSxcXG5cXHQpOyovXFxufVxcblxcbkBrZXlmcmFtZXMgc2Nyb2xsTGVmdCB7XFxuXFx0dG8ge1xcblxcdFxcdGxlZnQ6IC0yNTBweDtcXG5cXHR9XFxufVxcblxcblxcbi5tZW51IGgxIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiA0NHB4O1xcblxcdG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcblxcdHdpZHRoOiAyNTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuXFx0aGVpZ2h0OiA0MDVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogbWF4KGNhbGMoMjUwcHggKiAzKSwgMTAwJSk7XFxuXFx0YW5pbWF0aW9uLW5hbWU6IHNjcm9sbExlZnQ7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAzMHM7XFxuXFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcblxcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcblxcdGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG5cXG4ubWVudS5wYXVzZWQgLm1lbnVJdGVtIHtcXG5cXHRhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG4jaXRlbTEge1xcblxcdGFuaW1hdGlvbi1kZWxheTogY2FsYygzMHMgLyAzICogKDMgLSAxKSAqIC0xKTtcXG59XFxuXFxuI2l0ZW0yIHtcXG5cXHRhbmltYXRpb24tZGVsYXk6IGNhbGMoMzBzIC8gMyAqICgzIC0gMikgKiAtMSk7XFxufVxcblxcbiNpdGVtMyB7XFxuXFx0YW5pbWF0aW9uLWRlbGF5OiBjYWxjKDMwcyAvIDMgKiAoMyAtIDMpICogLTEpO1xcbn1cXG5cXG5cXG5cXG5cXG4ubWVudUl0ZW0gaW1nIHtcXG5cXHR3aWR0aDogMjUwcHg7XFxufVxcblxcbi5tZW51SXRlbSBoMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjYWxsSWNvbiBmcm9tICcuL2Fzc2V0cy9jYWxsLnBuZyc7XG5pbXBvcnQgcGluSWNvbiBmcm9tICcuL2Fzc2V0cy9waW4ucG5nJztcbmltcG9ydCBmYWNlYm9va0ljb24gZnJvbSAnLi9hc3NldHMvZmFjZWJvb2sucG5nJztcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gJy4vYXNzZXRzL2luc3RhZ3JhbS5wbmcnO1xuaW1wb3J0IHR3aXR0ZXJJY29uIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIucG5nJztcblxuXG5jb25zdCBjb250YWN0Q29udGVudCA9ICgpID0+IHtcblx0Y29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblx0Y29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgY2FyZEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0Y2FyZEgzLnRleHRDb250ZW50ID0gXCJGaW5kIFVzXCI7XG5cdGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZEgzKTtcblxuXHRjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNhcmREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdik7XG5cblx0Y29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGxvY2F0aW9uSWNvbi5zcmMgPSBwaW5JY29uO1xuXHRjb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiNDg5NyBNYWdnaWUgUGxhemEsIFdlc3QgUm9iZXJ0LCBTQyAzMTIwMy00MzEzXCI7XG5cdGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XG5cdGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dCk7XG5cdGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuXG5cdGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRwaG9uZUljb24uc3JjID0gY2FsbEljb247XG5cdGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGhvbmVUZXh0LnRleHRDb250ZW50ID0gXCIrIDI1NSAyNiAtIDI3MjA5MDBcIjtcblx0cGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcblx0cGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVUZXh0KVxuXHRhZGRyZXNzRGl2LmFwcGVuZENoaWxkKHBob25lRGl2KTtcblxuXHRjb25zdCBzb2NpYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0YWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChzb2NpYWxEaXYpO1xuXG5cdGNvbnN0IGluc3RhZ3JhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGluc3RhZ3JhbUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGljdG9yaXN0dWRpb3MvXCIpO1xuXHRjb25zdCBpZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aWdJY29uLnNyYyA9IGluc3RhZ3JhbUljb247XG5cdGluc3RhZ3JhbUxpbmsuYXBwZW5kQ2hpbGQoaWdJY29uKTtcblx0c29jaWFsRGl2LmFwcGVuZENoaWxkKGluc3RhZ3JhbUxpbmspO1xuXG5cdGNvbnN0IGZhY2Vib29rTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0ZmFjZWJvb2tMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGljdG9yaXN0dWRpb3MvXCIpO1xuXHRjb25zdCBmYkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0ZmJJY29uLnNyYyA9IGZhY2Vib29rSWNvbjtcblx0ZmFjZWJvb2tMaW5rLmFwcGVuZENoaWxkKGZiSWNvbik7XG5cdHNvY2lhbERpdi5hcHBlbmRDaGlsZChmYWNlYm9va0xpbmspO1xuXG5cdGNvbnN0IHR3aXR0ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHR0d2l0dGVyTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vcGljdG9yaXN0dWRpb3MvXCIpO1xuXHRjb25zdCB0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHR0SWNvbi5zcmMgPSB0d2l0dGVySWNvbjtcblx0dHdpdHRlckxpbmsuYXBwZW5kQ2hpbGQodEljb24pO1xuXHRzb2NpYWxEaXYuYXBwZW5kQ2hpbGQodHdpdHRlckxpbmspO1xuXG5cblx0Y29uc3QgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1hcERpdi5pbm5lckhUTUwgPSBgXG48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM5NjIuMTgwOTg1MDk5NjA5ITJkMzkuMjgxNTQ4MTc0MjA0MTEhM2QtNi43NDc3NjgzOTMyNDg2MjQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDE4NWM0ZDY2NWEyMTRhMjclM0EweDg1ZTdjM2VlMTFjNmIwM2UhMnNTaG9wcGVycyUyMFBsYXphJTIwTWFzYWtpITVlMCEzbTIhMXNlbiEyc3R6ITR2MTcxOTMxNzA1OTQ2OCE1bTIhMXNlbiEyc3R6XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPlxuYDtcblx0YWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChtYXBEaXYpO1xuXG5cblx0Y29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBmb3JtSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRmb3JtSDMudGV4dENvbnRlbnQgPSAnT3JkZXIgSGVyZSc7XG5cdGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybUgzKTtcblxuXHR2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG5cdGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnLycpO1xuXG5cdHZhciBpbnB1dE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRpbnB1dE1lbnUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXRNZW51LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJNZW51XCIpO1xuICAgIGlucHV0TWVudS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIldoYXQgd291bGQgeW91IGxpa2UgdG8gb3JkZXI/XCIpO1xuXG4gICAgdmFyIGlucHV0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdGlucHV0QWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dEFkZHJlc3Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImFkZHJlc3NcIik7XG4gICAgaW5wdXRBZGRyZXNzLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiV2hlcmUgc2hvdWxkIHdlIGRlbGl2ZXIgaXQ/XCIpO1xuXG4gICAgdmFyIGlucHV0Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cdGlucHV0Q29tbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dENvbW1lbnQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbW1lbnRcIik7XG4gICAgaW5wdXRDb21tZW50LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQW55dGhpbmcgZWxzZT9cIik7XG5cbiAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlNlbmRcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0TWVudSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEFkZHJlc3MpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRDb21tZW50KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocyk7XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG5cbiAgICByZXR1cm4gY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxufVxuXG5cblxuZXhwb3J0IHsgY29udGFjdENvbnRlbnQgfTsiLCJpbXBvcnQgY2FmZmVJbWcgZnJvbSAnLi9hc3NldHMvY2FmZmUuanBnJztcblxuY29uc3QgaG9tZUNvbnRlbnQgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cblx0Y29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhvbWVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdob21lJylcblx0Y29uc3QgaG9tZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRob21lSDEudGV4dENvbnRlbnQgPSBcIk91ciBEcmlua3NcIjtcblxuXHRjb25zdCBob21lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRob21lUGFyYS50ZXh0Q29udGVudCA9IFwiV2hlbiBpdCBjb21lcyB0byB0aGUgaW1wb3J0YW50IHN0dWZmIC0gdGhlIGRyaW5rIC0gd2UgYXJlIGNvbW1pdHRlZCB0byBzb3VyY2luZyBhbmQgc2VydmluZyBpcyBvbmUgb2YgdGhlIGhpZ2hlc3QgcXVhbGl0eSBhbmQgd2UgYmVsaWV2ZSBpcyBub3RoaW5nIHNob3J0IG9mIHRoZSBiZXN0IGRyaW5rIHBvc3NpYmxlXCI7XG5cblxuXHRjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRpbWdEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiYWNrZ3JvdW5kXCIpO1xuXHRob21lRGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XG5cblxuXG5cdGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZUgxKTtcblx0aG9tZURpdi5hcHBlbmRDaGlsZChob21lUGFyYSk7XG5cblx0cmV0dXJuIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG59XG5cblxuXG5leHBvcnQgeyBob21lQ29udGVudCB9OyIsImltcG9ydCBib2JhSW1nIGZyb20gJy4vYXNzZXRzL2JvYmEuanBnJztcbmltcG9ydCBsYXR0ZUltZyBmcm9tICcuL2Fzc2V0cy9sYXR0ZS5qcGcnO1xuaW1wb3J0IGNhcHB1Y2Npbm9JbWcgZnJvbSAnLi9hc3NldHMvY2FwcHVjY2luby5qcGcnO1xuXG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcblx0e2ltZzogY2FwcHVjY2lub0ltZywgdGV4dDogXCJCb2JhXCJ9LFxuXHR7aW1nOiBsYXR0ZUltZywgdGV4dDogXCJMYXR0ZVwifSxcblx0e2ltZzogY2FwcHVjY2lub0ltZywgdGV4dDogXCJDYXBwdWNjaW5vXCJ9XG5cblx0XTtcblxuY29uc3QgbWVudUNvbnRlbnQgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cblx0Y29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuXHRjb25zdCBtZW51SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRtZW51SDEudGV4dENvbnRlbnQgPSBcIlRoZSBNZW51XCI7XG5cdG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUgxKTtcblxuXHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0aXRlbURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVJdGVtJylcblx0XHRpdGVtRGl2LmlkID0gYGl0ZW0ke2luZGV4ICsgMX1gO1xuXG5cdFx0Y29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGl0ZW1JbWcuc3JjID0gaXRlbS5pbWc7XG5cblx0XHRjb25zdCBpdGVtSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRcdGl0ZW1IMy50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG5cdFx0aXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSDMpO1xuXHRcdG1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cblx0XHRpdGVtRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcblx0XHRcdG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgncGF1c2VkJyk7XG5cdFx0fSk7XG5cblx0XHRpdGVtRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuXHRcdFx0bWVudURpdi5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcblx0XHR9KTtcblx0XHRcblx0fSk7XG5cblxuXHRyZXR1cm4gY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbn1cblxuZXhwb3J0IHsgbWVudUNvbnRlbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaG9tZUNvbnRlbnQgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgbWVudUNvbnRlbnQgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY29udGFjdENvbnRlbnQgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXG4vLyBBIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSBleGlzdGluZyBjb250ZW50XG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBMb2FkIHRoZSBpbml0aWFsIGNvbnRlbnRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaG9tZUNvbnRlbnQoKTtcbn0pO1xuXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Y2xlYXJDb250ZW50KCk7XG5cblx0XHRpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xuXHRcdFx0aG9tZUNvbnRlbnQoKTtcblx0XHR9IFxuXG5cdFx0aWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCJNZW51XCIpIHtcblx0XHRcdG1lbnVDb250ZW50KCk7XG5cdFx0fVxuXG5cdFx0aWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCJGaW5kIFVzXCIpIHtcblx0XHRcdGNvbnRhY3RDb250ZW50KCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9