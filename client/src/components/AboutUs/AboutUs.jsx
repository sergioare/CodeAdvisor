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
                                        <span className="color"> <a href={i.linkedin}><i className="fa-brands fa-linkedin"></i></a> </span>
                                        <span> <a href={i.gitHub} > <i className="fa-brands fa-github"></i> </a>  </span>
                                        <span><a href={i.email} > <i className="fa-regular fa-envelope"></i> </a></span>

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
                            <img className="logo" src="data:image/png;base64,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" alt="FoalTS " />
                            <img className="logo" src="data:image/png;base64,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" alt="typeORM " />
                            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" alt="vercel" />
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



