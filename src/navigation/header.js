import React, { useState } from 'react';
import "./Header.css"
import { HashLink as Link } from 'react-router-hash-link'; 

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <div className="logo">
            <span>Clour Projects</span>
            </div>
        </Link>

        {/* Burger Icon */}
        <div className={`burger ${showMobileMenu ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className={`bar ${showMobileMenu ? 'open' : ''}`} />
          <div className={`bar ${showMobileMenu ? 'open' : ''}`} />
          <div className={`bar ${showMobileMenu ? 'open' : ''}`} />
        </div>

        {/* Mobile Menu */}
        <ul className={`navLinks ${showMobileMenu ? 'showMenu' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
