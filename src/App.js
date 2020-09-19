import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes';

export default () => (
  <Router>
    <Switch>
      {(routes || []).map((route = {}, routeKey) => (
        <Route key={routeKey.toString()} {...route} />
      ))}
    </Switch>
  </Router>
);
