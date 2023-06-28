import { Children, cloneElement } from 'react';

const AppFunctionStylesObject = {
  style: {
    fontSize: '60px',
  },
};

export default function AppFunctionStylesWrapper({ children }) {
  return Children.map(children, (child) => {
    const childModify = cloneElement(child, { style: { ...AppFunctionStylesObject.style } });
    return childModify;
  });
}
