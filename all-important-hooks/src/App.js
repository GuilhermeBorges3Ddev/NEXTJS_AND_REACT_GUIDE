import React, { useMemo, useState, useEffect, Component, useCallback } from 'react';
import P from 'prop-types';
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

export default function AppRouter(props) {
  if (props.type === 'function') return <AppFunction />;
  return <AppClass />;
}

function AppFunction() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const incrementUpdateFunction = useCallback((num) => {
    setCounter((oldCounter) => oldCounter + num);
  }, []);
  /*
    componentDidUpdate - execute a code every component update
    useEffect(() => {
      alert('componentDidUpdate');
    });
  */
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
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  const incrementButtonCall = useMemo(() => {
    return <IncrementButton incrementUpdateFunction={incrementUpdateFunction} />;
  }, [incrementUpdateFunction]);

  return (
    <div id="wrapperAll" className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <h1>Counter value: {counter}</h1>
      {incrementButtonCall}
      <hr id="counterSeparator" />
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Posts key={post.id} post={post} />);
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
