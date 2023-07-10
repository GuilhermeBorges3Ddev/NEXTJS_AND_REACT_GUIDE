import React, { useContext } from 'react';

import { AppGlobalContext } from '../contexts/AppProvider/context';

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
  const { appState, setAppState, AppContextCounterSetter } = stateReceived;
  return (
    <p style={AppHeaderStyles} onClick={() => AppContextCounterSetter(1, appState, setAppState)}>
      <u>Context Body</u>: {appState.body}
    </p>
  );
}
