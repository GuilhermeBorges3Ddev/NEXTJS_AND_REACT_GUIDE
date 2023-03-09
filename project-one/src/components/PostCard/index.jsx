import React from "react";

export const PostCard = ({ cover, title, id, body }) => (
  <div className="post" key={id}>
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
