import './Home.scss'
import Cards from "../../components/Cards/Cards"

 import { useAuth } from '../../context/authContext';
// import { useContext } from 'react';


const Home = () => {

  const {user} = useAuth()
  console.log(user)

  return (
    <div className='home'>


    </div>
  );
};

export default Home;
