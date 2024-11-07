import React, { useContext } from "react";
import Header from "../Header/Header";
import PostsApp from "../PostsApp";
import PostsJson from "../PostsJson";
import CommentsList from "../comments/CommentsList";
import PostsComment from "../PostsComment";
import Login from "../Pages/Login";
import { Route, Navigate, Routes, IndexRoute } from "react-router-dom";
import ErrorPath from "../Pages/ErrorPath";
import UserContext from "../Context/context";
const AppRouter = () => {
  /*
      route работает так: в ссылке в верху страницы через слеш плюс название то есть path 
      я указыаю на какую стрницу мне нужно перейти, но это не удобно поэтому мы используем навбар 
      куда передаем ссылки и при клике нас перекидывает на  нужную нам страницу.
      нижний роут отвечает за редирект на странмцу хеадер если адресс введен не корректно(вместо несуществуюзей страницы кидает в хеадер)
      */

  const { authorization } = useContext(UserContext);
  return authorization ? (
    <Routes>
      <Route path="postsComment/:id" element={<PostsComment />} />
      <IndexRoute/>
      <Route path="/header" element={<Header />} />
      <Route path="/postsApp" element={<PostsApp />} />
      <Route path="/postsJson" element={<PostsJson />} />
      <Route path="/commentsList" element={<CommentsList />} />
      <Route path="/error" element={<ErrorPath />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Navigate to="/Login" replace />} />
    </Routes>
  );
};

export default AppRouter;
