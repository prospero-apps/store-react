import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders div element', () => {
  render(<App />);
  expect(screen.getByTestId('main-container')).toBeInTheDocument();
});
