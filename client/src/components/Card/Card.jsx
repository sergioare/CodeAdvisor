import "./Card.scss"

const CardGeneral = (props) => {

  return (
    <div className="cardContainer">
      <div className="cardMain">
        <img src={props.img} alt="imageprofile" />
        <div className="cardBg">
          <h1>{props.name}</h1>
          <div className="letra">
            <h2>Tech Skills:</h2> <p>{props.Programming_language}</p>
            <h2>Native language:</h2> <p>{props.Native_language}</p>
            <h2>Ranking:</h2> <p>{props.Ranking}</p>
          </div>
          <button variant="primary">Meet Advisor</button>
        </div>
      </div>
    </div>

  )
}

export default CardGeneral;