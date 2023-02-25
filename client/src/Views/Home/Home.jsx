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
import { useAuth } from "../../context/authContext";
import {  useNavigate } from "react-router-dom";
// import { useContext } from 'react';


const Home = () => {

  const {user , logout} = useAuth()
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigBarOpen, setIsConfigBarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfessionals());
  }, [dispatch])

  const toggleConfigBar = () => {
  setIsConfigBarOpen(prevState => !prevState);
  };

  console.log("prueba home")

    const handleSignOut = async (e) => {
      e.preventDefault();
      try {
        await logout();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
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
      <ConfigSideBar isConfigBarOpen={isConfigBarOpen} toggleConfigBar={toggleConfigBar} />

      {/* <div className='fifthPage'>
        <Footer />
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>
      </div> */}
    </div>
  );
};

export default Home;
