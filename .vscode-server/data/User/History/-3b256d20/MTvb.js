import React from "react";
import PostsApp from "./PostsApp";
import PostsJson from "./PostsJson";
import CommentsList from "./comments/CommentsList";
import Header from "./Header/Header";
import {  Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./comments/Router/AppRouter";

import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    /*
      route работает так: в ссылке в верху страницы через слеш плюс название то есть path 
      я указыаю на какую стрницу мне нужно перейти, но это не удобно поэтому мы используем навбар 
      куда передаем ссылки и при клике нас перекидывает на  нужную нам страницу.
      */
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
