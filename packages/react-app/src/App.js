import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MedicalRecords from './pages/MedicalRecords/MedicalRecords';
import ScanResult from './pages/ScanResult/ScanResult';
import Guardians from './pages/Guardians/Guardians';
import Preservation from './pages/Preservation/Preservation';
import RestoreAccess from './pages/RestoreAccess/RestoreAccess';
import AddGuardians from './pages/AddGuardians/AddGuardians';
import ScanTest from './pages/ScanTest/ScanTest';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/scan-test/result">
          <ScanResult />
        </Route>
        <Route path="/scan-test">
          <ScanTest />
        </Route>
        <Route path="/guardians/add-guardians">
          <AddGuardians />
        </Route>
        <Route path="/guardians">
          <Guardians />
        </Route>
        <Route path="/preservation/restore-access">
          <RestoreAccess />
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
