import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MedicalRecords from './pages/MedicalRecords/MedicalRecords';
import AddTest from './pages/AddTest/AddTest';
import Guardians from './pages/Guardians/Guardians';
import Preservation from './pages/Preservation/Preservation';
import RestoreAccess from './pages/RestoreAccess/RestoreAccess';
import AddGuardians from './pages/AddGuardians/AddGuardians';
import AddTestScan from './pages/AddTestScan/AddTestScan';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-test/scan">
          <AddTestScan />
        </Route>
        <Route path="/add-test">
          <AddTest />
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
