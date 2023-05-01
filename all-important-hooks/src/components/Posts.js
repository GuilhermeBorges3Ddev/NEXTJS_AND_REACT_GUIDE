import React from 'react';
import P from 'prop-types';

export const Posts = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

Posts.defaultProps = {
  post: [],
};
