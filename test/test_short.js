const assert = require("chai").assert;
var index = require("../index")

describe("Test for Short-Term (hourly) Parking", () => {
    it("Test Fist hour cost is $2.00", async ()=> {
        // arrange
        let parkType = "Short";
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

    it("Test 1 hour and half cost is $3.00", async ()=> {
        // arrange
        let parkType = "Short";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "01:30";
        let expectedCost = "$ 3.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 22 hours cost is $24.00", async ()=> {
        // arrange
        let parkType = "Short";
        let startDate = "11/14/2020";
        let leavingDate = "11/14/2020";
        let startTime = "0:00";
        let leavingTime = "22:30";
        let expectedCost = "$ 24.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 2 days cost is $48.00", async ()=> {
        // arrange
        let parkType = "Short";
        let startDate = "11/14/2020";
        let leavingDate = "11/16/2020";
        let startTime = "0:00";
        let leavingTime = "00:0";
        let expectedCost = "$ 48.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });
});