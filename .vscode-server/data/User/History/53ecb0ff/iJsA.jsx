import React, { useCallback } from "react";

const Button = ({post, setPost, children , ...props}) => {
 const enter = (e) => {
    e.preventDefault();
    const  newPost = "";
    setPost(...post, newPost);
  
  }

  return (
    <div {...props}className="button" type="button">
      <h1>{post}</h1>
      <button onClick={enter}>{children}</button>
    </div>
  );
};

export default Button;
