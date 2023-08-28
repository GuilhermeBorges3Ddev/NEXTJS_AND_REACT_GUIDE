import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const RANDOM_POSTS_PAGE: number = Math.floor(Math.random() * (10000 - 1) + 1);
  return (
    <div
      style={{
        marginTop: "20%",
        fontSmooth: "4px",
        fontStyle: "oblique",
      }}
    >
      <h1>About</h1>
      <button
        style={{
          color: "white",
          background: "magenta",
          padding: "1rem",
          marginTop: "3rem",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/posts?page=${RANDOM_POSTS_PAGE}`)}
      >
        Go to Posts into a random page
      </button>
    </div>
  );
};
