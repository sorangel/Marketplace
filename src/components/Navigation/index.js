import React from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';

const Component = ({ routes = [] }) => (
  <Switch>
    {(routes || []).map((route = {}, routeKey) => (
      <Route key={routeKey.toString()} {...route} />
    ))}
  </Switch>
);

Component.propTypes = {
  routes: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Component;
