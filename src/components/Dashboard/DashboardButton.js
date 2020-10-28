import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardButton = ({ children, to }) => (
  <Button
    data-testid="dashboardButton"
    component={Link}
    to={to}
    variant="outlined"
    color="primary"
    size="large"
    fullWidth
  >
    {children}
  </Button>
);

DashboardButton.defaultProp = {
  to: PropTypes.string,
};

DashboardButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DashboardButton;
