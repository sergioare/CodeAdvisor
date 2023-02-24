import React, { useState, useEffect } from 'react';
import './Profile.scss';
import { getProfile, getAdvisorReviews } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth'


function Profile ({isProfileOpen, toggleProfile, isConfigBarOpen, closeSideBar, openAdmin, toggleAdmin}) {
const id = "2Vyng2S1Lfwv8ge4A9Mv"; //cambair id por id de cada cuenta
const auth = getAuth();
console.log(auth)
console.log(auth.currentUser)
const data = {Uid: auth.uid}

//console.log(data)

  const dispatch = useDispatch();
  dispatch(getProfile(id)); 
  dispatch(getAdvisorReviews(id))
  const profileData = useSelector(state => state.profile)
  const Reviews = useSelector(state => state.advisorReviews)


  // hardcodeo de advisor
  const isAdvisor = true

  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(profileData);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleProfileDataUpdate = (updatedData) => {
    const updatedProfile = { ...profile, ...updatedData };
    handleProfileUpdate(updatedProfile);
  };

  const handleEdit = () => {
    if(editing){
      //considerar agregar la condicion de que haya cambiado la data,
      //para no hacer mandar al server al pedo cada vez que se apreta el boton
      //subir la data al server
    }

    setEditing(!editing);
  };
    
    if(isProfileOpen){
        closeSideBar();
        if(openAdmin){
          toggleAdmin();
      }
    }

    
  return (
    <div className={`profile ${isProfileOpen ? 'profile--open' : ''} ${isConfigBarOpen ? 'config-sidebar-open' : ''}`}>
      <div className="profile__header">
        <button className="profile__close-btn" onClick={handleEdit}>Edit</button>
        <h2 className="profile__title">Profile</h2>
        <button className="profile__close-btn" onClick={toggleProfile}>X</button>
      </div>
      {!editing && (
      <div>
      <div className="profile__content">
        <div className="profile__left">
            <div className="profile__left__container">
              <div className="profile__image-container">
                <img className="profile__image" src={profileData?.Img} alt="Profile" />
              </div>
                <h2 className="profile__nickname">{profileData.Nickname}</h2>
              </div>
            </div>
        <div className="profile__right">
            <div className="profile__right__container">
                <div className="profile__info-row">
                    <div className="profile__info-column">
                    <span className="profile__label">First Name:</span>
                    <span className="profile__value">{profileData.Firstname}</span>
                    </div>
                    <div className="profile__info-column">
                    <span className="profile__label">Last Name:</span>
                    <span className="profile__value">{profileData.Lastname}</span>
                    </div>
                </div>
                <div className="profile__info-row">
                    <div className="profile__info-column">
                    <span className="profile__label">Contact:</span>
                    <span className="profile__value">{profileData.Contact}</span>
                    </div>
                    <div className="profile__info-column">
                    <span className="profile__label">Email:</span>
                    <span className="profile__value">{profileData.Email}</span>
                    </div>
                </div>
                <div className="profile__about-me">
                    <h3 className="profile__label">About Me</h3>
                    <p className="profile__about-me-text">{profileData.About}</p>
                </div>
            </div>
        </div>
      </div>
      {isAdvisor && (
        <div className="advisor-section">
        <div className="tables-container">
          <div className="table-wrapper">
            <table className="table-1">
              <thead>
                <tr>
                  <th colSpan="2">Details:</th>
                  <th colSpan="2"  className="tittle">Tech Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="tittle">Residence</th>
                  <td>{profileData.Residence}</td>
                  <td rowSpan="4"  className="data" style={{border: "2px solid #794BFF"}}>
                    <ul>
                      {profileData.TechSkills?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="tittle">Speciality</th>
                  <td>
                    <ul>
                      {profileData.Specialty?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="tittle">Language</th>
                  <td>
                    <ul>
                      {profileData.Language?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="tittle">Price per hour</th>
                  <td>{profileData.Price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-wrapper">
            <table className="table-2">
              <tbody>
                <tr>
                  <th className="tittle">Class</th>
                  <th className="tittle">Calendar</th>
                </tr>
                <tr>
                  <td>In progress</td>
                  <td rowSpan="3" className="data" style={{border: "2px solid #794BFF"}}>In progress</td>
                </tr>
                <tr>
                  <th className="tittle">Meet</th>
                </tr>
                <tr>
                <td className="data">In progress</td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="table-wrapper-third">
            <table className="table-3">
              <tbody>
                <tr>
                  <th className="col-1" colSpan="5">Reviews</th>
                </tr>
                <tr>
                  <th className="tittle">Name</th>
                  <th className="tittle">Score</th>
                  <th className="tittle" colSpan="3">Review</th>
                </tr>
                {Reviews.map((review, index) => (
                  <tr key={index}>
                    <td className="data" style={{ width: "15%" }}>{review.Name}</td>
                    <td className="data" style={{ width: "5%" }}>{review.score}</td>
                    <td className="data" style={{ width: "80%" }}>{review.Reviwer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
          )}
      </div>
      )}
      {editing && (
  <div className="form">
    <h1>form de editar datos</h1>
  </div>
)}

      

      </div>
    
  );
}

export default Profile;
