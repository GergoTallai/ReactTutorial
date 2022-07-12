import { render, screen } from '@testing-library/react';
import App from './App';

test('Party start! Renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
