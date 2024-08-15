// ContactDetails.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <div className="contact-details">
            <h1>Contact Me</h1>
            <div className="email-section">
                <a href="mailto:sumanthappu@outlook.com" className="email-button">
                    <FontAwesomeIcon icon={faEnvelope} /> Email Me
                </a>
            </div>
            <div className="social-media-section">
                <h2>Follow Me</h2>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/akahali-sumanth-64296827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/sumanth-appu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
