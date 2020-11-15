const assert = require("chai").assert;
var index = require("../index")

describe("Test for Long-Term Garage Parking", () => {
    it("Test 1 hour cost is $2.00", async ()=> {
        // arrange
        let parkType = "Long-Garage";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "01:00";
        let expectedCost = "$ 2.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });
    it("Test 2 hours cost is $4.00", async ()=> {
        // arrange
        let parkType = "Long-Garage";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "02:00";
        let expectedCost = "$ 4.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });
    it("Test 1 day the cost is $12.00", async ()=> {
        // arrange
        let parkType = "Long-Garage";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "22:00";
        let expectedCost = "$ 12.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });
});
it("Test 7 day the cost is $72.00, last day is free", async ()=> {
    // arrange
    let parkType = "Long-Garage";
    let startDate = "11/14/2020";
    let leavingDate = "11/21/2020";
    let startTime = "0:00";
    let leavingTime = "00:00";
    let expectedCost = "$ 72.00";
    //act
    let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
    //assert
    assert.equal(cost, expectedCost);
});

it("Test 6 day the cost is $72.00, without day free", async ()=> {
    // arrange
    let parkType = "Long-Garage";
    let startDate = "11/14/2020";
    let leavingDate = "11/20/2020";
    let startTime = "0:00";
    let leavingTime = "00:00";
    let expectedCost = "$ 72.00";
    //act
    let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
    //assert
    assert.equal(cost, expectedCost);
});
});