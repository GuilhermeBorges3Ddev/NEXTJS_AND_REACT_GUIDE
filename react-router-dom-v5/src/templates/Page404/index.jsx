/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Page404 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [secondsToBeRedirect, setSecondsToBeRedirect] = useState(10);
  useEffect(() => {
    if (secondsToBeRedirect > 0)
      setTimeout(() => setSecondsToBeRedirect((lastTime) => --lastTime), 1000);
    else history.push('/');
  }, [secondsToBeRedirect, history]);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indianred',
        color: 'white',
        height: '90vh',
      }}
    >
      <h1
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100vw',
          height: '20vh',
        }}
      >
        <span style={{ fontSize: '3rem', width: '100%', textAlign: 'center' }}>
          &#128071;
        </span>
        <p style={{ width: '100%', textAlign: 'center' }}>
          Error 404 - Page not found
        </p>
        <p style={{ width: '100%', textAlign: 'center' }}>
          YOU WILL BE REDIRECT TO HOME PAGE IN {secondsToBeRedirect}...
        </p>
      </h1>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          border: '5px dashed white',
          padding: '2rem',
        }}
      >
        <span style={{ width: '100%', textAlign: 'center' }}>
          <u>We have only the following routes:</u>
        </span>{' '}
        <span style={{ width: '100%', textAlign: 'center', color: 'purple' }}>
          /
        </span>
        <span style={{ width: '100%', textAlign: 'center', color: 'purple' }}>
          /products/some-category
        </span>{' '}
        <span style={{ width: '100%', textAlign: 'center', color: 'purple' }}>
          /products/some-category/some-id
        </span>{' '}
        <span style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
          <u>And you've typed the following route:</u>
        </span>{' '}
        <span style={{ width: '100%', textAlign: 'center', color: 'purple' }}>
          {pathname}
        </span>{' '}
      </h2>
    </div>
  );
};
