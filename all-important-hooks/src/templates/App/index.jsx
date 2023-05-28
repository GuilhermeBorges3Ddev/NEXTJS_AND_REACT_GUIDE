import React, { Component, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useContext } from 'react';
import P from 'prop-types';

import { AppMenu } from '../../components/AppMenu';
import { AppWrapper } from '../../components/AppWrapper';
import { IncrementButton } from '../../components/IncrementButton';
import { Posts } from '../../components/Posts';
import { AppMenuProvider } from '../../contexts/AppMenuProvider';
import { AppContext } from '../../contexts/AppProvider';
import { PostsProvider } from '../../contexts/PostsProvider';
import * as Actions from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { useInterval } from '../../hooks/useInterval';
import logo from '../../logo.svg';

import './styles.css';

AppRouter.defaultProps = {
  type: 'function',
};

AppRouter.propTypes = {
  type: P.string.isRequired,
};

export default function AppRouter(props) {
  if (props.type === 'function')
    return (
      <PostsProvider>
        <AppFunction />
      </PostsProvider>
    );
  return <AppClass />;
}

function AppFunction() {
  const [counter, setCounter] = useState(0);
  const [displayTime, setDisplayTime] = useState(1000);

  const [value, setValue] = useState('');

  const input = useRef(null);
  const componentDidUpdateTimes = useRef(0);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const incrementUpdateFunction = useCallback((num) => {
    setCounter((oldCounter) => oldCounter + num);
  }, []);
  /*
    componentDidMount - execute only when component mount
    useEffect(() => {
      document.querySelector('#wrapperAll').style.background = 'red';
    }, []);
  */
  useEffect(() => {
    document.querySelector('#wrapperAll').classList.add('apply-shake');
    //The cleanup above is the componentWillUnmount
    return () => {
      setTimeout(() => {
        document.querySelector('#wrapperAll').classList.remove('apply-shake');
      }, 1000);
    };
  }, [counter]);

  useEffect(() => {
    componentDidUpdateTimes.current++;
    if (componentDidUpdateTimes && componentDidUpdateTimes > 1000)
      console.warn(`Page was rendered ${componentDidUpdateTimes.current} times`);
  });

  useEffect(() => {
    if (value?.length > 0) input.current.focus();
  }, [value]);

  useEffect(() => {
    Actions.loadPosts(postsDispatch);
    console.log('called');
  }, [postsDispatch]);

  const incrementButtonCall = useMemo(() => {
    return <IncrementButton incrementUpdateFunction={incrementUpdateFunction} />;
  }, [incrementUpdateFunction]);

  const handleInputTitleClick = (inputTitleValue) => {
    setValue(inputTitleValue);
  };

  useInterval(() => setDisplayTime((lastTimeValue) => lastTimeValue + 1000), 1000);

  return (
    <div id="wrapperAll" className="App">
      <AppMenuProvider>
        <AppMenu />
      </AppMenuProvider>
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <h1>Counter value: {counter}</h1>
      <h2>The application is running by: {displayTime / 1000} seconds</h2>
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

class AppClass extends Component {
  state = {
    counter: 0,
    reverse: false,
  };
  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };
  handleIncrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  render() {
    const { counter, reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <h1>Counter: {counter}</h1>
          <button onClick={() => this.handleClick()} type="button">
            Reverse logo
          </button>
          <br />
          <button onClick={() => this.handleIncrement()} type="button">
            Increment counter
          </button>
        </header>
      </div>
    );
  }
}
