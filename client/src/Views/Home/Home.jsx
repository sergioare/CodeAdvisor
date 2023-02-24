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
// import { useAuth } from '../../context/authContext';
// import { useContext } from 'react';
// import Footer from '../Footer/Footer';


const Home = () => {

  // const { user } = useAuth()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigBarOpen, setIsConfigBarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdmin, setIsAdmin] = useState(true);
  const [openAdmin, setOpenAdmin] = useState(false);


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfessionals());
  }, [dispatch])

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
      <Profile openAdmin={openAdmin} toggleAdmin={toggleAdmin} isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} isConfigBarOpen={isConfigBarOpen} closeSideBar={closeSideBar} > </Profile>
      <ConfigSideBar isConfigBarOpen={isConfigBarOpen} toggleConfigBar={toggleConfigBar} toggleProfile={toggleProfile} />
      
      {isAdmin && <Admin openAdmin={openAdmin} toggleAdmin={toggleAdmin} isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} isConfigBarOpen={isConfigBarOpen} closeSideBar={closeSideBar}></Admin>}
    </div>
  );
};

export default Home;
