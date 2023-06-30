import P from 'prop-types';
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const INITIAL_STATE = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(INITIAL_STATE);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
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
