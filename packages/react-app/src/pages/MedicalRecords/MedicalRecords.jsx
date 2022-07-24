import React from 'react';

import { Link } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import PageBase from '../PageBase/PageBase';
import MedicalRecordsList from './components/MedicalRecordsList';
// eslint-disable-next-line no-unused-vars

import resultRegistryQueries from '../../domain/resultRegistryQueries';
import medicalRecordRepository from '../../repository/medicalRecordRepository';

import MedicalRecImage from './assets/MedicalRecord.png';
import Plus from './assets/Plus.svg';

const MedicalRecords = () => {
  const { library } = useEthers();
  const [fetching, setFetching] = React.useState(false);
  const uids = medicalRecordRepository.useStore((state) => state.uids);
  const medicalRecords = medicalRecordRepository.useStore(
    (state) => state.medicalRecords
  );
  const medicalRecordsList = uids
    .filter((uid) => uid in medicalRecords)
    .map((uid) => medicalRecords[uid])
    .reverse();

  React.useEffect(() => {
    if (!library) return;
    if (!fetching) {
      setTimeout(() => {
        console.log('fetching');
        setFetching(true);
        resultRegistryQueries
          .checkPendingResults(library)
          .then(() => console.log('done fetching') || setFetching(false));
      }, 3000);
    }
  }, [library, fetching]);

  React.useEffect(() => {
    console.log({ medicalRecords });
  }, [medicalRecords]);

  const AddTestButtonLink = () => (
    <Link
      to="/scan-test"
      className="flex items-center w-full bg-blueberry h-14 px-5 rounded-3xl mt-8 mb-5"
    >
      <div className="flex grow">
        <img src={Plus} alt="Plus" />
        <div className="text-sm text-white font-bold ml-20">Add test</div>
      </div>
    </Link>
  );
  return (
    <PageBase footer>
      <div className="overflow-y-auto mb-16">
        {medicalRecordsList.length === 0 ? (
          <div className="w-full px-6 pb-32">
            <img
              src={MedicalRecImage}
              alt="MedicalRecImage"
              className="w-44 ml-auto pt-20"
            />
            <div className="-mt-10">
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
                    <span className="text-raspberry"> Your Medical </span>{' '}
                    Records
                  </div>
                </div>
              </div>
              <AddTestButtonLink />
            </div>
            <MedicalRecordsList testData={medicalRecordsList} />
          </div>
        )}
      </div>
    </PageBase>
  );
};

export default MedicalRecords;
