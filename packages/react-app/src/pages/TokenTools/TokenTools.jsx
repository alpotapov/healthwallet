import React from 'react';

import PageBase from '../PageBase/PageBase';
import TokenCreation from './components/TokenCreation';
// import LockForm from './components/LockForm';
// import TokenAddress from './components/TokenAddress';
import MyTokens from './components/MyTokens';

const TokenTools = () => {
  return (
    <PageBase>
      <div className="container mx-auto">
        <div className="flex-grow my-8 space-y-4">
          <p className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-thin pb-14">
            Token Tools
          </p>
        </div>
        <div className="flex flex-col space-y-4 justify-between items-center lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0 pb-40">
          <div className="flex-grow w-full">
            <TokenCreation />
          </div>
          <div className="flex-grow w-full">
            <MyTokens />
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default TokenTools;
