/* eslint-disable no-unused-vars */
import React from 'react';
import { ethers } from 'ethers';
import { useContractFunction, useEthers } from '@usedapp/core';
import PrimaryButton from '../../../components/PrimaryButton';
import { abis, getContracts } from '../../../contexts/ContractContext';

import TokenSymbol from '../assets/TokenSymbol.png';

const contracts = getContracts();

const MyTokens = () => {
  return (
    <div className="w-full h-full border rounded-xl border-gray pt-8 px-10 pb-12">
      <div className="flex flex-row space-x-4">
        <img src={TokenSymbol} alt="Create Token" />
        <span className="text-3xl text-black font-extralight uppercase">
          My Tokens
        </span>
      </div>
    </div>
  );
};

export default MyTokens;
