import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('render h1 element', () => {
  render(<Home/>);
  expect(screen.getByText(/Welcome/)).toBeInTheDocument();
});