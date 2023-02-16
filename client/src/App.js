<<<<<<< HEAD
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './context/authContext';

function App() { 
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/home' && <Navbar />}
      
      
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 
        </Routes>
      </AuthProvider>

=======
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';

function App() {
  const location = useLocation();

  const [isConfigBarOpen, setIsConfigBarOpen] = useState(false);

  const toggleConfigBar = () => {
    setIsConfigBarOpen(!isConfigBarOpen);
  };
  return (
    <div className="App">
      {location.pathname === '/home' && <Navbar toggleConfigBar={toggleConfigBar} />}
      {isConfigBarOpen && <ConfigSideBar />}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home toggleConfigBar={toggleConfigBar} isConfigBarOpen={isConfigBarOpen} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/advisors/:id' element={<Detail />} />
      </Routes>
>>>>>>> ade708211bfcec29742ccb751c183e6ed26be972
    </div>
  );
}

export default App;