import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Page imports
import Home from './pages';
import Login from './pages/Login';
import { Navigation } from './shared/Navigation';

export default () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
);
