import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Boost from "../Boost";

test("Section Heading renders", () => {
  render(<Boost/>);
  expect(screen.getByRole('heading', { name: /boost your links today/i })).toBeInTheDocument();
});
test("Get started link renders", () => {
  render(<Boost />);
  expect(screen.getByText(/get started/i)).toBeInTheDocument();
});
test('Clicking Get Started link renders component', async () => {
  render(<Boost />);
  await userEvent.click(screen.getByText(/get started/i));
  const title = screen.getByRole('heading', {
    name: /boost your links today/i
  });
  expect(title).toBeInTheDocument();
})
