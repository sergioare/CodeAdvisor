import { useState, useRef } from 'react';
import "./ConfigSideBar.scss"

function ConfigSideBar(props) {
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
        props.toggleConfigBar();
    }

    return (
        <div className={`Configsidebar ${props.isConfigBarOpen ? 'open' : 'closed'}`}>
            <button className="title" onClick={handleTitleClick}>Configurations</button>
            <button ref={languageToggle} className="language-toggle" onClick={handleLanguageToggle}>
                {isEnglish ? 'English' : 'Español'}
            </button>
            <button ref={themeToggle} className="theme-toggle" onClick={handleThemeToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="https://example.com/report">Report a problem</a>
            <button className="signoff-button" onClick={signOff}>Sign off</button>
        </div>
    );
}

export default ConfigSideBar;
