import './Landing.scss'
import Navbar from '../../../components/Navbar/Navbar';
import { images, textLanding } from './data';
import { icons } from '../../../Utils/utils';
import { navbarLanding } from "./data";
import { Link } from 'react-router-dom';

const PreLanding = () => {
  return (
    <div className='landing'>

      <div className='navbar'>
      <div className='navLeft'>
        <Link to='/' className='link' >
          <i className="fa-solid fa-house-laptop"></i>
          CodeAdvisor
        </Link>
      </div>
      <div className='navRight'>
        {navbarLanding.map((item, index) => {
          return <Link to={item.path} key={index}><div key={index}>{item.name}</div></Link>
        })}
      </div>
    </div>



      <div className='leftSide'>
         <div className="slider">
        {images.map((image, index) => (
          <span><img
            src={image.src}
            alt={image.alt}
            key={index}
          />
          </span>
        ))}

         </div>
       
      </div>

      <div className='rightSide'>
        <h1>{textLanding.h1}</h1>
        <p>{textLanding.p1}</p>
      </div>

      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            {icon.name}
          </div>
        ))}
      </div>

    </div>
  );
};

export default PreLanding;