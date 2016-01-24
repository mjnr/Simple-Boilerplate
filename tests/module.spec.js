/*
* Requires and test a module.
*/

import { ZodiacSaint, BronzeSaint } from "../src/scripts/modules/my-module"

describe("Saint Seya", function(){

  let saintSeya, saintMu

  beforeEach(() => {
    saintSeya = new BronzeSaint("Seya", "Pegasus")
    saintMu = new ZodiacSaint("Mu", "Aries")
  })

  it("should be defined", () => {
    expect(ZodiacSaint).toBeDefined()
    expect(BronzeSaint).toBeDefined()
  })

  it("should return presentation when calling sayName", () => {
    expect(saintSeya.sayName()).toEqual("My name is Seya and I am the Bronze Pegasus saint")
    expect(saintMu.sayName()).toEqual("My name is Mu and I am the Aries saint")
  })

})
