import React, { useContext } from 'react';

import { AppMenuContextData } from '../contexts/AppMenuProvider/context';

export function AppMenu() {
  const MenuContext = useContext(AppMenuContextData);
  return (
    <div className="AppMenu">
      <span onClick={() => MenuContext.changeLeftMenuItem(MenuContext.menuDispatcher)}>
        {MenuContext.menuState.menuNavLeftItem}
      </span>
      <span onClick={() => MenuContext.changeCenterMenuItem(MenuContext.menuDispatcher)}>
        {MenuContext.menuState.menuNavCenterItem}
      </span>
      <span onClick={() => MenuContext.changeRightMenuItem(MenuContext.menuDispatcher)}>
        {MenuContext.menuState.menuNavRightItem}
      </span>
    </div>
  );
}
