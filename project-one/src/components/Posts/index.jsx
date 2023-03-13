import React from "react";
import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((postItem) => (
      <PostCard
        key={postItem.key}
        cover={postItem.cover}
        title={postItem.title}
        id={postItem.id}
        body={postItem.body}
      />
    ))}
  </div>
);
