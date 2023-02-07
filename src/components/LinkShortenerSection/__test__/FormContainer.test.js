import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormContainer from '../FormContainer';

const mockedAddLinks = jest.fn();

it('should render input field', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const input = screen.getByLabelText(/Shorten a link here.../i);
  expect(input).toBeInTheDocument();
});

it('should render a submit button', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const button = screen.getByRole('button', { name: /shorten it/i});
  expect(button).toBeInTheDocument();
});

it('should render an empty input initially', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const input = screen.getByLabelText(/Shorten a link here.../i);
  expect(input.value).toBe('');
});

it('should not render an error message initially', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const errorMessage = screen.getByTestId('error');
  expect(errorMessage).toHaveClass('hidden');
});

it('should be able to type in input', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const input = screen.getByLabelText(/Shorten a link here.../i);
  userEvent.type(input, 'mypage.com');
  expect(input.value).toBe('mypage.com');
});

it('should show error message if button clicked with empty input', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const errorMessage = screen.getByTestId('error');
  const button = screen.getByRole('button', { name: /shorten it/i});
  userEvent.click(button);
  expect(errorMessage).toHaveClass('block');
});

it('should clear error message after user types input', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const input = screen.getByLabelText(/Shorten a link here.../i);
  const errorMessage = screen.getByTestId('error');
  const button = screen.getByRole('button', { name: /shorten it/i});
  userEvent.click(button);
  expect(errorMessage).toHaveClass('block');
  userEvent.type(input, 'a');
  expect(errorMessage).toHaveClass('hidden');
});

// simulate fetch
it('should have empty input after clicking "Shorten" button', () => {
  render(<FormContainer addLinks={ mockedAddLinks} />);
  const input = screen.getByLabelText(/Shorten a link here.../i);
  const button = screen.getByRole('button', { name: /shorten it/i});
  userEvent.type(input, 'mypage.com');
  userEvent.click(button);
  // expect(input.value).toBe('');
});







