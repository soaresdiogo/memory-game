import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import VictoryDialog from '../VictoryDialog';

import '@testing-library/jest-dom/extend-expect';

const renderVictoryDialog = () => {
  const { getByTestId } = render(<VictoryDialog isOpen />);
  const container = getByTestId('victoryDialog');
  return {
    getByTestId,
    container,
  };
};

describe('Victory dialog component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VictoryDialog isOpen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders all elements correctly', () => {
    const { container, getByTestId } = renderVictoryDialog();
    expect(container.children.length).toBe(4);
    expect(getByTestId('victoryDialogTitle')).toBeDefined();
    expect(getByTestId('victoryDialogContentText')).toBeDefined();
    expect(getByTestId('victoryDialogRestartButton')).toBeDefined();
    expect(getByTestId('victoryDialogOkButton')).toBeDefined();
  });

  test('should title be Congrats!', () => {
    const { getByTestId } = renderVictoryDialog();
    expect(getByTestId('victoryDialogTitle').textContent).toBe('Congrats!');
  });

  test('should content text be You win the game', () => {
    const { getByTestId } = renderVictoryDialog();
    expect(getByTestId('victoryDialogContentText').textContent).toBe(
      'You win the game.',
    );
  });

  test('should be a button with value Restart', () => {
    const { getByTestId } = renderVictoryDialog();
    expect(getByTestId('victoryDialogRestartButton').type).toBe('button');
    expect(getByTestId('victoryDialogRestartButton').textContent).toBe(
      'Restart',
    );
  });

  test('should be a button with value Ok', () => {
    const { getByTestId } = renderVictoryDialog();
    expect(getByTestId('victoryDialogOkButton').type).toBe('button');
    expect(getByTestId('victoryDialogOkButton').textContent).toBe('Ok');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<VictoryDialog isOpen={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
