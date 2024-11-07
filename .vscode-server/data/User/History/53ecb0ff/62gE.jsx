import React, { useCallback } from "react";

const Button = ({ post, setPost, children }) => {
  setTimeout(() => {const enter = (e) => {
    e.preventDefault();
    const newPost = "";
    setPost(...post, newPost);
  }
  }, 5000);

  return (
    <div className="button" type="button">
      <div>{post}</div>
      <button onClick={enter}>{children}</button>
    </div>
  );
};

export default Button;
