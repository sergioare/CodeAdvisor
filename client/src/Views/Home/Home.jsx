import './Home.scss'
import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProfessionals } from '../../redux/actions/actions';
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Cards from "../../components/Cards/Cards"
import Testimonials from '../../components/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/authContext';
// import { useContext } from 'react';


const Home = () => {

  const {user} = useAuth()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigBarOpen, setIsConfigBarOpen] = useState(false)


 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadProfessionals());
    },[dispatch])

  const toggleConfigBar = () => {
  setIsConfigBarOpen(prevState => !prevState);
  };


  return (
    <div className='home'>
      <Navbar toggleConfigBar={toggleConfigBar}/>
      <Commercial />
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Cards isSidebarOpen={isSidebarOpen} />
      <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            {icon.name}
          </div>
        ))}
      </div>
      <ConfigSideBar isConfigBarOpen={isConfigBarOpen} toggleConfigBar={toggleConfigBar} />


    </div>
  );
};

export default Home;
