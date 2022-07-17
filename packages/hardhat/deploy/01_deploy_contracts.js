require("dotenv").config();

const { skipIfNotLocal } = require("../utils/deploymentUtils");

const deploymentScript = async ({ getNamedAccounts, deployments }) => {
  console.log("\n01_deploy_contracts");

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ResultRegistry", {
    from: deployer,
    log: true,
    contract: "ResultRegistry",
  });

  console.log("01_deploy_contracts - FINISHED");
};

deploymentScript.skip = skipIfNotLocal;

module.exports = deploymentScript;

module.exports.tags = ["FakeTokens"];
