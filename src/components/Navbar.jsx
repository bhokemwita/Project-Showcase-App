import { NavLink } from "react-router"; 

<header className="topbar">
          <div className="brand">COMPANY/TITLE</div>
          <nav className="main-nav">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </nav>
        </header>