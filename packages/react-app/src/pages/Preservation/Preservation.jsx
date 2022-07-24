import React from 'react';
import PageBase from '../PageBase/PageBase';
import NeedAuthorization from './components/NeedAuthorization';
import Authorized from './components/Authorized';

import GreyKey from './assets/GreyKey.png';
import GreenKey from './assets/GreenKey.png';

const Preservation = () => {
  const forTestKey = [
    { key: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', guardians: 0 },
  ];
  // const forTestKey = [];

  return (
    <div className="mockup-phone">
      <div className="camera" />
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <PageBase buttonBack backLink="/">
            <div className="overflow-y-auto mb-16">
              {forTestKey.length === 0 ? (
                <div className="mt-5">
                  <div className="flex items-center pl-3">
                    <img src={GreyKey} alt="GreyKey" className="-mb-16" />
                    <div className="flex flex-col text-2xl font-bold">
                      <span className="text-dark-gray">Data</span>Preservation
                    </div>
                  </div>
                  <NeedAuthorization />
                </div>
              ) : (
                <div className="mt-5">
                  <div className="flex items-center pl-3">
                    <img src={GreenKey} alt="GreyKey" className="-mb-16" />
                    <div className="flex flex-col text-2xl font-bold">
                      <span className="text-lettuce">Data</span>Preservation
                    </div>
                  </div>
                  <Authorized userInfo={forTestKey} />
                </div>
              )}
            </div>
          </PageBase>
        </div>
      </div>
    </div>
  );
};

export default Preservation;
