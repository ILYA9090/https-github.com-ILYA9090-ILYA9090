import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

const App = (props) => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Route path="*" element={<Navigate to="/posts"replace/>}></Route>
    <AppRouter/>
  </BrowserRouter>
)};

export default App;
