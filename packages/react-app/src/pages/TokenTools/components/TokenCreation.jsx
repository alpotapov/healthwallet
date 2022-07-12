import React from 'react';
import { useForm } from 'react-hook-form';
import { ethers } from 'ethers';
import { useContractFunction, useEthers } from '@usedapp/core';
import StringInput from './StringInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { abis, getContracts } from '../../../contexts/ContractContext';

import TokenSymbol from '../assets/TokenSymbol.png';

const contracts = getContracts();

const TokenCreation = () => {
  const { library } = useEthers();
  const signer = library && library.getSigner();
  const { send, events } = useContractFunction(
    new ethers.Contract(
      contracts.factory.address,
      abis.factory.interface,
      signer
    ),
    'newERC'
  );
  React.useEffect(() => {
    console.log({ events });
  }, [events]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { tokenName, tokenTicker, tokenTotalSupply } = data;
    console.log({ tokenTotalSupply, tokenName, tokenTicker });
    send(tokenTotalSupply, tokenName, tokenTicker);
  };

  const onError = (errors) => {
    console.log({ errors });
  };
  return (
    <div className="w-full h-full border rounded-xl border-gray pt-8 px-10 pb-12">
      <div className="flex flex-row space-x-4">
        <img src={TokenSymbol} alt="Create Token" />
        <span className="text-3xl text-black font-extralight uppercase">
          Create Token
        </span>
      </div>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit, onError)}>
        <StringInput
          title="Name"
          placeholder="Token Name. Examples: Bitcoin, Ether, ..."
          register={register('tokenName', { required: true })}
        />
        <StringInput
          title="Ticker"
          placeholder="Token Ticker. Examples: BTC, ETH, ..."
          register={register('tokenTicker', { required: true })}
        />
        <StringInput
          title="Total Supply"
          placeholder="Token in Existence. "
          register={register('tokenTotalSupply', { required: true })}
        />

        <PrimaryButton
          onClick={() => {}}
          variation="lettuce"
          className="w-full mt-6"
          isSubmit
        >
          <span>Create Token</span>
        </PrimaryButton>
      </form>
    </div>
  );
};

export default TokenCreation;
