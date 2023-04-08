// @ts-nocheck
import React from 'react';
import { screen, render } from '@testing-library/react';
import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput />', () => {
  it('should have a value of the searchValue prop', () => {
    render(<TextInput handleChange={() => {}} searchValue={'Testing...'} />);
    const input = screen.getByPlaceholderText(/Type your search.../i);
    expect(input.value).toBe('Testing...');
  });
  it('should call handleChange function for each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);
    const input = screen.getByPlaceholderText(/Type your search.../i);
    const value = 'New value';
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match with the snapshot for TextInput already tested', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
