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

    </div>
  );
}

export default App;