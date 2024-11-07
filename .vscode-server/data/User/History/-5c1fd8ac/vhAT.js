import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import About from "./pages/About";
import Posts from "./pages/Posts";

const App = () => {
  return (
  <BrowserRouter>
  <div className="navbar">
    <div className="navbar__links">
      <a href="/about"></a>
    </div>
  </div>
  <Routes>
  <Route path = "/about" element={<About/>}/>
  <Route path = "/posts" element={<Posts/>}/>
  </Routes>
  </BrowserRouter>
)};

export default App;
