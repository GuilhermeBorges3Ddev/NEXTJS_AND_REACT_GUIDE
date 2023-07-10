import React from 'react';
import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export default function Button({ text, onButtonClick, isDisabled = false }) {
  const [state, actions] = useCounterContext();
  return (
    <button style={{ fontSize: '60px' }} onClick={onButtonClick} disabled={isDisabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func.isRequired,
  isDisabled: P.bool,
};
