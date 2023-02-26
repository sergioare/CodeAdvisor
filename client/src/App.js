import { Routes, Route } from 'react-router-dom';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Upload from './components/Upload/upload';
import AdvisorProfile from './components/Forms/AdvisorProfile/AdvisorProfile';
import Payment from './components/Payment/Payment';
import { Reviews } from './components/Reviews/Reviews';



function App() {
  // const location = useLocation();
  return (

    
    <div className="bg-slate-300 text-black h-screen flex text-white" align = 'center'>
     
      
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Landing />} /> 
          <Route path='/about' element={<AboutUs />} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/user/:id' element={<Detail/>} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/1' element={
            //  This route works only if we have a user logged, if not, it redirect to Login component
            // info available ONLY FOR USERS 
          <ProtectedRoute>
          <div>
            <h1>ONLY FOR LOGGED USER </h1>
          </div>
          </ProtectedRoute>

           } />
          <Route path='/profadv' element={<AdvisorProfile />} />
          <Route path='/payment/:id' element={<Payment/>} />
          <Route path='/reviews' element={<Reviews/>}/>
        </Routes>
      </AuthProvider>
      </div>

  
  );
}

export default App;
