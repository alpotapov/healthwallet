import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.css';

import DropGrey from '../assets/DropGrey.svg';
import LockGrey from '../assets/LockGrey.svg';

const UnreleasedCard = ({ cardData }) => {
  return (
    <div className="pt-14">
      <div className="pb-12 text-silver-dark text-lg">
        Add more data to HealthWallet to unlock
      </div>
      {cardData.map((cardInform) => {
        return cardInform.status === 'unreleased' ? (
          <div
            className={`${css.card_shadow} bg-white rounded-3xl mb-12 py-6 px-14`}
          >
            <div className="flex items-center justify-center gap-2.5">
              <img src={DropGrey} alt="DropGrey" />
              <div className="capitalize text-silver font-bold text-xl">
                {cardInform.name}
              </div>
            </div>
            <div className="mt-8">
              <img src={LockGrey} alt="LockGrey" className="mx-auto" />
            </div>
          </div>
        ) : (
          ''
        );
      })}
    </div>
  );
};

UnreleasedCard.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default UnreleasedCard;
