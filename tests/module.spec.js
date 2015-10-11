/*
* Requires and test a module.
*/

var myTestableModule = require("../src/scripts/modules/my-testable-module.js");

describe("Function to multiply two numbers", function(){
   var calculator = myTestableModule;

   it("it should be defined", function(){
      expect(calculator).toBeDefined()
   });

   it("5 and 2 should return 10", function(){
      expect(calculator.mult(5,2)).toEqual(10)
   });

   it("2 and 8 should return 16", function(){
      expect(calculator.mult(2,8)).toEqual(16)
   });
});
