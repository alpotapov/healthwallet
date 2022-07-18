import React from 'react';
import css from './style.module.css';
import RestoreAccess from './RestoreAccess';

import KeyRed from '../assets/KeyRed.svg';
import CloudRed from '../assets/CloudRed.svg';
import ShieldRed from '../assets/ShieldRed.svg';

const NeedAuthorization = () => {
  const [isRestoreAccess, setIsRestoreAccess] = React.useState(false);

  return (
    <div className="bg-gray pt-20 pb-6 rounded-t-3xl overflow-x-hidden">
      <div className="flex items-center pb-16 px-6">
        <div
          className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
        >
          <img src={KeyRed} alt="KeyRed" />
        </div>
        <div className="text-sm">
          <div className="text-dark-gray font-medium pb-3">
            You have no access token
          </div>
          <div className="bg-raspberry h-8 text-white rounded-3xl font-bold flex items-center justify-center mb-3">
            <button
              type="button"
              onClick={() => {
                alert('открылся метамаск');
              }}
            >
              Create Access Token
            </button>
          </div>
          <div
            className={`${
              isRestoreAccess
                ? 'bg-raspberry border-none text-white'
                : 'bg-white border border-raspberry text-raspberry'
            } h-8 rounded-3xl font-bold flex items-center justify-center`}
          >
            <button
              type="button"
              onClick={() => {
                setIsRestoreAccess(!isRestoreAccess);
              }}
            >
              Restore Access
            </button>
          </div>
        </div>
      </div>
      {isRestoreAccess ? <RestoreAccess /> : ''}
      <div className="flex items-center pb-16 px-6">
        <div
          className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
        >
          <img src={CloudRed} alt="CloudRed" />
        </div>
        <div className="text-sm text-dark-gray font-medium w-3/5">
          You data is stored locally. There is on backup!
        </div>
      </div>
      <div className="flex items-center px-6">
        <div
          className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
        >
          <img src={ShieldRed} alt="ShieldRed" />
        </div>
        <div className="text-sm text-dark-gray font-medium w-3/5">
          You have to generate Data Access Token before assigning Guardians.
        </div>
      </div>
    </div>
  );
};

export default NeedAuthorization;
