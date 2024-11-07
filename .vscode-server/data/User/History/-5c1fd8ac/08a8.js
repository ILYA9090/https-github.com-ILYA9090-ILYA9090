import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthConext } from "./context/Context";

const App = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthConext.Provider value={{}}>
  <BrowserRouter>
  <Navbar/>
    <AppRouter/>
  </BrowserRouter>
  </AuthConext.Provider>
)};

export default App;
