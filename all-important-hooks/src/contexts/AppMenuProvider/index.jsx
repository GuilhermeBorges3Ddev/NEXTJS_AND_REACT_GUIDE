import { useReducer } from 'react';
import P from 'prop-types';

import { changeCenterMenuItem, changeLeftMenuItem, changeRightMenuItem } from './actions';
import { AppMenuContextData } from './context';
import { globalMenuInitialState } from './data';
import { menuReducerFunction } from './reducers';

AppMenuProvider.defaultProps = {
  children: <></>,
};

AppMenuProvider.propTypes = {
  children: P.node.isRequired,
};

export function AppMenuProvider({ children }) {
  const [menuState, menuDispatcher] = useReducer(menuReducerFunction, globalMenuInitialState);
  return (
    <AppMenuContextData.Provider
      value={{ menuState, changeLeftMenuItem, changeCenterMenuItem, changeRightMenuItem, menuDispatcher }}
    >
      {children}
    </AppMenuContextData.Provider>
  );
}
