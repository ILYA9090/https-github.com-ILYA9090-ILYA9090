import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__Links">
          <Link to="/header">header</Link>
          <Link to="/postsApp">postsApp</Link>
          <Link to="/postsJson">postsJson</Link>
          <Link to="/commentsList">commentsList</Link>
        </div>
      </div>
  )
}

export default Navbar
