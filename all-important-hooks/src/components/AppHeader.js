import React, { useContext } from 'react';
import { GlobalContext } from '../App';

// eslint-disable-next-line
export function AppHeader() {
  const AppHeaderStyles = { margin: 0, padding: 20, backgroundColor: '#122121', color: 'white' };
  const contextValue = useContext(GlobalContext);
  return <h1 style={AppHeaderStyles}>{contextValue.title}</h1>;
}
