import React, { useContext } from 'react';
import { AppGlobalContext } from '../contexts/AppContext';

// eslint-disable-next-line
export function AppHeader() {
  const AppHeaderStyles = { margin: 0, padding: 20, backgroundColor: '#122121', color: 'white', userSelect: 'none' };
  const stateReceived = useContext(AppGlobalContext);
  const { appState, AppContextCounterSetter } = stateReceived;
  return (
    <h1 onClick={() => AppContextCounterSetter(1)} style={AppHeaderStyles}>
      {appState.title + `\n<<Clicked: ${appState.counter} times>>`}
    </h1>
  );
}
