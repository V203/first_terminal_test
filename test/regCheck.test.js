const assert = require("assert");

const regCeck = require("../regCheck");

describe("The Reg check function.",()=>{
    it("It should return true if the first parameter starts withe second parameter.",()=>{
        assert.equal(true,regCeck("CA232323","CA"))
    })
    it("It should return false if the first parameter doesnt starts with second parameter.",()=>{
        assert.equal(false,regCeck("CA232323","CI"))
    })
})