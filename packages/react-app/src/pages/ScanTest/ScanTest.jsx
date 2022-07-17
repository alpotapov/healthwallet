import React from 'react';
import { Redirect } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import BarcodeScanner from './components/BarcodeScanner';

import AddImage from './assets/AddImage.png';
import ScanIcon from './assets/ScanIcon.svg';

const ScanTest = () => {
  const [scannedUid, setScannedUid] = React.useState(undefined);

  if (scannedUid && scannedUid !== '')
    return <Redirect to={`/scan-test/result/${scannedUid}`} />;
  return (
    <PageBase buttonBack backLink="/add-test">
      <div className="relative z-10 flex pt-6 -mb-16">
        <img className="w-52" src={AddImage} alt="addImage" />
        <div className="font-bold text-3xl w-28 mt-8">
          <span className="text-lilac">Add</span> Test
        </div>
      </div>
      <div className="px-5">
        <BarcodeScanner onScanCompleted={(result) => setScannedUid(result)} />
        {scannedUid !== '' ? (
          <button
            type="button"
            onClick={() => {}}
            className="flex items-center w-full bg-lettuce rounded-3xl h-14 pl-5"
          >
            <img src={ScanIcon} alt="ScanIcon" />
            <div className="ml-32 text-sm font-bold text-white">Scan</div>
          </button>
        ) : null}
      </div>
    </PageBase>
  );
};

export default ScanTest;
