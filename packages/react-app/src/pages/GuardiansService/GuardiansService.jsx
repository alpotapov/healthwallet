import React from 'react';
import PageBase from '../PageBase/PageBase';
import GuardiansCard from './components/GuardiansCard';

import Lock from './assets/Lock.png';

const GuardiansService = () => {
  const forTestData = [
    {
      id: 0,
      name: 'Mather',
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      status: 'verified',
    },
    {
      id: 1,
      name: 'Father',
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      newAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      status: 'awaits',
    },
  ];

  // const forTestData = [];

  return (
    <PageBase buttonBack backLink="/">
      {forTestData <= 0 ? (
        <div className="w-full">
          <div className="flex items-center -mb-8 mt-5 px-6">
            <img src={Lock} alt="Shield" className="-ml-6" />
            <div className="text-3xl font-bold text-raspberry">Guardian</div>
          </div>
          <div className="bg-gray px-44 py-56 rounded-t-3xl text-sm font-bold text-dark-gray">
            Empty
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex items-center -mb-8 mt-5 px-6">
            <img src={Lock} alt="Shield" className="-ml-6" />
            <div className="text-3xl font-bold text-raspberry">Guardian</div>
          </div>
          <GuardiansCard guardiansCard={forTestData} />
        </div>
      )}
    </PageBase>
  );
};

export default GuardiansService;
