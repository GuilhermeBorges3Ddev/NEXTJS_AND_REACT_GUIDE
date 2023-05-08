import React, { useContext } from 'react';
import { GlobalContext } from '../App';

// eslint-disable-next-line
export function AppParagraph() {
  const AppHeaderStyles = {
    paddingBottom: '1rem',
    margin: '0',
    fontWeight: '0.75rem',
    backgroundColor: '#122121',
    color: 'white',
  };
  const contextValue = useContext(GlobalContext);
  return (
    <p style={AppHeaderStyles}>
      <u>Context Body</u>: {contextValue.body}
    </p>
  );
}
