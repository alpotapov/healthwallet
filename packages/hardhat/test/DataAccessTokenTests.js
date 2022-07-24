const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("Social Recovery with Data Access Token", async () => {
  let datContract;
  const [deployer, account1] = await ethers.getSigners();

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("Social recovery with DataAccessToken", async () => {
    it("Should deploy DataAccessToken", async () => {
      const DataAccessToken = await ethers.getContractFactory(
        "DataAccessToken"
      );

      datContract = await DataAccessToken.deploy();
    });

    describe("Minting new DAT", () => {
      it("should mint new token", async () => {
        await datContract.mint();
        expect(await datContract.balanceOf(deployer.address)).to.equal(
          ethers.BigNumber.from(1)
        );
      });

      it("should allow owner to assign guardians", async () => {
        await datContract.assignGuardian(account1.address);
        const guardians = await datContract.getMyGuardians();
        console.log({ guardians });
        const guardianAddresses = guardians.map((g) => g[0]);
        expect(guardianAddresses).to.contain(account1.address);
      });

      it("should preserve guardians between token transfers", () => {});
    });
  });
});
