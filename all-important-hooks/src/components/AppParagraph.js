import React, { useContext } from 'react';
import { GlobalContext } from '../App';

// eslint-disable-next-line
export function AppParagraph() {
  const AppHeaderStyles = {
    paddingBottom: '1rem',
    margin: '0',
    fontWeight: '0.75rem',
    backgroundColor: '#122121',
    color: 'white',
    userSelect: 'none',
  };
  const stateReceived = useContext(GlobalContext);
  const { contextState, setContextState } = stateReceived;
  return (
    <p style={AppHeaderStyles} onClick={() => setContextState({ ...contextState, counter: contextState.counter + 1 })}>
      <u>Context Body</u>: {contextState.body}
    </p>
  );
}
