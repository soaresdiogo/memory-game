import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Dashboard from '../Dashboard';

import '@testing-library/jest-dom/extend-expect';

const DashboardComponent = <Dashboard>Content</Dashboard>;

describe('Dashboard component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(DashboardComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders div correctly', () => {
    const { getByTestId } = render(DashboardComponent);
    expect(getByTestId('dashboard')).toBeTruthy();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(DashboardComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
