import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';
import { useState } from 'react';

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
        <Route path='/home' element={<Home isConfigBarOpen={isConfigBarOpen} toggleConfigBar={toggleConfigBar}/>} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
