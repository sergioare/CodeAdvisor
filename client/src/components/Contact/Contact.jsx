import "./Contact.scss"
import contact from "../../assets/contacUs2.png"
// import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Navbar from '../Navbar/Navbar'
import Swal from 'sweetalert2'

const Contact = () => {

  const [input, setInput] = useState({
    email: "",
    fullName: "",
    mensaje: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [property]: value })
  };

  const submitHandler = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3002/contactUs', input)
      .then(res => {
        setInput({
          email: "",
          fullName: "",
          mensaje: "", });
        new Swal("Thanks!", "We will contact you shortly.", "success");
      })
      .catch((error) => {
        new Swal("Sorry!", error.message, "error");
      });
  };

  return (
    <>
      <Navbar />
      <div className="containerPrincipal" >
        <div className="bgpurple">
          <p className="textcontact">Contact Us</p>
          <p> Questions, bug reports, feedback, We are here to help you.</p>
        </div>
        <div className="conteinerContact">
          <div className="contact">
            <form className="formContainer" onSubmit={submitHandler}>
              <label>Full Name</label>
              <input type="text" value={input.fullName} onChange={changeHandler} name="fullName" />
              <label> E-mail</label>
              <input type="text" value={input.email} onChange={changeHandler} name="email" />
              <label> Message</label>
              <input className="MesasgeCont" type="text" value={input.mensaje} onChange={changeHandler} name="mensaje" />
              <button className="button" type="submit">Contact Us</button>
            </form>
            <div className="contactDetail">
              <p><i className="fa-solid fa-phone"></i> 55-3565-9898</p>
              <p><i className="fa-sharp fa-solid fa-envelope"></i> contact@codeadvisor.com</p>
              <p><i className="fa-sharp fa-solid fa-location-dot"></i> 420 Kent Dr, Mountain View, CA 94043, Estados Unidos </p>
            </div>
          </div>
          <img className="img" src={contact} alt="contact" />
        </div>

      </div>
    </>

  )
}
export default Contact;