import { images, textThirdLanding } from './data';
import './LandingThree.scss';

const LandingThree = () => {
    return (
        <div className='landingThree'>
            <div className='leftSide'>
                <img src={images[0].src} className='image1' alt={images[0].alt}/>
                <img src={images[1].src} className='image2' alt={images[1].alt}/>
                <img src={images[2].src} className='image3' alt={images[2].alt}/>
                <img src={images[3].src} className='image4' alt={images[3].alt}/>
                <img src={images[4].src} className='image5' alt={images[4].alt}/>
                <img src={images[5].src} className='image6' alt={images[5].alt}/>
                <img src={images[6].src} className='image7' alt={images[6].alt}/>

                    <i className="fa-solid fa-house-laptop"></i>
                    CodeA.
                    

            </div>

            <div className='rightSide'>
                <h1>Benifits from our online learning</h1>
                    {textThirdLanding.map((benefit,index)=>{
                        return(
                    <div key={index} className='benefits'>
                        <div className='left'>
                            {benefit.icon}
                        </div>
                        
                        <div className='right'>
                            <h2>{benefit.h2}</h2>
                            <p>{benefit.p}</p>                    
                        </div>
                    </div>
                    )})}
            </div>
        </div>
    );
};

export default LandingThree;