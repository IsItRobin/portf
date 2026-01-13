import React from "react";
import "./Projects.css";
const Projects = () => {
    return (
        <section className="projects">  
            <h2 className="projects-title">
                My <span className="tag">&#123;Dev&#125;</span>Projects
            </h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>🌐 Portfolio Website</h3>
                    <p>A personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.</p>
                </div>
                <div className="project-card">
                    <h3>🛒 E-commerce Platform</h3>
                    <p>Developed a full-featured e-commerce platform with user authentication, product management, and payment integration.</p>
                </div>
                <div className="project-card">
                    <h3>📱 Task Management App</h3>
                    <p>Created a task management application to help users organize and prioritize their daily tasks effectively.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;