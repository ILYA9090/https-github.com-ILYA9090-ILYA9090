import React from 'react'
import {Link } from "react-router-dom";
import cl from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={cl.navbar}>
        <div className={cl.navbar__Links}>
          <Link to="/header">header</Link>
          <Link to="/postsApp">postsApp</Link>
          <Link to="/postsJson">postsJson</Link>
          <Link to="/commentsList">commentsList</Link>
        </div>
      </div>
  )
}

export default Navbar
