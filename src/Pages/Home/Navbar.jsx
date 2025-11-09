import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener(`resize`, handleResize);

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar-logo">
        <img src="./img/KBLOGO.PNG" alt="..." />
      </div>

      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li> 
            <Link onClick={closeMenu} to="heroSection" smooth={true} duration={500} className="navbar--content">Home</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="Skills" smooth={true} duration={500} className="navbar--content">Portfolio</Link>
            </li>
          
          <li>
            <Link onClick={closeMenu} to="AboutMe" smooth={true} duration={500} className="navbar--content">About</Link>
          </li>

          <li>
            <Link onClick={closeMenu} to="Resume" smooth={true} duration={500} className="navbar--content"> Resume</Link>
          </li>
           
        </ul>
      </div>

      <Link onClick={closeMenu} to="ContactMe" smooth={true} duration={500} className="btn btn-outline-primary">Contact Me</Link>


    </nav>
  );
}
