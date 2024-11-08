import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./styles/App.css";
import React, { useEffect } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthConext } from "./context/Context";
import { useState } from "react";

const App = (props) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {

  }, [])
  
  return (
    <AuthConext.Provider value={{isAuth, setIsAuth}}>
  <BrowserRouter>
  <Navbar/>
    <AppRouter/>
  </BrowserRouter>
  </AuthConext.Provider>
)};

export default App;
