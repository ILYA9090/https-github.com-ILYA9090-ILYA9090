import React from "react";
import PostItem from "./PostItem";
const PostList = ({posts1, title, remove}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {title}
      </h1>
      {posts1.map((post, index) => (
        <PostItem remove={remove} number={index + 1 }post={post} key={post.id} />
      ))}
    </div>
  );
};
export default PostList;
