import React from "react";

import { BrowserRouter, Route,  Navigate, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AppRouter from "./AppRouter/AppRouter";

const App = () => {
 
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
