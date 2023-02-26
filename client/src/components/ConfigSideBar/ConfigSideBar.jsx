import { useState, useRef } from 'react';
import ModInquiries from '../Modals/ModInquiries';
import "./ConfigSideBar.scss"

function ConfigSideBar({isConfigBarOpen, toggleConfigBar, toggleProfile, closeSideBar, openAdmin, toggleAdmin, isSidebarOpen, isProfileOpen}) {
    const [isEnglish, setIsEnglish] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const languageToggle = useRef(null);
    const themeToggle = useRef(null);

    function handleLanguageToggle() {
        setIsEnglish(!isEnglish);
        languageToggle.current.textContent = isEnglish ? 'Español' : 'English';
        languageToggle.current.classList.toggle('active', isEnglish);
    }

    function handleThemeToggle() {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeToggle.current.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        themeToggle.current.classList.toggle('active', isDarkMode);
    }

    function signOff() {
        console.log("signing off");
        // code to sign off the user
    }

    function handleTitleClick() {
        toggleConfigBar();
    }

    function handleProfileClick(){
        toggleProfile();
        if(isSidebarOpen)closeSideBar();
        if(openAdmin)toggleAdmin();  
    }

    return (
        <div className={`Configsidebar ${isConfigBarOpen ? 'open' : 'closed'}`}>
            <button className="config-title" onClick={handleTitleClick}>Configurations</button>
            <button className="language-toggle" onClick={handleProfileClick}>Profile</button>
            <button ref={languageToggle} className="language-toggle" onClick={handleLanguageToggle}>
                {isEnglish ? 'English' : 'Español'}
            </button>
            <button ref={themeToggle} className="theme-toggle" onClick={handleThemeToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <ModInquiries/>
            <button className="signoff-report-button" onClick={signOff}>Sign off</button>
        </div>
    );
}

export default ConfigSideBar;
