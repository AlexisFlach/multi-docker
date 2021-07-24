import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome msg', () => {
  render(<App />);
  const title = screen.getByText(/Fibcalculator/i);
  expect(title).toBeInTheDocument();
});
