import { useState, useRef } from 'react';
import ModInquiries from '../Modals/ModInquiries';
import "./ConfigSideBar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Admin from '../Admin/Admin';
import { useAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';

function ConfigSideBar({isAdmin, isConfigBarOpen, toggleConfigBar, toggleProfile, closeSideBar, openAdmin, toggleAdmin, isSidebarOpen, isProfileOpen}) {
    const [isEnglish, setIsEnglish] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const languageToggle = useRef(null);
    const themeToggle = useRef(null);

  const { logout} = useAuth();


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

    const signOff= async (e) => {
        e.preventDefault();
        await logout()
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

    const handleAdminButtonClick = () => {
        toggleAdmin();
        closeSideBar();       
        if(isProfileOpen){
            toggleProfile();
        }
    }
  
    return (
        <div className={`Configsidebar ${isConfigBarOpen ? 'open' : 'closed'}`}>
            <button className="config-title" onClick={handleTitleClick}><i className="fa-solid fa-gear"></i>Settings</button>
            <button className="language-toggle" onClick={handleProfileClick}><i className="fa-solid fa-user"></i>Your Profile</button>
            {/* <button ref={languageToggle} className="language-toggle" onClick={handleLanguageToggle}>
                {isEnglish ? 'English' : 'Español'}
            </button>
            <button ref={themeToggle} className="theme-toggle" onClick={handleThemeToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
            <ModInquiries/>
            {isAdmin && <button className='dashboard' onClick={handleAdminButtonClick}><DashboardIcon className='i'/>Dashboard</button>}
            <button className='documentation'>
                <Link to='https://sergios-organization-2.gitbook.io/code-advisor/' className='link'>
                    <i className="fa-solid fa-book"></i>Documentation
                    </Link></button>
            
            <button className="signoff-report-button" onClick={signOff}> <i className="fa-solid fa-right-from-bracket"></i>Sign out</button>
        </div>
    );
}

export default ConfigSideBar;
