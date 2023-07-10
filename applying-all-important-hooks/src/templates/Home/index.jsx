import React, { useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  async function handleError() {
    actions
      .asyncError()
      .then((r) => console.alert(r))
      .catch((e) => console.error(e.name, ':', e.message));
  }

  return (
    <div>
      <Heading />
      <div>
        <Button text={'Increase'} onButtonClick={() => actions.increase()} />
        <Button text={'Decrease'} onButtonClick={() => actions.decrease()} />
        <Button text={'Reset'} onButtonClick={() => actions.reset()} />
        <Button text={'Set value 10'} onButtonClick={() => actions.setCounter({ counter: 10 })} />
        <Button text={'Set value 100'} onButtonClick={() => actions.setCounter({ counter: 100 })} />
        <Button text={'Async increase'} isDisabled={state.loading} onButtonClick={() => actions.asyncIncrease()} />
        <Button text={'Async error'} isDisabled={state.loading} onButtonClick={handleError} />
      </div>
    </div>
  );
};
