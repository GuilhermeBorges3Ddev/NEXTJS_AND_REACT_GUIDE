import React, { forwardRef, useImperativeHandle, useState } from 'react';
import P from 'prop-types';

export const DisplayedInput = forwardRef(function DisplayedInput({ value, setValue }, ref) {
  const [rand, setRand] = useState('0.24');
  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };
  useImperativeHandle(ref, () => ({
    handleClick,
  }));
  return (
    <p id={`p-${+rand}`}>
      <input ref={ref} type="search" value={value} onChange={(e) => setValue(e.target.value)} onClick={handleClick} />
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
