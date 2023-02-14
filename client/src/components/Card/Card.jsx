import styles from "../Card/Card.module.css"

const Card = (props) =>{
    return(
        <div className={styles.cardCont}>
        
        <img className={styles.img} src={props.img} alt="img"/>
        <p> Name: {props.name}</p>
        <p> Ranking: {props.Ranking}</p>
        <p> Programming Language: {props.Programming_language}</p>
        <p> Native language: {props.language}</p>

        </div>
    )
}

export default Card;