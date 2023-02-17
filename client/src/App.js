import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
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
        <Route path='/user/:id' element={<Detail />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;