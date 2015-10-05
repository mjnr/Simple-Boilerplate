/*
* Main Javascript file.
*/

var myModule = require("./modules/my-module");
var myTestableModule = require("./modules/my-testable-module");

myModule.init(); // A module using jQuery ...
myTestableModule.mult(5,2); // return 10
