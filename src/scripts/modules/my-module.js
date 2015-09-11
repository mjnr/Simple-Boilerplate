/*  
* A module using the Revealing Module Pattern
* combined with Browserify.
*/

var App = App || {};

App.myModule = (function(win, doc, jQuery){

	"use strict";

	function init() {
		bindEvents();
	}

	function bindEvents() {
		console.log("A module using jQuery!", $);
	}

	return {
		init: init
	}

})(window, document, $);

module.exports = App.myModule;
