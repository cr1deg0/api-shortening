import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinkShortener from '../LinkShortener';

describe('integration tests; unsuccessful API request', () => {

  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 401,
    });
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should not render the link and show an alert on screen', async () => {

    render(<LinkShortener/>);
    const inputElement = screen.getByLabelText(/Shorten a link here.../i);
    const buttonElement = screen.getByRole('button', {name: /shorten it!/i});

    userEvent.type(inputElement, "mysite");
    userEvent.click(buttonElement);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(screen.queryByText(/mysite/i)).not.toBeInTheDocument();

  });
});

describe('integration tests; successful API request', () => {

  const mockResponse = {
    result: {
      original_link: "http://mysite.io",
      full_short_link: "https://me.io"
    }
  }
  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    })
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render the same link typed in input plus the result of the APi call', async () => {
    render(<LinkShortener/>);
    const inputElement = screen.getByLabelText(/Shorten a link here.../i);
    const buttonElement = screen.getByRole('button', {name: /shorten it!/i});

    userEvent.type(inputElement, "mysite.io");
    userEvent.click(buttonElement);
    
    const longUrlElement = await screen.findByTestId('longUrl');
    expect(longUrlElement).toHaveTextContent(/mysite.io/i);
    const shortUrlElement = await screen.findByTestId('shortUrl');
    expect(shortUrlElement).toHaveTextContent("https://me.io");
  });
});

