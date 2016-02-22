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

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* Class sample
*/

var ZodiacSaint = function () {
	function ZodiacSaint(name, cloth) {
		_classCallCheck(this, ZodiacSaint);

		this._name = name;
		this._cloth = cloth;
	}

	_createClass(ZodiacSaint, [{
		key: "sayName",
		value: function sayName() {
			return "My name is " + this._name + " and I am the " + this._cloth + " saint";
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9ob21lLmpzIiwic3JjL3NjcmlwdHMvbW9kdWxlcy9teS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDTUEsSUFBSSxZQUFZLDBCQUFnQixNQUFoQixFQUF3QixTQUF4QixDQUFaOzs7O0FBQ0osVUFBVSxPQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNITTtBQUVMLFVBRkssV0FFTCxDQUFZLElBQVosRUFBa0IsS0FBbEIsRUFBeUI7d0JBRnBCLGFBRW9COztBQUN4QixPQUFLLEtBQUwsR0FBYSxJQUFiLENBRHdCO0FBRXhCLE9BQUssTUFBTCxHQUFjLEtBQWQsQ0FGd0I7RUFBekI7O2NBRks7OzRCQU9LO0FBQ1QsMEJBQXFCLEtBQUssS0FBTCxzQkFBMkIsS0FBSyxNQUFMLFdBQWhELENBRFM7Ozs7UUFQTDs7O0lBYUE7OztBQUVMLFVBRkssV0FFTCxDQUFZLElBQVosRUFBa0IsS0FBbEIsRUFBeUI7d0JBRnBCLGFBRW9COztnRUFGcEIsd0JBR0Usa0JBQWdCLFFBREU7RUFBekI7O2NBRks7OzRCQU1LO0FBQ1QscUNBUEksbURBT0osQ0FEUzs7OztRQU5MO0VBQW9COztRQVlqQjtRQUFhIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4qIEhvbWUgSmF2YXNjcmlwdCBmaWxlLlxuKi9cblxuaW1wb3J0IHsgWm9kaWFjU2FpbnQsIEJyb256ZVNhaW50IH0gZnJvbSBcIi4vbW9kdWxlcy9teS1tb2R1bGVcIjtcblxubGV0IHNhaW50SWtraSA9IG5ldyBCcm9uemVTYWludChcIklra2lcIiwgXCJQaG9lbml4XCIpO1xuc2FpbnRJa2tpLnNheU5hbWUoKTtcbi8vIE15IG5hbWUgaXMgSWtraSBhbmQgSSBhbSB0aGUgQnJvbnplIFBob2VuaXggc2FpbnRcbiIsIi8qXG4qIENsYXNzIHNhbXBsZVxuKi9cblxuY2xhc3MgWm9kaWFjU2FpbnQge1xuXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGNsb3RoKSB7XG5cdFx0dGhpcy5fbmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5fY2xvdGggPSBjbG90aDtcblx0fVxuXG5cdHNheU5hbWUoKSB7XG5cdFx0cmV0dXJuIGBNeSBuYW1lIGlzICR7dGhpcy5fbmFtZX0gYW5kIEkgYW0gdGhlICR7dGhpcy5fY2xvdGh9IHNhaW50YDtcblx0fVxuXG59XG5cbmNsYXNzIEJyb256ZVNhaW50IGV4dGVuZHMgWm9kaWFjU2FpbnQge1xuXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGNsb3RoKSB7XG5cdFx0c3VwZXIobmFtZSwgYEJyb256ZSAke2Nsb3RofWApO1xuXHR9XG5cblx0c2F5TmFtZSgpIHtcblx0XHRyZXR1cm4gc3VwZXIuc2F5TmFtZSgpO1xuXHR9XG5cbn1cblxuZXhwb3J0IHsgWm9kaWFjU2FpbnQsIEJyb256ZVNhaW50IH1cbiJdfQ==
