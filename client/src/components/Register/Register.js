import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Login from "../Login/Login";
import './Register.scss'
import { sendProfileDetails } from "../../handlers/sendProfileDetails";
import { validate } from "../../handlers/validations";

function Register() {

  const [isRegistering, setIsRegistering] = useState(true);
  const { signup , verifyEmail} = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    Nickname:"",
    password2: "",
  });


  const [error, setError] = useState({
    email: "",
    password: "",
    password2: "",
    Nickname:"",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const property = event.target.name            
    const value = event.target.value


    setError(validate({
      ...user, 
      [property]: value}))

    setUser({
      ...user, 
      [property]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    try {
      const UserUid = await signup(user.email, user.password );   // uid  = UserUid.user.uid
      await verifyEmail()
      const data = {Nickname: user.Nickname}
      sendProfileDetails(data, UserUid.user.uid) 

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };


  
  return (

    <>
    {isRegistering?
      <div className="register">
      <form
        onSubmit={handleSubmit}
        >
              <h1>SIGN UP</h1>

       
        <div className="nick">
          <label> Nickname  </label>
          <input
            name="Nickname"
            value={user.Nickname}
            onChange={changeHandler}
            className="input"
            placeholder="Naruto Uzumaki"

          />
          {error.Nickname && 
          <p className='warning'>{error.Nickname}</p>}
        </div>


        <div className="email">
          <label
            htmlFor="email"
            >Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
            className="input"
            placeholder="Email@****.com"
          />
          {error.email && 
          <p className='warning'>{error.email}</p>}
        </div>

        <div className="pass">
          <label
            htmlFor="password"
          >Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
            className="input"
            placeholder="*******"
          />
          {error.password && 
          <p className='warning'>{error.password}</p>}
        </div>

        <div className="pass">
          <label
            htmlFor="password"
          >Verify Password
          </label>
          <input
            type="password"
            name="password2"
            onChange={changeHandler}
            className='input'
            placeholder="*******"
          />
          {error.password2 && 
          <p className='warning'>{error.password2}</p>}
        </div>
        

        <button type="submit" className="btn"> Sign Up </button>
      <p>Already have an Account?  <span onClick={()=> setIsRegistering(!isRegistering)}>Login</span></p>
      </form>
    </div>
        :<Login/>
    }
      
      </>
  );
}


export default Register;
