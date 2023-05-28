import * as types from './types';

export const postsReducer = (postState, postAction) => {
  switch (postAction.type) {
    case types.POSTS_SUCCESS: {
      return { ...postState, posts: postAction.payload, loading: false };
    }
    case types.POSTS_LOADING: {
      return { ...postState, loading: true };
    }
  }
  return { ...postState };
};
