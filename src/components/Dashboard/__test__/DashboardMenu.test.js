import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import DashboardMenu from '../DashboardMenu';

import '@testing-library/jest-dom/extend-expect';

const DashboardMenuComponent = <DashboardMenu title="Memory Game" />;

const renderDashbordMenu = () => {
  const { getByTestId } = render(DashboardMenuComponent);
  const container = getByTestId('dashboardMenu');
  return {
    getByTestId,
    container,
  };
};

describe('Dashboard menu component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(DashboardMenuComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders div correctly', () => {
    const { container, getByTestId } = renderDashbordMenu();
    expect(container.children.length).toBe(1);
    expect(getByTestId('dashboardMenuTitle')).toBeDefined();
    expect(getByTestId('dashboardMenuTitle').textContent).toBe('Memory Game');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(DashboardMenuComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
