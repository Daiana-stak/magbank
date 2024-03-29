import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders magbank header', () => {
  const { getByText } = render(<App />);
  const el = screen.getByText(/magbank/i);
  expect(el).toBeInTheDocument();
});
