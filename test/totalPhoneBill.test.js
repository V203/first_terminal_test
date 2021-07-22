const assert = require("assert");

const totalPhoneBill = require("../totalPhoneBill");

describe("The phoneBillFunction",()=>{
	it("Call should equal 2.75",()=>{
		assert.equal("R"+2.75,totalPhoneBill("call"))
	});

	it("Sms should equal 0.65",()=>{
		assert.equal("R"+0.65,totalPhoneBill("sms"))
	});
   
});