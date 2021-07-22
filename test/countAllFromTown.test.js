const assert = require("assert");

const isFromCapeTown = require("../countAllFromTown");

describe("The isFromCapeTown function",()=>{
    it("Should reurn true reg number starts with CA",()=>{
        assert.equal(true,isFromCapeTown("CA656565"))
    })
    it("Should reurn false reg number starts with CW",()=>{
        assert.equal(false,isFromCapeTown("CW656565"))
    })
})

