import './Home.scss'
import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProfessionals } from '../../redux/actions/actions';
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Cards from "../../components/Cards/Cards"
import Testimonials from '../../components/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';
import { useAuth } from '../../context/authContext';
// import { useContext } from 'react';


const Home = () => {

  const {user} = useAuth()
  console.log(user)

 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadProfessionals());
    },[dispatch])

  return (
    <div className='home'>
      <Commercial />
      <SideBar />
      <Cards />
      <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            {icon.name}
          </div>
        ))}
      </div>
      {/* <ConfigSideBar isConfigBarOpen={props.isConfigBarOpen} toggleConfigBar={props.toggleConfigBar} /> */}


    </div>
  );
};

export default Home;
