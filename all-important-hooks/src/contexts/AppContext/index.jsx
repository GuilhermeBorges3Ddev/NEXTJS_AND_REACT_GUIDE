import { createContext, useState } from 'react';
import { globalState } from './data';

export const AppGlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [appState, setAppState] = useState(globalState);
  return <AppGlobalContext.Provider value={{ appState, setAppState }}>{children}</AppGlobalContext.Provider>;
};
