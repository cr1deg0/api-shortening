import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../NavBar'

test('renders navbar', () => {
  render(<NavBar />);
  const navBar = screen.getByRole('navigation');
  expect(navBar).toBeInTheDocument();
});

test('navbar has 5 elements', () => {
  render(<NavBar />);
  const navBarElements = screen.getAllByRole('menuitem');
  expect(navBarElements).toHaveLength(5);
});

test('navbar has a button', () => {
  render(<NavBar />);
  const menuButton = screen.getByRole('button', {name: /menu/i });
  expect(menuButton).toBeInTheDocument();
});
test('menu button is closed by default', () => {
  render(<NavBar />);
  const menuButton = screen.getByRole('button', {expanded: false});
  expect(menuButton).toBeInTheDocument(); 
});
test('menu opens after user click', async () => {
  render(<NavBar />);
  const menuButtonClosed = screen.getByRole('button', {expanded: false});
  expect(menuButtonClosed).toBeInTheDocument();
  await userEvent.click(menuButtonClosed);
  const menuButtonOpen = screen.getByRole('button', {expanded: true});
  expect(menuButtonOpen).toBeInTheDocument();
});

