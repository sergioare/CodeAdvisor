import { Countries, ProgrammingLanguages } from "./data"
import './SideBar.scss'
import React, { useState } from "react";

const SideBar = () => {
    const [selectedOptionGroup1, setSelectedOptionGroup1] = useState("Advisor");
    const [selectedOptionGroup2, setSelectedOptionGroup2] = useState("English");
    const [selectedFilter, setSelectedFilter] = useState("Best Score");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleAdvisorClick = (e) => {
        setSelectedOptionGroup1(e.target.value);
    };

    const handleLanguageClick = (e) => {
        setSelectedOptionGroup2(e.target.value);
    };

    const handleFilterClick = (e) => {
        console.log(e.target)
        setSelectedFilter(e.target?.value? e.target?.value : e.target?.innerHTML);
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
                    <div className="option-item advisor">
                        <input type="checkbox" name="advisor" id="advisor" value={"Advisor"} checked={selectedOptionGroup1 === "Advisor"} onChange={handleAdvisorClick} />
                        <label htmlFor="advisor">Advisor</label>
                    </div>
                    <div className={`option-item freelance-developer ${selectedOptionGroup1 === "Freelance Developer" ? "selected" : ""}`}>
                        <input type="checkbox" name="freelance-developer" id="freelance-developer" value={"Freelance Developer"} checked={selectedOptionGroup1 === "Freelance Developer"} onChange={handleAdvisorClick} />
                        <label htmlFor="freelance-developer">Freelance Developer</label>
                    </div>
                    </div>
                                                <div className="filter-container">
                    <div className={`option-item english ${selectedOptionGroup2 === "English" ? "selected" : ""}`}>
                        <input type="checkbox" name="english" id="english" value={"English"} checked={selectedOptionGroup2 === "English"} onChange={handleLanguageClick} />
                        <label htmlFor="english">English</label>
                    </div>
                    <div className={`option-item spanish ${selectedOptionGroup2 === "Spanish" ? "selected" : ""}`}>
                        <input type="checkbox" name="spanish" id="spanish" value={"Spanish"} checked={selectedOptionGroup2 === "Spanish"} onChange={handleLanguageClick} />
                        <label htmlFor="spanish">Spanish</label>
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
                    <input 
                        type="checkbox" 
                        value="Best Score" 
                        checked={selectedFilter === "Best Score"} 
                        onChange={handleFilterClick}
                        onClick={() => handleFilterClick("Best Score")}
                    />

                    <div value="Best Score" className={`option-item ${selectedFilter === "Best Score" ? "selected" : ""}`} onClick={handleFilterClick}>Best Score</div>

                    <input 
                        type="checkbox" 
                        value="Most Available" 
                        checked={selectedFilter === "Most Available"} 
                        onChange={handleFilterClick}
                        onClick={handleFilterClick}
                    />
                    <div value="Most Available" className={`option-item ${selectedFilter === "Most Available" ? "selected" : ""}`} onClick={handleFilterClick}>Most Available</div>

                    <div>
                        
                    <input 
                        type="checkbox" 
                        value="More Affordable" 
                        checked={selectedFilter === "More Affordable"} 
                        onChange={handleFilterClick}
                        onClick={() => handleFilterClick("More Affordable")}
                        />
                    <div value="More Affordable" className={`option-item ${selectedFilter === "More Affordable" ? "selected" : ""}`} onClick={handleFilterClick}>More Affordable</div>
                    </div>
                    </div>
        </div>
      </div>
    </>
    )
}

export default SideBar