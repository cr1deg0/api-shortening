import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../Hero';

test('There is a heading in the component', () => {
  render(<Hero />);
  const title = screen.getByRole('heading', {
    name: /more than just shorter links/i
  });
  expect(title).toBeInTheDocument();
});

test('There is a Get Started link', async () => {
  render(<Hero />);
  const anchor = screen.getByText(/get started/i);
  expect(anchor).toBeInTheDocument();
});

test('Clicking Get Started link renders Main Page', async () => {
  render(<Hero />);
  const anchor = screen.getByText(/get started/i);
  expect(anchor).toBeInTheDocument();
  await userEvent.click(anchor);
  const title = screen.getByRole('heading', {
    name: /more than just shorter links/i
  });
  expect(title).toBeInTheDocument();
})