import React from 'react';
import { Redirect } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import BarcodeScanner from './components/BarcodeScanner';

import AddImage from './assets/AddImage.png';

const ScanTest = () => {
  const [scannedUid, setScannedUid] = React.useState(undefined);

  if (scannedUid && scannedUid !== '')
    return <Redirect to={`/scan-test/result/${scannedUid}`} />;
  return (
    <PageBase buttonBack backLink="/add-test">
      <div className="overflow-y-auto mb-16">
        <div className="relative z-10 flex pt-6 -mb-16">
          <img className="w-52" src={AddImage} alt="addImage" />
          <div className="font-bold text-3xl w-28 mt-8">
            <span className="text-lilac">Add</span> Test
          </div>
        </div>
        <div className="px-5">
          <BarcodeScanner onScanCompleted={(result) => setScannedUid(result)} />
        </div>
      </div>
    </PageBase>
  );
};

export default ScanTest;
