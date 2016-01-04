(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
* Contact Javascript file.
*/

var myTestableModule = require("./modules/my-testable-module");

myTestableModule.mult(5,2); // return 10
},{"./modules/my-testable-module":2}],2:[function(require,module,exports){
var myOtherModule = (function($){

	"use strict";

	function multiply(a, b) {
		var result = a * b;
		return result;
	}

	return {
		mult: function(a, b) {
			return multiply(a, b);
		}
	};

})();

module.exports = myOtherModule;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb250YWN0LmpzIiwic3JjL3NjcmlwdHMvbW9kdWxlcy9teS10ZXN0YWJsZS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuKiBDb250YWN0IEphdmFzY3JpcHQgZmlsZS5cbiovXG5cbnZhciBteVRlc3RhYmxlTW9kdWxlID0gcmVxdWlyZShcIi4vbW9kdWxlcy9teS10ZXN0YWJsZS1tb2R1bGVcIik7XG5cbm15VGVzdGFibGVNb2R1bGUubXVsdCg1LDIpOyAvLyByZXR1cm4gMTAiLCJ2YXIgbXlPdGhlck1vZHVsZSA9IChmdW5jdGlvbigkKXtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRmdW5jdGlvbiBtdWx0aXBseShhLCBiKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGEgKiBiO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG11bHQ6IGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiBtdWx0aXBseShhLCBiKTtcblx0XHR9XG5cdH07XG5cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbXlPdGhlck1vZHVsZTtcbiJdfQ==
