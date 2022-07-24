import React from 'react';
import PageBase from '../PageBase/PageBase';
import GuardiansCard from './components/GuardiansCard';

import Lock from './assets/Lock.png';
import Empty from './assets/Empty.svg';

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
    <div className="mockup-phone">
      <div className="camera" />
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <PageBase buttonBack backLink="/">
            <div className="overflow-y-auto mb-16">
              {forTestData <= 0 ? (
                <div className="w-full">
                  <div className="flex items-center -mb-8 mt-5 px-6">
                    <img src={Lock} alt="Lock" className="-ml-6" />
                    <div className="text-3xl font-bold text-raspberry">
                      Guardian
                    </div>
                  </div>
                  <div className="bg-gray px-36 py-48 rounded-t-3xl text-sm text-dark-gray">
                    <img src={Empty} alt="Empty" />
                    <div className="text-center mr-3">Empty</div>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex items-center -mb-8 mt-5 px-6">
                    <img src={Lock} alt="Lock" className="-ml-6" />
                    <div className="text-3xl font-bold text-raspberry">
                      Guardian
                    </div>
                  </div>
                  <GuardiansCard guardiansCard={forTestData} />
                </div>
              )}
            </div>
          </PageBase>
        </div>
      </div>
    </div>
  );
};

export default GuardiansService;
