import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Card from '../Card';

import '@testing-library/jest-dom/extend-expect';

const CardComponent = (
  <Card
    name="Elephant"
    startLetter="E"
    image="/images/elephant.jpg"
    isActive={false}
  />
);

const renderCard = () => {
  const { getByTestId } = render(CardComponent);
  const container = getByTestId('card');
  return {
    getByTestId,
    container,
  };
};

describe('Card component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(CardComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should be defined', () => {
    const { getByTestId } = renderCard();
    expect(getByTestId('card')).toBeDefined();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(CardComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
