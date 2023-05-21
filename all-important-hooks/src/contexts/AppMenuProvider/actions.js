import { types } from './types';
const CLICKDATE_FOR_APPMENU_DISPATCHER = new Date().toLocaleString('pt-BR');

export const changeLeftMenuItem = (menuDispatcher) =>
  menuDispatcher({ type: types.changeLeftItem, payload: CLICKDATE_FOR_APPMENU_DISPATCHER });
export const changeCenterMenuItem = (menuDispatcher) =>
  menuDispatcher({ type: types.changeCenterItem, payload: CLICKDATE_FOR_APPMENU_DISPATCHER });
export const changeRightMenuItem = (menuDispatcher) =>
  menuDispatcher({ type: types.changeRightItem, payload: CLICKDATE_FOR_APPMENU_DISPATCHER });
