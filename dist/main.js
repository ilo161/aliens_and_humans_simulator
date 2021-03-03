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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/aliens/ships/06-Saturno.png":
/*!************************************************!*\
  !*** ./src/images/aliens/ships/06-Saturno.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/06-Saturno.png");

/***/ }),

/***/ "./src/images/aliens/ships/08-Netuno.png":
/*!***********************************************!*\
  !*** ./src/images/aliens/ships/08-Netuno.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/08-Netuno.png");

/***/ }),

/***/ "./src/images/aliens/ships/09-Pluto.png":
/*!**********************************************!*\
  !*** ./src/images/aliens/ships/09-Pluto.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/09-Pluto.png");

/***/ }),

/***/ "./src/images/community/pyramids/00red_pyramid.png":
/*!*********************************************************!*\
  !*** ./src/images/community/pyramids/00red_pyramid.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/00red_pyramid.png");

/***/ }),

/***/ "./src/images/community/pyramids/01golden_pyramid.png":
/*!************************************************************!*\
  !*** ./src/images/community/pyramids/01golden_pyramid.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/01golden_pyramid.png");

/***/ }),

/***/ "./src/images/community/pyramids/02light_pyramid.png":
/*!***********************************************************!*\
  !*** ./src/images/community/pyramids/02light_pyramid.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/02light_pyramid.png");

/***/ }),

/***/ "./src/images/h_progress_bars/H_BarBackground.png":
/*!********************************************************!*\
  !*** ./src/images/h_progress_bars/H_BarBackground.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/H_BarBackground.png");

/***/ }),

/***/ "./src/images/h_progress_bars/H_BlueBar.png":
/*!**************************************************!*\
  !*** ./src/images/h_progress_bars/H_BlueBar.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/H_BlueBar.png");

/***/ }),

/***/ "./src/images/h_progress_bars/H_GreenBar.png":
/*!***************************************************!*\
  !*** ./src/images/h_progress_bars/H_GreenBar.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/H_GreenBar.png");

/***/ }),

/***/ "./src/images/h_progress_bars/H_RedBar.png":
/*!*************************************************!*\
  !*** ./src/images/h_progress_bars/H_RedBar.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/H_RedBar.png");

/***/ }),

/***/ "./src/images/h_progress_bars/H_YellowBar.png":
/*!****************************************************!*\
  !*** ./src/images/h_progress_bars/H_YellowBar.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/H_YellowBar.png");

/***/ }),

/***/ "./src/images/terrain_grass/grass_mix_d.jpg":
/*!**************************************************!*\
  !*** ./src/images/terrain_grass/grass_mix_d.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/grass_mix_d.jpg");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BarBackground.png":
/*!********************************************************!*\
  !*** ./src/images/v_progress_bars/V_BarBackground.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BarBackground.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar10.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar10.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar10.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar100.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar100.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar100.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar20.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar20.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar20.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar30.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar30.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar30.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar40.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar40.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar40.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar50.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar50.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar50.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar60.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar60.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar60.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar70.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar70.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar70.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar80.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar80.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar80.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_BlueBar90.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar90.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar90.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar10.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar10.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar10.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar100.png":
/*!******************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar100.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar100.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar20.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar20.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar20.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar30.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar30.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar30.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar40.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar40.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar40.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar50.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar50.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar50.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar60.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar60.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar60.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar70.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar70.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar70.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar80.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar80.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar80.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar90.png":
/*!*****************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar90.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar90.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_canvas_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas_events.js */ "./src/scripts/canvas_events.js");
/* harmony import */ var _scripts_progressBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/progressBar.js */ "./src/scripts/progressBar.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_pointsSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/pointsSystem */ "./src/scripts/pointsSystem.js");




document.addEventListener("DOMContentLoaded", function () {
  var canvasHome = document.getElementById("canvas-home");
  var context = canvasHome.getContext('2d');
  Object(_scripts_canvas_events_js__WEBPACK_IMPORTED_MODULE_0__["canvasEvents"])(canvasHome, context);
  Object(_scripts_canvas_events_js__WEBPACK_IMPORTED_MODULE_0__["drawGrass"])(context); //draw Production progress bar
  // y is 375
  // const blankLeft = new progressBar(context, -34, 125, "blank", "v")
  // const blankLeft = new progressBar(context, -34, 115, "blank", "v");
  // const blankRight = new progressBar(context, 590, 115, "blank", "v");
  // debugger

  var makeResourcesId = setInterval(function () {
    Object(_scripts_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["spawnResources"])();
    Object(_scripts_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["drawResourcesText"])(context);
  }, 600);
  setInterval(function () {
    Object(_scripts_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["drawResourcesText"])(context);
  }, 250); // spawnResources();
  // drawResourcesText(context);
  // const greenBar = new progressBar(context, -34, 105, "green", "v", 10);
  // const blueBar = new progressBar(context, 590, 105, "blue", "v", 20);
  // const redBar = new progressBar(context, -34, 375, "blue", "v")
  // const greenBar = new progressBar(context, -34, 105, "green", "v", 90);
  // greenBar.increaseFill(100)
  // const yellowBar = new progressBar(context, 590, 375, "yellow", "v")
  //start points
  // const yellowBar = new progressBar(context, 590, 445, "yellow", "v")
  // const blueBar = new progressBar(context, 590, 105, "blue", "v", 20);
  // productionBar.drawBar(context)
  // productionBar.blankSprite.onload = () => {
  //     
  //     context.drawImage(productionBar.blankSprite, productionBar.startX, productionBar.startY);
  //     context.drawImage(productionBar.colorSprite, productionBar.startX, productionBar.startY);
  // }
  // productionBar.increaseFill()
  // progressBar(context, 626, 476, "blue")
  // summonAliens(context)
  // let choice = menu.options[menu.selectedIndex].value
  // let imgTest = new Image();
  // imgTest.src = "/src/images/terrain_grass/grass_mix_n.jpg"
  // imgTest.onload = () => {
  // for(let i = 0; i < 7; i++){
  //     for(let j = 0; j < 7; j++){
  // drawOnGrid(imgTest, i, j)
  // animateSquares(imgTest)
  //     }
  // }
  // drawOnGrid(imgTest, 6)
  // }
}); // let imgTest = new Image();
// imgTest.src = "/src/images/terrain_grass/grass_mix_n.jpg"
// imgTest.onload = () => {
//     drawOnGrid(imgTest, 0, 5)
//     // drawOnGrid(imgTest, 6)
// }
//  backgrounds()
// const backgrounds = require("./scripts/backgrounds.js")

/***/ }),

/***/ "./src/scripts/alien_ship.js":
/*!***********************************!*\
  !*** ./src/scripts/alien_ship.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AlienShip = /*#__PURE__*/function () {
  function AlienShip(context, filePath, xStart, yStart, scaleW, scaleH) {
    _classCallCheck(this, AlienShip);

    this.context = context;
    this.xStart = xStart;
    this.yStart = yStart;
    this.sprite = undefined;
    this.scaleW = scaleW;
    this.scaleH = scaleH;
    this.filePath = filePath;
    this.movements = [];
    this.moveIdx = 0;
    this.loadAlienShip = this.loadAlienShip.bind(this);
    this.lToRAnimate = this.lToRAnimate.bind(this);
    this.drawShip = this.drawShip.bind(this);
    this.loadAlienShip();
    this.moveSpanX();
  } // generate the movements for an alien Ship


  _createClass(AlienShip, [{
    key: "moveSpanX",
    value: function moveSpanX() {
      for (var i = 1; i < 23; i++) {
        this.movements.push({
          x: this.xStart * (i * 40),
          y: this.yStart
        });
      }
    }
  }, {
    key: "loadAlienShip",
    value: function loadAlienShip() {
      var alienSrc = this.filePath;
      this.sprite = new Image();
      this.sprite.src = alienSrc;
    }
  }, {
    key: "drawShip",
    value: function drawShip() {
      //works with set pixel
      // this.context.drawImage(this.sprite, 0, 0, 100, 100);
      // using animation
      // this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, 100, 100);
      //works with fraction
      // this.context.drawImage(this.sprite, 0, 0, (this.sprite.width / this.scaleW), (this.sprite.height / this.scaleH));
      this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH);
    }
  }, {
    key: "lToRAnimate",
    value: function lToRAnimate() {
      var x = 0; // console.log("ship moving")
      // console.log(this.movements[this.moveIdx])
      // this.context.clearRect(0,0,646,131)

      var topLeftX = this.movements[this.moveIdx].x;
      var topLeftY = this.movements[this.moveIdx].y; // console.log(topLeftX)
      // console.log(topLeftY)
      //this function removes previous drawing of alien ship.

      if (this.moveIdx > 0) {// this.context.clearRect((this.scaleW * this.moveIdx ) , topLeftY,(this.scaleW * (-1)), (this.scaleW * 1 ))
        //old but works
        // this.context.clearRect((topLeftX ) , topLeftY,(this.scaleW * (-1)), (this.scaleW * 1 ))
      } // this.context.clearRect(topLeftX, topLeftY,(this.scaleW * - 1), (this.scaleW * -1 ))
      // this.context.clearRect(300 , 300,(this.scaleW * (1)), (this.scaleW * -1 ))


      this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH);
      this.moveIdx++;
      if (this.moveIdx >= this.movements.length) this.moveIdx = 0; // if(x === 15){
      //     window.clearInterval()
      // }
      // }
    }
  }]);

  return AlienShip;
}();

/* harmony default export */ __webpack_exports__["default"] = (AlienShip);

/***/ }),

/***/ "./src/scripts/canvas_events.js":
/*!**************************************!*\
  !*** ./src/scripts/canvas_events.js ***!
  \**************************************/
/*! exports provided: canvasEvents, drawGrass, summonAliens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasEvents", function() { return canvasEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGrass", function() { return drawGrass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summonAliens", function() { return summonAliens; });
/* harmony import */ var _alien_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alien_ship */ "./src/scripts/alien_ship.js");
/* harmony import */ var _mothership__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mothership */ "./src/scripts/mothership.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
/* harmony import */ var _pointsSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pointsSystem */ "./src/scripts/pointsSystem.js");
/* harmony import */ var _images_community_pyramids_00red_pyramid_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/community/pyramids/00red_pyramid.png */ "./src/images/community/pyramids/00red_pyramid.png");
/* harmony import */ var _images_community_pyramids_01golden_pyramid_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/community/pyramids/01golden_pyramid.png */ "./src/images/community/pyramids/01golden_pyramid.png");
/* harmony import */ var _images_community_pyramids_02light_pyramid_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/community/pyramids/02light_pyramid.png */ "./src/images/community/pyramids/02light_pyramid.png");
/* harmony import */ var _images_terrain_grass_grass_mix_d_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/terrain_grass/grass_mix_d.jpg */ "./src/images/terrain_grass/grass_mix_d.jpg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.log("hello from canvas events");



 //works



 // import pyramid0 from "../images/community/pyramids/01pyramid.svg"

 // //ex: [3,4]

var currentGrid = undefined; // function buildAssetPath(imgSrc) {
//     return `./dist/${imgSrc}`;
// }
//This is a generic grass square preloaded with source path

var grassSquare = new Image();
grassSquare.src = Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_terrain_grass_grass_mix_d_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]); // const playerPoints = {
//     community: 0,
//     production: 0,
//     resources: 0
// }
// skeleton for onPlayerGrid
//{isPresent: false, cORp: "", klass: "", level: null}

var onPlayerGrid = buildPlayerState(); // console.log(onPlayerGrid)
// This function builds an object containing all the coordinates of the play grid and 
// stores state of what the player has played

function buildPlayerState() {
  var buildPlayerGrid = {};

  for (var i = 0; i < 4; i++) {
    buildPlayerGrid[i] = {};

    for (var j = 0; j < 7; j++) {
      buildPlayerGrid[i][j] = {
        isPresent: false,
        cORp: "",
        klass: "",
        level: null
      };
    }
  }

  return buildPlayerGrid;
} //skeleton
//{file: """, name:"", cBoost: 10, pBoost: 0, community:"", klass:"", index:#}


var civilization = {
  community: {
    parks: [],
    pyramids: [{
      file: Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_community_pyramids_00red_pyramid_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
      name: "redPyramid",
      boost: 10,
      cORp: "community",
      klass: "pyramids",
      index: 0
    }, {
      file: Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_community_pyramids_01golden_pyramid_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
      name: "goldenPyramid",
      boost: 20,
      cORp: "community",
      klass: "pyramids",
      index: 1
    }, {
      file: Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_community_pyramids_02light_pyramid_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
      name: "lightPyramid",
      boost: 30,
      cORp: "community",
      klass: "pyramids",
      index: 2
    }],
    ruins: [{}],
    meditationCircles: [],
    trees: []
  },
  production: {
    farms: [],
    buildings: [],
    houses: [],
    energy: {
      wind: [],
      solar: [],
      hydro: []
    }
  }
};
var canvasEvents = function canvasEvents(canvasHome, context) {
  //dropdown on right side
  var menuContainer = document.getElementsByClassName("drop-down-container")[0];
  var menu = document.getElementsByClassName("civilization-menu")[0];
  var playerAlert = document.getElementsByClassName("playerAlert")[0]; //When user clicks on grid it sets currentGrid. If they click outside, it returns
  // undefined

  canvasHome.addEventListener('mousedown', function (e) {
    currentGrid = getCoords(e);

    if (currentGrid && Array.from(menuContainer.classList).includes("hidden")) {
      //show dropdown if user clicks in playgrid
      menuContainer.classList.toggle("hidden");
      var len = menu.options.length;
      menu.setAttribute('size', len);
    } else if (currentGrid === undefined && !Array.from(menuContainer.classList).includes("hidden")) {
      //hide dropdown if user clicks outside play grid            
      menuContainer.classList.toggle("hidden");
    }

    console.log("currentGrid: ".concat(currentGrid));
  }); // When user selects from the drop down menu to place a sprite

  menu.addEventListener('change', function () {
    console.log(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"].resources); // Remove error message if there is one

    removePlayerAlert();

    if (_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"].resources < 20) {
      playerAlert.appendChild(generateErrorAlert("Every building costs 20 resources ... !"));
      menu.selectedIndex = null;
      return false;
    }

    Object(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["adjustResources"])(-20);
    var choiceStr = menu.options[menu.selectedIndex].value;
    var chosenBuilding = civilizationMenuSelect(choiceStr);
    var filePathBuild = chosenBuilding.file; //place sprite if not occupied

    if (!isGridOccupied()) {
      if (isInitialBuilding(chosenBuilding) === true) {
        parseImage(context, filePathBuild, currentGrid);
        occupyGrid(chosenBuilding);
        _pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"][chosenBuilding.cORp] += chosenBuilding.boost;
        debugger;
        Object(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["adjustPoints"])(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"].community, context);
        Object(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["adjustPoints"])(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"].community, context, "production");
      } else {
        playerAlert.appendChild(generateErrorAlert("That building is not the first of it's kind!"));
      }
    } else if (isGridOccupied()) {
      // Already a building on grid pos
      var x = currentGrid[0];
      var y = currentGrid[1];
      var objAtGridPos = onPlayerGrid[x][y];
      var maxIndexOfType = civilization[chosenBuilding.cORp][chosenBuilding.klass].length - 1; // Player tries to add the same building to the occupied grid

      if (chosenBuilding.klass === objAtGridPos.klass && chosenBuilding.index === objAtGridPos.level && maxIndexOfType != chosenBuilding.index) {
        playerAlert.appendChild(generateErrorAlert("That building is already there. Try upgrading!"));
      } else if (chosenBuilding.klass !== objAtGridPos.klass) {
        // Player tries to upgrade to a building of a different klass
        playerAlert.appendChild(generateErrorAlert("Try upgrading that structure to a higher level!"));
      } else if (chosenBuilding.klass === objAtGridPos.klass) {
        // building klass is a match
        // player has maxed out upgrade
        if (maxIndexOfType === objAtGridPos.level) {
          playerAlert.appendChild(generateErrorAlert("Max upgrade achieved!"));
        } else if (chosenBuilding.index === objAtGridPos.level + 1) {
          // player upgrades appropriately by 1 level
          //re-render grass first && remove previous building
          drawOnGrid(grassSquare, context, x, y, true);
          parseImage(context, filePathBuild, currentGrid);
          occupyGrid(chosenBuilding);
          _pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"][chosenBuilding.cORp] += chosenBuilding.boost;
        } else if (chosenBuilding.index < objAtGridPos.level) {
          playerAlert.appendChild(generateErrorAlert("Try upgrading, we must not regret our past decisions"));
        }
      }
    } // reset default of dropdown


    menu.selectedIndex = null;
    console.log(_pointsSystem__WEBPACK_IMPORTED_MODULE_3__["playerPoints"]);
  }); //Alert System

  var removePlayerAlert = function removePlayerAlert() {
    if (playerAlert.childElementCount > 0) {
      playerAlert.removeChild(playerAlert.childNodes[0]);
    }
  };

  var generateErrorAlert = function generateErrorAlert(errorMsg) {
    // Add Error message to the DOM -> "That building is already there. Try upgrading!"
    var ele = document.createElement('p');
    var text = document.createTextNode(errorMsg);
    ele.appendChild(text);
    ele.setAttribute('class', 'playerAlert');
    return ele;
  }; // menuContainer.classList.toggle("shrink")
  // 
  // menuContainer.classList.toggle("hidden")
  // console.log(canvasRect)
  // function onDown(e){
  //         cx = e.pageX;
  //         cy = e.pageY;
  //     // console.log(`X: ${cx}, Y: ${cy}`)
  // }


  var getCoords = function getCoords(e) {
    var canvasRect = canvasHome.getBoundingClientRect();
    var cx;
    var cy;
    var px = e.pageX;
    var py = e.pageY;
    cx = px - canvasRect.left;
    cy = py - canvasRect.top;
    console.log(canvasRect);
    console.log("-------");
    console.log(cx);
    console.log(cy);
    var col = Math.floor((cx - 22) / 86);
    var row = Math.floor((cy - 131) / 86); // current location console.log

    console.log("X: [".concat(row, ", Y: ").concat(col, "]")); //did click on game grid

    if (row >= 0 && row <= 3 && col >= 0 && col <= 6) {
      return [row, col];
    } //did NOT click on game grid
    else {
        return undefined;
      }
  };

  function seeGridOptions(row, col) {
    console.log(gameOptions[row][col]);
  }

  function gridClick(row, col) {}
};

var civilizationMenuSelect = function civilizationMenuSelect(selected) {
  var optionsArr = selected.split(",");
  var cORp = null;
  var klass = null;
  var index = null;

  var _optionsArr = _slicedToArray(optionsArr, 3);

  cORp = _optionsArr[0];
  klass = _optionsArr[1];
  index = _optionsArr[2];
  console.log("--"); // console.log(optionsArr);
  // console.log(civilization[cORp][klass][index]);

  return civilization[cORp][klass][index];
}; //function will draw grass


var drawGrass = function drawGrass(context) {
  var img1 = new Image();
  img1.src = Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_terrain_grass_grass_mix_d_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]);

  img1.onload = function () {
    drawRow(context, img1, 22, 131);
    drawRow(context, img1, 22, 217);
    drawRow(context, img1, 22, 303);
    drawRow(context, img1, 22, 389);
  };

  var drawRow = function drawRow(context, image, rowX, rowY) {
    for (var i = 0; i < 7; i++) {
      // context.drawImage(image, rowX, rowY, image.width /11.9, image.height / 11.9 )
      context.drawImage(image, rowX, rowY, 86, 86); // 

      rowX += 86;
    }
  };
};

var isGridOccupied = function isGridOccupied() {
  var x = currentGrid[0];
  var y = currentGrid[1];
  return onPlayerGrid[x][y].isPresent;
}; //update gameState with chosen Building


var occupyGrid = function occupyGrid(chosenBuilding) {
  var x = currentGrid[0];
  var y = currentGrid[1];
  onPlayerGrid[x][y].isPresent = true;
  onPlayerGrid[x][y].cORp = chosenBuilding.cORp;
  onPlayerGrid[x][y].klass = chosenBuilding.klass;
  onPlayerGrid[x][y].level = chosenBuilding.index;
  return onPlayerGrid[x][y];
};

var isInitialBuilding = function isInitialBuilding(chosenBuilding) {
  if (chosenBuilding.index === 0) return true;
  return false;
}; // to be MOVED LATER *!*!*!*!*!*!!*!*!*!*!*!*!*!*


var summonAliens = function summonAliens(context) {
  var motherShip = new _mothership__WEBPACK_IMPORTED_MODULE_1__["default"](context);
  motherShip.makeShips();
  var intId1 = setInterval(motherShip.army[0].lToRAnimate, 150);
  var intId2 = setInterval(motherShip.army[1].lToRAnimate, 150);
  var intId3 = setInterval(motherShip.army[2].lToRAnimate, 150);
  setTimeout(function () {
    return clearInterval(intId1);
  }, 2100);
  setTimeout(function () {
    return clearInterval(intId2);
  }, 2100);
  setTimeout(function () {
    return clearInterval(intId3);
  }, 2100);
};

var parseImage = function parseImage(context, filePath, currentGrid) {
  var image = new Image();
  image.src = filePath;
  var x = currentGrid[0];
  var y = currentGrid[1];

  image.onload = function () {
    drawOnGrid(image, context, x, y);
  };
}; // FN will draw an image at the appropriate spot on the grid


var drawOnGrid = function drawOnGrid(image, context, gridX, gridY, clearRectBoolean) {
  console.log("draw on grid");
  var offsetX = 22;
  var offsetY = 131;
  var topLeftX = 86;
  var topLeftY = 86;

  if (gridX === 0 && gridY === 0) {
    // context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH )
    //works and original func
    // context.drawImage(image, offsetX, offsetY, image.width /11.9, image.height / 11.9 )
    if (clearRectBoolean) {
      context.clearRect(offsetX, offsetY, 86, 86);
      context.drawImage(image, offsetX, offsetY, 86, 86);
    } else {
      context.drawImage(image, offsetX, offsetY, 86, 86);
    }
  } else if (gridX === 0 && gridY > 0) {
    //original
    // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
    if (clearRectBoolean) {
      // context.clearRect(offsetX, offsetY, 86, 86)
      // context.drawImage(image, offsetX, offsetY, 86, 86)
      context.clearRect(topLeftX * gridY + offsetX, topLeftY * gridX + offsetY, 86, 86);
      context.drawImage(image, topLeftX * gridY + offsetX, topLeftY * gridX + offsetY, 86, 86);
    } else {
      context.drawImage(image, topLeftX * gridY + offsetX, offsetY, 86, 86);
    }
  } else {
    // 
    //original
    // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
    if (clearRectBoolean) {
      //original
      // context.clearRect(offsetX, offsetY, 86, 86)
      // context.drawImage(image, offsetX, offsetY, 86, 86)
      context.clearRect(topLeftX * gridY + offsetX, topLeftY * gridX + offsetY, 86, 86);
      context.drawImage(image, topLeftX * gridY + offsetX, topLeftY * gridX + offsetY, 86, 86);
    } else {
      context.drawImage(image, topLeftX * gridY + offsetX, topLeftY * gridX + offsetY, 86, 86);
    }
  }
}; // export const animateSquares = (image, cb) => {
//     context.clearRect(0, 0, 646, 505)
//     for(let i = 0; i < 4; i++){
//         for(let j = 0; j < 7; j++){
//             drawOnGrid(image, i, j)
//         }
//     }
// }
// export const loadAlienShip = () => {
//     // const alienSrc = "/src/images/aliens/ships/08-Netuno.png";
//     // const alienShip = new Image();
//     // alienShip.src = alienSrc;
//     // alienShip.onload( () => {
//     //     return true
//     // })
// }
// export default canvasEvents;

/***/ }),

/***/ "./src/scripts/mothership.js":
/*!***********************************!*\
  !*** ./src/scripts/mothership.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
/* harmony import */ var _alien_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alien_ship */ "./src/scripts/alien_ship.js");
/* harmony import */ var _images_aliens_ships_08_Netuno_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/aliens/ships/08-Netuno.png */ "./src/images/aliens/ships/08-Netuno.png");
/* harmony import */ var _images_aliens_ships_06_Saturno_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/aliens/ships/06-Saturno.png */ "./src/images/aliens/ships/06-Saturno.png");
/* harmony import */ var _images_aliens_ships_09_Pluto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/aliens/ships/09-Pluto.png */ "./src/images/aliens/ships/09-Pluto.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var MotherShip = /*#__PURE__*/function () {
  function MotherShip(context) {
    _classCallCheck(this, MotherShip);

    this.context = context;
    this.army = [];
  }

  _createClass(MotherShip, [{
    key: "makeShips",
    value: function makeShips() {
      var shipNum = this.army.length;
      var shipFiles = [Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["buildAssetPath"])(_images_aliens_ships_08_Netuno_png__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["buildAssetPath"])(_images_aliens_ships_06_Saturno_png__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["buildAssetPath"])(_images_aliens_ships_09_Pluto_png__WEBPACK_IMPORTED_MODULE_4__["default"])]; // constructor(context, filePath, xStart, yStart, scaleW, scaleH){

      while (this.army.length < 3) {
        shipNum = this.army.length;
        var yPos = undefined;

        if (shipNum === 0) {
          yPos = shipNum;
        } else {
          yPos = shipNum * 40;
        }

        var alienSrc = shipFiles[shipNum];
        var alienShip = new _alien_ship__WEBPACK_IMPORTED_MODULE_1__["default"](this.context, alienSrc, 1, yPos, 40, 40);
        this.army.push(alienShip);
      }
    }
  }]);

  return MotherShip;
}();

/* harmony default export */ __webpack_exports__["default"] = (MotherShip);

/***/ }),

/***/ "./src/scripts/pointsSystem.js":
/*!*************************************!*\
  !*** ./src/scripts/pointsSystem.js ***!
  \*************************************/
/*! exports provided: playerPoints, adjustPoints, spawnResources, adjustResources, drawResourcesText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerPoints", function() { return playerPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustPoints", function() { return adjustPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnResources", function() { return spawnResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustResources", function() { return adjustResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawResourcesText", function() { return drawResourcesText; });
/* harmony import */ var _progressBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressBar.js */ "./src/scripts/progressBar.js");
 // contains money, and current build points for player throughout the game

var playerPoints = {
  community: 0,
  production: 0,
  resources: 0
}; // cORp stands for community or production

var adjustPoints = function adjustPoints(points, context) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "community";
  debugger;
  var fillPercentage;

  switch (true) {
    case points <= 42:
      fillPercentage = 10;
      break;

    case points > 42 && points <= 84:
      fillPercentage = 20;
      break;

    case points > 84 && points <= 126:
      fillPercentage = 30;
      break;

    case points > 126 && points <= 168:
      fillPercentage = 40;
      break;

    case points > 168 && points <= 210:
      fillPercentage = 50;
      break;

    case points > 210 && points <= 252:
      fillPercentage = 60;
      break;

    case points > 252 && points <= 294:
      fillPercentage = 70;
      break;

    case points > 294 && points <= 336:
      fillPercentage = 80;
      break;

    case points > 336 && points <= 378:
      fillPercentage = 90;
      break;

    case points > 378:
      // debugger
      fillPercentage = 100;
      break;

    default:
      break;
  }

  if (style === "community") {
    //save to variable because garbage collection
    debugger;
    var greenBar = new _progressBar_js__WEBPACK_IMPORTED_MODULE_0__["default"](context, -34, 105, "green", "v", fillPercentage);
  } else {
    var blueBar = new _progressBar_js__WEBPACK_IMPORTED_MODULE_0__["default"](context, 590, 105, "blue", "v", fillPercentage);
  }
};
var spawnResources = function spawnResources() {
  playerPoints.resources += 5;
};
var adjustResources = function adjustResources(num) {
  debugger;
  playerPoints.resources += num;
};
var drawResourcesText = function drawResourcesText(context) {
  var startX = context.canvas.width / 2 - 102;
  context.clearRect(startX, 478, startX + 350, 30);
  context.font = 'bold 30px Sans-Serif';
  context.fillStyle = "#66A1E7"; // context.strokeStyle = "#C5E0CF";

  context.strokeStyle = "#55906F";
  context.fillText("Resources: " + playerPoints.resources, startX, 500);
  context.strokeText("Resources: " + playerPoints.resources, startX, 500); // requestAnimationFrame(drawResourcesText(context))
};

/***/ }),

/***/ "./src/scripts/progressBar.js":
/*!************************************!*\
  !*** ./src/scripts/progressBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_h_progress_bars_H_BarBackground_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/h_progress_bars/H_BarBackground.png */ "./src/images/h_progress_bars/H_BarBackground.png");
/* harmony import */ var _images_h_progress_bars_H_BlueBar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/h_progress_bars/H_BlueBar.png */ "./src/images/h_progress_bars/H_BlueBar.png");
/* harmony import */ var _images_h_progress_bars_H_GreenBar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/h_progress_bars/H_GreenBar.png */ "./src/images/h_progress_bars/H_GreenBar.png");
/* harmony import */ var _images_h_progress_bars_H_RedBar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/h_progress_bars/H_RedBar.png */ "./src/images/h_progress_bars/H_RedBar.png");
/* harmony import */ var _images_h_progress_bars_H_YellowBar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/h_progress_bars/H_YellowBar.png */ "./src/images/h_progress_bars/H_YellowBar.png");
/* harmony import */ var _images_v_progress_bars_V_BarBackground_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/v_progress_bars/V_BarBackground.png */ "./src/images/v_progress_bars/V_BarBackground.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar10_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar10.png */ "./src/images/v_progress_bars/V_BlueBar10.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar20_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar20.png */ "./src/images/v_progress_bars/V_BlueBar20.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar30_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar30.png */ "./src/images/v_progress_bars/V_BlueBar30.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar40_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar40.png */ "./src/images/v_progress_bars/V_BlueBar40.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar50_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar50.png */ "./src/images/v_progress_bars/V_BlueBar50.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar60_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar60.png */ "./src/images/v_progress_bars/V_BlueBar60.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar70_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar70.png */ "./src/images/v_progress_bars/V_BlueBar70.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar80_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar80.png */ "./src/images/v_progress_bars/V_BlueBar80.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar90_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar90.png */ "./src/images/v_progress_bars/V_BlueBar90.png");
/* harmony import */ var _images_v_progress_bars_V_BlueBar100_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar100.png */ "./src/images/v_progress_bars/V_BlueBar100.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar10_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar10.png */ "./src/images/v_progress_bars/V_GreenBar10.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar20_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar20.png */ "./src/images/v_progress_bars/V_GreenBar20.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar30_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar30.png */ "./src/images/v_progress_bars/V_GreenBar30.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar40_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar40.png */ "./src/images/v_progress_bars/V_GreenBar40.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar50_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar50.png */ "./src/images/v_progress_bars/V_GreenBar50.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar60_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar60.png */ "./src/images/v_progress_bars/V_GreenBar60.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar70_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar70.png */ "./src/images/v_progress_bars/V_GreenBar70.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar80_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar80.png */ "./src/images/v_progress_bars/V_GreenBar80.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar90_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar90.png */ "./src/images/v_progress_bars/V_GreenBar90.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar100_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar100.png */ "./src/images/v_progress_bars/V_GreenBar100.png");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



























 // import vRed from "../images/v_progress_bars/V_RedBar.png"
// import vYellow from "../images/v_progress_bars/V_YellowBar.png"



var progressBar = /*#__PURE__*/function () {
  function progressBar(context, startX, startY, color, orientation, value) {
    _classCallCheck(this, progressBar);

    this.context = context;
    this.startX = startX;
    this.startY = startY;
    this.points = 30;
    this.color = color;
    this.value = value;
    this.orientation = orientation;
    this.blankSprite = undefined;
    this.colorSprite = undefined;
    this.loadSrc(orientation);
  }

  _createClass(progressBar, [{
    key: "loadSrc",
    value: function loadSrc(orientation) {
      if (this.color === "blank") {
        var backgroundSrc = this.orientationAndCreate(orientation);
        this.blankSprite = new Image();
        this.blankSprite.src = backgroundSrc;
        var that = this;

        this.blankSprite.onload = function (e) {
          // debugger
          // that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 364);
          that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 378);
        };
      } else {
        var colorBarSrc = this.selectColor(this.color, orientation, this.value);
        this.colorSprite = new Image();
        this.colorSprite.src = colorBarSrc;
        debugger;

        var _that = this;

        this.colorSprite.onload = function (e) {
          // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 278);
          // 30 is good start
          // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 30);
          debugger;

          _that.context.drawImage(_that.colorSprite, _that.startX, _that.startY, 100, 400);
        };
      }
    } // loadSrc(orientation){
    //     const backgroundSrc = this.orientationAndCreate(orientation);
    //     const colorBarSrc = this.selectColor(this.color, orientation)
    //     this.blankSprite = new Image();
    //     this.colorSprite = new Image();
    //     this.blankSprite.src = backgroundSrc; 
    //     this.colorSprite.src = colorBarSrc; 
    //     const that = this;
    //     this.blankSprite.onload = (e) => {
    //         debugger
    //         that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 100);
    //         that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 100);
    //     }
    // }
    // select initial orientation of progress bar. Vertical or Horizontal.

  }, {
    key: "orientationAndCreate",
    value: function orientationAndCreate(ori) {
      if (ori === "h" || ori === "H") {
        // debugger
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_h_progress_bars_H_BarBackground_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
      } else if (ori === "v" || ori === "V") {
        // debugger
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BarBackground_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
      }
    } // select color of progress bar vertical or horizontal

  }, {
    key: "selectColor",
    value: function selectColor(color, ori, value) {
      var selected = undefined;
      var hColors = {
        "blank": Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_h_progress_bars_H_BarBackground_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        "blue": Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_h_progress_bars_H_BlueBar_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        "green": Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_h_progress_bars_H_GreenBar_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        "red": Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_h_progress_bars_H_RedBar_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        "yellow": Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_h_progress_bars_H_YellowBar_png__WEBPACK_IMPORTED_MODULE_4__["default"])
      };
      var vColors = {
        "blank": Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BarBackground_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        "blue": {
          10: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar10_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
          20: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar20_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
          30: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar30_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
          40: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar40_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
          50: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar50_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
          60: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar60_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
          70: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar70_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
          80: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar80_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
          90: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar90_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
          100: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar100_png__WEBPACK_IMPORTED_MODULE_15__["default"])
        },
        "green": {
          10: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar10_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
          20: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar20_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
          30: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar30_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
          40: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar40_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
          50: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar50_png__WEBPACK_IMPORTED_MODULE_20__["default"]),
          60: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar60_png__WEBPACK_IMPORTED_MODULE_21__["default"]),
          70: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar70_png__WEBPACK_IMPORTED_MODULE_22__["default"]),
          80: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar80_png__WEBPACK_IMPORTED_MODULE_23__["default"]),
          90: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar90_png__WEBPACK_IMPORTED_MODULE_24__["default"]),
          100: Object(_util_js__WEBPACK_IMPORTED_MODULE_26__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar100_png__WEBPACK_IMPORTED_MODULE_25__["default"])
        }
      };

      if (ori === "h" || ori === "H") {
        selected = hColors[color];
        return selected;
      } else if (ori === "v" || ori === "V") {
        selected = vColors[color][value];
        return selected;
      }
    }
  }, {
    key: "increaseFill",
    value: function increaseFill(value) {
      // this.context.drawImage(this.colorSprite, this.startX, this.startY, 22, 200)
      // this.context.drawImage(this.colorSprite, this.startX, this.startY, 22, 200)
      // else {
      this.value = value;
      var colorBarSrc = this.selectColor(this.color, this.orientation, this.value); // this.colorSprite = new Image();

      this.colorSprite.src = colorBarSrc; // debugger

      var that = this;

      this.colorSprite.onload = function (e) {
        // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 278);
        // 30 is good start
        // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 30);
        that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 400);
      };
    }
  }, {
    key: "decreaseFill",
    value: function decreaseFill(value) {}
  }, {
    key: "resetFill",
    value: function resetFill() {}
  }, {
    key: "drawBar",
    value: function drawBar(context) {
      // context.drawImage()
      context.drawImage(this.blankSprite, this.startX, this.startY, 100, 100);
    }
  }]);

  return progressBar;
}();

/* harmony default export */ __webpack_exports__["default"] = (progressBar);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/*! exports provided: buildAssetPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAssetPath", function() { return buildAssetPath; });
var buildAssetPath = function buildAssetPath(imgSrc) {
  return "./dist/".concat(imgSrc);
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hbGllbnMvc2hpcHMvMDYtU2F0dXJuby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hbGllbnMvc2hpcHMvMDgtTmV0dW5vLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FsaWVucy9zaGlwcy8wOS1QbHV0by5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21tdW5pdHkvcHlyYW1pZHMvMDByZWRfcHlyYW1pZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21tdW5pdHkvcHlyYW1pZHMvMDFnb2xkZW5fcHlyYW1pZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21tdW5pdHkvcHlyYW1pZHMvMDJsaWdodF9weXJhbWlkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hfcHJvZ3Jlc3NfYmFycy9IX0JhckJhY2tncm91bmQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaF9wcm9ncmVzc19iYXJzL0hfQmx1ZUJhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9HcmVlbkJhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9SZWRCYXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaF9wcm9ncmVzc19iYXJzL0hfWWVsbG93QmFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3RlcnJhaW5fZ3Jhc3MvZ3Jhc3NfbWl4X2QuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmFyQmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjEwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyMjAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjMwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXI0MC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyNTAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjYwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXI3MC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyODAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjkwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0dyZWVuQmFyMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIxMDAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIyMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9HcmVlbkJhcjMwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0dyZWVuQmFyNDAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI1MC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9HcmVlbkJhcjYwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0dyZWVuQmFyNzAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI4MC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9HcmVlbkJhcjkwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWxpZW5fc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYW52YXNfZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdGhlcnNoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcG9pbnRzU3lzdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2U0YWEiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzSG9tZSIsImdldEVsZW1lbnRCeUlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjYW52YXNFdmVudHMiLCJkcmF3R3Jhc3MiLCJtYWtlUmVzb3VyY2VzSWQiLCJzZXRJbnRlcnZhbCIsInNwYXduUmVzb3VyY2VzIiwiZHJhd1Jlc291cmNlc1RleHQiLCJBbGllblNoaXAiLCJmaWxlUGF0aCIsInhTdGFydCIsInlTdGFydCIsInNjYWxlVyIsInNjYWxlSCIsInNwcml0ZSIsInVuZGVmaW5lZCIsIm1vdmVtZW50cyIsIm1vdmVJZHgiLCJsb2FkQWxpZW5TaGlwIiwiYmluZCIsImxUb1JBbmltYXRlIiwiZHJhd1NoaXAiLCJtb3ZlU3BhblgiLCJpIiwicHVzaCIsIngiLCJ5IiwiYWxpZW5TcmMiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsInRvcExlZnRYIiwidG9wTGVmdFkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEdyaWQiLCJncmFzc1NxdWFyZSIsImJ1aWxkQXNzZXRQYXRoIiwiZ3Jhc3NEIiwib25QbGF5ZXJHcmlkIiwiYnVpbGRQbGF5ZXJTdGF0ZSIsImJ1aWxkUGxheWVyR3JpZCIsImoiLCJpc1ByZXNlbnQiLCJjT1JwIiwia2xhc3MiLCJsZXZlbCIsImNpdmlsaXphdGlvbiIsImNvbW11bml0eSIsInBhcmtzIiwicHlyYW1pZHMiLCJmaWxlIiwicHlyYW1pZDAiLCJuYW1lIiwiYm9vc3QiLCJpbmRleCIsInB5cmFtaWQxIiwicHlyYW1pZDIiLCJydWlucyIsIm1lZGl0YXRpb25DaXJjbGVzIiwidHJlZXMiLCJwcm9kdWN0aW9uIiwiZmFybXMiLCJidWlsZGluZ3MiLCJob3VzZXMiLCJlbmVyZ3kiLCJ3aW5kIiwic29sYXIiLCJoeWRybyIsIm1lbnVDb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWVudSIsInBsYXllckFsZXJ0IiwiZSIsImdldENvb3JkcyIsIkFycmF5IiwiZnJvbSIsImNsYXNzTGlzdCIsImluY2x1ZGVzIiwidG9nZ2xlIiwibGVuIiwib3B0aW9ucyIsInNldEF0dHJpYnV0ZSIsInBsYXllclBvaW50cyIsInJlc291cmNlcyIsInJlbW92ZVBsYXllckFsZXJ0IiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZUVycm9yQWxlcnQiLCJzZWxlY3RlZEluZGV4IiwiYWRqdXN0UmVzb3VyY2VzIiwiY2hvaWNlU3RyIiwidmFsdWUiLCJjaG9zZW5CdWlsZGluZyIsImNpdmlsaXphdGlvbk1lbnVTZWxlY3QiLCJmaWxlUGF0aEJ1aWxkIiwiaXNHcmlkT2NjdXBpZWQiLCJpc0luaXRpYWxCdWlsZGluZyIsInBhcnNlSW1hZ2UiLCJvY2N1cHlHcmlkIiwiYWRqdXN0UG9pbnRzIiwib2JqQXRHcmlkUG9zIiwibWF4SW5kZXhPZlR5cGUiLCJkcmF3T25HcmlkIiwiY2hpbGRFbGVtZW50Q291bnQiLCJyZW1vdmVDaGlsZCIsImNoaWxkTm9kZXMiLCJlcnJvck1zZyIsImVsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJjYW52YXNSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3giLCJjeSIsInB4IiwicGFnZVgiLCJweSIsInBhZ2VZIiwibGVmdCIsInRvcCIsImNvbCIsIk1hdGgiLCJmbG9vciIsInJvdyIsInNlZUdyaWRPcHRpb25zIiwiZ2FtZU9wdGlvbnMiLCJncmlkQ2xpY2siLCJzZWxlY3RlZCIsIm9wdGlvbnNBcnIiLCJzcGxpdCIsImltZzEiLCJvbmxvYWQiLCJkcmF3Um93IiwiaW1hZ2UiLCJyb3dYIiwicm93WSIsInN1bW1vbkFsaWVucyIsIm1vdGhlclNoaXAiLCJNb3RoZXJTaGlwIiwibWFrZVNoaXBzIiwiaW50SWQxIiwiYXJteSIsImludElkMiIsImludElkMyIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiZ3JpZFgiLCJncmlkWSIsImNsZWFyUmVjdEJvb2xlYW4iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyUmVjdCIsInNoaXBOdW0iLCJzaGlwRmlsZXMiLCJuZXB0dW5lIiwic2F0dXJuIiwicGx1dG8iLCJ5UG9zIiwiYWxpZW5TaGlwIiwicG9pbnRzIiwic3R5bGUiLCJmaWxsUGVyY2VudGFnZSIsImdyZWVuQmFyIiwicHJvZ3Jlc3NCYXIiLCJibHVlQmFyIiwibnVtIiwic3RhcnRYIiwiY2FudmFzIiwid2lkdGgiLCJmb250IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsVGV4dCIsInN0cm9rZVRleHQiLCJzdGFydFkiLCJjb2xvciIsIm9yaWVudGF0aW9uIiwiYmxhbmtTcHJpdGUiLCJjb2xvclNwcml0ZSIsImxvYWRTcmMiLCJiYWNrZ3JvdW5kU3JjIiwib3JpZW50YXRpb25BbmRDcmVhdGUiLCJ0aGF0IiwiY29sb3JCYXJTcmMiLCJzZWxlY3RDb2xvciIsIm9yaSIsImhCbGFuayIsInZCbGFuayIsImhDb2xvcnMiLCJoQmx1ZSIsImhHcmVlbiIsImhSZWQiLCJoWWVsbG93IiwidkNvbG9ycyIsInZCbHVlMTAiLCJ2Qmx1ZTIwIiwidkJsdWUzMCIsInZCbHVlNDAiLCJ2Qmx1ZTUwIiwidkJsdWU2MCIsInZCbHVlNzAiLCJ2Qmx1ZTgwIiwidkJsdWU5MCIsInZCbHVlMTAwIiwidkdyZWVuMTAiLCJ2R3JlZW4yMCIsInZHcmVlbjMwIiwidkdyZWVuNDAiLCJ2R3JlZW41MCIsInZHcmVlbjYwIiwidkdyZWVuNzAiLCJ2R3JlZW44MCIsInZHcmVlbjkwIiwidkdyZWVuMTAwIiwiaW1nU3JjIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7Ozs7QUNBckM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLDRGQUE2QixFOzs7Ozs7Ozs7Ozs7QUNBNUM7QUFBZSwyRkFBNEIsRTs7Ozs7Ozs7Ozs7O0FDQTNDO0FBQWUsMkZBQTRCLEU7Ozs7Ozs7Ozs7OztBQ0EzQztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7Ozs7QUNBckM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSx1RkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQXZDO0FBQWUsMkZBQTRCLEU7Ozs7Ozs7Ozs7OztBQ0EzQztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSx1RkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQXZDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSx1RkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQXZDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7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QUNBO0FBQ0E7QUFDSSxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFNNkYsV0FBVyxHQUFHLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS1QsS0FBdEIsRUFBNkIsS0FBS0MsV0FBbEMsRUFBK0MsS0FBS3RGLEtBQXBELENBQXBCLENBTFcsQ0FNWDs7QUFDQSxXQUFLd0YsV0FBTCxDQUFpQnZKLEdBQWpCLEdBQXVCNEosV0FBdkIsQ0FQVyxDQVFYOztBQUNBLFVBQU1ELElBQUksR0FBRyxJQUFiOztBQUNBLFdBQUtKLFdBQUwsQ0FBaUIvQyxNQUFqQixHQUEwQixVQUFDM0QsQ0FBRCxFQUFPO0FBRTdCO0FBQ0E7QUFDQTtBQUNBOEcsWUFBSSxDQUFDeEwsT0FBTCxDQUFhOEIsU0FBYixDQUF1QjBKLElBQUksQ0FBQ0osV0FBNUIsRUFBeUNJLElBQUksQ0FBQ2hCLE1BQTlDLEVBQXNEZ0IsSUFBSSxDQUFDUixNQUEzRCxFQUFtRSxHQUFuRSxFQUF3RSxHQUF4RTtBQUNILE9BTkQ7QUFRSDs7O2lDQUdRcEYsSyxFQUFNLENBRWxCOzs7Z0NBRVUsQ0FFVjs7OzRCQUVPNUYsTyxFQUFRO0FBQ1o7QUFDQUEsYUFBTyxDQUFDOEIsU0FBUixDQUFrQixLQUFLcUosV0FBdkIsRUFBb0MsS0FBS1gsTUFBekMsRUFBaUQsS0FBS1EsTUFBdEQsRUFBOEQsR0FBOUQsRUFBbUUsR0FBbkU7QUFDSDs7Ozs7O0FBSVVYLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ROQTtBQUFBO0FBQU8sSUFBTS9ILGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2tMLE1BQUQsRUFBWTtBQUN0QywwQkFBaUJBLE1BQWpCO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzLzA2LVNhdHVybm8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvMDgtTmV0dW5vLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzLzA5LVBsdXRvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzLzAwcmVkX3B5cmFtaWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvMDFnb2xkZW5fcHlyYW1pZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy8wMmxpZ2h0X3B5cmFtaWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvSF9CYXJCYWNrZ3JvdW5kLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL0hfQmx1ZUJhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9IX0dyZWVuQmFyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL0hfUmVkQmFyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL0hfWWVsbG93QmFyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dyYXNzX21peF9kLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1ZfQmFyQmFja2dyb3VuZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9WX0JsdWVCYXIxMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9WX0JsdWVCYXIxMDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyMjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyMzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyNDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyNTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyNjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyNzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyODAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyOTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9HcmVlbkJhcjEwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1ZfR3JlZW5CYXIxMDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9HcmVlbkJhcjIwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1ZfR3JlZW5CYXIzMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9WX0dyZWVuQmFyNDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9HcmVlbkJhcjUwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1ZfR3JlZW5CYXI2MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9WX0dyZWVuQmFyNzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9HcmVlbkJhcjgwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1ZfR3JlZW5CYXI5MC5wbmdcIjsiLCJpbXBvcnQge2FuaW1hdGVTcXVhcmVzLFxuICAgICBjYW52YXNFdmVudHMsXG4gICAgICBkcmF3R3Jhc3MsXG4gICAgICAgZHJhd09uR3JpZCxcbiAgICBzdW1tb25BbGllbnN9IGZyb20gXCIuL3NjcmlwdHMvY2FudmFzX2V2ZW50cy5qc1wiXG5pbXBvcnQgcHJvZ3Jlc3NCYXIgZnJvbSBcIi4vc2NyaXB0cy9wcm9ncmVzc0Jhci5qc1wiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7ZHJhd1Jlc291cmNlc1RleHQsIHNwYXduUmVzb3VyY2VzfSBmcm9tIFwiLi9zY3JpcHRzL3BvaW50c1N5c3RlbVwiO1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiAge1xuXG4gICAgY29uc3QgY2FudmFzSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWhvbWVcIik7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc0hvbWUuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY2FudmFzRXZlbnRzKGNhbnZhc0hvbWUsIGNvbnRleHQpXG4gICAgZHJhd0dyYXNzKGNvbnRleHQpXG4gICAgLy9kcmF3IFByb2R1Y3Rpb24gcHJvZ3Jlc3MgYmFyXG4gICAgLy8geSBpcyAzNzVcbiAgICAvLyBjb25zdCBibGFua0xlZnQgPSBuZXcgcHJvZ3Jlc3NCYXIoY29udGV4dCwgLTM0LCAxMjUsIFwiYmxhbmtcIiwgXCJ2XCIpXG4gICAgLy8gY29uc3QgYmxhbmtMZWZ0ID0gbmV3IHByb2dyZXNzQmFyKGNvbnRleHQsIC0zNCwgMTE1LCBcImJsYW5rXCIsIFwidlwiKTtcbiAgICAvLyBjb25zdCBibGFua1JpZ2h0ID0gbmV3IHByb2dyZXNzQmFyKGNvbnRleHQsIDU5MCwgMTE1LCBcImJsYW5rXCIsIFwidlwiKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGNvbnN0IG1ha2VSZXNvdXJjZXNJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc3Bhd25SZXNvdXJjZXMoKTtcbiAgICAgICAgZHJhd1Jlc291cmNlc1RleHQoY29udGV4dCk7XG4gICAgfSwgNjAwKVxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBkcmF3UmVzb3VyY2VzVGV4dChjb250ZXh0KTtcbiAgICB9LCAyNTApXG4gICAgLy8gc3Bhd25SZXNvdXJjZXMoKTtcbiAgICAvLyBkcmF3UmVzb3VyY2VzVGV4dChjb250ZXh0KTtcblxuXG5cblxuICAgIC8vIGNvbnN0IGdyZWVuQmFyID0gbmV3IHByb2dyZXNzQmFyKGNvbnRleHQsIC0zNCwgMTA1LCBcImdyZWVuXCIsIFwidlwiLCAxMCk7XG4gICAgLy8gY29uc3QgYmx1ZUJhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCA1OTAsIDEwNSwgXCJibHVlXCIsIFwidlwiLCAyMCk7XG4gICAgLy8gY29uc3QgcmVkQmFyID0gbmV3IHByb2dyZXNzQmFyKGNvbnRleHQsIC0zNCwgMzc1LCBcImJsdWVcIiwgXCJ2XCIpXG5cbiAgICAvLyBjb25zdCBncmVlbkJhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCAtMzQsIDEwNSwgXCJncmVlblwiLCBcInZcIiwgOTApO1xuXG4gICAgLy8gZ3JlZW5CYXIuaW5jcmVhc2VGaWxsKDEwMClcblxuICAgIC8vIGNvbnN0IHllbGxvd0JhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCA1OTAsIDM3NSwgXCJ5ZWxsb3dcIiwgXCJ2XCIpXG5cbiAgICAvL3N0YXJ0IHBvaW50c1xuICAgIC8vIGNvbnN0IHllbGxvd0JhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCA1OTAsIDQ0NSwgXCJ5ZWxsb3dcIiwgXCJ2XCIpXG4gICAgLy8gY29uc3QgYmx1ZUJhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCA1OTAsIDEwNSwgXCJibHVlXCIsIFwidlwiLCAyMCk7XG4gICAgLy8gcHJvZHVjdGlvbkJhci5kcmF3QmFyKGNvbnRleHQpXG4gICAgLy8gcHJvZHVjdGlvbkJhci5ibGFua1Nwcml0ZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgLy8gICAgIFxuICAgIC8vICAgICBjb250ZXh0LmRyYXdJbWFnZShwcm9kdWN0aW9uQmFyLmJsYW5rU3ByaXRlLCBwcm9kdWN0aW9uQmFyLnN0YXJ0WCwgcHJvZHVjdGlvbkJhci5zdGFydFkpO1xuICAgIC8vICAgICBjb250ZXh0LmRyYXdJbWFnZShwcm9kdWN0aW9uQmFyLmNvbG9yU3ByaXRlLCBwcm9kdWN0aW9uQmFyLnN0YXJ0WCwgcHJvZHVjdGlvbkJhci5zdGFydFkpO1xuICAgIC8vIH1cbiAgICAvLyBwcm9kdWN0aW9uQmFyLmluY3JlYXNlRmlsbCgpXG4gICAgLy8gcHJvZ3Jlc3NCYXIoY29udGV4dCwgNjI2LCA0NzYsIFwiYmx1ZVwiKVxuXG4gICAgLy8gc3VtbW9uQWxpZW5zKGNvbnRleHQpXG4gICAgXG5cbiAgICBcbiAgICAvLyBsZXQgY2hvaWNlID0gbWVudS5vcHRpb25zW21lbnUuc2VsZWN0ZWRJbmRleF0udmFsdWVcblxuICAgIC8vIGxldCBpbWdUZXN0ID0gbmV3IEltYWdlKCk7XG4gICAgXG4gICAgLy8gaW1nVGVzdC5zcmMgPSBcIi9zcmMvaW1hZ2VzL3RlcnJhaW5fZ3Jhc3MvZ3Jhc3NfbWl4X24uanBnXCJcblxuICAgIC8vIGltZ1Rlc3Qub25sb2FkID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICAvLyAgICAgZm9yKGxldCBqID0gMDsgaiA8IDc7IGorKyl7XG4gICAgICAgICAgICAgICAgLy8gZHJhd09uR3JpZChpbWdUZXN0LCBpLCBqKVxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGVTcXVhcmVzKGltZ1Rlc3QpXG5cblxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGRyYXdPbkdyaWQoaW1nVGVzdCwgNilcbiAgICAvLyB9XG5cbiAgICBcblxuXG59KVxuXG4gICAgLy8gbGV0IGltZ1Rlc3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBcbiAgICAvLyBpbWdUZXN0LnNyYyA9IFwiL3NyYy9pbWFnZXMvdGVycmFpbl9ncmFzcy9ncmFzc19taXhfbi5qcGdcIlxuXG4gICAgLy8gaW1nVGVzdC5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICAvLyAgICAgZHJhd09uR3JpZChpbWdUZXN0LCAwLCA1KVxuICAgIC8vICAgICAvLyBkcmF3T25HcmlkKGltZ1Rlc3QsIDYpXG4gICAgLy8gfVxuLy8gIGJhY2tncm91bmRzKClcblxuXG5cblxuXG4vLyBjb25zdCBiYWNrZ3JvdW5kcyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYmFja2dyb3VuZHMuanNcIikiLCJpbXBvcnQge2J1aWxkQXNzZXRQYXRofSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmNsYXNzIEFsaWVuU2hpcCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHhTdGFydCwgeVN0YXJ0LCBzY2FsZVcsIHNjYWxlSCl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB0aGlzLnlTdGFydCA9IHlTdGFydDtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2NhbGVXID0gc2NhbGVXO1xuICAgICAgICB0aGlzLnNjYWxlSCA9IHNjYWxlSDtcblxuICAgICAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGhcblxuICAgICAgICB0aGlzLm1vdmVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLm1vdmVJZHggPSAwO1xuXG4gICAgICAgIHRoaXMubG9hZEFsaWVuU2hpcCA9IHRoaXMubG9hZEFsaWVuU2hpcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxUb1JBbmltYXRlID0gdGhpcy5sVG9SQW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdTaGlwID0gdGhpcy5kcmF3U2hpcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRBbGllblNoaXAoKVxuICAgICAgICB0aGlzLm1vdmVTcGFuWCgpXG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgdGhlIG1vdmVtZW50cyBmb3IgYW4gYWxpZW4gU2hpcFxuICAgICBtb3ZlU3BhblgoKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCAyMyA7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudHMucHVzaCh7eDogKHRoaXMueFN0YXJ0ICogKGkgKiA0MCkpLCB5OiAodGhpcy55U3RhcnQpfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgbG9hZEFsaWVuU2hpcCgpe1xuICAgIGNvbnN0IGFsaWVuU3JjID0gdGhpcy5maWxlUGF0aDtcblxuICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5zcHJpdGUuc3JjID0gYWxpZW5TcmM7ICAgICAgICBcblxuICAgIH1cblxuICAgIGRyYXdTaGlwKCl7XG4gICAgICAgXG4gICAgICAgIC8vd29ya3Mgd2l0aCBzZXQgcGl4ZWxcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgMCwgMCwgMTAwLCAxMDApO1xuXG4gICAgICAgIC8vIHVzaW5nIGFuaW1hdGlvblxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgMTAwLCAxMDApO1xuXG4gICAgICAgIC8vd29ya3Mgd2l0aCBmcmFjdGlvblxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCAwLCAwLCAodGhpcy5zcHJpdGUud2lkdGggLyB0aGlzLnNjYWxlVyksICh0aGlzLnNwcml0ZS5oZWlnaHQgLyB0aGlzLnNjYWxlSCkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgdGhpcy5zY2FsZVcsIHRoaXMuc2NhbGVIICk7XG5cbiAgICB9XG5cbiAgICBsVG9SQW5pbWF0ZSgpe1xuICAgICAgICBsZXQgeCA9IDBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaGlwIG1vdmluZ1wiKVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdKVxuICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsNjQ2LDEzMSlcbiAgICAgICAgICAgIGNvbnN0IHRvcExlZnRYID0gdGhpcy5tb3ZlbWVudHNbdGhpcy5tb3ZlSWR4XS54XG4gICAgICAgICAgICBjb25zdCB0b3BMZWZ0WSA9IHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3BMZWZ0WClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvcExlZnRZKVxuXG4gICAgICAgICAgICAvL3RoaXMgZnVuY3Rpb24gcmVtb3ZlcyBwcmV2aW91cyBkcmF3aW5nIG9mIGFsaWVuIHNoaXAuXG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlSWR4ID4gMCl7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgodGhpcy5zY2FsZVcgKiB0aGlzLm1vdmVJZHggKSAsIHRvcExlZnRZLCh0aGlzLnNjYWxlVyAqICgtMSkpLCAodGhpcy5zY2FsZVcgKiAxICkpXG5cbiAgICAgICAgICAgICAgICAvL29sZCBidXQgd29ya3NcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KCh0b3BMZWZ0WCApICwgdG9wTGVmdFksKHRoaXMuc2NhbGVXICogKC0xKSksICh0aGlzLnNjYWxlVyAqIDEgKSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwodGhpcy5zY2FsZVcgKiAtIDEpLCAodGhpcy5zY2FsZVcgKiAtMSApKVxuXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDMwMCAsIDMwMCwodGhpcy5zY2FsZVcgKiAoMSkpLCAodGhpcy5zY2FsZVcgKiAtMSApKVxuICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgdGhpcy5zY2FsZVcsIHRoaXMuc2NhbGVIICk7XG4gICAgICAgICAgICB0aGlzLm1vdmVJZHgrKztcbiAgICAgICAgICAgIGlmKHRoaXMubW92ZUlkeCA+PSB0aGlzLm1vdmVtZW50cy5sZW5ndGgpIHRoaXMubW92ZUlkeCA9IDA7XG4gICAgICAgICAgICAvLyBpZih4ID09PSAxNSl7XG4gICAgICAgICAgICAvLyAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGllblNoaXA7IiwiY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGNhbnZhcyBldmVudHNcIilcbmltcG9ydCBBbGllblNoaXAgZnJvbSBcIi4vYWxpZW5fc2hpcFwiO1xuaW1wb3J0IE1vdGhlclNoaXAgZnJvbSBcIi4vbW90aGVyc2hpcFwiO1xuaW1wb3J0IHtidWlsZEFzc2V0UGF0aH0gZnJvbSBcIi4vdXRpbFwiXG5pbXBvcnQge3BsYXllclBvaW50cywgYWRqdXN0UG9pbnRzLCBhZGp1c3RSZXNvdXJjZXN9IGZyb20gXCIuL3BvaW50c1N5c3RlbVwiXG5cbi8vd29ya3NcbmltcG9ydCBweXJhbWlkMCBmcm9tIFwiLi4vaW1hZ2VzL2NvbW11bml0eS9weXJhbWlkcy8wMHJlZF9weXJhbWlkLnBuZ1wiXG5pbXBvcnQgcHlyYW1pZDEgZnJvbSBcIi4uL2ltYWdlcy9jb21tdW5pdHkvcHlyYW1pZHMvMDFnb2xkZW5fcHlyYW1pZC5wbmdcIlxuaW1wb3J0IHB5cmFtaWQyIGZyb20gXCIuLi9pbWFnZXMvY29tbXVuaXR5L3B5cmFtaWRzLzAybGlnaHRfcHlyYW1pZC5wbmdcIlxuXG4vLyBpbXBvcnQgcHlyYW1pZDAgZnJvbSBcIi4uL2ltYWdlcy9jb21tdW5pdHkvcHlyYW1pZHMvMDFweXJhbWlkLnN2Z1wiXG5cbmltcG9ydCBncmFzc0QgZnJvbSBcIi4uL2ltYWdlcy90ZXJyYWluX2dyYXNzL2dyYXNzX21peF9kLmpwZ1wiXG5cbi8vIC8vZXg6IFszLDRdXG5sZXQgY3VycmVudEdyaWQgPSB1bmRlZmluZWQ7XG5cblxuLy8gZnVuY3Rpb24gYnVpbGRBc3NldFBhdGgoaW1nU3JjKSB7XG4vLyAgICAgcmV0dXJuIGAuL2Rpc3QvJHtpbWdTcmN9YDtcbi8vIH1cblxuLy9UaGlzIGlzIGEgZ2VuZXJpYyBncmFzcyBzcXVhcmUgcHJlbG9hZGVkIHdpdGggc291cmNlIHBhdGhcbmNvbnN0IGdyYXNzU3F1YXJlID0gbmV3IEltYWdlKClcbmdyYXNzU3F1YXJlLnNyYyA9IGJ1aWxkQXNzZXRQYXRoKGdyYXNzRClcblxuLy8gY29uc3QgcGxheWVyUG9pbnRzID0ge1xuLy8gICAgIGNvbW11bml0eTogMCxcbi8vICAgICBwcm9kdWN0aW9uOiAwLFxuLy8gICAgIHJlc291cmNlczogMFxuLy8gfVxuXG4vLyBza2VsZXRvbiBmb3Igb25QbGF5ZXJHcmlkXG4vL3tpc1ByZXNlbnQ6IGZhbHNlLCBjT1JwOiBcIlwiLCBrbGFzczogXCJcIiwgbGV2ZWw6IG51bGx9XG5jb25zdCBvblBsYXllckdyaWQgPSBidWlsZFBsYXllclN0YXRlKClcblxuXG4vLyBjb25zb2xlLmxvZyhvblBsYXllckdyaWQpXG5cbi8vIFRoaXMgZnVuY3Rpb24gYnVpbGRzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBsYXkgZ3JpZCBhbmQgXG4vLyBzdG9yZXMgc3RhdGUgb2Ygd2hhdCB0aGUgcGxheWVyIGhhcyBwbGF5ZWRcbmZ1bmN0aW9uIGJ1aWxkUGxheWVyU3RhdGUoKXtcbiAgICBsZXQgYnVpbGRQbGF5ZXJHcmlkID0ge31cbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDQ7IGkrKyl7XG4gICAgICAgIGJ1aWxkUGxheWVyR3JpZFtpXSA9IHt9XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA3OyBqKyspe1xuXG4gICAgICAgICAgICBidWlsZFBsYXllckdyaWRbaV1bal0gPSB7aXNQcmVzZW50OiBmYWxzZSwgY09ScDogXCJcIiwga2xhc3M6IFwiXCIsIGxldmVsOiBudWxsfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBidWlsZFBsYXllckdyaWRcbn1cblxuXG4vL3NrZWxldG9uXG4vL3tmaWxlOiBcIlwiXCIsIG5hbWU6XCJcIiwgY0Jvb3N0OiAxMCwgcEJvb3N0OiAwLCBjb21tdW5pdHk6XCJcIiwga2xhc3M6XCJcIiwgaW5kZXg6I31cbmNvbnN0IGNpdmlsaXphdGlvbiA9IHtcbiAgICAgICAgY29tbXVuaXR5OiB7XG4gICAgICAgICAgICAgICAgcGFya3M6IFtdLFxuICAgICAgICAgICAgICAgIHB5cmFtaWRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlOiBidWlsZEFzc2V0UGF0aChweXJhbWlkMCksIG5hbWU6XCJyZWRQeXJhbWlkXCIsIGJvb3N0OiAxMCwgY09ScDogXCJjb21tdW5pdHlcIiwga2xhc3M6XCJweXJhbWlkc1wiLCBpbmRleDowIH0sXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlOiBidWlsZEFzc2V0UGF0aChweXJhbWlkMSksIG5hbWU6XCJnb2xkZW5QeXJhbWlkXCIsIGJvb3N0OiAyMCwgY09ScDogXCJjb21tdW5pdHlcIiwga2xhc3M6XCJweXJhbWlkc1wiLCBpbmRleDoxIH0sXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlOiBidWlsZEFzc2V0UGF0aChweXJhbWlkMiksIG5hbWU6XCJsaWdodFB5cmFtaWRcIiwgYm9vc3Q6IDMwLCBjT1JwOiBcImNvbW11bml0eVwiLCBrbGFzczpcInB5cmFtaWRzXCIsIGluZGV4OjIgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcnVpbnM6IFt7fV0sXG4gICAgICAgICAgICAgICAgbWVkaXRhdGlvbkNpcmNsZXM6IFtdLFxuICAgICAgICAgICAgICAgIHRyZWVzOltdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGZhcm1zOiBbXSxcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxuICAgICAgICAgICAgICAgIGhvdXNlczogW10sXG4gICAgICAgICAgICAgICAgZW5lcmd5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kOltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29sYXI6W10sXG4gICAgICAgICAgICAgICAgICAgICAgICBoeWRybzpbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBjYW52YXNFdmVudHMgPSAoY2FudmFzSG9tZSwgY29udGV4dCkgPT4ge1xuICAgIC8vZHJvcGRvd24gb24gcmlnaHQgc2lkZVxuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3AtZG93bi1jb250YWluZXJcIilbMF1cbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXZpbGl6YXRpb24tbWVudVwiKVswXVxuICAgIGNvbnN0IHBsYXllckFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllckFsZXJ0XCIpWzBdXG4gICAgXG4gICAgLy9XaGVuIHVzZXIgY2xpY2tzIG9uIGdyaWQgaXQgc2V0cyBjdXJyZW50R3JpZC4gSWYgdGhleSBjbGljayBvdXRzaWRlLCBpdCByZXR1cm5zXG4gICAgLy8gdW5kZWZpbmVkXG4gICAgY2FudmFzSG9tZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBjdXJyZW50R3JpZCA9IGdldENvb3JkcyhlKTtcblxuICAgICAgICBpZihjdXJyZW50R3JpZCAmJiBBcnJheS5mcm9tKG1lbnVDb250YWluZXIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGRlblwiKSl7XG4gICAgICAgICAgICAvL3Nob3cgZHJvcGRvd24gaWYgdXNlciBjbGlja3MgaW4gcGxheWdyaWRcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBtZW51Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBsZW4pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEdyaWQgPT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuZnJvbShtZW51Q29udGFpbmVyLmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIC8vaGlkZSBkcm9wZG93biBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHBsYXkgZ3JpZCAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgICAgIH0gXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50R3JpZDogJHtjdXJyZW50R3JpZH1gKVxuICAgIFxuICAgIH0pXG5cbiAgICAvLyBXaGVuIHVzZXIgc2VsZWN0cyBmcm9tIHRoZSBkcm9wIGRvd24gbWVudSB0byBwbGFjZSBhIHNwcml0ZVxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJQb2ludHMucmVzb3VyY2VzKVxuICAgICAgICAvLyBSZW1vdmUgZXJyb3IgbWVzc2FnZSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgcmVtb3ZlUGxheWVyQWxlcnQoKVxuXG4gICAgICAgIGlmIChwbGF5ZXJQb2ludHMucmVzb3VyY2VzIDwgMjApe1xuICAgICAgICAgICAgcGxheWVyQWxlcnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVFcnJvckFsZXJ0KFwiRXZlcnkgYnVpbGRpbmcgY29zdHMgMjAgcmVzb3VyY2VzIC4uLiAhXCIpKVxuICAgICAgICAgICAgbWVudS5zZWxlY3RlZEluZGV4ID0gbnVsbDsgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBcbiAgICAgICAgYWRqdXN0UmVzb3VyY2VzKC0yMClcblxuICAgICAgICBjb25zdCBjaG9pY2VTdHIgPSBtZW51Lm9wdGlvbnNbbWVudS5zZWxlY3RlZEluZGV4XS52YWx1ZVxuICAgICAgICBjb25zdCBjaG9zZW5CdWlsZGluZyA9IGNpdmlsaXphdGlvbk1lbnVTZWxlY3QoY2hvaWNlU3RyKVxuICAgICAgICBjb25zdCBmaWxlUGF0aEJ1aWxkID0gY2hvc2VuQnVpbGRpbmcuZmlsZVxuXG4gICAgICAgIFxuXG4gICAgICAgIC8vcGxhY2Ugc3ByaXRlIGlmIG5vdCBvY2N1cGllZFxuICAgICAgICBpZighaXNHcmlkT2NjdXBpZWQoKSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpc0luaXRpYWxCdWlsZGluZyhjaG9zZW5CdWlsZGluZykgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHBhcnNlSW1hZ2UoY29udGV4dCwgZmlsZVBhdGhCdWlsZCwgY3VycmVudEdyaWQpXG4gICAgICAgICAgICAgICAgb2NjdXB5R3JpZChjaG9zZW5CdWlsZGluZylcblxuICAgICAgICAgICAgICAgIHBsYXllclBvaW50c1tjaG9zZW5CdWlsZGluZy5jT1JwXSArPSBjaG9zZW5CdWlsZGluZy5ib29zdFxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgYWRqdXN0UG9pbnRzKHBsYXllclBvaW50cy5jb21tdW5pdHksIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgYWRqdXN0UG9pbnRzKHBsYXllclBvaW50cy5jb21tdW5pdHksIGNvbnRleHQsIFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJBbGVydC5hcHBlbmRDaGlsZChnZW5lcmF0ZUVycm9yQWxlcnQoXCJUaGF0IGJ1aWxkaW5nIGlzIG5vdCB0aGUgZmlyc3Qgb2YgaXQncyBraW5kIVwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc0dyaWRPY2N1cGllZCgpKXtcbiAgICAgICAgICAgICAvLyBBbHJlYWR5IGEgYnVpbGRpbmcgb24gZ3JpZCBwb3NcbiAgICAgICAgICAgICBjb25zdCB4ID0gY3VycmVudEdyaWRbMF1cbiAgICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudEdyaWRbMV1cbiAgICAgICAgICAgICBjb25zdCBvYmpBdEdyaWRQb3MgPSBvblBsYXllckdyaWRbeF1beV1cbiAgICAgICAgICAgICBjb25zdCBtYXhJbmRleE9mVHlwZSA9IGNpdmlsaXphdGlvbltjaG9zZW5CdWlsZGluZy5jT1JwXVtjaG9zZW5CdWlsZGluZy5rbGFzc10ubGVuZ3RoIC0gMVxuXG4gICAgICAgICAgICAgLy8gUGxheWVyIHRyaWVzIHRvIGFkZCB0aGUgc2FtZSBidWlsZGluZyB0byB0aGUgb2NjdXBpZWQgZ3JpZFxuICAgICAgICAgICAgIGlmIChjaG9zZW5CdWlsZGluZy5rbGFzcyA9PT0gb2JqQXRHcmlkUG9zLmtsYXNzICYmIGNob3NlbkJ1aWxkaW5nLmluZGV4ID09PSBvYmpBdEdyaWRQb3MubGV2ZWxcbiAgICAgICAgICAgICAgICAmJiBtYXhJbmRleE9mVHlwZSAhPSBjaG9zZW5CdWlsZGluZy5pbmRleCl7XG5cbiAgICAgICAgICAgICAgICBwbGF5ZXJBbGVydC5hcHBlbmRDaGlsZChnZW5lcmF0ZUVycm9yQWxlcnQoXCJUaGF0IGJ1aWxkaW5nIGlzIGFscmVhZHkgdGhlcmUuIFRyeSB1cGdyYWRpbmchXCIpKTtcblxuICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hvc2VuQnVpbGRpbmcua2xhc3MgIT09IG9iakF0R3JpZFBvcy5rbGFzcyl7XG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIHRyaWVzIHRvIHVwZ3JhZGUgdG8gYSBidWlsZGluZyBvZiBhIGRpZmZlcmVudCBrbGFzc1xuXG4gICAgICAgICAgICAgICAgIHBsYXllckFsZXJ0LmFwcGVuZENoaWxkKGdlbmVyYXRlRXJyb3JBbGVydChcIlRyeSB1cGdyYWRpbmcgdGhhdCBzdHJ1Y3R1cmUgdG8gYSBoaWdoZXIgbGV2ZWwhXCIpKTtcbiAgICAgICAgICAgICB9IGVsc2UgaWYgKGNob3NlbkJ1aWxkaW5nLmtsYXNzID09PSBvYmpBdEdyaWRQb3Mua2xhc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBidWlsZGluZyBrbGFzcyBpcyBhIG1hdGNoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gcGxheWVyIGhhcyBtYXhlZCBvdXQgdXBncmFkZVxuICAgICAgICAgICAgICAgICBpZiAobWF4SW5kZXhPZlR5cGUgPT09IG9iakF0R3JpZFBvcy5sZXZlbCl7XG4gICAgICAgICAgICAgICAgICAgICBwbGF5ZXJBbGVydC5hcHBlbmRDaGlsZChnZW5lcmF0ZUVycm9yQWxlcnQoXCJNYXggdXBncmFkZSBhY2hpZXZlZCFcIikpO1xuICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNob3NlbkJ1aWxkaW5nLmluZGV4ID09PSAob2JqQXRHcmlkUG9zLmxldmVsICsgMSkpe1xuICAgICAgICAgICAgICAgICAgICAgLy8gcGxheWVyIHVwZ3JhZGVzIGFwcHJvcHJpYXRlbHkgYnkgMSBsZXZlbFxuICAgICAgICAgICAgICAgICAgICAgLy9yZS1yZW5kZXIgZ3Jhc3MgZmlyc3QgJiYgcmVtb3ZlIHByZXZpb3VzIGJ1aWxkaW5nXG4gICAgICAgICAgICAgICAgICAgICBkcmF3T25HcmlkKGdyYXNzU3F1YXJlLCBjb250ZXh0LCB4LCB5LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBwYXJzZUltYWdlKGNvbnRleHQsIGZpbGVQYXRoQnVpbGQsIGN1cnJlbnRHcmlkKVxuICAgICAgICAgICAgICAgICAgICAgb2NjdXB5R3JpZChjaG9zZW5CdWlsZGluZylcbiAgICAgICAgICAgICAgICAgICAgIHBsYXllclBvaW50c1tjaG9zZW5CdWlsZGluZy5jT1JwXSArPSBjaG9zZW5CdWlsZGluZy5ib29zdFxuICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNob3NlbkJ1aWxkaW5nLmluZGV4IDwgb2JqQXRHcmlkUG9zLmxldmVsKXtcbiAgICAgICAgICAgICAgICAgICAgIHBsYXllckFsZXJ0LmFwcGVuZENoaWxkKGdlbmVyYXRlRXJyb3JBbGVydChcIlRyeSB1cGdyYWRpbmcsIHdlIG11c3Qgbm90IHJlZ3JldCBvdXIgcGFzdCBkZWNpc2lvbnNcIikpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgIH1cblxuXG4gICAgICAgIC8vIHJlc2V0IGRlZmF1bHQgb2YgZHJvcGRvd25cbiAgICAgICAgICAgIG1lbnUuc2VsZWN0ZWRJbmRleCA9IG51bGxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllclBvaW50cylcblxuXG5cblxuICAgIH0pXG5cbiAgICAvL0FsZXJ0IFN5c3RlbVxuICAgIGNvbnN0IHJlbW92ZVBsYXllckFsZXJ0ID0gKCkgPT4ge1xuICAgICAgICAgaWYgKHBsYXllckFsZXJ0LmNoaWxkRWxlbWVudENvdW50ID4gMCl7XG4gICAgICAgICAgICBwbGF5ZXJBbGVydC5yZW1vdmVDaGlsZChwbGF5ZXJBbGVydC5jaGlsZE5vZGVzWzBdKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZUVycm9yQWxlcnQgPSAoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgLy8gQWRkIEVycm9yIG1lc3NhZ2UgdG8gdGhlIERPTSAtPiBcIlRoYXQgYnVpbGRpbmcgaXMgYWxyZWFkeSB0aGVyZS4gVHJ5IHVwZ3JhZGluZyFcIlxuICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yTXNnKTsgXG4gICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwbGF5ZXJBbGVydCcpO1xuICAgICAgICByZXR1cm4gZWxlXG4gICAgfVxuXG4gICAgLy8gbWVudUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hyaW5rXCIpXG4gICAgLy8gXG4gICAgLy8gbWVudUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG5cblxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKGNhbnZhc1JlY3QpXG4gICBcblxuICAgIC8vIGZ1bmN0aW9uIG9uRG93bihlKXtcbiAgICAvLyAgICAgICAgIGN4ID0gZS5wYWdlWDtcbiAgICAvLyAgICAgICAgIGN5ID0gZS5wYWdlWTtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYFg6ICR7Y3h9LCBZOiAke2N5fWApXG4gICAgLy8gfVxuICAgIFxuICAgIGNvbnN0IGdldENvb3JkcyA9IChlKSA9PiB7XG4gICAgICAgIGxldCBjYW52YXNSZWN0ID0gY2FudmFzSG9tZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IGN4O1xuICAgICAgICBsZXQgY3k7XG4gICAgICAgIGxldCBweCA9IGUucGFnZVg7XG4gICAgICAgIGxldCBweSA9IGUucGFnZVk7XG5cbiAgICAgICAgY3ggPSBweCAtIGNhbnZhc1JlY3QubGVmdFxuICAgICAgICBjeSA9IHB5IC0gY2FudmFzUmVjdC50b3BcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzUmVjdClcblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS1cIilcbiAgICAgICAgY29uc29sZS5sb2coY3gpXG4gICAgICAgIGNvbnNvbGUubG9nKGN5KVxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKChjeCAtIDIyKSAvIDg2KSA7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoKGN5IC0gMTMxKSAvIDg2KSA7XG5cbiAgICAgICAgLy8gY3VycmVudCBsb2NhdGlvbiBjb25zb2xlLmxvZ1xuICAgICAgICBjb25zb2xlLmxvZyhgWDogWyR7cm93fSwgWTogJHtjb2x9XWApXG5cbiAgICAgICAgLy9kaWQgY2xpY2sgb24gZ2FtZSBncmlkXG4gICAgICAgIGlmIChyb3cgPj0gMCAmJiByb3cgPD0gMyAmJiBjb2wgPj0gMCAmJiBjb2wgPD0gNil7XG4gICAgICAgICAgICByZXR1cm4gW3Jvdyxjb2xdXG4gICAgICAgIH1cbiAgICAgICAgLy9kaWQgTk9UIGNsaWNrIG9uIGdhbWUgZ3JpZFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VlR3JpZE9wdGlvbnMocm93LCBjb2wpe1xuICAgICAgICBjb25zb2xlLmxvZyhnYW1lT3B0aW9uc1tyb3ddW2NvbF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JpZENsaWNrKHJvdywgY29sKXtcblxuXG4gICAgfVxuXG59XG5cbmNvbnN0IGNpdmlsaXphdGlvbk1lbnVTZWxlY3QgPSAoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnNBcnIgPSBzZWxlY3RlZC5zcGxpdChcIixcIilcbiAgICAgICAgbGV0IGNPUnAgPSBudWxsXG4gICAgICAgIGxldCBrbGFzcyA9IG51bGw7XG4gICAgICAgIGxldCBpbmRleCA9IG51bGw7XG4gICAgICAgIFtjT1JwLCBrbGFzcywgaW5kZXhdID0gb3B0aW9uc0FycjtcbiAgICAgICAgY29uc29sZS5sb2coXCItLVwiKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zQXJyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2l2aWxpemF0aW9uW2NPUnBdW2tsYXNzXVtpbmRleF0pO1xuXG4gICAgICAgIHJldHVybiBjaXZpbGl6YXRpb25bY09ScF1ba2xhc3NdW2luZGV4XVxuICAgIH1cblxuLy9mdW5jdGlvbiB3aWxsIGRyYXcgZ3Jhc3NcbmV4cG9ydCBjb25zdCBkcmF3R3Jhc3MgPSAoY29udGV4dCkgPT4ge1xuICAgIGxldCBpbWcxID0gbmV3IEltYWdlKClcblxuICAgICAgICBpbWcxLnNyYyA9IGJ1aWxkQXNzZXRQYXRoKGdyYXNzRClcblxuICAgICAgICBpbWcxLm9ubG9hZCA9ICgpID0+IHtcblxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMTMxKVxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMjE3KVxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMzAzKVxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMzg5KVxuXG4gICAgICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdSb3cgPSAoY29udGV4dCwgaW1hZ2UsIHJvd1gsIHJvd1kpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XG5cbiAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCByb3dYLCByb3dZLCBpbWFnZS53aWR0aCAvMTEuOSwgaW1hZ2UuaGVpZ2h0IC8gMTEuOSApXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcm93WCwgcm93WSwgODYsIDg2IClcbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgcm93WCArPSA4NlxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBpc0dyaWRPY2N1cGllZCA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gY3VycmVudEdyaWRbMF1cbiAgICBjb25zdCB5ID0gY3VycmVudEdyaWRbMV1cblxuICAgIHJldHVybiBvblBsYXllckdyaWRbeF1beV0uaXNQcmVzZW50XG59XG5cbi8vdXBkYXRlIGdhbWVTdGF0ZSB3aXRoIGNob3NlbiBCdWlsZGluZ1xuY29uc3Qgb2NjdXB5R3JpZCA9IChjaG9zZW5CdWlsZGluZykgPT4ge1xuICAgIGNvbnN0IHggPSBjdXJyZW50R3JpZFswXVxuICAgIGNvbnN0IHkgPSBjdXJyZW50R3JpZFsxXVxuXG4gICAgb25QbGF5ZXJHcmlkW3hdW3ldLmlzUHJlc2VudCA9IHRydWVcbiAgICBvblBsYXllckdyaWRbeF1beV0uY09ScCA9IGNob3NlbkJ1aWxkaW5nLmNPUnBcbiAgICBvblBsYXllckdyaWRbeF1beV0ua2xhc3MgPSBjaG9zZW5CdWlsZGluZy5rbGFzc1xuICAgIG9uUGxheWVyR3JpZFt4XVt5XS5sZXZlbCA9IGNob3NlbkJ1aWxkaW5nLmluZGV4XG5cbiAgICByZXR1cm4gb25QbGF5ZXJHcmlkW3hdW3ldXG59XG5cbmNvbnN0IGlzSW5pdGlhbEJ1aWxkaW5nID0gKGNob3NlbkJ1aWxkaW5nKSA9PiB7XG4gICAgaWYgKGNob3NlbkJ1aWxkaW5nLmluZGV4ID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gdG8gYmUgTU9WRUQgTEFURVIgKiEqISohKiEqISohISohKiEqISohKiEqISohKlxuZXhwb3J0IGNvbnN0IHN1bW1vbkFsaWVucyA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgbW90aGVyU2hpcCA9IG5ldyBNb3RoZXJTaGlwKGNvbnRleHQpXG4gICAgICAgIG1vdGhlclNoaXAubWFrZVNoaXBzKClcbiAgICAgICAgY29uc3QgaW50SWQxID0gc2V0SW50ZXJ2YWwobW90aGVyU2hpcC5hcm15WzBdLmxUb1JBbmltYXRlLCAxNTApXG4gICAgICAgIGNvbnN0IGludElkMiA9IHNldEludGVydmFsKG1vdGhlclNoaXAuYXJteVsxXS5sVG9SQW5pbWF0ZSwgMTUwKVxuICAgICAgICBjb25zdCBpbnRJZDMgPSBzZXRJbnRlcnZhbChtb3RoZXJTaGlwLmFybXlbMl0ubFRvUkFuaW1hdGUsIDE1MClcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PmNsZWFySW50ZXJ2YWwoaW50SWQxKSwyMTAwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5jbGVhckludGVydmFsKGludElkMiksMjEwMClcbiAgICAgICAgc2V0VGltZW91dCgoKT0+Y2xlYXJJbnRlcnZhbChpbnRJZDMpLDIxMDApXG59IFxuXG5jb25zdCBwYXJzZUltYWdlID0gKGNvbnRleHQsIGZpbGVQYXRoLCBjdXJyZW50R3JpZCkgPT57XG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZmlsZVBhdGg7XG5cbiAgICBjb25zdCB4ID0gY3VycmVudEdyaWRbMF1cbiAgICBjb25zdCB5ID0gY3VycmVudEdyaWRbMV1cblxuXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4geyAgICAgICAgXG4gICAgICAgIGRyYXdPbkdyaWQoaW1hZ2UsIGNvbnRleHQsIHgsIHkpXG4gICAgfVxuXG59XG5cbi8vIEZOIHdpbGwgZHJhdyBhbiBpbWFnZSBhdCB0aGUgYXBwcm9wcmlhdGUgc3BvdCBvbiB0aGUgZ3JpZFxuY29uc3QgZHJhd09uR3JpZCA9IChpbWFnZSwgY29udGV4dCwgZ3JpZFgsIGdyaWRZLCBjbGVhclJlY3RCb29sZWFuKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmF3IG9uIGdyaWRcIilcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IDIyO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gMTMxO1xuICAgICAgICBjb25zdCB0b3BMZWZ0WCA9IDg2O1xuICAgICAgICBjb25zdCB0b3BMZWZ0WSA9IDg2OyAgICBcblxuICAgICAgICBpZiAoZ3JpZFggPT09IDAgJiYgZ3JpZFkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgdGhpcy5zY2FsZVcsIHRoaXMuc2NhbGVIIClcbiAgICAgICAgICAgIC8vd29ya3MgYW5kIG9yaWdpbmFsIGZ1bmNcbiAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBvZmZzZXRYLCBvZmZzZXRZLCBpbWFnZS53aWR0aCAvMTEuOSwgaW1hZ2UuaGVpZ2h0IC8gMTEuOSApXG4gICAgICAgICAgICBpZiAoY2xlYXJSZWN0Qm9vbGVhbil7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgODYsIDg2KVxuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBvZmZzZXRYLCBvZmZzZXRZLCA4NiwgODYpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBvZmZzZXRYLCBvZmZzZXRZLCA4NiwgODYgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdyaWRYID09PSAwICYmIGdyaWRZID4gMCl7XG4gICAgICAgICAgICAvL29yaWdpbmFsXG4gICAgICAgICAgICAvLyBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgKCh0b3BMZWZ0WCAqIGdyaWRZKSArIG9mZnNldFgpLCBvZmZzZXRZLCBpbWFnZS53aWR0aCAvMTEuOSwgaW1hZ2UuaGVpZ2h0IC8gMTEuOSApXG4gICAgICAgICAgICBpZiAoY2xlYXJSZWN0Qm9vbGVhbil7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29udGV4dC5jbGVhclJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgODYsIDg2KVxuICAgICAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBvZmZzZXRYLCBvZmZzZXRZLCA4NiwgODYpXG4gICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoKCh0b3BMZWZ0WCAqIGdyaWRZKSArIG9mZnNldFgpLCAoKHRvcExlZnRZICogZ3JpZFgpICsgb2Zmc2V0WSksIDg2LCA4NilcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgKCh0b3BMZWZ0WCAqIGdyaWRZKSArIG9mZnNldFgpLCAoKHRvcExlZnRZICogZ3JpZFgpICsgb2Zmc2V0WSksIDg2LCA4NiApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAoKHRvcExlZnRYICogZ3JpZFkpICsgb2Zmc2V0WCksIG9mZnNldFksIDg2LCA4NiApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBcbiAgICAgICAgICAgICAvL29yaWdpbmFsXG4gICAgICAgICAgICAvLyBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgKCh0b3BMZWZ0WCAqIGdyaWRZKSArIG9mZnNldFgpLCBvZmZzZXRZLCBpbWFnZS53aWR0aCAvMTEuOSwgaW1hZ2UuaGVpZ2h0IC8gMTEuOSApXG4gICAgICAgICAgICBpZiAoY2xlYXJSZWN0Qm9vbGVhbil7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9vcmlnaW5hbFxuICAgICAgICAgICAgICAgIC8vIGNvbnRleHQuY2xlYXJSZWN0KG9mZnNldFgsIG9mZnNldFksIDg2LCA4NilcbiAgICAgICAgICAgICAgICAvLyBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgODYsIDg2KVxuXG4gICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoKCh0b3BMZWZ0WCAqIGdyaWRZKSArIG9mZnNldFgpLCAoKHRvcExlZnRZICogZ3JpZFgpICsgb2Zmc2V0WSksIDg2LCA4NilcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgKCh0b3BMZWZ0WCAqIGdyaWRZKSArIG9mZnNldFgpLCAoKHRvcExlZnRZICogZ3JpZFgpICsgb2Zmc2V0WSksIDg2LCA4NiApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAoKHRvcExlZnRYICogZ3JpZFkpICsgb2Zmc2V0WCksICgodG9wTGVmdFkgKiBncmlkWCkgKyBvZmZzZXRZKSwgODYsIDg2IClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgXG4gICAgfVxuXG4gICAgLy8gZXhwb3J0IGNvbnN0IGFuaW1hdGVTcXVhcmVzID0gKGltYWdlLCBjYikgPT4ge1xuICAgIC8vICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA2NDYsIDUwNSlcbiAgICAvLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XG4gICAgLy8gICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgNzsgaisrKXtcbiAgICAvLyAgICAgICAgICAgICBkcmF3T25HcmlkKGltYWdlLCBpLCBqKVxuICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG5cbiAgICAvLyBleHBvcnQgY29uc3QgbG9hZEFsaWVuU2hpcCA9ICgpID0+IHtcbiAgICAvLyAgICAgLy8gY29uc3QgYWxpZW5TcmMgPSBcIi9zcmMvaW1hZ2VzL2FsaWVucy9zaGlwcy8wOC1OZXR1bm8ucG5nXCI7XG4gICAgLy8gICAgIC8vIGNvbnN0IGFsaWVuU2hpcCA9IG5ldyBJbWFnZSgpO1xuICAgIC8vICAgICAvLyBhbGllblNoaXAuc3JjID0gYWxpZW5TcmM7XG5cbiAgICAvLyAgICAgLy8gYWxpZW5TaGlwLm9ubG9hZCggKCkgPT4ge1xuICAgIC8vICAgICAvLyAgICAgcmV0dXJuIHRydWVcbiAgICAvLyAgICAgLy8gfSlcblxuICAgIC8vIH1cblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNhbnZhc0V2ZW50cztcblxuXG5cbiIsImltcG9ydCB7YnVpbGRBc3NldFBhdGh9IGZyb20gXCIuL3V0aWwuanNcIlxuaW1wb3J0IEFsaWVuU2hpcCBmcm9tIFwiLi9hbGllbl9zaGlwXCJcblxuaW1wb3J0IG5lcHR1bmUgZnJvbSBcIi4uL2ltYWdlcy9hbGllbnMvc2hpcHMvMDgtTmV0dW5vLnBuZ1wiO1xuaW1wb3J0IHNhdHVybiBmcm9tIFwiLi4vaW1hZ2VzL2FsaWVucy9zaGlwcy8wNi1TYXR1cm5vLnBuZ1wiO1xuaW1wb3J0IHBsdXRvIGZyb20gXCIuLi9pbWFnZXMvYWxpZW5zL3NoaXBzLzA5LVBsdXRvLnBuZ1wiO1xuXG5jbGFzcyBNb3RoZXJTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5hcm15ID0gW11cblxuICAgIH1cblxuICAgIG1ha2VTaGlwcygpe1xuICAgICAgICBsZXQgc2hpcE51bSA9IHRoaXMuYXJteS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3Qgc2hpcEZpbGVzID0gW1xuICAgICAgICAgICAgYnVpbGRBc3NldFBhdGgobmVwdHVuZSksXG4gICAgICAgICAgICBidWlsZEFzc2V0UGF0aChzYXR1cm4pLFxuICAgICAgICAgICAgYnVpbGRBc3NldFBhdGgocGx1dG8pXG4gICAgICAgIF1cbiAgICAgICAgLy8gY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHhTdGFydCwgeVN0YXJ0LCBzY2FsZVcsIHNjYWxlSCl7XG4gICAgICAgIHdoaWxlKHRoaXMuYXJteS5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIHNoaXBOdW0gPSB0aGlzLmFybXkubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgeVBvcyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKHNoaXBOdW0gPT09IDApe1xuICAgICAgICAgICAgICAgIHlQb3MgPSBzaGlwTnVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5UG9zID0gc2hpcE51bSAqIDQwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGllblNyYyA9IHNoaXBGaWxlc1tzaGlwTnVtXVxuICAgICAgICAgICAgY29uc3QgYWxpZW5TaGlwID0gbmV3IEFsaWVuU2hpcCh0aGlzLmNvbnRleHQsIGFsaWVuU3JjLCAxLCB5UG9zLCA0MCwgNDApXG4gICAgICAgICAgICB0aGlzLmFybXkucHVzaChhbGllblNoaXApXG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3RoZXJTaGlwIiwiaW1wb3J0IHByb2dyZXNzQmFyIGZyb20gXCIuL3Byb2dyZXNzQmFyLmpzXCJcblxuLy8gY29udGFpbnMgbW9uZXksIGFuZCBjdXJyZW50IGJ1aWxkIHBvaW50cyBmb3IgcGxheWVyIHRocm91Z2hvdXQgdGhlIGdhbWVcbmV4cG9ydCBjb25zdCBwbGF5ZXJQb2ludHMgPSB7XG4gICAgY29tbXVuaXR5OiAwLFxuICAgIHByb2R1Y3Rpb246IDAsXG4gICAgcmVzb3VyY2VzOiAwXG59XG5cbi8vIGNPUnAgc3RhbmRzIGZvciBjb21tdW5pdHkgb3IgcHJvZHVjdGlvblxuZXhwb3J0IGNvbnN0IGFkanVzdFBvaW50cyA9IChwb2ludHMsIGNvbnRleHQsIHN0eWxlID0gXCJjb21tdW5pdHlcIikgPT4ge1xuICAgIGRlYnVnZ2VyXG4gICAgbGV0IGZpbGxQZXJjZW50YWdlOyBcbiAgICBzd2l0Y2godHJ1ZSl7XG4gICAgICAgIGNhc2UgKHBvaW50cyA8PSA0Mik6XG4gICAgICAgICAgICBmaWxsUGVyY2VudGFnZSA9IDEwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKHBvaW50cyA+IDQyICYmIHBvaW50cyA8PSA4NCk6XG4gICAgICAgICAgICBmaWxsUGVyY2VudGFnZSA9IDIwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKHBvaW50cyA+IDg0ICYmIHBvaW50cyA8PSAxMjYpOlxuICAgICAgICAgICAgZmlsbFBlcmNlbnRhZ2UgPSAzMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChwb2ludHMgPiAxMjYgJiYgcG9pbnRzIDw9IDE2OCk6XG4gICAgICAgICAgICBmaWxsUGVyY2VudGFnZSA9IDQwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKHBvaW50cyA+IDE2OCAmJiBwb2ludHMgPD0gMjEwKTpcbiAgICAgICAgICAgIGZpbGxQZXJjZW50YWdlID0gNTA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAocG9pbnRzID4gMjEwICYmIHBvaW50cyA8PSAyNTIpOlxuICAgICAgICAgICAgZmlsbFBlcmNlbnRhZ2UgPSA2MDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChwb2ludHMgPiAyNTIgJiYgcG9pbnRzIDw9IDI5NCk6XG4gICAgICAgICAgICBmaWxsUGVyY2VudGFnZSA9IDcwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgKHBvaW50cyA+IDI5NCAmJiBwb2ludHMgPD0gMzM2KTpcbiAgICAgICAgICAgIGZpbGxQZXJjZW50YWdlID0gODA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAocG9pbnRzID4gMzM2ICYmIHBvaW50cyA8PSAzNzgpOlxuICAgICAgICAgICAgZmlsbFBlcmNlbnRhZ2UgPSA5MDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChwb2ludHMgPiAzNzgpOlxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGZpbGxQZXJjZW50YWdlID0gMTAwO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKHN0eWxlID09PSBcImNvbW11bml0eVwiKXtcbiAgICAgICAgLy9zYXZlIHRvIHZhcmlhYmxlIGJlY2F1c2UgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGNvbnN0IGdyZWVuQmFyID0gbmV3IHByb2dyZXNzQmFyKGNvbnRleHQsIC0zNCwgMTA1LCBcImdyZWVuXCIsIFwidlwiLCBmaWxsUGVyY2VudGFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYmx1ZUJhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCA1OTAsIDEwNSwgXCJibHVlXCIsIFwidlwiLCBmaWxsUGVyY2VudGFnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3Bhd25SZXNvdXJjZXMgPSAoKSA9PiB7XG4gICAgcGxheWVyUG9pbnRzLnJlc291cmNlcyArPSA1O1xufVxuXG5leHBvcnQgY29uc3QgYWRqdXN0UmVzb3VyY2VzID0gKG51bSkgPT4ge1xuICAgIGRlYnVnZ2VyXG4gICAgcGxheWVyUG9pbnRzLnJlc291cmNlcyArPSBudW07XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3UmVzb3VyY2VzVGV4dCA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRYID0gKChjb250ZXh0LmNhbnZhcy53aWR0aCAvIDIpIC0gMTAyKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdChzdGFydFgsIDQ3OCwgKHN0YXJ0WCArIDM1MCksIDMwKVxuXG4gICAgY29udGV4dC5mb250ID0gJ2JvbGQgMzBweCBTYW5zLVNlcmlmJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzY2QTFFN1wiXG4gICAgLy8gY29udGV4dC5zdHJva2VTdHlsZSA9IFwiI0M1RTBDRlwiO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM1NTkwNkZcIjtcbiAgICBjb250ZXh0LmZpbGxUZXh0KFwiUmVzb3VyY2VzOiBcIiArIHBsYXllclBvaW50cy5yZXNvdXJjZXMsIHN0YXJ0WCwgNTAwKTtcbiAgICBjb250ZXh0LnN0cm9rZVRleHQoXCJSZXNvdXJjZXM6IFwiICsgcGxheWVyUG9pbnRzLnJlc291cmNlcywgc3RhcnRYLCA1MDApO1xuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3UmVzb3VyY2VzVGV4dChjb250ZXh0KSlcblxuICB9IiwiaW1wb3J0IGhCbGFuayBmcm9tIFwiLi4vaW1hZ2VzL2hfcHJvZ3Jlc3NfYmFycy9IX0JhckJhY2tncm91bmQucG5nXCJcbmltcG9ydCBoQmx1ZSBmcm9tIFwiLi4vaW1hZ2VzL2hfcHJvZ3Jlc3NfYmFycy9IX0JsdWVCYXIucG5nXCJcbmltcG9ydCBoR3JlZW4gZnJvbSBcIi4uL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9HcmVlbkJhci5wbmdcIlxuaW1wb3J0IGhSZWQgZnJvbSBcIi4uL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9SZWRCYXIucG5nXCJcbmltcG9ydCBoWWVsbG93IGZyb20gXCIuLi9pbWFnZXMvaF9wcm9ncmVzc19iYXJzL0hfWWVsbG93QmFyLnBuZ1wiXG5cblxuaW1wb3J0IHZCbGFuayBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JhckJhY2tncm91bmQucG5nXCJcbmltcG9ydCB2Qmx1ZTEwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjEwLnBuZ1wiXG5pbXBvcnQgdkJsdWUyMCBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXIyMC5wbmdcIlxuaW1wb3J0IHZCbHVlMzAgZnJvbSBcIi4uL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyMzAucG5nXCJcbmltcG9ydCB2Qmx1ZTQwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjQwLnBuZ1wiXG5pbXBvcnQgdkJsdWU1MCBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXI1MC5wbmdcIlxuaW1wb3J0IHZCbHVlNjAgZnJvbSBcIi4uL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyNjAucG5nXCJcbmltcG9ydCB2Qmx1ZTcwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfQmx1ZUJhcjcwLnBuZ1wiXG5pbXBvcnQgdkJsdWU4MCBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXI4MC5wbmdcIlxuaW1wb3J0IHZCbHVlOTAgZnJvbSBcIi4uL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyOTAucG5nXCJcbmltcG9ydCB2Qmx1ZTEwMCBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXIxMDAucG5nXCJcblxuaW1wb3J0IHZHcmVlbjEwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIxMC5wbmdcIlxuaW1wb3J0IHZHcmVlbjIwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIyMC5wbmdcIlxuaW1wb3J0IHZHcmVlbjMwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIzMC5wbmdcIlxuaW1wb3J0IHZHcmVlbjQwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI0MC5wbmdcIlxuaW1wb3J0IHZHcmVlbjUwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI1MC5wbmdcIlxuaW1wb3J0IHZHcmVlbjYwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI2MC5wbmdcIlxuaW1wb3J0IHZHcmVlbjcwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI3MC5wbmdcIlxuaW1wb3J0IHZHcmVlbjgwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI4MC5wbmdcIlxuaW1wb3J0IHZHcmVlbjkwIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXI5MC5wbmdcIlxuaW1wb3J0IHZHcmVlbjEwMCBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0dyZWVuQmFyMTAwLnBuZ1wiXG5cblxuaW1wb3J0IHZHcmVlbiBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0dyZWVuQmFyMTAwLnBuZ1wiXG4vLyBpbXBvcnQgdlJlZCBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX1JlZEJhci5wbmdcIlxuLy8gaW1wb3J0IHZZZWxsb3cgZnJvbSBcIi4uL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9ZZWxsb3dCYXIucG5nXCJcbmltcG9ydCB7YnVpbGRBc3NldFBhdGh9IGZyb20gXCIuL3V0aWwuanNcIlxuXG5cbmNsYXNzIHByb2dyZXNzQmFyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdGFydFgsIHN0YXJ0WSwgY29sb3IsIG9yaWVudGF0aW9uLCB2YWx1ZSl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYO1xuICAgICAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSAzMDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvblxuXG4gICAgICAgIHRoaXMuYmxhbmtTcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY29sb3JTcHJpdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5sb2FkU3JjKG9yaWVudGF0aW9uKVxuICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgbG9hZFNyYyhvcmllbnRhdGlvbil7XG4gICAgICAgIGlmKHRoaXMuY29sb3IgPT09IFwiYmxhbmtcIil7XG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kU3JjID0gdGhpcy5vcmllbnRhdGlvbkFuZENyZWF0ZShvcmllbnRhdGlvbik7XG4gICAgICAgICAgICB0aGlzLmJsYW5rU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLmJsYW5rU3ByaXRlLnNyYyA9IGJhY2tncm91bmRTcmM7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuYmxhbmtTcHJpdGUub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyB0aGF0LmNvbnRleHQuZHJhd0ltYWdlKHRoYXQuYmxhbmtTcHJpdGUsIHRoYXQuc3RhcnRYLCB0aGF0LnN0YXJ0WSwgMTAwLCAzNjQpO1xuICAgICAgICAgICAgdGhhdC5jb250ZXh0LmRyYXdJbWFnZSh0aGF0LmJsYW5rU3ByaXRlLCB0aGF0LnN0YXJ0WCwgdGhhdC5zdGFydFksIDEwMCwgMzc4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQmFyU3JjID0gdGhpcy5zZWxlY3RDb2xvcih0aGlzLmNvbG9yLCBvcmllbnRhdGlvbiwgdGhpcy52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuY29sb3JTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuY29sb3JTcHJpdGUuc3JjID0gY29sb3JCYXJTcmM7IFxuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jb2xvclNwcml0ZS5vbmxvYWQgPSAoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5jb250ZXh0LmRyYXdJbWFnZSh0aGF0LmNvbG9yU3ByaXRlLCB0aGF0LnN0YXJ0WCwgdGhhdC5zdGFydFksIDEwMCwgMjc4KTtcbiAgICAgICAgICAgICAgICAvLyAzMCBpcyBnb29kIHN0YXJ0XG4gICAgICAgICAgICAgICAgLy8gdGhhdC5jb250ZXh0LmRyYXdJbWFnZSh0aGF0LmNvbG9yU3ByaXRlLCB0aGF0LnN0YXJ0WCwgdGhhdC5zdGFydFksIDEwMCwgMzApO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdGhhdC5jb250ZXh0LmRyYXdJbWFnZSh0aGF0LmNvbG9yU3ByaXRlLCB0aGF0LnN0YXJ0WCwgdGhhdC5zdGFydFksIDEwMCwgNDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgXG5cblxuICAgIH1cblxuXG5cbiAgICAvLyBsb2FkU3JjKG9yaWVudGF0aW9uKXtcbiAgICAgICAgXG4gICAgLy8gICAgIGNvbnN0IGJhY2tncm91bmRTcmMgPSB0aGlzLm9yaWVudGF0aW9uQW5kQ3JlYXRlKG9yaWVudGF0aW9uKTtcbiAgICAvLyAgICAgY29uc3QgY29sb3JCYXJTcmMgPSB0aGlzLnNlbGVjdENvbG9yKHRoaXMuY29sb3IsIG9yaWVudGF0aW9uKVxuICAgICAgICBcbiAgICAvLyAgICAgdGhpcy5ibGFua1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgIC8vICAgICB0aGlzLmNvbG9yU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAvLyAgICAgdGhpcy5ibGFua1Nwcml0ZS5zcmMgPSBiYWNrZ3JvdW5kU3JjOyBcbiAgICAvLyAgICAgdGhpcy5jb2xvclNwcml0ZS5zcmMgPSBjb2xvckJhclNyYzsgXG4gICAgLy8gICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIC8vICAgICB0aGlzLmJsYW5rU3ByaXRlLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgLy8gICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgdGhhdC5jb250ZXh0LmRyYXdJbWFnZSh0aGF0LmJsYW5rU3ByaXRlLCB0aGF0LnN0YXJ0WCwgdGhhdC5zdGFydFksIDEwMCwgMTAwKTtcbiAgICAvLyAgICAgICAgIHRoYXQuY29udGV4dC5kcmF3SW1hZ2UodGhhdC5jb2xvclNwcml0ZSwgdGhhdC5zdGFydFgsIHRoYXQuc3RhcnRZLCAxMDAsIDEwMCk7XG4gICAgLy8gICAgIH1cblxuXG4gICAgLy8gfVxuXG4gICAgICAgIFxuICAgICAgICAvLyBzZWxlY3QgaW5pdGlhbCBvcmllbnRhdGlvbiBvZiBwcm9ncmVzcyBiYXIuIFZlcnRpY2FsIG9yIEhvcml6b250YWwuXG4gICAgb3JpZW50YXRpb25BbmRDcmVhdGUob3JpKXtcbiAgICAgICAgaWYob3JpID09PSBcImhcIiB8fCBvcmkgPT09IFwiSFwiKXtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRBc3NldFBhdGgoaEJsYW5rKVxuICAgICAgICB9IGVsc2UgaWYob3JpID09PVwidlwiIHx8IG9yaSA9PT0gXCJWXCIpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRBc3NldFBhdGgodkJsYW5rKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAgICAgIC8vIHNlbGVjdCBjb2xvciBvZiBwcm9ncmVzcyBiYXIgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgIHNlbGVjdENvbG9yKGNvbG9yLCBvcmksIHZhbHVlKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IGhDb2xvcnMgPSB7XG4gICAgICAgICAgICBcImJsYW5rXCI6IGJ1aWxkQXNzZXRQYXRoKGhCbGFuayksXG4gICAgICAgICAgICBcImJsdWVcIjogYnVpbGRBc3NldFBhdGgoaEJsdWUpLFxuICAgICAgICAgICAgXCJncmVlblwiOiBidWlsZEFzc2V0UGF0aChoR3JlZW4pLFxuICAgICAgICAgICAgXCJyZWRcIjogYnVpbGRBc3NldFBhdGgoaFJlZCksXG4gICAgICAgICAgICBcInllbGxvd1wiOiBidWlsZEFzc2V0UGF0aChoWWVsbG93KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdkNvbG9ycyA9IHtcbiAgICAgICAgICAgIFwiYmxhbmtcIjogYnVpbGRBc3NldFBhdGgodkJsYW5rKSxcbiAgICAgICAgICAgIFwiYmx1ZVwiOiB7MTA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlMTApLFxuICAgICAgICAgICAgICAgICAgICAgMjA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlMjApLFxuICAgICAgICAgICAgICAgICAgICAgMzA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlMzApLFxuICAgICAgICAgICAgICAgICAgICAgNDA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlNDApLFxuICAgICAgICAgICAgICAgICAgICAgNTA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlNTApLFxuICAgICAgICAgICAgICAgICAgICAgNjA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlNjApLFxuICAgICAgICAgICAgICAgICAgICAgNzA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlNzApLFxuICAgICAgICAgICAgICAgICAgICAgODA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlODApLFxuICAgICAgICAgICAgICAgICAgICAgOTA6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlOTApLFxuICAgICAgICAgICAgICAgICAgICAgMTAwOiBidWlsZEFzc2V0UGF0aCh2Qmx1ZTEwMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdyZWVuXCI6IHsxMDogYnVpbGRBc3NldFBhdGgodkdyZWVuMTApLFxuICAgICAgICAgICAgICAgICAgICAgMjA6IGJ1aWxkQXNzZXRQYXRoKHZHcmVlbjIwKSxcbiAgICAgICAgICAgICAgICAgICAgIDMwOiBidWlsZEFzc2V0UGF0aCh2R3JlZW4zMCksXG4gICAgICAgICAgICAgICAgICAgICA0MDogYnVpbGRBc3NldFBhdGgodkdyZWVuNDApLFxuICAgICAgICAgICAgICAgICAgICAgNTA6IGJ1aWxkQXNzZXRQYXRoKHZHcmVlbjUwKSxcbiAgICAgICAgICAgICAgICAgICAgIDYwOiBidWlsZEFzc2V0UGF0aCh2R3JlZW42MCksXG4gICAgICAgICAgICAgICAgICAgICA3MDogYnVpbGRBc3NldFBhdGgodkdyZWVuNzApLFxuICAgICAgICAgICAgICAgICAgICAgODA6IGJ1aWxkQXNzZXRQYXRoKHZHcmVlbjgwKSxcbiAgICAgICAgICAgICAgICAgICAgIDkwOiBidWlsZEFzc2V0UGF0aCh2R3JlZW45MCksXG4gICAgICAgICAgICAgICAgICAgICAxMDA6IGJ1aWxkQXNzZXRQYXRoKHZHcmVlbjEwMClcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaSA9PT0gXCJoXCIgfHwgb3JpID09PSBcIkhcIil7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IGhDb2xvcnNbY29sb3JdO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1lbHNlIGlmKG9yaSA9PT1cInZcIiB8fCBvcmkgPT09IFwiVlwiKXtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gdkNvbG9yc1tjb2xvcl1bdmFsdWVdO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcblxuICAgIGluY3JlYXNlRmlsbCh2YWx1ZSl7XG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5jb2xvclNwcml0ZSwgdGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCAyMiwgMjAwKVxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY29sb3JTcHJpdGUsIHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgMjIsIDIwMClcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQmFyU3JjID0gdGhpcy5zZWxlY3RDb2xvcih0aGlzLmNvbG9yLCB0aGlzLm9yaWVudGF0aW9uLCB0aGlzLnZhbHVlKVxuICAgICAgICAgICAgLy8gdGhpcy5jb2xvclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5jb2xvclNwcml0ZS5zcmMgPSBjb2xvckJhclNyYzsgXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmNvbG9yU3ByaXRlLm9ubG9hZCA9IChlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGF0LmNvbnRleHQuZHJhd0ltYWdlKHRoYXQuY29sb3JTcHJpdGUsIHRoYXQuc3RhcnRYLCB0aGF0LnN0YXJ0WSwgMTAwLCAyNzgpO1xuICAgICAgICAgICAgICAgIC8vIDMwIGlzIGdvb2Qgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyB0aGF0LmNvbnRleHQuZHJhd0ltYWdlKHRoYXQuY29sb3JTcHJpdGUsIHRoYXQuc3RhcnRYLCB0aGF0LnN0YXJ0WSwgMTAwLCAzMCk7XG4gICAgICAgICAgICAgICAgdGhhdC5jb250ZXh0LmRyYXdJbWFnZSh0aGF0LmNvbG9yU3ByaXRlLCB0aGF0LnN0YXJ0WCwgdGhhdC5zdGFydFksIDEwMCwgNDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgXG5cbiAgICBkZWNyZWFzZUZpbGwodmFsdWUpe1xuXG4gICAgfVxuXG4gICAgcmVzZXRGaWxsKCl7XG5cbiAgICB9XG5cbiAgICBkcmF3QmFyKGNvbnRleHQpe1xuICAgICAgICAvLyBjb250ZXh0LmRyYXdJbWFnZSgpXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuYmxhbmtTcHJpdGUsIHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgMTAwLCAxMDApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9ncmVzc0JhcjtcblxuIiwiZXhwb3J0IGNvbnN0IGJ1aWxkQXNzZXRQYXRoID0gKGltZ1NyYykgPT4ge1xuICAgIHJldHVybiBgLi9kaXN0LyR7aW1nU3JjfWA7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==