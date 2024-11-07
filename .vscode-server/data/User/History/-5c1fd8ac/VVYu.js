import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path = "/about" element={<About/>}/>
  <Route path = "/posts" element={<Posts/>}/>
  </Routes>
  </BrowserRouter>
)};

export default App;
