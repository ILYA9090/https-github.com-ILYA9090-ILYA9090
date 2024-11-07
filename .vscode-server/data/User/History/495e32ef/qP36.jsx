import React from "react";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1. JavaScript</strong>
        <div>JavaScript - это мой любимый язык программирования.</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};
export default PostItem;