import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/home' && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/advisors/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;