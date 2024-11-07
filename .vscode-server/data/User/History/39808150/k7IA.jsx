import React from 'react'
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import About from '../pages/About';
const AppRouter = (props) => {
  return (
    <Routes>
    <Route path={pth} element={el}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  )
}

export default AppRouter;
