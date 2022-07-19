import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';

import Shield from './assets/Shield.png';
import KeyGreen from './assets/KeyGreen.svg';
import KeyRed from './assets/KeyRed.svg';

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
            <img src={Shield} alt="Shield" className="-ml-6" />
            <div className="text-3xl font-bold text-lilac">Guardian</div>
          </div>
          <div className="bg-gray px-44 py-56 rounded-t-3xl text-sm font-bold text-dark-gray">
            Empty
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex items-center -mb-8 mt-5 px-6">
            <img src={Shield} alt="Shield" className="-ml-6" />
            <div className="text-3xl font-bold text-lilac">Guardian</div>
          </div>
          <div className="bg-gray px-6 py-11 rounded-t-3xl">
            {forTestData.map((guardData) => {
              return (
                <div
                  className="flex gap-8 border border-dark-gray bg-white rounded-3xl p-8 mb-6"
                  key={guardData.id}
                >
                  <img
                    src={guardData.status === 'verified' ? KeyGreen : KeyRed}
                    alt="Status"
                  />
                  <div className="text-sm">
                    <div className="text-dark-gray mb-2">{guardData.name}</div>
                    {guardData.status === 'verified' ? (
                      <div className="font-bold text-lettuce mb-2">
                        {guardData.address.length < 45
                          ? `${guardData.address.substr(
                              0,
                              6
                            )}...${guardData.address.substr(
                              guardData.address.length - 4,
                              guardData.address.length
                            )}`
                          : guardData.address}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 text-raspberry mb-2">
                        <div>
                          {guardData.address.length < 45
                            ? `${guardData.address.substr(
                                0,
                                6
                              )}...${guardData.address.substr(
                                guardData.address.length - 4,
                                guardData.address.length
                              )}`
                            : guardData.address}
                        </div>
                        <div>
                          {guardData.newAddress.length < 45
                            ? `${guardData.newAddress.substr(
                                0,
                                6
                              )}...${guardData.newAddress.substr(
                                guardData.newAddress.length - 4,
                                guardData.newAddress.length
                              )}`
                            : guardData.newAddress}
                        </div>
                      </div>
                    )}
                    <button
                      className="border border-dark-gray h-6 rounded-3xl px-2 mb-2"
                      type="button"
                      onClick={() => {}}
                    >
                      Rename
                    </button>
                    <div className="bg-lilac rounded-3xl h-6 text-white px-2">
                      <Link to="/guardian/transfer-token">Transfer token</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PageBase>
  );
};

export default GuardiansService;
