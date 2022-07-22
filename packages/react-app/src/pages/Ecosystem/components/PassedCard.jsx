import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './styles.module.css';

import DropBlue from '../assets/DropBlue.svg';

const PassedCard = ({ cardData }) => {
  return (
    <div>
      <div className="pb-6 text-silver-dark text-lg">Insights</div>
      {cardData.map((cardInform) => {
        return cardInform.status === 'passed' ? (
          <div className={`${css.card_shadow} bg-white rounded-3xl mb-12 p-6`}>
            <div className="flex items-center justify-center gap-2.5">
              <img src={DropBlue} alt="DropGrey" />
              <div className="capitalize text-celestial font-bold text-xl">
                {cardInform.name}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center w-full bg-celestial h-8 rounded-3xl text-white font-bold text-sm">
              <Link to="/">Share Records</Link>
            </div>
          </div>
        ) : (
          ''
        );
      })}
    </div>
  );
};

PassedCard.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default PassedCard;
