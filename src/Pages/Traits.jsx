import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section className="traits">
                <h2 className="traits-title">
                Problem Solver <span className="tag">&lt;coder&gt;</span> 
            </h2>

            <div className="traits-grid">
            <div className="trait-card">
            <h3>💡 Innovative Problem Solver</h3>
            <p>I love turning complex challenges into elegant digital solutions
                using structured logic and clean design — whether 
                it’s debugging a system or optimizing performance.</p> 
            </div>

            <div className="trait-card">
            <h3> 🤝 Team Player & Leader</h3>
            <p>Experienced in working within collaborative teams,
                leading hackathon projects, and mentoring peers to
                achieve shared goals with clear communication and strategy.</p>
            </div>

            <div className="trait-card">
            <h3>💻 Full Stack Developer in Progress</h3>
            <p>Passionate about crafting seamless user experiences 
                and powerful backend systems with the MERN stack — continuously learning and evolving with technology.</p>
            </div>

            <div className="trait-card">
            <h3>🚀 Growth-Oriented Mindset</h3>
            <p>Always exploring new tools, frameworks, and ideas — from networking to space tech — to stay ahead in a constantly evolving tech world.</p>
            </div>
            </div>
        </section>
    );
};   
export default Skills;