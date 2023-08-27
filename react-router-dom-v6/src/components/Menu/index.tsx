import { Link } from "react-router-dom";
import "./styles.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Go to post 10</Link>
        </li>
      </ul>
    </nav>
  );
};
