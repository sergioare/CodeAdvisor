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

const SideBar = ({ isSidebarOpen, setIsSidebarOpen, setCurrentPage }) => {

  const dispatch = useDispatch();
  const [specialties, setSpecialties] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("Best Score");

  useEffect(() => {
    const newSpecialties = [...specialties];
    dispatch(filterBySpecialty(newSpecialties));
    setCurrentPage(1);
  }, [specialties, dispatch, setCurrentPage]);

  useEffect(() => {
    const newLanguages = [...languages];
    dispatch(filterByLanguage(newLanguages));
    setCurrentPage(1);
  }, [languages, dispatch, setCurrentPage]);

  useEffect(() => {
    const newProgrammingLanguages = [...programmingLanguages];
    dispatch(filterByProgrammingLanguage(newProgrammingLanguages));
    setCurrentPage(1);
  }, [programmingLanguages, dispatch, setCurrentPage]);

  useEffect(() => {
    const newCountries = [...countries];
    dispatch(filterByResidence(newCountries));
    setCurrentPage(1);
  }, [countries, dispatch, setCurrentPage]);

  useEffect(() => {
    dispatch(sortAdvisors(selectedOrder));
    setCurrentPage(1);
  }, [selectedOrder, dispatch, setCurrentPage]);

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

  const clearFilters = () => {
    setSpecialties([]);
    setLanguages([]);
    setProgrammingLanguages([]);
    setCountries([]);
    setSelectedOrder("Best Score");
  }

  return (
    <>
      <i className="menu-icon-out fas fa-bars" onClick={handleMenuIconClick}></i>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <i className="menu-icon fas fa-bars" onClick={handleMenuIconClick} ></i>
          <div className="sidebar-clear-section">
            <button className="clear-filter-item" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>
        <div className="blank-space"></div>
        <div className="sidebar-content">

          <div className="sidebar-section">
            <h4 className="sidebar-title">I'm looking for:</h4>
            <div className="filter-container">
              {Specialties.map((item) => (
                <div key={item + "container"} className={`option-item ${specialties?.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={specialties?.includes(item)} onChange={handleSpecialtyChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item === "Freelance" ? item + " Developer" : item}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h4 className="sidebar-title">Languages:</h4>

            <div className="filter-container">
              {Languages.map((item) => (
                <div key={item + "container"} className={`option-item ${languages?.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={languages?.includes(item)} onChange={handleLanguageChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h4 className="sidebar-title">Tech Skills:</h4>
            <div className="filter-container-lot">
              {ProgrammingLanguages.map((item) => (
                <div key={item + "container"} className={`option-item ${programmingLanguages.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={programmingLanguages.includes(item)} onChange={handleProgrammingLanguageChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h4 className="sidebar-title">Country:</h4>
            <div className="filter-container-lot">
              {Countries.map((item) => (
                <div key={item + "container"} className={`option-item ${countries.includes(item) ? "selected" : ""}`}>
                  <input key={item + "check box"} type="checkbox" className="filter-item" id={item} value={item} checked={countries.includes(item)} onChange={handleCountryChange} />
                  <label key={item + "name"} htmlFor={item} className="filter-item">{item}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-title">Sort by:</h4>
            <div className="options-container">

              {SortMethod.map((item, index) => {
                return (<div className="filter-container" key={item + "container"}>
                  <input
                    key={index}
                    type="checkbox"
                    value={item}
                    checked={selectedOrder === item}
                    onChange={handleOrderClick}
                  />

                  <div key={item} value={item} className={`option-item ${selectedOrder === item ? "selected" : ""}`} onClick={handleOrderClick}>{item}</div>
                </div>)
              })}

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SideBar