import './Landing.scss'
import Navbar from '../../components/Navbar/Navbar';
import { images, textLanding, icons } from './data';


const Landing = () => {
    return (
        <div className='landing'>
          <div className='navbar'>
            <Navbar/>
          </div>

          <div className='leftSide'>
            <h1>{textLanding.h1}</h1>
            <p>{textLanding.p1}</p>
            <div className='icons'>
            {icons.map((icon, index)=>(
              <div className='icon'>
                {icon.name}
                </div>
            ))}
            </div>
          </div>

          <div className='rightSide'>
            {images.map((image, index)=>(
              <img 
                src={image.src}
                alt={image.alt}
                key={index}
              />
            ))}
          </div>  

<div>  

  
</div>
      
        </div>
    );
};

export default Landing;