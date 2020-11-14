const assert = require("chai").assert;
var index = require("../index")

describe("Test for valet parking", () => {
    it("Test two hours cost is $18.00", async ()=> {
        // arrange
        let cost = await index.calculateParkCost("Valet");
        //act
        //assert
        assert.equal(cost, "$ 12.00");
    });

    it("Test six hours cost is $18.00", ()=> {
        // arrange
        //act
        //assert
        assert.equal(5,5);
    });
});

describe("Test for short time", () => {
    it("Test two hours cost is $18.00", ()=> {
        // arrange
        //act
        //assert
        assert.equal(5,5);
    });

    it("Test six hours cost is $18.00", ()=> {
        // arrange
        //act
        //assert
        assert.equal(5,5);
    });
});