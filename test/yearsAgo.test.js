const yearsAgo = require("../yearsAgo");

const assert = require("assert");

describe("The yearsAgo function.",()=>{
    it("The Years ago function parsed with 2000 should return 21",()=>{
        assert.equal(21,yearsAgo(2000))

    })
    it("The Years ago function parsed with 2010 should return 11",()=>{
        assert.equal(11,yearsAgo(2010))
    })
})

