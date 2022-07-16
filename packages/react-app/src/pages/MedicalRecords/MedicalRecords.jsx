import React from 'react';

import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import CardTest from './components/CardTest';

import MedicalRecImage from './assets/MedicalRecord.png';
import Plus from './assets/Plus.svg';
import IconRed from './assets/IconRed.svg';
import IconGray from './assets/IconGray.svg';

const MedicalRecords = () => {
  const forTestData = [
    {
      icon: IconGray,
      date: '29.10.2022',
      typeTest: 'Ferritin',
      status: 'Processed',
    },
    {
      icon: IconRed,
      date: '20.10.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 120,
    },
    {
      icon: IconRed,
      date: '01.08.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 99,
    },
    {
      icon: IconRed,
      date: '01.01.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 99,
    },
  ];

  // const forTestData = [];
  return (
    <PageBase footer>
      {forTestData.length <= 0 ? (
        <div className="w-full px-6">
          <img
            src={MedicalRecImage}
            alt="MedicalRecImage"
            className="w-44 ml-auto pt-20"
          />
          <div className="-mt-10 pb-32">
            <div className="max-w-xs text-5xl font-bold">
              <span className="text-raspberry"> Your Medical </span> Records
            </div>
          </div>
          <div className="flex items-center w-full bg-blueberry h-14 mb-44 px-5 rounded-3xl">
            <Link to="/add-test" className="flex">
              <img src={Plus} alt="Plus" />
              <div className="text-sm text-white font-bold ml-28">Add test</div>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full px-6">
            <div className="flex justify-between items-center mt-5">
              <img
                src={MedicalRecImage}
                alt="MedicalRecImage"
                className="w-32 h-40"
              />
              <div className="w-40">
                <div className="max-w-xs text-4xl font-bold">
                  <span className="text-raspberry"> Your Medical </span> Records
                </div>
              </div>
            </div>
            <div className="flex items-center w-full bg-blueberry h-14 px-5 rounded-3xl mt-6 mb-5">
              <Link to="/add-test" className="flex">
                <img src={Plus} alt="Plus" />
                <div className="text-sm text-white font-bold ml-28">
                  Add test
                </div>
              </Link>
            </div>
          </div>
          <CardTest testData={forTestData} />
        </div>
      )}
    </PageBase>
  );
};

export default MedicalRecords;
