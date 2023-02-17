import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterBySpecialty,
  filterByLanguage,
  filterByProgrammingLanguage,
  filterByResidence,
  sortAdvisors,
} from "../../redux/actions/actions";
import { Countries, ProgrammingLanguages, Languages, Specialties, SortMethod } from "./data";
import "./SideBar.scss";

const SideBar = () => {

  const dispatch = useDispatch();
  const [specialties, setSpecialties] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("Best Score");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const newSpecialties = [...specialties];
        dispatch(filterBySpecialty(newSpecialties));
    }, [specialties]);
    
    useEffect(() => {
        const newLanguages = [...languages];
        dispatch(filterByLanguage(newLanguages));
    }, [languages]);

    useEffect(() => {
        const newProgrammingLanguages = [...programmingLanguages];
        dispatch(filterByProgrammingLanguage(newProgrammingLanguages));
    }, [programmingLanguages]);

    useEffect(() => {
        const newCountries = [...countries];
        dispatch(filterByResidence(newCountries));
    }, [countries]);

    useEffect(() => {
        dispatch(sortAdvisors(selectedOrder));
    }, [selectedOrder]);
    
    const handleSpecialtyChange = async (event) => {
      const { value } = event.target;
      setSpecialties((prevSpecialties) => {
        if (prevSpecialties.includes(value)) {
          return prevSpecialties.filter((specialty) => specialty !== value);
        } else {
          return [...prevSpecialties, value];
        }
      });
    };

  const handleLanguageChange = async (event) => {
    const { value } = event.target;
    setLanguages((prevLanguages) => {
      if (prevLanguages.includes(value)) {
        return prevLanguages.filter((language) => language !== value);
      } else {
        return [...prevLanguages, value];
      }
    });
  };
  
  const handleProgrammingLanguageChange = async (event) => {
    const { value } = event.target;
    setProgrammingLanguages((prevProgrammingLanguages) => {
      if (prevProgrammingLanguages.includes(value)) {
        return prevProgrammingLanguages.filter((programmingLanguage) => programmingLanguage !== value);
      } else {
        return [...prevProgrammingLanguages, value];
      }
    });
  };

  const handleCountryChange = async (event) => {
    const { value } = event.target;
    setCountries((prevCountries) => {
      if (prevCountries.includes(value)) {
        return prevCountries.filter((country) => country !== value);
      } else {
        return [...prevCountries, value];
      }
    });
  };
  
  

    const handleOrderClick = (event) => {
        setSelectedOrder(event.target?.innerHTML);  
    };

    const handleMenuIconClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
        <i className="menu-icon fas fa-bars" onClick={handleMenuIconClick} style={{position: "fixed"}}></i>
      
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
          <i className="menu-icon fas fa-bars" onClick={handleMenuIconClick} ></i>
          </div>
          <div className="blank-space"></div>
          <div className="sidebar-content">
            <div className="sidebar-section">
            <p className="sidebar-title">I'm looking for:</p>
            <div className="filter-container">
              {Specialties.map((item) => (
                <div key={item + "container"} className={`option-item ${specialties.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={specialties.includes(item)} onChange={handleSpecialtyChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item === "Freelance" ? item + " Developer" : item}</label>
                </div>
              ))}
            </div>
            </div>
            <div className="sidebar-section">
            <div className="filter-container">
              {Languages.map((item) => (
                <div key={item + "container"} className={`option-item ${languages.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={languages.includes(item)} onChange={handleLanguageChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                </div>
              ))}
            </div>
            </div>
            <div className="sidebar-section">
            <p className="sidebar-title">Programming Language:</p>
            <div className="filter-container">
              {ProgrammingLanguages.map((item) => (
                <div key={item + "container"} className={`option-item ${programmingLanguages.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={programmingLanguages.includes(item)} onChange={handleProgrammingLanguageChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                </div>
              ))}
            </div>
            </div>
            <div className="sidebar-section">
            <p className="sidebar-title">Country:</p>
            <div className="filter-container">
              {Countries.map((item) => (
                <div key={item + "container"} className={`option-item ${countries.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={countries.includes(item)} onChange={handleCountryChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                </div>
              ))}
            </div>
            </div>
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
            
                                <div key={item} value = {item} className={`option-item ${selectedOrder === item ? "selected" : ""}`} onClick={handleOrderClick}>{item}</div>
                                </div>)
                        })}

                    </div>
        </div>
      </div>
    </>
    )
}

export default SideBar