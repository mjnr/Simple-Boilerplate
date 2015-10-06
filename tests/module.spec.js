/*
* Requires and test a module.
*/

var myTestableModule = require("../src/scripts/modules/my-testable-module.js");

describe("Function to multiply two numbers", function(){
   var calculator = myTestableModule;

   it("module should be defined", function(){
     expect(calculator).toBeDefined()
   });

   it("should return the result of the multiplication 5 * 2", function(){
      expect(calculator.mult(5,2)).toBe(10)
   });

   it("should return the result of the multiplication 2 * 3", function(){
      expect(calculator.mult(2,3)).toBe(6)
   });
});
