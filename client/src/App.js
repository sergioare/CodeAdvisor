import { Routes, Route } from 'react-router-dom';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./Views/AboutUs/AboutUs"
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Upload from './components/Upload/upload';
import Payment from './components/Payment/Payment';
import { Reviews } from './components/Reviews/Reviews';
import Faqs from './Views/Faqs/Faqs'



function App() {
  // const location = useLocation();
  return (

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
          <Route path='/payment/:id' element={<Payment/>} />
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/faqs' element={<Faqs/>}/>
        </Routes>
      </AuthProvider>
     
  );
}

export default App;
