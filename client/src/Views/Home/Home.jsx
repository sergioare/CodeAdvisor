import './Home.scss'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProfessionals } from '../../redux/actions/actions';
import { icons } from '../../Utils/utils';
import { Commercial } from '../../components/Commercial/Commercial';
import Cards from "../../components/Cards/Cards"
import Testimonials from '../../components/Testimonials/Testimonials';
import SideBar from '../../components/SideBar/SideBar';
// import ConfigSideBar from '../../components/ConfigSideBar/ConfigSideBar';
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/authContext';
// import { useContext } from 'react';
// import Footer from '../Footer/Footer';


const Home = () => {

  const { user } = useAuth()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfessionals());
  }, [dispatch])

  return (
    <div className='home'>
      <Navbar />
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
      {/* <ConfigSideBar isConfigBarOpen={props.isConfigBarOpen} toggleConfigBar={props.toggleConfigBar} /> */}

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
