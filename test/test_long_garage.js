const assert = require("chai").assert;
var index = require("../index")

describe("Test for Long-Term Garage Parking", () => {
    it("Test 2 hours cost is $4.00", async ()=> {
        // arrange
        let parkType = "Long-Garage";
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
});