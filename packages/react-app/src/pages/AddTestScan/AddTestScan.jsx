import React from 'react';
import PageBase from '../PageBase/PageBase';

import AddImage from './assets/AddImage.png';
import ScanIcon from './assets/ScanIcon.svg';

const AddTestScan = () => {
  return (
    <PageBase buttonBack backLink="/add-test">
      <div className="relative z-10 flex pt-6 -mb-16">
        <img className="w-52" src={AddImage} alt="addImage" />
        <div className="font-bold text-3xl w-28 mt-8">
          <span className="text-lilac">Add</span> Test
        </div>
      </div>
      <div className="px-5">
        <div className="w-full h-80 bg-black rounded-3xl opacity-30 mb-24" />
        <div className="pb-20">
          <button
            type="button"
            onClick={() => {}}
            className="flex items-center w-full bg-lettuce rounded-3xl h-14 pl-5"
          >
            <img src={ScanIcon} alt="ScanIcon" />
            <div className="ml-32 text-sm font-bold text-white">Scan</div>
          </button>
        </div>
      </div>
    </PageBase>
  );
};

export default AddTestScan;
