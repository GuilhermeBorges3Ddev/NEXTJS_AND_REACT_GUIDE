import React from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

export default function Heading() {
  const [state, actions] = useCounterContext();
  return <h1 style={{ fontSize: '60px' }}>Counter value: {state.counter}</h1>;
}
