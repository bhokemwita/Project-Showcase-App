import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🛍️ Admin Portal
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={isActive('/products')}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/add-product" className={isActive('/add-product')}>
              Add Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;