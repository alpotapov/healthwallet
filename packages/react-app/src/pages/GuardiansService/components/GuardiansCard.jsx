import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './styles.module.css';

import LockRed from '../assets/LockRed.svg';
import LockGray from '../assets/LockGray.png';
import Rename from '../assets/Rename.svg';
import Arrows from '../assets/Arrows.svg';

const GuardiansCard = ({ guardiansCard }) => {
  return (
    <div className="bg-gray px-6 pt-20 pb-10 rounded-t-3xl">
      {guardiansCard.map((guardData) => {
        return (
          <div className="flex gap-8 mb-16" key={guardData.id}>
            <div
              className={`${css.card_shadow} flex items-center justify-center rounded-3xl bg-white w-28 h-28`}
            >
              <img
                src={guardData.status === 'verified' ? LockRed : LockGray}
                alt="Status"
              />
            </div>
            <div className="w-3/5 flex flex-col justify-around">
              <div className="flex justify-between items-center">
                <div className="text-silver font-bold text-lg">
                  {guardData.name}
                </div>
                <button type="button" onClick={() => {}}>
                  <img src={Rename} alt="Rename" />
                </button>
              </div>
              {guardData.status === 'verified' ? (
                <div className="font-medium text-dark-gray text-sm">
                  {guardData.address.length < 45
                    ? `${guardData.address.substr(
                        0,
                        6
                      )}...${guardData.address.substr(
                        guardData.address.length - 4,
                        guardData.address.length
                      )}`
                    : guardData.address}
                </div>
              ) : (
                <div className="flex flex-col text-sm">
                  <div className="text-dark-gray">
                    {guardData.address.length < 45
                      ? `${guardData.address.substr(
                          0,
                          6
                        )}...${guardData.address.substr(
                          guardData.address.length - 4,
                          guardData.address.length
                        )}`
                      : guardData.address}
                  </div>
                  <img src={Arrows} alt="Arrows" className="w-3 ml-10" />
                  <div className="text-raspberry">
                    {guardData.newAddress.length < 45
                      ? `${guardData.newAddress.substr(
                          0,
                          6
                        )}...${guardData.newAddress.substr(
                          guardData.newAddress.length - 4,
                          guardData.newAddress.length
                        )}`
                      : guardData.newAddress}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center bg-raspberry rounded-3xl h-8 text-white font-bold text-sm">
                <Link to="/guardian/transfer-token">Transfer token</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

GuardiansCard.propTypes = {
  guardiansCard: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GuardiansCard;
