import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./Router/AppRouter";

import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
