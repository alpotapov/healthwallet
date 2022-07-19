import React from 'react';
import PageBase from '../PageBase/PageBase';
import Shield from '../GuardiansService/assets/Shield.png';

const TransferToken = () => {
  return (
    <PageBase buttonBack backLink="/guardian">
      <div className="relative z-10 flex items-center -mb-8 mt-5 px-6">
        <img src={Shield} alt="Shield" className="-ml-6" />
        <div className="text-3xl font-bold text-lilac">Guardian</div>
      </div>
      <div className="bg-gray px-6 py-11 rounded-t-3xl">
        <div className="test-sm text-dark-gray mb-1">New Friend address:</div>
        <input
          className="w-full border border-dark-gray bg-white rounded-xl p-2 mb-10"
          value="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        />
        <button
          className="flex items-center justify-center w-full bg-lilac rounded-2xl h-14 pl-5 text-white font-bold"
          type="button"
        >
          Initial Transfer
        </button>
      </div>
    </PageBase>
  );
};

export default TransferToken;
