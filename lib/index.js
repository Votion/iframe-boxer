(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("window"));
	else if(typeof define === 'function' && define.amd)
		define("iframeBoxer", ["window"], factory);
	else if(typeof exports === 'object')
		exports["iframeBoxer"] = factory(require("window"));
	else
		root["iframeBoxer"] = factory(root["window"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var window = __webpack_require__(2);

	/**
	 * If the page isn't within an iframe, then redirect to the page that is suppose to host the iframe
	 *
	 * @param {Object} options
	 * @param {string} options.hostLocation - The
	 * @param {string|function} options.redirectLocation - The URL to redirect to, defaults to options.hostLocation
	 * @param {string|RegExp|function({string}, {object}, {object})} options.matcher - Tests if the parent URL is correct, defaults to options.hostLocation
	 */
	function iframeBoxer(options) {
	    options = options || {};
	    var hostLocation = options.hostLocation;
	    var redirectLocation = options.redirectLocation || hostLocation;
	    var matcher = options.matcher || hostLocation;

	    function doesLocationMatch() {
	        if (typeof matcher === 'function') {
	            return matcher(window.document.referrer, window.location, options);
	        } else if (matcher instanceof RegExp) {
	            return window.location.match(matcher);
	        } else {
	            return window.document.referrer === matcher || window.top.location === matcher;
	        }
	    }

	    if (window.top === window.self && !doesLocationMatch()) {
	        if (typeof redirectLocation === 'function') {
	            window.location = redirectLocation(window.document.referrer, window.location, options);
	        } else {
	            window.location = redirectLocation;
	        }
	    }
	}

	module.exports = iframeBoxer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;