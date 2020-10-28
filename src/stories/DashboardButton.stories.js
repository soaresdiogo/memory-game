import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { DashboardButton } from '../components';

export default {
  title: 'Components/Dashboard',
  component: DashboardButton,
};

export const ButtonComponent = () => (
  <Router>
    <Route>
      <DashboardButton>Game Start</DashboardButton>
    </Route>
  </Router>
);
