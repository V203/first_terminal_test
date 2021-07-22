const assert = require("assert");

const countRegNumber = require("../countRegNumber");

describe("Count Reg numbers function",()=>{
    it("Should take in a string of reg numbers and return the the number of registration numbers parsed in the function.",()=>{
        assert.equal(3,countRegNumber("CA1232, CY3232,CA5657")) ;
    })
    it("Shout take in a string of 2 reg numbers and return 2.",()=>{
        assert.equal(2,countRegNumber("CA3434, CA34454"))
    })
})