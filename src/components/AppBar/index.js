import React from 'react';
import propTypes from 'prop-types';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Button from './Button';

const Component = ({ routes = [], history = {} }) => (
  <AppBar position="static" style={{ background: 'white', margin: '20px 0' }} elevation={3}>
    <Toolbar>
      <Grid container>
        {routes
          .filter((route) => !!route.showOnAppBar)
          .map((route, routeKey) => (
            <Grid key={routeKey.toString()} item justify="center" alignItems="center">
              <Button onClick={() => history.push(route.path)}>{route.name}</Button>
            </Grid>
          ))}
      </Grid>
    </Toolbar>
  </AppBar>
);

Component.defaultProps = {
  // title: '',
};

Component.propTypes = {
  // title: propTypes.string,
  history: propTypes.objectOf(propTypes.object).isRequired,
  // match: propTypes.object.isRequired,
  // location: propTypes.object.isRequired,
  routes: propTypes.arrayOf(propTypes.object).isRequired,
};

export { Component, Button };

export default withRouter(Component);
