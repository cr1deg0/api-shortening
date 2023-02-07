import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinkItem from '../LinkItem';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {}
  }
});

beforeEach(() => {
  jest.spyOn(navigator.clipboard, "writeText")
});
afterEach(() => {
  jest.restoreAllMocks();
});

it('renders component with props', () => {
  render(
    <LinkItem
      longUrl={'mysite.com'}
      shortUrl={'me.com'}
    />
  );
  const longUrlElement = screen.getByTestId('longUrl');
  const shortUrlElement = screen.getByTestId('shortUrl');
  expect(longUrlElement).toHaveTextContent(/mysite.com/i);
  expect(shortUrlElement).toHaveTextContent(/me.com/i);
})

it('renders a "Copy" button', () => {
  render(
    <LinkItem
      longUrl={'mysite.com'}
      shortUrl={'me.com'}
    />
  );
  const button = screen.getByRole('button', {name: /Copy/i});
  expect(button).toBeInTheDocument();
})

it('copies short link to clipboard', () => {
  render(
    <LinkItem
      longUrl={'mysite.com'}
      shortUrl={'me.com'}
    />
  );
  const button = screen.getByRole('button', {name: /Copy/i});
  userEvent.click(button);
  expect(navigator.clipboard.writeText).toBeCalledTimes(1);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('me.com');
});

it('changes button text to "Copied!" after click', async () => {
  render(
    <LinkItem
      longUrl={'mysite.com'}
      shortUrl={'me.com'}
    />
  );
  const button = screen.getByRole('button', {name: /Copy/i});
  userEvent.click(button);
  const renameddButton = await screen.findByRole('button', {name: /Copied!/i});
  expect(renameddButton).toBeInTheDocument();
})