import React from 'react';
import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Type your search..."
    />
  );
};

TextInput.defaultProps = {
  searchValue: '',
  handleChange: () => {},
};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func,
};
