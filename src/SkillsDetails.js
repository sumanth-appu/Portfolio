import React from 'react';
import './SkillsDetails.css';

const skills = [
    {
        items: [
            { name: "Python", logo: "logos/python.png" },
            { name: "C/C++", logo: "logos/C++.png" },
            { name: "JavaScript", logo: "logos/Js.png" },
            { name: "HTML5", logo: "logos/html5.png" },
            { name: "CSS3", logo: "logos/CSS3.png" },
            { name: "SASS/SCSS", logo: "logos/SASS.png" },
            { name: "SQL", logo: "logos/MySql.png" },
            { name: "ReactJS", logo: "logos/React.png" },
            { name: "Blockchain", logo: "logos/blockchain.png" },
            { name: "Google Colab", logo: "logos/colab.png" },
            { name: "Bootstrap", logo: "logos/Bootstrap.png" },
            { name: "VS Code", logo: "logos/vscode.png" },
            { name: "PyCharm", logo: "logos/Pychram.png" },
            { name: "GitHub", logo: "logos/Github.png" },
        ]
    }
];

const certifications = [
    "Blockchain and its Application | IIT Kharagpur NPTEL Certification",
    "Associate Cloud Engineer Google Cloud Skill Boost",
    "IBM Course on Web Development (Credly Badge) Coursera Certification",
    "Python for Data Science | Infosys Springboard",
    "C Programming for Beginners | Udemy Certification",
    "Getting Started with Git and GitHub | Coursera Certification"
];

const SkillsDetails = () => {
    return (
        <div className="skills-details">
            <h1>Skills</h1>
            {skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                    <div className="skills-grid">
                        {skillCategory.items.map(skill => (
                            <div className="skill-item" key={skill.name}>
                                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <h1>Certifications</h1>
            <div className="certifications">
                {certifications.map((cert, index) => (
                    <p key={index}>{cert}</p>
                ))}
            </div>
        </div>
    );
};

export default SkillsDetails;
