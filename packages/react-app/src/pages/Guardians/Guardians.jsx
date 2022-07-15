import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';

const Guardians = () => {
  return (
    <PageBase>
      <div className="flex justify-between items-center pb-6">
        <Link
          to="/"
          className="p-2 bg-lettuce uppercase text-white font-bold text-center"
        >
          Back
        </Link>
        <div className="p-2">Guardians</div>
      </div>
      <div className="px-2 pb-8 text-center">
        Here you can appoint your HealthWallet guardians. Those should be the
        people you trust - your family members or close friends. If you lose
        your device or your private key - guardians will be able to restore
        access to your medical history.
      </div>
      <div className="flex items-center pb-3">
        <div className="flex justify-center items-center rounded-full bg-gray w-12 h-12">
          <div className="font-bold">M</div>
        </div>
        <div className="ml-5 mr-auto">Mother</div>
        <div className="font-bold text-lettuce text-5xl">+</div>
      </div>
      <div className="flex items-center pb-3">
        <div className="flex justify-center items-center rounded-full bg-gray w-12 h-12">
          <div className="font-bold">F</div>
        </div>
        <div className="ml-5 mr-auto">Father</div>
        <div className="font-bold text-lettuce text-5xl">+</div>
      </div>
      <div className="flex items-center pb-3">
        <div className="flex justify-center items-center rounded-full bg-gray w-12 h-12">
          <div className="font-bold">B</div>
        </div>
        <div className="ml-5 mr-auto">Best Friend</div>
        <div className="font-bold text-lettuce text-5xl">+</div>
      </div>
      <div className="flex items-center justify-center w-full border border-white bg-lilac-blond h-14 px-5 rounded-3xl mt-6">
        <Link to="/guardians/add-guardians" className="flex">
          <div className="text-sm text-lilac-dark font-bold">Add Guardians</div>
        </Link>
      </div>
    </PageBase>
  );
};

export default Guardians;
