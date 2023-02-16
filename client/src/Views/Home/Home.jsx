import './Home.scss'
import Cards from "../../components/Cards/Cards"
import { icons } from '../../utils';
 import { useAuth } from '../../context/authContext';
// import { useContext } from 'react';


const Home = () => {

  const {user} = useAuth()
  console.log(user)

  return (
    <div className='home'>

      <Cards />

      <div className='icons'>
        {icons.map((icon, index) => ( 
          <div className='icon'>
            {icon.name}
          </div>
        ))}
      </div>


    </div>
  );
};

export default Home;
