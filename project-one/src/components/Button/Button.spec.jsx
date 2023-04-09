import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './index';

describe('<Button />', () => {
  it("should render the button with the text 'Load more'", () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts..." loadMorePostsAction={fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts..." loadMorePostsAction={fn} />);
    const button = screen.getByRole('button', { name: /load more posts/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should be disabled when disabled prop is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts..." isDisabled={true} loadMorePostsAction={fn} />);
    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeDisabled();
  });
  it('should be enabled when disabled prop is false', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts..." isDisabled={false} loadMorePostsAction={fn} />);
    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).not.toBeDisabled();
  });
  it('should match the Button tested with the snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load More Posts..." isDisabled={false} loadMorePostsAction={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
