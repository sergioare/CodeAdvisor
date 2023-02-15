import './Home.scss'
import Navbar from '../../components/Navbar/Navbar';
import Cards from "../../components/Cards/Cards"
import { icons } from '../../utils';

const Home = () => {
    return (
        <div className='home'>
          <div className='navbarHome'>
            <Navbar/>
          </div>

           <div className='icons'>
            {icons.map((icon, index)=>(
              <div className='icon'>
                {icon.name}
                </div>
            ))}
            </div>
                    
          <Cards />
      
        </div>
    );
};

export default Home;