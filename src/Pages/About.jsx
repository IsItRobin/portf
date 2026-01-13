import React from "react";
import { Link } from "react-scroll";
import "./About.css";

const About = () => {
    return (
        <section className="about">
            <h1 className="title"> Full Stack Developer</h1>
            <p className="skills">
                {`{ JavaScript, React, Node.js, Express, MongoDB }`}
            </p>

            <p className="description">
                Passionate Full Stack Developer skilled in building dynamic web
                applications using the MERN stack. I focus on creating seamless user
                experiences and scalable backend systems while staying up to date with
                the latest technologies.
            </p>
             <div className="buttons">
        {/* ✅ SEE MY WORK */}
        <Link
          to="projects"
          smooth
          duration={500}
          offset={-70}
          spy
        >
          <button className="btn primary">See My Work</button>
        </Link>
                <a
  href="https://drive.google.com/file/d/10LxpkeGvlGA9wG9a8WhcjSvGPgerXg7m/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="btn secondary"
>
  Download CV
</a>

            </div>

            <div className="devices">
                <img src="/Images/key.png" alt="Keyboard" />
                <img src="/Images/mo.png" alt="Keyboard" />
                
                           
            </div>

            

    </section>
    );
};

export default About;
