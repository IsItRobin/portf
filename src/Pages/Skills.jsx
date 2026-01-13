import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section className="traits">
            
            <h2 className="traits-title">
            My Techincal <span className="tag">&lt;Skills&gt;</span> 
            </h2>
            <div className="traits-grid">
            <div className="trait-card">
                <h3>🤝 Frontend Devlopment</h3>
                
                <p>{` React.js, JavaScript, HTML5, CSS3 / TailwindCSS / Bootstrap, Responsive Web Design, Redux `}</p>
            </div>

            <div className="trait-card">
                <h3>Backend & Database</h3>
                <p>{` Node.js, Express, MongoDB, RESTful APIs, Authentication (JWT / Firebase Auth) `}</p>
            </div>
                

            <div className="trait-card">
                <h3>Programming & Core CS Concepts</h3>
                <p>{` Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks `}</p>
            </div>

               
            </div>
            
        </section>
    );
};   
export default Skills;