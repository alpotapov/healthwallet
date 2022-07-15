import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';

const AddGuardians = () => {
  return (
    <PageBase>
      <div className="px-4">
        <div className="flex items-center py-10">
          <Link
            to="/guardians"
            className="p-2 bg-lettuce uppercase text-white font-bold text-center"
          >
            Back
          </Link>
          <div className="pl-20">Add Guardians</div>
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <div>Guardian Name</div>
          <input className="border p-2 mt-4" placeholder="Name New Guardian" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Guardian Address</div>
          <input
            className="border p-2 mt-4"
            placeholder="Address New Guardian"
          />
        </div>
        <button
          type="button"
          onClick={() => {}}
          className="w-full bg-lettuce uppercase text-white font-bold text-center p-2 mt-8"
        >
          Add Guardians
        </button>
      </div>
    </PageBase>
  );
};

export default AddGuardians;
