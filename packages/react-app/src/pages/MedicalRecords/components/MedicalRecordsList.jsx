import React from 'react';
import PropTypes from 'prop-types';
import CardTestPending from './CardTestPending';
import CardTest from './CardTest';

const MedicalRecordsList = ({ testData }) => {
  if (!testData) return null;

  return (
    <div className="bg-gray px-6 py-6 flex-grow">
      {testData.map((paramTest) => {
        return paramTest.status === 'Pending' ? (
          <CardTestPending cardData={paramTest} key={paramTest.uid} />
        ) : (
          <CardTest cardData={paramTest} key={paramTest.uid} />
        );
      })}
    </div>
  );
};

MedicalRecordsList.propTypes = {
  testData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MedicalRecordsList;
