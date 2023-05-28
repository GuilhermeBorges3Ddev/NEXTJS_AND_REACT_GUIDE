import React, { useReducer } from 'react';
import P from 'prop-types';

import { SampleContext } from './context';
import { sampleInitialData } from './data';
import { sampleReducer } from './reducer';

SampleProvider.propTypes = {
  children: P.node.isRequired,
};
export default function SampleProvider({ children }) {
  const [sampleState, sampleDispatcher] = useReducer(sampleReducer, sampleInitialData);
  return <SampleContext.Provider value={{ sampleState, sampleDispatcher }}>{children}</SampleContext.Provider>;
}
