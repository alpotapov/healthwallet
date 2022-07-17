const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

const redeployContracts = async () => {
  const resultRegistryFactory = await ethers.getContractFactory(
    "ResultRegistry"
  );
  const resultRegistry = await resultRegistryFactory.deploy();

  return {
    resultRegistry,
  };
};

describe("ResultRegistry", function () {
  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("ResultRegistry", function () {
    it("Should deploy ResultRegistry", async function () {
      const ResultRegistry = await ethers.getContractFactory("ResultRegistry");
      await ResultRegistry.deploy();
    });

    describe("Uploading new measurement", function () {
      let resultRegistry;
      beforeEach(async () => {
        const contracts = await redeployContracts();
        resultRegistry = contracts.resultRegistry;
      });
      it("should insert new record into the registry", async function () {
        const measurementCid = "...";
        const testUid = "ABC-123-abc";

        await resultRegistry.publishMeasurementCid(testUid, measurementCid);
      });
    });

    describe("Querying measurements", () => {
      let resultRegistry;
      beforeEach(async () => {
        const contracts = await redeployContracts();
        resultRegistry = contracts.resultRegistry;
      });
      it("should return single measurement", async () => {
        const measurementCid = "...";
        const testUid = "ABC-123-abc";
        await resultRegistry.publishMeasurementCid(testUid, measurementCid);

        const result = await resultRegistry.getMeasurement(testUid);

        expect(result).to.be.eq(measurementCid);
      });
      it("should return a list of measurements", async () => {
        const testResults = [
          {
            cid: "1234",
            testUid: "abcd",
          },
          {
            cid: "0987",
            testUid: "dfgh",
          },
          {
            cid: "5678",
            testUid: "cvbn",
          },
        ];
        Promise.all(
          testResults.map((res) =>
            resultRegistry.publishMeasurementCid(res.testUid, res.cid)
          )
        );

        const result = await resultRegistry.getMeasurements(
          testResults.map((res) => res.testUid)
        );

        expect(result.length).to.be.equal(3);
        expect(result).to.have.same.members(["1234", "0987", "5678"]);
      });
    });
  });
});
