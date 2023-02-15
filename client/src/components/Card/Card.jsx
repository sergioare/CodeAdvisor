import "./Card.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardGeneral = (props) => {

  return (
    <div>
      <Card className="cardMain">
        <Card.Img variant="top" src={props.img} />
        <Card.Body className="cardBg">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text className="letra">
            Programming Language: <p>{props.Programming_language}</p>
            <br></br>
            Native language: <p>{props.Native_language}</p>
            <br></br>
            Ranking: <p>{props.Ranking}</p>
          </Card.Text>

          <Button variant="primary">Meet Advisor</Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default CardGeneral;