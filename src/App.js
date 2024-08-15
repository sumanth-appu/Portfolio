// App.js
import React, { useState } from 'react';
import './App.css';

import HomeDetails from './HomeDetails';
import AboutDetails from './AboutDetails';
import ProjectsDetails from './ProjectsDetails';
import EduSkillsDetails from './SkillsDetails';
import ConnectDetails from './ConnectDetails';


const MenuBar = ({ id, label, isActive, onClick, detailsComponent: DetailsComponent }) => {
    return (
        <div
            className={`bar ${id} ${isActive ? 'expanded' : 'collapsed'}`}
            onClick={() => onClick(id)}
            data-label={label}
        >
            <span className="bar-label">{label}</span>
            {isActive && (
                <div className="details">
                    <DetailsComponent />
                </div>
            )}
        </div>
    );
};

const App = () => {
    const [activeBar, setActiveBar] = useState('home');

    const handleClick = (id) => {
        if(activeBar !== id ){
            setActiveBar(id);
        }
    };

    return (
        <div className="container">
            <MenuBar id="home" label="" isActive={activeBar === 'home'} onClick={handleClick} detailsComponent={HomeDetails} />
            <MenuBar id="projects" label="PROJECTS" isActive={activeBar === 'projects'} onClick={handleClick} detailsComponent={ProjectsDetails} />
            <MenuBar id="edu-skills" label="SKILLS" isActive={activeBar === 'edu-skills'} onClick={handleClick} detailsComponent={EduSkillsDetails} />
            <MenuBar id="about" label="ABOUT" isActive={activeBar === 'about'} onClick={handleClick} detailsComponent={AboutDetails} />
            <MenuBar id="connect" label="CONNECT" isActive={activeBar === 'connect'} onClick={handleClick} detailsComponent={ConnectDetails} />
        </div>
    );
};

export default App;
