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
            I build things and I design them. That combination isn't common, and it
            shapes everything I make — including the brand identity for this portfolio,
            which is my own work.
          </p>
          <p>
            I keep building outside of work: a Flask e-commerce platform, a WebSocket
            chat app, a React Native notes app. My final-year project was an Education
            Blockchain Record System — IPR-registered, because it was worth protecting.
            Professionally, I cut my teeth on a Smart Energy Management System, working
            across AngularJS and PHP.
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
