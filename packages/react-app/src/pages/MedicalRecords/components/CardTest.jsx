import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.css';

import Normal from '../assets/Normal.svg';
import Critical from '../assets/Critical.svg';

const CardTest = ({ testData }) => {
  if (!testData) return null;

  return (
    <div className="bg-gray px-6 py-11 rounded-t-3xl">
      {testData.map((paramTest) => {
        return paramTest.status === 'Processed' ? (
          <div className={css.card_processed} key={paramTest.date}>
            <div className="flex">
              <div className="flex flex-col items-center justify-center pr-5 pt-5 pb-3.5 border-r border-silver">
                <img src={paramTest.icon} alt="paramTest.typeTest" />
                <div className="text-dark-gray font-bold text-xl pt-3.5">
                  {paramTest.typeTest}
                </div>
              </div>
              <div className="flex flex-col items-center mx-auto pt-5 pb-3.5">
                <div className="text-dark-gray font-medium">
                  {paramTest.date}
                </div>
                <div className="text-2xl pt-8 text-silver-dark">
                  {paramTest.status}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={css.card} key={paramTest.date}>
            <div className="flex">
              <div className="flex flex-col items-center justify-center pr-5 pt-5 pb-3.5 border-r border-silver">
                <img src={paramTest.icon} alt="paramTest.typeTest" />
                <div className="text-raspberry font-bold text-xl pt-3.5">
                  {paramTest.typeTest}
                </div>
              </div>
              <div className="flex flex-col items-center mx-auto pt-5 pb-3.5">
                <div className="font-medium">{paramTest.date}</div>
                <div
                  className={`${
                    paramTest.testResult > 99 ? 'text-raspberry' : ''
                  } text-4xl font-bold py-5`}
                >
                  {paramTest.testResult}
                  <span className="text-black text-xl font-medium pl-2">
                    ug/l
                  </span>
                </div>
                {paramTest.testResult > 99 ? (
                  <div className="flex items-center">
                    <img src={Critical} alt="Critical" className="w-5 mr-2.5" />
                    <div className="text-xs text-raspberry">Critical</div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <img src={Normal} alt="Normal" className="w-5 mr-2.5" />
                    <div className="text-xs text-lettuce">
                      Within Normal Limits
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

CardTest.propTypes = {
  testData: PropTypes.arrayOf(PropTypes.shape()),
};

CardTest.defaultProps = {
  testData: undefined,
};

export default CardTest;
