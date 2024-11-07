import React from "react";

import { BrowserRouter, Route,  Navigate, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App = () => {
  /*
      route работает так: в ссылке в верху страницы через слеш плюс название то есть path 
      я указыаю на какую стрницу мне нужно перейти, но это не удобно поэтому мы используем навбар 
      куда передаем ссылки и при клике нас перекидывает на  нужную нам страницу.
      */
  return (
    <BrowserRouter>
      <Navbar />
      
    </BrowserRouter>
  );
};

export default App;
