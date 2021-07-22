const fromWhere = require("../fromWhere");

const assert = require("assert");

describe("The fromWhere function",()=>{
	it("If CJ is parsed iin the parameter the function should return Paarl",()=>{
		assert.equal("Paarl",fromWhere("CJ"))
	});

	it("If CA is parsed iin the parameter the function should return Cape Town",()=>{
		assert.equal("Cape Town",fromWhere("CA"));
	});
    it("If CY is parsed iin the parameter the function should return Belville",()=>{
		assert.equal("Bellville",fromWhere("CY"));
	});
});