/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mystyles.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mystyles.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/AnimatedShape.svg */ \"./src/assets/AnimatedShape.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IconGrid.svg */ \"./src/assets/IconGrid.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n\\r\\n  /* background: linear-gradient(45deg, rgba(194, 128, 48, 0.8), rgb(255, 228, 196), rgba(194, 128, 48, 0.8)); */\\r\\n  background-repeat: repeat;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  height: auto;\\r\\n  min-height: 100vh;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\nbody > img {\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  padding: 3rem 1rem 3rem 1rem;\\r\\n  width: 70%;\\r\\n  height: auto;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: #fff;\\r\\n  padding: 1rem 1rem 1rem 0.5rem;\\r\\n  color: rgba(56, 53, 53, 0.9);\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  width: 100%;\\r\\n  height: 3rem;\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.todo:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  padding: 0.5rem 1rem 0.5rem 0.5rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.task-pane {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\\r\\n.top-left {\\r\\n  flex-basis: 95%;\\r\\n  display: flex;\\r\\n  padding: 0.4rem;\\r\\n  align-items: center;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.top-left:hover {\\r\\n  box-shadow: 0 0 3px 3px;\\r\\n}\\r\\n\\r\\n.top-right {\\r\\n  flex-basis: 5%;\\r\\n  text-align: center;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.left-right {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.all-activities {\\r\\n  width: 100%;\\r\\n  border: 2px solid white;\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  flex-basis: 93%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  word-wrap: break-word;\\r\\n}\\r\\n\\r\\n.check {\\r\\n  margin-right: 0.7rem;\\r\\n  flex-basis: 7%;\\r\\n  width: 1.3rem;\\r\\n  height: 1.3rem;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical {\\r\\n  color: rgb(252, 143, 0);\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical:hover {\\r\\n  color: rgb(15, 15, 14);\\r\\n}\\r\\n\\r\\n.fa-trash-can {\\r\\n  cursor: pointer;\\r\\n  display: none;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  background-color: rgba(43, 43, 40, 0.5);\\r\\n  padding: 1.2rem;\\r\\n  text-align: center;\\r\\n  color: rgb(243, 240, 240);\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.clear:hover {\\r\\n  cursor: pointer;\\r\\n  box-shadow: 3px 3px 3px 3px white;\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.fa-beat {\\r\\n  cursor: pointer;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.abnormal {\\r\\n  display: none;\\r\\n  background-color: white;\\r\\n  color: red;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.dark {\\r\\n  background-color: rgba(169, 169, 169, 0.3);\\r\\n}\\r\\n\\r\\n.text {\\r\\n  text-decoration: line-through;\\r\\n  background-color: rgb(253, 179, 170);\\r\\n}\\r\\n\\r\\n.task-less {\\r\\n  text-align: center;\\r\\n  font-size: 1.5rem;\\r\\n  color: crimson;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.prompt {\\r\\n  border: 2px solid black;\\r\\n  padding: 2rem;\\r\\n  font-size: 2rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 50%;\\r\\n  margin: 1rem 0 1rem 0;\\r\\n  box-shadow: 3px 3px 3px 5px;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.message > p {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.options {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  width: 100%;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.options > button {\\r\\n  padding: 1rem;\\r\\n  border-radius: 1.2rem;\\r\\n  border: none;\\r\\n  background-color: rgb(16, 226, 26);\\r\\n  font-size: 2rem;\\r\\n  cursor: pointer;\\r\\n  margin-top: 2rem;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.options > button:hover {\\r\\n  background-color: rgb(5, 92, 9);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.options > button:active {\\r\\n  filter: invert(70%);\\r\\n}\\r\\n\\r\\n#username,\\r\\n#user-number {\\r\\n  padding: 0.8rem;\\r\\n  border-radius: 10px;\\r\\n  font-size: 2rem;\\r\\n  border: none;\\r\\n  margin-left: 1rem;\\r\\n  width: 75%;\\r\\n}\\r\\n\\r\\n#username:focus,\\r\\n#user-number:focus {\\r\\n  outline: none;\\r\\n  box-shadow: 0 0 3px 4px gray;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  padding: 0.7rem;\\r\\n  font-size: 1.5rem;\\r\\n  background-color: #d8d2d2;\\r\\n}\\r\\n\\r\\n.warning,\\r\\n.warning2 {\\r\\n  color: crimson;\\r\\n  font-size: 1.5rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.initial-max {\\r\\n  display: none;\\r\\n  border: 2px solid black;\\r\\n  padding: 1rem;\\r\\n  font-size: 2rem;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 50%;\\r\\n  box-shadow: 3px 3px 3px 5px;\\r\\n  position: absolute;\\r\\n  top: 45vh;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.number {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 1200px) {\\r\\n  #username {\\r\\n    width: 65%;\\r\\n    font-size: 1.1rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 900px) {\\r\\n  #username {\\r\\n    width: 70%;\\r\\n    margin-left: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .prompt {\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n\\r\\n  .options > button {\\r\\n    padding: 1rem;\\r\\n    border-radius: 1rem;\\r\\n    font-size: 1.5rem;\\r\\n    margin-top: 1.5rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 820px) {\\r\\n  #username {\\r\\n    font-size: 1.1rem;\\r\\n  }\\r\\n\\r\\n  .prompt {\\r\\n    font-size: 1.3rem;\\r\\n  }\\r\\n\\r\\n  .name {\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 768px) {\\r\\n  .wrapper {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 730px) {\\r\\n  .prompt {\\r\\n    padding: 1rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 670px) {\\r\\n  .prompt {\\r\\n    font-size: 1.1rem;\\r\\n  }\\r\\n\\r\\n  #username {\\r\\n    font-size: 0.9rem;\\r\\n  }\\r\\n\\r\\n  .options {\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n\\r\\n  .options > button {\\r\\n    padding: 0.6rem;\\r\\n    border-radius: 0.6rem;\\r\\n    font-size: 1.3rem;\\r\\n    margin-top: 1rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 580px) {\\r\\n  .prompt {\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n\\r\\n  .name {\\r\\n    font-size: 0.8rem;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  #username {\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n\\r\\n  .options > button {\\r\\n    padding: 0.4rem;\\r\\n    border-radius: 0.4rem;\\r\\n    font-size: 1rem;\\r\\n    margin-top: 0.4rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 490px) {\\r\\n  .prompt {\\r\\n    font-size: 0.6rem;\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n\\r\\n  #username {\\r\\n    font-size: 0.6rem;\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .name {\\r\\n    font-size: 0.6rem;\\r\\n    margin-bottom: 0.8rem;\\r\\n  }\\r\\n\\r\\n  .options > button {\\r\\n    padding: 0.3rem;\\r\\n    font-size: 0.7rem;\\r\\n    margin-top: 0.2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 380px) {\\r\\n  #username {\\r\\n    border-radius: 5px;\\r\\n    font-size: 0.45rem;\\r\\n  }\\r\\n\\r\\n  .name {\\r\\n    margin-bottom: 0.4rem;\\r\\n    font-size: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .prompt {\\r\\n    font-size: 0.5rem;\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .options > button {\\r\\n    padding: 0.2rem;\\r\\n    font-size: 0.5rem;\\r\\n    border-radius: 0.2rem;\\r\\n    margin-top: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 287px) {\\r\\n  #username {\\r\\n    width: 60%;\\r\\n    border-radius: 3px;\\r\\n    font-size: 0.35rem;\\r\\n    padding: 0.3rem;\\r\\n  }\\r\\n\\r\\n  .options {\\r\\n    flex-direction: column;\\r\\n    padding: 0;\\r\\n  }\\r\\n\\r\\n  .options > button {\\r\\n    margin-bottom: 7px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/mystyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/mystyles.css":
/*!**************************!*\
  !*** ./src/mystyles.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mystyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/mystyles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/mystyles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dispcaller.js":
/*!***************************!*\
  !*** ./src/dispcaller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\n\n\n\nconst displayTasksCaller = (gem, linedeco) => {\n  let tasks;\n  if (linedeco >= 0) {\n    tasks = [...gem];\n    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = '';\n    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks);\n  } else if (gem.length === 0) {\n    tasks = [];\n    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.store)(tasks);\n    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';\n    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.classList.add('task-less');\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0);\n  } else {\n    tasks = gem.map((mapped, i) => ({\n      description: `${mapped.description}`,\n      index: `${i + 1}`,\n      completed: false,\n    }));\n    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = '';\n    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasksCaller);\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/dispcaller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mystyles.css */ \"./src/mystyles.css\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _modules_check_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/check.js */ \"./src/modules/check.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dragmodule.js */ \"./src/modules/dragmodule.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _modules_update_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/update.js */ \"./src/modules/update.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst addButton = document.querySelector('.fa-arrow-right-to-bracket');\nconst clear = document.querySelector('.clear');\nconst wrapper = document.querySelector('.wrapper');\nconst section2 = document.querySelector('.prompt');\nconst btn1 = document.querySelector('#btn1');\nconst btn2 = document.querySelector('#btn2');\nconst btn3 = document.querySelector('#btn3');\nconst name = document.querySelector('#name');\nconst username = document.querySelector('#username');\nconst warning = document.querySelector('.warning');\nconst warning2 = document.querySelector('.warning2');\nconst initialMax = document.querySelector('.initial-max');\nconst userNumber = document.querySelector('#user-number');\n\naddButton.addEventListener('click', _modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nclear.addEventListener('click', _modules_check_js__WEBPACK_IMPORTED_MODULE_3__.clearer);\ndocument.addEventListener('dragover', (event) => (0,_modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__.dragOver)(event));\ndocument.addEventListener('dragstart', (e) => (0,_modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__.dragStart)(e));\ndocument.addEventListener('drop', (event) => (0,_modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__.drop)(event));\ndocument.addEventListener('click', (e) => {\n  let collect = e.target.classList;\n  const { id } = e.target;\n  collect = Array.from(collect);\n  if (collect.includes('description')) {\n    const description = e.target;\n    description.addEventListener('input', (ev) => {\n      (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(ev.target.textContent, id);\n    });\n  } else if (collect.includes('fa-trash-can')) {\n    (0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id);\n  } else if (collect.includes('check')) {\n    const check = e.target;\n    check.addEventListener('change', () => {\n      (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_3__.status)(id - 1, check);\n    });\n  }\n});\n\nwindow.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nconst yes = (a) => {\n  name.innerHTML = `Welcome Back ${a}!`;\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  if ((tasks.length > 0)) {\n    tasks.forEach((fresh) => {\n      fresh.completed = false;\n    });\n    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks);\n  } else {\n    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';\n    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.domTasks.classList.add('task-less');\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(0);\n  }\n};\n\nbtn1.addEventListener('click', () => {\n  if (username.value !== '') {\n    localStorage.setItem('name', JSON.stringify(username.value));\n  }\n  section2.classList.add('hidden');\n  wrapper.style.display = 'block';\n  const b = JSON.parse(localStorage.getItem('name'));\n  yes(b);\n});\n\nbtn3.addEventListener('click', () => {\n  const number = userNumber.value;\n  if (number === '') {\n    warning2.innerHTML = '<p>Please enter a valid number</p>';\n    return;\n  }\n  initialMax.style.display = 'none';\n  wrapper.style.display = 'block';\n  name.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('name'))}!`;\n  _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';\n  _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.domTasks.classList.add('task-less');\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(0, number);\n  localStorage.setItem('tasks', JSON.stringify([]));\n});\n\nbtn2.addEventListener('click', () => {\n  if (username.value !== '') {\n    localStorage.setItem('name', JSON.stringify(username.value));\n    warning.innerHTML = '';\n    section2.classList.add('hidden');\n    wrapper.style.display = 'none';\n    initialMax.style.display = 'flex';\n    initialMax.scrollIntoView({ behavior: 'smooth' });\n  } else {\n    warning.innerHTML = '<p>Please enter a name for the new list</p>';\n  }\n});\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet input;\nconst maximum = (a, b) => {\n  if (b) {\n    input = b;\n    return b;\n  }\n  if (input !== undefined && a < input) {\n    return input;\n  }\n  if (a === 0) {\n    a += 5;\n    return a;\n  }\n  switch (a % 5) {\n    case 1:\n      a += 4;\n      break;\n    case 2:\n      a += 3;\n      break;\n    case 3:\n      a += 2;\n      break;\n    case 4:\n      a += 1;\n      break;\n\n    default:\n      a += 5;\n      break;\n  }\n  return a;\n};\n\nconst slot = document.querySelector('header>p');\n\nconst slotFunction = (a, b) => {\n  const maxima = maximum(Number(a), Number(b));\n  slot.innerHTML = '';\n  slot.innerHTML += `<span> ${a} of ${maxima} slots </span><meter optimum=\"${Math.floor(0.5 * maxima)}\" high=\"${Math.floor(0.7 * maxima)}\" max=\"${maxima}\" value=\"${a}\"></meter>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slotFunction);\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/logic.js?");

/***/ }),

/***/ "./src/modules/check.js":
/*!******************************!*\
  !*** ./src/modules/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearer\": () => (/* binding */ clearer),\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _dispcaller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispcaller.js */ \"./src/dispcaller.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic.js */ \"./src/logic.js\");\n\n\n\n\nconst status = (index, a) => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n\n  if (a.checked) tasks[index].completed = true;\n  else tasks[index].completed = false;\n  (0,_dispcaller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks, index);\n};\n\nconst clearer = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n\n  if (tasks.length === 0) return;\n  if (tasks.length === 1) {\n    if (tasks[0].completed === true) {\n      tasks.pop();\n      (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.store)(tasks);\n      (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0);\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.classList.add('task-less');\n    }\n  } else {\n    const filtered = tasks.filter((verify) => verify.completed === false);\n    (0,_dispcaller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filtered);\n  }\n};\n\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/check.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic.js */ \"./src/logic.js\");\n/* harmony import */ var _dispcaller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispcaller.js */ \"./src/dispcaller.js\");\n\n\n\n\nconst deleter = (a) => {\n  a = Number(a);\n  let tasks = JSON.parse(localStorage.getItem('tasks'));\n\n  if (tasks.length === 1) {\n    tasks = [];\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.store)(tasks);\n    (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0);\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.classList.add('task-less');\n  } else {\n    const newTasks = tasks.filter((elem) => elem.index - 1 !== a);\n    (0,_dispcaller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newTasks);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleter);\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic.js */ \"./src/logic.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n\n\n\nconst displayTasks = (arr) => {\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr.length);\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.domTasks.classList.remove('task-less');\n  arr.forEach((task, i, all) => {\n    const taskPane = document.createElement('div');\n    taskPane.className = 'task-pane';\n    taskPane.setAttribute('draggable', 'true');\n    taskPane.setAttribute('id', `${task.index}`);\n\n    const topLeft = document.createElement('div');\n    topLeft.className = 'top-left';\n    topLeft.setAttribute('id', `${task.index}`);\n\n    const topRight = document.createElement('div');\n    topRight.className = 'top-right';\n    topRight.setAttribute('id', `${task.index}`);\n\n    const leftRight = document.createElement('div');\n    leftRight.className = 'left-right';\n    leftRight.setAttribute('id', `${task.index}`);\n\n    if (i % 2 === 0) leftRight.classList.add('dark');\n\n    const check = document.createElement('input');\n    check.className = 'check';\n    check.setAttribute('type', 'checkbox');\n    check.setAttribute('id', `${task.index}`);\n\n    const description = document.createElement('p');\n    description.textContent = task.description;\n    description.className = 'description';\n    description.setAttribute('id', `${task.index}`);\n    description.setAttribute('contenteditable', 'true');\n\n    if (task.completed === true) {\n      check.setAttribute('checked', 'true');\n      description.classList.add('text');\n    }\n\n    const trash = document.createElement('i');\n    trash.className = 'fa-solid fa-trash-can fa-beat';\n    trash.setAttribute('id', `${i}`);\n\n    const anchor = document.createElement('i');\n    anchor.className = 'fa-solid fa-ellipsis-vertical';\n    anchor.setAttribute('id', `${task.index}`);\n\n    topLeft.append(check, description, trash);\n    topRight.appendChild(anchor);\n    leftRight.append(topLeft, topRight);\n\n    taskPane.append(leftRight);\n\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.domTasks.appendChild(taskPane);\n\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)(all);\n\n    topLeft.addEventListener('mouseenter', () => {\n      trash.style.display = 'block';\n      anchor.style.display = 'none';\n    });\n\n    topLeft.addEventListener('mouseleave', () => {\n      trash.style.display = 'none';\n      anchor.style.display = 'block';\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/dragmodule.js":
/*!***********************************!*\
  !*** ./src/modules/dragmodule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n/* harmony import */ var _dispcaller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dispcaller.js */ \"./src/dispcaller.js\");\n\n\nlet startId; let dropId;\n\nfunction dragStart(a) {\n  startId = Number(a.target.id) - 1;\n}\n\nfunction dragOver(b) {\n  b.preventDefault();\n}\n\nfunction drop(c) {\n  if (startId < 0) return;\n\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  dropId = Number(c.target.id) - 1;\n  const insert = tasks[startId];\n  if (startId > dropId) {\n    if (dropId === 0) tasks.unshift(insert);\n    else tasks.splice(dropId, 0, insert);\n    tasks.splice(startId + 1, 1);\n  } else {\n    tasks.splice(dropId + 1, 0, insert);\n    tasks.splice(startId, 1);\n  }\n  (0,_dispcaller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks);\n}\n\n\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/dragmodule.js?");

/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"abnormal\": () => (/* binding */ abnormal),\n/* harmony export */   \"domTasks\": () => (/* binding */ domTasks),\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst domTasks = document.querySelector('.all-activities');\nconst todo = document.querySelector('.todo');\nconst abnormal = document.querySelector('.abnormal');\n\nconst store = (a) => {\n  localStorage.setItem('tasks', JSON.stringify(a));\n};\n\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/local-storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\n\nconst addTask = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n\n  if (_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.todo.value) {\n    const test = tasks.some((tested) => {\n      if (tested.description.toLowerCase() === _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.todo.value.toLowerCase()) return true;\n      return false;\n    });\n    if (test) {\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'block';\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.innerHTML = 'Sorry! You can\\'t add the same task twice';\n    } else {\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'none';\n      let newText = _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.todo.value;\n      const firstPart = newText.trim().split('').slice(0, 1).join('')\n        .toUpperCase();\n      const secondPart = newText.trim().split('').slice(1).join('')\n        .toLowerCase();\n      newText = firstPart.concat(secondPart);\n      const task = {\n        description: newText,\n        index: tasks.length + 1,\n        completed: false,\n      };\n      tasks.push(task);\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.todo.value = '';\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = '';\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks);\n    }\n  } else {\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'block';\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.innerHTML = 'Sorry! You can\\'t add an empty task';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n\n\nconst update = (item, number) => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n\n  const test = tasks.some((tester) => {\n    if (tester.description.toLowerCase() === item.toLowerCase()) return true;\n    return false;\n  });\n  if (test) {\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'block';\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.innerHTML = 'Sorry! You can\\'t add the same task twice';\n  } else {\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'none';\n    tasks[number - 1].description = item;\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.store)(tasks);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (update);\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/update.js?");

/***/ }),

/***/ "./src/assets/AnimatedShape.svg":
/*!**************************************!*\
  !*** ./src/assets/AnimatedShape.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5033b09997692dedd66b.svg\";\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/assets/AnimatedShape.svg?");

/***/ }),

/***/ "./src/assets/IconGrid.svg":
/*!*********************************!*\
  !*** ./src/assets/IconGrid.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ffa4c61f6a60e12754f.svg\";\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/assets/IconGrid.svg?");

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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;