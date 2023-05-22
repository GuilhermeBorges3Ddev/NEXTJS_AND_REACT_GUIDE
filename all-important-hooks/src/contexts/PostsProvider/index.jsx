import { useReducer } from 'react';
import P from 'prop-types';

import { PostsContext } from './context';
import { dataPosts } from './data';
import { postsReducer } from './reducer';

PostsProvider.propTypes = {
  children: P.node.isRequired,
};

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(postsReducer, dataPosts);
  return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>;
};
