import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing, Home } from './Views/index';
// import Navbar from './components/Navbar/Navbar';

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Routes>
        {/* {location.pathname === '/home' && <Navbar />} */}
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
