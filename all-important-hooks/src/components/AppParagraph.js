import React, { useContext } from 'react';
import { AppGlobalContext } from '../contexts/AppContext';

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
  const stateReceived = useContext(AppGlobalContext);
  const { appState, setAppState } = stateReceived;
  return (
    <p style={AppHeaderStyles} onClick={() => setAppState({ ...appState, counter: appState.counter + 1 })}>
      <u>Context Body</u>: {appState.body}
    </p>
  );
}
