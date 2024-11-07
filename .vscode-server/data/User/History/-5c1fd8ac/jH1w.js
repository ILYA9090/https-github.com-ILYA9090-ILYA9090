import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Posts from "./pages/Posts";
const App = (props) => {
  return (
  <BrowserRouter>
  <Navbar pth="/posts" el={<Posts/>}/>
    <AppRouter/>
  </BrowserRouter>
)};

export default App;
