
import { Routes, Route, useLocation, Outlet, Navigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthContext } from './context/AuthContext';
import AuthPage from './context/AuthPage'

function App() {
  const location = useLocation();

  const [isConfigBarOpen, setIsConfigBarOpen] = useState(false);

  const toggleConfigBar = () => {
    setIsConfigBarOpen(!isConfigBarOpen);
  };

  const {currentUser} =useContext(AuthContext)
  const RequireAuth =()=>{
    return currentUser? <Outlet/> : <Navigate to='/login'/>
  }
  return (
    <div className="App">
      {location.pathname === '/home' && <Navbar toggleConfigBar={toggleConfigBar} />}
      {isConfigBarOpen && <ConfigSideBar />}
      
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/home' element={<Home toggleConfigBar={toggleConfigBar} isConfigBarOpen={isConfigBarOpen} />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/advisors/:id' element={<Detail />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 
        </Routes>
      

    </div>
  );
}

export default App;