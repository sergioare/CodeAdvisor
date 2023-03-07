import Navbar from "../Navbar/Navbar";
import "./Courses.scss"
import notFound from "../../assets/Page_in_Mante.png"


const Courses = () => {
    return (
        <div>
            <Navbar />
            <div className="imgConteiner">
                <img className="imgNotFound" src={notFound} alt="notFound" />
                </div>
        </div>
    )
}

export default Courses;