import React, { useContext } from 'react';
import { AppMenuContextData } from '../contexts/AppMenuContext/index';

export function AppMenu() {
  const MenuContext = useContext(AppMenuContextData);
  return (
    <div className="AppMenu">
      <span onClick={() => MenuContext.changeLeftMenuItem()}>{MenuContext.menuState.menuNavLeftItem}</span>
      <span onClick={() => MenuContext.changeCenterMenuItem()}>{MenuContext.menuState.menuNavCenterItem}</span>
      <span onClick={() => MenuContext.changeRightMenuItem()}>{MenuContext.menuState.menuNavRightItem}</span>
    </div>
  );
}
