
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() { 
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/home' && <Navbar />}
      
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
        </Routes>
      </AuthProvider>
      </div>

    </div>
  );
}

export default App;