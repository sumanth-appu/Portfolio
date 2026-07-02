// App.js
import React, { useState, useRef, useCallback, useEffect } from 'react';
import './App.css';

import HomeDetails from './HomeDetails';
import AboutDetails from './AboutDetails';
import ProjectsDetails from './ProjectsDetails';
import EduSkillsDetails from './SkillsDetails';
import ConnectDetails from './ConnectDetails';

const SECTION_IDS = ['home', 'projects', 'edu-skills', 'about', 'connect'];

const MenuBar = ({ id, label, isActive, onClick, onKeyDown, detailsComponent: DetailsComponent }) => {
    return (
        <div
            className={`bar ${id} ${isActive ? 'expanded' : 'collapsed'}`}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            onClick={() => onClick(id)}
            onKeyDown={(e) => onKeyDown(e, id)}
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

const sections = [
    { id: 'home',       label: 'HOME',     component: HomeDetails },
    { id: 'projects',   label: 'PROJECTS', component: ProjectsDetails },
    { id: 'edu-skills', label: 'SKILLS',   component: EduSkillsDetails },
    { id: 'about',      label: 'ABOUT',    component: AboutDetails },
    { id: 'connect',    label: 'CONNECT',  component: ConnectDetails },
];

const App = () => {
    const [activeBar, setActiveBar] = useState('home');       // content rendered
    const [activeTab, setActiveTab] = useState('home');        // rail tab highlight (updates immediately)
    const [animPhase, setAnimPhase] = useState('idle');        // 'idle' | 'exit' | 'enter'
    const pendingSection = useRef(null);
    const isAnimatingRef = useRef(false);
    const triggerType = useRef('tap'); // 'tap' | 'swipe'

    const touchStartY = useRef(null);
    const touchStartTime = useRef(null);
    const swipeCooldown = useRef(false);
    const contentRef = useRef(null);

    const navigateTo = useCallback((id, type = 'tap') => {
        if (id === activeTab || isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        pendingSection.current = id;
        triggerType.current = type;
        setActiveTab(id);       // rail updates immediately for instant tap feedback
        setAnimPhase('exit');
    }, [activeTab]);

    const handleAnimEnd = useCallback(() => {
        if (animPhase === 'exit') {
            setActiveBar(pendingSection.current);
            setAnimPhase('enter');
        } else if (animPhase === 'enter') {
            setAnimPhase('idle');
            isAnimatingRef.current = false;
        }
    }, [animPhase]);

    const handleClick = (id) => {
        navigateTo(id);
    };

    const handleKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateTo(id);
        }
    };

    const handleTouchStart = useCallback((e) => {
        touchStartY.current = e.touches[0].clientY;
        touchStartTime.current = Date.now();
    }, []);

    const handleTouchEnd = useCallback((e) => {
        if (touchStartY.current === null || swipeCooldown.current) return;

        const deltaY = touchStartY.current - e.changedTouches[0].clientY;
        const elapsed = Date.now() - touchStartTime.current;
        const velocity = Math.abs(deltaY) / elapsed;

        touchStartY.current = null;

        // Require intentional swipe: 50px+ travel AND 0.25px/ms velocity
        if (Math.abs(deltaY) < 50 || velocity < 0.25) return;

        const el = contentRef.current;
        const atTop = !el || el.scrollTop <= 2;
        const atBottom = !el || (el.scrollTop + el.clientHeight >= el.scrollHeight - 2);

        const idx = SECTION_IDS.indexOf(activeTab);

        if (deltaY > 0 && atBottom && idx < SECTION_IDS.length - 1) {
            // Swipe up at bottom boundary → next section
            swipeCooldown.current = true;
            setTimeout(() => { swipeCooldown.current = false; }, 700);
            navigateTo(SECTION_IDS[idx + 1], 'swipe');
        } else if (deltaY < 0 && atTop && idx > 0) {
            // Swipe down at top boundary → previous section
            swipeCooldown.current = true;
            setTimeout(() => { swipeCooldown.current = false; }, 700);
            navigateTo(SECTION_IDS[idx - 1], 'swipe');
        }
    }, [activeTab, navigateTo]);

    useEffect(() => {
      const el = contentRef.current;
      if (!el) return;
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
      return () => {
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
      };
    }, [handleTouchStart, handleTouchEnd]);

    const isTap = triggerType.current === 'tap';
    const animClass =
      animPhase === 'exit'  ? (isTap ? 'anim-exit'        : 'anim-exit-smooth') :
      animPhase === 'enter' ? (isTap ? 'anim-enter'       : 'anim-enter-smooth') :
      '';

    const ActiveComponent = sections.find(s => s.id === activeBar)?.component;

    // Desktop accordion handlers — use direct state since desktop has no animation
    const handleDesktopClick = (id) => {
        setActiveBar(id);
        setActiveTab(id);
    };

    const handleDesktopKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDesktopClick(id);
        }
    };

    return (
        <>
            {/* Desktop accordion — hidden at < 1024px via CSS */}
            <div className="container">
                <MenuBar id="home" label="" isActive={activeBar === 'home'} onClick={handleDesktopClick} onKeyDown={handleDesktopKeyDown} detailsComponent={HomeDetails} />
                <MenuBar id="projects" label="PROJECTS" isActive={activeBar === 'projects'} onClick={handleDesktopClick} onKeyDown={handleDesktopKeyDown} detailsComponent={ProjectsDetails} />
                <MenuBar id="edu-skills" label="SKILLS" isActive={activeBar === 'edu-skills'} onClick={handleDesktopClick} onKeyDown={handleDesktopKeyDown} detailsComponent={EduSkillsDetails} />
                <MenuBar id="about" label="ABOUT" isActive={activeBar === 'about'} onClick={handleDesktopClick} onKeyDown={handleDesktopKeyDown} detailsComponent={AboutDetails} />
                <MenuBar id="connect" label="CONNECT" isActive={activeBar === 'connect'} onClick={handleDesktopClick} onKeyDown={handleDesktopKeyDown} detailsComponent={ConnectDetails} />
            </div>

            {/* Mobile side rail — hidden at >= 1024px via CSS */}
            <div className="mobile-container">
                <div
                    className={`mobile-content ${activeBar} ${animClass}`}
                    ref={contentRef}
                    role="tabpanel"
                    id="section-panel"
                    aria-labelledby={`tab-${activeTab}`}
                    onAnimationEnd={handleAnimEnd}
                >
                    {ActiveComponent && <ActiveComponent />}
                </div>
                <nav
                    className="mobile-rail"
                    role="tablist"
                    aria-label="Portfolio sections"
                >
                    {sections.map(({ id, label }) => (
                        <div
                            key={id}
                            id={`tab-${id}`}
                            className={`rail-tab ${id}${activeTab === id ? ' active' : ''}`}
                            role="tab"
                            aria-selected={activeTab === id}
                            tabIndex={0}
                            onClick={() => handleClick(id)}
                            onKeyDown={(e) => handleKeyDown(e, id)}
                        >
                            <span className="rail-tab-label">{label}</span>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default App;
