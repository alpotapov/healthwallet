import React from 'react';
import { useHistory, useParams } from 'react-router';
import PageBase from '../PageBase/PageBase';

import medicalRecordRepository from '../../repository/medicalRecordRepository';

import AddImage from './assets/AddImage.png';
import IconWhite from './assets/IconWhite.svg';
import Plus from './assets/Plus.svg';

const ScanResult = () => {
  const { uid } = useParams();
  const history = useHistory();
  const pushUid = medicalRecordRepository.useStore((state) => state.pushUid);
  const onAdd = () => {
    pushUid(uid);
    history.push('/');
  };
  return (
    <PageBase buttonBack backLink="/scan-test">
      <div className="relative z-10 flex pt-6 -mb-16">
        <img className="w-52" src={AddImage} alt="addImage" />
        <div className="font-bold text-3xl w-28 mt-8">
          <span className="text-lilac">Add</span> Test
        </div>
      </div>
      <div className="bg-lilac rounded-t-3xl pt-8 px-5 flex-grow flex flex-col justify-between">
        <div className="py-14">
          <div className="flex items-center pb-10">
            <div className="w-32 text-center text-lilac-dark text-sm font-medium">
              Test type:
            </div>
            <div className="flex items-center">
              <img src={IconWhite} alt="iconWhite" />
              <div className="text-xl font-bold pl-2.5 text-white">
                Ferritin
              </div>
            </div>
          </div>
          <div className="flex items-center pb-10">
            <div className="w-32 text-center text-lilac-dark text-sm font-medium">
              Test Date:
            </div>
            <div className="text-xl font-medium text-white">29.10.2022</div>
          </div>
          <div className="flex items-center">
            <div className="w-32 text-center text-lilac-dark text-sm font-medium">
              Test UID:
            </div>
            <div className="text-xl font-medium text-white">21345278saf</div>
          </div>
        </div>
        <div className="pb-12">
          <button
            type="button"
            onClick={onAdd}
            className="flex items-center w-full border border-white bg-lilac-blond rounded-3xl h-14 pl-5"
          >
            <img src={Plus} alt="plus" />
            <div className="ml-14 text-sm font-bold text-lilac-dark">
              Add to HealthWallet
            </div>
          </button>
        </div>
      </div>
    </PageBase>
  );
};

export default ScanResult;
