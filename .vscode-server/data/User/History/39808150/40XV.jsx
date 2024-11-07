import React from 'react'
import {Route, Routes,Navigate} from "react-router-dom";
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router/routeres';
const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(route => 
        <Route element={<route.element/>} path={route.path}/>
      )}
      {publicRoutes.map(route => 
        <Route element={<route.element/>} path={route.path}/>
      )}
      <Route path="/*" element={<Navigate to="/posts"replace/>}/>
  </Routes>
  )
}

export default AppRouter;
