import React from "react";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  BrainIcon,
  SparklesIcon,
  CheckCircleIcon
} from "./Icons";
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <CodeIcon size={22} />,
    colorClass: "indigo",
    skills: ["JavaScript (ES6+)", "PHP", "Java", "HTML5", "CSS3", "XML"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <ServerIcon size={22} />,
    colorClass: "cyan",
    skills: ["React.js", "Node.js", "Express.js", "Laravel", "Tailwind CSS", "Blade Engine"]
  },
  {
    title: "Databases & Tools",
    icon: <DatabaseIcon size={22} />,
    colorClass: "emerald",
    skills: ["MySQL", "MongoDB", "GitHub", "VS Code", "Postman", "cURL"]
  },
  {
    title: "Core CS & Engineering",
    icon: <BrainIcon size={22} />,
    colorClass: "purple",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "RESTful API Design",
      "MVC Architecture",
      "SDLC Best Practices",
      "AI API Integration"
    ]
  },
  {
    title: "Leadership & Soft Skills",
    icon: <SparklesIcon size={22} />,
    colorClass: "pink",
    skills: [
      "Problem-Solving",
      "Team Leadership",
      "Student Mentorship",
      "Clear Communication",
      "Sprint & Task Planning",
      "Cross-functional Collaboration"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <CodeIcon size={16} /> Technical Stack
          </div>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, modern frameworks, 
            databases, and engineering principles.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className={`category-icon ${cat.colorClass}`}>
                  {cat.icon}
                </div>
                <h3 className="category-title">{cat.title}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <CheckCircleIcon size={15} className="skill-check" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
