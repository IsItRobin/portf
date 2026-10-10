import React from "react";
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "./Icons";
import "./Education.css";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Chandigarh Engineering College",
    location: "Gurgaon, Haryana",
    period: "2021 – 2025",
    highlight: "Graduated with Core CS Focus",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Computer Networks (CN)",
      "Software Engineering"
    ]
  },
  {
    degree: "Senior Schooling (12th, CBSE)",
    institution: "SD Model Public School",
    location: "Haryana",
    period: "Completed 2021",
    highlight: "Science / Non-Medical Stream",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    degree: "High Schooling (10th, CBSE)",
    institution: "CBSE Board",
    location: "Haryana",
    period: "Completed 2019",
    highlight: "Secondary School Certification",
    courses: ["General Science", "Mathematics", "Social Studies", "Languages"]
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <GraduationCapIcon size={16} /> Academic Foundation
          </div>
          <h2 className="section-heading">
            Education & <span className="gradient-text">Coursework</span>
          </h2>
          <p className="section-subtitle">
            Solid academic background in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-card-top">
                <div className="edu-icon-wrap">
                  <GraduationCapIcon size={24} />
                </div>
                <div className="edu-period">
                  <CalendarIcon size={14} /> {edu.period}
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-location">
                <MapPinIcon size={14} /> <span>{edu.location}</span>
              </div>

              {edu.courses && (
                <div className="edu-coursework">
                  <h5 className="coursework-title">Key Focus Areas:</h5>
                  <div className="coursework-tags">
                    {edu.courses.map((c, i) => (
                      <span key={i} className="tag-pill">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
