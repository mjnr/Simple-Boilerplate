(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
* Contact Javascript file.
*/

var myTestableModule = require("./modules/my-testable-module");

myModule.init(); // A module using jQuery ...
},{"./modules/my-testable-module":2}],2:[function(require,module,exports){
/*
* A module using the Revealing Module Pattern
* to multiply two numbers.
*/

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb250YWN0LmpzIiwic3JjL3NjcmlwdHMvbW9kdWxlcy9teS10ZXN0YWJsZS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiogQ29udGFjdCBKYXZhc2NyaXB0IGZpbGUuXG4qL1xuXG52YXIgbXlUZXN0YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvbXktdGVzdGFibGUtbW9kdWxlXCIpO1xuXG5teU1vZHVsZS5pbml0KCk7IC8vIEEgbW9kdWxlIHVzaW5nIGpRdWVyeSAuLi4iLCIvKlxuKiBBIG1vZHVsZSB1c2luZyB0aGUgUmV2ZWFsaW5nIE1vZHVsZSBQYXR0ZXJuXG4qIHRvIG11bHRpcGx5IHR3byBudW1iZXJzLlxuKi9cblxudmFyIG15T3RoZXJNb2R1bGUgPSAoZnVuY3Rpb24oJCl7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuXHRcdHZhciByZXN1bHQgPSBhICogYjtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRtdWx0OiBmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gbXVsdGlwbHkoYSwgYik7XG5cdFx0fVxuXHR9O1xuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG15T3RoZXJNb2R1bGU7XG4iXX0=
