import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(6),
  },
});

const DashboardMenu = ({ children, classes, title }) => (
  <Paper data-testid="dashboardMenu" className={classes.root}>
    <Typography
      data-testid="dashboardMenuTitle"
      variant="h4"
      align="center"
      className={classes.title}
    >
      {title}
    </Typography>
    {children}
  </Paper>
);

DashboardMenu.defaultProp = {
  classes: PropTypes.node,
  children: PropTypes.node,
};

DashboardMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(DashboardMenu);
