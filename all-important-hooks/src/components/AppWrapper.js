import React from 'react';
import { AppHeader } from './AppHeader';
import { AppParagraph } from './AppParagraph';

// eslint-disable-next-line
export function AppWrapper() {
  return (
    <React.Fragment>
      <AppHeader />
      <AppParagraph />
    </React.Fragment>
  );
}
