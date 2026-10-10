import React from "react";
import { Link } from "react-scroll";
import { ArrowRightIcon } from "./Icons";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Giant Display Name Banner */}
        <div className="hero-title-wrapper">
          <h1 className="hero-giant-title">ROBIN PURI</h1>
        </div>

        {/* Subtitle Lines */}
        <div className="hero-subtitle-block">
          <h2 className="hero-subtitle-line">
            Full-Stack Software Engineer & Web Developer
          </h2>
          <h3 className="hero-subtitle-line muted">
            based in India <span className="bracket-tag">[ Gurgaon / Haryana ]</span>
          </h3>
        </div>

        {/* Matthieu Givelet Editorial Infos Box */}
        <div className="infos-box">
          <div className="editorial-border"></div>
          
          <div className="infos-box-left">
            <span className="bracket-tag">[ Approach ]</span>
          </div>

          <div className="infos-box-right">
            <div className="infos-box-text">
              <p className="editorial-numb-wrap">
                <span className="editorial-numb">01</span>
                Always looking for simple, thoughtful solutions that fit the project and feel good to use.
              </p>
              <p className="hero-text-secondary">
                Specializing in PHP e-commerce systems, MERN stack web applications, RESTful APIs, and Generative AI integrations.
              </p>
            </div>

            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              className="cta-text link-line"
            >
              <ArrowRightIcon size={16} />
              <span>More about me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
