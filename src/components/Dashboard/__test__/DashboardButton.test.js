import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import DashboardButton from '../DashboardButton';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const Button = (
  <Router>
    <Route>
      <DashboardButton to="/game">Game Start</DashboardButton>
    </Route>
  </Router>
);

describe('Dashboard button component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(Button, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should have the text Game Start', () => {
    const { getByTestId } = render(Button);
    expect(getByTestId('dashboardButton')).toHaveTextContent('Game Start');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(Button).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
