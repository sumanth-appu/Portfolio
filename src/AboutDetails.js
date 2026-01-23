import React from 'react';
import './AboutPage.css'; // Make sure to create this CSS file
import profile from './Resources/Appu.png';

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="profile-pic">
          <img src={profile} alt="Sumanth Akshali" />
        </div>

        <div className="info bebas-neue-regular">
          <h1>Sumanth Akshali</h1>

          <p>
            I am a software developer with hands-on experience in AngularJS and PHP,
            working on real-world applications that involve data validation, quality
            control workflows, and backend-driven business logic. I focus on building
            reliable features and understanding how systems behave beyond just the UI.
            <br /><br />
          </p>

          <div className="education">
            <h2>Education</h2>
            <p>
              Bachelor of Engineering – Information Science <br />
              Acharya Institute of Technology (2020 – 2024)
            </p>
          </div>

        </div>
      </div>
    </>
    
    


  );
};

export default AboutPage;
