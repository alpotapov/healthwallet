import React from 'react';
import PageBase from '../PageBase/PageBase';

import DropBlue from './assets/DropBlue.svg';
import Arrow from './assets/Arrow.svg';

const ShareRecords = () => {
  return (
    <div className="mockup-phone">
      <div className="camera" />
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <PageBase buttonBack backLink="/ecosystem">
            <div className="overflow-y-auto mb-16">
              <div className="px-6 py-8">
                <div className="flex pb-8">
                  <img src={DropBlue} alt="DropBlue" className="w-6 mr-5" />
                  <div className="text-celestial text-4xl font-bold">
                    Ferritin
                  </div>
                </div>
                <div className="text-celestial text-sm font-medium pr-14 pb-24">
                  Ferritin is a blood protein that contains iron. A ferritin
                  test helps your doctor understand how much iron your body
                  stores. If a ferritin test reveals that your blood ferritin
                  level is lower than normal, it indicates your body iron stores
                  are low and you have iron deficiency.
                </div>
                <div className="pb-12">
                  <div className="flex pb-5">
                    <img src={Arrow} alt="Arrow" className="mr-3" />
                    <div className="text-sm font-medium">
                      How should you adjust your diet
                    </div>
                  </div>
                  <div className="flex pb-5">
                    <img src={Arrow} alt="Arrow" className="mr-3" />
                    <div className="text-sm font-medium">
                      What kind of sport activities should you avoid
                    </div>
                  </div>
                  <div className="flex pb-5">
                    <img src={Arrow} alt="Arrow" className="mr-3" />
                    <div className="text-sm font-medium">
                      Which other tests should you do
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium pb-20">
                  XYZ Analytics will use this data exclusively to deliver
                  insights to you
                </div>
                <button
                  className="w-full bg-celestial text-white text-sm font-bold rounded-3xl h-12"
                  type="button"
                  onClick={() => {}}
                >
                  Share Records
                </button>
              </div>
            </div>
          </PageBase>
        </div>
      </div>
    </div>
  );
};

export default ShareRecords;
