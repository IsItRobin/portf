import React from "react";
import "./Archive.css";

const archiveItems = [
  {
    name: "Finalist (Top 15%) — D4 Hackathon Challenge",
    detail: "Competed against 2,000+ participants prototyping crisis-response web app",
    date: "2023",
    tag: "Hackathon"
  },
  {
    name: "Team Lead — HackNwin Hackathon",
    detail: "Directed 4-member dev team building real-time collaboration tool",
    date: "2023",
    tag: "Leadership"
  },
  {
    name: "International Workshop Technical Mentor",
    detail: "Mentored 150+ students on Algorithmic Decision-Making & Logic",
    date: "2024",
    tag: "Mentorship"
  },
  {
    name: "Networking Fundamentals Certification",
    detail: "TCP/IP, LAN/WAN configuration, routing protocols & troubleshooting",
    date: "2024",
    tag: "Systems"
  },
  {
    name: "ISRO Space Science Certification",
    detail: "Indian Space Research Organisation official space technology course",
    date: "2024",
    tag: "Space Tech"
  }
];

const Archive = () => {
  return (
    <section id="archive" className="section-padding archive-section">
      <div className="container">
        {/* Section Header */}
        <div className="home-work-header">
          <div className="editorial-border"></div>

          <div className="work-header-content">
            <h2 className="work-section-title">
              Selected <span className="muted-text">archive</span>
            </h2>
            <span className="bracket-tag desktop-only">[ Certifications & Achievements ]</span>
          </div>
        </div>

        {/* Editorial Table Header */}
        <div className="archive-table">
          <div className="archive-table-header font-mono">
            <span>[ Name ]</span>
            <span>[ Detail / Category ]</span>
            <span className="text-right">[ Date ]</span>
          </div>
          <div className="editorial-border"></div>

          {/* Table Rows */}
          {archiveItems.map((item, idx) => (
            <div key={idx} className="archive-table-row">
              <div className="archive-col-name font-sans">
                <span className="archive-item-title">{item.name}</span>
                <span className="archive-item-tag">{item.tag}</span>
              </div>
              <div className="archive-col-detail font-sans">{item.detail}</div>
              <div className="archive-col-date font-mono text-right">{item.date}</div>
            </div>
          ))}
          <div className="editorial-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
