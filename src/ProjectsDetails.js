import React from 'react';
import './ProjectsDetails.css';

const projects = [
    {
        title: "GENEBAGS [Online Bag Shopping System]",
        description: "Led the development of GENEBAGS, an innovative online bag shopping platform, enhancing user experience with an intuitive interface, comprehensive product catalog, and streamlined shopping cart.",
        technologies: "MySQL | HTML-5 | CSS-3 | SASS | Python-Flask",
        github: "https://github.com/sumanth-appu/GeneBag-DBMS_Project"
    },
    {
        title: "MOVIE FINDER WEBSITE",
        description: "Engineered a website dedicated to movie discovery, allowing users to search and explore films. Incorporated intuitive search functionality, detailed movie information display, and a user-friendly interface.",
        technologies: "JavaScript | HTML | CSS",
        github: "https://github.com/sumanth-appu/Movie-Finder"
    },
    {
        title: "WEB-SOCKET CHAT APP",
        description: "Crafted a WebSocket Chat App to enable instant messaging, leveraging WebSocket protocol for swift communication. Boasts intuitive UI, and Node.js backend for seamless connection management.",
        technologies: "JavaScript | HTML | CSS",
        github: "https://github.com/sumanth-appu/codeClause-Intrenship/tree/main/Websocket_chatApp"
    },
    {
        title: "TODO-LIST-WEBAPP",
        description: "Designed a JavaScript-based Todo list project, showcasing proficiency in web development. Implemented user-friendly features for efficient task management.",
        technologies: "JavaScript | HTML | CSS | Reactjs",
        github: "https://github.com/sumanth-appu/TODO-List-React-JS-Projects"
    },
    {
        title: "TEMPERATURE CONVERTER",
        description: "Created a Temperature Converter website using JavaScript, demonstrating proficiency in Front-end web development interactive design.",
        technologies: "JavaScript | HTML | CSS",
        github: "https://github.com/sumanth-appu/tempratureConverter"
    }
];

const ProjectsDetails = () => {
    return (
        <div className="projects-details">
            <h1 className="title">Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies}</p>
                        <p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub &rarr;
                            </a>
                        </p>
                    </div>
                ))}
                <div className="more-projects ">
                    <a href="https://github.com/sumanth-appu" target="_blank" rel="noopener noreferrer" className='more-projects-button'>
                        Visit My-GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;
