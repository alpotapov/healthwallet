import React from 'react';
import PageBase from '../PageBase/PageBase';

import ArrowsTransfer from './assets/ArrowsTransfer.svg';

const TransferToken = () => {
  return (
    <PageBase buttonBack backLink="/guardian">
      <div className="overflow-y-auto mb-16">
        <div className="flex items-center px-6 pt-6 pb-4">
          <div className="text-3xl font-bold w-36">
            <span className="text-silver-dark">Transfer</span> token
          </div>
        </div>
        <div className="bg-gray px-6 py-36 rounded-t-3xl">
          <div className="bg-white rounded-3xl py-11 px-5">
            <input
              className="w-full border border-dark-gray bg-white rounded-xl p-3.5 mb-6"
              placeholder="New friend address"
            />
            <button
              className="flex items-center w-full bg-raspberry rounded-2xl h-14 pl-5 text-white font-bold"
              type="button"
            >
              <img className="mr-8" src={ArrowsTransfer} alt="ArrowsTransfer" />
              Initial Transfer
            </button>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default TransferToken;
