import './Home.scss'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProfessionals } from '../../redux/actions/actions';
import { icons } from '../../Utils/utils';
import { Commercial } from '../../Views/Commercial/Commercial';
import Cards from "../../components/Cards/Cards"
import Testimonials from '../../Views/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Profile/Profile';
import Admin from '../../components/Admin/Admin';
import { useAuth } from "../../context/authContext";
import {  Link, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer'
// import { useContext } from 'react';
import { Video } from '../../Video/Video';

const Home = () => {

  const { user, logout } = useAuth()
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
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
      <Navbar toggleConfigBar={toggleConfigBar} />
      {/* <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setCurrentPage={setCurrentPage} />
      <Commercial isSidebarOpen={isSidebarOpen} />
      <div className={`contSecctionVideo ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className='ContVideoPlayer'>
          <Video/>
        </div>
        <div className={`ContTextVideoplay ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <h3>Have you ever wondered how to write a web page?</h3>
          <p>There are many different programming languages ​​that allow us to create our web pages. Here we show you what they are and you can also choose who will teach you the programming language that interests you the most.</p>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </div> */}
      <Cards isSidebarOpen={isSidebarOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* <Testimonials />
      <div className='icons'>
        {icons.map((icon, index) => (
          <div className='icon' key={index}>
            <Link to={icon.path} className='icon'>
            {icon.name}
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
      <Profile  isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} isConfigBarOpen={isConfigBarOpen}> </Profile> */}
      <ConfigSideBar isAdmin={isAdmin} isSidebarOpen={isSidebarOpen} isConfigBarOpen={isConfigBarOpen} toggleConfigBar={toggleConfigBar} toggleProfile={toggleProfile} openAdmin={openAdmin} toggleAdmin={toggleAdmin} closeSideBar={closeSideBar} isProfileOpen={isProfileOpen}/>
      
      {isAdmin && <Admin openAdmin={openAdmin} toggleAdmin={toggleAdmin} isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} isConfigBarOpen={isConfigBarOpen} closeSideBar={closeSideBar}></Admin>}
    </div>
  );
};

export default Home;
