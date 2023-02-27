import "./Card.scss";
import { Link } from 'react-router-dom';

const CardGeneral = (props) => {

  return (
    <div className="cardContainer">
      <div className="cardMain">
        <img src={props.Image} alt="imageprofile" />
        <div className="cardBg">
          <h1>{props.Firstname}{props.Lastname}</h1>
          <div className="letra">
            <h2>Tech Skills:</h2> <p>{props.TechSkills?.length > 1 ? props.TechSkills.join(', ') : props.TechSkills}</p>
            <h2>Specialty:</h2> <p>{props.Specialty/*?.length > 1 ? props.Specialty.join(', ') : props.Specialty*/}</p>
            <h2>Language:</h2> <p>{props.Language?.length > 1 ? Array.isArray(props.Language) && props.Language.join(', ') : props.Language}</p>
            <h2>Score:</h2> <p>⭐{props.Score}</p>

          </div>
          <Link to={`/user/${props.id}`}><button variant="primary">Meet Advisor</button></Link>
        </div>
      </div>
    </div>

  )
}

export default CardGeneral;