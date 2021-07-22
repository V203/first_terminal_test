const assert = require("assert");

const findItemsOver = require("../findItemsOver");

describe("The findItemsOver function",()=>{
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 10},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 17}
    ];
    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 30},
        {name : 'bananas', qty : 13},
        {name : 'apples', qty : 17}
    ];
	it("It should return apples and bananas since the are above 20",()=>{
		assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23}],findItemsOver(itemList3,20))
	});

	it("It should return pears since its the only one object obove 20 in this case",()=>{
		assert.deepEqual([{name : 'pears', qty : 30}],findItemsOver(itemList2,20))
	});
});