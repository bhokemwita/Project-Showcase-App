import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="topbar">
      <NavLink className="brand" to="/">
        Maison Market
      </NavLink>
      <nav className="main-nav">
        <NavLink className="nav-link" to="/ProductPage">Products</NavLink>
        <NavLink className="nav-link" to="/Admin" end>Admin</NavLink>
        <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
