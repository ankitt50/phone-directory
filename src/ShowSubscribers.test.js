import { render, screen } from '@testing-library/react';
import ShowSubscribers from './ShowSubscribers';

test('renders learn react link', () => {
  render(<ShowSubscribers />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
