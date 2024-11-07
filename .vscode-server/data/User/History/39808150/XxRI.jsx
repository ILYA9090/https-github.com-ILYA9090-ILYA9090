import React from 'react'
import {Route, Routes,Navigate} from "react-router-dom";
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router/routeres';
const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => 
        <Route element={<route.element/>} path={route.path}/>
      )}
      <Route path="/*" element={<Navigate to="/error"replace/>}/>
  </Routes>
  )
}

export default AppRouter;
