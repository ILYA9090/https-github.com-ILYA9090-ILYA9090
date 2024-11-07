import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import About from "./pages/About";

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
  <Route path = "/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
)};

export default App;
