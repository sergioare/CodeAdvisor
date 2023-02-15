import Card from "../Card/Card"
import "./Cards.scss"

const Cards = () => {

  const advisors = [{
    id: "1",
    Name: "Advisor 1",
    Programming_language: "React, JS",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐⭐",
    Image: "https://avatars.githubusercontent.com/u/112988417?v=4"
  },

  {
    id: "2",
    Name: "Advisor 2",
    Programming_language: "Phyton, CSS",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐⭐",
    Image: "https://avatars.githubusercontent.com/u/78985516?v=4"
  },
  {
    id: "3",
    Name: "Advisor 3",
    Programming_language: "React",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐⭐",
    Image: "https://avatars.githubusercontent.com/u/83256099?v=4"
  },

  {
    id: "4",
    Name: "Advisor 4",
    Programming_language: "Phyton",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐⭐ ",
    Image: "https://avatars.githubusercontent.com/u/110656227?v=4"
  },
  {
    id: "5",
    Name: "Advisor 5",
    Programming_language: "React",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐⭐",
    Image: "https://miro.medium.com/v2/resize:fit:720/0*FtLO5W4Bi5tWDv-8"
  },

  {
    id: "6",
    Name: "Advisor 6",
    Programming_language: "Phyton",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐",
    Image: "https://beadgrup.com/news/wp-content/uploads/2021/02/Gambar-Programmer-Professional.jpg"
  },
  {
    id: "7",
    Name: "Advisor 7",
    Programming_language: "React",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐⭐",
    Image: "https://miro.medium.com/v2/resize:fit:720/0*FtLO5W4Bi5tWDv-8"
  },

  {
    id: "8",
    Name: "Advisor 8",
    Programming_language: "Phyton",
    Native_language: "Spanish",
    Ranking: "⭐⭐⭐⭐",
    Image: "https://beadgrup.com/news/wp-content/uploads/2021/02/Gambar-Programmer-Professional.jpg"
  },

  ]
  return (

    <div className="containerPrincipal">
      <div className="containeMessage">
        <h1>Our Advisors</h1>
        <br></br>
        <p>Let's join our best classes with one advisor</p>
      </div>
      <div className="container">
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
      </div>

    </div>
  )
}

export default Cards;