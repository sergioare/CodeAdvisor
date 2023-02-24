import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Login from "../Login/Login";
import './Register.scss'



function Register() {

  const [isRegistering, setIsRegistering] = useState(true);
  const { signup } = useAuth();


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
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

        <div className="email">
          <label
            htmlFor="email"
            >Email</label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="input"
            placeholder="Email@****.com"
          />
        </div>

        <div className="pass">
          <label
            htmlFor="password"
          >Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className='input'
            placeholder="*******"
          />
        </div>

        <div className="pass">
          <label
            htmlFor="password"
          >Verify Password
          </label>
          <input
            type="password"
            className='input'
            placeholder="*******"
          />
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
