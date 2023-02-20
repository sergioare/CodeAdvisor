import "./Contact.scss"
import contact from "../../assets/contacUs2.png"
import { Link } from "react-router-dom"
const Contact = () => {
    return (
        <div className="containerPrincipal" >

            <div className="bgpurple">
                <p className="textcontact">Contact Us</p>
                <p> Questions, bug reports, feedback, We are here to help you.</p>
            </div>
            <div className="conteinerContact">
                <div className="contact">
                    <form className="formContainer">
                        <label>Full Name</label>
                        <input type="text" />
                        <label> E-mail</label>
                        <input type="text" />
                        <label> Message</label>
                        <input className="MesasgeCont" type="text" />
                        <button className="button">Contact Us</button>
                    </form>
                    <div className="contactDetail">
                        <p><i class="fa-solid fa-phone"></i> 55-3565-9898</p>
                        <p><i class="fa-sharp fa-solid fa-envelope"></i> contact@codeadvisor.com</p>
                        <p><i class="fa-sharp fa-solid fa-location-dot"></i> 420 Kent Dr, Mountain View, CA 94043, Estados Unidos </p>
                    </div>
                </div>
                    <img className="img" src={contact} alt="contact" />
            </div>
            <Link to='/home'><button className="buttonBack">Back Home</button></Link>
        </div>
    )
}
export default Contact;