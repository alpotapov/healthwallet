import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MedicalRecords from './pages/MedicalRecords/MedicalRecords';
import ScanResult from './pages/ScanResult/ScanResult';
import Guardians from './pages/Guardians/Guardians';
import Preservation from './pages/Preservation/Preservation';
import AddGuardians from './pages/AddGuardians/AddGuardians';
import ScanTest from './pages/ScanTest/ScanTest';
import GuardiansService from './pages/GuardiansService/GuardiansService';
import TransferToken from './pages/TransferToken/TransferToken';
import Ecosystem from './pages/Ecosystem/Ecosystem';
import ShareRecords from './pages/ShareRecords/ShareRecords';
import ShowResults from './pages/ShowResults/ShowResults';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/show-results">
          <ShowResults />
        </Route>
        <Route path="/share-records">
          <ShareRecords />
        </Route>
        <Route path="/ecosystem">
          <Ecosystem />
        </Route>
        <Route path="/guardian/transfer-token">
          <TransferToken />
        </Route>
        <Route path="/guardian">
          <GuardiansService />
        </Route>
        <Route path="/scan-test/result/:uid">
          <ScanResult />
        </Route>
        <Route path="/scan-test">
          <ScanTest />
        </Route>
        <Route path="/manage-guardians/add-guardians">
          <AddGuardians />
        </Route>
        <Route path="/manage-guardians">
          <Guardians />
        </Route>
        <Route path="/preservation">
          <Preservation />
        </Route>
        <Route path="/">
          <MedicalRecords />
        </Route>
      </Switch>
    </Router>
  );
}
