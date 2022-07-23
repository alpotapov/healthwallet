import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './styles.module.css';

import DropBlue from '../assets/DropBlue.svg';
import DropWhite from '../assets/DropWhite.svg';

const PassedCard = ({ cardData }) => {
  return (
    <div>
      <div className="pb-6 text-silver-dark text-lg">Insights</div>
      {cardData.map((cardInform) => {
        return cardInform.status !== 'unreleased' ? (
          <div
            className={`${
              cardInform.status === 'passed' ? css.card_passed : ''
            }${cardInform.status === 'analytics' ? css.card_analytics : ''} ${
              cardInform.status === 'toDo' ? css.card_toDo : ''
            }`}
            key={cardInform.id}
          >
            <div className="flex items-center justify-center gap-2.5">
              <img
                src={cardInform.status === 'toDo' ? DropWhite : DropBlue}
                alt="DropGrey"
              />
              <div
                className={`capitalize ${
                  cardInform.status === 'toDo' ? 'text-white' : 'text-celestial'
                } font-bold text-xl`}
              >
                {cardInform.name}
              </div>
            </div>
            {cardInform.status === 'passed' ? (
              <div className="mt-8 flex items-center justify-center w-full bg-celestial h-8 rounded-3xl text-white font-bold text-sm">
                <Link to="/share-records">Share Records</Link>
              </div>
            ) : (
              ''
            )}
            {cardInform.status === 'analytics' ? (
              <div className="mt-8">
                <div className="text-xl text-center font-medium text-silver-dark">
                  Waiting…
                </div>
                <div className="text-sm text-center font-medium text-silver-dark">
                  XYZ Analytics is now performing analysis of your records.
                </div>
              </div>
            ) : (
              ''
            )}
            {cardInform.status === 'toDo' ? (
              <div className="mt-8 flex items-center justify-center w-full bg-white h-8 rounded-3xl text-celestial font-bold text-sm">
                <Link to="/show-results">Show results</Link>
              </div>
            ) : (
              ''
            )}
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
