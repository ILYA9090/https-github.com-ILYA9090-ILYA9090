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
      /*
      ЧТО БЫ ИЗБЕЖАТЬ ПЕРЕРЕНДЕРА СТРАНИЦЫ ПОСЛЕ КАЖДОГО КЛИКА ПО ССЫЛКЕ В НАВБАРЕ МЫ ИСПОЛЬЗУЕИМ 
      КОМПОНЕНТ LINK ВМЕСТЕ С ПРОПСАМИ to вместо обычных тегов <a> и ссылок href

      route работает так: в ссылке в верху страницы через слеш плюс название то есть path 
      я указыаю на какую стрницу мне нужно перейти, но это не удобно поэтому мы используем навбар 
      куда передаем ссылки и при клике нас перекидывает на  нужную нам страницу.
      */
      <BrowserRouter>
      <div className="navbar">
        <div className="navbar__Links">
          <Link to="/header">header</Link>
          <Link to="/postsApp">postsApp</Link>
          <Link to="/postsJson">postsJson</Link>
          <Link to="/commentsList">commentsList</Link>
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
