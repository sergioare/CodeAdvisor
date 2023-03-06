import { textLandingFourth } from './data';
import './LandingFourth.scss'
import image from '../../../assets/profesor.png'
import Swal from 'sweetalert2'
import { getAuth } from 'firebase/auth';

const LandingFourth = () => {
    
    const auth = getAuth()
    const currentUser = auth.currentUser;
    const id = currentUser? currentUser.uid : null
    

    

    const showAlert = ()=>{
        Swal.fire({
        title: "Please, Login to continue with process",
        icon: "warning",
        footer: "<b>You will be the best advisor</b>",
        timer: 3000,
    })
    }
    const handleAdvisor = ()=>{
        id
        ? console.log(id)
        : showAlert()

    }

    return (
        <div className="landingFourth">
            <div className="leftSide">
                <div className="text">
                    <h1>{textLandingFourth.h1}</h1>
                    <p>{textLandingFourth.p1}</p>
                    <p>{textLandingFourth.p2}</p>
                    <button className='btn' onClick={handleAdvisor}>{textLandingFourth.btn}</button>
                </div>
            </div>
            <div className="rightSide">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="circle6"></div>
                <img src={image} alt='Professor'/>
            </div>
        </div>
    );
};

export default LandingFourth;