(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _myModule = require("./modules/my-module");

var saintIkki = new _myModule.BronzeSaint("Ikki", "Phoenix"); /*
                                                              * Home Javascript file.
                                                              */

saintIkki.sayName();
// My name is Ikki and I am the Bronze Phoenix saint

},{"./modules/my-module":2}],2:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) {
	if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
		var parent = Object.getPrototypeOf(object);if (parent === null) {
			return undefined;
		} else {
			return get(parent, property, receiver);
		}
	} else if ("value" in desc) {
		return desc.value;
	} else {
		var getter = desc.get;if (getter === undefined) {
			return undefined;
		}return getter.call(receiver);
	}
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

/*
* Class sample
*/

var ZodiacSaint = function () {
	function ZodiacSaint(name, cloth) {
		_classCallCheck(this, ZodiacSaint);

		this.name = name;
		this.cloth = cloth;
	}

	_createClass(ZodiacSaint, [{
		key: "sayName",
		value: function sayName() {
			return "My name is " + this.name + " and I am the " + this.cloth + " saint";
		}
	}]);

	return ZodiacSaint;
}();

var BronzeSaint = function (_ZodiacSaint) {
	_inherits(BronzeSaint, _ZodiacSaint);

	function BronzeSaint(name, cloth) {
		_classCallCheck(this, BronzeSaint);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BronzeSaint).call(this, name, "Bronze " + cloth));
	}

	_createClass(BronzeSaint, [{
		key: "sayName",
		value: function sayName() {
			return _get(Object.getPrototypeOf(BronzeSaint.prototype), "sayName", this).call(this);
		}
	}]);

	return BronzeSaint;
}(ZodiacSaint);

exports.ZodiacSaint = ZodiacSaint;
exports.BronzeSaint = BronzeSaint;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9ob21lLmpzIiwic3JjL3NjcmlwdHMvbW9kdWxlcy9teS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDTUEsSUFBSSxZQUFZLDBCQUFBLEFBQWdCLFFBQTVCLEFBQVksQUFBd0I7Ozs7QUFDeEMsVUFBQSxBQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEosQUFFTCxZQUFBLEFBQVksTUFBWixBQUFrQjt3QkFGYixBQUVvQixBQUN4Qjs7T0FBQSxBQUFLLE9BRG1CLEFBQ3hCLEFBQVksQUFDWixLQUZ3QjtPQUV4QixBQUFLLFFBRk4sQUFBeUIsQUFFeEIsQUFBYTs7O2NBSlQ7OzRCQU9LLEFBQ1Q7MEJBQXFCLEtBQUEsQUFBSywwQkFBcUIsS0FBQSxBQUFLLFFBRDNDLEFBQ1Q7O0tBTkQ7O1FBRks7R0FBQTs7SUFhQTt3QkFFTDs7VUFGSyxBQUVMLFlBQUEsQUFBWSxNQUFaLEFBQWtCLE9BQU87d0JBRnBCLEFBRW9COztnRUFGcEIsd0JBR0Usa0JBRFAsQUFBeUIsQUFDRjs7O2NBSGxCOzs0QkFNSyxBQUNUO3FDQVBJLDhDQU1LLEFBQ1Q7Ozs7UUFQSTtFQUFvQjs7UUFZakI7UUFBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuKiBIb21lIEphdmFzY3JpcHQgZmlsZS5cbiovXG5cbmltcG9ydCB7IFpvZGlhY1NhaW50LCBCcm9uemVTYWludCB9IGZyb20gXCIuL21vZHVsZXMvbXktbW9kdWxlXCJcblxubGV0IHNhaW50SWtraSA9IG5ldyBCcm9uemVTYWludChcIklra2lcIiwgXCJQaG9lbml4XCIpXG5zYWludElra2kuc2F5TmFtZSgpXG4vLyBNeSBuYW1lIGlzIElra2kgYW5kIEkgYW0gdGhlIEJyb256ZSBQaG9lbml4IHNhaW50XG4iLCIvKlxuKiBDbGFzcyBzYW1wbGVcbiovXG5cbmNsYXNzIFpvZGlhY1NhaW50IHtcblxuXHRjb25zdHJ1Y3RvcihuYW1lLCBjbG90aCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWVcblx0XHR0aGlzLmNsb3RoID0gY2xvdGhcblx0fVxuXG5cdHNheU5hbWUoKSB7XG5cdFx0cmV0dXJuIGBNeSBuYW1lIGlzICR7dGhpcy5uYW1lfSBhbmQgSSBhbSB0aGUgJHt0aGlzLmNsb3RofSBzYWludGBcblx0fVxuXG59XG5cbmNsYXNzIEJyb256ZVNhaW50IGV4dGVuZHMgWm9kaWFjU2FpbnQge1xuXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGNsb3RoKSB7XG5cdFx0c3VwZXIobmFtZSwgYEJyb256ZSAke2Nsb3RofWApXG5cdH1cblxuXHRzYXlOYW1lKCkge1xuXHRcdHJldHVybiBzdXBlci5zYXlOYW1lKClcblx0fVxuXG59XG5cbmV4cG9ydCB7IFpvZGlhY1NhaW50LCBCcm9uemVTYWludCB9XG4iXX0=
