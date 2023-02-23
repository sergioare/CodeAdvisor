import { Routes, Route } from 'react-router-dom';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
// import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
// import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import  Modals  from './components/Modals/Modals';
import AdvisorProfile from './components/Forms/AdvisorProfile/AdvisorProfile';



function App() {
  // const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname === '/home' && <Navbar toggleConfigBar={toggleConfigBar} />}
      {isConfigBarOpen && <ConfigSideBar />}  */}
      
      <div>
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
            <Route path='/technologies' element={<Technologies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/modals' element={<Modals />} />
          <Route path='/profadv' element={<AdvisorProfile />} />
        </Routes>
      </AuthProvider>
      </div>

    </div>
  );
}

export default App;