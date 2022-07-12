import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import Scanner from './components/Scanner';

const AddTest = () => {
  return (
    <PageBase>
      <div className="flex justify-between items-center pb-6">
        <Link
          to="/"
          className="p-2 bg-lettuce uppercase text-white font-bold text-center"
        >
          Back
        </Link>
        <div className="p-2">AddTest</div>
      </div>
      <Scanner />
      <div className="py-8">
        <div className="flex pb-1">
          <div className="w-20">Type Test:</div>
          <div>Ferritin</div>
        </div>
        <div className="flex pb-1">
          <div className="w-20">Test Date:</div>
          <div>21.07.2022</div>
        </div>
        <div className="flex pb-1">
          <div className="w-20">Test UID:</div>
          <div>2342173y412h3b</div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {}}
        className="w-full bg-lettuce uppercase text-white font-bold text-center p-2"
      >
        Add to HealthWallet
      </button>
    </PageBase>
  );
};

export default AddTest;
