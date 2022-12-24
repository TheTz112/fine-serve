import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { CgShoppingBag } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className="nav-con">
      <Link to="/">
        <img className="logo" src="/images/logo_header.png" alt="logo" />
      </Link>
      <input type="text" placeholder="What ingredients are you looking for?" />
      <Link to="/Login">Sign In</Link>

      <Link to="/Cart" className="cart-con">
        <CgShoppingBag className="cart" />
        <span className="counter">0</span>
      </Link>
    </div>
  );
};

export default Navbar;
