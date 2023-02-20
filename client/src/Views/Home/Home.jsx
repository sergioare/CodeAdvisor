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
import { useAuth } from "../../context/authContext";
// import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const { user, logout} = useAuth();
  const navigate = useNavigate();
  console.log(user);

 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadProfessionals());
    },[dispatch])

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
      {//  User contains info about the user, only if logged shows Sidebar and logged, 
      //   if not, shows Commercial components, modify as much as needed
      user==null ? 
      <>
      <Commercial /> 
      </>: 
      <>
      <SideBar />
      <h1 className='logged'>User Logged</h1>
      <button onClick={handleSignOut}>Log Out</button>
      </>
      } 
      
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
