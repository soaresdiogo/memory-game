import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from '../App';

import '@testing-library/jest-dom/extend-expect';

const AppComponent = <App />;

describe('App component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(AppComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(AppComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
