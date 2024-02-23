import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>SWAPI App</div>
      <nav className={`${classes.nav} ${menuOpen ? classes.open : ''}`}>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <ul>
          <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
          <li><Link to='/planets' onClick={toggleMenu}>Planets</Link></li>
        </ul>
      </nav>
    </header>
  );
}
