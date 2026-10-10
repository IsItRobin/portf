import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ArrowRightIcon } from "./Icons";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        {/* Brand Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-100}
          className="nav-logo"
        >
          <span className="logo-copyright">©</span>
          <span className="logo-name">RobinPuri</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-wrapper desktop-only">
          <ul className="nav-links">
            <li>
              <Link
                to="work"
                smooth={true}
                duration={600}
                spy={true}
                offset={-100}
                activeClass="active"
                className="nav-link link-line"
              >
                Work <span className="nav-count">(4)</span>
              </Link>
            </li>

            <li>
              <Link
                to="experience"
                smooth={true}
                duration={600}
                spy={true}
                offset={-100}
                activeClass="active"
                className="nav-link link-line"
              >
                Experience <span className="nav-count">(2)</span>
              </Link>
            </li>

            <li>
              <Link
                to="archive"
                smooth={true}
                duration={600}
                spy={true}
                offset={-100}
                activeClass="active"
                className="nav-link link-line"
              >
                Archive <span className="nav-count">(5)</span>
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                offset={-100}
                activeClass="active"
                className="nav-link link-line"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Action Controls */}
        <div className="nav-actions desktop-only">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="theme-toggle-btn"
            title="Toggle theme"
          >
            <span className="bracket-tag">
              [{isDarkMode ? "Light Mode" : "Dark Mode"}]
            </span>
          </button>

          <a
            href="mailto:purirobin18@gmail.com"
            className="nav-cta link-line"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="burger-button mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>{isMobileMenuOpen ? "[ Close ]" : "[ Menu ]"}</span>
        </button>

        {/* Mobile Fullscreen Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-header">
              <span className="bracket-tag">[ Navigation ]</span>
              <button
                className="theme-toggle-btn"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                [{isDarkMode ? "Light" : "Dark"}]
              </button>
            </div>

            <ul className="mobile-menu-links">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work (4)
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience (2)
                </Link>
              </li>
              <li>
                <Link
                  to="archive"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Archive (5)
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>

            <a
              href="mailto:purirobin18@gmail.com"
              className="mobile-cta-btn"
            >
              <span>Get in touch</span>
              <ArrowRightIcon size={18} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
