import React from "react";
import "./SkillsDetails.css";

const skills = [
  {
    category: "Core Skills",
    items: [
      { name: "AngularJS", logo: "logos/angularjs.png" },
      { name: "PHP", logo: "logos/PHP.png" },
      { name: "JavaScript", logo: "logos/Js.png" },
      { name: "HTML5", logo: "logos/html5.png" },
      { name: "CSS3", logo: "logos/CSS3.png" },
      { name: "SQL", logo: "logos/MySql.png" },
    ],
  },
  {
    category: "Working Knowledge",
    items: [
      { name: "Python", logo: "logos/python.png" },
      { name: "ReactJS", logo: "logos/React.png" },
      { name: "SASS / SCSS", logo: "logos/SASS.png" },
      { name: "Bootstrap", logo: "logos/Bootstrap.png" },
      { name: "C / C++", logo: "logos/C++.png" },
    ],
  },
  {
    category: "Exploration",
    items: [
      { name: "Blockchain (Theory)", logo: "logos/Blockchain.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", logo: "logos/Github.png" },
      { name: "VS Code", logo: "logos/vscode.png" },
      { name: "PyCharm", logo: "logos/Pychram.png" },
      { name: "Google Colab", logo: "logos/colab.png" },
    ],
  },
];

const certifications = [
  "Blockchain and its Applications – NPTEL (IIT Kharagpur)",
  "Associate Cloud Engineer – Google Cloud Skill Boost",
  "Web Development – IBM (Coursera / Credly)",
  "Python for Data Science – Infosys Springboard",
  "C Programming for Beginners – Udemy",
  "Git and GitHub – Coursera",
];

const SkillsDetails = () => {
  const explorationSkills = skills.find(
    (skill) => skill.category === "Exploration"
  );

  const mainSkills = skills.filter(
    (skill) => skill.category !== "Exploration"
  );

  return (
    <div className="skills-details">

      {/* MAIN SKILLS */}
      {mainSkills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h2>{skillCategory.category}</h2>
          <div className="skills-grid">
            {skillCategory.items.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* THEORY NOTE (no heading, subtle) */}
      {explorationSkills && explorationSkills.items.length > 0 && (
        <div className="theory-note">
          <img
            src={explorationSkills.items[0].logo}
            alt={explorationSkills.items[0].name}
            className="theory-icon"
          />
          <p>
            <strong>Blockchain: </strong>
            I have a strong theoretical understanding of blockchain concepts and
            system design. I have experimented with implementations in the past,
            but I have not yet worked on blockchain in a real-world production
            project.
          </p>
        </div>
      )}

      <h1>Certifications</h1>
      <p className="certifications-intro">Completed certifications from IIT Kharagpur, Google, IBM, Infosys, Udemy, and Coursera.</p>
      <div className="certifications">
        {certifications.map((cert, index) => (
          <p key={index}>{cert}</p>
        ))}
      </div>
    </div>
  );
};

export default SkillsDetails;
