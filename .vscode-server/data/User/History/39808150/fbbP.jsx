import React from 'react'
import {Route, Routes,Navigate} from "react-router-dom";
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router/routeres';
import { useContext } from 'react';
import { AuthConext } from '../context/Context';

const AppRouter = () => {
   const {isAuth, setIsAuth} = useContext(AuthConext);
   console.log(isAuth)
  return (
    isAuth 
    ? 
    <Routes>
      {privateRoutes.map(route => 
        <Route element={<route.element/>} path={route.path}/>
      )}
       <Route path="/*" element={<Navigate to="/posts"replace/>}/>
       </Routes>
       :
       <Routes>
      {publicRoutes.map(route => 
        <Route element={<route.element/>} path={route.path}/>
      )}
      <Route path="/*" element={<Navigate to="login"replace/>}/>
  </Routes>
  )
}

export default AppRouter;
