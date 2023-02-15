import "./ConfigSideBar.scss"


function ConfigSideBar(props) {

    const languageToggle = document.querySelector('.language-toggle');
    const themeToggle = document.querySelector('.theme-toggle');

    let isEnglish = true;
    let isDarkMode = false;

    languageToggle?.addEventListener('click', () => {
    isEnglish = !isEnglish;
    languageToggle.textContent = isEnglish ? 'English' : 'Español';
    languageToggle.classList.toggle('active', !isEnglish);
    });

    themeToggle?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    themeToggle.classList.toggle('active', isDarkMode);
    });

    function signOff() {
        console.log("singing off")
    // code to sign off the user
    }


    return(
        <>
        <h1>prueba</h1>
            <div className="sidebar">
            <div className="title">Configurations</div>
            <button className="language-toggle">English</button>
            <button className="theme-toggle">Light Mode</button>
            <a href="https://example.com/report">Report a problem</a>
            <button className="signoff-button" onClick={signOff}>Sign off</button>
            </div>

        </>
    )

}

export default ConfigSideBar