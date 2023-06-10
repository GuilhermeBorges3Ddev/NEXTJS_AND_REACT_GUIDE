import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import SampleProvider from '../../contexts/SampleProvider';
import { changeForNewBg, returnToOldBg } from '../../contexts/SampleProvider/actions';
import { SampleContext } from '../../contexts/SampleProvider/context';
import { useInterval } from '../../hooks/useInterval';
import { useTimer } from '../../hooks/useTimer';
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
        <SampleProvider>
          <AppFunction />
        </SampleProvider>
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
  }, [postsDispatch]);

  const incrementButtonCall = useMemo(() => {
    return <IncrementButton incrementUpdateFunction={incrementUpdateFunction} />;
  }, [incrementUpdateFunction]);

  const handleInputTitleClick = (inputTitleValue) => {
    setValue(inputTitleValue);
  };

  useInterval(() => setDisplayTime((lastTimeValue) => lastTimeValue + 1000), 1000);

  return (
    <div id="wrapperAll" className="App" style={{ background: sampleState.background, color: sampleState.color }}>
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
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
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
