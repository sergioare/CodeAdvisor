import PreLanding from "./FirstPage/PreLanding";
import LandingFourth from "./FourthPage/LandingFourth";
import LandingTwo from "./SecondPage/LandingTwo";
import LandingThree from "./ThirdPage/LandingThree";

const Landing = () => {
    return (
        <div>
            <PreLanding/>
            <LandingTwo/>
            <LandingThree/>
            <LandingFourth/>
        </div>
    );
};

export default Landing;