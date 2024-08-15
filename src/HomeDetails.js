import React, { useState, useEffect } from 'react';
import './HomeDetails.css';
import logo from './Resources/logo.png'; 

const roles = ["Welcome To my Portfolio", "Fresher" ,"Web-Developer", "web-Designer","Logo-Designer"];
const name = "Sumanth Akshali";

const HomeDetails = () => {
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [nameIndex, setNameIndex] = useState(0);
    const [currentName, setCurrentName] = useState("");

    useEffect(() => {
        const handleType = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex(prevCharIndex => prevCharIndex - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prevRoleIndex) => (prevRoleIndex + 1) % roles.length);
                }
            } else {
                if (charIndex < roles[roleIndex].length) {
                    setCharIndex(prevCharIndex => prevCharIndex + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        };

        const typingSpeed = isDeleting ? 50 : 150;
        const timer = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    useEffect(() => {
        setCurrentRole(roles[roleIndex].substring(0, charIndex));
    }, [charIndex, roleIndex]);

    useEffect(() => {
        if (nameIndex < name.length) {
            const timer = setTimeout(() => {
                setCurrentName(name.substring(0, nameIndex + 1));
                setNameIndex(prevNameIndex => prevNameIndex + 1);
            }, 150);

            return () => clearTimeout(timer);
        }
    }, [nameIndex]);

    return (
        <div className="home-details">
            <img src={logo} alt='Logo' className='logo' />
            <h1 className="name">
                <span className="typed-name">{currentName}</span>
                {/* <span className="cursor">|</span> */}
            </h1>
            <h2 className="subheading">
                    <span className="typed-role">{currentRole}</span>
                {/* <span className="cursor">|</span> */}
            </h2>
        </div>
    );
};

export default HomeDetails;
