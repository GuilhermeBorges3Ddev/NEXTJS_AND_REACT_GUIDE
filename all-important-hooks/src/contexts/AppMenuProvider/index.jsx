import P from 'prop-types';
import { useReducer } from 'react';
import { globalMenuInitialState } from './data';
import { AppMenuContextData } from './context';
import { menuReducerFunction } from './reducers';
import { changeLeftMenuItem, changeCenterMenuItem, changeRightMenuItem } from './actions';

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
