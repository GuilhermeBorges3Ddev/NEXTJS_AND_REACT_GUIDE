import { useState } from 'react';
import { globalState } from './data';
import { AppGlobalContext } from './context';
import { AppContextTitleSetter, AppContextBodySetter, AppContextCounterSetter } from './actions';

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [appState, setAppState] = useState(globalState);
  const providerObject = {
    appState,
    setAppState,
    AppContextTitleSetter,
    AppContextBodySetter,
    AppContextCounterSetter,
  };
  return <AppGlobalContext.Provider value={providerObject}>{children}</AppGlobalContext.Provider>;
};
