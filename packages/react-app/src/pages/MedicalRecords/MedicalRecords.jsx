import React from 'react';

import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import CardTest from './components/CardTest';

const MedicalRecords = () => {
  return (
    <PageBase>
      <div className="flex justify-between items-center pb-6">
        <div className="p-2">Your Medical Records</div>
        <Link
          to="/guardians"
          className="p-2 bg-lettuce uppercase text-white font-bold text-center"
        >
          GUARD
        </Link>
      </div>
      <CardTest />
      <Link
        to="/add-test"
        className="p-2 bg-lettuce uppercase text-white font-bold text-center"
      >
        Add Test
      </Link>
    </PageBase>
  );
};

export default MedicalRecords;
