import { screen, render } from '@testing-library/react';
import LinksContainer from '../LinksContainer';

const mockedList = [
  {
    longUrl: 'url1.com',
    shortUrl: 'u1.com'
  },
  {
    longUrl: 'url2.com',
    shortUrl: 'u2.com'
  }
];

it('renders a list of items', () => {
  render(
    <LinksContainer linkList={ mockedList } />
  );
  const elementsList = screen.getByRole('list');
  expect(elementsList).toBeInTheDocument();
});

it('renders a list of 2 items', () => {
  render(
    <LinksContainer linkList={ mockedList } />
  );
  const elementsList = screen.getAllByRole('listitem');
  expect(elementsList.length).toBe(2);
});