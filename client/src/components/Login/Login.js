import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Alert } from "../Alert/Alert";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.scss'


const Login = () => {

    const [user, setUser] = useState({ 
        email: "",
        password: "",
      });

   
      // const { login, loginWithGoogle, resetPassword , logout} = useAuth();
      const { login, resetPassword , logout} = useAuth();
      const [error, setError] = useState("");
      const navigate = useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await login(user.email, user.password);
          navigate("/");
        } catch (error) {
          setError(error.message);
        }
      };

      const handleSignOut = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await logout();
          navigate("/");
        } catch (error) {
          setError(error.message);
        }
      };
    
      const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });
    
      // const handleGoogleSignin = async () => {
      //   try {
      //     await loginWithGoogle();
      //     navigate("/");
      //   } catch (error) {
      //     setError(error.message);
      //   }
      // };
    
      const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
          await resetPassword(user.email);
          setError('We sent you an email. Check your inbox')
        } catch (error) {
          setError(error.message);
        }
      };

    return (
        
        <div className='login'>
          <form
            onSubmit={handleSubmit}
            >
              <h1>LOGIN</h1>
            <div className='email'>
              <label
                htmlFor="email"
                >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className='input'
                placeholder="Email@****.com"
              />
            </div>
            <div className="pass">
              <label
                htmlFor="password"
                
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className='input'
                placeholder="*******"
              />
            </div>
         

              {/* <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#!"
                onClick={handleResetPassword}
              > */}
              <div className='forgot'>
                Forgot Password?
              </div>
              {/* </a> */}
          
              <button type="submit" className="btn"> LOGIN </button>
              <p>Don’t have an account? Sign Up</p> 
              <span>OR</span>
              <hr/>
              <div className="icons">

              <button className='icon'>{<FacebookIcon/>}</button>
              <button className='icon'>{<GitHubIcon/>}</button>
              <button className='icon'>{<GoogleIcon/>}</button>
              </div>
          </form>
   
      </div>
      
    )
}
export default Login;