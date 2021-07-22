const assert = require("assert");


const countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function",()=>{
    it("Should take in a string that contains 3 CJ number plates and return 3.",()=>{
        assert.equal(3,countAllPaarl("CJ1212, CJ12123, CJ6565"));
    })
    it("Should take in a string that contains CJ number plate and a cy number and it should return 1",()=>{
        assert.equal(1,countAllPaarl("CJ5454,CA7687"));
    })
})