import React from "react";

const PostItem = ({post : {title, body}}) => {
   
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}. {title}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};
export default PostItem;