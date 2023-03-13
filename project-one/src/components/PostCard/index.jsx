import React from "react";
import "./styles.css";

export const PostCard = ({ cover, title, id, body }) => (
  <div className="post" key={id}>
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} - {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);
