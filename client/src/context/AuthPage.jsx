import { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from '../components/Register/Register'
import { AuthContext } from "./AuthContext";
import './AuthPage.scss'

const AuthPage = () => {
    const [step, setStep] = useState(true);
    const {currentUser} = useContext(AuthContext)
    const handleSeterAuth = ()=>{
        setStep(!step)
    };
    const navigate = useNavigate();
    useEffect(()=>{
        currentUser && navigate("/home")
    },[]);

    return (
        <div>
            {step?(
                <Login handleSeterAuth={handleSeterAuth}/>
            ):(
                <Register handleSeterAuth={handleSeterAuth}/>
            )}
        </div>
    );
};

export default AuthPage;