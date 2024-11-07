import React from 'react'
import {Route, Routes} from "react-router-dom";
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router/router';
const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => {
        <Route element={<route.element/>} path={route.path} exact={route.exact}/>
      })}
  </Routes>
  )
}

export default AppRouter;
