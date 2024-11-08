import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";
import CSSTransition from "react-transition-group";
const PostList = ({ posts1, title, remove }) => {
  if (!posts1.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup >
      {posts1.map((post, index) => 
      <CSSTransition
      key={id}
      
      timeout={500}
      classNames="item"
      >
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
        </CSSTransition>
      )}
      </TransitionGroup>
    </div>
  )
};
export default PostList;
