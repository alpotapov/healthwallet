import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MedicalRecords from './pages/MedicalRecords/MedicalRecords';
import AddTest from './pages/AddTest/AddTest';
import Guardians from './pages/Guardians/Guardians';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-test">
          <AddTest />
        </Route>
        <Route path="/guardians">
          <Guardians />
        </Route>
        <Route path="/">
          <MedicalRecords />
        </Route>
      </Switch>
    </Router>
  );
}
