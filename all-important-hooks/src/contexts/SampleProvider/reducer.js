import * as types from './types';

export const sampleReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_FOR_NEW_BACKGROUND: {
      return { ...state, background: 'black', color: 'light' };
    }
    case types.RETURN_TO_OLD_BACKGROUND: {
      return { ...state, background: 'lightsteelblue', color: 'black' };
    }
  }
  return { ...state };
};
