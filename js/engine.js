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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mobile = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function () {

    var time = 60;
    var counterPoints = 0;

    function countDown(time) {
        setInterval(function () {
            if (time > 0) {
                time--;
                $(".menu text:nth(2)").empty().append(time);
            } else {
                $(".menu text:nth(2)").empty().append(0);
                clearInterval(countDown);
                $("#rect").hide();
            }
        }, 1000);
    }
    countDown(time);

    document.getElementById("rect").addEventListener("click", xy);

    function xy() {

        counterPoints = counterPoints + 1;
        $(".menu text:nth(3)").empty().append(counterPoints);

        $("#rect").hide();
        setTimeout(function () {
            $("#rect").attr("x", Math.round(Math.random() * 95) + "%");
            $("#rect").attr("y", Math.round(Math.random() * 70) + "%");
            $("#rect").show();
        }, 1000);
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

    var mqls = [// list of window.matchMedia() queries
    window.matchMedia("(min-width: 320px)"), window.matchMedia("(min-width: 375px)"), window.matchMedia("(min-width: 425px)"), window.matchMedia("(min-width: 768px)"), window.matchMedia("(min-width: 1024px)")];
    function mediaqueryresponse(mql) {
        if (mqls[0].matches) {
            $("#pointsTitle").attr("x", "65%");
            $("#time").attr("x", "30%");
            $("#points").attr("x", "75%");
            $("#rect").attr("width", "8%");
        }
        if (mqls[1].matches) {
            $("#time").attr("x", "25%");
            $("#points").attr("x", "72%");
            $("#rect").attr("width", "7%");
        }

        if (mqls[2].matches) {
            $("#time").attr("x", "22%");
            $("#rect").attr("width", "6%");
        }

        if (mqls[3].matches) {
            $("#timeTitle").attr("x", "20%");
            $("#pointsTitle").attr("x", "65%");
            $("#time").attr("x", "28%");
            $("#points").attr("x", "68.5%");
            $("#rect").attr("width", "30px");
            $("#rect").attr("height", "30px");
        }

        if (mqls[4].matches) {
            $("#time").attr("x", "26%");
            $("#points").attr("x", "67.5%");
        }
    }

    for (var i = 0; i < mqls.length; i++) {
        // loop through queries
        mediaqueryresponse(mqls[i]); // call handler function explicitly at run time
        mqls[i].addListener(mediaqueryresponse); // call handler function whenever the media query is triggered
    }
});

/***/ })
/******/ ]);