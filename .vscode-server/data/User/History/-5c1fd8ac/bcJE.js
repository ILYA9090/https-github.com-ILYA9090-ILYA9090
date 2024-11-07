import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

const App = (props) => {
  return (
  <BrowserRouter>
  <Navbar/>
    <AppRouter/>
  </BrowserRouter>
)};

export default App;
