import "./AboutUs.scss"
import Navbar from "../Navbar/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAutors } from "../../redux/actions/actions"


const AboutUs = () => {

    const dispatch = useDispatch();
    const autores = useSelector(state => state.autors)

    useEffect(() => {  
        dispatch(getAutors())
    }, [dispatch])

    console.log(getAutors());
    return (
        <>

            <Navbar />

            <div className="containerAbout">
                <h1 className="title">About Us</h1>
                <h2 className="subtitle"> We created this platform seeking to facilitate access to online software advisors as well as contact with Freelance developers.</h2>
                <div className="aboutConten">
                    {autores.map((i, index) => {
                        return (
                            
                            <div key={index} className="cardCont">
                                <img className="image" src={i.img} alt="developer" />

                                <div className="text">

                                    <p className="name">{i.name}</p>
                                    <p className="ocupation">{(i.ocupation.toString())}</p>
                                    <p className="about">{i.about}</p>
                                    <div className="iconsCont">
                                        <span className="color"> <a href={i.linkedin}><i class="fa-brands fa-linkedin"></i></a> </span>
                                        <span> <a href={i.gitHub} > <i class="fa-brands fa-github"></i> </a>  </span>
                                        <span><a href={i.email} > <i class="fa-regular fa-envelope"></i> </a></span>

                                    </div>
                                    {/* <p>{i.phone}</p> */}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="toolsContainer">
                    <div className="tools">
                        <h3>Used tools</h3>
                        <div className="containertools" >
                            <img className="logoReact" src="https://miro.medium.com/max/800/1*meCFnZ5MK_7Fu1ogYfBvNQ.png" alt="reactredux" />
                            <img className="logoSql" src="https://www.pngkey.com/png/full/466-4667821_postgres-logo.png" alt="sql" />
                            <img className="logo" src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-standard.png?hl=es-419" alt="fire" />
                            <img className="logoSql" src="https://pbs.twimg.com/profile_images/1491038861224517637/s-H1KgWO_400x400.png" alt="fire" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default AboutUs;



