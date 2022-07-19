import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './style.module.css';
import KeyGreen from '../assets/KeyGreen.svg';
import CloudGreen from '../assets/CloudGreen.svg';
import ShieldGreen from '../assets/ShieldGreen.svg';
import ShieldRed from '../assets/ShieldRed.svg';

const Authorized = ({ userInfo }) => {
  return (
    <div className="bg-gray px-6 pt-20 pb-6 rounded-t-3xl">
      <div className="flex items-center pb-16">
        <div
          className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
        >
          <img src={KeyGreen} alt="KeyRed" />
        </div>
        <div className="text-sm w-3/5">
          <div className="text-dark-gray font-medium pb-3">
            Data Access token is tied to your account
          </div>
          <div className="text-lettuce font-medium mb-3">
            {userInfo[0].key.length < 45
              ? `${userInfo[0].key.substr(0, 6)}...${userInfo[0].key.substr(
                  userInfo[0].key.length - 4,
                  userInfo[0].key.length
                )}`
              : userInfo[0].key}
          </div>
          <div className="bg-lettuce h-8 text-white rounded-3xl font-bold flex items-center justify-center mt-4">
            <Link to="/manage-guardians">Transfer token</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-16">
        <div
          className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
        >
          <img src={CloudGreen} alt="CloudRed" />
        </div>
        <div className="text-sm text-dark-gray font-medium w-3/5">
          Data backup is encrypted and stored in IPFS
        </div>
      </div>
      {userInfo[0].guardians > 0 ? (
        <div className="flex items-center">
          <div
            className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
          >
            <img src={ShieldGreen} alt="ShieldRed" />
          </div>
          <div className="w-3/5 text-sm">
            <div className="flex flex-col text-dark-gray font-medium">
              <span className="text-lettuce">
                {userInfo[0].guardians} Guardians
              </span>
              protect your Data Access Token
            </div>
            <div className="bg-lettuce h-8 text-white rounded-3xl font-bold flex items-center justify-center mt-4">
              <Link to="/manage-guardians">Manage Guardians</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div
            className={`${css.card_shadow} bg-white flex items-center justify-center rounded-3xl w-28 h-28 mr-8`}
          >
            <img src={ShieldRed} alt="ShieldRed" />
          </div>
          <div className="w-3/5 text-sm">
            <div className="flex flex-col text-dark-gray font-medium">
              You have not assigned any Guardians
            </div>
            <div className="bg-raspberry h-8 text-white rounded-3xl font-bold flex items-center justify-center mt-4">
              <Link to="/manage-guardians/add-guardians">Assign Guardian</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Authorized.propTypes = {
  userInfo: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Authorized;
