import React from 'react';
import PageBase from '../PageBase/PageBase';
import UnreleasedCard from './components/UnreleasedCard';
import PassedCard from './components/PassedCard';

import Heard from './assets/Heard.png';
import Empty from './assets/Empty.svg';

const Ecosystem = () => {
  const forTest = [
    {
      id: 1,
      name: 'Ferritin',
      // status: 'passed',
      // status: 'analytics',
      status: 'toDo',
    },
    {
      id: 2,
      name: 'hemoglobin',
      status: 'unreleased',
    },
    {
      id: 3,
      name: 'lymphocyte',
      status: 'unreleased',
    },
  ];

  // const forTest = [];

  return (
    <PageBase buttonBack backLink="/">
      <div className="w-full overflow-y-auto mb-16">
        <div className="flex items-start mt-5 px-6 pb-2">
          <img src={Heard} alt="Heard" />
          <div>
            <div className="text-3xl font-bold text-celestial pb-5">
              Ecosystem
            </div>
            <div className="text-sm text-celestial">
              HealthWallet ecosystem includes researchers, startups and
              professionals capable of analysing your data and providing
              actionable insights.
            </div>
          </div>
        </div>
        {forTest.length <= 0 ? (
          <div className="bg-gray px-36 py-48 rounded-t-3xl text-sm text-dark-gray">
            <img src={Empty} alt="Empty" />
            <div className="text-center mr-2">Empty</div>
          </div>
        ) : (
          <div className="bg-gray rounded-t-3xl py-8 px-12">
            <PassedCard cardData={forTest} />
            <UnreleasedCard cardData={forTest} />
          </div>
        )}
      </div>
    </PageBase>
  );
};

export default Ecosystem;
