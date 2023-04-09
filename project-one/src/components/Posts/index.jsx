import React from 'react';
import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

const idRandSeed = Math.floor(Math.random() * 1000) + 1;

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((postItem) => (
      <PostCard
        key={postItem.id + idRandSeed}
        cover={postItem.cover}
        title={postItem.title}
        id={postItem.id}
        body={postItem.body}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
