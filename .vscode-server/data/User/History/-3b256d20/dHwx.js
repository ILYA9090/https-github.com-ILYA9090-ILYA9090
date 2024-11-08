import React from "react";
import PostsApp from "./PostsApp";
import Posts from "./Posts";
import PostsJson from "./PostsJson";
import CommentsList from "./comments/CommentsList";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
      <Header/>
      <PostsApp />
      <PostsJson/>
      <CommentsList/>
      </Routes>
      </BrowserRouter>
  );
};

export default App;
