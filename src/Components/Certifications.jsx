import React from "react";
import { TrophyIcon, SparklesIcon, CodeIcon, ServerIcon } from "./Icons";
import "./Certifications.css";

const achievements = [
  {
    title: "Finalist (Top 15%) — D4 Hackathon Challenge 2023",
    tag: "Competitive Coding & Prototyping",
    desc: "Competed against 2,000+ participants to prototype an emergency crisis-response web application under strict time constraints.",
    stat: "Top 15% out of 2,000+ Competitors",
    icon: <TrophyIcon size={24} />,
    colorClass: "amber"
  },
  {
    title: "Team Leader — HackNwin Hackathon",
    tag: "Leadership & Real-Time Tools",
    desc: "Directed a 4-member software team to design and build a functional real-time collaboration tool under tight competition deadlines.",
    stat: "4-Member Team Leadership",
    icon: <SparklesIcon size={24} />,
    colorClass: "indigo"
  },
  {
    title: "International Workshop Mentor",
    tag: "Algorithmic Decision-Making",
    desc: "Mentored 150+ students during an international technical workshop focused on algorithmic decision-making and computer science logic.",
    stat: "Mentored 150+ Students",
    icon: <CodeIcon size={24} />,
    colorClass: "emerald"
  },
  {
    title: "Networking Fundamentals Certification",
    tag: "Systems & Infrastructure",
    desc: "Certified in computer networking principles: TCP/IP stack, LAN/WAN subnet configuration, routing, and network troubleshooting.",
    stat: "TCP/IP & Infrastructure",
    icon: <ServerIcon size={24} />,
    colorClass: "cyan"
  },
  {
    title: "ISRO Space Science Certification",
    tag: "Space Science & Tech",
    desc: "Earned certification in Space Science fundamentals from the Indian Space Research Organisation (ISRO).",
    stat: "ISRO Official Certification",
    icon: <TrophyIcon size={24} />,
    colorClass: "purple"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding certs-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <TrophyIcon size={16} /> Honor & Awards
          </div>
          <h2 className="section-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions in hackathons, engineering leadership, student mentorship, 
            and official technical certifications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="certs-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-card-top">
                <div className={`cert-icon ${item.colorClass}`}>
                  {item.icon}
                </div>
                <span className="cert-stat-badge">{item.stat}</span>
              </div>

              <h3 className="cert-title">{item.title}</h3>
              <span className="cert-tag">{item.tag}</span>
              <p className="cert-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
