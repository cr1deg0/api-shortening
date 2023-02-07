import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../Footer";

test('Component renders with 4 lists', () => {
  render(<Footer/>);
  expect(screen.getAllByRole("menu")).toHaveLength(4);
});
test('Component renders with 14 links', () => {
  render(<Footer/>);
  expect(screen.getAllByRole('menuitem')).toHaveLength(14);
});
test('social media links redirect', async () => {
  render(<Footer />);
  const facebookLink = screen.getByRole('menuitem', {
    name: /facebook/i
  });
  await userEvent.click(facebookLink);
  expect(screen.getByText(/features/i)).toBeInTheDocument();
})
