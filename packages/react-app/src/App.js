import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TokenTools from './pages/TokenTools/TokenTools';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <TokenTools />
        </Route>
      </Switch>
    </Router>
  );
}
