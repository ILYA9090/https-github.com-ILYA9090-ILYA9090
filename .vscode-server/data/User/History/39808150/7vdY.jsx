import React from 'react'
import {Route, Routes} from "react-router-dom";
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
const AppRouter = () => {
  return (
    <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/PostIdPage" element={<PostIdPage/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  )
}

export default AppRouter;
