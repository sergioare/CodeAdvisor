import React, { useState, useEffect } from 'react';
import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth'
import ModProfile from '../Modals/ModProfile';
import ModUserProf from '../Modals/ModUserProf';
import { imgDefault, textProfile } from './data';
import { getProfile, getAdvisorReviews, updateDates, updateAvailability, getAvailability  } from '../../redux/actions/actions';
import { months, startTime, endTime, timeSlots, checkIfAdvisor } from './data';

let calendarRenderd = false;

function Profile ({isProfileOpen, toggleProfile, isConfigBarOpen}) {
const auth = getAuth();
const currentUser = auth.currentUser;
const [isAdvisor, setIsAdvisor] = useState(false);
const dispatch = useDispatch();


const id = "001"; //cambair id por id de cada cuenta
//const id = currentUser ? currentUser.uid : '2Vyng2S1Lfwv8ge4A9Mv';
const userEmail = currentUser ? currentUser.email : null;

async function checkIfAdvisorFunction(id) {
  const isAdvisor = await checkIfAdvisor(id);
  console.log(isAdvisor);
  return isAdvisor
}

useEffect(() => {
  async function fetchData() {
    if (id) {
      dispatch(getProfile(id)); 
      dispatch(getAdvisorReviews(id));
      dispatch(getAvailability(id))
      const advisorStatus = await checkIfAdvisorFunction(id);
      //setIsAdvisor(advisorStatus);
    }
  }
  fetchData();
}, []);

  
const profileData = useSelector(state => state.profile)
const Reviews = useSelector(state => state.advisorReviews)

const [editing, setEditing] = useState(false);

const handleEdit = () => {
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
let date = new Date();

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

const renderCalendar = (year, month, selectedDate, monthChanged, availableDatesRender) => {
  
    let firstDayofMonth = new Date(year, month, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(year, month + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(year, month, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(year, month, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "today" : "";
        let isSelected = selectedDate && i.toString() === selectedDate.date && month === selectedDate.month && year === selectedDate.year ? "selected" : "";
        let isActive = "inactive" !== isToday.trim() && "inactive" !== isSelected.trim() ? "active" : "";
        let hasAvailable = availableDatesRender.flatMap(arr => arr).some(obj => obj.Day == i.toString() && obj.Month === month && obj.Year === year && obj.State === "available") ? "available" : "";
        let hasReserved = availableDatesRender.flatMap(arr => arr).some(obj => obj.Day == i.toString() && obj.Month === month && obj.Year === year && obj.State === "reserved") ? "reserved" : "";
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

//codigo de timeSpans:
const [selectedTimeSpan, setSelectedTimeSpan] = useState(timeSlots);
const [timeState, setTimeState] = useState("blocked");


for (let hour = startTime; hour < endTime; hour++) {
  timeSlots.push({
    Day: selectedDate?.date,
    Month: selectedDate?.month,
    Year: selectedDate?.year,
    StartingHour: hour,
    EndingHour: hour + 1,
    State: 'blocked'
  });
}

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
  
useEffect(() => {
  setSelectedTimeSpan(prevState => {
    const newState = [...prevState];
    for (let hour = startTime; hour < endTime; hour++) {
      const matchingDates = availableDates.filter(date => {
        return (
          date.Day === selectedDate?.date &&
          date.Month === selectedDate?.month &&
          date.Year === selectedDate?.year &&
          date.StartingHour === hour
        );
      });

      if (matchingDates.length > 0) {
        newState[hour].state = matchingDates[0].State;
      } else {
        newState[hour].state = "blocked";
      }

      newState[hour].Day = selectedDate?.date;
      newState[hour].Month = selectedDate?.month;
      newState[hour].Year = selectedDate?.year;
    }
    return newState;
  });
}, [availableDates, selectedDate]);


useEffect(() => {
    dispatch(updateAvailability(selectedTimeSpan, id));
}, [selectedTimeSpan]);

//renderizamos el calendar una vez se hayan cargado los datos y solo si esta el profile abierto y cuando no se habian seleccionado fechas o cambiado los meses
if(currentDate && isProfileOpen && !calendarRenderd){
  calendarRenderd = true
  renderCalendar(Dyear, Dmonth, selectedDate, true, availableDates);}

return (
  <div className={`profile ${isProfileOpen ? 'profile--open' : ''} ${isConfigBarOpen ? 'config-sidebar-open' : ''}`}>

    <div className="header">
        <h2 className="title" onClick={toggleProfile}>{isAdvisor ? "Advisor profile" : "User profile"}</h2>
        <button className='fas' onClick={toggleProfile}>x</button>
    </div>

    <div>
    <div className="content">
      <div className="left">
        <div className="left_container">
          <div className="image-container">
            <img 
              className="image" 
              src={profileData.Img ||imgDefault } 
              alt="Profile"
              onClick={!profileData.Img ? handleEdit : undefined}
              style={!profileData.Img ? { cursor: "pointer" } : undefined}
            />
          </div>
          <h2 className="nickname">{profileData.Nickname || 'Nickname'}</h2>
        </div>
      </div>

      <div className="phrase">
       {isAdvisor
        ?<h1>{textProfile.h1Advisor}</h1>
        : <h1>{textProfile.h1User}</h1>
        }
      <hr/>
      </div>

      <div className="right">
        <div className="right__container">
            <div className="info-column">
              <span className="label">First Name:</span>
              <span className="value">{profileData.Firstname || null}</span>
            </div>
            <div className="info-column">
              <span className="label">Last Name:</span>
              <span className="value">{profileData.Lastname || null}</span>
            </div>
         
            <div className="info-column">
              <span className="label">Contact:</span>
              <span className="value">{profileData.Contact || null}</span>
            </div>
            
            <div className="info-column">
              <span className="label">Email:</span>
              <span className="value">{userEmail || null}</span>
            </div>
         
          <div className="info-column">
            <h3 className="label">About Me</h3>
            <p className="about-me-text">{profileData.About || null}</p>
          </div>
        </div>
      </div>
      <div className="edit">
        {isAdvisor
        ? <ModProfile/>
        : <ModUserProf/>
        }
      </div>
    </div>


    {!isAdvisor && (
      <div>
        <div className="tables-section">
          <div className="tables-container">        
            <div className="table-wrapper-full-width">
            <table>
              <tbody>
                <tr>
                  <th className="tittle">Class</th>
                  <th className="tittle">Calendar</th>
                </tr>
                <tr>
                  <td className="data">In progress</td>
                  <td rowSpan="3" className="data" style={{border: "2px solid #794BFF"}}>
                  <div>{/* calendario en user */}
                    <div className="calendar-wrapper">
                      <header>
                        <p className="current-date"></p>
                        <div className="icons">
                          <button onClick={()=>{prevNextClick("prev")}} className="prev-next-buttons">&lt;</button>
                          <button onClick={()=>{prevNextClick("next")}} className="prev-next-buttons">&gt;</button>
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
        {/* -----------------time Spans buttons ----------------- */}

        <div class="time-slots">
          <h1>Reserved Time Slots - {months[selectedDate?.month]} {selectedDate?.date} {selectedDate?.year}</h1>
          <div class="time-slots-container">
            <table>
              <thead>
                <tr>
                  <th>Time Slot</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {selectedTimeSpan.filter(timeSpan => timeSpan.state !== 'blocked').map((timeSpan, index) => (
                  <tr key={index} className={timeSpan.state}>
                    <td>
                      {timeSpan.StartingHour}:00 - {timeSpan.EndingHour}:00
                    </td>
                    <td>{timeSpan.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    )}


    {isAdvisor && ( 
      <div className="tables-section">
        <div className="tables-container">
          <div className="table-wrapper">

          {/* -----------------table 1 ----------------- */}

            <table className="table-1">
              <thead>
                <tr>
                  <th colSpan="2" className="tittle">Details:</th>
                  <th colSpan="1  "  className="tittle">Tech Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="tittle">Residence</th>
                  <td>{profileData.Residence || "---"}</td>
                  <td rowSpan="4"  className="tech">
                    {profileData.TechSkills
                      ? (
                        <ul>
                          {profileData.TechSkills.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : "---"}
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
                      ) : "---"}
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
                      ) : "---"}
                  </td>
                </tr>

                <tr>
                  <th className="tittle">Price per hour</th>
                  <td>{profileData.Price || "---"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* -----------------table 2 ----------------- */}
            <div className="table-wrapper">
              <table className="table-2">
                <tbody>
                  <tr>
                    <th className="tittle" style={{ width: "30%" }}>Class</th>
                    <th className="tittle" style={{ width: "100%" }}>Calendar</th>
                  </tr>
                  <tr>
                    <td className="data">

                          <div>
                          <div className="calendar-wrapper">
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
                          <hr/>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="tittle">Meet</th>
                    <td>---</td>
                  </tr>
                  <tr>
                  <th className="tittle">In progress</th>
                  <td>---</td>
                  </tr>

                </tbody>
              </table>
            </div>
            {/* -----------------time Spans buttons ----------------- */}
            <div className="time-slots">
              <h1>Available Time Slots - {months[selectedDate?.month]} {selectedDate?.date} {selectedDate?.year}</h1>
              <div className="state-buttons">
                <button className="blocked" onClick={() => handleStateButtonClick("blocked")}>Blocked</button>
                <button className="available" onClick={() => handleStateButtonClick("available")}>Available</button>
                <button className="reserved" onClick={() => handleStateButtonClick("reserved")}>Reserved</button>
              </div>
              <div className="time-slots-container">
                <table>
                  <thead>
                    <tr>
                      <th>Time Slot</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTimeSpan.map((timeSpan, index) => (
                    <tr key={index} className={timeSpan.state}>
                      <td>
                        <button onClick={() => handleTimeSpanClick(index)}>
                          {timeSpan.StartingHour}:00 - {timeSpan.EndingHour}:00
                        </button>
                      </td>
                      <td>{timeSpan.state}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          {/* -----------------table 3 ----------------- */}

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

          {/* -----------------table 4 ----------------- */}

            <div className="table-wrapper-full-width">
              <table className="table-4">
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
    </div>

  
);
}

export default Profile;
