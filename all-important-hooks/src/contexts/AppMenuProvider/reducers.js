import { types } from './types';

export const menuReducerFunction = (menuState, menuAction) => {
  switch (menuAction.type) {
    case types.changeLeftItem:
      alert('Left menu item clicked on: ' + menuAction.payload);
      return {
        ...menuState,
        menuNavLeftItem: menuState.menuNavLeftItem.split('').reverse().join(''),
      };
    case types.changeCenterItem:
      alert('Center menu item clicked on: ' + menuAction.payload);
      return {
        ...menuState,
        menuNavCenterItem: menuState.menuNavCenterItem.split('').reverse().join(''),
      };
    case types.changeRightItem:
      alert('Right menu item clicked on: ' + menuAction.payload);
      return {
        ...menuState,
        menuNavRightItem: menuState.menuNavRightItem.split('').reverse().join(''),
      };
  }
  return { ...menuState };
};
