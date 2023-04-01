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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: linear-gradient(45deg, rgba(194, 128, 48, 0.8), rgb(255, 228, 196), rgba(194, 128, 48, 0.8));\\r\\n  background-repeat: no-repeat;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  height: auto;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  padding: 3rem 1rem 3rem 1rem;\\r\\n  width: 50%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: #fff;\\r\\n  padding: 1rem 1rem 1rem 0.5rem;\\r\\n  color: rgba(56, 53, 53, 0.9);\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  width: 100%;\\r\\n  height: 3rem;\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.todo:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  padding: 0.5rem 1rem 0.5rem 0.5rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.task-pane {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\\r\\n.top-left {\\r\\n  flex-basis: 95%;\\r\\n  display: flex;\\r\\n  padding: 0.4rem;\\r\\n  align-items: center;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.top-left:hover {\\r\\n  box-shadow: 0 0 3px 3px;\\r\\n}\\r\\n\\r\\n.top-right {\\r\\n  flex-basis: 5%;\\r\\n  text-align: center;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.left-right {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.all-activities {\\r\\n  width: 100%;\\r\\n  border: 2px solid white;\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  flex-basis: 93%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  word-wrap: break-word;\\r\\n}\\r\\n\\r\\n.check {\\r\\n  margin-right: 0.7rem;\\r\\n  flex-basis: 7%;\\r\\n  width: 1.3rem;\\r\\n  height: 1.3rem;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical {\\r\\n  color: rgb(252, 143, 0);\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical:hover {\\r\\n  color: rgb(15, 15, 14);\\r\\n}\\r\\n\\r\\n.fa-trash-can {\\r\\n  cursor: pointer;\\r\\n  display: none;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  background-color: rgba(43, 43, 40, 0.5);\\r\\n  padding: 1.2rem;\\r\\n  text-align: center;\\r\\n  color: rgb(243, 240, 240);\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.clear:hover {\\r\\n  cursor: pointer;\\r\\n  box-shadow: 3px 3px 3px 3px white;\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.fa-beat {\\r\\n  cursor: pointer;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.abnormal {\\r\\n  display: none;\\r\\n  background-color: white;\\r\\n  color: red;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.dark {\\r\\n  background-color: rgba(169, 169, 169, 0.3);\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 375px) and (max-width: 768px) {\\r\\n  .wrapper {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/mystyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./node_modules/css-loader/dist/runtime/api.js?");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"abnormal\": () => (/* binding */ abnormal),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"displayTasksCaller\": () => (/* binding */ displayTasksCaller),\n/* harmony export */   \"domTasks\": () => (/* binding */ domTasks),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _mystyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mystyles.css */ \"./src/mystyles.css\");\n/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/update.js */ \"./src/modules/update.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_check_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/check.js */ \"./src/modules/check.js\");\n/* harmony import */ var _modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dragmodule.js */ \"./src/modules/dragmodule.js\");\n/* eslint-disable  import/no-cycle, import/no-mutable-exports */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addButton = document.querySelector('.fa-arrow-right-to-bracket');\r\nconst todo = document.querySelector('.todo');\r\nconst abnormal = document.querySelector('.abnormal');\r\nconst domTasks = document.querySelector('.all-activities');\r\nconst clear = document.querySelector('.clear');\r\n\r\nlet tasks = [];\r\n\r\nlet desc; let checkBox;\r\n\r\nconst displayTasks = () => {\r\n  tasks.forEach((task, i) => {\r\n    const taskPane = document.createElement('div');\r\n    taskPane.className = 'task-pane';\r\n    taskPane.setAttribute('draggable', 'true');\r\n    taskPane.setAttribute('id', `${task.index}`);\r\n\r\n    const topLeft = document.createElement('div');\r\n    topLeft.className = 'top-left';\r\n    topLeft.setAttribute('id', `${task.index}`);\r\n\r\n    const topRight = document.createElement('div');\r\n    topRight.className = 'top-right';\r\n    topRight.setAttribute('id', `${task.index}`);\r\n\r\n    const leftRight = document.createElement('div');\r\n    leftRight.className = 'left-right';\r\n    leftRight.setAttribute('id', `${task.index}`);\r\n\r\n    if (i % 2 === 0) leftRight.classList.add('dark');\r\n\r\n    const check = document.createElement('input');\r\n    check.className = 'check';\r\n    check.setAttribute('type', 'checkbox');\r\n    check.setAttribute('id', `${task.index}`);\r\n\r\n    const description = document.createElement('p');\r\n    description.textContent = task.description;\r\n    description.className = 'description';\r\n    description.setAttribute('id', `${task.index}`);\r\n    description.setAttribute('contenteditable', 'true');\r\n\r\n    const trash = document.createElement('i');\r\n    trash.className = 'fa-solid fa-trash-can fa-beat';\r\n\r\n    const anchor = document.createElement('i');\r\n    anchor.className = 'fa-solid fa-ellipsis-vertical';\r\n    anchor.setAttribute('id', `${task.index}`);\r\n\r\n    topLeft.append(check, description, trash);\r\n    topRight.appendChild(anchor);\r\n    leftRight.append(topLeft, topRight);\r\n\r\n    const ruler = document.createElement('hr');\r\n\r\n    taskPane.append(leftRight, ruler);\r\n\r\n    domTasks.appendChild(taskPane);\r\n\r\n    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)();\r\n\r\n    topLeft.addEventListener('mouseenter', () => {\r\n      trash.style.display = 'block';\r\n      anchor.style.display = 'none';\r\n    });\r\n\r\n    topLeft.addEventListener('mouseleave', () => {\r\n      trash.style.display = 'none';\r\n      anchor.style.display = 'block';\r\n    });\r\n\r\n    description.addEventListener('input', () => {\r\n      desc = description.textContent;\r\n      (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_3__.update)(desc, i);\r\n    });\r\n\r\n    trash.addEventListener('click', () => {\r\n      (0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_4__.deleter)(i);\r\n    });\r\n\r\n    check.addEventListener('change', () => {\r\n      checkBox = check;\r\n      (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_5__.status)(i, checkBox);\r\n    });\r\n\r\n    taskPane.addEventListener('dragstart', (event) => {\r\n      (0,_modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__.dragStart)(event);\r\n    });\r\n\r\n    taskPane.addEventListener('dragover', (ev) => {\r\n      (0,_modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__.dragOver)(ev);\r\n    });\r\n\r\n    taskPane.addEventListener('drop', (eve) => {\r\n      (0,_modules_dragmodule_js__WEBPACK_IMPORTED_MODULE_6__.drop)(eve);\r\n    });\r\n  });\r\n};\r\n\r\naddButton.addEventListener('click', _modules_task_js__WEBPACK_IMPORTED_MODULE_2__.addTask);\r\n\r\nwindow.addEventListener('keypress', (event) => {\r\n  if (event.key === 'Enter') (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_2__.addTask)();\r\n});\r\n\r\nwindow.onload = () => {\r\n  tasks = JSON.parse(localStorage.getItem('tasks'));\r\n  if (tasks) {\r\n    tasks.forEach((fresh) => {\r\n      fresh.completed = false;\r\n    });\r\n    displayTasks();\r\n  } else {\r\n    tasks = [];\r\n  }\r\n};\r\n\r\nclear.addEventListener('click', _modules_check_js__WEBPACK_IMPORTED_MODULE_5__.clearer);\r\n\r\nconst displayTasksCaller = (gem) => {\r\n  if (gem.length === 0) {\r\n    tasks = [];\r\n    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)();\r\n    domTasks.innerHTML = '';\r\n  } else {\r\n    tasks = gem.map((mapped, i) => ({\r\n      description: `${mapped.description}`,\r\n      index: `${i + 1}`,\r\n      completed: false,\r\n    }));\r\n    domTasks.innerHTML = '';\r\n    displayTasks();\r\n  }\r\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/index.js?");

/***/ }),

/***/ "./src/modules/check.js":
/*!******************************!*\
  !*** ./src/modules/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearer\": () => (/* binding */ clearer),\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* eslint-disable  import/no-cycle */\n\n\n\nconst status = (index, a) => {\n  if (a.checked) {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = true;\n  } else {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = false;\n  }\n  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n};\n\nconst clearer = () => {\n  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length === 0) return;\n  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length === 1) {\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[0].completed === true) {\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.pop();\n      (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = '';\n    }\n  } else {\n    const filtered = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((verify) => verify.completed === false);\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayTasksCaller)(filtered);\n  }\n};\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/check.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleter\": () => (/* binding */ deleter)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */\n\n\n\n\nconst deleter = (a) => {\n  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length === 1) {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.pop();\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = '';\n  } else {\n    const newTasks = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((elem) => elem.index - 1 !== a);\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayTasksCaller)(newTasks);\n  }\n};\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/dragmodule.js":
/*!***********************************!*\
  !*** ./src/modules/dragmodule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* eslint-disable  import/no-cycle */\r\n\r\n\r\n\r\nlet startId; let dropId;\r\n\r\nfunction dragStart(a) {\r\n  startId = Number(a.target.id) - 1;\r\n}\r\n\r\nfunction dragOver(b) {\r\n  b.preventDefault();\r\n}\r\n\r\nfunction drop(c) {\r\n  dropId = Number(c.target.id) - 1;\r\n  const insert = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[startId];\r\n  if (startId > dropId) {\r\n    if (dropId === 0) _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.unshift(insert);\r\n    else _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(dropId, 0, insert);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(startId + 1, 1);\r\n  } else {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(dropId + 1, 0, insert);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(startId, 1);\r\n  }\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayTasksCaller)(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks);\r\n}\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/dragmodule.js?");

/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/*eslint-disable*/\r\n\r\n\r\nconst store = () => {\r\n  localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/local-storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */\n\n\n\nconst addTask = () => {\n  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.todo.value) {\n    const test = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.some((tested) => {\n      if (tested.description.toLowerCase() === _index_js__WEBPACK_IMPORTED_MODULE_0__.todo.value.toLowerCase()) return true;\n      return false;\n    });\n    if (test) {\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'block';\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.innerHTML = 'Sorry! You can\\'t add the same task twice';\n    } else {\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'none';\n      const task = {\n        description: _index_js__WEBPACK_IMPORTED_MODULE_0__.todo.value,\n        index: _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length + 1,\n        completed: false,\n      };\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(task);\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.todo.value = '';\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.domTasks.innerHTML = '';\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\n    }\n  } else {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'block';\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.innerHTML = 'Sorry! You can\\'t add an empty task';\n  }\n};\n\n\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"update\": () => (/* binding */ update)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */\n\n\n\n\nconst update = (item, number) => {\n  const test = _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.some((tester) => {\n    if (tester.description.toLowerCase() === item.toLowerCase()) return true;\n    return false;\n  });\n  if (test) {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'block';\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.innerHTML = 'Sorry! You can\\'t add the same task twice';\n  } else {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.abnormal.style.display = 'none';\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[number].description = item;\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n  }\n};\n\n//# sourceURL=webpack://todolist-webpack-es6/./src/modules/update.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;