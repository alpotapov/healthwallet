import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';

const Preservation = () => {
  // const forTestKey = [
  //   { key: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', guardians: 0 },
  // ];
  const forTestKey = [];

  return (
    <PageBase>
      <div className="py-10 text-center">Data Preservation</div>
      {forTestKey.length <= 0 ? (
        <div className="px-4">
          <div className="flex items-center pb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-raspberry text-white mr-4">
              Key
            </div>
            <div className="text-sm w-64">
              <div className="pb-1"> You have no access token</div>
              <div className="text-raspberry pb-1">
                <button
                  type="button"
                  onClick={() => {
                    alert('открылся метамаск');
                  }}
                >
                  Create Access Token
                </button>
              </div>
              <div className="text-raspberry pb-1">
                <Link to="/preservation/restore-access">Restore Access</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center pb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-raspberry text-white mr-4">
              Cloud
            </div>
            <div className="text-sm w-64">
              You data is stored locally. There is on backup!
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-raspberry text-white mr-4">
              Guard
            </div>
            <div className="text-sm w-64">
              You have to generate Data Access Token before assigning Guardians.
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4">
          <div className="flex items-center pb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-lettuce text-white mr-4">
              Key
            </div>
            <div className="text-sm w-64">
              <div className="pb-1">
                Data Access token is tied to your account
              </div>
              <div className="pb-1 truncate w-40">{forTestKey[0].key}</div>
              <div className="text-raspberry pb-1">Transfer Token</div>
            </div>
          </div>
          <div className="flex items-center pb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-lettuce text-white mr-4">
              Cloud
            </div>
            <div className="text-sm w-64">
              Data backup is encrypted and stored in IPFS
            </div>
          </div>
          {forTestKey[0].guardians > 0 ? (
            <div className="flex items-center">
              <div className="flex items-center justify-center w-20 h-20 bg-lettuce text-white mr-4">
                Guard
              </div>
              <div className="text-sm">
                <div className="w-64">
                  {forTestKey[0].guardians} Guardians protect your Data Access
                  Token
                </div>
                <div className="text-raspberry pb-1">
                  <Link to="/manage-guardians">Manage Guardians</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="flex items-center justify-center w-20 h-20 bg-raspberry text-white mr-4">
                Guard
              </div>
              <div className="text-sm">
                <div className="w-64 pb-1">
                  You have not assigned any Guardians
                </div>
                <div className="text-raspberry">
                  <Link to="/manage-guardians">Access Guardian</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </PageBase>
  );
};

export default Preservation;
