import React from "react";
import { PostCard } from "../PostCard";
import "./styles.css";

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
