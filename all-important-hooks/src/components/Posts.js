import React from 'react';
import P from 'prop-types';

export const Posts = ({ post, onClick }) => {
  return (
    <div className="post" key={post.id}>
      <h1 style={{ color: 'darkblue', cursor: 'pointer' }} onClick={() => onClick(post.title)}>
        {post.title}
      </h1>
      <p style={{ color: 'azure' }}>{post.body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: () => {},
};

Posts.defaultProps = {
  post: [],
  onClick: P.func,
};
