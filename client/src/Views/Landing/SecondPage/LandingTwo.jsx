import { textLandingTwo } from "./data";
import './LandingTwo.scss'

const LandingTwo = () => {
    return (
        <div className='landingTwo'>
            <div className='text'>
                <h1>{textLandingTwo.h1}</h1>
                <p>{textLandingTwo.p1}</p>
            </div>
            
            <div>
                AQUI VAN LAS CARDS
            </div>
        </div>
    );
};

export default LandingTwo;