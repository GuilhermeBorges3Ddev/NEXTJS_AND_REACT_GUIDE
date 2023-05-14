import React, { Component, useEffect, useCallback, useMemo, useReducer, useRef, useState } from 'react';
import P from 'prop-types';
import { AppContext } from './contexts/AppContext';
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

export default function AppRouter(props) {
  if (props.type === 'function') return <AppFunction />;
  return <AppClass />;
}

function AppFunction() {
  const MENU_STATE = {
    menuNavLeftItem: 'Search',
    menuNavCenterItem: 'Context Counter',
    menuNavRightItem: 'Items from API',
  };

  const CLICKDATE_FOR_APPMENU_DISPATCHER = new Date().toLocaleString('pt-BR');

  const menuReducerFunction = (menuState, menuAction) => {
    switch (menuAction.type) {
      case 'changeLeftItem':
        alert('Left menu item clicked on: ' + menuAction.payload);
        return {
          ...menuState,
          menuNavLeftItem: menuState.menuNavLeftItem.split('').reverse().join(''),
        };
      case 'changeCenterItem':
        alert('Center menu item clicked on: ' + menuAction.payload);
        return {
          ...menuState,
          menuNavCenterItem: menuState.menuNavCenterItem.split('').reverse().join(''),
        };
      case 'changeRightItem':
        alert('Right menu item clicked on: ' + menuAction.payload);
        return {
          ...menuState,
          menuNavRightItem: menuState.menuNavRightItem.split('').reverse().join(''),
        };
    }
    return { ...menuState };
  };

  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const [menuState, menuDispatcher] = useReducer(menuReducerFunction, MENU_STATE);

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
      <div className="AppMenu">
        <span onClick={() => menuDispatcher({ type: 'changeLeftItem', payload: CLICKDATE_FOR_APPMENU_DISPATCHER })}>
          {menuState.menuNavLeftItem}
        </span>
        <span onClick={() => menuDispatcher({ type: 'changeCenterItem', payload: CLICKDATE_FOR_APPMENU_DISPATCHER })}>
          {menuState.menuNavCenterItem}
        </span>
        <span onClick={() => menuDispatcher({ type: 'changeRightItem', payload: CLICKDATE_FOR_APPMENU_DISPATCHER })}>
          {menuState.menuNavRightItem}
        </span>
      </div>
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <h1>Counter value: {counter}</h1>
      {incrementButtonCall}
      <hr className="counterSeparatorOne" />
      <AppContext>
        <AppWrapper />
      </AppContext>
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
