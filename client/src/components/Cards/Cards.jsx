import Card from "../Card/Card"
import "./Cards.scss"
// import { advisors } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvisors } from '../../redux/actions/actions';
import { useEffect } from 'react';

const Cards = ({ isSidebarOpen }) => {

  const dispatch = useDispatch();
  const advisors = useSelector(state => state.advisorsInDisplay);

  useEffect(() => {
    dispatch(getAdvisors())
  }, [dispatch])

  return (

    <div className={`containerPrincipal ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="containeMessage">
        <h1>Our Advisors</h1>
        <br></br>
        <p>Let's find the best advisor for you.</p>
      </div>
      <div className="container">
        {advisors?.map((advisor) => {
          return <Card
            key={advisor.id}
            id={advisor.id}
            Image={advisor.Img}
            Firstname={advisor.Firstname + ' ' +
             advisor.Lastname}
            TechSkills={advisor.TechSkills}
            Specialty={advisor.Specialty}
            Score={advisor.Score}
          />
        })}
      </div>

    </div>
  )
}

export default Cards;