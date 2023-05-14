import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { globalMenuInitialState } from './data';
import { menuReducerFunction } from './reducers';
import { actions } from './actions';

AppMenuContext.defaultProps = {
  children: <></>,
};

AppMenuContext.propTypes = {
  children: P.node.isRequired,
};

export const AppMenuContextData = createContext();

export function AppMenuContext({ children }) {
  const CLICKDATE_FOR_APPMENU_DISPATCHER = new Date().toLocaleString('pt-BR');
  const [menuState, menuDispatcher] = useReducer(menuReducerFunction, globalMenuInitialState);
  const changeLeftMenuItem = () =>
    menuDispatcher({ type: actions.changeLeftItem, payload: CLICKDATE_FOR_APPMENU_DISPATCHER });
  const changeCenterMenuItem = () =>
    menuDispatcher({ type: actions.changeCenterItem, payload: CLICKDATE_FOR_APPMENU_DISPATCHER });
  const changeRightMenuItem = () =>
    menuDispatcher({ type: actions.changeRightItem, payload: CLICKDATE_FOR_APPMENU_DISPATCHER });
  return (
    <AppMenuContextData.Provider value={{ menuState, changeLeftMenuItem, changeCenterMenuItem, changeRightMenuItem }}>
      {children}
    </AppMenuContextData.Provider>
  );
}
