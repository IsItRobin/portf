import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer">
      <div className="container">
        <div className="editorial-border"></div>

        <div className="footer-content">
          <div className="footer-copyright font-mono">
            <span>©{new Date().getFullYear()} Robin Puri. All rights reserved.</span>
          </div>

          <button onClick={scrollToTop} className="back-top-link link-line">
            <span>[ Back to top ↑ ]</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
