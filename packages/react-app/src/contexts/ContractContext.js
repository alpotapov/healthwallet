import { ethers } from 'ethers';
import artifacts from '../contracts/hardhat_contracts.json';
import ERC20ABI from '../web3utilities/interfaces/ERC20.json';

const chainNames = {
  1: 'mainnet',
  3: 'ropsten',
  137: 'matic',
  31337: 'localhost',
};

const defaultNetworkId = 31337;
const defaultNetworkName = 'localhost';
const { contracts } = artifacts[defaultNetworkId][defaultNetworkName];

const erc20Interface = new ethers.utils.Interface(ERC20ABI);
const factoryInterface = new ethers.utils.Interface(contracts.Factory.abi);

export const abis = {
  erc20: {
    interface: erc20Interface,
  },
  factory: {
    interface: factoryInterface,
  },
};

export const getContracts = () => {
  const chainId = process.env.REACT_APP_NETWORK_ID;
  const chainName = chainNames[chainId];

  const factory = artifacts[chainId][chainName].contracts.Factory;

  return {
    factory: {
      address: factory.address,
    },
  };
};
