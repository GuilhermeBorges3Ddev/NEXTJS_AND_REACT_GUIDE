import { useState } from 'react';

import { AppContextBodySetter, AppContextCounterSetter, AppContextTitleSetter } from './actions';
import { AppGlobalContext } from './context';
import { globalState } from './data';

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
