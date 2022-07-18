import React from 'react';
import PropTypes from 'prop-types';

import Remove from '../assets/Remove.svg';
import Guardian from '../assets/Guardian.png';
import css from './styles.module.css';

const GuardiansCard = ({ guardiansData }) => {
  if (!guardiansData) return null;

  return (
    <div className="bg-gray px-6 py-11 rounded-t-3xl">
      {guardiansData.map((paramGuardian) => {
        return (
          <div className={css.card} key={paramGuardian.id}>
            <div className="flex justify-end pb-1">
              <button type="button" onClick={() => {}}>
                <img src={Remove} alt="Remove" />
              </button>
            </div>
            <div className="flex items-center">
              <div className="pr-6">
                <img src={Guardian} alt="Guardian" />
              </div>
              <div>
                <div className="text-lilac pb-5 font-bold text-xl">
                  {paramGuardian.name}
                </div>
                <div className="text-lilac font-medium text-sm">
                  {paramGuardian.address.length < 45
                    ? `${paramGuardian.address.substr(
                        0,
                        6
                      )}...${paramGuardian.address.substr(
                        paramGuardian.address.length - 4,
                        paramGuardian.address.length
                      )}`
                    : paramGuardian.address}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

GuardiansCard.propTypes = {
  guardiansData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GuardiansCard;
