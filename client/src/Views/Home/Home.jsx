import './Home.scss'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProfessionals } from '../../redux/actions/actions';
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Cards from "../../components/Cards/Cards"
import Testimonials from '../../components/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Profile/Profile';
import Admin from '../../components/Admin/Admin';
import { useAuth } from "../../context/authContext";
import {  useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer'
// import { useContext } from 'react';

const Home = () => {

  const {user , logout} = useAuth()
  const navigate = useNavigate();  
  const [currentPage, setCurrentPage] = useState(1);
  //Estado de admin. No se si será necesario o vendra despues de otro lado.
  const [isAdmin, setIsAdmin] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigBarOpen, setIsConfigBarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [openAdmin, setOpenAdmin] = useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfessionals());
  }, [dispatch])
  
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleConfigBar = () => {
  setIsConfigBarOpen(prevState => !prevState);
  };
  
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(prevState => !prevState);
  };

  const toggleAdmin = () => {
    setOpenAdmin(!openAdmin);
  };

    

  return (
    <div className='home'>
      <Navbar toggleConfigBar={toggleConfigBar}/>
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setCurrentPage={setCurrentPage}/>
      <Commercial isSidebarOpen={isSidebarOpen}/>
      <Cards isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            {icon.name}
          </div>
        ))}
      </div>
      <Footer/>
      <Profile  isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} isConfigBarOpen={isConfigBarOpen}> </Profile>
      <ConfigSideBar isAdmin={isAdmin} isSidebarOpen={isSidebarOpen} isConfigBarOpen={isConfigBarOpen} toggleConfigBar={toggleConfigBar} toggleProfile={toggleProfile} openAdmin={openAdmin} toggleAdmin={toggleAdmin} closeSideBar={closeSideBar}/>
      
      {isAdmin && <Admin openAdmin={openAdmin} toggleAdmin={toggleAdmin} isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} isConfigBarOpen={isConfigBarOpen} closeSideBar={closeSideBar}></Admin>}
    </div>
  );
};

export default Home;
