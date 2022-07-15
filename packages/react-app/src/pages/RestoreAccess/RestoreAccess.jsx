import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';

const RestoreAccess = () => {
  return (
    <PageBase>
      <div className="px-4">
        <div className="flex items-center py-10">
          <Link
            to="/preservation"
            className="p-2 bg-lettuce uppercase text-white font-bold text-center"
          >
            Back
          </Link>
          <div className="pl-20">Restore Access</div>
        </div>
        <div className="text-center">
          Personally ask your Guardians to transfer Data Access Token to your
          new address
        </div>
        <div className="flex items-center justify-center">
          <input
            className="border p-2 mt-8"
            value="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
            disabled
          />
        </div>
        <div className="w-full pt-8">
          <div className="text-center">Copy address</div>
        </div>
      </div>
    </PageBase>
  );
};

export default RestoreAccess;
