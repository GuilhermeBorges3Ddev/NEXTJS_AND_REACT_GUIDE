import { useLocation } from "react-router-dom";

export const Home = () => {
  const { state } = useLocation();
  return (
    <div
      style={{
        marginTop: "20%",
        fontSmooth: "4px",
        fontStyle: "oblique",
      }}
    >
      <h1 style={{ textDecoration: "line-through" }}>
        You're not welcome to the home page!
      </h1>
      <h1 style={{ textDecoration: "underline wavy blue 5px" }}>
        You're welcome to the home page!
      </h1>
      {state && (
        <p style={{ marginTop: "5%" }}>You accessed these page from the Link</p>
      )}
    </div>
  );
};
