(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log("from index.js")



const backgrounds = require("./scripts/backgrounds.js")
// import "./styles/index.scss";
},{"./scripts/backgrounds.js":2}],2:[function(require,module,exports){
console.log("Background.js")

// class Background {

function createContext() {
    const canvasHome = document.getElementById("canvas-home");
    const context = canvasHome.getContext('2d')
    canvasHome.addEventListener('mousedown', onDown)

    console.log("inside backgrdounds and func")

    function onDown(e){
            let cx = e.pageX;
            let cy = e.pageY;
        alert(cx)
    }
}
// }

// createContext()
module.exports = createContext;
},{}]},{},[1]);
