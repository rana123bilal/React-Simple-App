import { render, screen } from '@testing-library/react';
import List from './Components/Lists.js'

test('renders list items', () => {
  render(<List />);

  const linkElement = screen.getByText(/Date/);
  expect(linkElement).toBeInTheDocument();
});
