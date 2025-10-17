import React from "react";
import './Projects.css'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      name: "Calculator(using- JavaScript)",
      description: "A simple web calculator built with HTML, CSS, and JavaScript for basic arithmetic operations.",
      tech: "HTML, CSS, JavaScript",
      live: "https://peppy-jelly-18f23e.netlify.app/",
      github: "https://github.com/pawankapse/Js-calculator",
    },
    {
      name: "Calculator(using- React)",
      description: "A modern calculator app made using React hooks for real-time calculations and responsive UI.",
      tech: "React, Css",
      live: "https://effervescent-praline-568b8f.netlify.app/",
      github: "https://github.com/pawankapse/react--calculator",
    },
    {
      name: "Digital- Clock",
      description: "A simple digital clock made using html and css.",
      tech: "HTML, CSS",
      live: "https://frolicking-bienenstitch-4059a4.netlify.app/",
      github: "https://github.com/pawankapse/digital-clock",
    },
    {
      name: "Shopping- App",
      description: "A simple e-commerce web app with add-to-cart, product list, and price calculation features.",
      tech: "React, CSS",
      live: "https://hilarious-lebkuchen-d507a4.netlify.app/",
      github: "https://github.com/pawankapse/shopping.git",
    },
    {
      name: "Employee Management(using- React)",
      description: "simple employee table and add new employee and delete",
      tech: "React, CSS",
      live: "https://elaborate-puffpuff-4204d9.netlify.app/",
      github: "https://github.com/pawankapse/employee-admin",
    },
    {
      name: "Season Based Fruit -App(using- React)",
      description: "Shows different fruits based on the current season with a clean and responsive interface",
      tech: "React, CSS",
      live: "https://fanciful-taiyaki-dfcd95.netlify.app/",
      github: "https://github.com/pawankapse/fruit-project-season-based-.git",
    },
    {
      name: "Restaurant(using- React)",
      description: "A simple restaurant app",
      tech: "React, CSS",
      live: "https://subtle-cobbler-b5500a.netlify.app/",
      github: "https://github.com/pawankapse/restaurant-frontend.git",
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p className="desc">{project.description}</p>
            <p className="tech"><strong>Tech:</strong> {project.tech}</p>
            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                <FaExternalLinkAlt size={18} /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
