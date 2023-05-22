import * as types from './types';

export const postsReducer = (postState, postAction) => {
  console.log('postAction.type', postAction.type);
  switch (postAction.type) {
    case types.POSTS_SUCCESS: {
      return { ...postState, posts: postAction.payload };
    }
  }
  console.log('postAction.type not found');
  return postState;
};
