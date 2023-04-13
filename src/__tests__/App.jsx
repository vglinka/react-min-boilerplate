import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { App } from '../App';

it('Should have button enabled', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
});
