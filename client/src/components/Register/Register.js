import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { sendProfileDetails } from "../../handlers/sendProfileDetails";
import { validate } from "../../handlers/validations";
import './Register.css'




function Register() {

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
    <div className="w-full max-w-xs m-auto text-black">
     

      <h1>Register</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >

        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >Nickname
          </label>
          <input
            name="Nickname"
            value={user.Nickname}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {error.Nickname && 
          <p className='warning'>{error.Nickname}</p>}
        </div>


        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
          {error.email && 
          <p className='warning'>{error.email}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
          {error.password && 
          <p className='warning'>{error.password}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
          {error.password2 && 
          <p className='warning'>{error.password2}</p>}
        </div>

        <button id='submitButton'>
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}


export default Register;

