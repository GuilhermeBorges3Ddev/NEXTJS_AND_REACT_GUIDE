import React, { Component, useEffect, useCallback, useMemo, useRef, useState } from 'react';
import P from 'prop-types';
import { AppWrapper } from './components/AppWrapper';
import { IncrementButton } from './components/IncrementButton';
import { Posts } from './components/Posts';
import logo from './logo.svg';
import './App.css';

AppRouter.defaultProps = {
  type: 'function',
};

AppRouter.propTypes = {
  type: P.string.isRequired,
};

const globalState = {
  title: 'Title of the context',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident corporis dolorum ipsa velit repellat dicta.',
  counter: 0,
};

export const GlobalContext = React.createContext();

export default function AppRouter(props) {
  if (props.type === 'function') return <AppFunction />;
  return <AppClass />;
}

function AppFunction() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const [contextState, setContextState] = useState(globalState);

  const input = useRef(null);
  const componentDidUpdateTimes = useRef(0);

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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    componentDidUpdateTimes.current++;
    console.warn(`Page was rendered ${componentDidUpdateTimes.current} times`);
  });

  useEffect(() => {
    if (value?.length > 0) input.current.focus();
  }, [value]);

  const incrementButtonCall = useMemo(() => {
    return <IncrementButton incrementUpdateFunction={incrementUpdateFunction} />;
  }, [incrementUpdateFunction]);

  const handleInputTitleClick = (inputTitleValue) => {
    setValue(inputTitleValue);
  };

  return (
    <div id="wrapperAll" className="App">
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <h1>Counter value: {counter}</h1>
      {incrementButtonCall}
      <hr className="counterSeparatorOne" />
      <GlobalContext.Provider value={{ contextState, setContextState }}>
        <AppWrapper />
      </GlobalContext.Provider>
      <hr className="counterSeparatorTwo" />
      {useMemo(() => {
        return (
          posts.length > 0 && posts.map((post) => <Posts key={post.id} post={post} onClick={handleInputTitleClick} />)
        );
      }, [posts])}
      {posts.length <= 0 && <p>Posts not loaded yet...</p>}
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
