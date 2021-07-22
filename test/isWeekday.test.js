const assert = require("assert")

const isWeekday = require("../isWeekday");

describe("The isWeekday function",()=>{
    it("Should return true if parameter equal  Monday, Tuesday, Wednesday, Thursday or Friday",()=>{
        assert.equal(true,isWeekday("Monday"));
        assert.equal(true,isWeekday("Tuesday"));
        assert.equal(true,isWeekday("Wednesday"));
        assert.equal(true,isWeekday("Thursday"));
        assert.equal(true,isWeekday("Friday"));
        
    })
    it("Should return false if day equals Saturday or Sunday.",()=>{
        assert.equal(false,isWeekday("Saturday"));
        assert.equal(false,isWeekday("Sunday"));
    })
})
