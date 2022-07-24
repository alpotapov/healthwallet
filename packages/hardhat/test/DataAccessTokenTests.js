const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("Social Recovery with Data Access Token", async () => {
  let datContract;
  let dataAccessTokenFactory;
  const [deployer, account1, account2, account3, account4] =
    await ethers.getSigners();

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("Social recovery with DataAccessToken", async () => {
    it("Should deploy DataAccessToken", async () => {
      dataAccessTokenFactory = await ethers.getContractFactory(
        "DataAccessToken"
      );

      datContract = await dataAccessTokenFactory.deploy();
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

      it("should allow guardians to transfer token to a new address", async () => {
        const dat = await dataAccessTokenFactory.deploy();
        await dat.mint();
        await dat.assignGuardian(account1.address);
        await dat.assignGuardian(account2.address);
        await dat.assignGuardian(account3.address);

        let currentOwner = await dat.ownerOf(1);
        expect(currentOwner).to.be.equal(deployer.address);

        await dat
          .connect(account1)
          .recoverTokenTo(deployer.address, account4.address);
        currentOwner = await dat.ownerOf(1);
        expect(currentOwner).to.be.equal(deployer.address);

        await dat
          .connect(account2)
          .recoverTokenTo(deployer.address, account4.address);
        currentOwner = await dat.ownerOf(1);
        expect(currentOwner).to.be.equal(account4.address);
      });

      it("should preserve guardians between token transfers", () => {});
    });
  });
});
