import React, { useState, useEffect } from 'react';
import './Profile.scss';
import { getProfile, getAdvisorReviews } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth'
import ModProfile from '../Modals/ModProfile';
import { updateDates, updateAvailability  } from '../../redux/actions/actions';


//let dateClickHandlerAdded = false;

function Profile ({isProfileOpen, toggleProfile, isConfigBarOpen}) {
const auth = getAuth();
const currentUser = auth.currentUser;

// hardcodeo de advisor
const isAdvisor = true
  
//const id = "2Vyng2S1Lfwv8ge4A9Mv"; //cambair id por id de cada cuenta
const id = currentUser ? currentUser.uid : '2Vyng2S1Lfwv8ge4A9Mv';
const userEmail = currentUser ? currentUser.email : null;


const dispatch = useDispatch();
useEffect(() => {
  if (id) {
    dispatch(getProfile(id)); 
    dispatch(getAdvisorReviews(id));
  }
}, [dispatch]);
  
const profileData = useSelector(state => state.profile)
const Reviews = useSelector(state => state.advisorReviews)

const [editing, setEditing] = useState(false);

const handleEdit = () => {
  if(editing){
    //considerar agregar la condicion de que haya cambiado la data,
    //para no hacer mandar al server al pedo cada vez que se apreta el boton
    //subir la data al server
  }

  setEditing(!editing);
};
  
let lowestScore, averageScore, highestScore;

if (Reviews && Reviews.length > 0) {
  const scores = Reviews.map(review => review.score);
  lowestScore = Math.min(...scores);
  averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
  highestScore = Math.max(...scores);
} else {
  lowestScore = "No reviews so far";
  averageScore = "No reviews so far";
  highestScore = "No reviews so far";
}

// a partir de acá codigo de calendar: 
var monthChanged = false
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date");

const availableDates = useSelector(state => state.availability)
const dates = useSelector(state => state.dates);
const [selectedDate, setSelectedDate] = useState(null);
const [Dmonth, setMonth] = useState(dates.month);
const [Dyear, setYear] = useState(dates.year);

// getting new date
let date = new Date();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];


const renderCalendar = (year, month, selectedDate, monthChanged, availableDatesRender) => {
  console.log("avai render")
  console.log(availableDatesRender)
    let firstDayofMonth = new Date(year, month, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(year, month + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(year, month, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(year, month, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding today class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "today" : "";
        let isSelected = selectedDate && i.toString() === selectedDate.date && month === selectedDate.month && year === selectedDate.year ? "selected" : "";
        let isActive = "inactive" !== isToday.trim() && "inactive" !== isSelected.trim() ? "active" : "";
        let hasAvailable = availableDatesRender.flatMap(arr => arr).some(obj => obj.id === id && obj.date == i.toString() && obj.month === month && obj.year === year && obj.state === "available") ? "available" : "";
        let hasReserved = availableDatesRender.flatMap(arr => arr).some(obj => obj.id === id && obj.date == i.toString() && obj.month === month && obj.year === year && obj.state === "reserved") ? "reserved" : "";
        liTag += `<li class="${isToday} ${isActive} ${isSelected} ${hasAvailable} ${hasReserved}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[month]} ${year}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;

    
    if(monthChanged){
      //const clonedElement = daysTag.cloneNode(true);
      //daysTag.replaceWith(clonedElement);
      //daysTag.removeEventListener("click", (e)=>{});
      daysTag.addEventListener("click", (e)=>{
        e.preventDefault()
        const clickedDate = e.target.innerText;
        const newSelectedDate = { date: clickedDate, month: month, year: year };
        setSelectedDate(newSelectedDate);
        renderCalendar(year, month, newSelectedDate, false, availableDates); // Call renderCalendar function with updated month and year values
      });
    monthChanged = false
}
}


const prevNextClick = (direction) => { 
  let currMonth = Dmonth
  let currYear = Dyear
  if (direction === "prev") {
    if (currMonth === 0) {
      currMonth = 11;
      currYear = currYear - 1;
    } else {
      currMonth = currMonth - 1;
    }
  } else {
    if (currMonth === 11) {
      currMonth = 0;
      currYear = currYear + 1;
    } else {
      currMonth = currMonth + 1;
    }
  }
  dispatch(updateDates({ month: currMonth, year: currYear }));

  setMonth(currMonth)
  setYear(currYear)

  monthChanged = true

  renderCalendar(currYear, currMonth, selectedDate, monthChanged, availableDates); // Pass currMonth and currYear as arguments to renderCalendar function
};

//renderizamos el calendar una vez se hayan cargado los datos y solo si esta el profile abierto y cuando no se habian seleccionado fechas o cambiado los meses
/* useEffect(() => {
  if (!dateClickHandlerAdded) {
    dateClickHandlerAdded = true
    renderCalendar(currMonth, currYear, selectedDate);
  }
}, []); */


//codigo de periodos de tiempo:
const startTime = 0;
const endTime = 24;
const timeSlots = [];

for (let hour = startTime; hour < endTime; hour++) {
  timeSlots.push({
    id: id,
    date: selectedDate?.date,
    month: selectedDate?.month,
    year: selectedDate?.year,
    startingHour: hour,
    endingHour: hour + 1,
    state: 'blocked'
  });
}

const [selectedTimeSpan, setSelectedTimeSpan] = useState(timeSlots);
const [timeState, setTimeState] = useState("blocked");

const handleStateButtonClick = (state) => {
  setTimeState(state);
}

const handleTimeSpanClick = (index) => {
  setSelectedTimeSpan(prevState => {
    const newState = [...prevState];
    newState[index].state = timeState;
    return newState;
  });
  renderCalendar(Dyear, Dmonth, selectedDate);
}

/* useEffect(() => {
  dispatch(updateAvailability(selectedTimeSpan));
}, [selectedTimeSpan]); */

useEffect(() => {
  selectedTimeSpan.forEach(timeSpan => {
    console.log(timeSpan)
    dispatch(updateAvailability(timeSpan));
  });
}, [selectedTimeSpan]);

    
useEffect(() => {
  setSelectedTimeSpan(prevState => {
    const newState = [...prevState];
    for (let hour = startTime; hour < endTime; hour++) {
    newState[hour].date = selectedDate?.date;
    newState[hour].month = selectedDate?.month;
    newState[hour].year = selectedDate?.year;
    newState[hour].state = "blocked";
    }
    return newState;
  });
}, [selectedDate]);

console.log(availableDates)

return (
  <div className={`profile ${isProfileOpen ? 'profile--open' : ''} ${isConfigBarOpen ? 'config-sidebar-open' : ''}`}>
    <div className="profile__header">
      <h2 className="profile__title" onClick={toggleProfile}>{isAdvisor ? "Advisor profile" : "User profile"}</h2>
      <button className="profile__title" onClick={handleEdit}><ModProfile/></button>
      <button className="fas fa-window-close fa-2x" onClick={toggleProfile}></button>
    </div>
    {!editing && (
    <div>
    <div className="profile__content">
      <div className="profile__left">
        <div className="profile__left__container">
          <div className="profile__image-container">
          <img 
            className="profile__image" 
            src={profileData.Img || 'https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg'} 
            alt="Profile"
            onClick={!profileData.Img ? handleEdit : undefined}
            style={!profileData.Img ? { cursor: "pointer" } : undefined}
          />
          </div>
          <h2 className="profile__nickname">{profileData.Nickname || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</h2>
        </div>
      </div>
      <div className="profile__right">
        <div className="profile__right__container">
          <div className="profile__info-row">
            <div className="profile__info-column">
              <span className="profile__label">First Name:</span>
              <span className="profile__value">{profileData.Firstname || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</span>
            </div>
            <div className="profile__info-column">
              <span className="profile__label">Last Name:</span>
              <span className="profile__value">{profileData.Lastname || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</span>
            </div>
          </div>
          <div className="profile__info-row">
            <div className="profile__info-column">
              <span className="profile__label">Contact:</span>
              <span className="profile__value">{profileData.Contact || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</span>
            </div>
            <div className="profile__info-column">
              <span className="profile__label">Email:</span>
              <span className="profile__value">{userEmail || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</span>
            </div>
          </div>
          <div className="profile__about-me">
            <h3 className="profile__label">About Me</h3>
            <p className="profile__about-me-text">{profileData.About || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</p>
          </div>
        </div>
      </div>
    </div>
    {!isAdvisor && (
      <div className="tables-section">
        <div className="tables-container">        
          <div className="table-wrapper-full-width">
          <table className="table-3">
            <tbody>
              <tr>
                <th className="tittle">Class</th>
                <th className="tittle">Calendar</th>
              </tr>
              <tr>
                <td className="data">In progress</td>
                <td rowSpan="3" className="data" style={{border: "2px solid #794BFF"}}>
                <div>
                <div className="wrapper">
                  <div className='calendarHours'>
                    <header>
                      <p className="current-date"></p>
                      <div className="icons">
                        <button onClick={()=>{prevNextClick("prev")}} className="material-symbols-rounded">&lt;</button>
                        <button onClick={()=>{prevNextClick("next")}} className="material-symbols-rounded">&gt;</button>
                      </div>
                    </header>
                    <div className="calendar">
                      <ul className="weeks">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                      </ul>
                      <ul className="days"></ul>
                    </div>
                  </div>
                  
                </div>
                
              </div>
                </td>
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
      </div>
    </div>
    )}
    {isAdvisor && (
      <div className="tables-section">
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
              <td>{profileData.Residence || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</td>
              <td rowSpan="4"  className="data" style={{border: "2px solid #794BFF"}}>
                {profileData.TechSkills
                  ? (
                    <ul>
                      {profileData.TechSkills.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{<button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</p>
                  )}
              </td>
            </tr>
            <tr>
              <th className="tittle">Speciality</th>
              <td>
                {profileData.Specialty
                  ? (
                    <ul>
                      {profileData.Specialty.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{<button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</p>
                  )}
              </td>
            </tr>
            <tr>
              <th className="tittle">Language</th>
              <td>
                {profileData.Language
                  ? (
                    <ul>
                      {profileData.Language.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{<button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</p>
                  )}
              </td>
            </tr>
            <tr>
              <th className="tittle">Price per hour</th>
              <td>{profileData.Price || <button className="complete-your-data" onClick={handleEdit}>Complete your data</button>}</td>
            </tr>
          </tbody>
        </table>
      </div>
        <div className="table-wrapper">
          <table className="table-2">
            <tbody>
              <tr>
                <th className="tittle" style={{ width: "30%" }}>Class</th>
                <th className="tittle" style={{ width: "70%" }}>Calendar</th>
              </tr>
              <tr>
                <td className="data">In progress</td>
                <div>
                <div className="wrapper">
                  <header>
                    <p className="current-date"></p>
                    <div className="icons">
                    <button onClick={()=>{prevNextClick("prev")}} className="material-symbols-rounded">&lt;</button>
                    <button onClick={()=>{prevNextClick("next")}} className="material-symbols-rounded">&gt;</button>
                    </div>
                  </header>
                  <div className="calendar">
                    <ul className="weeks">
                      <li>Sun</li>
                      <li>Mon</li>
                      <li>Tue</li>
                      <li>Wed</li>
                      <li>Thu</li>
                      <li>Fri</li>
                      <li>Sat</li>
                    </ul>
                    <ul className="days"></ul>
                  </div>
                </div>
                <table className='timesTable'>
                      <thead>
                      <tr>
                      <th>{selectedDate ? `${months[selectedDate.month]} ${selectedDate.date} / ${selectedDate.year}` : "Select a date"}</th>
                    </tr>

                      </thead>
                      <div>
  <div>
    <button onClick={() => handleStateButtonClick("blocked")}>Blocked</button>
    <button onClick={() => handleStateButtonClick("available")}>Available</button>
    <button onClick={() => handleStateButtonClick("reserved")}>Reserved</button>
  </div>
  <table>
    <tbody>
      {selectedTimeSpan.map((timeSpan, index) => (
        <tr key={index}>
          <td>
            <button onClick={() => handleTimeSpanClick(index)}>
              {timeSpan.startingHour}:00 - {timeSpan.endingHour}:00
            </button>
          </td>
          <td>{timeSpan.state}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
                    </table>
                
              </div>
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
        <div className="table-wrapper-full-width">
          <table className="table-3">
            <tbody>
              <tr>
                <th className="col-1" colSpan="3">Score</th>
              </tr>
              <tr>
                <th className="tittle">Lowest</th>
                <th className="tittle">Average</th>
                <th className="tittle">Highest</th>
              </tr>
              <tr>
                <td className="data">{lowestScore}</td>
                <td className="data">{averageScore}</td>
                <td className="data">{highestScore}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-wrapper-full-width">
          <table className="table-3">
            <tbody>
              <tr>
                <th className="col-1" colSpan="5">Reviews</th>
              </tr>
              <tr>
                <th className="tittle" style={{ width: "15%" }}>Name</th>
                <th className="tittle" style={{ width: "5%" }}>Score</th>
                <th className="tittle" style={{ width: "80%" }}>Review</th>
              </tr>
              {Reviews.map((review, index) => (
                <tr key={index}>
                  <td className="data" >{review.Name}</td>
                  <td className="data" >{review.score}</td>
                  <td className="data" >{review.Reviwer}</td>
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
