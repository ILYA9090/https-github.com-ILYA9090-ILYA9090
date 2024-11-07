import CommentsMap from "./CommentsMap";
import InputComments from "./InputComments";
import './commentsStyle.css'
import React from "react";

const CommentsList = () => {
  return (
    <div className>
    <InputComments />
      <CommentsMap />
    </div>
  );
};

export default CommentsList;
