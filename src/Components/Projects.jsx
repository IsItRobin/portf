import React, { useState } from "react";
import "./Projects.css";

const projectsList = [
  {
    id: "01",
    title: "SplitCart — Group Purchasing & Expense-Sharing Platform",
    category: "Full-Stack Web App",
    date: "2026",
    summary:
      "A collaborative group purchasing and expense-sharing web platform enabling seamless cost coordination, custom contributions, and settlement tracking.",
    details: [
      "Identified the problem of groups struggling to coordinate shared purchases and split costs fairly; defined the product scope, core user flows, and MVP.",
      "Designed features that let a group create a purchase, set a target amount and contribute equally or with custom amounts, with funding progress and balance settlement.",
      "Added shared wishlists, voting, and activity tracking to support group decision-making and complete transparency."
    ],
    tech: ["React", "TypeScript", "Laravel", "MySQL", "REST APIs", "Group Purchasing"],
    badge: "Expense Sharing"
  },
  {
    id: "02",
    title: "AI-Powered Vedic Astrology API",
    category: "AI & PHP Engine",
    date: "2026",
    summary:
      "A high-performance PHP REST API combining Vedic astrology planetary-cycle algorithms with Google Gemini 2.5 Flash generative guidance.",
    details: [
      "Built a custom Vimshottari Dasha planetary-cycle engine computing ruling planets and remaining cycle days dynamically from birth date.",
      "Integrated Google Gemini 2.5 Flash API using tailored prompt engineering, returning structured JSON for daily energy, career, love, and wellness.",
      "Engineered a dedicated PHP/cURL media-fetching utility and an interactive local developer dashboard."
    ],
    tech: ["PHP", "Google Gemini 2.5 API", "cURL", "REST APIs", "Vedic Algorithms"],
    badge: "Generative AI"
  },
  {
    id: "03",
    title: "Laravel PayPal Payment Integration",
    category: "Payment Checkout Engine",
    date: "2026",
    summary:
      "Robust e-commerce payment checkout engine built on Laravel MVC architecture featuring full lifecycle order capture and automated testing.",
    details: [
      "Architected controller-driven order lifecycle handling for payment creation, redirection, approval, and cancellation states.",
      "Rendered dynamic real-time checkout confirmation views using Blade templates displaying order IDs, payment totals, and payer details.",
      "Wrote comprehensive automated feature tests with Pest PHP to validate complete payment capture flows."
    ],
    tech: ["Laravel", "PHP", "PayPal REST API", "Pest PHP", "Blade"],
    badge: "Financial API"
  },
  {
    id: "04",
    title: "Full-Stack Weather Forecasting App",
    category: "MERN Stack Web App",
    date: "2025",
    summary:
      "Modern full-stack MERN weather forecasting platform rendering dynamic live meteorological data with 20% performance optimization.",
    details: [
      "Delivered real-time meteorological insights via integrated RESTful APIs, achieving 99% data accuracy across regions.",
      "Cut application load times by 20% through optimized database query design and lightweight endpoint response structures.",
      "Designed responsive React frontend dashboard with interactive location lookup."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    badge: "99% Accuracy"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="section-padding projects-section">
      <div className="container">
        {/* Section Header (Matthieu Givelet Style) */}
        <div className="home-work-header">
          <div className="editorial-border"></div>
          
          <div className="work-header-content">
            <h2 className="work-section-title">
              Selected <span className="muted-text">works</span>
            </h2>

            <span className="bracket-tag desktop-only">[ 2025 – 2026 ]</span>
          </div>
        </div>

        {/* Project Items List */}
        <div className="projects-editorial-list">
          {projectsList.map((project) => (
            <div key={project.id} className="project-row">
              <div className="editorial-border"></div>

              <div className="project-row-main">
                <div className="project-row-num font-mono">{project.id}</div>

                <div className="project-row-info">
                  <div className="project-row-title-wrap">
                    <h3 className="project-row-title">{project.title}</h3>
                    <span className="project-row-badge">{project.badge}</span>
                  </div>
                  <p className="project-row-category">{project.category} — {project.date}</p>
                  <p className="project-row-summary">{project.summary}</p>
                  
                  <div className="project-row-tech">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="bracket-tag">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="project-row-action link-line"
                  onClick={() =>
                    setSelectedProject(
                      selectedProject?.id === project.id ? null : project
                    )
                  }
                >
                  <span>{selectedProject?.id === project.id ? "Close Details [-]" : "View Details [+]"}</span>
                </button>
              </div>

              {/* Expandable Details Frame */}
              {selectedProject?.id === project.id && (
                <div className="project-expanded-details">
                  <h4 className="expanded-title">Key Accomplishments & Features:</h4>
                  <ul className="expanded-list">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>— {detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="editorial-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
