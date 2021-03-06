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

    mobile.resolutions();

    $("#mainContainer, #newGame").hide();

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
                $("#newGame").show();

                $("#newGame").on("click", function () {
                    time = 60;
                    counterPoints = 0;
                    $(".menu text:nth(2)").empty().append(time);
                    $(".menu text:nth(3)").empty().append(counterPoints);
                    $("#newGame").hide();
                    $("#rect").show();
                });
            }
        }, 1000);
    }

    $(".mainText").on("click", function () {
        $(".mainText").addClass("anim");
        $("#intro").delay(2200).fadeOut();
        $("#mainContainer").delay(2500).fadeIn();

        setTimeout(function () {
            countDown(time);
        }, 2500);
    });

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

    module.exports.resolutions = function () {
        var resolutions = [// list of window.matchMedia() queries
        window.matchMedia("(min-width: 320px)"), //0
        window.matchMedia("(min-width: 375px)"), //1
        window.matchMedia("(min-width: 425px)"), //2
        window.matchMedia("(min-width: 480px)"), //3
        window.matchMedia("(min-width: 768px)"), //4
        window.matchMedia("(min-width: 1024px)"), //5
        window.matchMedia("(min-width: 1366px)") //6
        ];
        function mediaqueryresponse(mql) {
            if (resolutions[0].matches) {
                $("#timeTitle").attr("x", "5%").attr("y", "30%");
                $("#time").attr("x", "25%").attr("y", "65%");

                $("#pointsTitle").attr("x", "65%").attr("y", "30%");
                $("#points").attr("x", "74%").attr("y", "65%");

                $("#rect").attr("width", "25px").attr("height", "25px");
            }
            if (resolutions[1].matches) {
                $("#timeTitle").attr("x", "9%").attr("y", "30%");
                $("#time").attr("x", "25%").attr("y", "65%");

                $("#pointsTitle").attr("x", "69%").attr("y", "30%");
                $("#points").attr("x", "76%").attr("y", "65%");

                $("#rect").attr("width", "25px").attr("height", "25px");
            }

            if (resolutions[2].matches) {
                $("#time").attr("x", "22%");
                $("#rect").attr("width", "6%");
            }

            if (resolutions[3].matches) {
                $("#time").attr("x", "20%").attr("y", "65%");
                $("#points").attr("x", "75%").attr("y", "65%");

                $("#rect").attr("width", "25px").attr("height", "25px");
            }

            if (resolutions[4].matches) {
                $("#timeTitle").attr("x", "20%");
                $("#pointsTitle").attr("x", "65%");
                $("#time").attr("x", "28%");
                $("#points").attr("x", "68.5%");
                $("#rect").attr("width", "30px");
                $("#rect").attr("height", "30px");
            }

            if (resolutions[5].matches) {
                $("#time").attr("x", "26%");
                $("#points").attr("x", "67.5%");
            }

            if (resolutions[6].matches) {
                $("#time").attr("x", "24%");
                $("#points").attr("x", "67%");
            }
        }

        for (var i = 0; i < resolutions.length; i++) {
            mediaqueryresponse(resolutions[i]);
            resolutions[i].addListener(mediaqueryresponse);
        }
    };
});

/***/ })
/******/ ]);