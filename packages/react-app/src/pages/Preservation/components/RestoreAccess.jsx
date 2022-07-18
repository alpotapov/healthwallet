import React from 'react';
import css from './style.module.css';
import Restore from '../assets/Restore.svg';
import Copy from '../assets/Copy.svg';

const RestoreAccess = () => {
  return (
    <div className={`${css.card_shadow_inward} py-10 px-10`}>
      <div className="flex items-center justify-between gap-6 pb-8">
        <img src={Restore} alt="Restore" />
        <div className="text-dark-gray font-medium text-sm">
          Personally ask your Guardians to transfer Data Access Token to your
          your new address
        </div>
      </div>
      <div className="font-medium text-sm text-raspberry break-words pb-8">
        0xf39Fd6e51aad88F6F4ce6aB8827279ccffFb92266
      </div>
      <button
        className="w-full bg-raspberry h-14 text-white rounded-xl font-bold text-sm flex items-center px-4"
        type="button"
        onClick={() => {}}
      >
        <img src={Copy} alt="Copy" />
        <div className="ml-24">Copy address</div>
      </button>
    </div>
  );
};

export default RestoreAccess;
