import React, { useContext } from 'react';
import { GlobalContext } from '../App';

// eslint-disable-next-line
export function AppHeader() {
  const AppHeaderStyles = { margin: 0, padding: 20, backgroundColor: '#122121', color: 'white', userSelect: 'none' };
  const stateReceived = useContext(GlobalContext);
  const { contextState, setContextState } = stateReceived;
  return (
    <h1 onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))} style={AppHeaderStyles}>
      {contextState.title + `\n<<Clicked: ${contextState.counter} times>>`}
    </h1>
  );
}
