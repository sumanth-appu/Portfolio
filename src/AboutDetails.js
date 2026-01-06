import React from 'react';
import './AboutPage.css'; // Make sure to create this CSS file
import profile from './Resources/Appu.png'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="profile-pic">
        <img src={profile} alt="Sumanth Akshali" />
      </div>
      <div className="info bebas-neue-regular">
        <h1 >Sumanth Akshali</h1>
        <p>
          I'm a dedicated Full-Stack Web Developer with 1.5 years of professional experience in building scalable web applications. Proficient in AngularJS, JavaScript, PHP, React, and MySQL. Currently exploring Python and modern frameworks. Passionate about clean code, problem-solving, and delivering high-quality solutions. Open to learning new technologies and eager to grow in challenging roles.
        </p>
        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor of Engineering in Information Science</strong>, Acharya Institute of Technology | 2020 – 2024 | CGPA: 7.89
            </li>
            <li>
              <strong>Pre-University</strong>, KLE’s Prerana PU College, Hubli | 2018-2020 | Percentage: 86.67%
            </li>
            <li>
              <strong>Class-10</strong>, Prasiddhi High School, Hagaribommanahalli | 2018 | Percentage: 95.56%
            </li>
          </ul>
        </div>
      </div> 
    </div>
    
  );
};

export default AboutPage;
