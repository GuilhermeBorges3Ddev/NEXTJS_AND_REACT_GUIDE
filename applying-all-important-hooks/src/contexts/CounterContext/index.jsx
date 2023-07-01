import P from 'prop-types';
import { counterReducer } from './reducer';
import { createContext, useContext, useReducer, useState, useRef } from 'react';
import { buildActions } from './buildActions';

const Context = createContext();

export const INITIAL_STATE = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const actions = useRef(buildActions(dispatch));
  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

export const useCounterContext = () => {
  const context = useContext(Context);
  if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext inside <CounterContextProvider />');
  }
  return [...context];
};

CounterContextProvider.propTypes = {
  children: P.any,
};

CounterContextProvider.defaultProps = {
  children: <></>,
};
