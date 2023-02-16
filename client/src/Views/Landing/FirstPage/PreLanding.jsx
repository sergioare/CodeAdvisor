import './Landing.scss'
import Navbar from '../../../components/Navbar/Navbar';
import { images, textLanding } from './data';
import { icons } from '../../../Utils/utils';

const PreLanding = () => {
    return (
        <div className='landing'>
          <div className='navbarLanding'>
            <Navbar/>
          </div>
          
          <div className='leftSide'>
            {images.map((image, index)=>(
              <img 
                src={image.src}
                alt={image.alt}
                key={index}
              />
            ))}
          </div>     

          <div className='rightSide'>
            <h1>{textLanding.h1}</h1>
            <p>{textLanding.p1}</p>
          </div>
          
            <div className='icons'>
            {icons.map((icon, index)=>(
              <div className='icon' key={index}>
                {icon.name}
                </div>
            ))}
            </div>

        </div>
    );
};

export default PreLanding;