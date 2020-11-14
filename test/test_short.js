const assert = require("chai").assert;
var index = require("../index")

describe("Test for Short-Term (hourly) Parking", () => {
    it("Test 2 hours cost is $4.00", async ()=> {
        // arrange
        let parkType = "Short";
        let startDate = "11/14/2020";
        let leavingDate = "11/16/2020";
        let startTime = "0:00";
        let leavingTime = "02:00";
        let expectedCost = "$ 4.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 2 hours and half cost is $3.00", async ()=> {
        // arrange
        let parkType = "Short";
        let startDate = "11/14/2020";
        let leavingDate = "11/16/2020";
        let startTime = "0:00";
        let leavingTime = "02:30";
        let expectedCost = "$ 5.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });

    it("Test 2 days and 5 hours cost is $36.00", async ()=> {
        // arrange
        let parkType = "Short";
        let startDate = "11/14/2020";
        let leavingDate = "11/16/2020";
        let startTime = "0:00";
        let leavingTime = "02:30";
        let expectedCost = "$ 3.00";
        //act
        let cost = await index.calculateParkCost(parkType, startDate, leavingDate, startTime, leavingTime);
        //assert
        assert.equal(cost, expectedCost);
    });
});