import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';
import { AppBar, Navigation } from 'components';
import routes from 'routes';
import { custom as theme } from 'theme';
// import propTypes from 'prop-types';

const Component = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Router>
      <Container maxWidth="xl">
        <AppBar routes={routes} />

        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Navigation routes={routes} />
          </Grid>
        </Grid>
      </Container>
    </Router>
  </ThemeProvider>
);

Component.propTypes = {};

export default Component;
