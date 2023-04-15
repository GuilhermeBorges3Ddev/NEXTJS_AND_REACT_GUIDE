import React from 'react';
import Home from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body1',
          url: 'img1.jpg',
        },
        {
          userId: 2,
          id: 2,
          title: 'title 2',
          body: 'body2',
          url: 'img2.jpg',
        },
        {
          userId: 3,
          id: 3,
          title: 'title 3',
          body: 'body3',
          url: 'img3.jpg',
        },
        {
          userId: 4,
          id: 4,
          title: 'title 4',
          body: 'body4',
          url: 'img4.jpg',
        },
        {
          userId: 5,
          id: 5,
          title: 'title 5',
          body: 'body5',
          url: 'img5.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
    render(<Home type="function" />);
    const noMorePosts = screen.getByText('No posts found :(');
    expect.assertions(3);
    await waitForElementToBeRemoved(noMorePosts);
    setTimeout(() => {}, 7000);
    const search = screen.getByPlaceholderText('Type your search...');
    expect(search).toBeInTheDocument();
    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(5);
    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });
});
