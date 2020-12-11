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

/***/ "./src/images/community/pyramids/golden_pyramid.png":
/*!**********************************************************!*\
  !*** ./src/images/community/pyramids/golden_pyramid.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/golden_pyramid.png");

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

/***/ "./src/images/v_progress_bars/V_BlueBar.png":
/*!**************************************************!*\
  !*** ./src/images/v_progress_bars/V_BlueBar.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_BlueBar.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_GreenBar.png":
/*!***************************************************!*\
  !*** ./src/images/v_progress_bars/V_GreenBar.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_GreenBar.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_RedBar.png":
/*!*************************************************!*\
  !*** ./src/images/v_progress_bars/V_RedBar.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_RedBar.png");

/***/ }),

/***/ "./src/images/v_progress_bars/V_YellowBar.png":
/*!****************************************************!*\
  !*** ./src/images/v_progress_bars/V_YellowBar.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/V_YellowBar.png");

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



document.addEventListener("DOMContentLoaded", function () {
  var canvasHome = document.getElementById("canvas-home");
  var context = canvasHome.getContext('2d');
  Object(_scripts_canvas_events_js__WEBPACK_IMPORTED_MODULE_0__["canvasEvents"])(canvasHome, context);
  Object(_scripts_canvas_events_js__WEBPACK_IMPORTED_MODULE_0__["drawGrass"])(context); //draw Production progress bar

  var productionBar = new _scripts_progressBar_js__WEBPACK_IMPORTED_MODULE_1__["default"](context, -34, 375, "red", "v");
  var productionBar2 = new _scripts_progressBar_js__WEBPACK_IMPORTED_MODULE_1__["default"](context, 590, 375, "yellow", "v"); // productionBar.drawBar(context)
  // productionBar.blankSprite.onload = () => {
  //     debugger
  //     context.drawImage(productionBar.blankSprite, productionBar.startX, productionBar.startY);
  //     context.drawImage(productionBar.colorSprite, productionBar.startX, productionBar.startY);
  // }
  // productionBar.increaseFill()
  // progressBar(context, 626, 476, "blue")

  Object(_scripts_canvas_events_js__WEBPACK_IMPORTED_MODULE_0__["summonAliens"])(context); // let choice = menu.options[menu.selectedIndex].value
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
/* harmony import */ var _images_community_pyramids_golden_pyramid_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/community/pyramids/golden_pyramid.png */ "./src/images/community/pyramids/golden_pyramid.png");
/* harmony import */ var _images_terrain_grass_grass_mix_d_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/terrain_grass/grass_mix_d.jpg */ "./src/images/terrain_grass/grass_mix_d.jpg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.log("hello from canvas events");




 // import Alien from "./alien_ship"
// //ex: [3,4]

var currentGrid = undefined; // function buildAssetPath(imgSrc) {
//     return `./dist/${imgSrc}`;
// }

var gameOptions = {
  0: {
    0: [false, {}],
    1: "clicked 0,1",
    2: "clicked 0,2",
    3: "clicked 0,3",
    4: "clicked 0,4",
    5: "clicked 0,5",
    6: "clicked 0,6"
  }
}; // const community1={pyramids:
//                         {0:"you did it!",
//                          1: "/src/images/community/pyramids/golden_pyramid.png"}
//                     }
// skeleton
// {isPresent: false, klass: "", level:0}

var onPlayerGrid = buildPlayerState();

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
      file: Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_community_pyramids_golden_pyramid_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
      name: "goldenPyramid",
      cBoost: 10,
      pBoost: 0,
      cORp: "community",
      klass: "pyramids",
      index: 0
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
    var choiceStr = menu.options[menu.selectedIndex].value;
    var chosenBuilding = civilizationMenuSelect(choiceStr);
    var filePathBuild = chosenBuilding.file; //place sprite if not occupied

    if (!isGridOccupied()) {
      parseImage(context, filePathBuild, currentGrid);
      occupyGrid(chosenBuilding); // Remove error message if there is one

      if (playerAlert.childElementCount > 0) {
        playerAlert.removeChild(playerAlert.childNodes[0]);
      }
    } // Already a building on a grid
    else if (isGridOccupied()) {
        var x = currentGrid[0];
        var y = currentGrid[1];
        var objAtGridPos = onPlayerGrid[x][y]; // Player tries to add the same building to the occupied grid

        if (chosenBuilding.klass === objAtGridPos.klass && chosenBuilding.index === objAtGridPos.level) {
          // Add Error message to the DOM -> "That building is already there. Try upgrading!"
          var ele = document.createElement('p');
          var text = document.createTextNode("That building is already there. Try upgrading!");
          ele.appendChild(text);
          ele.setAttribute('class', 'playerAlert');
          playerAlert.appendChild(ele);
        } else {
          //Remove error message 
          // ********************** ADD FUNCTION HERE TO UPGRADE BUILDING
          playerAlert.removeChild(playerAlert.childNodes[0]);
        }
      } // reset default of dropdown


    if (menu.selectedIndex != null) {
      menu.selectedIndex = null;
    }
  }); // menuContainer.classList.toggle("shrink")
  // debugger
  // menuContainer.classList.toggle("hidden")
  // console.log(canvasRect)
  // function onDown(e){
  //         cx = e.pageX;
  //         cy = e.pageY;
  //     // console.log(`X: ${cx}, Y: ${cy}`)
  // }

  function getCoords(e) {
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
  }

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
  console.log(civilization[cORp][klass][index]);
  return civilization[cORp][klass][index]; // return community1[first][second]
}; //function will draw grass


var drawGrass = function drawGrass(context) {
  var img1 = new Image();
  img1.src = Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildAssetPath"])(_images_terrain_grass_grass_mix_d_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);

  img1.onload = function () {
    drawRow(context, img1, 22, 131);
    drawRow(context, img1, 22, 217);
    drawRow(context, img1, 22, 303);
    drawRow(context, img1, 22, 389);
  };

  var drawRow = function drawRow(context, image, rowX, rowY) {
    for (var i = 0; i < 7; i++) {
      // context.drawImage(image, rowX, rowY, image.width /11.9, image.height / 11.9 )
      context.drawImage(image, rowX, rowY, 86, 86); // debugger

      rowX += 86;
    }
  };
};

var isGridOccupied = function isGridOccupied() {
  var x = currentGrid[0];
  var y = currentGrid[1];
  return onPlayerGrid[x][y].isPresent;
};

var occupyGrid = function occupyGrid(chosenBuilding) {
  var x = currentGrid[0];
  var y = currentGrid[1];
  onPlayerGrid[x][y].isPresent = true;
  onPlayerGrid[x][y].cORp = chosenBuilding.cORp;
  onPlayerGrid[x][y].klass = chosenBuilding.klass;
  onPlayerGrid[x][y].level = chosenBuilding.index;
  return onPlayerGrid[x][y];
};

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
};

var drawOnGrid = function drawOnGrid(image, context, gridX, gridY) {
  console.log("draw on grid");
  var offsetX = 22;
  var offsetY = 131;
  var topLeftX = 86;
  var topLeftY = 86;

  if (gridX === 0 && gridY === 0) {
    // context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH )
    //works and original func
    // context.drawImage(image, offsetX, offsetY, image.width /11.9, image.height / 11.9 )
    context.drawImage(image, offsetX, offsetY, 86, 86);
  } else if (gridX === 0 && gridY > 0) {
    //original
    // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
    context.drawImage(image, topLeftX * gridY + offsetX, offsetY, 86, 86);
  } else {
    // debugger
    //original
    // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
    context.drawImage(image, topLeftX * gridY + offsetX, topLeftY * gridX + offsetY, 86, 86);
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
      var shipNum = this.army.length; // const shipFiles = [
      //     "/src/images/aliens/ships/08-Netuno.png",
      //     "/src/images/aliens/ships/06-Saturno.png",
      //     "/src/images/aliens/ships/09-Pluto.png"
      // ]

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
/* harmony import */ var _images_v_progress_bars_V_BlueBar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/v_progress_bars/V_BlueBar.png */ "./src/images/v_progress_bars/V_BlueBar.png");
/* harmony import */ var _images_v_progress_bars_V_GreenBar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/v_progress_bars/V_GreenBar.png */ "./src/images/v_progress_bars/V_GreenBar.png");
/* harmony import */ var _images_v_progress_bars_V_RedBar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/v_progress_bars/V_RedBar.png */ "./src/images/v_progress_bars/V_RedBar.png");
/* harmony import */ var _images_v_progress_bars_V_YellowBar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/v_progress_bars/V_YellowBar.png */ "./src/images/v_progress_bars/V_YellowBar.png");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }













var progressBar = /*#__PURE__*/function () {
  function progressBar(context, startX, startY, color, orientation) {
    _classCallCheck(this, progressBar);

    this.context = context;
    this.startX = startX;
    this.startY = startY;
    this.color = color;
    this.blankSprite = undefined; // this.blankSprite.src = this.orientationAndCreate(orientation);

    this.colorSprite = undefined; // this.colorSprite.src = this.selectColor(this.color, orientation);
    // this.orientation = 0; 

    this.value = 0;
    this.loadSrc(orientation); // this.blankSprite.onload = this.blankSprite.onload.bind(this);
    // this.colorSprite.onload = this.colorSprite.onload.bind(this);
  }

  _createClass(progressBar, [{
    key: "loadSrc",
    value: function loadSrc(orientation) {
      var backgroundSrc = this.orientationAndCreate(orientation);
      var colorBarSrc = this.selectColor(this.color, orientation);
      this.blankSprite = new Image();
      this.colorSprite = new Image();
      this.blankSprite.src = backgroundSrc;
      this.colorSprite.src = colorBarSrc;
      var that = this;

      this.blankSprite.onload = function (e) {
        debugger;
        that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 100);
        that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 100);
      };
    } // select initial orientation of progress bar. Vertical or Horizontal.

  }, {
    key: "orientationAndCreate",
    value: function orientationAndCreate(ori) {
      if (ori === "h" || ori === "H") {
        // debugger
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_h_progress_bars_H_BarBackground_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
      } else if (ori === "v" || ori === "V") {
        // debugger
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_v_progress_bars_V_BarBackground_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
      }
    } // select color of progress bar vertical or horizontal

  }, {
    key: "selectColor",
    value: function selectColor(color, ori) {
      var selected = undefined;
      var hColors = {
        "blue": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_h_progress_bars_H_BlueBar_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        "green": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_h_progress_bars_H_GreenBar_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        "red": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_h_progress_bars_H_RedBar_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        "yellow": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_h_progress_bars_H_YellowBar_png__WEBPACK_IMPORTED_MODULE_4__["default"])
      };
      var vColors = {
        "blue": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_v_progress_bars_V_BlueBar_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        "green": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_v_progress_bars_V_GreenBar_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        "red": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_v_progress_bars_V_RedBar_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        "yellow": Object(_util_js__WEBPACK_IMPORTED_MODULE_10__["buildAssetPath"])(_images_v_progress_bars_V_YellowBar_png__WEBPACK_IMPORTED_MODULE_9__["default"])
      };

      if (ori === "h" || ori === "H") {
        selected = hColors[color];
        return selected;
      } else if (ori === "v" || ori === "V") {
        selected = vColors[color];
        return selected;
      }
    }
  }, {
    key: "increaseFill",
    value: function increaseFill(value) {// this.context.drawImage(this.colorSprite, this.startX, this.startY, 22, 200)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hbGllbnMvc2hpcHMvMDYtU2F0dXJuby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hbGllbnMvc2hpcHMvMDgtTmV0dW5vLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FsaWVucy9zaGlwcy8wOS1QbHV0by5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21tdW5pdHkvcHlyYW1pZHMvZ29sZGVuX3B5cmFtaWQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaF9wcm9ncmVzc19iYXJzL0hfQmFyQmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9CbHVlQmFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hfcHJvZ3Jlc3NfYmFycy9IX0dyZWVuQmFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hfcHJvZ3Jlc3NfYmFycy9IX1JlZEJhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9ZZWxsb3dCYXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGVycmFpbl9ncmFzcy9ncmFzc19taXhfZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CYXJCYWNrZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX0JsdWVCYXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfUmVkQmFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX1llbGxvd0Jhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FsaWVuX3NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2FudmFzX2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb3RoZXJzaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0hvbWUiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2FudmFzRXZlbnRzIiwiZHJhd0dyYXNzIiwicHJvZHVjdGlvbkJhciIsInByb2dyZXNzQmFyIiwicHJvZHVjdGlvbkJhcjIiLCJzdW1tb25BbGllbnMiLCJBbGllblNoaXAiLCJmaWxlUGF0aCIsInhTdGFydCIsInlTdGFydCIsInNjYWxlVyIsInNjYWxlSCIsInNwcml0ZSIsInVuZGVmaW5lZCIsIm1vdmVtZW50cyIsIm1vdmVJZHgiLCJsb2FkQWxpZW5TaGlwIiwiYmluZCIsImxUb1JBbmltYXRlIiwiZHJhd1NoaXAiLCJtb3ZlU3BhblgiLCJpIiwicHVzaCIsIngiLCJ5IiwiYWxpZW5TcmMiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsInRvcExlZnRYIiwidG9wTGVmdFkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEdyaWQiLCJnYW1lT3B0aW9ucyIsIm9uUGxheWVyR3JpZCIsImJ1aWxkUGxheWVyU3RhdGUiLCJidWlsZFBsYXllckdyaWQiLCJqIiwiaXNQcmVzZW50IiwiY09ScCIsImtsYXNzIiwibGV2ZWwiLCJjaXZpbGl6YXRpb24iLCJjb21tdW5pdHkiLCJwYXJrcyIsInB5cmFtaWRzIiwiZmlsZSIsImJ1aWxkQXNzZXRQYXRoIiwicHlyYW1pZDAiLCJuYW1lIiwiY0Jvb3N0IiwicEJvb3N0IiwiaW5kZXgiLCJydWlucyIsIm1lZGl0YXRpb25DaXJjbGVzIiwidHJlZXMiLCJwcm9kdWN0aW9uIiwiZmFybXMiLCJidWlsZGluZ3MiLCJob3VzZXMiLCJlbmVyZ3kiLCJ3aW5kIiwic29sYXIiLCJoeWRybyIsIm1lbnVDb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWVudSIsInBsYXllckFsZXJ0IiwiZSIsImdldENvb3JkcyIsIkFycmF5IiwiZnJvbSIsImNsYXNzTGlzdCIsImluY2x1ZGVzIiwidG9nZ2xlIiwibGVuIiwib3B0aW9ucyIsInNldEF0dHJpYnV0ZSIsImNob2ljZVN0ciIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImNob3NlbkJ1aWxkaW5nIiwiY2l2aWxpemF0aW9uTWVudVNlbGVjdCIsImZpbGVQYXRoQnVpbGQiLCJpc0dyaWRPY2N1cGllZCIsInBhcnNlSW1hZ2UiLCJvY2N1cHlHcmlkIiwiY2hpbGRFbGVtZW50Q291bnQiLCJyZW1vdmVDaGlsZCIsImNoaWxkTm9kZXMiLCJvYmpBdEdyaWRQb3MiLCJlbGUiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjYW52YXNSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3giLCJjeSIsInB4IiwicGFnZVgiLCJweSIsInBhZ2VZIiwibGVmdCIsInRvcCIsImNvbCIsIk1hdGgiLCJmbG9vciIsInJvdyIsInNlZUdyaWRPcHRpb25zIiwiZ3JpZENsaWNrIiwic2VsZWN0ZWQiLCJvcHRpb25zQXJyIiwic3BsaXQiLCJpbWcxIiwiZ3Jhc3NEIiwib25sb2FkIiwiZHJhd1JvdyIsImltYWdlIiwicm93WCIsInJvd1kiLCJtb3RoZXJTaGlwIiwiTW90aGVyU2hpcCIsIm1ha2VTaGlwcyIsImludElkMSIsInNldEludGVydmFsIiwiYXJteSIsImludElkMiIsImludElkMyIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiZHJhd09uR3JpZCIsImdyaWRYIiwiZ3JpZFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNoaXBOdW0iLCJzaGlwRmlsZXMiLCJuZXB0dW5lIiwic2F0dXJuIiwicGx1dG8iLCJ5UG9zIiwiYWxpZW5TaGlwIiwic3RhcnRYIiwic3RhcnRZIiwiY29sb3IiLCJvcmllbnRhdGlvbiIsImJsYW5rU3ByaXRlIiwiY29sb3JTcHJpdGUiLCJsb2FkU3JjIiwiYmFja2dyb3VuZFNyYyIsIm9yaWVudGF0aW9uQW5kQ3JlYXRlIiwiY29sb3JCYXJTcmMiLCJzZWxlY3RDb2xvciIsInRoYXQiLCJvcmkiLCJoQmxhbmsiLCJ2QmxhbmsiLCJoQ29sb3JzIiwiaEJsdWUiLCJoR3JlZW4iLCJoUmVkIiwiaFllbGxvdyIsInZDb2xvcnMiLCJ2Qmx1ZSIsInZHcmVlbiIsInZSZWQiLCJ2WWVsbG93IiwiaW1nU3JjIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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LDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQU8sSUFBTThDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzBILE1BQUQsRUFBWTtBQUN0QywwQkFBaUJBLE1BQWpCO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzLzA2LVNhdHVybm8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvMDgtTmV0dW5vLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzLzA5LVBsdXRvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dvbGRlbl9weXJhbWlkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL0hfQmFyQmFja2dyb3VuZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9IX0JsdWVCYXIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvSF9HcmVlbkJhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9IX1JlZEJhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9IX1llbGxvd0Jhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ncmFzc19taXhfZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9WX0JhckJhY2tncm91bmQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9CbHVlQmFyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1ZfR3JlZW5CYXIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9SZWRCYXIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvVl9ZZWxsb3dCYXIucG5nXCI7IiwiaW1wb3J0IHthbmltYXRlU3F1YXJlcyxcbiAgICAgY2FudmFzRXZlbnRzLFxuICAgICAgZHJhd0dyYXNzLFxuICAgICAgIGRyYXdPbkdyaWQsXG4gICAgc3VtbW9uQWxpZW5zfSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc19ldmVudHMuanNcIlxuaW1wb3J0IHByb2dyZXNzQmFyIGZyb20gXCIuL3NjcmlwdHMvcHJvZ3Jlc3NCYXIuanNcIlxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiAge1xuXG4gICAgY29uc3QgY2FudmFzSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWhvbWVcIik7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc0hvbWUuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY2FudmFzRXZlbnRzKGNhbnZhc0hvbWUsIGNvbnRleHQpXG4gICAgZHJhd0dyYXNzKGNvbnRleHQpXG4gICAgLy9kcmF3IFByb2R1Y3Rpb24gcHJvZ3Jlc3MgYmFyXG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbkJhciA9IG5ldyBwcm9ncmVzc0Jhcihjb250ZXh0LCAtMzQsIDM3NSwgXCJyZWRcIiwgXCJ2XCIpXG4gICAgY29uc3QgcHJvZHVjdGlvbkJhcjIgPSBuZXcgcHJvZ3Jlc3NCYXIoY29udGV4dCwgNTkwLCAzNzUsIFwieWVsbG93XCIsIFwidlwiKVxuICAgIC8vIHByb2R1Y3Rpb25CYXIuZHJhd0Jhcihjb250ZXh0KVxuICAgIC8vIHByb2R1Y3Rpb25CYXIuYmxhbmtTcHJpdGUub25sb2FkID0gKCkgPT4ge1xuICAgIC8vICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICBjb250ZXh0LmRyYXdJbWFnZShwcm9kdWN0aW9uQmFyLmJsYW5rU3ByaXRlLCBwcm9kdWN0aW9uQmFyLnN0YXJ0WCwgcHJvZHVjdGlvbkJhci5zdGFydFkpO1xuICAgIC8vICAgICBjb250ZXh0LmRyYXdJbWFnZShwcm9kdWN0aW9uQmFyLmNvbG9yU3ByaXRlLCBwcm9kdWN0aW9uQmFyLnN0YXJ0WCwgcHJvZHVjdGlvbkJhci5zdGFydFkpO1xuICAgIC8vIH1cbiAgICAvLyBwcm9kdWN0aW9uQmFyLmluY3JlYXNlRmlsbCgpXG4gICAgLy8gcHJvZ3Jlc3NCYXIoY29udGV4dCwgNjI2LCA0NzYsIFwiYmx1ZVwiKVxuXG4gICAgc3VtbW9uQWxpZW5zKGNvbnRleHQpXG4gICAgXG5cbiAgICBcbiAgICAvLyBsZXQgY2hvaWNlID0gbWVudS5vcHRpb25zW21lbnUuc2VsZWN0ZWRJbmRleF0udmFsdWVcblxuICAgIC8vIGxldCBpbWdUZXN0ID0gbmV3IEltYWdlKCk7XG4gICAgXG4gICAgLy8gaW1nVGVzdC5zcmMgPSBcIi9zcmMvaW1hZ2VzL3RlcnJhaW5fZ3Jhc3MvZ3Jhc3NfbWl4X24uanBnXCJcblxuICAgIC8vIGltZ1Rlc3Qub25sb2FkID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICAvLyAgICAgZm9yKGxldCBqID0gMDsgaiA8IDc7IGorKyl7XG4gICAgICAgICAgICAgICAgLy8gZHJhd09uR3JpZChpbWdUZXN0LCBpLCBqKVxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGVTcXVhcmVzKGltZ1Rlc3QpXG5cblxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGRyYXdPbkdyaWQoaW1nVGVzdCwgNilcbiAgICAvLyB9XG5cbiAgICBcblxuXG59KVxuXG4gICAgLy8gbGV0IGltZ1Rlc3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBcbiAgICAvLyBpbWdUZXN0LnNyYyA9IFwiL3NyYy9pbWFnZXMvdGVycmFpbl9ncmFzcy9ncmFzc19taXhfbi5qcGdcIlxuXG4gICAgLy8gaW1nVGVzdC5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICAvLyAgICAgZHJhd09uR3JpZChpbWdUZXN0LCAwLCA1KVxuICAgIC8vICAgICAvLyBkcmF3T25HcmlkKGltZ1Rlc3QsIDYpXG4gICAgLy8gfVxuLy8gIGJhY2tncm91bmRzKClcblxuXG5cblxuXG4vLyBjb25zdCBiYWNrZ3JvdW5kcyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYmFja2dyb3VuZHMuanNcIikiLCJpbXBvcnQge2J1aWxkQXNzZXRQYXRofSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmNsYXNzIEFsaWVuU2hpcCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHhTdGFydCwgeVN0YXJ0LCBzY2FsZVcsIHNjYWxlSCl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB0aGlzLnlTdGFydCA9IHlTdGFydDtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2NhbGVXID0gc2NhbGVXO1xuICAgICAgICB0aGlzLnNjYWxlSCA9IHNjYWxlSDtcblxuICAgICAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGhcblxuICAgICAgICB0aGlzLm1vdmVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLm1vdmVJZHggPSAwO1xuXG4gICAgICAgIHRoaXMubG9hZEFsaWVuU2hpcCA9IHRoaXMubG9hZEFsaWVuU2hpcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxUb1JBbmltYXRlID0gdGhpcy5sVG9SQW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdTaGlwID0gdGhpcy5kcmF3U2hpcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRBbGllblNoaXAoKVxuICAgICAgICB0aGlzLm1vdmVTcGFuWCgpXG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgdGhlIG1vdmVtZW50cyBmb3IgYW4gYWxpZW4gU2hpcFxuICAgICBtb3ZlU3BhblgoKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCAyMyA7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudHMucHVzaCh7eDogKHRoaXMueFN0YXJ0ICogKGkgKiA0MCkpLCB5OiAodGhpcy55U3RhcnQpfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgbG9hZEFsaWVuU2hpcCgpe1xuICAgIGNvbnN0IGFsaWVuU3JjID0gdGhpcy5maWxlUGF0aDtcblxuICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5zcHJpdGUuc3JjID0gYWxpZW5TcmM7ICAgICAgICBcblxuICAgIH1cblxuICAgIGRyYXdTaGlwKCl7XG4gICAgICAgXG4gICAgICAgIC8vd29ya3Mgd2l0aCBzZXQgcGl4ZWxcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgMCwgMCwgMTAwLCAxMDApO1xuXG4gICAgICAgIC8vIHVzaW5nIGFuaW1hdGlvblxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgMTAwLCAxMDApO1xuXG4gICAgICAgIC8vd29ya3Mgd2l0aCBmcmFjdGlvblxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCAwLCAwLCAodGhpcy5zcHJpdGUud2lkdGggLyB0aGlzLnNjYWxlVyksICh0aGlzLnNwcml0ZS5oZWlnaHQgLyB0aGlzLnNjYWxlSCkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgdGhpcy5zY2FsZVcsIHRoaXMuc2NhbGVIICk7XG5cbiAgICB9XG5cbiAgICBsVG9SQW5pbWF0ZSgpe1xuICAgICAgICBsZXQgeCA9IDBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaGlwIG1vdmluZ1wiKVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdKVxuICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsNjQ2LDEzMSlcbiAgICAgICAgICAgIGNvbnN0IHRvcExlZnRYID0gdGhpcy5tb3ZlbWVudHNbdGhpcy5tb3ZlSWR4XS54XG4gICAgICAgICAgICBjb25zdCB0b3BMZWZ0WSA9IHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3BMZWZ0WClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvcExlZnRZKVxuXG4gICAgICAgICAgICAvL3RoaXMgZnVuY3Rpb24gcmVtb3ZlcyBwcmV2aW91cyBkcmF3aW5nIG9mIGFsaWVuIHNoaXAuXG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlSWR4ID4gMCl7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgodGhpcy5zY2FsZVcgKiB0aGlzLm1vdmVJZHggKSAsIHRvcExlZnRZLCh0aGlzLnNjYWxlVyAqICgtMSkpLCAodGhpcy5zY2FsZVcgKiAxICkpXG5cbiAgICAgICAgICAgICAgICAvL29sZCBidXQgd29ya3NcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KCh0b3BMZWZ0WCApICwgdG9wTGVmdFksKHRoaXMuc2NhbGVXICogKC0xKSksICh0aGlzLnNjYWxlVyAqIDEgKSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwodGhpcy5zY2FsZVcgKiAtIDEpLCAodGhpcy5zY2FsZVcgKiAtMSApKVxuXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDMwMCAsIDMwMCwodGhpcy5zY2FsZVcgKiAoMSkpLCAodGhpcy5zY2FsZVcgKiAtMSApKVxuICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgdGhpcy5zY2FsZVcsIHRoaXMuc2NhbGVIICk7XG4gICAgICAgICAgICB0aGlzLm1vdmVJZHgrKztcbiAgICAgICAgICAgIGlmKHRoaXMubW92ZUlkeCA+PSB0aGlzLm1vdmVtZW50cy5sZW5ndGgpIHRoaXMubW92ZUlkeCA9IDA7XG4gICAgICAgICAgICAvLyBpZih4ID09PSAxNSl7XG4gICAgICAgICAgICAvLyAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGllblNoaXA7IiwiY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGNhbnZhcyBldmVudHNcIilcbmltcG9ydCBBbGllblNoaXAgZnJvbSBcIi4vYWxpZW5fc2hpcFwiO1xuaW1wb3J0IE1vdGhlclNoaXAgZnJvbSBcIi4vbW90aGVyc2hpcFwiO1xuaW1wb3J0IHtidWlsZEFzc2V0UGF0aH0gZnJvbSBcIi4vdXRpbFwiXG5cbmltcG9ydCBweXJhbWlkMCBmcm9tIFwiLi4vaW1hZ2VzL2NvbW11bml0eS9weXJhbWlkcy9nb2xkZW5fcHlyYW1pZC5wbmdcIlxuXG5pbXBvcnQgZ3Jhc3NEIGZyb20gXCIuLi9pbWFnZXMvdGVycmFpbl9ncmFzcy9ncmFzc19taXhfZC5qcGdcIlxuLy8gaW1wb3J0IEFsaWVuIGZyb20gXCIuL2FsaWVuX3NoaXBcIlxuXG4vLyAvL2V4OiBbMyw0XVxubGV0IGN1cnJlbnRHcmlkID0gdW5kZWZpbmVkO1xuXG5cbi8vIGZ1bmN0aW9uIGJ1aWxkQXNzZXRQYXRoKGltZ1NyYykge1xuLy8gICAgIHJldHVybiBgLi9kaXN0LyR7aW1nU3JjfWA7XG4vLyB9XG5cbmNvbnN0IGdhbWVPcHRpb25zID0ge1xuICAgIDA6ICB7MDogW2ZhbHNlLCB7fV0sXG4gICAgICAgICAxOiBcImNsaWNrZWQgMCwxXCIsXG4gICAgICAgICAyOiBcImNsaWNrZWQgMCwyXCIsXG4gICAgICAgICAzOiBcImNsaWNrZWQgMCwzXCIsXG4gICAgICAgICA0OiBcImNsaWNrZWQgMCw0XCIsXG4gICAgICAgICA1OiBcImNsaWNrZWQgMCw1XCIsXG4gICAgICAgICA2OiBcImNsaWNrZWQgMCw2XCJ9XG4gICAgXG59XG5cbi8vIGNvbnN0IGNvbW11bml0eTE9e3B5cmFtaWRzOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgezA6XCJ5b3UgZGlkIGl0IVwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFwiL3NyYy9pbWFnZXMvY29tbXVuaXR5L3B5cmFtaWRzL2dvbGRlbl9weXJhbWlkLnBuZ1wifVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbi8vIHNrZWxldG9uXG4vLyB7aXNQcmVzZW50OiBmYWxzZSwga2xhc3M6IFwiXCIsIGxldmVsOjB9XG5cblxuY29uc3Qgb25QbGF5ZXJHcmlkID0gYnVpbGRQbGF5ZXJTdGF0ZSgpXG5cblxuZnVuY3Rpb24gYnVpbGRQbGF5ZXJTdGF0ZSgpe1xuICAgIGxldCBidWlsZFBsYXllckdyaWQgPSB7fVxuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgNDsgaSsrKXtcbiAgICAgICAgYnVpbGRQbGF5ZXJHcmlkW2ldID0ge31cbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDc7IGorKyl7XG5cbiAgICAgICAgICAgIGJ1aWxkUGxheWVyR3JpZFtpXVtqXSA9IHtpc1ByZXNlbnQ6IGZhbHNlLCBjT1JwOiBcIlwiLCBrbGFzczogXCJcIiwgbGV2ZWw6IG51bGx9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1aWxkUGxheWVyR3JpZFxufVxuXG5cbi8vc2tlbGV0b25cbi8ve2ZpbGU6IFwiXCJcIiwgbmFtZTpcIlwiLCBjQm9vc3Q6IDEwLCBwQm9vc3Q6IDAsIGNvbW11bml0eTpcIlwiLCBrbGFzczpcIlwiLCBpbmRleDojfVxuY29uc3QgY2l2aWxpemF0aW9uID0ge1xuICAgICAgICBjb21tdW5pdHk6IHtcbiAgICAgICAgICAgICAgICBwYXJrczogW10sXG4gICAgICAgICAgICAgICAgcHlyYW1pZHM6IFt7ZmlsZTogYnVpbGRBc3NldFBhdGgocHlyYW1pZDApLCBuYW1lOlwiZ29sZGVuUHlyYW1pZFwiLCBjQm9vc3Q6IDEwLCBwQm9vc3Q6IDAsIGNPUnA6IFwiY29tbXVuaXR5XCIsIGtsYXNzOlwicHlyYW1pZHNcIiwgaW5kZXg6MCB9XSxcbiAgICAgICAgICAgICAgICBydWluczogW3t9XSxcbiAgICAgICAgICAgICAgICBtZWRpdGF0aW9uQ2lyY2xlczogW10sXG4gICAgICAgICAgICAgICAgdHJlZXM6W11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgZmFybXM6IFtdLFxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXG4gICAgICAgICAgICAgICAgaG91c2VzOiBbXSxcbiAgICAgICAgICAgICAgICBlbmVyZ3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmQ6W10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2xhcjpbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh5ZHJvOltdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGNhbnZhc0V2ZW50cyA9IChjYW52YXNIb21lLCBjb250ZXh0KSA9PiB7XG4gICAgLy9kcm9wZG93biBvbiByaWdodCBzaWRlXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcC1kb3duLWNvbnRhaW5lclwiKVswXVxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNpdmlsaXphdGlvbi1tZW51XCIpWzBdXG4gICAgY29uc3QgcGxheWVyQWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGxheWVyQWxlcnRcIilbMF1cbiAgICBcbiAgICAvL1doZW4gdXNlciBjbGlja3Mgb24gZ3JpZCBpdCBzZXRzIGN1cnJlbnRHcmlkLiBJZiB0aGV5IGNsaWNrIG91dHNpZGUsIGl0IHJldHVybnNcbiAgICAvLyB1bmRlZmluZWRcbiAgICBjYW52YXNIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgIGN1cnJlbnRHcmlkID0gZ2V0Q29vcmRzKGUpO1xuXG4gICAgICAgIGlmKGN1cnJlbnRHcmlkICYmIEFycmF5LmZyb20obWVudUNvbnRhaW5lci5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiaGlkZGVuXCIpKXtcbiAgICAgICAgICAgIC8vc2hvdyBkcm9wZG93biBpZiB1c2VyIGNsaWNrcyBpbiBwbGF5Z3JpZFxuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IG1lbnUub3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGxlbik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50R3JpZCA9PT0gdW5kZWZpbmVkICYmICFBcnJheS5mcm9tKG1lbnVDb250YWluZXIuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgLy9oaWRlIGRyb3Bkb3duIGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgcGxheSBncmlkICAgICAgICAgICAgXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICAgICAgfSBcbiAgICAgICAgY29uc29sZS5sb2coYGN1cnJlbnRHcmlkOiAke2N1cnJlbnRHcmlkfWApXG4gICAgXG4gICAgfSlcblxuICAgIC8vIFdoZW4gdXNlciBzZWxlY3RzIGZyb20gdGhlIGRyb3AgZG93biBtZW51IHRvIHBsYWNlIGEgc3ByaXRlXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+e1xuICAgICAgICBjb25zdCBjaG9pY2VTdHIgPSBtZW51Lm9wdGlvbnNbbWVudS5zZWxlY3RlZEluZGV4XS52YWx1ZVxuICAgICAgICBjb25zdCBjaG9zZW5CdWlsZGluZyA9IGNpdmlsaXphdGlvbk1lbnVTZWxlY3QoY2hvaWNlU3RyKVxuICAgICAgICBjb25zdCBmaWxlUGF0aEJ1aWxkID0gY2hvc2VuQnVpbGRpbmcuZmlsZVxuXG4gICAgICAgIC8vcGxhY2Ugc3ByaXRlIGlmIG5vdCBvY2N1cGllZFxuICAgICAgICBpZighaXNHcmlkT2NjdXBpZWQoKSl7XG4gICAgICAgICAgICBwYXJzZUltYWdlKGNvbnRleHQsIGZpbGVQYXRoQnVpbGQsIGN1cnJlbnRHcmlkKVxuICAgICAgICAgICAgb2NjdXB5R3JpZChjaG9zZW5CdWlsZGluZylcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGVycm9yIG1lc3NhZ2UgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICBpZiAocGxheWVyQWxlcnQuY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXJBbGVydC5yZW1vdmVDaGlsZChwbGF5ZXJBbGVydC5jaGlsZE5vZGVzWzBdKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxyZWFkeSBhIGJ1aWxkaW5nIG9uIGEgZ3JpZFxuICAgICAgICAgZWxzZSBpZihpc0dyaWRPY2N1cGllZCgpKXtcbiAgICAgICAgICAgICBjb25zdCB4ID0gY3VycmVudEdyaWRbMF1cbiAgICAgICAgICAgICBjb25zdCB5ID0gY3VycmVudEdyaWRbMV1cbiAgICAgICAgICAgICBjb25zdCBvYmpBdEdyaWRQb3MgPSBvblBsYXllckdyaWRbeF1beV1cblxuICAgICAgICAgICAgIC8vIFBsYXllciB0cmllcyB0byBhZGQgdGhlIHNhbWUgYnVpbGRpbmcgdG8gdGhlIG9jY3VwaWVkIGdyaWRcbiAgICAgICAgICAgICBpZiAoY2hvc2VuQnVpbGRpbmcua2xhc3MgPT09IG9iakF0R3JpZFBvcy5rbGFzcyAmJiBjaG9zZW5CdWlsZGluZy5pbmRleCA9PT0gb2JqQXRHcmlkUG9zLmxldmVsKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgRXJyb3IgbWVzc2FnZSB0byB0aGUgRE9NIC0+IFwiVGhhdCBidWlsZGluZyBpcyBhbHJlYWR5IHRoZXJlLiBUcnkgdXBncmFkaW5nIVwiXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRoYXQgYnVpbGRpbmcgaXMgYWxyZWFkeSB0aGVyZS4gVHJ5IHVwZ3JhZGluZyFcIik7IFxuICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BsYXllckFsZXJ0Jyk7XG4gICAgICAgICAgICAgICAgcGxheWVyQWxlcnQuYXBwZW5kQ2hpbGQoZWxlKVxuXG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgLy9SZW1vdmUgZXJyb3IgbWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgLy8gKioqKioqKioqKioqKioqKioqKioqKiBBREQgRlVOQ1RJT04gSEVSRSBUTyBVUEdSQURFIEJVSUxESU5HXG4gICAgICAgICAgICAgICAgIHBsYXllckFsZXJ0LnJlbW92ZUNoaWxkKHBsYXllckFsZXJ0LmNoaWxkTm9kZXNbMF0pOyBcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgIH1cblxuXG4gICAgICAgIC8vIHJlc2V0IGRlZmF1bHQgb2YgZHJvcGRvd25cbiAgICAgICAgaWYgKG1lbnUuc2VsZWN0ZWRJbmRleCAhPSBudWxsKXtcbiAgICAgICAgICAgIG1lbnUuc2VsZWN0ZWRJbmRleCA9IG51bGxcbiAgICAgICAgfVxuXG5cblxuICAgIH0pXG5cbiAgICAvLyBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIilcbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuXG5cbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhjYW52YXNSZWN0KVxuICAgXG5cbiAgICAvLyBmdW5jdGlvbiBvbkRvd24oZSl7XG4gICAgLy8gICAgICAgICBjeCA9IGUucGFnZVg7XG4gICAgLy8gICAgICAgICBjeSA9IGUucGFnZVk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGBYOiAke2N4fSwgWTogJHtjeX1gKVxuICAgIC8vIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRDb29yZHMoZSl7XG4gICAgICAgIGxldCBjYW52YXNSZWN0ID0gY2FudmFzSG9tZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IGN4O1xuICAgICAgICBsZXQgY3k7XG4gICAgICAgIGxldCBweCA9IGUucGFnZVg7XG4gICAgICAgIGxldCBweSA9IGUucGFnZVk7XG5cbiAgICAgICAgY3ggPSBweCAtIGNhbnZhc1JlY3QubGVmdFxuICAgICAgICBjeSA9IHB5IC0gY2FudmFzUmVjdC50b3BcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzUmVjdClcblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS1cIilcbiAgICAgICAgY29uc29sZS5sb2coY3gpXG4gICAgICAgIGNvbnNvbGUubG9nKGN5KVxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKChjeCAtIDIyKSAvIDg2KSA7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoKGN5IC0gMTMxKSAvIDg2KSA7XG5cbiAgICAgICAgLy8gY3VycmVudCBsb2NhdGlvbiBjb25zb2xlLmxvZ1xuICAgICAgICBjb25zb2xlLmxvZyhgWDogWyR7cm93fSwgWTogJHtjb2x9XWApXG5cbiAgICAgICAgLy9kaWQgY2xpY2sgb24gZ2FtZSBncmlkXG4gICAgICAgIGlmIChyb3cgPj0gMCAmJiByb3cgPD0gMyAmJiBjb2wgPj0gMCAmJiBjb2wgPD0gNil7XG4gICAgICAgICAgICByZXR1cm4gW3Jvdyxjb2xdXG4gICAgICAgIH1cbiAgICAgICAgLy9kaWQgTk9UIGNsaWNrIG9uIGdhbWUgZ3JpZFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VlR3JpZE9wdGlvbnMocm93LCBjb2wpe1xuICAgICAgICBjb25zb2xlLmxvZyhnYW1lT3B0aW9uc1tyb3ddW2NvbF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JpZENsaWNrKHJvdywgY29sKXtcblxuXG4gICAgfVxuXG59XG5cbmNvbnN0IGNpdmlsaXphdGlvbk1lbnVTZWxlY3QgPSAoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnNBcnIgPSBzZWxlY3RlZC5zcGxpdChcIixcIilcbiAgICAgICAgbGV0IGNPUnAgPSBudWxsXG4gICAgICAgIGxldCBrbGFzcyA9IG51bGw7XG4gICAgICAgIGxldCBpbmRleCA9IG51bGw7XG4gICAgICAgIFtjT1JwLCBrbGFzcywgaW5kZXhdID0gb3B0aW9uc0FycjtcbiAgICAgICAgY29uc29sZS5sb2coY2l2aWxpemF0aW9uW2NPUnBdW2tsYXNzXVtpbmRleF0pO1xuXG4gICAgICAgIHJldHVybiBjaXZpbGl6YXRpb25bY09ScF1ba2xhc3NdW2luZGV4XVxuICAgICAgICAvLyByZXR1cm4gY29tbXVuaXR5MVtmaXJzdF1bc2Vjb25kXVxuICAgIH1cblxuLy9mdW5jdGlvbiB3aWxsIGRyYXcgZ3Jhc3NcbmV4cG9ydCBjb25zdCBkcmF3R3Jhc3MgPSAoY29udGV4dCkgPT4ge1xuICAgIGxldCBpbWcxID0gbmV3IEltYWdlKClcblxuICAgICAgICBpbWcxLnNyYyA9IGJ1aWxkQXNzZXRQYXRoKGdyYXNzRClcblxuICAgICAgICBpbWcxLm9ubG9hZCA9ICgpID0+IHtcblxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMTMxKVxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMjE3KVxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMzAzKVxuICAgICAgICAgICAgZHJhd1Jvdyhjb250ZXh0LCBpbWcxLCAyMiwgMzg5KVxuXG4gICAgICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdSb3cgPSAoY29udGV4dCwgaW1hZ2UsIHJvd1gsIHJvd1kpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XG5cbiAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCByb3dYLCByb3dZLCBpbWFnZS53aWR0aCAvMTEuOSwgaW1hZ2UuaGVpZ2h0IC8gMTEuOSApXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcm93WCwgcm93WSwgODYsIDg2IClcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICByb3dYICs9IDg2XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGlzR3JpZE9jY3VwaWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBjdXJyZW50R3JpZFswXVxuICAgIGNvbnN0IHkgPSBjdXJyZW50R3JpZFsxXVxuXG4gICAgcmV0dXJuIG9uUGxheWVyR3JpZFt4XVt5XS5pc1ByZXNlbnRcbn1cblxuY29uc3Qgb2NjdXB5R3JpZCA9IChjaG9zZW5CdWlsZGluZykgPT4ge1xuICAgIGNvbnN0IHggPSBjdXJyZW50R3JpZFswXVxuICAgIGNvbnN0IHkgPSBjdXJyZW50R3JpZFsxXVxuXG4gICAgb25QbGF5ZXJHcmlkW3hdW3ldLmlzUHJlc2VudCA9IHRydWVcbiAgICBvblBsYXllckdyaWRbeF1beV0uY09ScCA9IGNob3NlbkJ1aWxkaW5nLmNPUnBcbiAgICBvblBsYXllckdyaWRbeF1beV0ua2xhc3MgPSBjaG9zZW5CdWlsZGluZy5rbGFzc1xuICAgIG9uUGxheWVyR3JpZFt4XVt5XS5sZXZlbCA9IGNob3NlbkJ1aWxkaW5nLmluZGV4XG4gICAgcmV0dXJuIG9uUGxheWVyR3JpZFt4XVt5XVxufVxuXG5leHBvcnQgY29uc3Qgc3VtbW9uQWxpZW5zID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBtb3RoZXJTaGlwID0gbmV3IE1vdGhlclNoaXAoY29udGV4dClcbiAgICAgICAgbW90aGVyU2hpcC5tYWtlU2hpcHMoKVxuICAgICAgICBjb25zdCBpbnRJZDEgPSBzZXRJbnRlcnZhbChtb3RoZXJTaGlwLmFybXlbMF0ubFRvUkFuaW1hdGUsIDE1MClcbiAgICAgICAgY29uc3QgaW50SWQyID0gc2V0SW50ZXJ2YWwobW90aGVyU2hpcC5hcm15WzFdLmxUb1JBbmltYXRlLCAxNTApXG4gICAgICAgIGNvbnN0IGludElkMyA9IHNldEludGVydmFsKG1vdGhlclNoaXAuYXJteVsyXS5sVG9SQW5pbWF0ZSwgMTUwKVxuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+Y2xlYXJJbnRlcnZhbChpbnRJZDEpLDIxMDApXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PmNsZWFySW50ZXJ2YWwoaW50SWQyKSwyMTAwKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5jbGVhckludGVydmFsKGludElkMyksMjEwMClcbn0gXG5cbmNvbnN0IHBhcnNlSW1hZ2UgPSAoY29udGV4dCwgZmlsZVBhdGgsIGN1cnJlbnRHcmlkKSA9PntcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHggPSBjdXJyZW50R3JpZFswXVxuICAgIGNvbnN0IHkgPSBjdXJyZW50R3JpZFsxXVxuXG5cbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7ICAgICAgICBcbiAgICAgICAgZHJhd09uR3JpZChpbWFnZSwgY29udGV4dCwgeCwgeSlcbiAgICB9XG5cbn1cblxuY29uc3QgZHJhd09uR3JpZCA9IChpbWFnZSwgY29udGV4dCwgZ3JpZFgsIGdyaWRZKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmF3IG9uIGdyaWRcIilcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IDIyO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gMTMxO1xuICAgICAgICBjb25zdCB0b3BMZWZ0WCA9IDg2O1xuICAgICAgICBjb25zdCB0b3BMZWZ0WSA9IDg2OyAgICBcblxuICAgICAgICBpZiAoZ3JpZFggPT09IDAgJiYgZ3JpZFkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLm1vdmVtZW50c1t0aGlzLm1vdmVJZHhdLngsIHRoaXMubW92ZW1lbnRzW3RoaXMubW92ZUlkeF0ueSwgdGhpcy5zY2FsZVcsIHRoaXMuc2NhbGVIIClcbiAgICAgICAgICAgIC8vd29ya3MgYW5kIG9yaWdpbmFsIGZ1bmNcbiAgICAgICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBvZmZzZXRYLCBvZmZzZXRZLCBpbWFnZS53aWR0aCAvMTEuOSwgaW1hZ2UuaGVpZ2h0IC8gMTEuOSApXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgODYsIDg2IClcbiAgICAgICAgfSBlbHNlIGlmIChncmlkWCA9PT0gMCAmJiBncmlkWSA+IDApe1xuICAgICAgICAgICAgLy9vcmlnaW5hbFxuICAgICAgICAgICAgLy8gY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsICgodG9wTGVmdFggKiBncmlkWSkgKyBvZmZzZXRYKSwgb2Zmc2V0WSwgaW1hZ2Uud2lkdGggLzExLjksIGltYWdlLmhlaWdodCAvIDExLjkgKVxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsICgodG9wTGVmdFggKiBncmlkWSkgKyBvZmZzZXRYKSwgb2Zmc2V0WSwgODYsIDg2IClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgLy9vcmlnaW5hbFxuICAgICAgICAgICAgLy8gY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsICgodG9wTGVmdFggKiBncmlkWSkgKyBvZmZzZXRYKSwgb2Zmc2V0WSwgaW1hZ2Uud2lkdGggLzExLjksIGltYWdlLmhlaWdodCAvIDExLjkgKVxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsICgodG9wTGVmdFggKiBncmlkWSkgKyBvZmZzZXRYKSwgKCh0b3BMZWZ0WSAqIGdyaWRYKSArIG9mZnNldFkpLCA4NiwgODYgKVxuICAgICAgICB9XG5cbiAgICBcbiAgICB9XG5cbiAgICAvLyBleHBvcnQgY29uc3QgYW5pbWF0ZVNxdWFyZXMgPSAoaW1hZ2UsIGNiKSA9PiB7XG4gICAgLy8gICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDY0NiwgNTA1KVxuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKXtcbiAgICAvLyAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA3OyBqKyspe1xuICAgIC8vICAgICAgICAgICAgIGRyYXdPbkdyaWQoaW1hZ2UsIGksIGopXG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cblxuICAgIC8vIGV4cG9ydCBjb25zdCBsb2FkQWxpZW5TaGlwID0gKCkgPT4ge1xuICAgIC8vICAgICAvLyBjb25zdCBhbGllblNyYyA9IFwiL3NyYy9pbWFnZXMvYWxpZW5zL3NoaXBzLzA4LU5ldHVuby5wbmdcIjtcbiAgICAvLyAgICAgLy8gY29uc3QgYWxpZW5TaGlwID0gbmV3IEltYWdlKCk7XG4gICAgLy8gICAgIC8vIGFsaWVuU2hpcC5zcmMgPSBhbGllblNyYztcblxuICAgIC8vICAgICAvLyBhbGllblNoaXAub25sb2FkKCAoKSA9PiB7XG4gICAgLy8gICAgIC8vICAgICByZXR1cm4gdHJ1ZVxuICAgIC8vICAgICAvLyB9KVxuXG4gICAgLy8gfVxuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgY2FudmFzRXZlbnRzO1xuXG5cblxuIiwiaW1wb3J0IHtidWlsZEFzc2V0UGF0aH0gZnJvbSBcIi4vdXRpbC5qc1wiXG5pbXBvcnQgQWxpZW5TaGlwIGZyb20gXCIuL2FsaWVuX3NoaXBcIlxuXG5pbXBvcnQgbmVwdHVuZSBmcm9tIFwiLi4vaW1hZ2VzL2FsaWVucy9zaGlwcy8wOC1OZXR1bm8ucG5nXCI7XG5pbXBvcnQgc2F0dXJuIGZyb20gXCIuLi9pbWFnZXMvYWxpZW5zL3NoaXBzLzA2LVNhdHVybm8ucG5nXCI7XG5pbXBvcnQgcGx1dG8gZnJvbSBcIi4uL2ltYWdlcy9hbGllbnMvc2hpcHMvMDktUGx1dG8ucG5nXCI7XG5cbmNsYXNzIE1vdGhlclNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFybXkgPSBbXVxuXG4gICAgfVxuXG4gICAgbWFrZVNoaXBzKCl7XG4gICAgICAgIGxldCBzaGlwTnVtID0gdGhpcy5hcm15Lmxlbmd0aDtcblxuICAgICAgICAvLyBjb25zdCBzaGlwRmlsZXMgPSBbXG4gICAgICAgIC8vICAgICBcIi9zcmMvaW1hZ2VzL2FsaWVucy9zaGlwcy8wOC1OZXR1bm8ucG5nXCIsXG4gICAgICAgIC8vICAgICBcIi9zcmMvaW1hZ2VzL2FsaWVucy9zaGlwcy8wNi1TYXR1cm5vLnBuZ1wiLFxuICAgICAgICAvLyAgICAgXCIvc3JjL2ltYWdlcy9hbGllbnMvc2hpcHMvMDktUGx1dG8ucG5nXCJcbiAgICAgICAgLy8gXVxuXG4gICAgICAgIGNvbnN0IHNoaXBGaWxlcyA9IFtcbiAgICAgICAgICAgIGJ1aWxkQXNzZXRQYXRoKG5lcHR1bmUpLFxuICAgICAgICAgICAgYnVpbGRBc3NldFBhdGgoc2F0dXJuKSxcbiAgICAgICAgICAgIGJ1aWxkQXNzZXRQYXRoKHBsdXRvKVxuICAgICAgICBdXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVQYXRoLCB4U3RhcnQsIHlTdGFydCwgc2NhbGVXLCBzY2FsZUgpe1xuICAgICAgICB3aGlsZSh0aGlzLmFybXkubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgICBzaGlwTnVtID0gdGhpcy5hcm15Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHlQb3MgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChzaGlwTnVtID09PSAwKXtcbiAgICAgICAgICAgICAgICB5UG9zID0gc2hpcE51bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeVBvcyA9IHNoaXBOdW0gKiA0MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWxpZW5TcmMgPSBzaGlwRmlsZXNbc2hpcE51bV1cbiAgICAgICAgICAgIGNvbnN0IGFsaWVuU2hpcCA9IG5ldyBBbGllblNoaXAodGhpcy5jb250ZXh0LCBhbGllblNyYywgMSwgeVBvcywgNDAsIDQwKVxuICAgICAgICAgICAgdGhpcy5hcm15LnB1c2goYWxpZW5TaGlwKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW90aGVyU2hpcCIsImltcG9ydCBoQmxhbmsgZnJvbSBcIi4uL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9CYXJCYWNrZ3JvdW5kLnBuZ1wiXG5pbXBvcnQgaEJsdWUgZnJvbSBcIi4uL2ltYWdlcy9oX3Byb2dyZXNzX2JhcnMvSF9CbHVlQmFyLnBuZ1wiXG5pbXBvcnQgaEdyZWVuIGZyb20gXCIuLi9pbWFnZXMvaF9wcm9ncmVzc19iYXJzL0hfR3JlZW5CYXIucG5nXCJcbmltcG9ydCBoUmVkIGZyb20gXCIuLi9pbWFnZXMvaF9wcm9ncmVzc19iYXJzL0hfUmVkQmFyLnBuZ1wiXG5pbXBvcnQgaFllbGxvdyBmcm9tIFwiLi4vaW1hZ2VzL2hfcHJvZ3Jlc3NfYmFycy9IX1llbGxvd0Jhci5wbmdcIlxuXG5cbmltcG9ydCB2QmxhbmsgZnJvbSBcIi4uL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CYXJCYWNrZ3JvdW5kLnBuZ1wiXG5pbXBvcnQgdkJsdWUgZnJvbSBcIi4uL2ltYWdlcy92X3Byb2dyZXNzX2JhcnMvVl9CbHVlQmFyLnBuZ1wiXG5pbXBvcnQgdkdyZWVuIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfR3JlZW5CYXIucG5nXCJcbmltcG9ydCB2UmVkIGZyb20gXCIuLi9pbWFnZXMvdl9wcm9ncmVzc19iYXJzL1ZfUmVkQmFyLnBuZ1wiXG5pbXBvcnQgdlllbGxvdyBmcm9tIFwiLi4vaW1hZ2VzL3ZfcHJvZ3Jlc3NfYmFycy9WX1llbGxvd0Jhci5wbmdcIlxuaW1wb3J0IHtidWlsZEFzc2V0UGF0aH0gZnJvbSBcIi4vdXRpbC5qc1wiXG5cblxuY2xhc3MgcHJvZ3Jlc3NCYXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0YXJ0WCwgc3RhcnRZLCBjb2xvciwgb3JpZW50YXRpb24pe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgdGhpcy5zdGFydFkgPSBzdGFydFk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5ibGFua1Nwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gdGhpcy5ibGFua1Nwcml0ZS5zcmMgPSB0aGlzLm9yaWVudGF0aW9uQW5kQ3JlYXRlKG9yaWVudGF0aW9uKTtcbiAgICAgICAgdGhpcy5jb2xvclNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gdGhpcy5jb2xvclNwcml0ZS5zcmMgPSB0aGlzLnNlbGVjdENvbG9yKHRoaXMuY29sb3IsIG9yaWVudGF0aW9uKTtcblxuICAgICAgICAvLyB0aGlzLm9yaWVudGF0aW9uID0gMDsgXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuXG5cbiAgICAgICBcbiAgICAgICAgdGhpcy5sb2FkU3JjKG9yaWVudGF0aW9uKVxuXG4gICAgICAgIC8vIHRoaXMuYmxhbmtTcHJpdGUub25sb2FkID0gdGhpcy5ibGFua1Nwcml0ZS5vbmxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb2xvclNwcml0ZS5vbmxvYWQgPSB0aGlzLmNvbG9yU3ByaXRlLm9ubG9hZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIH1cblxuICAgIGxvYWRTcmMob3JpZW50YXRpb24pe1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kU3JjID0gdGhpcy5vcmllbnRhdGlvbkFuZENyZWF0ZShvcmllbnRhdGlvbik7XG4gICAgICAgIGNvbnN0IGNvbG9yQmFyU3JjID0gdGhpcy5zZWxlY3RDb2xvcih0aGlzLmNvbG9yLCBvcmllbnRhdGlvbilcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmxhbmtTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5jb2xvclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuYmxhbmtTcHJpdGUuc3JjID0gYmFja2dyb3VuZFNyYzsgXG4gICAgICAgIHRoaXMuY29sb3JTcHJpdGUuc3JjID0gY29sb3JCYXJTcmM7IFxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5ibGFua1Nwcml0ZS5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHRoYXQuY29udGV4dC5kcmF3SW1hZ2UodGhhdC5ibGFua1Nwcml0ZSwgdGhhdC5zdGFydFgsIHRoYXQuc3RhcnRZLCAxMDAsIDEwMCk7XG4gICAgICAgICAgICB0aGF0LmNvbnRleHQuZHJhd0ltYWdlKHRoYXQuY29sb3JTcHJpdGUsIHRoYXQuc3RhcnRYLCB0aGF0LnN0YXJ0WSwgMTAwLCAxMDApO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLy8gc2VsZWN0IGluaXRpYWwgb3JpZW50YXRpb24gb2YgcHJvZ3Jlc3MgYmFyLiBWZXJ0aWNhbCBvciBIb3Jpem9udGFsLlxuICAgIG9yaWVudGF0aW9uQW5kQ3JlYXRlKG9yaSl7XG4gICAgICAgIGlmKG9yaSA9PT0gXCJoXCIgfHwgb3JpID09PSBcIkhcIil7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkQXNzZXRQYXRoKGhCbGFuaylcbiAgICAgICAgfSBlbHNlIGlmKG9yaSA9PT1cInZcIiB8fCBvcmkgPT09IFwiVlwiKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkQXNzZXRQYXRoKHZCbGFuaylcbiAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAgLy8gc2VsZWN0IGNvbG9yIG9mIHByb2dyZXNzIGJhciB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAgc2VsZWN0Q29sb3IoY29sb3IsIG9yaSl7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaENvbG9ycyA9IHtcbiAgICAgICAgICAgIFwiYmx1ZVwiOiBidWlsZEFzc2V0UGF0aChoQmx1ZSksXG4gICAgICAgICAgICBcImdyZWVuXCI6IGJ1aWxkQXNzZXRQYXRoKGhHcmVlbiksXG4gICAgICAgICAgICBcInJlZFwiOiBidWlsZEFzc2V0UGF0aChoUmVkKSxcbiAgICAgICAgICAgIFwieWVsbG93XCI6IGJ1aWxkQXNzZXRQYXRoKGhZZWxsb3cpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2Q29sb3JzID0ge1xuICAgICAgICAgICAgXCJibHVlXCI6IGJ1aWxkQXNzZXRQYXRoKHZCbHVlKSxcbiAgICAgICAgICAgIFwiZ3JlZW5cIjogYnVpbGRBc3NldFBhdGgodkdyZWVuKSxcbiAgICAgICAgICAgIFwicmVkXCI6IGJ1aWxkQXNzZXRQYXRoKHZSZWQpLFxuICAgICAgICAgICAgXCJ5ZWxsb3dcIjogYnVpbGRBc3NldFBhdGgodlllbGxvdylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmkgPT09IFwiaFwiIHx8IG9yaSA9PT0gXCJIXCIpe1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSBoQ29sb3JzW2NvbG9yXTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgICB9ZWxzZSBpZihvcmkgPT09XCJ2XCIgfHwgb3JpID09PSBcIlZcIil7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IHZDb2xvcnNbY29sb3JdO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcblxuICAgIGluY3JlYXNlRmlsbCh2YWx1ZSl7XG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5jb2xvclNwcml0ZSwgdGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCAyMiwgMjAwKVxuICAgIH1cblxuICAgIGRlY3JlYXNlRmlsbCh2YWx1ZSl7XG5cbiAgICB9XG5cbiAgICByZXNldEZpbGwoKXtcblxuICAgIH1cblxuICAgIGRyYXdCYXIoY29udGV4dCl7XG4gICAgICAgIC8vIGNvbnRleHQuZHJhd0ltYWdlKClcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5ibGFua1Nwcml0ZSwgdGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCAxMDAsIDEwMCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2dyZXNzQmFyO1xuXG4iLCJleHBvcnQgY29uc3QgYnVpbGRBc3NldFBhdGggPSAoaW1nU3JjKSA9PiB7XG4gICAgcmV0dXJuIGAuL2Rpc3QvJHtpbWdTcmN9YDtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9