const assert = require("assert");

const isFromBellville = require("../isFromBellville");

describe("The isFromBellville functio",()=>{
    it("Should reurn true if parameter starts with CY",()=>{
        assert.equal(true,isFromBellville("CY121333"));
    })
    it("Should reurn false if parameter starts with CA",()=>{
        assert.equal(false,isFromBellville("CA121333"));
    })
})
