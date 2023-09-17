import "./styles.css";

export const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <img
        width="88"
        height="88"
        src="https://img.icons8.com/color/48/referee.png"
        alt="referee"
      />
      <br />
      <h1>Ooops... route not found!</h1>
    </div>
  );
};
