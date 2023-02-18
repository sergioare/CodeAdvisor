
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';



function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname === '/home' && <Navbar toggleConfigBar={toggleConfigBar} />}
      {isConfigBarOpen && <ConfigSideBar />}  */}
      
      <div className="bg-slate-300 text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          
          <Route path='/about' element={<AboutUs />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path='/home' element={<Home />} />
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/user/:id' element={<Detail/>} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AuthProvider>
      </div>

    </div>
  );
}

export default App;