import React from 'react';
import PageBase from '../PageBase/PageBase';

import Shield from './assets/Shield.png';
import Plus from './assets/Plus.svg';
import css from './components/style.module.css';

const AddGuardians = () => {
  return (
    <PageBase buttonBack backLink="/manage-guardians">
      <div className="relative z-10 flex items-center mt-5 -mb-10">
        <img src={Shield} alt="Shield" />
        <div className="flex flex-col text-3xl font-bold mb-10">
          <span className="text-dark-gray">Add</span>Guardians
        </div>
      </div>
      <div className="bg-gray rounded-t-3xl pt-20 pb-40 px-6">
        <div
          className={`${css.form_shadow} rounded-3xl bg-white pt-10 pb-6 px-5`}
        >
          <div>
            <input
              className="w-full border border-dark-gray rounded-2xl h-14 mb-8 px-3.5 text-lilac text-sm"
              placeholder="Guardian name"
            />
          </div>
          <div>
            <input
              className="w-full border border-dark-gray rounded-2xl h-14 mb-8 px-3.5 text-lilac text-sm"
              placeholder="Guardian address"
            />
          </div>
          <button
            type="button"
            onClick={() => {}}
            className="flex items-center w-full bg-lilac rounded-2xl h-14 pl-5"
          >
            <img src={Plus} alt="plus" />
            <div className="ml-14 text-sm font-bold text-white">
              Add Guardian
            </div>
          </button>
        </div>
      </div>
    </PageBase>
  );
};

export default AddGuardians;
