import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        background: 'salmon',
        fontWeight: 'bolder',
        fontFamily: 'fantasy',
        letterSpacing: '2px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10vh',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};
