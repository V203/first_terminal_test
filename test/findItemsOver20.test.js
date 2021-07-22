const findItemsOver20 = require("../findItemsOver20");

const assert = require("assert");

describe("The Find items over 20 function",()=>{

    var itemList_A = [
        {name : 'apples', qty : 21},
        {name : 'pears', qty : 3},
        {name : 'bananas', qty : 7},
        {name : 'apples', qty : 3},
    ];
      var itemList_B = [{name : 'bananas', qty : 27},{name : 'apples', qty : 3}];
	it("It should it should return bananas with the qty of 27",()=>{
        assert.deepEqual( [
           
            {
              name: 'bananas',
              qty: 27
            }
          ],findItemsOver20(itemList_B));
    })

    
		
        
        

	it("It should return apples with qty of 21",()=>{
		assert.deepEqual([{"name": "apples","qty": 21}],findItemsOver20(itemList_A))
	});
});