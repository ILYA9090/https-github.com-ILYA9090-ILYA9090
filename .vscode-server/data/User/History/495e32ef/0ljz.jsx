import React from "react";

const PostItem = (props) => {
   
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.posttitle}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};
export default PostItem;