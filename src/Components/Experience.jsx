import React from "react";
import "./Experience.css";

const experiences = [
  {
    num: "01",
    role: "Web Developer Intern",
    company: "Japnaaz Software Solutions",
    period: "March 2026 – Present",
    type: "Internship",
    description:
      "Engineering core storefront features and backend server logic for live commercial web platforms.",
    highlights: [
      "Built and maintain Crispy Cult, a live e-commerce platform for a modern Indian snack brand, delivering product drops, category filters, and interactive cart user flows using HTML5, Tailwind CSS, and JavaScript (ES6+).",
      "Develop server-side routing, request handling, and dynamic page rendering/API endpoints in PHP to power real-time storefront operations.",
      "Implemented shopping cart state management, dynamic product catalog, and inventory/product-tagging logic used in production."
    ],
    tech: ["PHP", "JavaScript ES6+", "Tailwind CSS", "HTML5", "REST APIs", "E-Commerce"]
  },
  {
    num: "02",
    role: "Full-Stack Development Trainee",
    company: "Ziion Technology",
    period: "July 2025 – February 2026",
    type: "Full-Stack Program",
    description:
      "Mastered end-to-end software development lifecycle and REST API architecture across the MERN technology stack.",
    highlights: [
      "Completed an intensive 8-month full-stack development program building end-to-end application features using React.js, Node.js, Express, and MongoDB.",
      "Strengthened application stability by writing end-to-end integration tests and designing clean RESTful API contracts.",
      "Applied modern Git workflows, responsive design principles, and component-based frontend architectures."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="home-work-header">
          <div className="editorial-border"></div>

          <div className="work-header-content">
            <h2 className="work-section-title">
              Work <span className="muted-text">experience</span>
            </h2>
            <span className="bracket-tag desktop-only">[ Career Journey ]</span>
          </div>
        </div>

        {/* Experience Rows */}
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item-row">
              <div className="editorial-border"></div>

              <div className="exp-row-grid">
                <div className="exp-num font-mono">{exp.num}</div>

                <div className="exp-details-col">
                  <div className="exp-header-wrap">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">— {exp.company}</span>
                  </div>

                  <p className="exp-meta font-mono">
                    {exp.period} | {exp.type}
                  </p>

                  <p className="exp-desc">{exp.description}</p>

                  <ul className="exp-points font-sans">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx}>— {point}</li>
                    ))}
                  </ul>

                  <div className="exp-tech-list">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="bracket-tag">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="editorial-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
