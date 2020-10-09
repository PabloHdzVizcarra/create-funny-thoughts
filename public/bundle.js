/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/addAlerts.js":
/*!************************************!*\
  !*** ./src/functions/addAlerts.js ***!
  \************************************/
/*! exports provided: addAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAlerts\", function() { return addAlerts; });\nvar addAlerts = function addAlerts(typeAlert, message) {\n  var idElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-messages';\n  var divAlerts = document.querySelector(idElement);\n  divAlerts.insertAdjacentHTML('afterBegin', \"<div class=\\\"alert alert-\".concat(typeAlert, \" alert-dismissible fade show\\\" role=\\\"alert\\\">\\n      <strong>Info </strong>\").concat(message, \" \\n      <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\">\\n        <span aria-hidden=\\\"true\\\">&times;</span>\\n      </button>\\n    </div>\"));\n};\n\n//# sourceURL=webpack:///./src/functions/addAlerts.js?");

/***/ }),

/***/ "./src/functions/addNewTought.js":
/*!***************************************!*\
  !*** ./src/functions/addNewTought.js ***!
  \***************************************/
/*! exports provided: addNewTought */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewTought\", function() { return addNewTought; });\nvar addNewTought = function addNewTought(data) {\n  var idElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-toughts-area';\n  console.log('Agregando tarea a la pantalla');\n  var tought = data.ops[0];\n  var div = document.querySelector(idElement);\n  div.insertAdjacentHTML('afterbegin', \"<div class=\\\"card w-50\\\">\\n        <div class=\\\"card-body\\\">\\n          <h5 class=\\\"card-title\\\">\".concat(tought.title, \"</h5>\\n          <p class=\\\"card-text\\\">\").concat(tought.tought, \"</p>\\n        </div>\\n      </div>\"));\n};\n\n//# sourceURL=webpack:///./src/functions/addNewTought.js?");

/***/ }),

/***/ "./src/functions/createThougths.js":
/*!*****************************************!*\
  !*** ./src/functions/createThougths.js ***!
  \*****************************************/
/*! exports provided: createThougths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createThougths\", function() { return createThougths; });\nvar createThougths = function createThougths(array) {\n  var idElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-toughts-area';\n  var div = document.querySelector(idElement);\n\n  if (array.length === 0) {\n    div.insertAdjacentHTML('afterbegin', \"<p>No tienes pensamientos, puedes comenzar agregando algunos</p>\");\n  }\n\n  array.map(function (tought) {\n    div.insertAdjacentHTML('afterbegin', \"<div class=\\\"card w-50\\\">\\n        <div class=\\\"card-body\\\">\\n          <h5 class=\\\"card-title\\\">\".concat(tought.title, \"</h5>\\n          <p class=\\\"card-text\\\">\").concat(tought.tought, \"</p>\\n        </div>\\n      </div>\"));\n  });\n};\n\n//# sourceURL=webpack:///./src/functions/createThougths.js?");

/***/ }),

/***/ "./src/functions/deleteInputs.js":
/*!***************************************!*\
  !*** ./src/functions/deleteInputs.js ***!
  \***************************************/
/*! exports provided: deleteInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteInputs\", function() { return deleteInputs; });\nvar deleteInputs = function deleteInputs(idElement) {\n  var form = document.querySelector(idElement);\n  var inputs = Array.from(form.getElementsByTagName(\"input\"));\n  inputs.map(function (input) {\n    return input.value = '';\n  });\n};\n\n//# sourceURL=webpack:///./src/functions/deleteInputs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_addAlerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/addAlerts */ \"./src/functions/addAlerts.js\");\n/* harmony import */ var _functions_addNewTought__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/addNewTought */ \"./src/functions/addNewTought.js\");\n/* harmony import */ var _functions_createThougths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/createThougths */ \"./src/functions/createThougths.js\");\n/* harmony import */ var _functions_deleteInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/deleteInputs */ \"./src/functions/deleteInputs.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  fetch('http://localhost:3000/api', {\n    method: 'GET'\n  }).then(function (res) {\n    return res.json();\n  }).then(_functions_createThougths__WEBPACK_IMPORTED_MODULE_2__[\"createThougths\"])[\"catch\"](console.log);\n  var form = document.querySelector('.js-form');\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var inputs = Array.from(form.getElementsByTagName(\"input\"));\n    var values = inputs.map(function (input) {\n      return input.value;\n    });\n    var dataObj = {\n      title: values[0],\n      tought: values[1]\n    };\n    fetch('/', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(dataObj)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      console.log(data);\n      Object(_functions_deleteInputs__WEBPACK_IMPORTED_MODULE_3__[\"deleteInputs\"])('.js-form');\n      Object(_functions_addAlerts__WEBPACK_IMPORTED_MODULE_0__[\"addAlerts\"])('success', 'Pensamiento guardado con exito');\n      Object(_functions_addNewTought__WEBPACK_IMPORTED_MODULE_1__[\"addNewTought\"])(data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n      Object(_functions_addAlerts__WEBPACK_IMPORTED_MODULE_0__[\"addAlerts\"])('danger', 'Ha ocurrido un error intenta de nuevo');\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });