/*
* Requires and test a module.
*/

var myTestableModule = require("../src/scripts/modules/my-testable-module.js");

describe("Function to multiply two numbers", function(){
   var arithmetic = myTestableModule;

   it("should return the result of the multiplication", function(){
      expect(arithmetic).toBeDefined()
      expect(arithmetic.mult(5,2)).toBe(10)
   });
});
