import PreLanding from "./FirstPage/PreLanding";
import LandingFourth from "./FourthPage/LandingFourth";
import LandingTwo from "./SecondPage/LandingTwo";
import LandingThree from "./ThirdPage/LandingThree";
import Testimonials from '../../components/Testimonials/Testimonials'

const Landing = () => {
    return (
        <div>
            <PreLanding/>
            <LandingTwo/>
            <LandingThree/>
            <LandingFourth/>
            <Testimonials/>
        </div>
    );
};

export default Landing;