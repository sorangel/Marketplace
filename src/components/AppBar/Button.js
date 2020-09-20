import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: 5
  },
};

const Component = (props) => <Button {...props} />;

Component.defaultProps = {
  children: null,
};

Component.propTypes = {
  children: propTypes.node,
};

export default withStyles(styles)(Component);
