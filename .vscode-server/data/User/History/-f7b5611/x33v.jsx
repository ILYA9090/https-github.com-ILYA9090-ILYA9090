import React from "react";
import Header from 'src/components/Header/Header.jsx'
import PostsApp from 'src/components/PostsApp.jsx'
import PostsJson from 'src/components/PostsJson.jsx'
import CommentsList from 'src/components/comments/CommentsList.jsx'
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    /*
      route работает так: в ссылке в верху страницы через слеш плюс название то есть path 
      я указыаю на какую стрницу мне нужно перейти, но это не удобно поэтому мы используем навбар 
      куда передаем ссылки и при клике нас перекидывает на  нужную нам страницу.
      */
  return (
    <div>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/postsApp" element={<PostsApp />} />
        <Route path="/postsJson" element={<PostsJson />} />
        <Route path="/commentsList" element={<CommentsList />} />
        <Route path="*" element={<Navigate to="/header" replace />} />
      </Routes>
    </div>
  );
};


export default AppRouter;