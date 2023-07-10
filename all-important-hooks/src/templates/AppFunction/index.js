import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { AppMenu } from '../../components/AppMenu';
import { AppWrapper } from '../../components/AppWrapper';
import { DisplayedInput } from '../../components/DisplayedInput';
import { IncrementButton } from '../../components/IncrementButton';
import { Posts } from '../../components/Posts';
import { AppMenuProvider } from '../../contexts/AppMenuProvider';
import { AppContext } from '../../contexts/AppProvider';
import * as Actions from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { changeForNewBg, returnToOldBg } from '../../contexts/SampleProvider/actions';
import { SampleContext } from '../../contexts/SampleProvider/context';
import { useInterval } from '../../hooks/useInterval';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useTimer } from '../../hooks/useTimer';

function AppFunction() {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [displayTime, setDisplayTime] = useState(1000);

  const input = useRef(null);
  const componentDidUpdateTimes = useRef(0);
  const sampleContext = useContext(SampleContext);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  const { sampleState, sampleDispatcher } = sampleContext;

  const incrementUpdateFunction = useCallback((num) => {
    setCounter((oldCounter) => oldCounter + num);
  }, []);

  /*
    componentDidMount - execute only when component mount
    useEffect(() => {
      document.querySelector('#wrapperAll').style.background = 'red';
    }, []);
  */
  useLayoutEffect(() => {
    document.querySelector('#wrapperAll').classList.add('apply-shake');
    //The cleanup above is the componentWillUnmount
    return () => {
      setTimeout(() => {
        if (document.querySelector('#wrapperAll')?.classList)
          document.querySelector('#wrapperAll').classList.remove('apply-shake');
      }, 2000);
    };
  }, [counter]);

  useEffect(() => {
    componentDidUpdateTimes.current++;
    if (componentDidUpdateTimes && componentDidUpdateTimes > 1000)
      console.warn(`Page was rendered ${componentDidUpdateTimes.current} times`);
  });

  useEffect(() => {
    if (value?.length > 0 && input?.current) input.current.focus();
  }, [value]);

  useEffect(() => {
    Actions.loadPosts(postsDispatch);
  }, [postsDispatch]);

  const incrementButtonCall = useMemo(() => {
    return <IncrementButton incrementUpdateFunction={incrementUpdateFunction} />;
  }, [incrementUpdateFunction]);

  const displayedInputCall = useMemo(() => {
    return <DisplayedInput value={value} setValue={setValue} ref={input} />;
  }, [value]);

  const handleInputTitleClick = (inputTitleValue) => {
    setValue(inputTitleValue);
  };

  useInterval(() => setDisplayTime((lastTimeValue) => lastTimeValue + 1000), 1000);

  return (
    <div
      id="wrapperAll"
      className="App"
      style={{
        background: sampleState.background,
        color: sampleState.color,
        overflowX: useMediaQuery('(min-width: 1200px)') ? 'hidden' : 'scroll',
      }}
    >
      <AppMenuProvider>
        <AppMenu />
      </AppMenuProvider>
      <div>
        <button
          style={{ marginRight: '10px', background: 'blue', color: 'white' }}
          onClick={() => returnToOldBg(sampleDispatcher)}
        >
          Light theme
        </button>
        <button
          style={{ marginRight: '10px', background: 'black', color: 'white' }}
          onClick={() => changeForNewBg(sampleDispatcher)}
        >
          Dark theme
        </button>
      </div>
      {displayedInputCall}
      <h1 style={{ color: 'antiquewhite' }}>Counter value: {counter}</h1>
      <h2 style={{ color: 'antiquewhite' }}>
        The application is running by:
        <br />
        <i>
          <b>{useTimer(displayTime / 1000)}</b>
        </i>
      </h2>
      {incrementButtonCall}
      <hr className="counterSeparatorOne" />
      <AppContext>
        <AppWrapper />
      </AppContext>
      <hr className="counterSeparatorTwo" />
      {useMemo(() => {
        return (
          postsState.posts.length > 0 &&
          postsState.posts.map((post) => <Posts key={post.id} post={post} onClick={handleInputTitleClick} />)
        );
      }, [postsState])}
      {postsState.loading && <p>Posts not loaded yet...</p>}
    </div>
  );
}

export default AppFunction;
