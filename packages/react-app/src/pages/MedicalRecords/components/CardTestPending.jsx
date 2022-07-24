import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.css';
import IconGray from '../assets/IconGray.svg';

const CardTestPending = ({ cardData }) => {
  return (
    <div key={cardData.uid} className={css.card_processed}>
      <div className="flex">
        <div className="flex flex-col items-center justify-center pr-5 pt-5 pb-3.5 border-r border-silver">
          <img src={IconGray} alt="paramTest.icon" />
          <div className="text-dark-gray font-bold text-xl pt-3.5">
            {cardData.testType}
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto pt-5 pb-3.5 pl-3">
          <div className="text-dark-gray font-medium">{cardData.date}</div>
          <div className="text-2xl pt-8 text-silver-dark">
            {cardData.status}
          </div>
        </div>
      </div>
    </div>
  );
};

CardTestPending.propTypes = {
  cardData: PropTypes.shape().isRequired,
};

export default CardTestPending;
