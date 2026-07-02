// ContactDetails.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <div className="contact-details">
            <h1>Let's Connect</h1>
            <p className="connect-tagline">Open to new opportunities, freelance work, and conversations.</p>
            <div className="email-section">
                <a href="mailto:sumanthappu@outlook.com" className="email-button">
                    <FontAwesomeIcon icon={faEnvelope} /> Email Me
                </a>
            </div>
            <div className="social-media-section">
                <h2>Find me on</h2>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/akahali-sumanth-64296827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/sumanth-appu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
