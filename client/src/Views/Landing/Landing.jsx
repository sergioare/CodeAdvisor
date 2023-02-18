import PreLanding from "./FirstPage/PreLanding";
import LandingFourth from "./FourthPage/LandingFourth";
import LandingTwo from "./SecondPage/LandingTwo";
import LandingThree from "./ThirdPage/LandingThree";
import Testimonials from '../../components/Testimonials/Testimonials'
import FifthPage from "./FifthPage/FifthPage";

const Landing = () => {
    return (
        <div>  
            <PreLanding/>
            <LandingTwo/>
            <LandingThree/>
            <LandingFourth/>
            <Testimonials/>
            <FifthPage/>
            
        </div>
    );
};

export default Landing;