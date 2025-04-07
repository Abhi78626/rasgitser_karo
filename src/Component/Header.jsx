import React from 'react';
import { Link } from 'react-router';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Tech Here</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About us</Link></li>
        </ul>
      </nav>
      <button className="cta-button">Talk An Expert</button>
    </header>
  );
}

export default Header;
