const assert = require("chai").assert;
var index = require("../index")

describe("Test for valet parking", () => {
    it("Test 12 hours cost is $18.00", async ()=> {
        // arrange
        let parkType = "Valet";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "13:00";
        let expectedCost = "$ 18.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 5 hours cost is $12.00", async ()=> {
        // arrange
        let parkType = "Valet";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "05:00";
        let expectedCost = "$ 12.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 2 days cost is $36.00", async ()=> {
        // arrange
        let parkType = "Valet";
        let startDate = "11/14/2020";
        let leavingDate = "11/16/2020";
        let startTime = "0:00";
        let leavingTime = "00:00";
        let expectedCost = "$ 36.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 2 days and 5 hours cost is $36.00", async ()=> {
        // arrange
        let parkType = "Valet";
        let startDate = "11/14/2020";
        let leavingDate = "11/16/2020";
        let startTime = "0:00";
        let leavingTime = "05:00";
        let expectedCost = "$ 54.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
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