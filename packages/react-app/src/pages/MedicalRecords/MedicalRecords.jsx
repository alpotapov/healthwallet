import React from 'react';

import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import CardTest from './components/CardTest';

import testUidRepository from '../../repository/testUidRepository';

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
      uid: 'ABC-123-abc',
    },
    {
      icon: IconRed,
      date: '20.10.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 120,
      uid: 'HGV-456-abc',
    },
    {
      icon: IconRed,
      date: '01.08.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 99,
      uid: 'FGD-643-abc',
    },
    {
      icon: IconRed,
      date: '01.01.2022',
      typeTest: 'Ferritin',
      status: 'Finished',
      testResult: 99,
      uid: 'PYF-135-abc',
    },
  ];

  React.useEffect(() => {
    const testUids = testUidRepository.getTestUids();
    console.log({ testUids });
  }, []);

  // const forTestData = [];
  const AddTestButtonLink = () => (
    <Link
      to="/scan-test"
      className="flex items-center w-full bg-blueberry h-14 px-5 rounded-3xl"
    >
      <div className="flex grow">
        <img src={Plus} alt="Plus" />
        <div className="text-sm text-white font-bold ml-28">Add test</div>
      </div>
    </Link>
  );
  return (
    <PageBase footer>
      {forTestData.length === 0 ? (
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
          <AddTestButtonLink />
        </div>
      ) : (
        <div className="flex flex-col justify-start flex-grow">
          <div className="w-full px-6 py-6">
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
            <AddTestButtonLink />
          </div>
          <CardTest testData={forTestData} />
        </div>
      )}
    </PageBase>
  );
};

export default MedicalRecords;
