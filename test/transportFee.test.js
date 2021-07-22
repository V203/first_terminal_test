const transportFee = require("../transportFee");

const assert = require("assert")


describe("The transportFee function",()=>{
    it("If parameter is equal Morning the function should return R20",()=>{
        assert.equal("R20",transportFee("morning"))
    })
    it("If parameter is equal afternoon the function should return R10",()=>{
        assert.equal("R10",transportFee("afternoon"));
    })
})