import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import GuardiansCard from './components/GuardiansCard';

import Shield from './assets/Shield.png';
import Plus from './assets/Plus.svg';

const Guardians = () => {
  const forTestData = [
    {
      id: 0,
      name: 'Mather',
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    },
    {
      id: 1,
      name: 'Father',
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    },
    {
      id: 2,
      name: 'Sister',
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    },
    {
      id: 3,
      name: 'Brother',
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    },
  ];

  // const forTestData = [];
  return (
    <PageBase buttonBack backLink="/">
      {forTestData <= 0 ? (
        <div>
          <div className="w-full px-6">
            <div className="flex justify-between items-start pb-8 mt-5">
              <img src={Shield} alt="Shield" className="-ml-6" />
              <div>
                <div className="text-3xl font-bold text-lilac pb-8">
                  Guardians
                </div>
                <div className="text-sm font-medium text-lilac">
                  Here you can appoint your HealthWallet guardians. Those should
                  be the people you trust - your family members or close
                  friends. If you lose your device or your private key -
                  guardians will be able to restore access to your medical
                  history.
                </div>
              </div>
            </div>
            <div className="flex items-center w-full bg-blueberry h-14 px-5 rounded-3xl mt-6 mb-5">
              <Link to="/manage-guardians/add-guardians" className="flex">
                <img src={Plus} alt="Plus" />
                <div className="text-sm text-white font-bold ml-24">
                  Add Guardian
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-gray rounded-t-3xl py-48 px-40 text-sm font-medium text-silver-dark">
            Empty
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full px-6">
            <div className="flex justify-between items-start pb-8 mt-5">
              <img src={Shield} alt="Shield" className="-ml-6" />
              <div>
                <div className="text-3xl font-bold text-lilac pb-8">
                  Guardians
                </div>
                <div className="text-sm font-medium text-lilac">
                  If you lose your device or your private key - guardians will
                  be able to restore access to your medical history.
                </div>
              </div>
            </div>
            <div className="flex items-center w-full bg-blueberry h-14 px-5 rounded-3xl mt-6 mb-5">
              <Link to="/manage-guardians/add-guardians" className="flex">
                <img src={Plus} alt="Plus" />
                <div className="text-sm text-white font-bold ml-24">
                  Add Guardian
                </div>
              </Link>
            </div>
          </div>
          <GuardiansCard guardiansData={forTestData} />
        </div>
      )}
    </PageBase>
  );
};

export default Guardians;
