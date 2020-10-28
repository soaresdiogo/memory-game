import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    height: '100vh',
    backgroundColor: '#ccc',
  },
};

const Dashboard = ({ children, classes }) => (
  <Grid
    data-testid="dashboard"
    className={classes.root}
    alignItems="center"
    justify="center"
    container
  >
    {children}
  </Grid>
);

Dashboard.defaultProp = {
  classes: PropTypes.node,
};

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Dashboard);
