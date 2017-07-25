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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
		var a = factory();
		for (var i in a) {
			((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
		}
	}
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			/**
    * splash-screen is very simple to use to setup a splash-screen for your
    * application
    *
    * @author Howard.Zuo
    * @date   May 11th, 2016
    *
    **/
			"use strict";

			var Splash = {
				version: '2.4.0',
				enable: function enable(theme) {
					loadBody(function ($body) {
						addClass($body, 'splashing');
						var $splash = splashDiv();
						$body.appendChild($splash);
						if (!theme || !themes[theme]) {
							theme = 'tailing';
						}
						themes[theme]($splash);
						addClass($splash, theme);
					});
				},
				isRunning: function isRunning() {
					if (!document || !document.body) {
						return;
					}
					return hasClass(document.body, 'splashing');
				},
				destroy: function destroy() {
					loadBody(function ($body) {
						removeClass($body, 'splashing');
						var $splash = getSplash($body);
						if ($splash) {
							$body.removeChild($splash);
						}
					});
				}
			};
			exports.Splash = Splash;
			var elementClass = function elementClass(tag, className) {
				var ele = document.createElement(tag);
				ele.setAttribute('class', className);
				return ele;
			};
			var elementTxt = function elementTxt(tag, text) {
				var ele = document.createElement(tag);
				ele.innerText = text;
				return ele;
			};
			var splashDiv = function splashDiv() {
				return elementClass('div', 'splash');
			};
			var tailingHandler = function tailingHandler($splash) {
				$splash.appendChild(elementTxt('span', 'Loading'));
			};
			var windcatcherHandler = function windcatcherHandler($splash) {
				for (var i = 0; i < 8; i++) {
					$splash.appendChild(elementClass('div', 'blade'));
				}
			};
			var circularHandler = function circularHandler($splash) {
				var arr = ['spinner-blue', 'spinner-red', 'spinner-yellow', 'spinner-green'];
				for (var i = 0; i < arr.length; i++) {
					var layer = elementClass('div', 'spinner-layer ' + arr[i]);
					var circleLeft = elementClass('div', 'circle-clipper left');
					var circle01 = elementClass('div', 'circle');
					circleLeft.appendChild(circle01);
					layer.appendChild(circleLeft);
					var gapPatch = elementClass('div', 'gap-patch');
					var circle02 = elementClass('div', 'circle');
					gapPatch.appendChild(circle02);
					layer.appendChild(gapPatch);
					var circleRight = elementClass('div', 'circle-clipper right');
					var circle03 = elementClass('div', 'circle');
					circleRight.appendChild(circle03);
					layer.appendChild(circleRight);
					$splash.appendChild(layer);
				}
			};
			var emptyHandler = function emptyHandler() {};
			var themes = {
				tailing: tailingHandler,
				windcatcher: windcatcherHandler,
				'audio-wave': emptyHandler,
				'spinner-section': emptyHandler,
				'spinner-section-far': emptyHandler,
				circular: circularHandler
			};
			var hasClass = function hasClass(ele, cls) {
				return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
			};
			var addClass = function addClass(ele, cls) {
				if (!hasClass(ele, cls)) {
					ele.className += ' ' + cls;
				}
			};
			var removeClass = function removeClass(ele, cls) {
				if (hasClass(ele, cls)) {
					var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
					ele.className = ele.className.replace(reg, ' ');
				}
			};
			var loadBody = function loadBody(callback) {
				var $body = document.body;
				if ($body) {
					callback($body);
					return;
				}
				setTimeout(function () {
					$body = document.body;
					if (!$body) {
						loadBody(callback);
						return;
					}
					callback($body);
				}, 100);
			};
			var getSplash = function getSplash($body) {
				var children = $body.children;
				for (var i = 0; i < children.length; i++) {
					if (hasClass(children[i], 'splash')) {
						return children[i];
					}
				}
			};

			/***/
		}
		/******/])
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ })

/******/ });