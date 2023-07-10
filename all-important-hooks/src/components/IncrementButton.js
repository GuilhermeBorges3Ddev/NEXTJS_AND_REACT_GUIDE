import React from 'react';
import P from 'prop-types';

IncrementButton.propTypes = {
  incrementUpdateFunction: P.func.isRequired,
};

IncrementButton.defaultProps = {
  incrementUpdateFunction: () => {},
};

export function IncrementButton({ incrementUpdateFunction }) {
  return <button onClick={() => incrementUpdateFunction(10)}>+</button>;
}
