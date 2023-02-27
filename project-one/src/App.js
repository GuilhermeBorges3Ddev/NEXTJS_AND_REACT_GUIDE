import logo from "./logo.svg";
import "./App.css";

const USER_INFO = {
  username: "Admin Hexanderson",
  userIsLogged: false,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {USER_INFO.userIsLogged
            ? `Hello ${USER_INFO.username}`
            : "You're not logged"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
