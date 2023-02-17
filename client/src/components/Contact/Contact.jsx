import Navbar from "../Navbar/Navbar";
import "./Contact.scss"
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="conteinerContact">
            <div className="contact">
                <p className="textcontact">Contact Us:</p>
                <p><i class="fa-solid fa-phone"></i> 55-3565-9898</p>
                <p><i class="fa-sharp fa-solid fa-envelope"></i> contact@codeadvisor.com</p>
                <p><i class="fa-sharp fa-solid fa-location-dot"></i> 420 Kent Dr, Mountain View, CA 94043, Estados Unidos </p>
            </div>
            </div>
        </div>
    )
}
export default Contact;