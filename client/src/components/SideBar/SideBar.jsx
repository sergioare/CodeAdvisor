import { Countries, ProgrammingLanguages, SortMethod, Languages, Specialties } from "./data"
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
        <i className="menu-icon fas fa-bars" onClick={handleMenuIconClick}></i>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                <i className="menu-icon fas fa-bars" onClick={handleMenuIconClick}></i>
                </div>
                <div className="sidebar-content">

                    <p className="sidebar-title">I'm looking for:</p>
                    <div className="options-container">

                    <div className="filter-container">
                    {Specialties.map((item) => {
                            return (<div key={item + "container"} className={`option-item ${specialty === item ? "selected" : ""}`}>
                                        <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={specialty === item} onChange={handleSpecialityClick} />
                                        <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                                    </div>)
                        })}
                    </div>

                    <div className="filter-container">
                        {Languages.map((item) => {
                            return (<div key={item + "container"} className={`option-item ${language === item ? "selected" : ""}`}>
                                        <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={language === item} onChange={handleLanguageClick} />
                                        <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                                    </div>)
                        })}
                    </div>
                    </div>

                    <p className="sidebar-title">Programming language:</p>
                    <select className="sidebar-select">
                        {ProgrammingLanguages.map((item) => {
                            return <option key={item}>{item}</option>;
                        })}
                    </select>

                    <p className="sidebar-title">Country:</p>
                    <select className="sidebar-select">
                        {Countries.map((item) => {
                            return <option key={item}>{item}</option>;
                        })}
                    </select>

                    <p className="sidebar-title">Sort by:</p>
                    <div className="options-container">

                        {SortMethod.map((item, index) => {
                            return (<div className="filter-container" key={item + "container"}>
                                <input 
                                    key={index}
                                    type="checkbox" 
                                    value = {item}
                                    checked={selectedOrder === item} 
                                    onChange={handleOrderClick}
                                />
            
                                <div key={item} className={`option-item ${selectedOrder === item ? "selected" : ""}`} onClick={handleOrderClick}>{item}</div>
                                </div>)
                        })}

                    </div>
        </div>
      </div>
    </>
    )
}

export default SideBar