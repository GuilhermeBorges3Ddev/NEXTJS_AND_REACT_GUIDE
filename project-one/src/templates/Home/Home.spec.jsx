import React from 'react';
import Home from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitForElementToBeRemoved } from '@testing-library/react';

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
        {
          userId: 6,
          id: 6,
          title: 'title 6',
          body: 'body6',
          url: 'img6.jpg',
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

  it('should search for posts', async () => {
    render(<Home type="function" />);
    const noMorePosts = screen.getByText('No posts found :(');
    expect.assertions(18);
    await waitForElementToBeRemoved(noMorePosts);
    setTimeout(() => {}, 7000);
    const search = screen.getByPlaceholderText('Type your search...');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 2/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 3/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 4/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 5/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 6/i })).not.toBeInTheDocument();
    act(() => {
      userEvent.type(search, 'title 1');
    });
    expect(screen.getByRole('heading', { name: 'Searched value: title 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 2/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 3/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 4/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 5/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 6/i })).not.toBeInTheDocument();
    act(() => {
      userEvent.clear(search);
    });
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 2/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 3/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 4/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 5/i })).toBeInTheDocument();
    act(() => {
      userEvent.type(search, 'qwnqnosnopadnenwweoqurb');
    });
    expect(screen.getByText('No posts found :(')).toBeInTheDocument();
  });

  it('should load more posts when the button this button is clicked', async () => {
    render(<Home type="class" />);
    const noMorePosts = screen.getByText('No posts found :(');
    expect.assertions(2);
    await waitForElementToBeRemoved(noMorePosts);
    setTimeout(() => {}, 7000);
    const button = screen.getByRole('button', { name: /load more posts/i });
    act(() => {
      userEvent.click(button);
    });
    setTimeout(() => {}, 3000);
    expect(screen.getByRole('heading', { name: /title 6/i })).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
