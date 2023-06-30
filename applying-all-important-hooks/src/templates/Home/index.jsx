import React from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();
  return <div>Oi</div>;
};
