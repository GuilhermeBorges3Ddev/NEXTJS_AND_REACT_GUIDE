import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Quis dolor officia",
          body: "The body one",
        },
        {
          id: 2,
          title: "Labore ut proident",
          body: "The body two",
        },
        {
          id: 3,
          title: "Laborum aliqua officia",
          body: "The body three",
        },
      ],
    };
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map((postItem) => (
          <div
            key={postItem.id}
            style={{ border: "1px solid black", margin: "1rem 0" }}
          >
            <h1>{postItem.title}</h1>
            <p>{postItem.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
