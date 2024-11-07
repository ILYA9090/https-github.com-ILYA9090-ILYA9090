import React from "react";
import PostItem from "./PostItem";
const PostList = ({postss, title}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {title}
      </h1>
      {postss.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
export default PostList;
