import { NavLink } from "react-router";
// import React from 'react'

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">COMPANY/TITLE</div>
      <nav className="main-nav">
        <NavLink className="nav-link" to="/ProductPage">Products</NavLink>
        <NavLink className="nav-link" to="/Admin" end>Admin</NavLink>
        <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
      </nav>
    </header>
  )
}

export default Navbar