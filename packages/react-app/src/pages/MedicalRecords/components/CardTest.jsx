import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.css';
import IconRed from '../assets/IconRed.svg';
import Critical from '../assets/Critical.svg';
import Normal from '../assets/Normal.svg';

const CardTest = ({ cardData }) => {
  return (
    <div className={css.card} key={cardData.uid}>
      <div className="flex">
        <div className="flex flex-col items-center justify-center pr-5 pt-5 pb-3.5 border-r border-silver">
          <img src={IconRed} alt="paramTest.icon" />
          <div className="text-raspberry font-bold text-xl pt-3.5">
            {cardData.typeTest}
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto pt-5 pb-3.5">
          <div className="font-medium">{cardData.date}</div>
          <div
            className={`${
              cardData.testResult > 99 ? 'text-raspberry' : ''
            } text-4xl font-bold py-5`}
          >
            {cardData.testResult}
            <span className="text-black text-xl font-medium pl-2">ug/l</span>
          </div>
          {cardData.testResult > 99 ? (
            <div className="flex items-center">
              <img src={Critical} alt="Critical" className="w-5 mr-2.5" />
              <div className="text-xs text-raspberry">Critical</div>
            </div>
          ) : (
            <div className="flex items-center">
              <img src={Normal} alt="Normal" className="w-5 mr-2.5" />
              <div className="text-xs text-lettuce">Within Normal Limits</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CardTest.propTypes = {
  cardData: PropTypes.shape().isRequired,
};

export default CardTest;
