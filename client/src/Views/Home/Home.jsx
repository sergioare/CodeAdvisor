import './Home.scss'
import Cards from "../../components/Cards/Cards"
<<<<<<< HEAD
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
=======
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Testimonials  from '../../components/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';

const Home = (props) => {
  return (
    <div className='home'>
      <Commercial />     
      <SideBar/>
      <Cards />
      <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
>>>>>>> ade708211bfcec29742ccb751c183e6ed26be972
            {icon.name}
          </div>
        ))}
      </div>
<<<<<<< HEAD
=======
      <ConfigSideBar isConfigBarOpen={props.isConfigBarOpen} toggleConfigBar={props.toggleConfigBar}/>
>>>>>>> ade708211bfcec29742ccb751c183e6ed26be972


    </div>
  );
};

export default Home;
