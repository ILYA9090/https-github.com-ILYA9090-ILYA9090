import CommentsMap from "./CommentsMap";
import InputComments from "./InputComments";
import './commentsStyle.css'
import React from "react";

const CommentsList = () => {
  return (
    <div className="comList">
    <inputComments />
      <CommentsMap />
    </div>
  );
};

export default CommentsList;
