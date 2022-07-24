/* eslint-disable no-unused-vars */
const ethers = require('ethers');
const lighthouse = require('@lighthouse-web3/sdk');
const ipfsService = require('./services/ipfsService');
const TestResult = require('./916f9e6901fa.json');
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

const main = async () => {
  const deviceOutput = './916f9e6901fa.json';
  const cid = await uploadToLighthouse(deviceOutput);
  await publishToResultRegistry('12345abc', cid);
};

main();
