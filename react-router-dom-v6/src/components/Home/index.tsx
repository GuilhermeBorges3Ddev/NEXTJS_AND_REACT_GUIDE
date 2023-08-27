import "./styles.css";

export const Home = () => {
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
    </div>
  );
};
