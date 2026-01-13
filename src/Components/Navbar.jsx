import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link
            to="Aboutme"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          > Robin Puri</Link>
       
        </div>

      {/* Navigation Links */}
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link
            to="Aboutme"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="Skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
      </ul>

      {/* Added to redirect to linkdin in future we will add more options */}
      <div className="nav-contact">
  <a
    href="https://www.linkedin.com/in/robin-puri/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    Get in Touch
  </a>
</div>


      {/* Mobile Menu Icon */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
