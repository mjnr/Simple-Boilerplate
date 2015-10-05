/*
* A module using the Revealing Module Pattern
* to multiply two numbers.
*/

myOtherModule = (function(){

	"use strict";

	function multiply(a,b) {
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
