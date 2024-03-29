/* eslint-disable no-unused-vars */
require("dotenv").config();

// const { ethers } = require("hardhat");
const { skipIfNotLocal } = require("../utils/deploymentUtils");

const deploymentScript = async ({ getNamedAccounts, deployments, ethers }) => {
  console.log("\n01_deploy_contracts");

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ResultRegistry", {
    from: deployer,
    log: true,
    contract: "ResultRegistry",
  });
  // const resultRegistry = await ethers.getContract("ResultRegistry");

  // await Promise.all(
  //   testResults.map((res) =>
  //     resultRegistry.publishMeasurementCid(res.testUid, res.cid)
  //   )
  // );

  console.log("01_deploy_contracts - FINISHED");
};

deploymentScript.skip = skipIfNotLocal;

module.exports = deploymentScript;

module.exports.tags = [];
