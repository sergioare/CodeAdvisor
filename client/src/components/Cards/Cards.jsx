import styles from "../Cards/Cards.module.css"
import Card from "../Card/Card"

const Cards = () => {

const advisors = [{
    id: "1",
    Name: "Advisor 1",
    Programming_language: "React",
    Native_language:"Spanish",
    Ranking: "4.5",
    Image: "https://miro.medium.com/v2/resize:fit:720/0*FtLO5W4Bi5tWDv-8"
},

{
    id: "2",
    Name: "Advisor 2",
    Programming_language: "Phyton",
    Native_language:"Spanish",
    Ranking: "4.5",
    Image: "https://beadgrup.com/news/wp-content/uploads/2021/02/Gambar-Programmer-Professional.jpg"
},
{
    id: "1",
    Name: "Advisor 3",
    Programming_language: "React",
    Native_language:"Spanish",
    Ranking: "4.5",
    Image: "https://miro.medium.com/v2/resize:fit:720/0*FtLO5W4Bi5tWDv-8"
},

{
    id: "2",
    Name: "Advisor 4",
    Programming_language: "Phyton",
    Native_language:"Spanish",
    Ranking: "4.5",
    Image: "https://beadgrup.com/news/wp-content/uploads/2021/02/Gambar-Programmer-Professional.jpg"
},

]
    return(
        
        <div className={styles.container}>
        {/* <><h2>hola</h2></> */}
        <>
        {advisors.map((a) => {
                return <Card
                    key={a.id}
                    id={a.id}
                    img={a.Image}
                    name={a.Name}
                    Programming_language={a.Programming_language}
                    Native_language={a.Native_language}
                    Ranking={a.Ranking}
            />
        })}
        </>
            
        </div>
    )
}

export default Cards;