export const AppContextTitleSetter = (newTitle, appState, setAppState) => setAppState({ ...appState, title: newTitle });

export const AppContextBodySetter = (newBody, appState, setAppState) => setAppState({ ...appState, body: newBody });

export const AppContextCounterSetter = (increment, appState, setAppState) =>
  setAppState({ ...appState, counter: appState.counter + increment });
