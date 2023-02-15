import { Countries, ProgrammingLanguages } from "./data"
import './SideBar.scss'
import React, { useState } from "react";

const SideBar = () => {
    const [specialty, setSpecialty] = useState("Advisor");
    const [language, setLanguage] = useState("English");
    const [selectedOrder, setSelectedOrder] = useState("Best Score");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSpecialityClick = (e) => {
        setSpecialty(e.target.value);
    };

    const handleLanguageClick = (e) => {
        setLanguage(e.target.value);
    };

    const handleOrderClick = (e) => {
        setSelectedOrder(e.target?.value? e.target?.value : e.target?.innerHTML);
    };

    const handleMenuIconClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="menu-icon" onClick={handleMenuIconClick}></div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="menu-icon" onClick={handleMenuIconClick}></div>
                </div>
                <div className="sidebar-content">
                    <p className="sidebar-title">I'm looking for:</p>
                    <div className="options-container">
                    <div className="filter-container">
                    <div className={`option-item ${specialty === "Advisor" ? "selected" : ""}`}>
                        <input type="checkbox" className="filter-item" id="advisor" value={"Advisor"} checked={specialty === "Advisor"} onChange={handleSpecialityClick} />
                        <label htmlFor="advisor" className="filter-item">Advisor</label>
                    </div>
                    <div className={`option-item ${specialty === "Freelance Developer" ? "selected" : ""}`}>
                        <input type="checkbox" className="filter-item" id="freelance-developer" value={"Freelance Developer"} checked={specialty === "Freelance Developer"} onChange={handleSpecialityClick} />
                        <label htmlFor="freelance-developer" className="filter-item">Freelance Developer</label>
                    </div>
                    </div>
                    <div className="filter-container">
                    <div className={`option-item ${language === "English" ? "selected" : ""}`}>
                        <input type="checkbox" className="filter-item" id="english" value={"English"} checked={language === "English"} onChange={handleLanguageClick} />
                        <label htmlFor="english" className="filter-item">English</label>
                    </div>
                    <div className={`option-item ${language === "Spanish" ? "selected" : ""}`}>
                        <input type="checkbox" className="filter-item" id="spanish" value={"Spanish"} checked={language === "Spanish"} onChange={handleLanguageClick} />
                        <label htmlFor="spanish" className="filter-item">Spanish</label>
                    </div>
                    </div>

                    </div>
                    <p className="sidebar-title">Programming language:</p>
                    <select className="sidebar-select">
                        {ProgrammingLanguages.map((item, index) => {
                            return <option key={index}>{item}</option>;
                        })}
                    </select>
                    <p className="sidebar-title">Country:</p>
                    <select className="sidebar-select">
                        {Countries.map((item, index) => {
                            return <option key={index}>{item}</option>;
                        })}
                    </select>
                    <p className="sidebar-title">Sort by:</p>

                    <div className="options-container">
                    <div className="filter-container">
                    <input 
                        type="checkbox" 
                        value="Best Score" 
                        checked={selectedOrder === "Best Score"} 
                        onChange={handleOrderClick}
                    />

                    <div className={`option-item ${selectedOrder === "Best Score" ? "selected" : ""}`} onClick={handleOrderClick}>Best Score</div>
                    </div>
                    <div className="filter-container">
                    <input 
                        type="checkbox" 
                        value="Most Available" 
                        checked={selectedOrder === "Most Available"} 
                        onChange={handleOrderClick}
                    />
                    <div className={`option-item ${selectedOrder === "Most Available" ? "selected" : ""}`} onClick={handleOrderClick}>Most Available</div>
                    </div>
                    <div className="filter-container" >
                        
                    <input 
                        type="checkbox" 
                        value="More Affordable" 
                        checked={selectedOrder === "More Affordable"} 
                        onChange={handleOrderClick}
                        />
                    <div className={`option-item ${selectedOrder === "More Affordable" ? "selected" : ""}`} onClick={handleOrderClick}>More Affordable</div>
                    </div>
                    </div>
        </div>
      </div>
    </>
    )
}

export default SideBar