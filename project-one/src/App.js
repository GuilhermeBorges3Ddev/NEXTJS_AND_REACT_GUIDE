import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const USER_INFO = {
  username: "Admin Hexanderson",
  userIsLogged: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Guilherme S. Borges",
      counter: 1,
    };
  }
  handleParagraphClick() {
    this.setState({
      name: "Paragraph clicked, name deleted and changed to this phrase",
    });
  }
  handleLinkClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {USER_INFO.userIsLogged
              ? `Hello ${USER_INFO.username}`
              : "You're not logged"}
          </p>
          <p onClick={() => this.handleParagraphClick()}>Author: {name}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              this.handleLinkClick();
              alert(`Counter of link clicks: ${counter}`);
            }}
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
