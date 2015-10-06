/*
* Requires and test a module.
*/

var myTestableModule = require("../src/scripts/modules/my-testable-module.js");

describe("Function to multiply two numbers", function(){
   var arithmetic = myTestableModule;

   it("it should be defined", function(){
      expect(arithmetic).toBeDefined()
   });

   it("5 and 2 should return 10", function(){
      expect(arithmetic.mult(5,2)).toEqual(10)
   });

   it("2 and 2 should return 4", function(){
      expect(arithmetic.mult(2,8)).toEqual(16)
   });
});
