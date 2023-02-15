import './Home.scss'
import Cards from "../../components/Cards/Cards"
import { icons } from '../../utils';

const Home = () => {
    return (
        <div className='home'>
        
               <Cards />

           <div className='icons'>
            {icons.map((icon, index)=>(
              <div className='icon'>
                {icon.name}
                </div>
            ))}
            </div>
                    
      
        </div>
    );
};

export default Home;
