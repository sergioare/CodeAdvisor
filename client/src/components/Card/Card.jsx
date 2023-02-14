import "./Card.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardGeneral = (props) =>{
    return(
       
        <div className="container">
            <Card>
              <Card.Img variant="top" src={props.img} />
              <Card.Body className="cardBg">
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                Programming Language: {props.Programming_language}
                <br></br>
                Native language: {props.Native_language}
                <br></br>
                Ranking: {props.Ranking}
                </Card.Text>
              
                <Button variant="primary">Meet Advisor</Button>
              </Card.Body>
            </Card>
            </div>
    


    )
}





export default CardGeneral;