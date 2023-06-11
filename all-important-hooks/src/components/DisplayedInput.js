import React, { forwardRef } from 'react';
import P from 'prop-types';

export const DisplayedInput = forwardRef(function DisplayedInput({ value, setValue }, ref) {
  return (
    <p>
      <input ref={ref} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
    </p>
  );
});

DisplayedInput.defaultProps = {
  value: null,
  setValue: () => {},
};

DisplayedInput.propTypes = {
  value: P.any.isRequired,
  setValue: P.func.isRequired,
};
