import React from 'react'
import {Link } from "react-router-dom";
import cl from "./Navbar.module.css"
const Navbar = () => {
    /*
    ЧТО БЫ ИЗБЕЖАТЬ ПЕРЕРЕНДЕРА СТРАНИЦЫ ПОСЛЕ КАЖДОГО КЛИКА ПО ССЫЛКЕ В НАВБАРЕ МЫ ИСПОЛЬЗУЕИМ 
      КОМПОНЕНТ LINK ВМЕСТЕ С ПРОПСАМИ to вместо обычных тегов <a> и ссылок href
    */
  return (
    <div className={cl.navbar}>
        <div className={cl.navbar__Links}>
          <Link to="/header">header </Link>
          <Link to="/postsApp">postsApp </Link>
          <Link to="/postsJson/:id">postsJson </Link>
          <Link to="/commentsList">commentsList </Link>
        </div>
      </div>
  )
}

export default Navbar
