import * as types from './types';

export const changeForNewBg = (dispatch) => {
  dispatch({ type: types.CHANGE_FOR_NEW_BACKGROUND });
};

export const returnToOldBg = (dispatch) => {
  dispatch({ type: types.RETURN_TO_OLD_BACKGROUND });
};
