/* eslint-disable no-unused-vars */
const fs = require('fs');
const ethers = require('ethers');
const lighthouse = require('@lighthouse-web3/sdk');
const ipfsService = require('./services/ipfsService');
const artifacts = require('./contracts/hardhat_contracts.json');

const privateKey = process.env.DOCTOR_PRIVATE_KEY;
const lighthouseApiKey = process.env.LIGHTHOUSE_API_KEY;

const rpcUrl = 'http://localhost:8545';
const defaultNetworkId = 31337;
const defaultNetworkName = 'localhost';
const { contracts } = artifacts[defaultNetworkId][defaultNetworkName];
const { ResultRegistry } = contracts;

const uploadToLighthouse = async (data) => {
  const response = await lighthouse.deploy(data, lighthouseApiKey);
  console.log({ response });
  return response.Hash;
};

const publishToResultRegistry = async (testUid, resultCid) => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  const blockNumber = await provider.getBlockNumber();
  console.log({ blockNumber });
  const resultRegistry = new ethers.Contract(
    ResultRegistry.address,
    new ethers.utils.Interface(ResultRegistry.abi),
    wallet
  );

  console.log({ testUid, resultCid });
  const result = await resultRegistry.publishMeasurementCid(testUid, resultCid);

  console.log({ result });
};

// exportToIPFS(TestResult);

const main = async (uid, measurement) => {
  console.log({ uid, measurement });
  const deviceOutput = {
    testType: 'Ferritin',
    date: '24.07.2022',
    uid,
    measurement,
  };
  const filePath = `./tmp/${uid}.json`;
  await fs.promises.writeFile(filePath, JSON.stringify(deviceOutput));
  const cid = await uploadToLighthouse(filePath);
  await publishToResultRegistry(uid, cid);
};

console.log({ argv: process.argv });
main(process.argv[2], process.argv[3]);
