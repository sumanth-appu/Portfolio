import React from "react";
import "./ProjectsDetails.css";

/* =========================
   WORK / PROFESSIONAL PROJECTS
========================= */

const workProjects = [
  {
    title: "Smart EMS – QC Process, HES Commissioning & Asset Profile Module",
    description:
      "Worked on a Smart Energy Management System (EMS) focusing on Quality Control (QC) processes and HES commissioning workflows. In addition, developed and enhanced an Asset Profile module that consolidates all relevant information of a Consumer, DTR, or Feeder into a single view. The module enables users to conveniently access meter details, commissioning status, QC stages, and related data, improving visibility and reducing dependency on multiple system screens.",
    technologies: "AngularJS | PHP | JavaScript | SQL | HTML | CSS",
    github: null, // Internal / Confidential
  },
];


/* =========================
   PERSONAL / ACADEMIC PROJECTS
========================= */

const personalProjects = [
    {
    title: "Education Result & Record Management System (Blockchain)",
    type: "Final Year Project (Research & Design)",
    description:
        "Proposed and documented a blockchain-based system for secure storage, verification, and management of academic records. The work focused on system design, data flow, and security considerations to prevent tampering and enable transparent verification by institutions and employers. The project documentation and concept were officially registered under IPR (Copyright), with myself listed as a co-author.",
    technologies: "Blockchain (Conceptual) | Solidity | Ethereum | web3.js(JavaScript) | HTML | CSS",
    github: null, // Research / IPR-registered work
    },
  {
    title: "GENEBAGS – Online Bag Shopping System",
    description:
      "Developed a full-stack e-commerce web application with product listing, cart functionality, and database integration. Focused on structured data handling and clean UI flow.",
    technologies: "MySQL | HTML | CSS | SASS | Python (Flask)",
    github: "https://github.com/sumanth-appu/GeneBag-DBMS_Project",
  },
  {
    title: "Movie Finder Website",
    description:
      "Built a movie discovery website that allows users to search and explore films using dynamic data rendering and client-side logic.",
    technologies: "JavaScript | HTML | CSS",
    github: "https://github.com/sumanth-appu/Movie-Finder",
  },
  {
    title: "WebSocket Chat Application",
    description:
      "Implemented a real-time chat application using WebSockets, enabling instant message exchange with basic connection management.",
    technologies: "JavaScript | HTML | CSS | Node.js",
    github:
      "https://github.com/sumanth-appu/codeClause-Intrenship/tree/main/Websocket_chatApp",
  },
  {
    title: "ClipNest – Image & Text Notes Mobile App",
    type: "Personal Project",
    description:
      "Built a cross-platform mobile application for creating image and text-based notes with offline storage support. Focused on clean UI, animations, and local data persistence.",
    technologies: "React Native | TypeScript | AsyncStorage | React Native Paper",
    github: null,
  },
];

const ProjectsDetails = () => {
  return (
    <div className="projects-details">
      {/* WORK PROJECTS */}
      <h2 className="section-title">Professional Experience</h2>
      <div className="projects-list">
        {workProjects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {!project.github && (
              <p className="private-note">Internal / Confidential Project</p>
            )}
          </div>
        ))}
      </div>

      {/* PERSONAL PROJECTS */}
      <h2 className="section-title">Personal Projects</h2>
      <div className="projects-list">
        {personalProjects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p>
             {project.github && (
                <p>
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub →
                    </a>
                </p>
            )}

            </p>
          </div>
        ))}

        <div className="more-projects">
          <a
            href="https://github.com/sumanth-appu"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-button"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
