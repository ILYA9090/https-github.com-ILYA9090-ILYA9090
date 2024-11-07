import React from 'react'
import { BrowserRouter,Route, Routes} from "react-router-dom";
const AppRouter = () => {
  return (
    <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  )
}

export default AppRouter
