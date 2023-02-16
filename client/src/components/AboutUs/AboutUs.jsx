import { infoUs } from "./data"
import "./AboutUs.scss"
import Navbar from "../Navbar/Navbar"
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const AboutUs = () => {

    return (
<div>
{/* <div className='codeLogo'>
        <i className="fa-solid fa-house-laptop"></i>
        CodeAdvisor
      </div> */}
<Navbar/>

            <div className="containerAbout"> 
          
                <h1 className="title">About Us</h1>
                <h2 className="subtitle"> We create this platform seeks to facilitate access to online software advisors as well as contact with Freelance programmers.</h2>
        <div className="aboutConten">
            {infoUs.map((i) => {
                return <div className="cardCont">
                    <img className="image" src={i.img} alt="developer" />
                    <div className="text"> 
                    <p className="name">{i.name}</p> <p className="ocupation">{i.ocupation}</p> <p className="about">{i.about}</p>  
                    <div className="iconsCont"> <span className="color"> {i.linkedin} </span>  <span> {i.gitHub}  </span> <span>{i.email}</span>  </div>
                    {/* <p>{i.phone}</p> */}
                    </div>
                </div>
            })}
        </div>

        <div className="tools"> 
        <h3>Used tools</h3>
        <div className="containertools" >    
      <img className="logoReact" src="https://miro.medium.com/max/800/1*meCFnZ5MK_7Fu1ogYfBvNQ.png" alt="reactredux"/>
      <img className="logoSql" src="https://www.pngkey.com/png/full/466-4667821_postgres-logo.png" alt="sql"/>
      <img className="logo" src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-standard.png?hl=es-419" alt="fire"/>
      <img className="logoSql" src="https://pbs.twimg.com/profile_images/1491038861224517637/s-H1KgWO_400x400.png" alt="fire"/>

        </div>
        </div>

        </div>  
        </div>  








    )
}
export default AboutUs;




    