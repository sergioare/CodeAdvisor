import './Navbar.scss'
import { navbarItems } from './data';
import Searchbar from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
           <div className='navLeft'>
           <i className="fa-solid fa-house-laptop"></i>
            CodeAdvisor 
           </div> 
            <div className='navRight'>
                    {navbarItems.map((item, index)=>{
                        return <Link to={item.path} ><div key={index}>{item.name}</div></Link>
                    })}
                    <Searchbar/>
            </div>
        </div>
    );
};

export default Navbar;