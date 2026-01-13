import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT - LOGO */}
      <div className="nav-logo">
        <Link
          to="Aboutme"
          smooth
          duration={500}
          spy
          offset={-70}
          activeClass="active"
        >
          Robin Puri
        </Link>
      </div>

      {/* CENTER - NAV LINKS */}
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="Aboutme" smooth duration={500} spy offset={-70} activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth duration={500} spy offset={-70} activeClass="active">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} spy offset={-70} activeClass="active">
            Projects
          </Link>
        </li>
      </ul>

      {/* RIGHT - CONTACT */}
      <div className="nav-contact">
        <a
          href="https://www.linkedin.com/in/robin-puri/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-linkedin"
        >
          Get in Touch
        </a>
      </div>

      {/* MOBILE MENU ICON */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
