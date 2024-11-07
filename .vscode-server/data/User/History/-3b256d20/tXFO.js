import React from "react";
import PostsApp from "./PostsApp";
import Posts from "./Posts";
import PostsJson from "./PostsJson";
import CommentsList from "./comments/CommentsList";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./style.css"


const App = () => {
  return (
    
      <BrowserRouter>
      <div className="navbar">
        <div className="navbar__Links">
          <Link href="/header">header</a>
          <Link href="/postsApp">postsApp</a>
        </div>
      </div>
      <Routes>
        <Route path="/header" element={<Header/>}/>
        <Route path="/postsApp" element={<PostsApp/>}/>
        <Route path="/postsJson" element={<PostsJson/>}/>
        <Route path="/commentsList" element={<CommentsList/>}/>
      </Routes>
      </BrowserRouter>
  );
};

export default App;
