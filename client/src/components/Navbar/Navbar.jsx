import './Navbar.scss'
import { navbarItems } from './data';
import Searchbar from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { toggleConfigBar } = props;

  return (
    <div className='navbar'>
      <div className='navLeft'>
      <Link to='/' className='linkLogo' >
        <i className="fa-solid fa-house-laptop"></i>
        CodeAdvisor
      </Link>
      </div>
      <div className='navRight'>
        {navbarItems.map((item, index) => {
          return <Link to={item.path} key={index}><div key={index}>{item.name}</div></Link>
        })}
        <Searchbar />
        <i className="config-icon fas fa-cogs" onClick={toggleConfigBar}></i>
      </div>
    </div>
  );
};

export default Navbar;
