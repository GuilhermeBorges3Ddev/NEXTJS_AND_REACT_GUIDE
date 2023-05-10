import { createContext, useState } from 'react';
import { globalState } from './data';

export const AppGlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [appState, setAppState] = useState(globalState);
  const AppContextTitleSetter = (newTitle) => setAppState({ ...appState, title: newTitle });
  const AppContextBodySetter = (newBody) => setAppState({ ...appState, body: newBody });
  const AppContextCounterSetter = (increment) => setAppState({ ...appState, counter: appState.counter + increment });
  const providerObject = { appState, AppContextTitleSetter, AppContextBodySetter, AppContextCounterSetter };
  return <AppGlobalContext.Provider value={providerObject}>{children}</AppGlobalContext.Provider>;
};
