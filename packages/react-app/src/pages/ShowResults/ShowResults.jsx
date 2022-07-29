import React from 'react';
import PageBase from '../PageBase/PageBase';

import DropBlue from './assets/DropBlue.svg';
import BlueCheck from './assets/BlueCheck.svg';

const ShareResults = () => {
  return (
    <PageBase buttonBack backLink="/ecosystem">
      <div className="overflow-y-auto mb-16">
        <div className="py-8">
          <div className="flex pb-8 px-6">
            <img src={DropBlue} alt="DropBlue" className="w-6 mr-5" />
            <div className="text-celestial text-4xl font-bold">Ferritin</div>
          </div>
          <div className="text-celestial text-sm font-medium pl-6 pr-20 pb-8">
            Ferritin is a blood protein that contains iron. A ferritin test
            helps your doctor understand how much iron your body stores. If a
            ferritin test reveals that your blood ferritin level is lower than
            normal, it indicates your body iron stores are low and you have iron
            deficiency.
          </div>
          <div className="bg-gray rounded-t-3xl py-10 px-8">
            <div className="text-xl font-bold pb-4">Results</div>
            <div className="text-sm font-medium pb-3">
              Your ferritin levels are low which might indicate anemia.
            </div>
            <div className="pb-12">
              <div className="flex py-3.5 border-t-2 border-b-2 border-dark-gray">
                <img src={BlueCheck} alt="Arrow" className="mr-3" />
                <div className="text-sm font-medium text-celestial">
                  Eat more leafy greens and meats
                </div>
              </div>
              <div className="flex py-3.5 border-b-2 border-dark-gray">
                <img src={BlueCheck} alt="Arrow" className="mr-3" />
                <div className="text-sm font-medium text-celestial">
                  Avoid aerobic exercises
                </div>
              </div>
              <div className="flex py-3.5 border-b-2 border-dark-gray">
                <img src={BlueCheck} alt="Arrow" className="mr-3" />
                <div className="text-sm font-medium text-celestial">
                  Make more tests
                </div>
              </div>
              <div className="flex py-3.5 border-b-2 border-dark-gray">
                <img src={BlueCheck} alt="Arrow" className="mr-3" />
                <div className="text-sm font-medium text-celestial">
                  Schedule an appointment with the doctor
                </div>
              </div>
            </div>
            <button
              className="w-full bg-celestial text-white text-sm font-bold rounded-3xl h-12"
              type="button"
              onClick={() => {}}
            >
              Create to do
            </button>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default ShareResults;
