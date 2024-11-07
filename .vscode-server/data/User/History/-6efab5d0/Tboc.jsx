import {Link, Route, Routes, Redirect } from "react-router-dom";
import React from "react";
import MyButton from "../button/MyButton";
import { AuthConext } from "../../../context/Context";
import { useContext } from "react";
const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthConext)
  return (
    <div className="navbar">
      <MyButton>
        выйти
      </MyButton>
    <div className="navbar__links">
      <Link to="/about">О сайте</Link>
      <Link to="/posts">Посты</Link>
    </div>
  </div>
  )
}

export default Navbar;