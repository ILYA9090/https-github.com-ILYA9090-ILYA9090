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
      // ЧТО БЫ ИЗБЕЖАТЬ ПЕРЕРЕНДЕРА СТРАНИЦЫ ПОСЛЕ КАЖДОГО КЛИКА ПО ССЫЛКЕ В НАВБАРЕ МЫ ИСПОЛЬЗУЕИМ КОМПОНЕНТ LINK ВМЕСТЕ С ПРОПСАМИ to вместо обычных тегов <a> и ссылок href
      <BrowserRouter>
      <div className="navbar">
        <div className="navbar__Links">
          <Link to="/header">header</Link>
          <Link to="/postsApp">postsApp</Link>
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
