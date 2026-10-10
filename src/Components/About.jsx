import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="home-work-header">
          <div className="editorial-border"></div>

          <div className="work-header-content">
            <h2 className="work-section-title">
              About <span className="muted-text">me</span>
            </h2>
            <span className="bracket-tag desktop-only">[ Background & Services ]</span>
          </div>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="about-editorial-grid">
          {/* Left Column Text */}
          <div className="about-left-text">
            <p className="about-lead">
              I'm a full-stack software engineer and web developer. I enjoy combining clean engineering 
              with attention to detail to create digital experiences that are visually striking, 
              scalable, and intuitive.
            </p>
            <p className="about-sublead">
              I focus on building production e-commerce platforms, custom PHP & RESTful API backends, 
              and integrating modern Generative AI capabilities like Google Gemini 2.5 Flash.
            </p>
          </div>

          {/* Right Column Services & Metadata */}
          <div className="about-right-services">
            {/* Service 01 */}
            <div className="service-block">
              <div className="editorial-border"></div>
              <div className="service-header">
                <span className="font-mono bracket-tag">[ 01 ]</span>
                <h3 className="service-title">Full-Stack Development</h3>
              </div>
              <p className="service-desc">
                I build web applications from scratch using PHP, React, Node.js, Express, and MongoDB/MySQL. 
                I bring storefronts to life with interactive shopping carts, product drops, and responsive interfaces.
              </p>
            </div>

            {/* Service 02 */}
            <div className="service-block">
              <div className="editorial-border"></div>
              <div className="service-header">
                <span className="font-mono bracket-tag">[ 02 ]</span>
                <h3 className="service-title">Backend & AI Architecture</h3>
              </div>
              <p className="service-desc">
                I engineer RESTful API endpoints, server-side routing, financial PayPal checkout flows in Laravel, 
                and dynamic generative AI engines returning structured JSON daily guidance.
              </p>
            </div>

            {/* Academic & Credits Metadata */}
            <div className="about-meta-grid">
              <div className="meta-block">
                <span className="bracket-tag">[ Education ]</span>
                <p className="meta-value">B.Tech in Computer Science & Engg.</p>
                <p className="meta-sub">Chandigarh Engineering College (2021-2025)</p>
              </div>

              <div className="meta-block">
                <span className="bracket-tag">[ Location ]</span>
                <p className="meta-value">India</p>
                <p className="meta-sub">[ Gurgaon / Haryana ]</p>
              </div>

              <div className="meta-block">
                <span className="bracket-tag">[ Social ]</span>
                <p className="meta-value font-mono">
                  <a href="https://linkedin.com/in/robin-puri" target="_blank" rel="noopener noreferrer" className="link-line">
                    LinkedIn
                  </a>
                  {" | "}
                  <a href="https://isitrobin.com" target="_blank" rel="noopener noreferrer" className="link-line">
                    Portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
